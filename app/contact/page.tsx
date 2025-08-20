import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8faf5]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">Get In Touch</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Contact Us</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Have questions about plants or need assistance? We're here to help!
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Let's Connect</h2>
              <p className="text-gray-500 md:text-lg">
                Fill out the form below or reach out to us directly using the contact information provided.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="font-bold">Our Location</h3>
                  <p className="text-sm text-gray-500">131 race course, accra</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="font-bold">Email Us</h3>
                  <p className="text-sm text-gray-500">flowerventuresmrd@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="font-bold">Call Us</h3>
                  <p className="text-sm text-gray-500">(233) 242 0155 79</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">Store Hours</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Monday - Friday</div>
                <div>9:00 AM - 6:00 PM</div>
                <div>Saturday</div>
                <div>10:00 AM - 5:00 PM</div>
                <div>Sunday</div>
                <div>11:00 AM - 4:00 PM</div>
              </div>
            </div>
          </div>
          <div className="space-y-6 rounded-lg border p-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Send Us a Message</h3>
              <p className="text-gray-500">We'll get back to you as soon as possible.</p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Please provide as much detail as possible..."
                  className="min-h-[120px]"
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8faf5]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Visit Our Store</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              Come see our plants in person and get expert advice from our team.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-5xl rounded-lg overflow-hidden">
            {/* This would be replaced with an actual map in a real implementation */}
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Interactive Map Would Be Here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
