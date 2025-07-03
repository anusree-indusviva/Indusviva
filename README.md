# Indus Viva

A modern and responsive web platform for **Indus Viva**, built using **React**, **TypeScript**, **Tailwind CSS**, **Vite**, and other modern libraries.
This application showcases product offerings, compensation plans, user account management, and company-related content.

---

## 🚀 Features

-  **Modern Stack**: Built with React + TypeScript + Vite.
- **Styled with Tailwind CSS** and ShadCN UI components.
- **E-commerce Flow**: Cart, Checkout, Order Summary, and Payment Integration (PayU).
- **Product Pages** with detailed sections.
- **Compensation Plan** with revenue and bonus breakdowns.
- **Responsive Design** across all device sizes.
- **Well-structured Component System** using reusable, modular layouts.
- **Modular Architecture** with separate pages, UI components, and stores.
- **GSAP Scroll Animations** and **Framer Motion** for enhanced UI/UX.
- **Customer Care** & Service Request Management.

---

## 📁 Project Structure

Directory structure:
└──indus-viva/
    ├── README.md
    ├── components.json
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    ├── public/
    │   └── _redirects
    └── src/
        ├── App.css
        ├── App.tsx
        ├── appRouter.tsx
        ├── index.css
        ├── main.tsx
        ├── vite-env.d.ts
        ├── assets/
        ├── components/
        │   ├── ErrorBoundary.tsx
        │   ├── Footer.tsx
        │   ├── FooterBrandSlider.tsx
        │   ├── FooterCertificate.tsx
        │   ├── FooterTextSlider.tsx
        │   ├── JobList.tsx
        │   ├── Layout.tsx
        │   ├── navbar.tsx
        │   ├── NavigationHeroSection.tsx
        │   ├── OrderConfirmationModal.tsx
        │   ├── ScrollToTop.tsx
        │   ├── VerificationDailog.tsx
        │   ├── about/
        │   │   ├── company-values.tsx
        │   │   ├── faq-section.tsx
        │   │   ├── team-section.tsx
        │   │   └── who-we-are.tsx
        │   ├── cart/
        │   │   └── CartSheet.tsx
        │   ├── checkout/
        │   │   └── address-form.tsx
        │   ├── CompensationPlan/
        │   │   ├── bounens.tsx
        │   │   ├── compensation-details.tsx
        │   │   ├── product-pricing.tsx
        │   │   ├── revenue.tsx
        │   │   └── terminologies.tsx
        │   ├── contactUs/
        │   │   ├── branch-office.tsx
        │   │   └── contact-form.tsx
        │   ├── costumercare/
        │   │   └── we-are-help.tsx
        │   ├── home/
        │   │   ├── about-section.tsx
        │   │   ├── blog-section.tsx
        │   │   ├── contact-section.tsx
        │   │   ├── hero-section.tsx
        │   │   ├── innovation-section.tsx
        │   │   ├── philosophy-section.tsx
        │   │   ├── product-card.tsx
        │   │   ├── products-section.tsx
        │   │   ├── quality-section.tsx
        │   │   ├── research-section.tsx
        │   │   ├── sustainabilitySection.tsx
        │   │   ├── testimonials-section.tsx
        │   │   └── videos-section.tsx
        │   ├── products/
        │   │   └── product-card.tsx
        │   └── ui/
        │       ├── accordion.tsx
        │       ├── alert.tsx
        │       ├── badge.tsx
        │       ├── button.tsx
        │       ├── card.tsx
        │       ├── checkbox.tsx
        │       ├── dialog.tsx
        │       ├── input.tsx
        │       ├── label.tsx
        │       ├── PageLoader.tsx
        │       ├── radio-group.tsx
        │       ├── select.tsx
        │       ├── separator.tsx
        │       ├── sheet.tsx
        │       ├── skeleton.tsx
        │       ├── sonner.tsx
        │       ├── table.tsx
        │       ├── tabs.tsx
        │       └── textarea.tsx
        ├── lib/
        │   ├── ingrediantsData.ts
        │   ├── syncOrderSummary.ts
        │   └── utils.ts
        ├── pages/
        │   ├── About.tsx
        │   ├── Blog.tsx
        │   ├── Careers.tsx
        │   ├── Cart.tsx
        │   ├── Checkout.tsx
        │   ├── CompensationPlan.tsx
        │   ├── ComplianceDocuments.tsx
        │   ├── ConactUs.tsx
        │   ├── CostumerCare.tsx
        │   ├── CreateServiceRequest.tsx
        │   ├── CsrPolicy.tsx
        │   ├── DelistedDistributors.tsx
        │   ├── Disclaimer.tsx
        │   ├── Faq.tsx
        │   ├── Home.tsx
        │   ├── ingrediants-product-details.tsx
        │   ├── Login.tsx
        │   ├── MedicalPanel.tsx
        │   ├── NotFound.tsx
        │   ├── Nutrivigilance.tsx
        │   ├── Orders.tsx
        │   ├── PaymentFailure.tsx
        │   ├── PaymentSuccess.tsx
        │   ├── PrivacyPolicy.tsx
        │   ├── ProductDetails.tsx
        │   ├── Products.tsx
        │   └── TrackServiceRequest.tsx
        ├── services/
        │   └── api.ts
        └── stores/
            ├── usAddressStore.ts
            ├── useCartStore.ts
            ├── useCustomerStore.ts
            ├── usedialogStrore.ts
            ├── useOrderStore.ts
            └── usePayuStore.ts
      
---
## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **State Management**: Zustand
- **Animation**: GSAP, Framer Motion
- **UI Library**: Shadcn UI (Radix-based)
- **Form Handling**: Custom + React-controlled inputs
- **Routing**: React Router
- **Payments**: PayU Integration

---

## 📦 Installation


1.npm install
Start development server

2.npm run dev
Build for production

3. npm run build

✅ Ensure _redirects file is preserved in /public for SPA support (especially with React Router).

🙌 Author
Darshan4518 

📄 License
This project is licensed — feel free to adapt for educational or non-commercial use. For business or production use, please seek permission.


