"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { addToCart, CartItem } from "@/lib/features/cartSlice";
import { useDispatch } from "react-redux";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AddToCart({ product}:any) {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [cartItem] = useState({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        image: product.image,
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
