import Product from "@/components/product"

export default function Page() {
  return (
    <div className="pt-8">
        <h1 className="text-2xl font-bold
      flex justify-center">Телефоны</h1>
      <div className="flex justify-center space-x-4 py-8">
        <Product product="iPhone" />
        <Product product="Redmi" />
        <Product product="Xiaomi" />
        <Product product="Samsung" />
      </div>
    </div>
  )
}