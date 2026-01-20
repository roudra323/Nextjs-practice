export default function Hero() {
  return (
    <section className="relative w-full pt-38.5 pb-20">
      <div className="max-w-257.25 mx-auto text-center px-4">
        {/* Main Heading */}
        <h1 className="font-medium text-[60px] leading-19.25 tracking-[-0.02em] text-[#DEFFF5] mb-4">
          Krown Validator Onboarding & Management Platform
        </h1>

        {/* Subheading */}
        <p className="max-w-183.5 mx-auto font-medium text-xl leading-7.5 tracking-[-0.04em] text-[#AAB3D0] mb-10">
          Choose the validation method that fits your technical expertise and
          stake size. Join the Krown ecosystem today.
        </p>

        {/* CTA Button */}
        <button className="inline-flex items-center justify-center px-4.5 py-2 gap-1.5 bg-[#0E966F] rounded-xl shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] hover:opacity-90 transition-opacity">
          <span className="font-medium text-base leading-[150%] text-white">
            Start Validating
          </span>
        </button>
      </div>
    </section>
  );
}
