function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#f5f5f5]">
      <div className="w-10 h-10 border-4 border-t-[#632EE3] border-gray-300 rounded-full animate-spin mr-3"></div>
      <p className="text-2xl font-semibold text-[#627382]">Loading...</p>
    </div>
  )
}

export default LoadingSpinner
