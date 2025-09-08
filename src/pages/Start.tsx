import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Start = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
    propertyType: "",
    creditScore: "",
    employmentStatus: "",
    annualIncome: "",
    downPayment: "",
    homePrice: "",
    loanPurpose: ""
  });
  const { toast } = useToast();

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Handle form submission
      toast({
        title: "Application Started!",
        description: "We'll review your information and get back to you within 24 hours.",
      });
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.zipCode && formData.propertyType;
      case 3:
        return formData.creditScore && formData.employmentStatus && formData.annualIncome;
      case 4:
        return formData.homePrice && formData.downPayment && formData.loanPurpose;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Get your personalized rate
            </h1>
            <p className="text-muted-foreground">
              Complete this quick form to see rates from multiple lenders
            </p>
          </div>

          {/* Progress Bar */}
          <Card className="p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium">Step {step} of {totalSteps}</span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}% complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </Card>

          {/* Form Steps */}
          <Card className="p-8">
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Let's start with your contact information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name*</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => updateFormData("firstName", e.target.value)}
                      placeholder="Enter your first name"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name*</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => updateFormData("lastName", e.target.value)}
                      placeholder="Enter your last name"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address*</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      placeholder="Enter your email"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number*</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      placeholder="(555) 123-4567"
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Tell us about the property</h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="zipCode">Property ZIP Code*</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => updateFormData("zipCode", e.target.value)}
                      placeholder="12345"
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium mb-4 block">Property Type*</Label>
                    <RadioGroup
                      value={formData.propertyType}
                      onValueChange={(value) => updateFormData("propertyType", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="single-family" id="single-family" />
                        <Label htmlFor="single-family">Single Family Home</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="condo" id="condo" />
                        <Label htmlFor="condo">Condominium</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="townhouse" id="townhouse" />
                        <Label htmlFor="townhouse">Townhouse</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="multi-family" id="multi-family" />
                        <Label htmlFor="multi-family">Multi-Family (2-4 units)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Your financial profile</h2>
                <div className="space-y-6">
                  <div>
                    <Label>Credit Score Range*</Label>
                    <Select onValueChange={(value) => updateFormData("creditScore", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your credit score range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent (740+)</SelectItem>
                        <SelectItem value="good">Good (680-739)</SelectItem>
                        <SelectItem value="fair">Fair (620-679)</SelectItem>
                        <SelectItem value="poor">Poor (Below 620)</SelectItem>
                        <SelectItem value="unsure">I'm not sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Employment Status*</Label>
                    <Select onValueChange={(value) => updateFormData("employmentStatus", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your employment status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employed">Employed</SelectItem>
                        <SelectItem value="self-employed">Self-Employed</SelectItem>
                        <SelectItem value="retired">Retired</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="unemployed">Unemployed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="annualIncome">Annual Income*</Label>
                    <Input
                      id="annualIncome"
                      type="number"
                      value={formData.annualIncome}
                      onChange={(e) => updateFormData("annualIncome", e.target.value)}
                      placeholder="$75,000"
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Loan details</h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="homePrice">Home Purchase Price*</Label>
                    <Input
                      id="homePrice"
                      type="number"
                      value={formData.homePrice}
                      onChange={(e) => updateFormData("homePrice", e.target.value)}
                      placeholder="$400,000"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="downPayment">Down Payment Amount*</Label>
                    <Input
                      id="downPayment"
                      type="number"
                      value={formData.downPayment}
                      onChange={(e) => updateFormData("downPayment", e.target.value)}
                      placeholder="$80,000"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-4 block">Loan Purpose*</Label>
                    <RadioGroup
                      value={formData.loanPurpose}
                      onValueChange={(value) => updateFormData("loanPurpose", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="purchase" id="purchase" />
                        <Label htmlFor="purchase">Purchase a home</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="refinance" id="refinance" />
                        <Label htmlFor="refinance">Refinance existing mortgage</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cash-out" id="cash-out" />
                        <Label htmlFor="cash-out">Cash-out refinance</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={step === 1}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <Button 
                onClick={handleNext}
                disabled={!isStepValid()}
                className="flex items-center gap-2 bg-primary hover:bg-primary-hover"
              >
                {step === totalSteps ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Submit Application
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Security Notice */}
          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>
              🔒 Your information is secure and encrypted. 
              We'll never share your personal details without your permission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;