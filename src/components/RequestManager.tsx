"use client";
import { useState } from "react";
import { TableDemo } from "./RequestsTable";
import EquipmentForm from "./EquipmentForm";
import { formatDate } from "../utils/formatDate";

export const RequestManager = () => {
  const [request, setRequest] = useState<any[]>([]);

  const handleNew = (data: any) => {
    setRequest([...request, { ...data, date: formatDate(new Date()) }]);
  };
  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">Solicitudes de Herramientas</h1>
      {/* <FormRequest onSubmit={handleNew} /> */}
      <EquipmentForm onSubmit={handleNew} />
      <TableDemo requests={request} />
      {/* <RequestTable solicitudes={request} /> */}
    </main>
  );
};
