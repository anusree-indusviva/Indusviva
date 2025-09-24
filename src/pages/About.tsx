
import { motion, Variants } from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 40 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: custom * 0.13,
      type: "spring",
  stiffness: 110,
  damping: 20,
  mass: 0.7,
  duration: 0.45,
    },
  }),
};

const About = () => {
  return (
    <>
      <div className="dancing-script-600">
        <motion.div
          className="relative min-h-[50vh] h-[50vh]"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <img
            src="./About.jpg"
            alt="About page banner"
            className="h-full w-full bg-no-repeat object-cover bg-center"
          />
          <div className="absolute left-0 bottom-0 pb-4 pl-12 pr-12 text-left">
            <h3 className="text-orange-600 text-lg font-semibold tracking-wide mb-2 drop-shadow-lg">SHAPING A BETTER TOMORROW</h3>
            <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">About Us</h1>
          </div>
        </motion.div>
        <motion.div
          className="bg-white py-8 text-center"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-bold text-gray-900">ANCIENT SCIENCE | MODERN WELLNESS | SHARED WITH PURPOSE</h2>
        </motion.div>
        {/* Philosophy Section */}
        <motion.div
          className="bg-white py-12 px-4 flex justify-center"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="w-full max-w-5xl">
            <h2 className="text-4xl font-extrabold text-center mb-8">
              Our Philosophy: Wellness is <span className="text-green-600">Wisdom</span> in Action
            </h2>
            <div className="flex justify-center mb-8">
              <img
                src="/src/assets/img/AboutUs/banner-about.jpg"
                alt="Philosophy Banner"
                className="w-full rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="mx-auto">
              <p className="text-left text-base md:text-lg mb-4 border-l-4 border-orange-500 pl-4">
                <span className="font-bold">At IndusViva</span>, we don’t just believe in wellness — <span className="font-semibold">we live by it</span>. Our journey begins in the ancient texts of Ayurveda, where health isn’t just the absence of illness, but a <span className="font-bold">dynamic balance of mind, body, and spirit</span>.<br /><br />
                We believe the world doesn’t need more “products.” It needs <span className="font-semibold">purposeful solutions</span> — born from tradition, refined by science, and built for modern living. Every IndusViva innovation is designed to <span className="font-bold">nurture daily well-being</span> — not just for today, but for the decades ahead.<br /><br />
                In a world chasing speed, we chose depth. In a market selling convenience, we deliver consciousness.
              </p>
            </div>
          </div>
        </motion.div>
        {/* Science Section */}
        <motion.div
          className="bg-white py-16 px-4 flex justify-center"
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 items-center mx-auto">
            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              custom={3.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <img
                src="/src/assets/img/AboutUs/wmremove-transformed-4.webp"
                alt="Science Banner"
                className="max-w-full h-auto object-contain"
                style={{ borderRadius: 0 }}
              />
            </motion.div>
            <div className="w-full md:w-1/2">
              {/* Use React.Fragment to wrap multiple motion elements */}
              <>
                <motion.h2
                  className="text-3xl md:text-4xl font-extrabold mb-4 text-black"
                  custom={3.2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={sectionVariants}
                >
                  Our Science: Where Ancient Wisdom Meets Modern Precision
                </motion.h2>
                <motion.p
                  className="mb-4 text-gray-800"
                  custom={3.3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={sectionVariants}
                >
                  Welcome to the science behind the soul.
                </motion.p>
                <motion.p
                  className="mb-4 text-gray-800"
                  custom={3.4}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={sectionVariants}
                >
                  At the core of our innovation is <span className="font-bold">Transitional Phytochemistry</span> — a pioneering approach that decodes the therapeutic potential of time-honoured Ayurvedic herbs using cutting-edge technologies. We employ a range of advanced tools such as <span className="font-bold">HPLC, LC-MS/MS, GC-MS/MS, GC-HS</span>, and targeted <span className="font-bold">bioassays</span> to explore, analyze, and ensure the efficacy of every extract.
                </motion.p>
                <motion.p
                  className="mb-4 text-gray-800"
                  custom={3.5}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={sectionVariants}
                >
                  This fusion of tradition and technology allows us to deliver products that are both <span className="font-bold">rooted in nature and refined by science</span>.
                </motion.p>
                <motion.p
                  className="mb-4 text-gray-800"
                  custom={3.6}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={sectionVariants}
                >
                  We don’t stop at tradition. We validate:
                </motion.p>
                <motion.ul
                  className="mb-4 list-disc pl-6 text-gray-800"
                  custom={3.7}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={sectionVariants}
                >
                  <li><span className="font-bold">What works</span></li>
                  <li><span className="font-bold">Why it works</span></li>
                  <li><span className="font-bold">And how it works</span></li>
                </motion.ul>
                <motion.p
                  className="mb-4 text-gray-800"
                  custom={3.8}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={sectionVariants}
                >
                  From isolating active compounds to understanding their <span className="font-bold">mechanism of action</span>, we bridge the gap between <span className="font-bold">age-old healing systems</span> and the rigor of <span className="font-bold">evidence-based medicine</span>.
                </motion.p>
                <motion.p
                  className="mb-4 text-gray-800"
                  custom={3.9}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={sectionVariants}
                >
                  Our in-house teams of <span className="font-bold">Ayurveda Acharyas, Phytochemists, Formulation Scientists, Sensorial Scientists, Analytical Scientists, and Clinical Researchers</span> work together to create products that are not just natural — but <span className="font-bold">powerful, precise, and proven</span>.
                </motion.p>
                <motion.p
                  className="mt-8 text-center text-gray-700"
                  custom={4.0}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={sectionVariants}
                >
                  Because in wellness, belief is beautiful — but proof is powerful.
                </motion.p>
              </>
            </div>
          </div>
        </motion.div>

          {/* Our Innovation & Patents Section */}
          <motion.div
            className="bg-white py-16 px-4 flex justify-center"
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 items-center mx-auto">
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-extrabold mb-4 text-black">Our Quality: Engineered for Trust, Built for Transformation</h2>
                <h3 className="text-gray-800 font-bold mb-2 text-sm">“Quality is never an accident. It is always the result of intelligent effort.”<br/>— and we live by that.</h3>
                <p className="mb-4 text-gray-800">Every IndusViva product undergoes:</p>
                <ul className="mb-4 list-disc pl-6 text-gray-800">
                  <li><span className="font-bold">Physicochemical testing</span></li>
                  <li><span className="font-bold">Microbial analysis</span></li>
                  <li><span className="font-bold">Heavy metal and pesticide screening</span></li>
                  <li><span className="font-bold">Quantification of phytomarkers like Frukto Flavonoids</span></li>
                </ul>
                <p className="mb-4 text-gray-800">From ingredient sourcing to the final sachet or bottle, <span className="font-bold">every stage is audited, traceable, and held to global safety standards.</span></p>
                <p className="mb-4 text-gray-800">Crafted in <span className="font-bold">GMP-certified facilities</span>, our products are not only <span className="font-bold">safe and potent</span>, they’re also <span className="font-bold">sensory-rich</span>, delivering taste, texture, aroma, and results that delight — consistently.</p>
                <p className="mb-4 text-gray-800">We don’t just deliver wellness. We design an experience your body remembers.</p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src="/src/assets/img/AboutUs/Our-Quality (1).jpg"
                  alt="Our Quality Banner"
                  className="w-full max-w-md rounded-lg object-cover"
                />
              </div>
            </div>
          </motion.div>
          {/* Our Global Commitment Section */}
          <motion.div
            className="relative w-full min-h-[60vh] flex items-center justify-center"
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <img
              src="/src/assets/img/AboutUs/Our-Global-Commitment.jpg"
              alt="Our Global Commitment Banner"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="relative z-10 w-full max-w-3xl mx-auto text-left text-white py-16 px-4">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Our Global Commitment: From Ancient Soil to Modern Souls, Worldwide</h2>
              <p className="mb-4 font-semibold">IndusViva is proudly Indian in soul — but global in its reach.</p>
              <p className="mb-4">We source rare, high-efficacy herbs and ingredients from across continents, collaborate with global scientists, and meet the strictest international nutraceutical standards.</p>
              <p className="mb-4 font-bold">What makes us different:</p>
              <ul className="mb-4 list-disc pl-6 max-w-xl">
                <li><span className="font-bold">Products aligned with global regulatory norms</span></li>
                <li><span className="font-bold">Sustainable packaging</span> designed for minimal impact</li>
                <li>A growing international presence in wellness-conscious markets</li>
              </ul>
              <p className="mb-4">We also engage in <span className="font-bold">Ethnopharmacology</span> — studying how cultures around the world heal through nature — and bring these insights into our formulations.</p>
              <p className="mb-4">Because the future of wellness is borderless, and so is our mission.</p>
            </div>
          </motion.div>
          {/* Our Innovation Section */}
          <motion.div
            className="bg-white py-16 px-4 flex justify-center"
            custom={6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 items-center mx-auto">
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src="/src/assets/img/AboutUs/Our-Innovative.jpg"
                  alt="Our Innovation Banner"
                  className="w-full max-w-md rounded-lg object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-extrabold mb-4 text-black">Our Innovation & Patents: Originality You Can’t Imitate</h2>
                <p className="mb-4 text-gray-800">Our formulations are IP patented, offering:</p>
                <ul className="mb-4 list-disc pl-6 text-gray-800">
                  <li><span className="font-bold">Market exclusivity</span></li>
                  <li><span className="font-bold">Regulatory advantage</span></li>
                  <li><span className="font-bold">Consumer confidence</span></li>
                  <li><span className="font-bold">A clear edge over mass-market supplements</span></li>
                </ul>
                <p className="mb-4 text-gray-800">These aren’t trends we follow. They’re breakthroughs we own.</p>
                <p className="mb-4 text-gray-800">Because when nature meets novelty, magic happens — legally protected.</p>
              </div>
            </div>
          </motion.div>
          {/* Our Mission Section */}
          <motion.div
            className="bg-white py-16 px-4 flex justify-center"
            custom={7}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <div className="w-full max-w-5xl mx-auto text-center">
              <h2 className="text-4xl font-extrabold mb-4 text-black">Our Mission: Empowerment Through Wellness. Wellness Through Empowerment.</h2>
              <h3 className="text-lg font-semibold mb-6 text-gray-800">IndusViva isn’t just a brand. It’s a platform.</h3>
              <p className="mb-4 text-gray-700">Our products are distributed through a legal, <span className="font-bold">Community Commerce model</span> compliant with the <span className="text-green-600 font-bold">Consumer Protection (Direct Selling) Rules 2021</span> by the Ministry of Consumer Affairs, Government of India. This gives people the power to:</p>
              <hr className="my-6 border-t-2 border-green-400 w-1/2 mx-auto" />
              <div className="flex flex-col md:flex-row justify-between gap-8 text-left mt-8">
                <div className="w-full md:w-1/2">
                  <ul className="mb-4 list-disc pl-6 text-gray-800">
                    <li><span className="font-bold">Build income</span> through genuine product advocacy</li>
                    <li><span className="font-bold">Share wellness stories</span> that change lives</li>
                    <li><span className="font-bold">Create community-driven impact</span></li>
                    <li>Especially empower <span className="font-bold">women and youth entrepreneurs</span></li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2">
                  <ul className="mb-4 list-disc pl-6 text-gray-800">
                    <li><span className="font-bold">61+ Diamonds</span> (₹1 Cr+ achievers)</li>
                    <li>Thousands of <span className="font-bold">financially independent families</span></li>
                    <li>A growing tribe of <span className="font-bold">purpose-driven wellness entrepreneurs</span></li>
                  </ul>
                </div>
              </div>
              <p className="mt-8 text-gray-700 text-center">This isn’t a side hustle. It’s a mission disguised as a cup of coffee or a sip of pulse.</p>
            </div>
          </motion.div>
          {/* Join the Wellness Evolution Section */}
          <motion.div
            className="bg-white py-16 px-4 flex justify-center"
            custom={8}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <div className="w-full max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-extrabold mb-4 text-black">Join the <span className="text-green-600">Wellness</span> Evolution</h2>
              <p className="mb-4 text-gray-700">In a world of quick fixes and empty promises, IndusViva offers <span className="font-bold">science-backed wellness with soul.</span></p>
              <p className="mb-4 text-gray-700">Whether you’re a wellness seeker, a passionate sharer, or someone just beginning your health journey — there’s space here for you.</p>
              <p className="mb-4 text-gray-800 font-semibold">Come, discover products that are <span className="font-bold">deeply rooted, thoughtfully crafted, and joyfully shared.</span></p>
            </div>
          </motion.div>
      </div>
    </>
  );
};

export default About;
