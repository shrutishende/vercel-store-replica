"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Badge from "@mui/material/Badge";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { useDispatch } from "react-redux";
import Cart from "./Cart";
import { addToCart } from "@/lib/features/cartSlice";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [viewCart, setViewCart] = useState(false);

    const navItems = [
        { name: "All", href: "/all" },
        { name: "Shirts", href: "/shirts" },
        { name: "Stickers", href: "/stickers" },
    ];

    const count = useAppSelector((state: RootState) => state.cart.items);
    console.log("cccc", count);

    const cartItems = useAppSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    const handleAddToCart = (item: {
        id: number;
        name: string;
        price: number;
    }) => {
        dispatch(addToCart(item));
    };

    let totalQuantity = 0;
    count.forEach((item) => {
        totalQuantity += item.quantity;
    });

    // useEffect(() => {
    //     dispatch(initializeCart());
    // }, [dispatch];

    return (
        <>
            <header className="bg-black text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-6">
                        <Link
                            href="/"
                            className="text-xl font-medium hidden md:block"
                        >
                            ACME STORE
                        </Link>
                        {/* Desktop Menu */}
                        <nav className="hidden md:block">
                            <ul className="flex gap-6 text-sm text-gray-400">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className=" dark:hover:text-gray-100 text-neutral-500"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden container mx-auto">
                        <div className="md:hidden flex items-center justify-between">
                            <button
                                className=""
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? (
                                    <CloseIcon className="h-6 w-6" />
                                ) : (
                                    <MenuIcon className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}

                    {isMenuOpen && (
                        <nav className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden dark:bg-black">
                            <div className="flex-1 max-w-md mx-4">
                                <div className="relative ">
                                    <Input
                                        type="text"
                                        placeholder="Search for products..."
                                        className="w-full bg-gray-800 text-white border-gray-700 placeholder-gray-400 "
                                    />

                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        <SearchIcon />
                                    </div>
                                </div>
                            </div>
                            <ul className="flex flex-col gap-y-4 p-4 text-sm font-medium text-gray-700 dark:text-gray-200">
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="block py-2"
                                            onClick={() => setIsMenuOpen(false)}
                                            aria-label={`Navigate to ${item.name}`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}

                    {/* Search Bar */}
                    <div className="flex-1 max-w-md mx-4 hidden md:block">
                        <div className="relative ">
                            <Input
                                type="text"
                                placeholder="Search for products..."
                                className="w-full bg-gray-800 text-white border-gray-700 placeholder-gray-400 focus:border-[#00A3FF] focus:ring-[#00A3FF]"
                            />

                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <SearchIcon />
                            </div>
                        </div>
                    </div>
                    {/* Cart Icon */}

                    <Badge badgeContent={totalQuantity} color="primary">
                        <Button
                            variant="outline"
                            className="bg-transparent border-white text-white hover:bg-gray-800"
                            onClick={() => setViewCart(!viewCart)}
                        >
                            <ShoppingCartOutlinedIcon />
                        </Button>
                    </Badge>
                </div>
                {viewCart ? <Cart /> : null}
            </header>
        </>
    );
}

export default Header;
