import { useProducts } from "../../hooks/useProducts"

export default function ProductModal({ onClose }) {
    const { clearProduct, current, showLoading, error } = useProducts()
    const handleClose = () => {
        clearProduct()
        onClose()
    }


    if (!current && !showLoading && !error) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-overlay bg-opacity-70 z-50 animate-fadeIn">
            <div className="bg-card rounded-lg shadow-xl max-w-md w-full p-6 relative">
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 text-textMuted hover:text-text font-bold text-2xl"
                >
                    &times;
                </button>

                {/* Loading state */}
                {showLoading && (
                    <p className="text-center text-textMuted">Loading product...</p>
                )}

                {/* Error state */}
                {error && <p className="text-center text-error">{error}</p>}

                {/* Product details */}
                {current && !showLoading && !error && (
                    <div className="text-center">
                        <img
                            src={current.image_url}
                            alt={current.name}
                            className="w-40 h-40 object-cover mx-auto rounded-md mb-4"
                        />
                        <h2 className="text-xl font-semibold text-text mb-2">
                            {current.name}
                        </h2>
                        <p className="text-textSecondary mb-3">{current.description}</p>
                        <p className="text-lg font-bold text-primary mb-1">
                            ${current.price}
                        </p>
                        <p className="text-sm text-textMuted">{current.category}</p>
                    </div>
                )}
            </div>
        </div>
    )
}