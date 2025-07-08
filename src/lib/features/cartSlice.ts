import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: number ;
    title: string;
    price: number;
    image: string ;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    totalPrice: number;
}

const initialState: CartState = {
    items: [],
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        initializeCart: (state) => {
            if (typeof window !== "undefined") {
                const storedCartItems = JSON.parse(
                    localStorage.getItem("cartItems") || "[]"
                );
                state.items = storedCartItems;
            }
        },

        addToCart: (state, action) => {
            // console.log("sdfsf");
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            // console.log(existingItemIndex);

            if (existingItemIndex >= 0) {
                //  Item exists in cart, update quantity

                state.items[existingItemIndex].quantity =
                    state.items[existingItemIndex].quantity +
                    action.payload.quantity;
            } else {
                // Item doesn't exist, add it to the cart
                state.items.push(action.payload);
            }

            if (typeof window !== "undefined") {
                localStorage.setItem("cartItems", JSON.stringify(state.items));
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const existingItemIndex = state.items.findIndex(
                //@ts-expect-error
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

            if (typeof window !== "undefined") {
                localStorage.setItem("cartItems", JSON.stringify(state.items));
            }
        },
        decreaseCount: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                // Ensure quantity doesn't go below 1
                item.quantity--;
            }

            if (typeof window !== "undefined") {
                localStorage.setItem("cartItems", JSON.stringify(state.items));
            }
        },

        calculateTotalprice: (state) => {
            state.totalPrice = state.items.reduce((total, item) => {
                return total + item.price * item.quantity;
            }, 0);
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    initializeCart,
    calculateTotalprice,
} = cartSlice.actions;
export default cartSlice.reducer;
