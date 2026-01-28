// UI Icons
export const ArrowRightIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M3.33337 8H12.6667"
      stroke="#00C48C"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 3.33337L12.6667 8.00004L8 12.6667"
      stroke="#00C48C"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const InfoIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <circle cx="10" cy="10" r="8.33" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 10V6.67" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="10" cy="13.33" r="0.83" fill="currentColor" />
  </svg>
);

export const CheckIcon = ({ size = 30, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15ZM14.144 21.42L22.78 10.624L21.22 9.376L13.856 18.578L8.64 14.232L7.36 15.768L14.144 21.42Z"
      fill="#0E966F"
    />
  </svg>
);

export const CloseIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <path
      d="M4 4L12 12M12 4L4 12"
      stroke="#FFFFFF"
      strokeWidth="1.33"
      strokeLinecap="round"
    />
  </svg>
);

export const TikIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_tik)">
      <path
        d="M8.00001 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 8.00001 1.33325C4.31811 1.33325 1.33334 4.31802 1.33334 7.99992C1.33334 11.6818 4.31811 14.6666 8.00001 14.6666Z"
        stroke="#0E966F"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 8.00008L7.33333 9.33341L10 6.66675"
        stroke="#0E966F"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_tik">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const EligibilityTikIcon = ({ size = 30, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
      stroke="#0E966F"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.25 15L13.75 17.5L18.75 12.5"
      stroke="#0E966F"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const WarningIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M14.4866 12L9.15329 2.66665C9.037 2.46146 8.86836 2.29078 8.66457 2.17203C8.46078 2.05329 8.22915 1.99072 7.99329 1.99072C7.75743 1.99072 7.52579 2.05329 7.322 2.17203C7.11822 2.29078 6.94958 2.46146 6.83329 2.66665L1.49995 12C1.38241 12.2036 1.32077 12.4346 1.32129 12.6697C1.32181 12.9047 1.38447 13.1355 1.50292 13.3385C1.62136 13.5416 1.79138 13.7097 1.99575 13.8259C2.20011 13.942 2.43156 14.0021 2.66662 14H13.3333C13.5672 13.9997 13.797 13.938 13.9995 13.8208C14.202 13.7037 14.3701 13.5354 14.487 13.3327C14.6038 13.1301 14.6653 12.9002 14.6653 12.6663C14.6652 12.4324 14.6036 12.2026 14.4866 12Z"
      stroke="#FE5058"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 6V8.66667"
      stroke="#FE5058"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 11.3333H8.00667"
      stroke="#FE5058"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CopyIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g
      opacity=".23"
      stroke="#aab3d0"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.333 10.75v3.5c0 2.917-1.166 4.083-4.083 4.083h-3.5c-2.917 0-4.083-1.166-4.083-4.083v-3.5c0-2.917 1.166-4.083 4.083-4.083h3.5c2.917 0 4.083 1.166 4.083 4.083" />
      <path d="M18.333 5.75v3.5c0 2.917-1.166 4.083-4.083 4.083h-.917V10.75c0-2.917-1.166-4.083-4.083-4.083H6.667V5.75c0-2.917 1.166-4.083 4.083-4.083h3.5c2.917 0 4.083 1.166 4.083 4.083" />
    </g>
  </svg>
);

export const LeftArrowIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M14.1752 9L3.375 9"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="square"
    />
    <path
      d="M10.0876 13.5184L14.6251 9.00044L10.0876 4.48169"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="square"
    />
  </svg>
);
