"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingCart, ChevronRight, Heart, Facebook, Twitter, Linkedin } from "lucide-react"

export default function PlantEcommerce() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Background with texture */}
      <div className="absolute inset-0 z-0 bg-[#1a2214] bg-noise">
        <Image
          src="/images/background.png"
          alt="Background"
          fill
          className="object-cover opacity-90 mix-blend-overlay"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between p-4 md:px-16 lg:px-24">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg?height=52&width=52"
                alt="Planto Logo"
                width={52}
                height={52}
                className="mr-2"
              />
              <span className="text-white font-black text-xl md:text-2xl">Planto.</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-white text-base md:text-lg font-medium hover:text-green-400">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-white text-base md:text-lg font-medium hover:text-green-400">
                Plant Types <span className="ml-1 text-xs">▼</span>
              </button>
            </div>
            <Link href="/more" className="text-white text-base md:text-lg font-medium hover:text-green-400">
              More
            </Link>
            <Link href="/contact" className="text-white text-base md:text-lg font-medium hover:text-green-400">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-6">
            <button className="text-white hover:text-green-400">
              <Search size={26} />
            </button>
            <button className="text-white hover:text-green-400">
              <ShoppingCart size={26} />
            </button>
          </div>
        </header>

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-16 px-4 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight">
                  Breath Natural
                </h1>
                <p className="text-white/90 text-base md:text-lg max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
                <div className="flex space-x-8 pt-4">
                  <button className="border-2 border-white text-white px-8 py-3 rounded-xl text-base md:text-lg hover:bg-white/10 transition-colors font-medium">
                    Explore
                  </button>
                  <div className="flex items-center">
                    <button className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center">
                      <ChevronRight className="text-white" size={24} />
                    </button>
                    <span className="text-white font-semibold text-sm ml-3">Live Demo</span>
                  </div>
                </div>
              </div>
              <div className="relative flex justify-center">
                <Image
                  src="/images/plant2.png"
                  alt="Plant"
                  width={500}
                  height={500}
                  className="mx-auto relative z-10 plant-shadow"
                />
              </div>
            </div>

            {/* Trendy House Plant Card */}
            <div className="absolute top-20 right-20 bg-[#2d3824] p-6 rounded-3xl w-[320px] md:w-[400px] lg:w-[512px] hidden lg:block shadow-subtle border border-[#3e4a33]">
              <p className="text-white text-xl mb-2 font-medium">Trendy House Plant</p>
              <h3 className="text-white text-3xl font-normal mb-6">Calathea plant</h3>
              <div className="flex justify-between items-center">
                <button className="border-2 border-white text-white px-6 py-3 rounded-xl text-lg font-medium">
                  Buy Now
                </button>
                <div>
                  <ChevronRight className="text-white" size={18} />
                </div>
              </div>
            </div>
          </section>

          {/* Customer Review Card */}
          <section className="px-4 md:px-16 lg:px-24 mb-16">
            <div className="max-w-md bg-[#2d3824] rounded-[42px] p-6 border border-[#3e4a33] shadow-subtle">
              <div className="flex items-center mb-6">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Customer"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white text-xl font-medium">Alina Patel</h4>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-400">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/90 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
            </div>
          </section>

          {/* Trendy Plants Section */}
          <section className="py-12 px-4 md:px-16 lg:px-24">
            <h2 className="text-white text-4xl md:text-5xl font-semibold text-center mb-20 relative">
              Our Trendy plants
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 border-t-2 border-l-2 border-white/30 rounded-tl-xl"></div>
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-xl"></div>
            </h2>

            {/* Featured Plant Card */}
            <div className="max-w-7xl mx-auto bg-[#2d3824] rounded-[42px] md:rounded-[80px] lg:rounded-[151px] p-10 mb-16 relative shadow-subtle border-2 border-[#3e4a33]">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="flex justify-center relative -mt-36 -mb-36">
                  <Image
                    src="/images/plant6.png"
                    alt="Featured Plant"
                    width={650}
                    height={790}
                    className="object-contain z-10 plant-shadow"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-white text-3xl font-semibold">For Small Desk AI Plant</h3>
                  <p className="text-white text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <div className="flex justify-between items-center pt-4">
                    <p className="text-white text-3xl font-semibold">Rs. 599/-</p>
                    <div className="flex space-x-4">
                      <button className="border-2 border-white text-white px-6 py-3 rounded-xl text-lg font-medium">
                        Buy Now
                      </button>
                      <button className="border-2 border-white text-white p-3 rounded-xl">
                        <Heart size={28} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Featured Plant Card */}
            <div className="max-w-7xl mx-auto bg-[#2d3824] rounded-[42px] md:rounded-[80px] lg:rounded-[151px] p-10 relative shadow-subtle border-2 border-[#3e4a33]">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6 order-2 md:order-1">
                  <h3 className="text-white text-3xl font-semibold">For Small Desk AI Plant</h3>
                  <p className="text-white text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <div className="flex justify-between items-center pt-4">
                    <p className="text-white text-3xl font-semibold">Rs. 599/-</p>
                    <div className="flex space-x-4">
                      <button className="border-2 border-white text-white px-6 py-3 rounded-xl text-lg font-medium">
                        Buy Now
                      </button>
                      <button className="border-2 border-white text-white p-3 rounded-xl">
                        <Heart size={28} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center relative -mt-36 -mb-36 order-1 md:order-2">
                  <Image
                    src="/images/plant4.png"
                    alt="Featured Plant"
                    width={650}
                    height={790}
                    className="object-contain z-10 plant-shadow"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Top Selling Section */}
          <section className="py-20 px-4 md:px-16 lg:px-24">
            <h2 className="text-white text-4xl md:text-5xl font-semibold text-center mb-20 relative">
              Our Top Selling
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 border-t-2 border-l-2 border-white/30 rounded-tl-xl"></div>
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-xl"></div>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {/* Plant Card 1 */}
              <div className="relative bg-[#2d3824] rounded-3xl border border-[#3e4a33] shadow-subtle p-6">
                <div className="flex justify-center -mt-40 mb-6">
                  <Image
                    src="/images/plant5.png"
                    alt="Calathea plant"
                    width={400}
                    height={480}
                    className="object-contain plant-shadow"
                  />
                </div>
                <h3 className="text-white text-3xl font-normal mb-4">Calathea plant</h3>
                <p className="text-white/90 text-xl mb-6 h-24 overflow-hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-white text-3xl font-normal">Rs. 309/-</p>
                  <button className="border-2 border-white text-white p-3 rounded-xl">
                    <Heart size={30} />
                  </button>
                </div>
              </div>

              {/* Plant Card 2 */}
              <div className="relative bg-[#2d3824] rounded-3xl border border-[#3e4a33] shadow-subtle p-6">
                <div className="flex justify-center -mt-40 mb-6">
                  <Image
                    src="/images/plant6.png"
                    alt="Desk plant"
                    width={400}
                    height={480}
                    className="object-contain plant-shadow"
                  />
                </div>
                <h3 className="text-white text-3xl font-normal mb-4">Desk plant</h3>
                <p className="text-white/90 text-xl mb-6 h-24 overflow-hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-white text-3xl font-normal">Rs. 359/-</p>
                  <button className="border-2 border-white text-white p-3 rounded-xl">
                    <Heart size={30} />
                  </button>
                </div>
              </div>

              {/* Plant Card 3 */}
              <div className="relative bg-[#2d3824] rounded-3xl border border-[#3e4a33] shadow-subtle p-6">
                <div className="flex justify-center -mt-40 mb-6">
                  <Image
                    src="/images/plant7.png"
                    alt="Calathea AI plant"
                    width={400}
                    height={480}
                    className="object-contain plant-shadow"
                  />
                </div>
                <h3 className="text-white text-3xl font-normal mb-4">Calathea AI plant</h3>
                <p className="text-white/90 text-xl mb-6 h-24 overflow-hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-white text-3xl font-normal">Rs. 399/-</p>
                  <button className="border-2 border-white text-white p-3 rounded-xl">
                    <Heart size={30} />
                  </button>
                </div>
              </div>

              {/* Plant Card 4 */}
              <div className="relative bg-[#2d3824] rounded-3xl border border-[#3e4a33] shadow-subtle p-6">
                <div className="flex justify-center -mt-40 mb-6">
                  <Image
                    src="/images/plant8.png"
                    alt="Cat 874 plant"
                    width={400}
                    height={480}
                    className="object-contain plant-shadow"
                  />
                </div>
                <h3 className="text-white text-3xl font-normal mb-4">Cat 874 plant</h3>
                <p className="text-white/90 text-xl mb-6 h-24 overflow-hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-white text-3xl font-normal">Rs. 259/-</p>
                  <button className="border-2 border-white text-white p-3 rounded-xl">
                    <Heart size={30} />
                  </button>
                </div>
              </div>

              {/* Plant Card 5 */}
              <div className="relative bg-[#2d3824] rounded-3xl border border-[#3e4a33] shadow-subtle p-6">
                <div className="flex justify-center -mt-40 mb-6">
                  <Image
                    src="/images/plant1.png"
                    alt="Show plant"
                    width={400}
                    height={480}
                    className="object-contain plant-shadow"
                  />
                </div>
                <h3 className="text-white text-3xl font-normal mb-4">Show plant</h3>
                <p className="text-white/90 text-xl mb-6 h-24 overflow-hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-white text-3xl font-normal">Rs. 759/-</p>
                  <button className="border-2 border-white text-white p-3 rounded-xl">
                    <Heart size={30} />
                  </button>
                </div>
              </div>

              {/* Plant Card 6 */}
              <div className="relative bg-[#2d3824] rounded-3xl border border-[#3e4a33] shadow-subtle p-6">
                <div className="flex justify-center -mt-40 mb-6">
                  <Image
                    src="/images/plant7.png"
                    alt="Calat O2 plant"
                    width={400}
                    height={480}
                    className="object-contain plant-shadow"
                  />
                </div>
                <h3 className="text-white text-3xl font-normal mb-4">Calat O2 plant</h3>
                <p className="text-white/90 text-xl mb-6 h-24 overflow-hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-white text-3xl font-normal">Rs. 659/-</p>
                  <button className="border-2 border-white text-white p-3 rounded-xl">
                    <Heart size={30} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Customer Review Section */}
          <section className="py-20 px-4 md:px-16 lg:px-24">
            <h2 className="text-white text-4xl md:text-5xl font-semibold text-center mb-20 relative">
              Customer Review
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 border-t-2 border-l-2 border-white/30 rounded-tl-xl"></div>
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-xl"></div>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Review 1 */}
              <div className="relative bg-[#2d3824] rounded-3xl border border-[#3e4a33] shadow-subtle p-8">
                <div className="flex items-center mb-6">
                  <Image
                    src="/placeholder.svg?height=71&width=71"
                    alt="Customer"
                    width={71}
                    height={71}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white text-2xl font-semibold">Maln Josi</h4>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-400">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/90 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua ut enim ad minim veniam.
                </p>
              </div>

              {/* Review 2 */}
              <div className="relative bg-[#2d3824] rounded-3xl border border-[#3e4a33] shadow-subtle p-8">
                <div className="flex items-center mb-6">
                  <Image
                    src="/placeholder.svg?height=71&width=71"
                    alt="Customer"
                    width={71}
                    height={71}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white text-2xl font-semibold">Alina Thakur</h4>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-400">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/90 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua ut enim ad minim veniam.
                </p>
              </div>

              {/* Review 3 */}
              <div className="relative bg-[#2d3824] rounded-3xl border border-[#3e4a33] shadow-subtle p-8">
                <div className="flex items-center mb-6">
                  <Image
                    src="/placeholder.svg?height=71&width=71"
                    alt="Customer"
                    width={71}
                    height={71}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white text-2xl font-semibold">Max Makvana</h4>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-400">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/90 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </section>

          {/* Our Best O2 Section */}
          <section className="py-20 px-4 md:px-16 lg:px-24">
            <h2 className="text-white text-4xl md:text-5xl font-semibold text-center mb-20 relative">
              Our Best O2
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 border-t-2 border-l-2 border-white/30 rounded-tl-xl"></div>
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-xl"></div>
            </h2>

            <div className="max-w-7xl mx-auto bg-[#2d3824] rounded-[42px] md:rounded-[80px] lg:rounded-[113px] p-10 relative shadow-subtle border-2 border-[#3e4a33]">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="flex justify-center relative -mt-36 -mb-36">
                  <Image
                    src="/images/plant9.png"
                    alt="Best O2 Plant"
                    width={1100}
                    height={1100}
                    className="object-contain z-10 plant-shadow"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-white text-3xl font-semibold">We Have Small And Best O2 Plants Collection</h3>
                  <p className="text-white text-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <p className="text-white text-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </p>
                  <div className="flex space-x-6 pt-4">
                    <button className="border-2 border-white text-white px-6 py-3 rounded-xl text-xl font-medium">
                      Explore
                    </button>
                    <div className="flex items-center text-white text-xl">
                      <span>01/04</span>
                      <ChevronRight className="ml-2" size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-[#232e1e] pt-16 pb-8 px-4 md:px-16 lg:px-24 mt-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <div className="flex items-center mb-6">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Planto Logo"
                    width={60}
                    height={60}
                    className="mr-3"
                  />
                  <span className="text-white font-black text-3xl">Planto.</span>
                </div>
                <p className="text-white text-xl mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>

              <div>
                <h4 className="text-white text-2xl font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/" className="text-white text-xl hover:text-green-400">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/plant-types" className="text-white text-xl hover:text-green-400">
                      Plant Types
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-white text-xl hover:text-green-400">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-white text-xl hover:text-green-400">
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white text-2xl font-semibold mb-6">For Every Updates</h4>
                <div className="flex mb-6">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="bg-transparent text-white text-lg px-4 py-3 rounded-l-xl border-2 border-white focus:outline-none w-full"
                  />
                  <button className="bg-white text-[#232e1e] text-lg font-semibold px-4 py-3 rounded-r-xl">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/20">
              <p className="text-white text-xl mb-4 md:mb-0">Planto. All rights reserved</p>
              <div className="flex space-x-6">
                <Link href="#" className="text-white hover:text-green-400">
                  <Facebook size={28} />
                </Link>
                <Link href="#" className="text-white hover:text-green-400">
                  <Twitter size={28} />
                </Link>
                <Link href="#" className="text-white hover:text-green-400">
                  <Linkedin size={28} />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

