import { useEffect, useState } from "react";
import { useProducts } from "../../hooks/useProducts";

export default function SearchFilter() {
    const { search, setSearch, fetchProducts } = useProducts();
    const [query, setQuery] = useState(search);

    // Optional: debounce so it doesn’t call API on every keystroke
    useEffect(() => {
        const delay = setTimeout(() => {
            if (query !== search) {
                setSearch(query);
                fetchProducts({ page: 1, search: query }); // reset to first page when searching
            }
        }, 500);
        return () => clearTimeout(delay);
    }, [query]);

    return (
        <div className="w-full max-w-md mx-auto mb-6">
            <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
            />
        </div>
    );
}
