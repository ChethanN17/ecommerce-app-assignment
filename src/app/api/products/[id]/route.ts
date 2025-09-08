import { NextResponse } from "next/server";
import { products } from "@/app/data/products";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
 
  const { id } = await params;
  
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}