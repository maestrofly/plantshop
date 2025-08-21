import { Leaf } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8faf5]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">Our Story</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              About Mrd Flowers
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              We're passionate about plants and their ability to transform spaces and improve wellbeing.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Mrd flower store interior"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                width={600}
                height={400}
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700 w-fit">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Bringing Nature Into Your Home</h2>
              <p className="text-gray-500 md:text-lg">
                Mrd flowers was founded in 2020 with a simple mission: to help people connect with nature through
                beautiful, healthy plants. We believe that everyone deserves to experience the joy and benefits of
                living with plants, regardless of their experience level or living situation.
              </p>
              <p className="text-gray-500 md:text-lg">
                What sets us apart is our commitment to education. We don't just sell plants—we provide comprehensive
                information about each plant's care requirements, propagation methods, and health benefits. Our goal is
                to empower you with the knowledge you need to help your plants thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8faf5]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Values</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide everything we do at Mrd Flowers.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-green-100 p-4 rounded-lg">
                <div className="rounded-full bg-green-100 p-3">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Sustainability</h3>
                <p className="text-center text-gray-500">
                  We're committed to sustainable practices in everything from our growing methods to our packaging.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-green-100 p-4 rounded-lg">
                <div className="rounded-full bg-green-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-green-600"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Education</h3>
                <p className="text-center text-gray-500">
                  We believe in empowering our customers with knowledge about plant care and benefits.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-green-100 p-4 rounded-lg">
                <div className="rounded-full bg-green-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-green-600"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Community</h3>
                <p className="text-center text-gray-500">
                  We foster a community of plant lovers who share tips, experiences, and a passion for greenery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The plant enthusiasts behind Mrd Flowers.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Sarah Johnson"
                  className="rounded-full object-cover h-32 w-32"
                  width={128}
                  height={128}
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Maria Jose Alberto Darku</h3>
                  <p className="text-sm text-green-600">Founder & Plant Expert</p>
                  <p className="text-sm text-gray-500">
                    With over 15 years of experience in horticulture, Maria founded Mrd Flowers to share her passion for
                    plants.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Michael Chen"
                  className="rounded-full object-cover h-32 w-32"
                  width={128}
                  height={128}
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Raymond Darku</h3>
                  <p className="text-sm text-green-600">Botanist & Care Specialist</p>
                  <p className="text-sm text-gray-500">
                    Raymond's botanical expertise ensures that our care guides and propagation methods are
                    scientifically sound.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Aisha Patel"
                  className="rounded-full object-cover h-32 w-32"
                  width={128}
                  height={128}
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Derrick Darku</h3>
                  <p className="text-sm text-green-600">Sustainability Director</p>
                  <p className="text-sm text-gray-500">
                    Aisha leads our sustainability initiatives, ensuring our practices are environmentally responsible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
