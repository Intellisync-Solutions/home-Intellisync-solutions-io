import { Button } from '../../../../components/ui/Button/button';
import { 
  Home,
  Search,
  MapPin,
  Bed,
  Bath,
  Square,
  Phone,
  Mail,
  Calendar,
  Filter,
  ChevronRight
} from 'lucide-react';

const RealEstatePlatform = () => {
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      price: "$1,250,000",
      location: "Beverly Hills, CA",
      specs: {
        beds: 4,
        baths: 3.5,
        sqft: "3,200"
      },
      type: "For Sale",
      image: "/images/properties/luxury-villa.jpg"
    },
    {
      id: 2,
      title: "Downtown Penthouse",
      price: "$8,500/mo",
      location: "Manhattan, NY",
      specs: {
        beds: 3,
        baths: 2,
        sqft: "2,100"
      },
      type: "For Rent",
      image: "/images/properties/penthouse.jpg"
    },
    {
      id: 3,
      title: "Waterfront Condo",
      price: "$750,000",
      location: "Miami, FL",
      specs: {
        beds: 2,
        baths: 2,
        sqft: "1,800"
      },
      type: "For Sale",
      image: "/images/properties/condo.jpg"
    }
  ];

  const topAgents = [
    {
      name: "Sarah Johnson",
      title: "Luxury Property Specialist",
      sales: "50+ properties sold",
      rating: 4.9,
      image: "/images/agents/sarah.jpg"
    },
    {
      name: "Michael Chen",
      title: "Commercial Expert",
      sales: "75+ properties sold",
      rating: 4.8,
      image: "/images/agents/michael.jpg"
    },
    {
      name: "Emily Rodriguez",
      title: "Residential Advisor",
      sales: "40+ properties sold",
      rating: 4.9,
      image: "/images/agents/emily.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Find Your Dream Home</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover the perfect property from our extensive collection of premium listings
            </p>
            
            {/* Search Bar */}
            <div className="bg-background p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background"
                  />
                </div>
                <div className="relative">
                  <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <select className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background appearance-none">
                    <option>Property Type</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Condo</option>
                  </select>
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <select className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background appearance-none">
                    <option>Price Range</option>
                    <option>$100k - $300k</option>
                    <option>$300k - $500k</option>
                    <option>$500k+</option>
                  </select>
                </div>
              </div>
              <Button className="w-full md:w-auto">
                Search Properties
                <Search className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Properties</h2>
            <Button variant="outline">
              View All
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted relative">
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {property.type}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <p className="text-2xl font-bold text-primary mb-4">{property.price}</p>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {property.location}
                  </div>
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-2" />
                      {property.specs.beds} beds
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-2" />
                      {property.specs.baths} baths
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-2" />
                      {property.specs.sqft} sqft
                    </div>
                  </div>
                  <Button className="w-full mt-4">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Agents */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Meet Our Top Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topAgents.map((agent, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-border text-center">
                <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1">{agent.name}</h3>
                <p className="text-primary mb-2">{agent.title}</p>
                <p className="text-muted-foreground mb-4">{agent.sales}</p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="sm">
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Viewing */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Schedule a Viewing</h2>
          <p className="text-muted-foreground mb-8">
            Book a viewing with one of our expert agents at your convenience
          </p>
          <div className="bg-background p-6 rounded-lg border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-md border border-input bg-background"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded-md border border-input bg-background"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background"
                />
              </div>
              <select className="w-full px-4 py-2 rounded-md border border-input bg-background">
                <option>Preferred Time</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>
            <Button className="w-full">Schedule Viewing</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstatePlatform;
