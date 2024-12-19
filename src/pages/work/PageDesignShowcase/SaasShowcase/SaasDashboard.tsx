import { Button } from '../../../../components/ui/button';
import { 
  ArrowRight, 
  BarChart2, 
  Zap, 
  Shield, 
  Users, 
  Layout, 
  Clock,
  CheckCircle2
} from 'lucide-react';

const SaasDashboard = () => {
  const features = [
    {
      icon: <BarChart2 className="w-6 h-6 text-indigo-500" />,
      title: "Real-time Analytics",
      description: "Get instant insights with our powerful analytics dashboard"
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-500" />,
      title: "Lightning Fast",
      description: "Optimized performance for the smoothest user experience"
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-500" />,
      title: "Enterprise Security",
      description: "Bank-grade security to protect your sensitive data"
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with your team members"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small teams",
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "24/7 support",
        "1GB storage"
      ]
    },
    {
      name: "Professional",
      price: "$99",
      description: "For growing businesses",
      features: [
        "Up to 20 team members",
        "Advanced analytics",
        "Priority support",
        "10GB storage"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "Custom analytics",
        "Dedicated support",
        "Unlimited storage"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Transform Your Workflow
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Streamline your business operations with our intuitive dashboard solution.
              Built for modern teams who demand excellence.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 text-white hover:bg-slate-800"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-20 relative">
            <div className="relative mx-auto max-w-5xl">
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700 shadow-2xl p-2">
                <img
                  src="/dashboard-preview.png"
                  alt="Dashboard Preview"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Our comprehensive suite of features helps you stay ahead of the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              >
                <div className="bg-slate-700/50 rounded-lg p-3 inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Built by developers,
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                  for developers
                </span>
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                We understand the challenges of modern development teams because we've been there.
                Our platform is crafted with attention to detail and a deep understanding of
                what developers need to succeed.
              </p>
              <ul className="space-y-4">
                {[
                  "10+ years of industry experience",
                  "Used by Fortune 500 companies",
                  "99.99% uptime guarantee",
                  "24/7 dedicated support"
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-slate-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-1">
                <div className="bg-slate-900 rounded-lg p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800 rounded-lg p-4">
                      <Layout className="w-8 h-8 text-indigo-500 mb-2" />
                      <h4 className="text-white font-semibold">Modern UI</h4>
                      <p className="text-slate-400 text-sm">Sleek & Intuitive</p>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4">
                      <Clock className="w-8 h-8 text-purple-500 mb-2" />
                      <h4 className="text-white font-semibold">Real-time</h4>
                      <p className="text-slate-400 text-sm">Live Updates</p>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4">
                      <Shield className="w-8 h-8 text-pink-500 mb-2" />
                      <h4 className="text-white font-semibold">Secure</h4>
                      <p className="text-slate-400 text-sm">Enterprise-grade</p>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4">
                      <Users className="w-8 h-8 text-indigo-500 mb-2" />
                      <h4 className="text-white font-semibold">Team-first</h4>
                      <p className="text-slate-400 text-sm">Collaboration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Choose the perfect plan for your team's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-slate-800 rounded-xl p-8 border ${
                  plan.popular ? 'border-indigo-500' : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-500 text-white text-sm px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-white mb-4">{plan.price}<span className="text-slate-400 text-lg">/mo</span></div>
                <p className="text-slate-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600'
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaasDashboard;
