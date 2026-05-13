import { type ReactNode } from "react";
import { Table, TableBody, TableData, TableHead, TableHeader, TableRow } from "./common/Table";
import { PRICES } from "../data/constants";

export function PricesTable ({
  columns,
  renderData,
}: {
  columns: Array<string>;
  renderData: (price: string, col: string) => ReactNode;
}) {
  return (
    <Table className="table-fixed border-separate border-spacing-2">
      <TableHead>
        <TableRow>
          <TableHeader className="w-12">Price</TableHeader>
          {columns.map((col) => <TableHeader key={col}>{col}</TableHeader>)}
        </TableRow>
      </TableHead>
      <TableBody>
        {PRICES.map((price) => (
          <TableRow key={price}>
            <TableHeader scope="row">${price}</TableHeader>
            {columns.map((col) => <TableData key={col}>{renderData(price, col)}</TableData>)}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
