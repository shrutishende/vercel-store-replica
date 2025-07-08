import AddToCart from "@/components/AddToCart";
import Header from "@/components/Header";
import { products } from "@/lib/data";
import Image from "next/image";

import React from "react";

async function page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const productId = slug ? parseInt(slug, 10) : NaN;
    const product = !isNaN(productId)
        ? products.find((p) => p.id === productId)
        : undefined;
    //const product = products.find((p) => p.id === parseInt(slug));

    if (!product) {
        return (
            <div className="mx-auto max-w-screen-2xl px-4 py-8">
                <Header />
                
                <div className="text-center text-2xl text-gray-500 dark:text-gray-400">
                    Product not found
                </div>
            </div>
        );
    }
    return (
        <>
            <Header />

            <div className="mx-auto max-w-screen-2xl px-4">
                <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
                    <div className="h-full w-full basis-full lg:basis-4/6">
                        <Image
                            src={product.image}
                            alt="tshirt"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="basis-full lg:basis-2/6">
                        <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
                            <h1 className="mb-2 text-5xl font-medium text-white">
                                {product?.title}
                            </h1>
                            <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
                                <p className=" ml-1 inline">$20</p>
                            </div>
                            <div className="mr-auto w-auto p-2 text-base text-white">
                                <p className=" ml-1 inline">
                                    {product?.description}
                                </p>
                            </div>
                        </div>

                        <AddToCart product={product} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default page;
