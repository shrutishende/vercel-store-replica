"use client";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "./ui/button";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    calculateTotalprice,
    decreaseCount,
    increaseCount,
    initializeCart,
    
} from "@/lib/features/cartSlice";


interface CartProps {
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function Cart({ setViewCart }: CartProps) {
    const cartItems = useAppSelector((state: RootState) => state.cart.items);
    const totalPrice = useAppSelector(
        (state: RootState) => state.cart.totalPrice
    );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeCart());
    }, [dispatch]);

    useEffect(() => {
        dispatch(calculateTotalprice());
    }, [cartItems, dispatch]);
    const handleCloseCart = () => {
        setViewCart(false);
    };
    //if (!isCartOpen) return null;
    return (
        <div className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l  border-neutral-200 z-10 p-6 text-black  md:w-[390px] dark:border-neutral-700 dark:bg-black/95 dark:text-white bg-black">
            <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">My Cart</p>
                <Button onClick={handleCloseCart} aria-label="Close cart">
                    <CloseIcon />
                </Button>
            </div>

            {cartItems.length === 0 ? (
                <Typography>Your Cart is empty</Typography>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <>
                            <div className="flex mt-10" key={item.id}>
                                <div className="border rounded-md border-gray-500">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={50}
                                        height={50}
                                    />
                                </div>

                                <p className="font-medium px-2">{item.title}</p>
                                <p className="">
                                    ${item.price}
                                    <span className="px-2">USD</span>
                                </p>
                            </div>

                            <div className="relative flex items-center max-w-[8rem] border rounded-sm border-gray-400 mt-4">
                                <button
                                    className="bg-gray-100 dark:bg-black  px-3 h-9"
                                    onClick={() => {
                                        dispatch(decreaseCount(item.id));
                                    }}
                                >
                                    -
                                </button>
                                <div className="px-4">{item.quantity}</div>

                                <button
                                    className="bg-gray-100 dark:bg-black  px-3 h-9 "
                                    onClick={() => {
                                        dispatch(increaseCount(item.id));
                                    }}
                                >
                                    +
                                </button>
                            </div>
                        </>
                    ))}
                    <hr className="mt-12" />
                    <div className="font-bold mt-7">
                        total price :{totalPrice.toFixed(2)}
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
