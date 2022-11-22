import { Product } from "./../../../types/productTypes";
import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const getProducts = await fetch(
      "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=2&rows=8&sortBy=id&orderBy=DESC"
    );

    const data = await getProducts.json();

    const products: Product[] = data.products;

    return products;
  }
);

interface InitialState {
  products: Product[];
  isLoading: boolean;
}

const initialState: InitialState = {
  products: [],
  isLoading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      fetchProducts.fulfilled,
      (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      }
    );

    builder.addCase(fetchProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default productSlice.reducer;
