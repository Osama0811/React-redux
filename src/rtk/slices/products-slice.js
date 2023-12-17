import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk ("productsSlics/fetchProducts", async () => {
  const api_url = "https://fakestoreapi.com/products"

  const res = await fetch(api_url);
  const data = await res.json()
  return data;
})

const productsSlics = createSlice({
  initialState: [],
  name: "productsSlics",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
      
    })
  }
})

export const { } = productsSlics.actions;

export default productsSlics.reducer;