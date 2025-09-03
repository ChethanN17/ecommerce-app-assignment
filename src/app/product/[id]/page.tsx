import ProductDetails from "./ProductDetails";

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductDetails id={params.id} />;
}