import { products } from "@/app/data/products";

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: "300px", height: "300px", objectFit: "cover" }} />
      <p>Price: ₹{product.price}</p>
      <button style={{ marginRight: "1rem" }}>Add to Cart</button>
      <button>Add to Wishlist</button>
    </div>
  );
}
