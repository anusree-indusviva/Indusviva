import { createBrowserRouter } from "react-router";
import { Suspense } from "react";
import PageLoader from "./components/ui/PageLoader";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

const withSuspense = (importFn: () => Promise<any>) => ({
  lazy: async () => {
    const mod = await importFn();
    return {
      Component: () => (
        <Suspense fallback={<PageLoader />}>
          <mod.default />
        </Suspense>
      ),
    };
  },
});

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, ...withSuspense(() => import("@/pages/Home")) },
      { path: "about-us", ...withSuspense(() => import("@/pages/About")) },
      {
        path: "medical-panel",
        ...withSuspense(() => import("@/pages/MedicalPanel")),
      },

      { path: "contact-us", ...withSuspense(() => import("@/pages/ContactUs")) },
      // {
      //   path: "customer-care",
      //   ...withSuspense(() => import("@/pages/CostumerCare")),
      // },
      {
        path: "our-products",
        ...withSuspense(() => import("@/pages/Products")),
      },
      { path: "careers",
         ...withSuspense(() => import("@/pages/Careers")) },
      {
        path: "virtual-office",
        ...withSuspense(() => import("@/pages/Login")),
      },
      { path: "blog", ...withSuspense(() => import("@/pages/Blog")) },
      { path: "FAQ", ...withSuspense(() => import("@/pages/Faq")) },
      {
        path: "compliance-documents",
        ...withSuspense(() => import("@/pages/ComplianceDocuments")),
      },
      {
        path: "compensation-plan",
        ...withSuspense(() => import("@/pages/CompensationPlan")),
      },
      {
        path: "service-request",
        ...withSuspense(() => import("@/pages/CreateServiceRequest")),
      },
      {
        path: "track-service",
        ...withSuspense(() => import("@/pages/TrackServiceRequest")),
      },
      {
        path: "search-vbos",
        ...withSuspense(() => import("@/pages/DelistedDistributors")),
      },
      {
        path: "csr-policy",
        ...withSuspense(() => import("@/pages/CsrPolicy")),
      },
      {
        path: "disclaimer",
        ...withSuspense(() => import("@/pages/Disclaimer")),
      },
      { path: "cart", ...withSuspense(() => import("@/pages/Cart")) },
      { path: "checkout", ...withSuspense(() => import("@/pages/Checkout")) },
      {
        path: "privacy-policy",
        ...withSuspense(() => import("@/pages/PrivacyPolicy")),
      },
      {
        path: "ingredients/:id",
        ...withSuspense(() => import("@/pages/ingrediants-product-details")),
      },
      {
        path: "our-products/product/:id",
        ...withSuspense(() => import("@/pages/ProductDetails")),
      },
      {
        path: "nutrivigilance",
        ...withSuspense(() => import("@/pages/Nutrivigilance")),
      },
      {
        path: "payment/failure",
        ...withSuspense(() => import("@/pages/PaymentFailure")),
      },
      {
        path: "payment/success",
        ...withSuspense(() => import("@/pages/PaymentSuccess")),
      },
      {
        path: "cv",
        ...withSuspense(() => import("@/pages/Cv")),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/login",
    ...withSuspense(() => import("@/pages/Login")),
  },
]);

export default appRouter;
