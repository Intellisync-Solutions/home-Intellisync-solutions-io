import { Button } from '../../../../components/ui/Button/button';
import { 
  UtensilsCrossed,
  Clock,
  Calendar,
  Users,
  Phone,
  MapPin,
  Star,
  Wine,
  ChevronRight,
  Instagram
} from 'lucide-react';

const RestaurantPlatform = () => {
  const menuCategories = [
    {
      name: "Starters",
      items: [
        {
          name: "Truffle Burrata",
          description: "Fresh burrata, truffle honey, toasted pine nuts, micro herbs",
          price: "$18",
          isSignature: true
        },
        {
          name: "Tuna Tartare",
          description: "Yellowfin tuna, avocado, citrus ponzu, wonton crisps",
          price: "$22"
        },
        {
          name: "Wild Mushroom Soup",
          description: "Forest mushrooms, cream, truffle oil, chives",
          price: "$14"
        }
      ]
    },
    {
      name: "Main Courses",
      items: [
        {
          name: "Wagyu Ribeye",
          description: "12oz prime cut, garlic confit, red wine jus",
          price: "$65",
          isSignature: true
        },
        {
          name: "Pan-Seared Salmon",
          description: "Scottish salmon, asparagus, lemon beurre blanc",
          price: "$38"
        },
        {
          name: "Wild Mushroom Risotto",
          description: "Arborio rice, porcini, parmesan, truffle oil",
          price: "$32"
        }
      ]
    }
  ];

  const specialEvents = [
    {
      title: "Wine Tasting Evening",
      date: "Every Thursday",
      description: "Explore our curated selection of fine wines paired with artisanal cheeses",
      price: "$85 per person"
    },
    {
      title: "Chef's Table Experience",
      date: "Friday & Saturday",
      description: "An intimate 7-course tasting menu with wine pairing",
      price: "$150 per person"
    },
    {
      title: "Sunday Jazz Brunch",
      date: "Sundays 11am-3pm",
      description: "Live jazz music with our signature brunch menu",
      price: "$55 per person"
    }
  ];

  const galleryImages = [
    "/images/restaurant/interior.jpg",
    "/images/restaurant/dish1.jpg",
    "/images/restaurant/wine.jpg",
    "/images/restaurant/chef.jpg"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-muted/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Fine Dining Experience</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover culinary excellence in an elegant atmosphere
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">
              Reserve a Table
              <Calendar className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Menu
              <UtensilsCrossed className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary mr-2" />
              <span>Open Tue-Sun: 5pm - 11pm</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary mr-2" />
              <span>123 Culinary Street, NY</span>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary mr-2" />
              <span>(555) 123-4567</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Seasonal Menu</h2>
          {menuCategories.map((category, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <h3 className="text-2xl font-semibold mb-6">{category.name}</h3>
              <div className="grid gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-start p-6 bg-background rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xl font-medium">{item.name}</h4>
                        {item.isSignature && (
                          <span className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full">
                            Chef's Signature
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground mt-2">{item.description}</p>
                    </div>
                    <span className="text-xl font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View Full Menu
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Special Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialEvents.map((event, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg border border-border"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <Wine className="w-5 h-5 text-primary" />
                </div>
                <p className="text-primary font-medium mb-2">{event.date}</p>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <p className="font-semibold">{event.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">Make a Reservation</h2>
          <div className="bg-background p-8 rounded-lg border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-md border border-input bg-background"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Time</label>
                <select className="w-full px-4 py-2 rounded-md border border-input bg-background">
                  <option>5:00 PM</option>
                  <option>6:00 PM</option>
                  <option>7:00 PM</option>
                  <option>8:00 PM</option>
                  <option>9:00 PM</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Party Size</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <select className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5+ People</option>
                </select>
              </div>
            </div>
            <Button className="w-full" size="lg">
              Reserve Now
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Atmosphere</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square bg-muted rounded-lg overflow-hidden">
                {/* Image placeholder */}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Follow us on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Guests Say</h2>
          <div className="flex items-center justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 text-primary fill-primary" />
            ))}
          </div>
          <blockquote className="text-xl italic text-muted-foreground mb-6">
            "An extraordinary dining experience. The attention to detail in every dish
            and the impeccable service make this restaurant truly special."
          </blockquote>
          <p className="font-medium">— The New York Times</p>
        </div>
      </section>
    </div>
  );
};

export default RestaurantPlatform;
