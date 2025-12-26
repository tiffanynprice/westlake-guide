import { useState, useEffect } from 'react';
import { Building2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Sale {
  id: string;
  address: string;
  neighborhood: string | null;
  bedrooms: number | null;
  bathrooms: number | null;
  square_feet: number | null;
  price: number | null;
  price_per_sf: number | null;
  image_url: string | null;
}

export default function NotableSales() {
  const [sales, setSales] = useState<Sale[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    try {
      const { data, error } = await supabase
        .from('notable_sales')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (error) throw error;
      if (data) setSales(data);
    } catch (error) {
      console.error('Error fetching sales:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatPrice = (price: number | null) => {
    if (!price) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatNumber = (num: number | null) => {
    if (!num) return 'N/A';
    return new Intl.NumberFormat('en-US').format(num);
  };

  if (isLoading) {
    return (
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">Loading sales...</div>
        </div>
      </div>
    );
  }

  if (sales.length === 0) {
    return null;
  }

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-[#8B7355] text-center mb-12">
          Notable Sales
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sales.map((sale) => (
            <div
              key={sale.id}
              className="bg-gradient-to-br from-[#F5F1EB] to-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-[#8B7355]/10 flex items-center justify-center">
                <Building2 size={64} className="text-[#8B7355]" />
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {sale.address}
                </h3>
                {sale.neighborhood && (
                  <p className="text-sm text-gray-600 mb-4">{sale.neighborhood}</p>
                )}

                <div className="grid grid-cols-2 gap-3 text-sm">
                  {sale.bedrooms && (
                    <div>
                      <span className="text-gray-500">Beds:</span>
                      <span className="ml-1 font-semibold">{sale.bedrooms}</span>
                    </div>
                  )}
                  {sale.bathrooms && (
                    <div>
                      <span className="text-gray-500">Baths:</span>
                      <span className="ml-1 font-semibold">{sale.bathrooms}</span>
                    </div>
                  )}
                  {sale.square_feet && (
                    <div>
                      <span className="text-gray-500">SF:</span>
                      <span className="ml-1 font-semibold">{formatNumber(sale.square_feet)}</span>
                    </div>
                  )}
                  {sale.price_per_sf && (
                    <div>
                      <span className="text-gray-500">$/SF:</span>
                      <span className="ml-1 font-semibold">${sale.price_per_sf}</span>
                    </div>
                  )}
                </div>

                {sale.price && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-2xl font-serif text-[#8B7355]">
                      {formatPrice(sale.price)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
