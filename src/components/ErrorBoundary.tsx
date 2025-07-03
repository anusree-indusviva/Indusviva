import React from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";


export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }


  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

 
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }


  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-screen flex-col items-center justify-center bg-white dark:bg-background px-4 text-center">
          <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
          <h2 className="text-xl font-semibold">Something went wrong</h2>
          <Button className="mt-4" onClick={this.handleReload}>
            Reload Page
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
