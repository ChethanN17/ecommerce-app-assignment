import ProductDetails from "./ProductDetails";
import type { Metadata } from "next";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/products/${id}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) return null;
  return res.json();
}

// Dynamic Metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = await getProduct(params.id);

  if (!product) {
    return {
      title: "Product not found | ShopEasy",
      description: "This product does not exist in our catalog.",
    };
  }

  return {
    title: `${product.name} | ShopEasy`,
    description: `Buy ${product.name} at just ₹${product.price}.`,
    openGraph: {
      title: `${product.name} | ShopEasy`,
      description: `Check out ${product.name} for only ₹${product.price}.`,
      images: [product.image],
    },
  };
}

// Static params for SSG
export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/products`
  );
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
