import React, { useEffect } from "react";
import { useProducts } from "../../hooks/useProducts"
import { useUI } from "../../hooks/useUI";

export default function ProductList() {
    const { items, meta, loading, error, fetchProducts } = useProducts();
    const { openModal } = useUI()
    const { fetchProduct, current } = useProducts()

    const handleShow = async (id) => {
        await fetchProduct(id)
        openModal('product')
    }
    useEffect(() => {
        fetchProducts({ page: 1, per_page: 10});
        console.log("Fetching products...");
    }, []);

    if (loading)
        return (
            <div className="flex justify-center items-center h-64">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );

    if (error)
        return (
            <p className="text-center text-error font-medium mt-6">
                {error}
            </p>
        );

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-text mb-6 animate-count-up">
                Products
            </h2>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((product) => (
                    <div
                        key={product.id}
                        className="bg-card rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-out hover:shadow-lg animate-count-up"
                    >
                        <img
                            src={product.image_url}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 flex flex-col">
                            <h3 className="text-lg font-semibold text-text truncate">
                                {product.name}
                            </h3>
                            <p className="text-primary font-bold text-lg mt-1">
                                ${product.price}
                            </p>
                            <button
                                onClick={() => handleShow(product.id)}
                                className="mt-3 px-4 py-2 bg-primary text-white rounded-md text-sm font-medium shadow hover:bg-secondary transition-colors duration-200 animate-auth-btn"
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
