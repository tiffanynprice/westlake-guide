import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Location {
  id: string;
  month: string;
  location_name: string;
  description: string;
  image_url: string | null;
}

export default function MonthlyLocations() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchLocations();
  }, []);

  useEffect(() => {
    if (locations.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % locations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [locations.length]);

  const fetchLocations = async () => {
    try {
      const { data, error } = await supabase
        .from('monthly_locations')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (error) throw error;
      if (data) setLocations(data);
    } catch (error) {
      console.error('Error fetching locations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % locations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + locations.length) % locations.length);
  };

  if (isLoading) {
    return (
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-pulse">Loading...</div>
        </div>
      </div>
    );
  }

  if (locations.length === 0) {
    return null;
  }

  const currentLocation = locations[currentIndex];

  return (
    <div className="bg-gradient-to-br from-[#F5F1EB] to-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-black text-center mb-12">
          Where in Westlake You'll Find Me This Month
        </h2>

        <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="flex items-center justify-center mb-6">
            <MapPin size={40} className="text-black" />
          </div>

          <div className="text-center">
            <div className="text-sm text-gray-500 mb-2">{currentLocation.month}</div>
            <h3 className="text-2xl font-serif text-black mb-4">
              {currentLocation.location_name}
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {currentLocation.description}
            </p>
          </div>

          {locations.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                aria-label="Previous location"
              >
                <ChevronLeft size={24} className="text-black" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                aria-label="Next location"
              >
                <ChevronRight size={24} className="text-black" />
              </button>

              <div className="flex justify-center gap-2 mt-8">
                {locations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-black'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to location ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
