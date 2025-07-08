import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // console.log("sdfsf");
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            // console.log(existingItemIndex);

            if (existingItemIndex >= 0) {
                console.log("*************");
                //  Item exists in cart, update quantity
                console.log(state.items[existingItemIndex].quantity);
                console.log(action.payload.quantity);
                console.log("*************");
                state.items[existingItemIndex].quantity =
                    state.items[existingItemIndex].quantity +
                    action.payload.quantity;
            } else {
                // Item doesn't exist, add it to the cart
                state.items.push(action.payload);
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            if (existingItemIndex >= -1) {
                state.items.splice(existingItemIndex, 1);
            }
        },

        increaseCount: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.quantity++;
            }
        },
        decreaseCount: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                // Ensure quantity doesn't go below 1
                item.quantity--;
            }
        },
    },
});

export const { addToCart, removeFromCart, increaseCount, decreaseCount } =
    cartSlice.actions;
export default cartSlice.reducer;
