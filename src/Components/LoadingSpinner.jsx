import { useEffect, useState } from 'react'

function LoadingSpinner() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4">
        <div className="w-full max-w-md space-y-4">
          <div className="h-10 w-2/3 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 w-5/6 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 w-4/6 bg-gray-300 rounded animate-pulse"></div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="h-24 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-24 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center h-screen bg-[#f5f5f5]">
      <p className="text-2xl font-semibold text-[#627382]">
        Loaded Successfully 🎉
      </p>
    </div>
  )
}

export default LoadingSpinner
