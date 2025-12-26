import HeroSection from '../components/HeroSection';
import ValuationForm from '../components/ValuationForm';
import BioSection from '../components/BioSection';
import MonthlyLocations from '../components/MonthlyLocations';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ValuationForm />
      <BioSection />
      <MonthlyLocations />
      <Testimonials />
    </div>
  );
}
