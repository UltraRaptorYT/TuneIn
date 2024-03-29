"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Importing components
import Navbar from "@/components/Navbar";

// Importing ui components
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

console.log(supabaseUrl);
console.log(supabaseKey);

const data: Data[] = [
  {
    id: "m5gr84i9",
    genre: "pop",
    filecreated: "https://example.com/song1.mp4",
    created_at: "10/11/2022",
    lyrics: "The whole earth shakes...",
  },
  {
    id: "k3zv72h2",
    genre: "rock",
    filecreated: "https://example.com/song2.mp4",
    created_at: "11/15/2022",
    lyrics: "I'm on the highway to hell...",
  },
  {
    id: "n7bx36f5",
    genre: "hip_hop",
    filecreated: "https://example.com/song3.mp4",
    created_at: "12/20/2022",
    lyrics: "Money, cash, hoes...",
  },
  {
    id: "p9yd45t8",
    genre: "jazz",
    filecreated: "https://example.com/song4.mp4",
    created_at: "01/25/2023",
    lyrics: "Take five...",
  },
  {
    id: "w4fq23u1",
    genre: "classical",
    filecreated: "https://example.com/song5.mp4",
    created_at: "02/28/2023",
    lyrics: "Ode to Joy...",
  },
];

interface TuneInRecord {
  id: number;
  genre: string;
  filecreated: string;
  created_at: Date;
  lyrics: string;
}

// Create supabase client

const columns: ColumnDef<TuneInRecord>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "genre",
    header: "Genre",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "filecreated",
    header: "File Created",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    cell: (info) => {
      const value = info.getValue();
      // Format the date if it's a Date object; otherwise, leave it as is
      return value instanceof Date ? value.toLocaleString() : value;
    },
  },
  {
    accessorKey: "lyrics",
    header: "Lyrics",
    cell: (info) => info.getValue(),
  },
];

const Page: React.FC = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-14">
        <div className="flex items-center py-4">
          <Input
            placeholder="Search for a record..."
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("email")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
