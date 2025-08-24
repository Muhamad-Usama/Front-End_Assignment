import { useState } from 'react'
import ServiceProvidersSection from './ServiceProviders'
import { FAQItem } from '../ui/FAQItem'

interface FAQ { id: number; question: string; answer: string }

const FAQSection = () => {
  const [expanded, setExpanded] = useState<number[]>([])

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "When is the best time of year to get landscaping projects done?",
      answer: "It's generally recommended to maintain a grass height of about 2.5 to 3 inches (6-8 cm). Different grass types may have specific height recommendations."
    },
    {
      id: 2,
      question: "When is the best time of year to get landscaping projects done?",
      answer: "It's generally recommended to maintain a grass height of about 2.5 to 3 inches (6-8 cm). Different grass types may have specific height recommendations."
    },
    {
      id: 3,
      question: "When is the best time of year to get landscaping projects done?",
      answer: "It's generally recommended to maintain a grass height of about 2.5 to 3 inches (6-8 cm). Different grass types may have specific height recommendations."
    },
    {
      id: 4,
      question: "How much does lawn care service typically cost?",
      answer: "Lawn care costs vary depending on your location, lawn size, and services needed. Most basic mowing services range from $30-$80 per visit, while comprehensive lawn care packages can range from $100-$300 per month."
    },
    {
      id: 5,
      question: "What services are included in basic lawn care?",
      answer: "Basic lawn care typically includes mowing, edging, and blowing off walkways and driveways. Additional services like fertilization, weed control, and seasonal cleanup are usually offered as add-ons."
    },
    {
      id: 6,
      question: "Are there any safety precautions to follow while mowing?",
      answer: "Yes, always wear protective gear including safety glasses and closed-toe shoes. Check for debris before mowing, never mow wet grass, and keep children and pets away from the mowing area."
    }
  ]

  const toggle = (id: number) =>
    // @ts-ignore - React 19 function parameter type compatibility
    setExpanded(cur => cur.includes(id) ? cur.filter(x => x !== id) : [...cur, id])

  const expandAll = () => setExpanded(faqs.map(f => f.id))

  return (
    <div className="bg-gray-50">
      <div className="px-4 pt-8 md:pt-12">
        <div className="max-w-md mx-auto md:max-w-3xl lg:max-w-5xl">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-700 mb-4 md:mb-5">
              How does GreenPal Work?
            </h3>
            <p className="text-gray-600 text-md md:text-lg leading-relaxed max-w-2xl mx-auto">
              Common questions about how GreenPal can help you hire the best lawn care service in Indianapolis
            </p>
          </div>
        </div>
      </div>

      <section className="py-4 md:py-6">
        <div className="max-w-md md:max-w-3xl lg:max-w-5xl mx-auto px-4 md:px-0">
          <ul className="rounded-xl bg-transparent">
            {faqs.map(f => (
              <FAQItem
                // @ts-ignore - React 19 key prop compatibility
                key={f.id}
                faq={f}
                expanded={expanded.includes(f.id)}
                onToggle={() => toggle(f.id)}
              />
            ))}
          </ul>

          <div className="mt-6 text-center">
            <button
              onClick={expandAll}
              className="
                inline-flex items-center justify-center
                px-12 py-4
                w-full
                max-w-sm 
                mx-auto
                rounded-full
                border border-[#f97316]
                bg-transparent
                text-[#f97316]
                font-semibold
                text-xl
                hover:bg-orange-50
                transition-colors duration-200"
            >
              <span className="flex items-center gap-1">
                See all FAQs
                <span className="text-3xl leading-none relative bottom-[2px]">›</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      <ServiceProvidersSection />
    </div>
  )
}

export default FAQSection
