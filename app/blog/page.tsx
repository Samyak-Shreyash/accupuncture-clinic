import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CalendarIcon, Clock, Tag, ArrowRight } from "lucide-react"

const clinicTitle = process.env.CLINIC_NAME
export const metadata = {
  title: "Blog | " + clinicTitle,
  description: "Read our latest articles on acupuncture, traditional Chinese medicine, and holistic health practices.",
}

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Acupuncture blog"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Blog</h1>
          <p className="max-w-2xl mx-auto mt-6 text-xl">
            Insights, tips, and information about acupuncture and holistic wellness
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="grid gap-8">
                {[
                  {
                    title: "The Science Behind Acupuncture: How It Works to Relieve Pain",
                    excerpt:
                      "Explore the scientific mechanisms that make acupuncture an effective treatment for various types of pain, from chronic conditions to acute injuries.",
                    image: "/placeholder.svg?height=400&width=800",
                    date: "June 15, 2023",
                    readTime: "8 min read",
                    category: "Pain Management",
                    slug: "science-behind-acupuncture",
                  },
                  {
                    title: "Acupuncture for Stress and Anxiety: Finding Calm in a Chaotic World",
                    excerpt:
                      "Discover how acupuncture can help regulate your nervous system, reduce stress hormones, and promote a sense of calm and wellbeing in today's fast-paced world.",
                    image: "/placeholder.svg?height=400&width=800",
                    date: "May 28, 2023",
                    readTime: "6 min read",
                    category: "Mental Health",
                    slug: "acupuncture-for-stress-anxiety",
                  },
                  {
                    title: "Fertility Support Through Acupuncture: What to Expect",
                    excerpt:
                      "Learn how acupuncture can support reproductive health, balance hormones, and improve fertility for both women and men trying to conceive.",
                    image: "/placeholder.svg?height=400&width=800",
                    date: "April 12, 2023",
                    readTime: "10 min read",
                    category: "Women's Health",
                    slug: "fertility-support-acupuncture",
                  },
                  {
                    title: "Acupuncture for Digestive Health: Addressing IBS, Bloating, and More",
                    excerpt:
                      "Understand how acupuncture can help regulate digestive function, reduce inflammation, and provide relief from common digestive disorders.",
                    image: "/placeholder.svg?height=400&width=800",
                    date: "March 5, 2023",
                    readTime: "7 min read",
                    category: "Digestive Health",
                    slug: "acupuncture-digestive-health",
                  },
                  {
                    title: "Combining Acupuncture with Western Medicine: An Integrated Approach",
                    excerpt:
                      "Explore how acupuncture can complement conventional medical treatments to provide better outcomes and reduced side effects for various health conditions.",
                    image: "/placeholder.svg?height=400&width=800",
                    date: "February 18, 2023",
                    readTime: "9 min read",
                    category: "Integrative Medicine",
                    slug: "acupuncture-western-medicine",
                  },
                ].map((post, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-64">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center">
                          <CalendarIcon className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center">
                          <Tag className="w-4 h-4 mr-1" />
                          {post.category}
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-700 mb-4">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary font-medium hover:underline"
                      >
                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <Button variant="outline" className="mr-2">
                  Previous
                </Button>
                <Button variant="outline" className="ml-2">
                  Next
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Search</h3>
                  <div className="flex">
                    <Input placeholder="Search articles..." className="rounded-r-none" />
                    <Button className="rounded-l-none">Search</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {[
                      { name: "Pain Management", count: 12 },
                      { name: "Mental Health", count: 8 },
                      { name: "Women's Health", count: 10 },
                      { name: "Digestive Health", count: 6 },
                      { name: "Integrative Medicine", count: 9 },
                      { name: "Traditional Chinese Medicine", count: 15 },
                      { name: "Wellness Tips", count: 11 },
                    ].map((category, index) => (
                      <li key={index}>
                        <Link
                          href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="flex justify-between items-center text-gray-700 hover:text-primary transition-colors"
                        >
                          <span>{category.name}</span>
                          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "5 Acupressure Points You Can Use at Home for Headache Relief",
                        date: "July 2, 2023",
                        slug: "acupressure-points-headache-relief",
                      },
                      {
                        title: "The Role of Acupuncture in Managing Long COVID Symptoms",
                        date: "June 28, 2023",
                        slug: "acupuncture-long-covid",
                      },
                      {
                        title: "Seasonal Wellness: Preparing Your Body for Monsoon with Acupuncture",
                        date: "June 20, 2023",
                        slug: "seasonal-wellness-monsoon",
                      },
                      {
                        title: "Understanding the Five Elements Theory in Traditional Chinese Medicine",
                        date: "June 10, 2023",
                        slug: "five-elements-theory",
                      },
                    ].map((post, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="relative w-16 h-16 shrink-0">
                          <Image
                            src="/placeholder.svg?height=64&width=64"
                            alt={post.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 line-clamp-2">
                            <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                              {post.title}
                            </Link>
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="mb-8 bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Subscribe to Our Newsletter</h3>
                  <p className="text-gray-700 mb-4">Get the latest articles and health tips delivered to your inbox.</p>
                  <div className="space-y-3">
                    <Input placeholder="Your email address" />
                    <Button className="w-full">Subscribe</Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">We respect your privacy. Unsubscribe at any time.</p>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-primary text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Ready to Experience Acupuncture?</h3>
                  <p className="mb-4">Book your consultation today and start your journey to better health.</p>
                  <Button asChild variant="outline" className="bg-white text-primary hover:bg-gray-100 w-full">
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Want to Learn More About Acupuncture?</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-700">
            Subscribe to our newsletter for the latest articles, health tips, and clinic updates
          </p>
          <div className="max-w-md mx-auto mt-8">
            <div className="flex gap-2">
              <Input placeholder="Your email address" className="rounded-r-none" />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

