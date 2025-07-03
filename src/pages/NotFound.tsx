import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white dark:bg-background text-center px-4">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="mt-2 text-xl text-muted-foreground">Page not found</p>
      <Button className="mt-6" onClick={() => navigate("/")}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Go Home
      </Button>
    </div>
  );
}
