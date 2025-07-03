import { XCircle, ArrowLeft, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function PaymentFailure() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        {/* Error Icon and Message */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
            <XCircle className="h-12 w-12 text-red-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Failed</h1>

          <p className="text-gray-600 mb-8">
            We couldn't process your payment. Please try again or contact support if the issue persists.
          </p>
        </div>

        {/* Common Issues Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">Common Issues</h3>
          <ul className="text-left space-y-2 text-sm text-gray-600 list-disc list-inside">
            <li>Insufficient funds in your account</li>
            <li>Network connectivity issues</li>
            <li>Incorrect payment details</li>
            <li>Bank server temporarily down</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Back to home button */}
          <Link to="/" className="flex-1">
            <Button
              variant="outline"
              className="w-full bg-transparent"
              aria-label="Go back to home page"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          {/* Try again button */}
          <Link to="/checkout" className="flex-1">
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              aria-label="Retry payment"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
