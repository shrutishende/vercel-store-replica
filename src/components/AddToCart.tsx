"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { addToCart, CartItem } from "@/lib/features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import Badge from "@mui/material/Badge";
import { useAppSelector } from "@/lib/hooks";

function AddToCart({ product }) {
    const [cartItem, setCartItem] = useState({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        image: product.image
    } as CartItem);

    const dispatch = useDispatch();

    return (
        <div>
            <Button
                variant="default"
                className="bg-[#00A3FF] hover:bg-[#0090E0] w-full max-w-xs"
                onClick={() => {
                    dispatch(addToCart(cartItem));
                }}
            >
                Add to Cart
            </Button>
        </div>
    );
}

export default AddToCart;
