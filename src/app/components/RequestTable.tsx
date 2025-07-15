interface Props {
  solicitudes: any[];
}

export const RequestTable = ({ solicitudes }: Props) => {
  if (!solicitudes.length) return <p>No hay solicitudes aún.</p>;
  return (
    <table className="w-full table-auto border-collapse">
      <thead>
        <tr>
          {["Nombre", "Cargo", "Herramienta", "Justificación", "Fecha"].map(
            (h) => (
              <th key={h} className="border px-2 py-1">
                {h}
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {solicitudes.map((s, i) => (
          <tr key={i} className="odd:bg-gray-50">
            <td className="border px-2 py-1">{s.nombre}</td>
            <td className="border px-2 py-1">{s.cargo}</td>
            <td className="border px-2 py-1">{s.herramienta}</td>
            <td className="border px-2 py-1">{s.justificacion}</td>
            <td className="border px-2 py-1">
              {new Date(s.fecha).toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
