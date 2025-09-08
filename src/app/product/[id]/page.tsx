import ProductDetails from "./ProductDetails";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/products/${id}`, {
    next: { revalidate: 60 }, 
  });

  if (!res.ok) return null;
  return res.json();
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/products`);
  const products: Product[] = await res.json();

  return products.map((p) => ({
    id: String(p.id),
  }));
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return <ProductDetails product={product} />;
}
