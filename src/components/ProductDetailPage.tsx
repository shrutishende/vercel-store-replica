import Image from "next/image";
import React from "react";

const products = [
    {
        id: 1,
        title: "Acme Circles T-Shirt",
        price: 20.0,
        image: "/images/t-shirt-1.avif",
        description: "A stylish black t-shirt with a unique circles design.",
        style: "home",
    },
    {
        id: 2,
        title: "Acme Drawstring Bag",
        price: 12.0,
        image: "/images/bag-1-dark.avif",
        description: "A stylish black t-shirt with a unique circles design.",
        style: "default",
    },
    {
        id: 2,
        title: "Acme Cup",
        price: 15.0,
        image: "/images/cup-black.avif",
        description: "A stylish black t-shirt with a unique circles design.",
        style: "default",
    },
];

function ProductDetailPage() {
    return (
        // <div className="mx-auto max-w-screen-2xl px-4">
        //     <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
        //         {/*  */}
        //         {products.map((product) => (
        //             <div className="h-full w-full basis-full lg:basis-4/6">
        //                 <Image src={product.image} alt="tshirt" width={500} height={500}/>
        //             </div>
        //         ))}
        //     </div>
        // </div>
        <div></div>
    );
}

export default ProductDetailPage;
