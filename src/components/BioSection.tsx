export default function BioSection() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-black text-center mb-8">
          Get to Know Me
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Tiffany is a powerhouse real estate professional with a unique blend of marketing
            expertise and real estate investment savvy. A proud graduate of the University of
            Texas, Red McCombs School of Business with a degree in Business Marketing, Tiffany
            went on to become a high-level marketing executive, driving growth for both ambitious
            startups and billion-dollar companies. Her passion for real estate led her to actively
            invest and stay ahead of market trends, giving her invaluable industry insight. Now
            with Legacy Real Estate Group at Compass, Tiffany combines her strategic business
            expertise with her real estate experience, bringing fresh perspective and precision
            to every transaction.
          </p>

          <p>
            Whether you're a first-time homebuyer navigating the complexities of the market or
            a seasoned investor seeking strategic guidance, Tiffany is committed to providing
            personalized support and ensuring a seamless experience. She leverages her skills
            to negotiate on your behalf, identify optimal solutions, and ultimately help you
            achieve your real estate aspirations.
          </p>

          <p>
            Beyond her professional life, Tiffany is an active member of the Westlake community
            who values quality time with her family and maintains an active lifestyle through
            triathlons, hot yoga, and spin classes. She has a passion for creative outlets like
            cake decorating and enjoys mentoring aspiring marketers.
          </p>

          <div className="bg-gradient-to-br from-[#F5F1EB] to-[#E8DFD3] p-8 rounded-lg mt-8">
            <p className="text-center text-lg italic text-gray-700">
              Rooted in Davenport Ranch with kids at Bridge Point & Hill Country, I'm grateful
              to live and work in the community I serve. As an active member of the EEF, the
              Westlake Chamber and the Legacy Real Estate Group of Compass, a top 1% team in
              Austin, I bring true hyper-local expertise to every client.
            </p>
          </div>

          <p className="text-center text-lg">
            Currently on a quest for the perfect matcha latte recipe, Tiffany would love the
            opportunity to connect; whether it's about real estate, finding the best local spots,
            or sharing stories over a cup of coffee.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-center text-xl font-semibold text-gray-900 mb-8">
              Professional Affiliations & Certifications
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <img
                src="/lighter_logo_-_rec_(2)_(2)_(2).png"
                alt="Eanes Education Foundation Real Estate Council - Eanes ISD Specialist"
                className="h-24 md:h-28 w-auto object-contain"
              />
              <img
                src="/stroll_-_resident_business_badge_-_gray_2_(4)_(1)_(1)_(1).png"
                alt="Stroll Resident-Owned Business"
                className="h-20 md:h-24 w-auto object-contain"
              />
              <img
                src="/image copy.png"
                alt="Westlake Chamber of Commerce"
                className="h-20 md:h-24 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
