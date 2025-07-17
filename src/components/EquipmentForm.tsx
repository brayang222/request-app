import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
  onSubmit: (data: any) => void;
}

const EquipmentForm = ({ onSubmit }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    equipment: "",
    justification: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    console.log("Form submitted:", formData);
    // setFormData({ name: "", position: "", equipment: "", justification: "" });
  };

  return (
    <section className="min-h-screen bg-gradient-background flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in bg-card shadow-elegant rounded-2xl p-8 space-y-6 border border-border/50 backdrop-blur-sm">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Solicitud de Equipo
          </h2>
          <p className="text-muted-foreground">
            Complete el formulario para solicitar su equipo
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div
            className="space-y-2 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-foreground"
            >
              Nombre *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 hover:shadow-soft"
              placeholder="Ingrese su nombre completo"
              required
            />
          </div>

          <div
            className="space-y-2 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <label
              htmlFor="position"
              className="block text-sm font-semibold text-foreground"
            >
              Cargo *
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 hover:shadow-soft"
              placeholder="Ingrese su cargo o posición"
              required
            />
          </div>

          <div
            className="space-y-2 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <label
              htmlFor="equipment"
              className="block text-sm font-semibold text-foreground"
            >
              Equipo Solicitado *
            </label>
            <div className="relative">
              <select
                id="equipment"
                name="equipment"
                value={formData.equipment}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 hover:shadow-soft appearance-none cursor-pointer"
                required
              >
                <option value="" disabled>
                  Seleccione un equipo
                </option>
                {["⌨️ Teclado", "🖥️ Monitor", "💻 Portátil", "🖱️ Ratón"].map(
                  (option) => {
                    const value = option.replace(/^[^\w]+ /, "");
                    return (
                      <option key={value} value={value}>
                        {option}
                      </option>
                    );
                  }
                )}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown />
              </div>
            </div>
          </div>

          <div
            className="space-y-2 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <label
              htmlFor="justification"
              className="block text-sm font-semibold text-foreground"
            >
              Justificación *
            </label>
            <textarea
              id="justification"
              name="justification"
              value={formData.justification}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none transition-all duration-200 hover:shadow-soft"
              placeholder="Explique detalladamente por qué necesita este equipo y cómo lo utilizará en sus funciones laborales..."
              required
            />
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <button
              type="submit"
              className="cursor-pointer bg-black w-full bg-gradient-primary text-primary-foreground py-3 px-6 rounded-xl font-semibold shadow-elegant hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              📩 Enviar Solicitud
            </button>
          </div>
        </form>

        <div
          className="text-center text-xs text-muted-foreground animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p>Todos los campos son obligatorios</p>
        </div>
      </div>
    </section>
  );
};

export default EquipmentForm;
