"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { addToCart, CartItem } from "@/lib/features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import Badge from "@mui/material/Badge";
import { useAppSelector } from "@/lib/hooks";

function AddToCart() {
    const [count, setCount] = useState(0);
    const [cartItem, setCartItem] = useState({
        id: 1,
        title: "ppp",
        price: 20,
        quantity: 1,
    } as CartItem);
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    // console.log(count);

    return (
        <div>
            <Button
                variant="default"
                className="bg-[#00A3FF] hover:bg-[#0090E0] w-full max-w-xs"
                onClick={() => {
                    dispatch(addToCart(cartItem));
                    // setCount(0);
                    // setCartItem({
                    //     ...cartItem,
                    //     quantity: cartItem.quantity + 1,
                    // });
                }}
            >
                Add to Cart
            </Button>
        </div>
    );
}

export default AddToCart;
