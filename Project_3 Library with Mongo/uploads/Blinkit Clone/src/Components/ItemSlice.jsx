import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchApi = createAsyncThunk("ProductSlice/fetchAPI", async () => {

    let response = await fetch("http://localhost:5000/Data");
    return await response.json();

})
const ProductSlice = createSlice({
    name: "ProductSlice",
    initialState: {
        allData: [],
        cart: JSON.parse(localStorage.getItem("cartItem")) || [],
        loading: true,
    },
    reducers: {

        addProduct: (state, action) => {
            const existItem = state.cart.find((item) => item.id === action.payload.id)

            if (existItem) {
                existItem.quantity = existItem.quantity + 1;
                localStorage.setItem("cartItem", JSON.stringify(state.cart))
            }
            else {
                const product = { ...action.payload, quantity: 1 }
                state.cart.push(product)
                localStorage.setItem("cartItem", JSON.stringify(state.cart))
            }

        },
        removeProduct: (state, action) => {
            const existItem = state.cart.find((item) => item.id === action.payload.id)
            if (existItem.quantity > 1) {
                existItem.quantity = existItem.quantity - 1;
            }
            else {
                state.cart = state.cart.filter((item) => item.id !== action.payload.id)
                
            }
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchApi.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchApi.fulfilled, (state, action) => {
                state.loading = false,
                    state.allData = action.payload
            })

    }
})

export const { addProduct, removeProduct } = ProductSlice.actions;
export default ProductSlice.reducer;