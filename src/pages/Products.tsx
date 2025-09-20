import React from "react";

export default function Products() {
	return (
		<>
			<section className="relative min-h-[60vh] flex items-end justify-start">
				{/* Background Banner Image */}
				<img
					src="./productbanner.jpg"
					alt="productbanner"
					className="absolute inset-0 h-full w-full object-cover bg-center z-0"
					style={{ filter: "brightness(0.8)" }}
				/>
				{/* Overlay Content aligned left-bottom */}
				<div className="relative z-10 text-left px-12 pb-12 max-w-2xl">
					<h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Our Products</h1>
					<p className="text-xl text-white mb-2 drop-shadow">Empower Your Wellness with IndusViva</p>
				</div>
			</section>

			{/* Wellness Info Section */}
			<section className="bg-gray-50 py-16 px-4">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-semibold text-emerald-700 mb-8">
						Wellness That Works | Backed by Science | Built in India
					</h2>
					<p className="text-lg text-gray-800 mb-6">
						At IndusViva, we don’t just make products — we <span className="font-semibold">craft intelligent wellness solutions</span> rooted in Ayurveda and elevated by science. Every product is <span className="font-semibold">researched, developed, and manufactured at our state-of-the-art GMP-certified facility in Bengaluru</span>, India’s thriving innovation hub. From formulation to final packaging, <span className="font-semibold">quality, purity, and precision</span> are at the heart of everything we do.
					</p>
					<p className="text-base text-gray-500 mt-8">Explore our wellness portfolio below.</p>
				</div>
			</section>
      {/* iCoffee Product Section */}
		<section className="bg-[#6d4c33] py-16 px-4">
			<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
				{/* Product Image */}
				<div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
								<img
									src="/src/assets/img/Our_Products/icoffee.jpg"
									alt="iCoffee product"
									className="rounded-lg shadow-lg max-h-[350px] object-contain bg-white p-4"
									style={{ background: "#fff" }}
								/>
				</div>
				{/* Product Info */}
				<div className="w-full md:w-1/2 text-left text-white">
					<h2 className="text-4xl font-bold mb-2">iCoffee</h2>
					<h3 className="text-lg font-semibold mb-4 tracking-wide">BREW WITH A PURPOSE</h3>
					<p className="mb-4 text-base text-white/90">
						iCoffee is no ordinary cup – it’s fortified with <span className="font-bold">Salcital™</span>, a scientifically extracted blend of Salacia, an herb praised in Ayurveda for maintaining metabolic balance.
					</p>
					<h4 className="text-lg font-bold mb-2">Benefits:</h4>
					<ul className="list-disc pl-5 mb-4 text-white/90">
						<li>Helps manage pre-diabetes and postprandial blood sugar spikes</li>
						<li>Supports blood sugar regulation for individuals with diabetes or obesity</li>
						<li>Improves fasting and post-meal blood sugar levels, along with HbA1c values</li>
						<li>A daily cup with functional purpose — rooted in tradition, perfected by science</li>
					</ul>
					<p className="mt-4 text-base text-white/80">Every brew is a step toward better balance.</p>
				</div>
			</div>
		</section>
    		{/* iPulse Product Section */}
		<section className="bg-[#7c4bb8] py-16 px-4">
			<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
				{/* Product Image */}
				<div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
					<img
						src="/src/assets/img/Our_Products/ipulse.jpg"
						alt="iPulse product"
						className="rounded-lg shadow-lg max-h-[350px] object-contain bg-white p-4"
						style={{ background: "#fff" }}
					/>
				</div>
				{/* Product Info */}
				<div className="w-full md:w-1/2 text-left text-white">
					<h2 className="text-4xl font-bold mb-2">iPulse</h2>
					<h3 className="text-lg font-semibold mb-4 tracking-wide">BEAT GRACEFULLY</h3>
					<p className="mb-4 text-base text-white/90">
						iPulse is a rich fusion of fruit flavonoids, polyphenols, and tannins — formulated to energize, protect, and uplift from within.
					</p>
					<h4 className="text-lg font-bold mb-2">Benefits:</h4>
					<ul className="list-disc pl-5 mb-4 text-white/90">
						<li>Supports relief from general weakness, giddiness, and fatigue</li>
						<li>May help with inflammation, enhancing mental alertness</li>
						<li>Improves biomarkers like ApoA1, ApoB, Leptin, Adiponectin, and CoQ10</li>
						<li>Aids in maintaining cardiovascular and metabolic wellness</li>
						<li>Antioxidant, RAS</li>
					</ul>
					<p className="mt-4 text-base text-white/80">Fuel your pulse with the science of fruits.</p>
				</div>
			</div>
		</section>
    {/* iSlim Product Section */}
		<section className="bg-[#c76c5b] py-16 px-4">
			<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
				{/* Product Image */}
				<div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
					<img
						src="/src/assets/img/Our_Products/islim.jpg"
						alt="iSlim product"
						className="rounded-lg shadow-lg max-h-[350px] object-contain bg-white p-4"
						style={{ background: "#fff" }}
					/>
				</div>
				{/* Product Info */}
				<div className="w-full md:w-1/2 text-left text-white">
					<h2 className="text-4xl font-bold mb-2">iSlim</h2>
					<h3 className="text-lg font-semibold mb-4 tracking-wide">FLAT TUMMIES</h3>
					<p className="mb-4 text-base text-white/90">
						iSlim is more than just a product — it’s your daily companion on a sustainable wellness journey. Powered by our unique FBG™ Fusion, iSlim supports your body’s natural rhythm by encouraging simple lifestyle modifications that make a big impact over time. No extreme diets. No harsh restrictions. Just small, mindful changes that help you feel lighter, healthier, and more in control — one day at a time.
					</p>
					<h4 className="text-lg font-bold mb-2">Benefits:</h4>
					<ul className="list-disc pl-5 mb-4 text-white/90">
						<li>Naturally reduces calorie intake over time</li>
						<li>Supports modest weight loss, targeting visceral fat and liver fat</li>
						<li>Regulates appetite, blood sugar, and body fat percentage</li>
						<li>Shows anti-inflammatory effects and promotes metabolic stability</li>
					</ul>
					<p className="mt-4 text-base text-white/80">Weight wellness made simple, smart, and sustainable.</p>
				</div>
			</div>
		</section>
    {/* iGlow Product Section */}
		<section className="bg-[#b23c2b] py-16 px-4">
			<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
				{/* Product Image */}
				<div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
					<img
						src="/src/assets/img/Our_Products/iglow.jpg"
						alt="iGlow product"
						className="rounded-lg shadow-lg max-h-[350px] object-contain bg-white p-4"
						style={{ background: "#fff" }}
					/>
				</div>
				{/* Product Info */}
				<div className="w-full md:w-1/2 text-left text-white">
					<h2 className="text-4xl font-bold mb-2">iGlow</h2>
					<h3 className="text-lg font-semibold mb-4 tracking-wide">UNDENIABLE BEAUTY</h3>
					<p className="mb-4 text-base text-white/90">
						iGlow is an ingestible skincare innovation that works at the cellular level to restore, rejuvenate, and reveal your natural radiance.
					</p>
					<h4 className="text-lg font-bold mb-2">Benefits:</h4>
					<ul className="list-disc pl-5 mb-4 text-white/90">
						<li>Reduces fine lines, wrinkles, and crow’s feet</li>
						<li>Aids in soothing skin redness and irritation</li>
						<li>Enhances collagen, elastin, and procollagen levels</li>
						<li>Delivers visible anti-aging and skin firming benefits</li>
					</ul>
					<p className="mt-4 text-base text-white/80">Your glow deserves science — not just skin cream.</p>
				</div>
			</div>
		</section>
    {/* iCare Product Section */}
		<section className="bg-[#e3136b] py-16 px-4">
			<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
				{/* Product Image */}
				<div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
					<img
						src="/src/assets/img/Our_Products/icare.jpg"
						alt="iCare product"
						className="rounded-lg shadow-lg max-h-[350px] object-contain bg-white p-4"
						style={{ background: "#fff" }}
					/>
				</div>
				{/* Product Info */}
				<div className="w-full md:w-1/2 text-left text-white">
					<h2 className="text-4xl font-bold mb-2">iCare</h2>
					<h3 className="text-lg font-semibold mb-4 tracking-wide">CELEBRATING WOMANHOOD</h3>
					<p className="mb-4 text-base text-white/90">
						iCare is a scientifically crafted formulation powered by InCrimun Complex™, designed to support women’s wellness through PMS, menopause, and the many transitions of midlife.
					</p>
					<h4 className="text-lg font-bold mb-2">Benefits:</h4>
					<ul className="list-disc pl-5 mb-4 text-white/90">
						<li>Relieves hot flashes, mood swings, anxiety, and sleep issues</li>
						<li>Supports PMS-related somatic and psychological balance</li>
						<li>Helps improve bone mineral density</li>
						<li>Enhances overall emotional and hormonal well-being</li>
					</ul>
					<p className="mt-4 text-base text-white/80">Because empowered women deserve empowered wellness.</p>
				</div>
			</div>
		</section>
				{/* Science-Led, Nature-Inspired, Human-Focused Section */}
				<section className="relative bg-gray-50 py-20 px-4 overflow-hidden">
					<div className="max-w-3xl mx-auto text-center">
						<h3 className="text-xl font-semibold text-emerald-700 mb-2">Science-Led</h3>
						<h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2">Nature-Inspired</h2>
						<h1 className="text-5xl md:text-6xl font-bold text-emerald-800 mb-6">Human-Focused</h1>
						<p className="text-lg text-gray-800 mb-4">Our commitment goes beyond the shelf.<br/>We uphold:</p>
						<div className="text-base text-gray-900 font-medium mb-4">
							Patent-backed innovation<br/>
							Ethnopharmacological research<br/>
							Sustainable sourcing and packaging<br/>
							<span className="font-normal">And a mission to empower lives through wellness and entrepreneurship</span>
						</div>
						<p className="text-base text-gray-500 mt-8">IndusViva — where every serving delivers the wisdom of nature, the precision of science, and an unwavering commitment to quality.</p>
					</div>
				</section>
		</>
	);
}
