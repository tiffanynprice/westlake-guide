import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">TIFFANY PRICE</h3>
            <p className="text-sm text-white/90">
              Your Guide to Westlake Real Estate
            </p>
            <p className="text-xs text-white/80 mt-4">
              Legacy Real Estate Group<br />
              Compass
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href="mailto:tiffany@legacyrealestategrp.com" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <Mail size={16} />
                tiffany@legacyrealestategrp.com
              </a>
              <a href="tel:512-888-4556" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <Phone size={16} />
                512.888.4556
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  2500 Bee Caves Road, Bldg 3, Suite 200<br />
                  Austin, TX 78746
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Motto</h4>
            <p className="text-sm italic">
              Passion. Honesty.<br />
              Professionalism. Communication
            </p>
            <p className="text-xs mt-4 text-white/80">
              I live here, work here and sell here.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-xs text-white/70">
          <p>
            Legacy Real Estate Group is a team of real estate agents affiliated with Compass.
            Compass is a licensed real estate broker and abides by all applicable Equal Housing Opportunity laws.
          </p>
          <p className="mt-2">
            License #{' '}829667
          </p>
        </div>
      </div>
    </footer>
  );
}
