import { MaterialReactTable, type MRT_ColumnDef, useMaterialReactTable } from 'material-react-table';
import { useMemo } from 'react';
import { IProduct } from '../../types/product.ts';

interface Props {
  products: IProduct[],
  isLoading: boolean,
  isError: boolean,
  onRowClick: (id: number) => void
}

export const ProductsTable = ({ products, isLoading, isError, onRowClick }: Props) => {
  //column definitions - strongly typed if you are using TypeScript (optional, but recommended)
  const columns = useMemo<MRT_ColumnDef<IProduct>[]>(
    () => [
      {
        accessorKey: 'image',
        header: 'Image',
        Cell: ({ cell }) => <img
          src={cell.getValue<string>()}
          style={{ height: 40, width: 50, objectFit: 'contain' }}
        />,
        grow: false,
        size: 40,
        enableSorting: false,
        enableColumnOrdering: false,
        enableColumnActions: false,
        enableColumnFilter: false
      },
      {
        accessorKey: 'title', //id required if you use accessorFn instead of accessorKey
        header: 'Name',
      },
      {
        accessorKey: 'category', //id required if you use accessorFn instead of accessorKey
        header: 'Category',
      },
      {
        accessorKey: 'price', //id required if you use accessorFn instead of accessorKey
        header: 'Price',
      },
      // {
      //   accessorKey: 'name', //simple recommended way to define a column
      //   header: 'Name',
      //   muiTableHeadCellProps: { style: { color: 'orange' } }, //custom props
      //   enableHiding: false, //disable a feature for this column
      // },
    ],
    [],
  );

  //pass table options to useMaterialReactTable
  const table = useMaterialReactTable({
    columns,
    data: products, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableRowSelection: true, //enable some features
    enableColumnOrdering: true, //enable a feature for all columns
    enableGlobalFilter: false, //turn off a feature
    muiTableBodyRowProps: ({ row }) => ({
      onClick: () => {
        onRowClick(row?.original?.id);
      },
      sx: {
        cursor: 'pointer', //you might want to change the cursor too when adding an onClick
      },
    }),
  });

  if (isLoading) {
    return 'Loading...';
  }

  if (isError) {
    return 'Error while fetching...';
  }

  return (
    <MaterialReactTable table={table} />
  );
};
