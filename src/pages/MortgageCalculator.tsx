import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, Home, DollarSign, Percent, Calendar } from "lucide-react";

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(4800);
  const [homeInsurance, setHomeInsurance] = useState(1200);

  const calculateMortgage = () => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    
    const monthlyPayment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
      (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    const monthlyTax = propertyTax / 12;
    const monthlyInsurance = homeInsurance / 12;
    
    return {
      principal: monthlyPayment,
      tax: monthlyTax,
      insurance: monthlyInsurance,
      total: monthlyPayment + monthlyTax + monthlyInsurance
    };
  };

  const payment = calculateMortgage();
  const downPaymentPercent = (downPayment / homePrice) * 100;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
            <Calculator className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mortgage Calculator
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Calculate your monthly mortgage payment including principal, interest, taxes, and insurance.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Inputs */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Loan Details</h2>
              
              <div className="space-y-6">
                {/* Home Price */}
                <div>
                  <Label className="text-sm font-medium flex items-center gap-2 mb-3">
                    <Home className="h-4 w-4" />
                    Home Price
                  </Label>
                  <Input
                    type="number"
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                    className="text-lg"
                  />
                  <Slider
                    value={[homePrice]}
                    onValueChange={(value) => setHomePrice(value[0])}
                    max={2000000}
                    min={100000}
                    step={10000}
                    className="mt-3"
                  />
                </div>

                {/* Down Payment */}
                <div>
                  <Label className="text-sm font-medium flex items-center gap-2 mb-3">
                    <DollarSign className="h-4 w-4" />
                    Down Payment ({downPaymentPercent.toFixed(1)}%)
                  </Label>
                  <Input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="text-lg"
                  />
                  <Slider
                    value={[downPayment]}
                    onValueChange={(value) => setDownPayment(value[0])}
                    max={homePrice * 0.5}
                    min={homePrice * 0.03}
                    step={1000}
                    className="mt-3"
                  />
                </div>

                {/* Interest Rate */}
                <div>
                  <Label className="text-sm font-medium flex items-center gap-2 mb-3">
                    <Percent className="h-4 w-4" />
                    Interest Rate
                  </Label>
                  <Input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="text-lg"
                  />
                  <Slider
                    value={[interestRate]}
                    onValueChange={(value) => setInterestRate(value[0])}
                    max={10}
                    min={3}
                    step={0.1}
                    className="mt-3"
                  />
                </div>

                {/* Loan Term */}
                <div>
                  <Label className="text-sm font-medium flex items-center gap-2 mb-3">
                    <Calendar className="h-4 w-4" />
                    Loan Term (years)
                  </Label>
                  <Input
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="text-lg"
                  />
                  <Slider
                    value={[loanTerm]}
                    onValueChange={(value) => setLoanTerm(value[0])}
                    max={30}
                    min={10}
                    step={1}
                    className="mt-3"
                  />
                </div>

                {/* Property Tax */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">
                    Annual Property Tax
                  </Label>
                  <Input
                    type="number"
                    value={propertyTax}
                    onChange={(e) => setPropertyTax(Number(e.target.value))}
                    className="text-lg"
                  />
                </div>

                {/* Home Insurance */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">
                    Annual Home Insurance
                  </Label>
                  <Input
                    type="number"
                    value={homeInsurance}
                    onChange={(e) => setHomeInsurance(Number(e.target.value))}
                    className="text-lg"
                  />
                </div>
              </div>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {/* Monthly Payment */}
              <Card className="p-8 bg-gradient-hero text-white">
                <h3 className="text-lg font-semibold mb-2">Total Monthly Payment</h3>
                <div className="text-4xl font-bold mb-6">
                  ${payment.total.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Principal & Interest</span>
                    <span className="font-semibold">
                      ${payment.principal.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Property Tax</span>
                    <span className="font-semibold">
                      ${payment.tax.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Home Insurance</span>
                    <span className="font-semibold">
                      ${payment.insurance.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Loan Summary */}
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Loan Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loan Amount</span>
                    <span className="font-semibold">
                      ${(homePrice - downPayment).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Down Payment</span>
                    <span className="font-semibold">
                      ${downPayment.toLocaleString()} ({downPaymentPercent.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interest Rate</span>
                    <span className="font-semibold">{interestRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loan Term</span>
                    <span className="font-semibold">{loanTerm} years</span>
                  </div>
                </div>
              </Card>

              {/* CTA */}
              <Card className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Ready to get pre-approved?</h3>
                <p className="text-muted-foreground mb-6">
                  Get a personalized rate quote in just 3 minutes.
                </p>
                <Button className="w-full bg-primary hover:bg-primary-hover" size="lg">
                  Start Your Application
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;