import { ChevronRight } from 'lucide-react'

const Breadcrumb = () => {
  const breadcrumbItems = [
    { label: 'GreenPal', href: '#', color: 'text-[#1d9bd1]' },
    { label: 'Ohio', href: '#', color: 'text-[#1d9bd1]' },
    { label: 'Columbus Lawn Care', href: null, color: 'text-[#4b4b4b]' }
  ]

  return (
    <nav className="flex items-center mb-8 ml-5" aria-label="Breadcrumb">
      <ol className="flex items-center text-xs sm:text-sm">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-3 h-3 text-gray-400 mx-1" />
            )}
            {item.href ? (
              <a
                href={item.href}
                className={`${item.color} hover:underline font-medium`}
              >
                {item.label}
              </a>
            ) : (
              <span className={`${item.color} font-medium`}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
