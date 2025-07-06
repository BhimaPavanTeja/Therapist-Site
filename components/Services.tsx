import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Anxiety & Stress Management",
    description: "Navigate life's pressures with evidence-based strategies tailored to your unique needs. Learn practical coping techniques and mindfulness practices to reduce anxiety and manage stress effectively. Together, we'll build your resilience and help you regain control over your emotional well-being. Discover lasting tools that will serve you in both challenging moments and everyday life.",
    image: "/1.jpg",
    alt: "Person meditating peacefully by a calm lake"
  },
  {
    id: 2,
    title: "Relationship Counseling",
    description: "Strengthen your connections and improve communication patterns in your relationships. Whether you're working through conflicts, building intimacy, or navigating major life transitions together, we'll explore healthy ways to connect. Learn to express your needs clearly and listen with empathy. Build the foundation for lasting, fulfilling relationships.",
    image: "/2.jpg",
    alt: "Couple holding hands and talking together"
  },
  {
    id: 3,
    title: "Trauma Recovery",
    description: "Heal from past experiences at your own pace in a safe, supportive environment. Using trauma-informed approaches, we'll work together to process difficult memories and emotions. Develop healthy coping strategies and rebuild your sense of safety and trust. Your healing journey is unique, and we'll honor your strength and resilience every step of the way.",
    image: "/3.jpg",
    alt: "Sunrise breaking through clouds, symbolizing hope and renewal"
  }
];

const sessionFees = [
  {
    type: "Individual Session",
    price: "$200",
    description: "One-on-one therapeutic sessions tailored to your personal growth and healing journey."
  },
  {
    type: "Couples Session",
    price: "$240",
    description: "Relationship-focused sessions designed to strengthen communication and connection."
  }
];

export default function Services() {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-12 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Services & Specialties
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive therapeutic support designed to meet you where you are 
            and guide you toward lasting positive change.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Session Fees Section */}
        <div className="border-t border-gray-700 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Session Fees
            </h3>
            <p className="text-xl text-gray-300">
              Transparent pricing for quality therapeutic care
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sessionFees.map((fee, index) => (
              <div 
                key={index}
                className="bg-gray-900 rounded-lg p-8 text-center border border-gray-700 hover:border-gray-600 transition-colors duration-300"
              >
                <div className="mb-4">
                  <h4 className="text-2xl font-semibold text-white mb-2">
                    {fee.type}
                  </h4>
                  <div className="text-4xl font-bold text-blue-400 mb-4">
                    {fee.price}
                  </div>
                  <p className="text-gray-300">
                    {fee.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-300 mb-6">
              Ready to begin your journey? Let&apos;s connect and discuss how we can work together.
            </p>
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-800 text-white cursor-pointer px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule Your Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}