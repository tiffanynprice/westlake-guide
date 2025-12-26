/*
  # Tiffany Price Real Estate Website Schema

  1. New Tables
    - `home_valuation_requests`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `address` (text, required)
      - `bedrooms` (integer, required)
      - `bathrooms` (numeric, required)
      - `has_pool` (boolean, required)
      - `created_at` (timestamptz, default now)
      - `status` (text, default 'pending')
    
    - `testimonials`
      - `id` (uuid, primary key)
      - `client_name` (text, required)
      - `testimonial_text` (text, required)
      - `display_order` (integer, default 0)
      - `is_active` (boolean, default true)
      - `created_at` (timestamptz, default now)
    
    - `notable_sales`
      - `id` (uuid, primary key)
      - `address` (text, required)
      - `neighborhood` (text)
      - `bedrooms` (integer)
      - `bathrooms` (numeric)
      - `square_feet` (integer)
      - `price` (numeric)
      - `price_per_sf` (numeric)
      - `image_url` (text)
      - `display_order` (integer, default 0)
      - `is_active` (boolean, default true)
      - `created_at` (timestamptz, default now)
    
    - `monthly_locations`
      - `id` (uuid, primary key)
      - `month` (text, required)
      - `location_name` (text, required)
      - `description` (text)
      - `image_url` (text)
      - `display_order` (integer, default 0)
      - `is_active` (boolean, default true)
      - `created_at` (timestamptz, default now)
    
    - `westlake_neighborhoods`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `description` (text, required)
      - `highlights` (text[])
      - `schools` (text[])
      - `image_url` (text)
      - `display_order` (integer, default 0)
      - `is_active` (boolean, default true)
      - `created_at` (timestamptz, default now)

  2. Security
    - Enable RLS on all tables
    - Public read access for content tables (testimonials, notable_sales, monthly_locations, westlake_neighborhoods)
    - Public insert access for home_valuation_requests (form submissions)
    - No update/delete access for public users
*/

-- Home Valuation Requests Table
CREATE TABLE IF NOT EXISTS home_valuation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  address text NOT NULL,
  bedrooms integer NOT NULL,
  bathrooms numeric NOT NULL,
  has_pool boolean NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE home_valuation_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit home valuation requests"
  ON home_valuation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  testimonial_text text NOT NULL,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active testimonials"
  ON testimonials
  FOR SELECT
  TO anon
  USING (is_active = true);

-- Notable Sales Table
CREATE TABLE IF NOT EXISTS notable_sales (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  address text NOT NULL,
  neighborhood text,
  bedrooms integer,
  bathrooms numeric,
  square_feet integer,
  price numeric,
  price_per_sf numeric,
  image_url text,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE notable_sales ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active notable sales"
  ON notable_sales
  FOR SELECT
  TO anon
  USING (is_active = true);

-- Monthly Locations Table
CREATE TABLE IF NOT EXISTS monthly_locations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  month text NOT NULL,
  location_name text NOT NULL,
  description text,
  image_url text,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE monthly_locations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active monthly locations"
  ON monthly_locations
  FOR SELECT
  TO anon
  USING (is_active = true);

-- Westlake Neighborhoods Table
CREATE TABLE IF NOT EXISTS westlake_neighborhoods (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  highlights text[] DEFAULT '{}',
  schools text[] DEFAULT '{}',
  image_url text,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE westlake_neighborhoods ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active westlake neighborhoods"
  ON westlake_neighborhoods
  FOR SELECT
  TO anon
  USING (is_active = true);

-- Insert sample testimonials
INSERT INTO testimonials (client_name, testimonial_text, display_order) VALUES
('Matt M.', 'Working with the Legacy team was an amazing experience! As a first-time homebuyer, I could not have asked for a better experience. They took the time to understand my style, preferences, and needs along with tailoring their time around my chaotic schedule.', 1),
('Derek V.', 'Tiffany has been incredible to work with. She is driven, understanding, patient, and honest with her knowledge and opinions. The transaction couldn''t have gone smoother and we have been lucky enough to refer her to quite a few close friends and family members.', 2),
('Skye C.', 'Tiffany was so amazing to work with! We didn''t know much about the home buying process. She walked us through each step so we always knew what was going on. Not only did she make us feel comfortable but she saved us a lot of money.', 3);

-- Insert sample monthly locations
INSERT INTO monthly_locations (month, location_name, description, display_order) VALUES
('January 2026', 'Trianon Coffee', 'Stop by and say hi! I love connecting with neighbors over a great cup of coffee.', 1),
('February 2026', 'Cafe Largesse', 'You''ll find me working here this month. Let''s chat all things Westlake!', 2);

-- Insert sample notable sales from the ad
INSERT INTO notable_sales (address, neighborhood, bedrooms, bathrooms, square_feet, price, price_per_sf, display_order) VALUES
('3503 Riva Ridge Road', 'Davenport Ranch', 5, 3.5, 5702, 4349000, 762, 1),
('2204 Demona Drive', 'Rob Roy', 4, 4, 4421, 2950000, 667, 2);

-- Insert Westlake neighborhoods sample data
INSERT INTO westlake_neighborhoods (name, description, highlights, schools, display_order) VALUES
('Davenport Ranch', 'A premier master-planned community in West Austin offering resort-style amenities and hill country views.', ARRAY['Community pools and parks', 'Hike and bike trails', 'Close to shopping and dining', 'Hill country views'], ARRAY['Bridge Point Elementary', 'Hill Country Middle School', 'Westlake High School'], 1),
('Rob Roy', 'An exclusive luxury neighborhood known for its sprawling estates and proximity to downtown Austin.', ARRAY['Large estate lots', 'Mature trees', 'Gated community', 'Privacy and exclusivity'], ARRAY['Eanes Elementary', 'Hill Country Middle School', 'Westlake High School'], 2),
('Westwood', 'A sought-after neighborhood featuring beautiful homes and easy access to excellent schools.', ARRAY['Family-friendly', 'Top-rated schools', 'Community amenities', 'Central Westlake location'], ARRAY['Westwood Elementary', 'Hill Country Middle School', 'Westlake High School'], 3),
('Barton Creek', 'Luxurious living with world-class golf courses, country clubs, and natural beauty.', ARRAY['Barton Creek Country Club', 'Multiple golf courses', 'Resort-style living', 'Greenbelt access'], ARRAY['Bridge Point Elementary', 'Hill Country Middle School', 'Westlake High School'], 4);