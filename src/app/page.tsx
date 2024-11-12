'use client'

import { useState, useEffect, useRef } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/Button"
import { Card, CardContent } from "@/components/Card"
import {
  Calendar,
  Clock,
  Moon,
  Sun,
  Menu,
  X,
  Star,
  ArrowRight,
  Apple,
  Play,
  Check,
} from "lucide-react"

export default function Component() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const testimonialRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      console.log('dark')
      document.documentElement.classList.add('dark')
    } else {
      console.log('no-dark')
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const eventPhotos = [
    'https://res.cloudinary.com/zeit-inc/image/upload/c_scale,w_720/nextconf-photos/Sexton_Vercel_3022.jpg',
    'https://res.cloudinary.com/zeit-inc/image/upload/c_scale,w_720/nextconf-photos/Sexton_Vercel_3015.jpg',
    'https://res.cloudinary.com/zeit-inc/image/upload/c_scale,w_720/nextconf-photos/Sexton_Vercel_3010.jpg',
    'https://res.cloudinary.com/zeit-inc/image/upload/c_scale,w_720/nextconf-photos/Sexton_Vercel_3004.jpg',
    'https://res.cloudinary.com/zeit-inc/image/upload/c_scale,w_720/nextconf-photos/Sexton_Vercel_3003.jpg',
    'https://res.cloudinary.com/zeit-inc/image/upload/c_scale,w_720/nextconf-photos/Sexton_Vercel_3002.jpg',
    'https://res.cloudinary.com/zeit-inc/image/upload/c_scale,w_720/nextconf-photos/Sexton_Vercel_2995.jpg',
    'https://res.cloudinary.com/zeit-inc/image/upload/c_scale,w_720/nextconf-photos/Sexton_Vercel_2993.jpg',
    'https://res.cloudinary.com/zeit-inc/image/upload/c_scale,w_720/nextconf-photos/Sexton_Vercel_2991.jpg',
    'https://res.cloudinary.com/zeit-inc/image/upload/c_scale,w_720/nextconf-photos/Sexton_Vercel_2990.jpg',
    'https://res.cloudinary.com/zeit-inc/image/upload/c_scale,w_720/nextconf-photos/Sexton_Vercel_1282.jpg',
    'https://res.cloudinary.com/zeit-inc/image/upload/c_scale,w_720/nextconf-photos/Sexton_Vercel_1281.jpg',
    // 'https://res.cloudinary.com/zeit-inc/image/upload/c_scale,w_720/nextconf-photos/Sexton_Vercel_1280.jpg',
    // 'https://res.cloudinary.com/zeit-inc/image/upload/c_scale,w_720/nextconf-photos/Sexton_Vercel_1278.jpg'
  ];

  const testimonials = [
    {
      name: "Emma Johnson",
      handle: "@emma_j",
      avatar: "https://avatar.vercel.sh/emma",
      text: "XO made it so easy to find the best parties when I visited New York. Loved it!"
    },
    {
      name: "James Brown",
      handle: "@james_brownie",
      avatar: "https://avatar.vercel.sh/james",
      text: "Organizing my own event was a breeze with XO. I could handle everything in one place!"
    },
    {
      name: "Sophia Wilson",
      handle: "@sophiawilson",
      avatar: "https://avatar.vercel.sh/sophia",
      text: "Met so many amazing people through events I found on XO. Highly recommend it!"
    },
    {
      name: "Liam Davis",
      handle: "@liam_d",
      avatar: "https://avatar.vercel.sh/liam",
      text: "XO helped me explore a new city and discover all the hidden gems. Perfect for travelers!"
    },
    {
      name: "Olivia Martinez",
      handle: "@olivia_martinez",
      avatar: "https://avatar.vercel.sh/olivia",
      text: "I used XO to host a party, and it was fantastic! Super easy to manage invites and details."
    }
  ];
  

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/5 dark:bg-gray-950/5 backdrop-blur-sm border-b border-white/10 dark:border-gray-800/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto">
          <div className="flex h-16 items-center justify-between px-4">
            <Link
              className="text-2xl font-semibold text-gray-900 dark:text-white hover:opacity-90 transition-opacity flex items-center"
              href="#"
            >
              <Star className="mr-2 h-6 w-6 text-[#4D4DFF]" />
              EventPro
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {['Features', 'Gallery', 'Pricing', 'Contact'].map((item) => (
                <Link
                  key={item}
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#4D4DFF] dark:hover:text-[#4D4DFF] transition-colors"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
              <Button
                className="hidden md:flex bg-[#4D4DFF] hover:bg-[#4D4DFF]/90 text-white"
              >
                Download App
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm md:hidden">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {['Features', 'Gallery', 'Pricing', 'Contact'].map((item) => (
              <Link
                key={item}
                className="text-2xl text-gray-900 dark:text-gray-100 hover:text-[#4D4DFF] transition-colors"
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            >
              <source src="/placeholder.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="container mx-auto px-4 z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Your Next Event Starts Here
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  Plan, manage, and experience events like never before with our powerful platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button className="bg-[#4D4DFF] hover:bg-[#4D4DFF]/90 text-white h-14 px-8">
                    <Apple className="mr-2 h-5 w-5" />
                    App Store
                  </Button>
                  <Button className="bg-[#FF0012] hover:bg-[#FF0012]/90 text-white h-14 px-8">
                    <Play className="mr-2 h-5 w-5" />
                    Play Store
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="relative mx-auto w-[280px] h-[580px] rounded-[3rem] border-4 border-gray-200 dark:border-gray-800 overflow-hidden">

                <svg width="280" height="580" xmlns="http://www.w3.org/2000/svg">
                  <image
                    href="/assets/home-xo.jpg" 
                    x='-5'
                    y='-24'
                    className='h-[108%]'
                  />
                </svg>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Amazing Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Smart Planning",
                  description: "Manage your tickets and dates in the same application",
                  icon: Calendar,
                  color: "#FF0012",
                },
                {
                  title: "Real-time Updates",
                  description: "Stay informed with instant notifications",
                  icon: Star,
                  color: "#FE00EE",
                },
                {
                  title: "Easy Management",
                  description: "Manage your events with just a few taps",
                  icon: Clock,
                  color: "#4D4DFF",
                },
              ].map((feature, index) => (
                <Card 
                  key={index} 
                  className="relative bg-white dark:bg-gray-800 border-none shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group"
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${feature.color}20, transparent)`,
                      transform: 'translateX(-100%)',
                      animation: 'shimmer 2s infinite'
                    }}
                  />
                  <div className="absolute inset-0 border border-transparent group-hover:border-[#4D4DFF]/30 rounded-lg transition-colors duration-500" />
                  <CardContent className="relative p-6 z-10">
                    <feature.icon className="h-12 w-12 text-[#4D4DFF] mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-black text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              What People Are Saying
            </h2>
            <p className="text-xl text-gray-400 text-center mb-12">
              Don not just take our word for it. Here is what real people are saying about EventPro.
            </p>
            <div className="relative">
              <div 
                ref={testimonialRef}
                className="flex gap-6 animate-scroll"
                style={{
                  animation: 'scroll 40s linear infinite',
                }}
              >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <Card key={index} className="flex-shrink-0 w-[300px] bg-gray-900 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-gray-400">{testimonial.handle}</p>
                        </div>
                      </div>
                      <p className="text-gray-300">{testimonial.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Simple, Transparent Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Basic",
                  price: "Free",
                  description: "Ideal for small events",
                  features: ["Up to 50 attendees", "Basic support", "1 event organizer", "Standard analytics"],
                },
                {
                  name: "Pro",
                  price: "$49",
                  description: "For larger events and enhanced features",
                  features: [
                    "Up to 500 attendees",
                    "Priority support",
                    "5 event organizers",
                    "Advanced analytics",
                    "Custom branding",
                  ],
                  popular: true,
                },
                {
                  name: "Premium",
                  price: "Custom",
                  description: "For enterprises with extensive needs",
                  features: [
                    "Unlimited attendees",
                    "24/7 dedicated support",
                    "Unlimited event organizers",
                    "Custom analytics",
                    "API access",
                    "Personalized onboarding",
                  ],
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${
                    plan.popular
                      ? 'border-[#4D4DFF] scale-105 shadow-lg shadow-[#4D4DFF]/10'
                      : 'border-gray-200 dark:border-gray-800'
                  } bg-white dark:bg-gray-800 transition-transform hover:scale-[1.02]`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-[#4D4DFF] text-white text-sm font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                      {plan.price !== "Free" && plan.price !== "Custom" && (
                        <span className="text-gray-600 dark:text-gray-400">/month</span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                          <Check className="h-5 w-5 text-[#4D4DFF] mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? 'bg-[#4D4DFF] hover:bg-[#4D4DFF]/90 text-white'
                          : 'bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600'
                      }`}
                    >
                      {plan.price === "Free" ? "Get Started for Free" : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        <section id="gallery" className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Event Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
                >
                  <Image
                    src={photo}
                    alt={`Event photo ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white hover:bg-white/20">
                      View Event
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button className="bg-[#4D4DFF] hover:bg-[#4D4DFF]/90 text-white">
                View More Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>


        <section className="py-20 bg-[#4D4DFF]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Start Planning?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Download our app and start creating unforgettable events today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white hover:bg-gray-100 text-[#4D4DFF] h-14 px-8">
                <Apple className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
              <Button className="bg-white hover:bg-gray-100 text-[#4D4DFF] h-14 px-8">
                <Play className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="#" className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
                <Star className="mr-2 h-6 w-6 text-[#4D4DFF]" />
                EventPro
              </Link>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Making event management simple and efficient.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Product</h3>
              <ul className="space-y-2">
                {['Features', 'Pricing', 'Gallery', 'Blog'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#4D4DFF] dark:hover:text-[#4D4DFF]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Company</h3>
              <ul className="space-y-2">
                {['About', 'Careers', 'Contact', 'Press'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#4D4DFF] dark:hover:text-[#4D4DFF]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Legal</h3>
              <ul className="space-y-2">
                {['Terms', 'Privacy', 'Cookies', 'Licenses'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#4D4DFF] dark:hover:text-[#4D4DFF]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2024 EventPro. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}