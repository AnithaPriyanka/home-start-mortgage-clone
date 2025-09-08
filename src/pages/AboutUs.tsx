import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Target, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Our Mission",
      description: "To make homeownership simpler, faster — and most importantly, more accessible for all Americans."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Our Team", 
      description: "A diverse group of technologists, mortgage experts, and customer advocates working together."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Our Values",
      description: "Transparency, innovation, and putting our customers first in everything we do."
    }
  ];

  const metrics = [
    { value: "$100B+", label: "Total funded", description: "In mortgages since our founding" },
    { value: "500K+", label: "Families helped", description: "Homeowners we've served" },
    { value: "4.4/5", label: "Customer rating", description: "Based on thousands of reviews" },
    { value: "50%", label: "Faster process", description: "Compared to traditional lenders" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We're making homeownership simpler, faster — and most importantly, more accessible for all Americans.
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-green-600 text-lg font-semibold mb-2">Our mission</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  We're making homeownership simpler, faster — and most importantly, more accessible for all Americans.
                </h3>
                <p className="text-muted-foreground text-lg mb-8">
                  The status quo is broken. For decades, getting a mortgage has been an overly complex, 
                  slow, and expensive process. We're changing that by leveraging technology to create 
                  a faster, more transparent, and more accessible mortgage experience.
                </p>
                <Link to="/start">
                  <Button className="bg-primary hover:bg-primary-hover">
                    Get started today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                        <div className="text-primary">
                          {value.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{value.title}</h4>
                        <p className="text-muted-foreground text-sm">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our impact by the numbers
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See how we're transforming the mortgage industry and helping families achieve homeownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold mb-1">
                  {metric.label}
                </div>
                <p className="text-muted-foreground text-sm">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built on innovation and transparency
              </h2>
              <p className="text-muted-foreground text-lg">
                We believe technology should make financial services more accessible, not more complicated. 
                That's why we've built our platform from the ground up with AI and automation at its core.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8">
                <TrendingUp className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">AI-Powered Underwriting</h3>
                <p className="text-muted-foreground">
                  Our proprietary AI technology analyzes your financial profile in real-time, 
                  providing faster decisions and better rates than traditional lenders.
                </p>
              </Card>

              <Card className="p-8">
                <Users className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">Customer-First Approach</h3>
                <p className="text-muted-foreground">
                  Every feature we build is designed with our customers in mind. No hidden fees, 
                  no confusing jargon — just a straightforward path to homeownership.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to experience the future of mortgages?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of thousands of homeowners who've chosen a better way to get a mortgage.
            </p>
            <Link to="/start">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8">
                Start your application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;