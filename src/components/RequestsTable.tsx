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

interface Props {
  requests: Request[];
}

export function RequestTable({ requests }: Props) {
  return (
    <Table className="border-2 border-black mt-8">
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
        {requests.length > 0 ? (
          requests.map((request, i) => (
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
          ))
        ) : (
          <TableRow>
            <TableCell className="text-muted-foreground">
              Aún no hay solicitudes para mostrar...
            </TableCell>
          </TableRow>
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Solicitudes totales</TableCell>
          <TableCell className="text-right">{requests.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
