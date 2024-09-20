import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from "react";
import { productsApi } from "../../api/api";
import { Product } from "./ProductsData";
import { FetchMessage } from "../../api/DisplayFetchMessage";
import { CartContext } from "../cart/CartContext";
import { CartItem } from "../cart/CartItem";

const ProductCard: React.FC<{
  product: Product;
  onAddToCart: (product: Product) => void;
}> = React.memo(({ product, onAddToCart }) => (
  <div key={product.id} className="border p-4 flex flex-col h-full">
    <div className="w-full h-48 sm:h-64 md:h-80 mb-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-full object-contain"
      />
    </div>
    <h2 className="text-sm sm:text-base md:text-lg font-bold mb-4">
      {product.title}
    </h2>
    <p className="mb-4 text-xs sm:text-sm md:text-base overflow-hidden overflow-y-auto h-24 sm:h-32 md:h-44">
      {product.description}
    </p>
    <div className="mt-auto flex justify-between items-center">
      <p className="text-sm sm:text-base md:text-xl font-semibold">
        ${product.price}
      </p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-blue-500 text-white py-1 px-2 sm:py-2 sm:px-4 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  </div>
));

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);

  const { cartItems, addToCart, updateCartItemQuantity } =
    useContext(CartContext)!;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productsApi();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let results = products;

    if (searchTerm) {
      results = results.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter) {
      results = results.filter((product) =>
        product.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
    }

    return results;
  }, [searchTerm, categoryFilter, products]);

  const handleAddToCart = useCallback(
    (product: Product) => {
      const existingItem = cartItems.find(
        (item: CartItem) => item.id === product.id
      );

      if (existingItem) {
        updateCartItemQuantity(product.id, existingItem.quantity + 1);
      } else {
        addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
          image: product.image,
        });
      }
      setMessage("Product added to cart!");
      setTimeout(() => setMessage(null), 600);
    },
    [cartItems, addToCart, updateCartItemQuantity]
  );

  if (loading) return <FetchMessage message="Loading..." />;

  return (
    <div className="p-4">
      <div className="sticky top-16 bg-gray-100 p-4 mb-4">
        <div className="mb-4 flex flex-col md:flex-row md:space-x-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="border p-2 rounded w-full"
          />
          <select
            value={categoryFilter}
            onChange={(event) => setCategoryFilter(event.target.value)}
            className="border p-2 rounded w-full mt-2 md:mt-0"
          >
            <option value="">All Categories</option>
            <option value="women's clothing">Women</option>
            <option value="men's clothing">Men</option>
            <option value="jewelery">Jewellery</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
      </div>
      {message && (
        <div className="fixed inset-0 flex justify-center items-center pointer-events-none">
          <div className="bg-green-500 text-white p-2 mb-4 rounded opacity-90 transition-opacity duration-500 ease-in-out transform">
            {message}
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
