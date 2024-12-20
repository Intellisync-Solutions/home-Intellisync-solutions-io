import { ServicesHero } from '../components/PageSections/ServicesHero/ServicesHero';
import { ServicesCTA } from '../components/PageSections/ServicesHero/ServicesCTA';

const Services = () => {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesCTA />
    </div>
  );
};

export default Services;