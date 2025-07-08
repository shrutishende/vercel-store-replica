import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import React from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/cartSlice";

function Cart() {
     const cartItems = useAppSelector((state: RootState) => state.cart.items);
     const dispatch = useDispatch();
     const handleAddToCart = (item: {
         id: number;
         name: string;
         price: number;
     }) => {
         dispatch(addToCart(item));
     };
      
    return <div>Cart</div>;
}

export default Cart;
