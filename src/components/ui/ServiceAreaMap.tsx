import { useEffect, useRef } from 'react'

const ServiceAreaMap = () => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let map: any
    ;(async () => {
      if (!ref.current) return
      const L = await import('leaflet')

      // fix default icon path in many bundlers
      // @ts-ignore
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })

      map = L.map(ref.current!, {
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: false,
      }).setView([34.0007, -81.0348], 10) // Columbia, SC

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      }).addTo(map)

      L.circle([34.0007, -81.0348], {
        radius: 20000,
        color: '#22c55e',
        fillColor: '#22c55e',
        fillOpacity: 0.15,
        weight: 2,
      }).addTo(map)

      L.marker([34.0007, -81.0348]).addTo(map)
    })()

    return () => {
      // @ts-ignore
      if (map) map.remove()
    }
  }, [])

  return (
    <div className="relative rounded-2xl overflow-hidden border border-gray-200 h-64">
      <div ref={ref} className="h-full w-full" />
    </div>
  )
}

export default ServiceAreaMap
