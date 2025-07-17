import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Request } from "../types/request";
import { Inbox, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface Props {
  requests: Request[];
}

export function RequestTable({ requests }: Props) {
  const router = useRouter();

  return (
    <Table className="border-2 border-black mt-8">
      {requests.length > 0 ? (
        <>
          <TableCaption>Lista de solicitudes de herramientas.</TableCaption>
          <TableHeader>
            <TableRow className="*:font-bold">
              <TableHead className="w-[100px]">Nombre</TableHead>
              <TableHead>Cargo</TableHead>
              <TableHead>Herramienta</TableHead>
              <TableHead>Justificación</TableHead>
              <TableHead className="text-right">Fecha</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((request, i) => (
              <TableRow key={i} className="">
                <TableCell className="font-medium">{request.name}</TableCell>
                <TableCell className="text-muted-foreground">
                  {request.position}
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                    {request.equipment}
                  </span>
                </TableCell>
                <TableCell>{request.justification}</TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {request.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Solicitudes totales</TableCell>
              <TableCell className="text-right">{requests.length}</TableCell>
            </TableRow>
          </TableFooter>
        </>
      ) : (
        <TableBody>
          <TableRow>
            <TableCell colSpan={7} className="text-center py-12">
              <div className="flex flex-col items-center justify-center">
                <div className="bg-muted p-4 rounded-full mb-4">
                  <Inbox className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2 ">
                  Aún no hay solicitudes para mostrar
                </h3>
                <p className="text-muted-foreground max-w-md text-center mb-4 text-wrap">
                  Actualmente no hay solicitudes registradas en el sistema.
                  Puedes crear una nueva solicitud haciendo clic en el botón
                  &quot;Crea nueva solicitud&quot;.
                </p>
                <Button
                  onClick={() => router.push("/form")}
                  className="bg-black cursor-pointer hover:opacity-90 text-white shadow-elegant animate-bounce-gentle"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Crea una solicitud
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      )}
    </Table>
  );
}
