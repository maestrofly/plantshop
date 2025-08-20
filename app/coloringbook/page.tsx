import { Button } from "@/components/ui/button"

export default function ColoringBookPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8faf5]">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Coloring Book Downloads
          </h1>
          <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl">
            Choose your version below and start coloring!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            <a href="/coloringbooks/kids.pdf" download>
              <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white text-lg px-6 py-4 rounded-2xl shadow-md">
                Download Kids Version
              </Button>
            </a>
            <a href="/coloringbooks/adult.pdf" download>
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-4 rounded-2xl shadow-md">
                Download Adult Version
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
