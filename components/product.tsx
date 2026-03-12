type ProductProps = {
  product: string
}

export default function Product({ product }: ProductProps) {
  return (
    <div className="border rounded-xl px-4 py-2">
      {product}
    </div>
  )
}