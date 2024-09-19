import { ChangeEvent, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDebounce } from 'use-debounce';
import { SearchIconWrapper, StyledInputBase, StyledSearch } from '../components/Products/StyledSearch.tsx';
import { ProductsTable } from '../components/Products/ProductsTable.tsx';
import { increment } from '../stores/counter/counterSlice.ts';
import { useAppDispatch } from '../hooks/reduxHooks.ts';
import { useGetProductsQuery } from '../services/products.ts';

export const ProductsPage = () => {
  const dispatch = useAppDispatch();

  const [query, setQuery] = useState('');
  const [value] = useDebounce(query, 1000);
  const [selectedProductId, setSelectedProductId] = useState(0);

  const { data: products, isLoading, isError } = useGetProductsQuery();
  const filteredProducts = products?.filter(product => product.title.toLowerCase().includes(value.toLowerCase())) ?? [];

  const selectedProduct = products?.find(product => product.id === selectedProductId) ?? null;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleRowClick = (id: number) => {
    setSelectedProductId(id);
  };

  return (
    <Box component="section">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'end',
          mb: 3,
        }}
      >
        <Typography
          variant="h3"
          component="h2"
        >
          Products
        </Typography>

        <Button
          variant="outlined"
          size="small"
          sx={{ height: 35, mb: 1, ml: 1 }}
          onClick={() => dispatch(increment())}
        >
          Create New
        </Button>
        {selectedProductId}
        {selectedProduct?.title ?? 'no selected'}
      </Box>

      <StyledSearch>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          disabled={isLoading || isError}
          value={query}
          onChange={handleChange}
        />
      </StyledSearch>

      <ProductsTable
        products={filteredProducts ?? []}
        isLoading={isLoading}
        isError={isError}
        onRowClick={handleRowClick}
      />
    </Box>
  );
};
