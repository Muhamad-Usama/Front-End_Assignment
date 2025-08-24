export default function VendorSkeletonCard() {
  const line = "h-3 bg-gray-200/70 rounded"
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200" />
        <div className="flex-1 space-y-2">
          <div className={`${line} w-40`} />
          <div className={`${line} w-28`} />
        </div>
      </div>
      <div className="mt-3 space-y-2">
        <div className={`${line} w-44`} />
        <div className={`${line} w-32`} />
      </div>
      <div className="mt-3 space-y-2">
        <div className={`${line} w-full`} />
        <div className={`${line} w-5/6`} />
        <div className={`${line} w-3/5`} />
      </div>
      <div className="mt-4 h-11 bg-gray-200/70 rounded-full" />
    </div>
  )
}
