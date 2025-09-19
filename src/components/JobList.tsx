import { useState } from "react";

export default function JobList() {
  const [showFinanceDetails, setShowFinanceDetails] = useState(false);
  const [showGuestDetails, setShowGuestDetails] = useState(false);
  const [showHRDetails, setShowHRDetails] = useState(false);
  const [showFullStackDetails, setShowFullStackDetails] = useState(false);
  const [showAdminDetails, setShowAdminDetails] = useState(false);
  const [showContentWriterDetails, setShowContentWriterDetails] = useState(false);
  return (
    <>
      {/* Job Cards Section */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        {[{
          title: "Finance Assistant Manager - CA / CA intern",
          location: "Bangalore, Karnataka",
          type: "Full Time"
        }, {
          title: "Full Stack Developer (Node.js + React.js)",
          location: "Bangalore, Karnataka",
          type: "Full Time"
        },{
          title: "Senior Admin",
          location: "Bangalore, Karnataka",
          type: "Full Time"
        }, {
          title: "Guest Relations Executive",
          location: "Bangalore, Karnataka",
          type: "Full Time"
        }, {
          title: "Content Writer Multi-lingual",
          location: "Bangalore, Karnataka",
          type: "Full Time"
        },{
          title: "HR Generalist",
          location: "Bangalore, Karnataka",
          type: "Full Time"
        }
         ].map((job) => (
          <div key={job.title} className="bg-gray-100 border-gray-400 py-8 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{job.title}</h2>
                <div className="flex items-center text-gray-700 text-lg gap-2 mb-2">
                  <span>{job.type}</span>
                  <span className="mx-2">•</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  className="w-12 h-12 rounded-full border-2 border-green-700 flex items-center justify-center text-green-700 text-2xl"
                  onClick={() => {
                    if (job.title === "Finance Assistant Manager - CA / CA intern") {
                      setShowFinanceDetails((prev) => !prev);
                    }
                    if (job.title === "Guest Relations Executive") {
                      setShowGuestDetails((prev) => !prev);
                    }
                    if (job.title === "HR Generalist") {
                      setShowHRDetails((prev) => !prev);
                    }
                    if (job.title === "Full Stack Developer (Node.js + React.js)") {
                      setShowFullStackDetails((prev) => !prev);
                    }
                    if (job.title === "Senior Admin") {
                      setShowAdminDetails((prev) => !prev);
                    }
                    if (job.title === "Content Writer Multi-lingual") {
                      setShowContentWriterDetails((prev) => !prev);
                    }
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <a href="#" className="px-6 py-3 rounded-full bg-green-700 text-white font-semibold text-lg flex items-center gap-2 hover:bg-green-800 transition">
                  Submit Application
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            {job.title === "Finance Assistant Manager - CA / CA intern" && showFinanceDetails && (
              <div className="mt-4 text-gray-800 text-base">
                <p className="mb-2"><span className="font-semibold">Experience Required:</span> 3 – 5 years</p>
                <p className="mb-2"><span className="font-semibold">Qualification:</span> CA / CA Intermediate</p>
                <p className="mb-2"><span className="font-semibold">Job Type:</span> Full-time | Immediate Joiner</p>
                <p className="mb-2 font-semibold">Job Summary:</p>
                <p className="mb-2">We are looking for a dynamic and detail-oriented Finance & Accounts Executive to join our team at IndusViva Health Sciences Pvt. Ltd. The ideal candidate should be a CA or CA Inter with 3 to 5 years of relevant experience, preferably with hands-on SAP knowledge.</p>
                <p className="mb-2 font-semibold">Key Responsibilities:</p>
                <ul className="list-disc list-inside mb-2">
                  <li>Handle full-spectrum accounting activities including ledgers, payments, receipts, bank reconciliation, and journal entries.</li>
                  <li>Prepare monthly, quarterly, and annual financial statements.</li>
                  <li>Ensure compliance with statutory requirements such as GST, TDS, and other financial regulations.</li>
                  <li>Assist in budgeting, forecasting, and variance analysis.</li>
                  <li>Work with internal and external auditors for audits and reviews.</li>
                  <li>Support financial planning and cost control initiatives.</li>
                  <li>Utilize SAP software for accounting entries, reporting, and analysis.</li>
                  <li>Manage accounts payable and receivable processes.</li>
                  <li>Ensure accurate and timely reporting of all financial activities.</li>
                </ul>
                <p className="mb-2 font-semibold">Requirements:</p>
                <ul className="list-disc list-inside mb-2">
                  <li>CA qualified or pursuing CA (Inter) with strong academic record.</li>
                  <li>3 – 5 years of experience in finance and accounts, preferably in corporate or manufacturing sector.</li>
                  <li>Proficient in SAP (FI/CO modules preferred).</li>
                  <li>Strong understanding of accounting principles, taxation, and statutory compliance.</li>
                  <li>Good communication and interpersonal skills.</li>
                  <li>Ability to handle confidential information and work under pressure.</li>
                </ul>
              </div>
            )}
{job.title === "Guest Relations Executive" && showGuestDetails && (
  <div className="mt-4 text-gray-800 text-base">
    <p className="mb-2 font-semibold">Job Summary:</p>
    <p className="mb-2">IndusViva is seeking a dynamic and enthusiastic Guest Relationship Executive who will serve as the face of the company, ensuring a seamless and pleasant experience for all guests and customers.</p>
    <p className="mb-2 font-semibold">Key Responsibilities:</p>
    <ul className="list-disc list-inside mb-2">
      <li>Welcome and assist guests, customers, and visitors with a professional and positive attitude.</li>
      <li>Handle customer interactions in-person, over phone, and via email in a prompt and courteous manner.</li>
      <li>Participate and coordinate in all company-organized events, expos, wellness meets, and promotional campaigns.</li>
      <li>Travel to different locations (within India) for customer engagement programs, training sessions, or events.</li>
      <li>Maintain an up-to-date understanding of the company’s products and services to provide accurate information to clients.</li>
      <li>Ensure customer satisfaction and develop long-term relationships with clients through professional engagement.</li>
    </ul>
    <p className="mb-2 font-semibold">Requirements:</p>
    <ul className="list-disc list-inside mb-2">
      <li>Bachelor’s / Post graduate in Hospitality, Communication, Marketing, or related field.</li>
      <li>Minimum 0–2 years of experience in a customer-facing role (Hospitality, Front Office, Customer Service, etc.).</li>
      <li>Fluent in Hindi (Mandatory). Proficiency in English and any additional Indian language is a plus.</li>
      <li>Pleasant personality with strong communication and interpersonal skills.</li>
      <li>Willingness to relocate to Bangalore and travel as required.</li>
      <li>Proactive, energetic, and a team player with a passion for customer service.</li>
    </ul>
  </div>
)}
{job.title === "Full Stack Developer (Node.js + React.js)" && showFullStackDetails && (
  <div className="mt-4 text-gray-800 text-base">
    <p className="mb-2"><span className="font-semibold">Experience:</span> 3–4 Years</p>
    <p className="mb-2"><span className="font-semibold">Location:</span> Bengaluru, Karnataka.</p>
    <p className="mb-2"><span className="font-semibold">Type:</span> Full-Time, In-Office</p>
    <p className="mb-2 font-semibold">About the Role</p>
    <p className="mb-2">We are looking for a skilled and proactive Full Stack Engineer with 3 to 4 years of hands-on experience in Node.js and React.js. You’ll work closely with a collaborative team to maintain existing systems, build new functionalities, and solve real-world problems with clean, secure, and efficient code.</p>
    <p className="mb-2 font-semibold">Key Responsibilities</p>
    <ul className="list-disc list-inside mb-2">
      <li>Develop and maintain web applications using React.js on the frontend and Node.js on the backend.</li>
      <li>Collaborate with the team to support and enhance existing projects.</li>
      <li>Write clean, maintainable, and secure code following best practices.</li>
      <li>Ensure robust version control using Git and contribute effectively in collaborative environments.</li>
      <li>Design and optimize database schemas and queries using SQL, with an understanding of database performance and best practices.</li>
      <li>Follow and implement security standards to protect the application from vulnerabilities.</li>
      <li>Work closely with product owners and stakeholders to understand business needs and translate them into technical solutions.</li>
      <li>Contribute ideas to improve processes, performance, and productivity.</li>
    </ul>
    <p className="mb-2 font-semibold">Required Skills & Qualifications</p>
    <ul className="list-disc list-inside mb-2">
      <li>3–4 years of experience in full-stack development with strong proficiency in Node.js and React.js.</li>
      <li>Solid understanding of JavaScript (ES6+), and modern frontend and backend development workflows.</li>
      <li>Working knowledge on Design patterns.</li>
      <li>Working knowledge of Git, branching strategies, and code review practices.</li>
      <li>Strong understanding of SQL databases and ability to write efficient queries.</li>
      <li>Awareness of secure coding practices and common vulnerabilities (e.g., XSS, SQL injection, CSRF).</li>
      <li>Comfortable working in an agile environment and managing time across multiple priorities.</li>
      <li>Excellent problem-solving skills and attention to detail.</li>
      <li>Willingness to understand core business logic and build features that deliver value.</li>
    </ul>
    <p className="mb-2 font-semibold">Good to Have</p>
    <ul className="list-disc list-inside mb-2">
      <li>Experience with deployment pipelines, CI/CD tools, or cloud platforms.</li>
      <li>Familiarity with TypeScript, testing frameworks (e.g., Jest), or GraphQL.</li>
      <li>Exposure to containerization tools like Docker.</li>
    </ul>
  </div>
)}
{job.title === "HR Generalist" && showHRDetails && (
  <div className="mt-4 text-gray-800 text-base">
    <p className="mb-2 font-semibold">Duties and Responsibilities:</p>
    <ul className="list-disc list-inside mb-2">
      <li>Develop and implement HR policies and procedures in compliance with local labor laws and regulations.</li>
      <li>Manage the end-to-end recruitment process, including job posting, candidate screening, interviewing, and selection.</li>
      <li>Coordinate and conduct new employee orientations and onboarding programs.</li>
      <li>Administer and maintain employee records, ensuring accuracy and confidentiality.</li>
      <li>Provide HR support and guidance to managers and employees on various HR-related matters.</li>
      <li>Collaborate with cross-functional teams to drive employee engagement and retention initiatives.</li>
      <li>Coordinate travel plans of managers.</li>
      <li>Monthly statutory PF, ESI, and PT.</li>
      <li>Attendance and leave management.</li>
    </ul>
    <p className="mb-2 font-semibold">Requirements:</p>
    <ul className="list-disc list-inside mb-2">
      <li>MBA in HR</li>
      <li>Proven experience as an HR Executive or similar HR role.</li>
      <li>In-depth knowledge of HR best practices, labor laws, and regulations.</li>
      <li>Experience in full-cycle recruitment and onboarding processes.</li>
      <li>Strong interpersonal and communication skills, with the ability to build rapport with employees at all levels.</li>
      <li>Excellent organizational and time management skills.</li>
      <li>Ability to handle confidential and sensitive information with discretion.</li>
      <li>High level of professionalism and integrity.</li>
    </ul>
  </div>
)}
{job.title === "Content Writer Multi-lingual" && showContentWriterDetails && (
  <div className="mt-4 text-gray-800 text-base">
    <p className="mb-2 font-semibold">Job Title: Content Writer – Multilingual (English + South Indian Languages)</p>
    <p className="mb-2"><span className="font-semibold">Company:</span> IndusViva Health Sciences Pvt. Ltd.</p>
    <p className="mb-2"><span className="font-semibold">Location:</span> Bangalore</p>
    <p className="mb-2"><span className="font-semibold">Experience:</span> 0 – 3 years</p>
    <p className="mb-2 font-semibold">Job Summary</p>
    <p className="mb-2">We are seeking passionate and creative Content Writers who can effectively create, adapt, in English and translate content at least two South Indian languages (Tamil, Telugu, Kannada, or Malayalam). This role is ideal for candidates who have a flair for writing, a good understanding of language nuances, and are passionate about storytelling in the wellness and lifestyle space.</p>
    <p className="mb-2 font-semibold">Key Responsibilities:</p>
    <ul className="list-disc list-inside mb-2">
      <li>Create engaging, accurate, and grammatically sound content in English</li>
      <li>Translate and adapt English content into 2 South Indian languages while preserving the meaning and tone</li>
      <li>Assist in content creation for product brochures, websites, social media, event materials, presentations, and training manuals</li>
      <li>Work closely with the marketing and design teams to ensure consistency in tone and brand messaging</li>
      <li>Proofread and edit existing content for clarity and linguistic accuracy</li>
      <li>Ensure timely delivery of assigned content pieces</li>
    </ul>
    <p className="mb-2 font-semibold">Requirements:</p>
    <ul className="list-disc list-inside mb-2">
      <li>Bachelor's degree in English, Journalism, Mass Communication, or any related field</li>
      <li>Fluency in English + 2 South Indian languages (any combination of Tamil, Telugu, Kannada, or Malayalam)</li>
      <li>Freshers with excellent language skills are encouraged to apply</li>
      <li>Prior experience in content writing, translation, or digital content creation is an advantage</li>
      <li>Strong attention to detail and ability to work on multiple projects simultaneously</li>
      <li>Knowledge of health & wellness topics will be a plus</li>
    </ul>
  </div>
)}
{job.title === "Senior Admin" && showAdminDetails && (
              <div className="mt-4 text-gray-800 text-base">
                <p className="mb-2 font-semibold">Vendor Management:</p>
                <ul className="list-disc list-inside mb-2">
                  <li>Identify, evaluate, and onboard vendors for various office services (e.g., cleaning, catering, security, IT services).</li>
                  <li>Manage vendor contracts, ensuring compliance with company policies and service level agreements (SLAs).</li>
                  <li>Negotiate terms and conditions with vendors to achieve cost savings without compromising quality.</li>
                  <li>Maintain a comprehensive vendor database and ensure timely renewal of contracts.</li>
                </ul>
                <p className="mb-2 font-semibold">Office and Building Maintenance:</p>
                <ul className="list-disc list-inside mb-2">
                  <li>Oversee daily office operations, ensuring a clean, safe, and functional workplace.</li>
                  <li>Coordinate AMC (Annual Maintenance Contracts) for office equipment, IT systems, and other facilities to ensure timely servicing and upkeep.</li>
                  <li>Supervise building maintenance activities, including electrical, plumbing, HVAC, and other infrastructure repairs.</li>
                  <li>Possess basic civil knowledge to assist in building renovation, structural modifications, and small-scale construction projects.</li>
                  <li>Ensure the office environment complies with health and safety regulations.</li>
                </ul>
                <p className="mb-2 font-semibold">Service Coordination:</p>
                <ul className="list-disc list-inside mb-2">
                  <li>Act as the point of contact for all office service requests and issues.</li>
                  <li>Schedule and manage office services like housekeeping, security, and facility management.</li>
                </ul>
                <p className="mb-2 font-semibold">Asset Management:</p>
                <ul className="list-disc list-inside mb-2">
                  <li>Maintain an up-to-date inventory of all company assets, including IT equipment, furniture, and office supplies.</li>
                  <li>Oversee the procurement, tagging, and allocation of assets to employees or departments.</li>
                  <li>Conduct regular audits of assets to ensure proper usage and prevent loss or damage </li>
                  <li>Generate reports on asset status, utilization, and lifecycle management.</li>
                </ul>
                <p className="mb-2 font-semibold">Program Coordination:</p>
                <ul className="list-disc list-inside mb-2">
                  <li>Assist the Special Projects team in planning, executing, and monitoring ongoing business development programs.</li>
                  <li>Maintain updated trackers, schedules, and communication records related to ongoing projects.</li>
                  <li>Coordinate between internal departments and external stakeholders for seamless program execution.</li>
                  <li>Prepare minutes of meetings, follow-up action items, and ensure timely updates to relevant teams.</li>
                </ul>
                <p className="mb-2 font-semibold">Qualifications:</p>
                <ul className="list-disc list-inside mb-2">
                  <li>Bachelor’s degree in Business Administration, Management, or a related field.</li>
                  <li>Proven experience in office administration, vendor management, or a similar role.</li>
                  <li>Strong negotiation and communication skills.</li>
                  <li>Ability to work independently and as part of a team.</li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
    );
  }
