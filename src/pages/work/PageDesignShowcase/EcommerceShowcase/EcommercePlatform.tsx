import { Button } from '../../../../components/ui/Button/button';
import { 
  ShoppingBag, 
  Search, 
  Heart,
  CreditCard,
  Truck,
  ShieldCheck,
  Star,
  Tag
} from 'lucide-react';

const EcommercePlatform = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$299.99",
      rating: 4.8,
      image: "/images/products/headphones.jpg",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Minimalist Watch",
      price: "$199.99",
      rating: 4.9,
      image: "/images/products/watch.jpg",
      category: "Accessories"
    },
    {
      id: 3,
      name: "Designer Backpack",
      price: "$129.99",
      rating: 4.7,
      image: "/images/products/backpack.jpg",
      category: "Fashion"
    }
  ];

  const features = [
    {
      icon: <CreditCard className="w-6 h-6 text-primary" />,
      title: "Secure Payments",
      description: "Shop with confidence using our encrypted payment system"
    },
    {
      icon: <Truck className="w-6 h-6 text-primary" />,
      title: "Fast Delivery",
      description: "Free shipping on orders over $50"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Buyer Protection",
      description: "100% money-back guarantee for 30 days"
    }
  ];

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Living",
    "Beauty",
    "Sports",
    "Books"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-6">Discover Amazing Products</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Shop the latest trends with confidence. Quality products, competitive prices.
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                Shop Now
                <ShoppingBag className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                Browse Categories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background"
              />
            </div>
            <Button variant="outline">
              <Tag className="mr-2 w-4 h-4" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group bg-background rounded-lg border border-border p-4 hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-muted rounded-md mb-4 relative overflow-hidden">
                  <button className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background">
                    <Heart className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </div>
                  <p className="font-bold">{product.price}</p>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm">{product.rating}</span>
                </div>
                <Button className="w-full">Add to Cart</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors text-center"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter for exclusive deals and updates.
          </p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommercePlatform;
