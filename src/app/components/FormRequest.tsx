import { useState } from "react";

interface Props {
  onSubmit: (data: any) => void;
}

export const FormRequest = ({ onSubmit }: Props) => {
  const [form, setForm] = useState({
    nombre: "",
    cargo: "",
    herramienta: "",
    justificacion: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.herramienta) return;
    onSubmit(form);
    setForm({ nombre: "", cargo: "", herramienta: "", justificacion: "" });
  };

  return (
    <form onSubmit={submit} className="space-y-4 mb-6">
      {["nombre", "cargo", "justificacion"].map((field) => (
        <div key={field}>
          <label className="block text-sm font-medium capitalize">
            {field}
          </label>
          {field === "justificacion" ? (
            <textarea
              value={(form as any)[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              className="mt-1 block w-full border rounded p-2"
            />
          ) : (
            <input
              value={(form as any)[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              className="mt-1 block w-full border rounded p-2"
              type="text"
            />
          )}
        </div>
      ))}
      <div>
        <label className="block text-sm font-medium">Herramienta</label>
        <select
          value={form.herramienta}
          onChange={(e) => setForm({ ...form, herramienta: e.target.value })}
          className="mt-1 block w-full border rounded p-2"
        >
          <option value="">Seleccione...</option>
          {["Teclado", "Monitor", "Portátil", "Ratón"].map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Enviar
      </button>
    </form>
  );
};
