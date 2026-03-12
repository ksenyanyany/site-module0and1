export default function Page() {
  return (
    <div className="container mx-auto p-8 flex-column justify-center">
        <h1 text-3xl className="text-3xl font-bold pb-4">Блог</h1>
        <a href="/blog/first-post" className="border-2 border-[rgb(117,130,144)] text-[rgb(40, 46, 52)] rounded-xl px-4 py-3 w-36 flex justify-center">Первый пост</a>
    </div>
  )
}
