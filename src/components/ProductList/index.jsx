import withLoading from "@/hoc/withLoading";

const ProductList = withLoading(
    () => {
        const products = ['iPhone', 'Samsung', 'Xiaomi'];

        return (
            <div>
                <h3>Products</h3>
                {products.map(product => <div key={product}>{product}</div>)}
            </div>
        );
    }
);

export default ProductList;