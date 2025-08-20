import Link from "next/link"
import { ArrowLeft, Droplet, Sun, Thermometer } from "lucide-react"
import { plants } from "@/lib/plants"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PlantPage({ params }: { params: { id: string } }) {
  const plant = plants.find((p) => p.id === params.id)

  if (!plant) {
    return (
      <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-12 text-center">
        <h1 className="text-3xl font-bold">Plant Not Found</h1>
        <p className="mt-4 text-muted-foreground">Sorry, we couldn't find the plant you're looking for.</p>
        <Button asChild className="mt-6">
          <Link href="/plants">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Plants
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container px-4 py-12 md:py-24">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/plants">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Plants
        </Link>
      </Button>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <img
            src={plant.image || "/placeholder.svg"}
            alt={plant.name}
            className="w-full rounded-lg object-cover"
            width={600}
            height={400}
          />
        </div>
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                {plant.category}
              </span>
              <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                {plant.careLevel}
              </span>
            </div>
            <h1 className="mt-2 text-3xl font-bold">{plant.name}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{plant.scientificName}</p>
          </div>

          <p className="text-muted-foreground">{plant.description}</p>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center rounded-lg border p-3">
              <Sun className="h-6 w-6 text-yellow-500" />
              <span className="mt-2 text-sm font-medium">Light</span>
              <span className="text-xs text-muted-foreground">{plant.light}</span>
            </div>
            <div className="flex flex-col items-center rounded-lg border p-3">
              <Droplet className="h-6 w-6 text-blue-500" />
              <span className="mt-2 text-sm font-medium">Water</span>
              <span className="text-xs text-muted-foreground">{plant.water}</span>
            </div>
            <div className="flex flex-col items-center rounded-lg border p-3">
              <Thermometer className="h-6 w-6 text-red-500" />
              <span className="mt-2 text-sm font-medium">Temperature</span>
              <span className="text-xs text-muted-foreground">{plant.temperature}</span>
            </div>
          </div>

          <Button className="w-full">Add to Cart</Button>
        </div>
      </div>

      <Tabs defaultValue="care" className="mt-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="care">Care Guide</TabsTrigger>
          <TabsTrigger value="propagation">Propagation</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
        </TabsList>
        <TabsContent value="care" className="mt-6 space-y-4">
          <h2 className="text-2xl font-bold">Care Guide</h2>
          <div className="space-y-4">
            {plant.careGuide.map((step, index) => (
              <div key={index} className="rounded-lg border p-4">
                <h3 className="font-medium">Step {index + 1}</h3>
                <p className="text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="propagation" className="mt-6 space-y-4">
          <h2 className="text-2xl font-bold">Propagation Methods</h2>
          <div className="space-y-4">
            {plant.propagation.map((method, index) => (
              <div key={index} className="rounded-lg border p-4">
                <h3 className="font-medium">{method.method}</h3>
                <p className="text-muted-foreground">{method.description}</p>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="benefits" className="mt-6 space-y-4">
          <h2 className="text-2xl font-bold">Health Benefits</h2>
          <div className="space-y-4">
            {plant.benefits.map((benefit, index) => (
              <div key={index} className="rounded-lg border p-4">
                <h3 className="font-medium">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
