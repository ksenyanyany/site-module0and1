import Product from "@/components/product"

export default function Home() {
  return (
    <div>
      
      <main className="container mx-auto p-8 flex-column justify-center">
        <h1 className="text-3xl font-bold">Главная страница</h1>
        <p className="mt-4">Добро пожаловать на наш сайт!</p>

      <div className="pt-4">
          <h1 className="text-2xl font-bold">Самые популярные товары:</h1>
        <div className="flex justify-center space-x-4 pt-8">
          <Product product="iPhone" />
          <Product product="Macbook" />
          <Product product="Xiaomi" />
          <Product product="Samsung" />
        </div>
      </div>

      </main>
      
    </div>
  );
}