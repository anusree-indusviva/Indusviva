
import drNadiga from '../assets/drNadiga.jpg';
import drSunilKumar from '../assets/drSunilKumar.jpg';

const teamMembers = [
  {
    id: 1,
    name: "Dr. Nadiga",
    degree: "MBBS, MD",
    image: drNadiga,
    description:
      "An MBBS And MD With Experience In Clinical Pharmacology, General Medicine And Critical Care. He Was A CEO & President And Has Worked As A Senior Vice President, Deputy Dean, Lecturer, Director And Medical Advisor In The Field Of Medicine, Immunology, Oncology, Diabetology And Vaccinology.",
    career: [
      "Over 3 Years Residency And Senior Residency In General Medicine And CCU/ICU Care At St. Martha’s Affi Liated To St John’s Medical College, Bangalore",
      "Medical Advisor And Senior Manager- KAPL A Public Sector Pharmaceutical Company-1989–1996."
    ],
  },
  {
    id: 2,
    name: "Dr. Sunil Kumar Prabhu",
    degree: "MBBS, MD, DNB",
    image: drSunilKumar,
    description:
      "Dr. Sunil Kumar Prabhu Has Nearly 20 Year’s Comprehensive Experience With Success In Driving Process Development In Clinical Trials And Medical Affairs And Clinical Development Support For Pharmaceutical Products International Experience In Medical Affairs And Clinical Trials In USA And India.",
    career: [
      "Highly Skilled In Shaping Technology Demand, Collaborating With Internal Stakeholders And Making Appropriate Recommendations That Positively Impact Business Operations, Procedures & Processes",
      "Possess Strong Knowledge Of Anti-Infective, Cardiac And Neurology Products, Gastroenterology, Oncology, Nutrition & Metabolic Disorders Like Diabetes/ Obesity, Clinical Research, Safety Reporting, Medico-Marketing & Regulatory Affair"
    ],
  },
];

const MedicalPanel = () => {
  return (
    <section>
      <div className="min-h-[50vh] h-[50vh]">
        <img
          src="./MEDICALPANEL.jpg"
          alt="productbanner"
          className="h-full w-full bg-no-repeat object-cover bg-center"
        />
      </div>
      <div className="max-w-6xl mx-auto py-16 flex flex-col gap-24">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16 px-4">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-48 object-cover rounded border border-gray-300 shadow-md bg-white"
                style={{ background: '#fff' }}
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-extrabold text-teal-900 mb-2 uppercase tracking-tight">
                {member.name}
              </h2>
              <h3 className="text-2xl font-bold text-teal-800 mb-4">{member.degree}</h3>
              <p className="text-base md:text-lg text-gray-700 mb-4 max-w-3xl">
                {member.description}
                <span className="text-green-700 font-semibold cursor-pointer ml-1">...Read More</span>
              </p>
              <h4 className="text-xl font-bold text-teal-900 mb-2 mt-6">CAREER SYNOPSIS</h4>
              <ul className="list-disc pl-6 text-gray-800 mb-4 max-w-3xl">
                {member.career.map((item, idx) => (
                  <li key={idx} className="mb-2">{item}<span className="text-green-700 font-semibold cursor-pointer ml-1">...Read More</span></li>
                ))}
              </ul>
              <button className="mt-4 px-8 py-2 bg-teal-900 text-white font-semibold rounded-lg shadow hover:bg-teal-800 transition">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MedicalPanel;
