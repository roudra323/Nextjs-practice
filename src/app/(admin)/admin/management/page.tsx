export default function ManagementPage() {
  return (
    <div className="p-4 sm:p-6">
      <div className="mb-6">
        <h1 className="font-vietnam font-medium text-2xl leading-8 text-white mb-2">
          Management
        </h1>
        <p className="font-vietnam font-normal text-base leading-6 text-[#AAB3D0]">
          Manage users and system settings
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
                d="M12 4.354C13.124 3.21399 14.6439 2.56934 16.2396 2.55247C17.8353 2.5356 19.3685 3.14783 20.5156 4.26394C21.6628 5.38006 22.3317 6.91395 22.3705 8.5292C22.4093 10.1445 21.8151 11.7086 20.7089 12.8811L12.7089 21.0811C12.6161 21.1758 12.5054 21.2508 12.3828 21.3015C12.2603 21.3522 12.1283 21.3779 11.9949 21.3769C11.8616 21.3759 11.73 21.3483 11.6083 21.2957C11.4865 21.2432 11.3771 21.1666 11.286 21.0705L3.29104 12.8805C2.18492 11.708 1.59066 10.1439 1.62948 8.52863C1.6683 6.91339 2.33721 5.37954 3.48437 4.26348C4.63153 3.14743 6.16467 2.53527 7.76039 2.55217C9.3561 2.56907 10.876 3.21373 12 4.354Z"
                stroke="#AAB3D0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="font-vietnam font-medium text-lg text-[#AAB3D0]">
            Management tools coming soon
          </p>
        </div>
      </div>
    </div>
  );
}
