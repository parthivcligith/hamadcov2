"use client"
import { Card, CardContent } from "@/components/ui/card"
import { HomeExtraSections } from "@/components/home-extra-sections"
import ScrollMarquee from "@/components/scroll-marquee"
import { GSAPAnimatedSection } from "@/components/gsap-animated-section"
import { CertificationsSection, GlobalReachSection, TestimonialsSection } from "@/components/business-sections"

export default function LandingPage() {
  const productCategories = [
    {
      title: "Pharmaceutical Exports",
      description: "High-quality pharmaceutical products, medical supplies & healthcare equipment",
      iconName: "Stethoscope",
      href: "/medical",
      image: "/medical-devices-surgical-instruments.png",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Marine Exports",
      description: "Reliable marine spare parts for ships, vessels & offshore operations",
      iconName: "Ship",
      href: "/marine-exports",
      image: "/marine-parts.png",
      color: "bg-teal-50 text-teal-600",
    },
    {
      title: "Aeronautical Parts Exports",
      description: "High-precision aircraft components & aviation spare parts",
      iconName: "Plane",
      href: "/aeronautical-exports",
      image: "/aircraft-parts.png",
      color: "bg-sky-50 text-sky-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <GSAPAnimatedSection animation="fadeUp">
        <section
          className="relative overflow-hidden bg-slate-900 text-white pt-20 pb-16 md:pt-24 md:pb-24"
          style={{ minHeight: "80vh" }} // Updated hero section height from 100vh to 80vh
        >
          <div className="absolute inset-0 bg-slate-900/40" />

          <img
            src="/images/global-logistics-bg.jpg"
            alt="Global logistics and transportation network"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-60 blur-sm"
            crossOrigin="anonymous"
          />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center z-10">
            <GSAPAnimatedSection animation="scale" delay={0.3}>
              <div className="bg-white/98 backdrop-blur-md rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/20">
                <GSAPAnimatedSection animation="fadeUp" delay={0.5}>
                  <p className="text-xs font-medium mb-2 md:mb-3 text-slate-600">International Export Specialists</p>
                </GSAPAnimatedSection>

                <GSAPAnimatedSection animation="fadeUp" delay={0.7}>
                  <h1 className="text-xl sm:text-2xl md:text-4xl font-serif font-bold mb-3 md:mb-4 text-balance text-slate-900">
                    World‑Class Exports. Seamless Compliance.
                  </h1>
                </GSAPAnimatedSection>

                <GSAPAnimatedSection animation="fadeUp" delay={0.9}>
                  <p className="text-xs sm:text-sm max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed text-slate-700 text-justify">
                    We are a trusted export company specializing in pharmaceutical products, medical supplies, marine spare parts, and aeronautical spare parts. With a strong focus on quality, compliance, and timely delivery, we provide reliable export solutions that connect businesses to global markets. Partner with us for international trade excellence, seamless logistics, and a worldwide reach across the pharmaceutical, marine, and aeronautical industries.
                  </p>
                </GSAPAnimatedSection>

                <GSAPAnimatedSection animation="stagger" delay={1.1}>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mb-8 md:mb-12">
                    <button
                      className="btn-primary-dark px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-base font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                      onClick={() => (window.location.href = "/medical")}
                    >
                      <span className="sm:hidden">Explore</span>
                      <span className="hidden sm:inline">Explore Our Products</span>
                    </button>
                    <button
                      className="hero-secondary-btn px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-base font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                      onClick={() => (window.location.href = "/contact")}
                    >
                      Get a Quote
                    </button>
                  </div>
                </GSAPAnimatedSection>

                <GSAPAnimatedSection animation="scale" delay={1.3}>
                  <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-4 max-w-5xl mx-auto">
                    {productCategories.map((category, index) => (
                      <div
                        key={category.title}
                        className="group relative bg-white hover:bg-gray-50 rounded-lg md:rounded-xl p-2 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-200 hover:border-gray-300"
                      >
                        <div className="flex items-center justify-center mb-1 md:mb-3">
                          <div className="relative">
                            {category.title === "Pharmaceutical Exports" && (
                              <img
                                src="/images/medicine.gif"
                                alt="Medical Caduceus Symbol"
                                className="w-16 h-16 md:w-24 md:h-24 object-contain"
                              />
                            )}
                            {category.title === "Marine Exports" && (
                              <img
                                src="/images/ship.gif"
                                alt="Marine Ship Symbol"
                                className="w-16 h-16 md:w-24 md:h-24 object-contain"
                              />
                            )}
                            {category.title === "Aeronautical Parts Exports" && (
                              <img
                                src="/images/plane.gif"
                                alt="Aircraft Symbol"
                                className="w-16 h-16 md:w-24 md:h-24 object-contain"
                              />
                            )}
                            <div className="absolute inset-0 bg-gray-600/10 rounded-full blur-xl group-hover:bg-gray-600/20 transition-all duration-300"></div>
                          </div>
                        </div>
                        <h3 className="text-xs md:text-xl font-serif font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-gray-800 transition-colors text-center leading-tight">
                          {category.title}
                        </h3>
                        <p className="text-gray-700 text-xs leading-relaxed text-center mb-2 md:mb-3 md:text-justify hidden md:block">
                          {category.description}
                        </p>
                        <button
                          className="btn-card-primary flex items-center justify-center px-1 py-0.5 text-[10px] font-semibold rounded md:rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg w-full"
                          onClick={() => (window.location.href = category.href)}
                        >
                          <span className="hidden md:inline">Explore</span>
                          <span className="md:hidden">Explore</span>
                          <svg
                            className="w-1.5 h-1.5 md:w-2 md:h-2 ml-1 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </GSAPAnimatedSection>
              </div>
            </GSAPAnimatedSection>
          </div>
        </section>
      </GSAPAnimatedSection>

      <ScrollMarquee />

      <GSAPAnimatedSection animation="fadeUp">
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <GSAPAnimatedSection animation="fadeUp" className="text-center mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-2 md:mb-3 text-gray-900">
                About Hamadco
              </h2>
              <p className="text-base sm:text-lg max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed text-gray-600">
                Your trusted partner in global export excellence
              </p>
            </GSAPAnimatedSection>

            <div className="grid md:grid-cols-2 items-center gap-6 md:gap-10">
              <GSAPAnimatedSection animation="slideLeft" className="space-y-4 md:space-y-5">
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-gray-900">
                  Two Decades of Export Excellence
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-justify">
                  Since our founding, Hamadco has been at the forefront of international trade, specializing in
                  pharmaceutical, marine, and aeronautical exports. Our commitment to quality, precision, and regulatory
                  compliance has made us a trusted partner for businesses worldwide.
                </p>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-justify">
                  We serve growing markets across Africa, the Middle East, and beyond, ensuring that quality products
                  reach those who need them most. Our expertise in export regulations and compliance standards sets us
                  apart in the industry.
                </p>
                <GSAPAnimatedSection animation="stagger" className="grid grid-cols-2 gap-2 sm:gap-3 pt-2 sm:pt-3">
                  <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm border">
                    <div className="text-xl sm:text-2xl font-bold mb-1 text-gray-900">20+</div>
                    <div className="text-xs text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm border">
                    <div className="text-xl sm:text-2xl font-bold mb-1 text-gray-900">50+</div>
                    <div className="text-xs text-gray-600">Countries Served</div>
                  </div>
                </GSAPAnimatedSection>
              </GSAPAnimatedSection>

              <GSAPAnimatedSection animation="slideRight" className="space-y-4 md:space-y-5">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Doctor%2C%20Medical%2C%20Surgeon%2C%20Healthcare%20Animation-Ce3HPtzetiMk8ZaG68trs1kAt7ctqc.gif"
                    alt="Healthcare Animation"
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  />
                  <h3 className="text-base sm:text-lg font-serif font-semibold text-gray-900">Our Mission & Values</h3>
                </div>
                <GSAPAnimatedSection animation="stagger" className="space-y-2 sm:space-y-3">
                  {[
                    {
                      title: "Quality Assurance",
                      desc: "Rigorous quality control and compliance with international standards",
                      color: "blue",
                    },
                    {
                      title: "Global Reach",
                      desc: "Seamless export solutions connecting markets worldwide",
                      color: "green",
                    },
                    {
                      title: "Innovation",
                      desc: "Cutting-edge products and solutions for modern industry needs",
                      color: "orange",
                    },
                    {
                      title: "Partnership",
                      desc: "Building long-term relationships based on trust and reliability",
                      color: "purple",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-white rounded-lg border">
                      <div className={`w-2 h-2 bg-${item.color}-600 rounded-full mt-1 sm:mt-2 flex-shrink-0`}></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">{item.title}</h4>
                        <p className="text-gray-600 text-xs text-justify">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </GSAPAnimatedSection>
              </GSAPAnimatedSection>
            </div>
          </div>
        </section>
      </GSAPAnimatedSection>

      <GSAPAnimatedSection animation="fadeUp">
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 items-center gap-6 md:gap-10">
              <GSAPAnimatedSection animation="slideLeft">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Doctor-6q8TJEGMrk0JYhvcoBIb897PnxH1sx.gif"
                    alt="Doctor Animation"
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  />
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-serif font-bold text-gray-900">
                    Two decades of export excellence
                  </h2>
                </div>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 text-justify">
                  Hamadco has been at the forefront of international trade, specializing in pharmaceutical, marine, and
                  aeronautical exports. Our commitment to quality, precision, and reliability has made us a trusted
                  partner for businesses worldwide.
                </p>
              </GSAPAnimatedSection>

              <GSAPAnimatedSection animation="slideRight">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Recording%202025-09-01%20142553-mEQjyfTzq3UJzyhpXEWMaxgLekdNca.mp4"
                  className="w-full rounded-lg shadow-xl"
                  style={{ aspectRatio: "16/9" }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  crossOrigin="anonymous"
                />
              </GSAPAnimatedSection>
            </div>
          </div>
        </section>
      </GSAPAnimatedSection>

      <GSAPAnimatedSection animation="fadeUp">
        <CertificationsSection />
      </GSAPAnimatedSection>

      <GSAPAnimatedSection animation="fadeUp">
        <GlobalReachSection />
      </GSAPAnimatedSection>

      <GSAPAnimatedSection animation="fadeUp">
        <TestimonialsSection />
      </GSAPAnimatedSection>

      <GSAPAnimatedSection animation="fadeUp">
        <section id="references" className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <GSAPAnimatedSection animation="fadeUp" className="text-center mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-2 md:mb-3 text-gray-900">
                Our References
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto text-justify">
                Trusted by organizations and distributors across the globe for reliable export services.
              </p>
            </GSAPAnimatedSection>

            <GSAPAnimatedSection animation="stagger" className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  company: "African Medical Distributors Ltd.",
                  location: "Lagos, Nigeria",
                  testimonial: "Hamadco has been our reliable partner for pharmaceutical imports for over 5 years.",
                },
                {
                  company: "East Africa Healthcare Solutions",
                  location: "Nairobi, Kenya",
                  testimonial: "Excellent compliance support and timely delivery of medical supplies.",
                },
                {
                  company: "Middle East Medical Trading",
                  location: "Dubai, UAE",
                  testimonial: "Professional service and high-quality medical products consistently delivered.",
                },
              ].map((reference, index) => (
                <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">{reference.company}</h3>
                    <p className="text-xs text-gray-500 mb-2 sm:mb-3">{reference.location}</p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-justify">
                      "{reference.testimonial}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </GSAPAnimatedSection>
          </div>
        </section>
      </GSAPAnimatedSection>

      <HomeExtraSections />

      <style jsx>{`
        /* Removed custom button styles since we're now using CSS classes from globals.css */
        :global(body) {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="%23333">H</text></svg>') 12 12, auto;
        }
      `}</style>
    </div>
  )
}
