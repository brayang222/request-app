"use client";
import { useState } from "react";
import { FormRequest } from "./FormRequest";
import { RequestTable } from "./RequestTable";

export const RequestManager = () => {
  const [solicitudes, setSolicitudes] = useState<any[]>([]);

  const handleNew = (data: any) => {
    setSolicitudes([
      ...solicitudes,
      { ...data, fecha: new Date().toISOString() },
    ]);
  };
  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Solicitudes de Herramientas</h1>
      <FormRequest onSubmit={handleNew} />
      <RequestTable solicitudes={solicitudes} />
    </main>
  );
};
