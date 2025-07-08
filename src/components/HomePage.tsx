"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { products } from "@/lib/data";


const HomePage = () => {
    console.log("111");
    
    return (
        <>
            <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)] bg-black">
                {products.map((product) => (
                    <>
                        <div
                            key={product.id}
                            className={cn(
                                product.style === "home"
                                    ? "md:col-span-4 md:row-span-2"
                                    : " md:col-span-2 md:row-span-1"
                            )}
                        >
                            <Link
                                className="relative block aspect-square h-full w-full"
                                href={`products/${product.id}`}
                            >
                                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                                    <Image
                                        src={product.image}
                                        alt="tshirt"
                                        width={500}
                                        height={500}
                                    />
                                    <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label  ">
                                        <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                                            <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                                                Acme Circles T- shirt
                                            </h3>
                                            <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                                                $20.00
                                                <span className="ml-1  hidden @[275px]/label:inline">
                                                    USD
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </>
                ))}
            </section>
        </>
    );
};

export default HomePage;
