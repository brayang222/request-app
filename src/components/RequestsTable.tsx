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

export function TableDemo({ requests }: Props) {
  return (
    <Table>
      <TableCaption>Lista de solicitudes de herramientas.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nombre</TableHead>
          <TableHead>Cargo</TableHead>
          <TableHead>Herramienta</TableHead>
          <TableHead>Justificación</TableHead>
          <TableHead className="text-right">Fecha</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {requests.map((request, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{request.name}</TableCell>
            <TableCell>{request.position}</TableCell>
            <TableCell>{request.equipment}</TableCell>
            <TableCell>{request.justification}</TableCell>
            <TableCell className="text-right">{request.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Productos totales</TableCell>
          <TableCell className="text-right">{requests.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
