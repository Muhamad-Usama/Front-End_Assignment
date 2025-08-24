import { MapContainer, TileLayer, Circle } from "react-leaflet";
import L from "leaflet";
import { useMemo } from "react";

type Props = { zipCode: string };

// quick zip -> lat/lng map (add more as needed)
const ZIP_CENTER: Record<string, [number, number]> = {
  "29044": [34.0007, -81.0348], // Columbia, SC (rough center)
};

export default function QuoteMap({ zipCode }: Props) {
  const center = useMemo<[number, number]>(() => {
    return ZIP_CENTER[zipCode] ?? [34.0007, -81.0348];
  }, [zipCode]);

  // leaflet icon fix for bundlers
  // @ts-ignore
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });

  return (
    <div className="h-[300px] w-full">
      <div className="absolute top-3 left-3 z-[1000]
          flex items-center gap-2
          bg-white rounded-lg border border-gray-200 shadow-sm
          px-10 py-2 text-sm md:text-base text-gray-700">
        <span>Zip Code:</span>
        <span className="font-extrabold text-gray-900 tabular-nums">{zipCode}</span>
      </div>

      <MapContainer
        center={center}
        zoom={12}
        className="h-full w-full"
        scrollWheelZoom={false}
        dragging={true}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap"
        />
        <Circle
          center={center}
          radius={3500}
          pathOptions={{
            color: "#1da1f2",
            weight: 2,
            opacity: 0.9,
            fillColor: "#1da1f2",
            fillOpacity: 0.15,
          }}
        />
      </MapContainer>
    </div>
  );
}
