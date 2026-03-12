type ProductProps = {
  product: string
}

export default function Product({ product }: ProductProps) {
  return (
    <div className="border-2 border-[rgb(117,130,144)] text-[rgb(131,144,159)] rounded-xl px-4 py-3 w-36 flex justify-center">
      {product}
    </div>
  )
}