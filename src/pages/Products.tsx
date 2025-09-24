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
							{/* Product List Section - hover image overlay style */}
							<section className="bg-gray-50 py-16 px-4">
								<div className="max-w-5xl mx-auto">
									<div className="rounded-2xl border border-gray-300 bg-white relative">
										{/* Overlay image container */}
										<div id="product-hover-image" className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-all duration-300" style={{display: 'none'}}></div>
										{/* Product Rows */}
										{[
											{
												name: 'iCoffee',
												desc: 'Ayurvedic coffee blend',
												img: '/src/assets/img/Our_Products/icoffee.jpg'
											},
											{
												name: 'iPulse',
												desc: 'Fruit antioxidant fusion',
												img: '/src/assets/img/Our_Products/ipulse.jpg'
											},
											{
												name: 'iSlim',
												desc: 'Weight wellness bar',
												img: '/src/assets/img/Our_Products/islim.jpg'
											},
											{
												name: 'iGlow',
												desc: 'Ingestible skincare',
												img: '/src/assets/img/Our_Products/iglow.jpg'
											},
											{
												name: 'iCare',
												desc: "Women's wellness formula",
												img: '/src/assets/img/Our_Products/icare.jpg'
											}
										].map((product, idx) => (
															<div
																key={product.name}
																className="flex items-center justify-between px-20 py-6 border-b border-gray-100 last:border-b-0 group relative cursor-pointer rounded-xl transition-all duration-200 bg-white hover:bg-emerald-50 hover:shadow-lg"
																								onMouseEnter={e => {
																									const overlay = document.getElementById('product-hover-image');
																									if (overlay) {
																										overlay.innerHTML = `<img src='${product.img}' alt='${product.name}' style='width:220px;height:220px;border-radius:50%;object-fit:cover;box-shadow:0 8px 32px rgba(39,174,96,0.18);border:6px solid #d1fae5;transform:scale(1.08);transition:all 0.3s;' />`;
																										overlay.style.display = 'block';
																										overlay.style.top = `${e.currentTarget.offsetTop - 40}px`;
																									}
																								}}
												onMouseLeave={() => {
													const overlay = document.getElementById('product-hover-image');
													if (overlay) overlay.style.display = 'none';
												}}
											>
																<div>
																	<span className="block text-2xl font-extrabold text-emerald-900 tracking-tight mb-1">{product.name}</span>
																	<span className="block text-base text-emerald-700 font-medium">{product.desc}</span>
																</div>
												{product.name === 'iCoffee' && (
													<a href="/products/icoffee" className="font-bold text-emerald-700 bg-emerald-100 px-4 py-2 rounded-full shadow hover:bg-emerald-200 transition flex items-center gap-2">KNOW MORE <span aria-hidden="true">→</span></a>
												)}
												{product.name === 'iPulse' && (
													<a href="/products/ipulse" className="font-bold text-emerald-700 bg-emerald-100 px-4 py-2 rounded-full shadow hover:bg-emerald-200 transition flex items-center gap-2">KNOW MORE <span aria-hidden="true">→</span></a>
												)}
												{product.name === 'iSlim' && (
													<a href="/products/islim" className="font-bold text-emerald-700 bg-emerald-100 px-4 py-2 rounded-full shadow hover:bg-emerald-200 transition flex items-center gap-2">KNOW MORE <span aria-hidden="true">→</span></a>
												)}
												{product.name === 'iGlow' && (
													<a href="/products/iglow" className="font-bold text-emerald-700 bg-emerald-100 px-4 py-2 rounded-full shadow hover:bg-emerald-200 transition flex items-center gap-2">KNOW MORE <span aria-hidden="true">→</span></a>
												)}
												{product.name === 'iCare' && (
													<a href="/products/icare" className="font-bold text-emerald-700 bg-emerald-100 px-4 py-2 rounded-full shadow hover:bg-emerald-200 transition flex items-center gap-2">KNOW MORE <span aria-hidden="true">→</span></a>
												)}
											</div>
										))}
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
