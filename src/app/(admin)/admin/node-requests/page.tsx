export default function NodeRequestsPage() {
  return (
    <div className="p-4 sm:p-6">
      <div className="mb-6">
        <h1 className="font-vietnam font-medium text-2xl leading-8 text-white mb-2">
          Node Requests
        </h1>
        <p className="font-vietnam font-normal text-base leading-6 text-[#AAB3D0]">
          Review and manage node setup requests
        </p>
      </div>

      {/* Placeholder content */}
      <div className="flex items-center justify-center h-[400px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-3xl">
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
                d="M5 12H19M5 12C3.89543 12 3 11.1046 3 10V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V10C21 11.1046 20.1046 12 19 12M5 12C3.89543 12 3 12.8954 3 14V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V14C21 12.8954 20.1046 12 19 12M7 8H7.01M7 16H7.01"
                stroke="#AAB3D0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="font-vietnam font-medium text-lg text-[#AAB3D0]">
            Node requests list coming soon
          </p>
        </div>
      </div>
    </div>
  );
}
