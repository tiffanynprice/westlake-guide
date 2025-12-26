import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-2xl font-serif text-black">
              <div className="leading-tight">TIFFANY</div>
              <div className="leading-tight">PRICE</div>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-black' : 'text-gray-700 hover:text-black'
              }`}
            >
              HOME
            </Link>
            <Link
              to="/westlake"
              className={`text-sm font-medium transition-colors ${
                isActive('/westlake') ? 'text-black' : 'text-gray-700 hover:text-black'
              }`}
            >
              WESTLAKE NEIGHBORHOODS
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-black' : 'text-gray-700 hover:text-black'
              }`}
            >
              CONTACT
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-medium ${
                isActive('/') ? 'text-black' : 'text-gray-700'
              }`}
            >
              HOME
            </Link>
            <Link
              to="/westlake"
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-medium ${
                isActive('/westlake') ? 'text-black' : 'text-gray-700'
              }`}
            >
              WESTLAKE NEIGHBORHOODS
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-medium ${
                isActive('/contact') ? 'text-black' : 'text-gray-700'
              }`}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
