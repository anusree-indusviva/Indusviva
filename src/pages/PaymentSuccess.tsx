import { CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

//  PaymentSuccess page displayed after a successful transaction
export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        {/*  Success Icon and Message */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>

          <p className="text-gray-600 mb-8">
            Thank you for your purchase. Your transaction has been completed
            successfully.
          </p>
        </div>

        {/*  Next steps panel for user guidance */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">What's Next?</h3>
          <ul className="text-left space-y-2 text-sm text-gray-600">
            <li>• You'll receive a confirmation email shortly</li>
            <li>• Your premium features are now active</li>
            <li>• Access your dashboard to get started</li>
          </ul>
        </div>

        {/*  Navigation button back to home */}
        <Link to="/">
          <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
