import { RouterProvider } from "react-router";
import appRouter from "./appRouter";
import { useEffect } from "react";
import { useCustomerStore } from "./stores/useCustomerStore";
import { useDialogStore } from "./stores/usedialogStrore";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export default function App() {
  const { customerUserId } = useCustomerStore();
  const { openDialog } = useDialogStore();

  useEffect(() => {
    const token = sessionStorage.getItem("x-auth");
    if (!customerUserId || !token) {
      openDialog();
    }
  }, []);

  return (
    <ErrorBoundary>
      <RouterProvider router={appRouter} />
    </ErrorBoundary>
  );
}
