import { createSlice } from '@reduxjs/toolkit';

interface Product { id: number;
  name: string;  price: number;
  description: string;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [
    { id: 1, name: 'Product 1', price: 10, description: 'Product 1 description' },
    { id: 2, name: 'Product 2', price: 20, description: 'Product 2 description' },
    { id: 3, name: 'Product 3', price: 30, description: 'Product 3 description' },
  ],
};
// export const fetchProducts = () => async (dispatch: AppDispatch) => {
//     // const response = await axios.get('/api/products');
//     // dispatch(setProducts(response.data));
//   };



const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productSlice.reducer;
