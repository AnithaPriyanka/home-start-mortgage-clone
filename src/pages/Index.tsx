import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Star, TrendingUp, Calculator, Home, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Lower rates",
      description: "Our AI-powered technology unlocks better rates for you"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Higher approval chances",
      description: "Advanced pre-qualification increases your approval odds"
    },
    {
      icon: <ArrowRight className="h-6 w-6" />,
      title: "Lightning-fast process", 
      description: "From approval to closing in record time"
    }
  ];

  const stats = [
    { value: "$100B+", label: "Funded" },
    { value: "3 min", label: "Application" },
    { value: "4.4★", label: "Rating" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 lg:py-32 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              The first<br />
              <span className="bg-gradient-to-r from-white/90 to-white bg-clip-text text-transparent">
                AI-powered
              </span>
              <br />Mortgage
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Our tech unlocks lower rates, higher chances of approval,<br className="hidden md:block" />
              and a lightning‑fast process from approval to closing.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center items-center gap-8 mb-12 text-sm md:text-base">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-bold text-white">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/start">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8">
                  Start my approval
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="text-sm text-white/80">3 min • No hard credit check</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find out why we're better.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-soft">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-lg mb-4">
                  <div className="text-primary">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold text-lg">Excellent 4.4 out of 5</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Over $100 billion funded
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Paul", "Amanda", "Tiara"].map((name, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Better made the mortgage process incredibly smooth and fast. Their AI technology 
                  really helped us get a great rate and close quickly."
                </p>
                <p className="font-semibold">{name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of homeowners who chose Better for their mortgage needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/start">
                <Button size="lg" className="bg-primary hover:bg-primary-hover px-8">
                  Get pre-approved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/mortgage-calculator">
                <Button variant="outline" size="lg" className="px-8">
                  <Calculator className="mr-2 h-5 w-5" />
                  Try our calculator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;