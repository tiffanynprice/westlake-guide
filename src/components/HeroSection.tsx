export default function HeroSection() {
  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/legacyrealestate_361_(2).jpg"
          alt="Tiffany Price - Westlake Real Estate Agent"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20"></div>
      </div>

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-center md:justify-start">
            <div className="text-center md:text-left">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif mb-4 tracking-wide text-white drop-shadow-2xl">
                TIFFANY<br />PRICE
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white drop-shadow-lg tracking-wide">
                Your Guide To Westlake Real Estate
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent"></div>

      <div className="absolute bottom-8 left-4 sm:left-8 md:left-12 flex flex-col gap-3">
        <img
          src="/lreg_logo_wordmark_white.png"
          alt="Legacy Real Estate Group"
          className="w-48 sm:w-56 md:w-64 h-auto drop-shadow-lg"
        />
        <img
          src="/compass_logo_h_w.png"
          alt="Compass"
          className="w-32 sm:w-36 md:w-40 h-auto drop-shadow-lg"
        />
      </div>
    </div>
  );
}
