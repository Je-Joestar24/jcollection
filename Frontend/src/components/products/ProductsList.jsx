import React, { useEffect } from "react";
import { useProducts } from "../../hooks/useProducts"

export default function ProductList() {
    const { items, meta, loading, error, fetchProducts } = useProducts();

    useEffect(() => {
        fetchProducts({ page: 1, per_page: 10, search: "jacket" });
        console.log("Fetching products...");
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {items.map((product) => (
                    <li key={product.id}>
                        <img src={product.image_url} alt={product.name} width="50" />
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
            {meta && (
                <p>
                    Page {meta.current_page} of {meta.last_page} (Total: {meta.total})
                </p>
            )}
        </div>
    );
}
