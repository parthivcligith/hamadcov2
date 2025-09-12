"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import IslandNavbar from "@/components/island-navbar"
import MedicalMarquee from "@/components/medical-marquee"
import {
  ArrowLeft,
  BookOpen,
  Check,
  FileText,
  Globe2,
  MapPin,
  Mail,
  Phone,
  Package2,
  ShieldCheck,
  Ship,
  Thermometer,
} from "lucide-react"

export default function MedicalExportsClientPage() {
  const productCategories = [
    {
      title: "Antibiotics",
      examples: ["Amoxicillin", "Ciprofloxacin", "Azithromycin"],
    },
    {
      title: "Vitamins & Nutraceuticals",
      examples: ["Multivitamins", "Vitamin C", "Iron & Folic Acid"],
    },
    {
      title: "Generic Medicines",
      examples: ["Paracetamol", "Metformin", "Losartan"],
    },
    {
      title: "Medical Devices & Consumables",
      examples: ["Surgical gloves", "Syringes", "BP monitors"],
    },
    {
      title: "Specialty Pharmaceuticals",
      examples: ["ARVs", "Antimalarials", "Oncology drugs"],
    },
  ]

  const listingIncludes = [
    { label: "Description & Composition", icon: BookOpen },
    { label: "Strength & Dosage Form", icon: Package2 },
    { label: "Shelf Life & Packaging Options", icon: Ship },
    { label: "Export Certifications (COPP, CoA, MSDS, etc.)", icon: FileText },
  ]

  const services = [
    {
      title: "Product Sourcing",
      desc: "From WHO‑GMP & CDSCO‑certified Indian manufacturers",
      icon: ShieldCheck,
    },
    {
      title: "Export Documentation",
      desc: "Invoice, Packing List, Certificate of Origin, COPP",
      icon: FileText,
    },
    {
      title: "Regulatory Compliance",
      desc: "CDSCO, DGFT and country‑specific registration guidance",
      icon: ShieldCheck,
    },
    {
      title: "Shipping & Logistics",
      desc: "End‑to‑end support for air and sea freight",
      icon: Ship,
    },
    {
      title: "Cold Chain Logistics",
      desc: "Temperature‑controlled handling for sensitive products",
      icon: Thermometer,
    },
    {
      title: "Labeling & Packaging",
      desc: "Country‑specific labeling and packaging support",
      icon: Package2,
    },
  ]

  const markets = [
    "Nigeria",
    "Ghana",
    "Kenya",
    "Ethiopia",
    "Uganda",
    "Rwanda",
    "South Africa",
    "Tanzania",
    "Other African nations",
  ]

  const articles = [
    "How to Import Medicines from India to Africa",
    "What is a Certificate of Pharmaceutical Product (COPP)?",
    "Understanding Regulatory Requirements in Kenya and Nigeria",
    "How to Ensure Cold Chain Compliance in African Markets",
  ]

  return (
    <div className="min-h-screen bg-background">
      <IslandNavbar showLogo={true} />

      {/* Hero - Simplified structure */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: "80vh",
          minHeight: "500px",
          backgroundColor: "#0f172a",
          background: "#0f172a",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "#0f172a" }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/images/top-view-medicine-keyboard-arrangement.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.2,
            }}
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(15, 23, 42, 0.8)" }} />
        </div>

        <div className="relative h-full w-full flex items-center justify-center" style={{ zIndex: 10 }}>
          <div
            className="max-w-4xl mx-auto px-6 text-center"
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.9)",
              padding: "2rem",
              borderRadius: "1rem",
            }}
          >
            <Link
              href="/"
              className="inline-flex items-center mb-6 transition-colors duration-300 hover:scale-105 transform"
              style={{
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              <ArrowLeft className="mr-2 h-4 w-4" style={{ color: "#ffffff" }} />
              <span style={{ color: "#ffffff" }}>Back to home</span>
            </Link>

            <h1
              className="text-balance text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-wide animate-fade-in-up"
              style={{
                color: "#ffffff",
                marginBottom: "1rem",
              }}
            >
              Trusted Medical Exporters from India to Africa
            </h1>

            <p
              className="text-base md:text-lg animate-fade-in-up animation-delay-200 font-serif"
              style={{
                color: "#ffffff",
                marginBottom: "1.5rem",
              }}
            >
              Delivering Health. Ensuring Compliance.
            </p>

            <p
              className="max-w-2xl mx-auto text-pretty leading-relaxed text-sm md:text-base animate-fade-in-up animation-delay-400 text-justify"
              style={{
                color: "#ffffff",
                marginBottom: "2rem",
              }}
            >
              We are a merchant export company based in India, specializing in sourcing and exporting high‑quality
              medical products including pharmaceutical supplies, medical equipment, and healthcare solutions to markets
              across Africa. From compliance to logistics, HAMAD CO handles it all—so you can focus on what matters
              most: delivering better health outcomes.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up animation-delay-600">
              <button
                className="rounded-full px-6 py-3 font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1d4ed8"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#2563eb"
                }}
              >
                Request catalog
              </button>

              <button
                className="rounded-full px-6 py-3 font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  border: "2px solid #ffffff",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff"
                  e.currentTarget.style.color = "#0f172a"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.color = "#ffffff"
                }}
              >
                Talk to expert
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Added medical marquee component */}
      <MedicalMarquee />

      {/* Mission & About */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group">
              <CardHeader className="pb-2 md:pb-6">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-xl md:text-2xl font-serif group-hover:text-blue-600 transition-colors duration-300">
                    Our Mission
                  </CardTitle>
                  <Image
                    src="/images/doctor-healthcare.gif"
                    alt="Animated healthcare professional illustration"
                    width={60}
                    height={60}
                    className="md:w-20 md:h-20 ml-4 group-hover:scale-110 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <CardDescription className="text-justify leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  To be a trusted bridge between India's leading medical and pharmaceutical producers and the growing
                  healthcare needs of African countries—delivering quality pharmaceutical products with integrity and
                  efficiency while ensuring full regulatory compliance.
                </CardDescription>
                <div className="mt-4">
                  <Button
                    size="sm"
                    className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white border-0 font-medium text-xs px-3 py-1"
                  >
                    Explore Products
                  </Button>
                </div>
              </CardHeader>
            </Card>
            <Card className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group">
              <CardHeader className="pb-2 md:pb-6">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-xl md:text-2xl font-serif group-hover:text-blue-600 transition-colors duration-300">
                    About Us
                  </CardTitle>
                  <Image
                    src="/images/doctor.gif"
                    alt="Animated doctor illustration"
                    width={60}
                    height={60}
                    className="md:w-20 md:h-20 ml-4 group-hover:scale-110 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <CardDescription className="text-justify leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  HAMAD CO is a merchant export company focused on delivering Indian medical and pharmaceutical products
                  to clients across Africa. Our business is built on reliability, compliance, and strong partnerships
                  with certified Indian manufacturers in the healthcare sector.
                </CardDescription>
                <div className="mt-4">
                  <Button
                    size="sm"
                    className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white border-0 font-medium text-xs px-3 py-1"
                  >
                    Explore Products
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-4">
        <div className="mx-auto max-w-6xl px-6">
          <Card className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Why Choose HAMAD CO?</CardTitle>
              <CardDescription className="text-justify leading-relaxed">
                Built on compliance, reliability, and medical export expertise.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              {[
                "Medical products sourced from WHO‑GMP & CDSCO‑certified facilities",
                "End‑to‑end medical export support, including documentation and logistics",
                "Deep understanding of African healthcare and pharmaceutical markets",
                "Transparent business practices and competitive pricing for medical exports",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 group hover:bg-blue-50 p-3 rounded-lg transition-all duration-300"
                >
                  <Check className="mt-0.5 h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-700 text-justify leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {item}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900">Medical Export Products</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-justify leading-relaxed">
              All medical products meet international healthcare standards and are sourced from licensed Indian
              manufacturers with required medical certifications and regulatory approvals.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat, index) => (
              <Card
                key={cat.title}
                className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-serif group-hover:text-blue-600 transition-colors duration-300">
                    {cat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  <span className="block mb-2 font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    E.g.,
                  </span>
                  <ul className="list-disc pl-5 space-y-1">
                    {cat.examples.map((ex) => (
                      <li key={ex} className="group-hover:text-gray-700 transition-colors duration-300">
                        {ex}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Each Listing Includes */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {listingIncludes.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="rounded-xl border bg-white px-4 py-5 flex items-center gap-3 text-sm hover:shadow-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Export Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900">Medical Export Services</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-justify leading-relaxed">
              We handle the entire medical export workflow—from sourcing to delivery—while maintaining full compliance
              with both Indian and African regulatory requirements for healthcare products.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, index) => {
              const Icon = s.icon
              return (
                <Card
                  key={s.title}
                  className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="flex-row items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-50 grid place-items-center group-hover:bg-blue-100 transition-colors duration-300">
                      <Icon className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="p-0">
                      <CardTitle className="text-lg font-serif group-hover:text-blue-600 transition-colors duration-300">
                        {s.title}
                      </CardTitle>
                      <CardDescription className="text-justify leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {s.desc}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Markets We Serve */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-900">Healthcare Markets We Serve</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {markets.map((m, index) => (
              <Badge
                key={m}
                variant="outline"
                className="rounded-full border-gray-300 text-gray-800 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Globe2 className="mr-2 h-3.5 w-3.5" />
                {m}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section id="references" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-900">Our Medical Export References</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-justify leading-relaxed">
              Trusted partnerships with healthcare organizations and medical distributors across Africa and the Middle
              East.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                company: "Lagos Medical Supplies Ltd.",
                location: "Lagos, Nigeria",
                products: "Pharmaceutical imports",
                partnership: "5+ years",
              },
              {
                company: "Kenya Healthcare Distributors",
                location: "Nairobi, Kenya",
                products: "Medical equipment & supplies",
                partnership: "3+ years",
              },
              {
                company: "Gulf Medical Trading Co.",
                location: "Dubai, UAE",
                products: "Pharmaceutical products",
                partnership: "7+ years",
              },
              {
                company: "West Africa Pharma Solutions",
                location: "Accra, Ghana",
                products: "Generic medicines",
                partnership: "4+ years",
              },
              {
                company: "East African Medical Corp.",
                location: "Kampala, Uganda",
                products: "Medical consumables",
                partnership: "2+ years",
              },
              {
                company: "Sahara Healthcare Network",
                location: "Khartoum, Sudan",
                products: "Pharmaceutical exports",
                partnership: "6+ years",
              },
            ].map((reference, index) => (
              <Card
                key={index}
                className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {reference.company}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2 group-hover:text-gray-700 transition-colors duration-300">
                      <MapPin className="h-4 w-4 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                      <span>{reference.location}</span>
                    </div>
                    <div className="flex items-center gap-2 group-hover:text-gray-700 transition-colors duration-300">
                      <Package2 className="h-4 w-4 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                      <span>{reference.products}</span>
                    </div>
                    <div className="flex items-center gap-2 group-hover:text-gray-700 transition-colors duration-300">
                      <Check className="h-4 w-4 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
                      <span>Partnership: {reference.partnership}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-900">Medical Export Resources</h2>
            <Link
              href="#"
              className="text-blue-700 hover:underline text-sm hover:text-blue-800 transition-colors duration-300"
            >
              View all
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {articles.map((a, index) => (
              <Card
                key={a}
                className="rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-5 flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-blue-600 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-800 text-justify leading-relaxed group-hover:text-blue-600 transition-colors duration-300">
                    {a}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white">Contact Our Medical Export Team</h2>
          <p className="mt-3 text-white/90 text-justify leading-relaxed max-w-2xl mx-auto">
            Ready to place a pharmaceutical export order or need more information about our pharmaceutical and
            healthcare products? Our expert team is here to help with all your pharmaceutical export needs.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                <Phone className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-sm text-white/80">Phone</p>
              <p className="mt-1 font-medium tracking-wide text-white">+966599274750</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                <Mail className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-sm text-white/80">Email</p>
              <p className="mt-1 font-medium tracking-wide text-white">Hamad@Hamadco.in</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                <Globe2 className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-sm text-white/80">Website</p>
              <p className="mt-1 font-medium tracking-wide text-white">www.hamadco.in</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                <MapPin className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-sm text-white/80">Location</p>
              <p className="mt-1 font-medium tracking-wide text-white">Kerala, India</p>
            </div>
          </div>

          <div className="mt-10">
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700 px-7 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white">
              Request Medical Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Added custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        :global(body) {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#333">H</text></svg>') 12 12, auto;
        }
      `}</style>
    </div>
  )
}
