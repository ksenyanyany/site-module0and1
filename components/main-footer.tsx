export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[rgb(104,170,255)]
        text-white
        p-4">
      <div className="container mx-auto text-center">
        © {currentYear} Мой первый Next.js проект
      </div>
    </footer>
  );
}