import ProductPagination from "../components/products/ProductPagination";
import ProductList from "../components/products/ProductsList";
import SearchFilter from "../components/products/SearchFilter";

export default function Products() {
    return (
        <>
            <SearchFilter />
            <ProductList />
            <ProductPagination />
        </>
    );
}