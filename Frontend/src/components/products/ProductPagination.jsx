import { useProducts } from "../../hooks/useProducts";

export default function ProductPagination() {
    const { meta, fetchProducts, search } = useProducts();

    if (!meta) return null;

    const goToPage = (page) => {
        if (page >= 1 && page <= meta.last_page) {
            fetchProducts({
                page,
                per_page: meta.per_page || 10,
                search, // keep search term persistent
            });
        }
    };

    return (
        <div className="flex flex-col items-center mt-8 space-y-3">
            {/* Pagination Info */}
            <p className="text-sm text-textMuted">
                Page {meta.current_page} of {meta.last_page} (Total: {meta.total})
            </p>

            {/* Pagination Controls */}
            <div className="flex items-center space-x-2">
                <button
                    onClick={() => goToPage(meta.current_page - 1)}
                    disabled={meta.current_page === 1}
                    className="px-3 py-1 rounded-md border border-border text-sm text-text hover:bg-bgSecondary disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                    Prev
                </button>

                {[...Array(meta.last_page)].map((_, idx) => {
                    const page = idx + 1;
                    const isActive = meta.current_page === page;
                    return (
                        <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`px-3 py-1 rounded-md border text-sm transition 
                                ${isActive
                                    ? "bg-primary text-white border-primary"
                                    : "border-border text-text hover:bg-bgSecondary"
                                }`}
                        >
                            {page}
                        </button>
                    );
                })}

                <button
                    onClick={() => goToPage(meta.current_page + 1)}
                    disabled={meta.current_page === meta.last_page}
                    className="px-3 py-1 rounded-md border border-border text-sm text-text hover:bg-bgSecondary disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
