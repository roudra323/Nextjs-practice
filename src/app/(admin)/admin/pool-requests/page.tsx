export default function PoolRequestsPage() {
  return (
    <div className="p-4 sm:p-6">
      <div className="mb-6">
        <h1 className="font-vietnam font-medium text-2xl leading-8 text-white mb-2">
          Pool Requests
        </h1>
        <p className="font-vietnam font-normal text-base leading-6 text-[#AAB3D0]">
          Review and manage pool creation requests
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
                d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5"
                stroke="#AAB3D0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="font-vietnam font-medium text-lg text-[#AAB3D0]">
            Pool requests list coming soon
          </p>
        </div>
      </div>
    </div>
  );
}
