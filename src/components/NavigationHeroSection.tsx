
interface NavigationHeroSectionProps {
  title: string;
  description?: string;
}

export default function NavigationHeroSection({ title, description }: NavigationHeroSectionProps) {
  return (
    <div className="relative bg-gray-100 min-h-[40vh] flex items-start justify-center overflow-hidden">
      {/* Gradient background shape */}
      <div className="absolute right-0 top-0 w-2/5 h-full bg-gradient-to-br from-green-300 via-teal-200 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-10 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">{title}</h1>
        {description && (
          <p className="text-lg text-gray-700 mb-10">{description}</p>
        )}
      </div>
    </div>
  );
}
