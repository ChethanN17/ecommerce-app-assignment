interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  return <h2>Product Details for ID: {params.id}</h2>;
}
