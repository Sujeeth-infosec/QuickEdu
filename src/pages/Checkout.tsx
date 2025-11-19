import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CreditCard, 
  Lock, 
  CheckCircle2,
  Loader2 
} from "lucide-react";
import { getCurrentUser, updateUserCourses } from "@/lib/auth";
import { initiatePayment } from "@/lib/paymentGateway";
import { toast } from "sonner";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course;
  const user = getCurrentUser();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  if (!course) {
    navigate("/courses");
    return null;
  }

  if (!user) {
    navigate("/login");
    return null;
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // INTEGRATION POINT: This calls the mock payment gateway
      // Replace with your actual payment gateway integration
      const result = await initiatePayment({
        courseId: course.id,
        courseTitle: course.title,
        amount: course.price,
        currency: "USD",
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
      });

      if (result.success) {
        setPaymentSuccess(true);
        updateUserCourses(course.id);
        toast.success(result.message);
        
        // Redirect to dashboard after 3 seconds
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Payment processing failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full"
        >
          <Card className="p-8 text-center shadow-elevated">
            <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
              <CheckCircle2 className="w-12 h-12 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Payment Successful!</h2>
            <p className="text-muted-foreground mb-6">
              You've successfully enrolled in <span className="font-semibold text-foreground">{course.title}</span>
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Redirecting to your dashboard...
            </p>
            <Button onClick={() => navigate("/dashboard")} className="gradient-primary shadow-glow">
              Go to Dashboard
            </Button>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold mb-2">Checkout</h1>
            <p className="text-muted-foreground mb-8">Complete your purchase securely</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Payment Form */}
              <div className="lg:col-span-2">
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Lock className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-bold">Payment Details</h2>
                  </div>

                  <form onSubmit={handlePayment} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Cardholder Name</Label>
                      <Input
                        id="cardName"
                        placeholder="John Doe"
                        value={formData.cardName}
                        onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          type="password"
                          placeholder="123"
                          maxLength={3}
                          value={formData.cvv}
                          onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Lock className="w-4 h-4" />
                        Your payment information is encrypted and secure. This is a demo checkout - no real payment will be processed.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      className="w-full gradient-primary shadow-glow"
                      size="lg"
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Processing Payment...
                        </>
                      ) : (
                        <>
                          Complete Purchase - ${course.price}
                        </>
                      )}
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Order Summary */}
              <div>
                <Card className="p-6 sticky top-24">
                  <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold mb-1 line-clamp-2">{course.title}</div>
                      <Badge variant="secondary">{course.category}</Badge>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Original Price</span>
                        <span className="line-through">${course.originalPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Discount</span>
                        <span className="text-green-500">
                          -${(course.originalPrice - course.price).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">${course.price}</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Lifetime Access</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Certificate of Completion</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>30-Day Money-Back Guarantee</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
