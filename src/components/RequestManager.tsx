"use client";
import { useEffect, useState } from "react";
import { RequestTable } from "./RequestsTable";
import { getData } from "@/store/getData";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export const RequestManager = () => {
  const [request, setRequest] = useState<any[]>([]);

  const router = useRouter();

  useEffect(() => {
    const stored = getData();
    setRequest(stored);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-subtle p-4 md:p-8">
      <div className="max-w-7xl mx-auto animate-fade-in">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4 animate-slide-up">
            📋 Solicitudes de Equipos
          </h1>
          <p className="text-muted-foreground text-lg animate-slide-up delay-200">
            Gestiona todas las solicitudes de equipos del equipo
          </p>
        </div>

        <div className="flex justify-end items-center mb-6 animate-slide-up delay-300">
          <Button
            onClick={() => router.push("/form")}
            className="bg-black cursor-pointer hover:opacity-90 text-white shadow-elegant animate-bounce-gentle"
          >
            <Plus className="mr-2 h-4 w-4" />
            Nueva Solicitud
          </Button>
        </div>
        <RequestTable requests={request} />
      </div>
    </div>
  );
};
