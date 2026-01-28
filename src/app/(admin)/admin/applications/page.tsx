export default function AdminApplicationsPage() {
  return (
    <div className="p-4 sm:p-6">
      <div className="mb-6">
        <h1 className="font-vietnam font-medium text-2xl leading-8 text-white mb-2">
          Validator Applications
        </h1>
        <p className="font-vietnam font-normal text-base leading-6 text-[#AAB3D0]">
          Review and manage validator applications
        </p>
      </div>

      {/* Placeholder content */}
      <div className="flex items-center justify-center h-100 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-3xl">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-[#131839] rounded-2xl flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01"
                stroke="#AAB3D0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="font-vietnam font-medium text-lg text-[#AAB3D0]">
            Applications list coming soon
          </p>
        </div>
      </div>
    </div>
  );
}
