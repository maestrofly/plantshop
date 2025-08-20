import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { plants } from "@/lib/plants"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PlantsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8faf5]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Our Plant Collection
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Browse our selection of plants, each with detailed information on care, propagation, and benefits.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
            {/* Filters */}
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-medium">Search</h3>
                <div className="space-y-2">
                  <Label htmlFor="search" className="sr-only">
                    Search
                  </Label>
                  <Input id="search" placeholder="Search plants..." type="search" />
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-medium">Categories</h3>
                <div className="space-y-2">
                  <Label htmlFor="category" className="sr-only">
                    Category
                  </Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="indoor">Indoor Plants</SelectItem>
                      <SelectItem value="outdoor">Outdoor Plants</SelectItem>
                      <SelectItem value="succulents">Succulents</SelectItem>
                      <SelectItem value="flowering">Flowering Plants</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-medium">Light Requirements</h3>
                <div className="space-y-2">
                  <Label htmlFor="light" className="sr-only">
                    Light
                  </Label>
                  <Select>
                    <SelectTrigger id="light">
                      <SelectValue placeholder="All Light Levels" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Light Levels</SelectItem>
                      <SelectItem value="low">Low Light</SelectItem>
                      <SelectItem value="medium">Medium Light</SelectItem>
                      <SelectItem value="high">Bright Light</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-medium">Care Level</h3>
                <div className="space-y-2">
                  <Label htmlFor="care" className="sr-only">
                    Care
                  </Label>
                  <Select>
                    <SelectTrigger id="care">
                      <SelectValue placeholder="All Care Levels" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Care Levels</SelectItem>
                      <SelectItem value="easy">Easy</SelectItem>
                      <SelectItem value="moderate">Moderate</SelectItem>
                      <SelectItem value="expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full">Apply Filters</Button>
            </div>

            {/* Plant Grid */}
            <div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {plants.map((plant) => (
                  <Link
                    key={plant.id}
                    href={`/plants/${plant.id}`}
                    className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex flex-col space-y-2">
                      <img
                        src={plant.image || "/placeholder.svg"}
                        alt={plant.name}
                        className="aspect-[4/3] w-full rounded-md object-cover"
                        width={400}
                        height={300}
                      />
                      <div className="space-y-2 p-2">
                        <h3 className="font-bold">{plant.name}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <span className="mr-2 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
                            {plant.category}
                          </span>
                          <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                            {plant.careLevel}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 line-clamp-2">{plant.shortDescription}</p>
                        <div className="flex items-center pt-2">
                          <span className="text-sm text-green-600 font-medium group-hover:underline">View Details</span>
                          <ArrowRight className="ml-1 h-4 w-4 text-green-600" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
