// Job data with detailed descriptions
// Map of job categories to job titles for filtering
const jobCategoryMap: Record<string, string[]> = {
    specialprojects: ["Guest Relationship Executive","Customer Support Executive"],
    it: ["Full Stack Engineer (Node.js + React.js)"],
    finance: ["Finance & Accounts – CA / CA Inter"],
    business: ["Relationship Executive"],
    admin: ["Admin Executive"],
    compliance: ["Content Writer – Multilingual"],
    hr: ["HR Executive"],
    all: [
        "Full Stack Engineer (Node.js + React.js)",
        "Finance & Accounts – CA / CA Inter",
        "Relationship Executive",
        "Admin Executive",
        "Guest Relationship Executive",
        "Content Writer – Multilingual",
        "HR Executive",
        "Customer Support Executive"
    ]
};
const jobs = [
  {
    title: "Full Stack Engineer (Node.js + React.js)",
    location: "Bangalore, Karnataka",
    type: "Full Time",
    experience: "3-4 years",
    category: "it",
    description: `About the Role
We are looking for a skilled and proactive Full Stack Engineer with 3 to 4 years of hands-on experience in Node.js and React.js. You'll work closely with a collaborative team to maintain existing systems, build new functionalities, and solve real-world problems with clean, secure, and efficient code.

Key Responsibilities
• Develop and maintain web applications using React.js on the frontend and Node.js on the backend.
• Collaborate with the team to support and enhance existing projects.
• Write clean, maintainable, and secure code following best practices.
• Ensure robust version control using Git and contribute effectively in collaborative environments.
• Design and optimize database schemas and queries using SQL, with an understanding of database performance and best practices.
• Follow and implement security standards to protect the application from vulnerabilities.
• Work closely with product owners and stakeholders to understand business needs and translate them into technical solutions.

Required Skills & Qualifications
• 3–4 years of experience in full-stack development with strong proficiency in Node.js and React.js.
• Solid understanding of JavaScript (ES6+), and modern frontend and backend development workflows.
• Working knowledge on Design patterns.
• Working knowledge of Git, branching strategies, and code review practices.
• Strong understanding of SQL databases and ability to write efficient queries.
• Awareness of secure coding practices and common vulnerabilities (e.g., XSS, SQL injection, CSRF).
• Comfortable working in an agile environment and managing time across multiple priorities.
• Excellent problem-solving skills and attention to detail.
• Willingness to understand core business logic and build features that deliver value.

Good to Have
• Experience with deployment pipelines, CI/CD tools, or cloud platforms.
• Familiarity with TypeScript, testing frameworks (e.g., Jest), or GraphQL.
• Exposure to containerization tools like Docker.`
  },
  {
    title: "Finance & Accounts – CA / CA Inter",
    location: "IndusViva Health Sciences Pvt. Ltd, Bangalore",
    type: "Full Time | Immediate Joiner",
    experience: "3 – 5 years",
    qualification: "CA / CA Intermediate",
    category: "finance",
    description: `Job Summary:
We are looking for a dynamic and detail-oriented Finance & Accounts Executive to join our team at IndusViva Health Sciences Pvt. Ltd. The ideal candidate should be a CA or CA Inter with 3 to 5 years of relevant experience, preferably with hands-on SAP knowledge.

Key Responsibilities:
• Manage day-to-day accounting operations, including accounts payable/receivable, general ledger, and reconciliations.
• Prepare financial statements, MIS reports, and assist in budgeting and forecasting.
• Ensure compliance with statutory requirements (GST, TDS, Income Tax, etc.) and coordinate with auditors.
• Handle payroll processing and employee reimbursements.
• Utilize SAP for accounting, reporting, and data management.
• Support the finance team in process improvements and automation initiatives.

Qualifications & Experience:
• CA / CA Inter qualification.
• 3–5 years of relevant experience in finance & accounts (SAP experience preferred).
• Strong knowledge of accounting principles, taxation, and statutory compliance.
• Proficiency in MS Office and accounting software (SAP mandatory).
• Excellent analytical, organizational, and communication skills.
• Ability to work independently and as part of a team.`
  },
  {
    title: "Relationship Executive",
    location: "Bangalore",
    type: "Full Time",
    experience: "1-3 years",
    category: "business",
    description: `Company: Indusviva Healthsciences Pvt. Ltd.
Reports To: Mr.Pradeep Kumar, HOD

Key Responsibilities:
• Initiate and follow up on business development activities such as calls, emails, and client communication.
• Coordinate with the Digital Marketing Team for creation and dissemination of promotional posters, and marketing materials.
• Plan, organize, and coordinate corporate and promotional events (online and offline) in alignment with business goals.
• Manage scheduling, execution, and follow-up of virtual events, and meetings.
• Maintain accurate and updated business development reports, event trackers, and performance records.
• Build and maintain strong professional relationships with prospects, clients, and partners.

Key Skills & Competencies:
• Strong communication and interpersonal skills (verbal & written).
• Ability to coordinate effectively with cross-functional teams.
• Organizational and time management skills with attention to detail.
• Proficiency in MS Office (Excel, Word, PowerPoint) and virtual event tools (Zoom, MS Teams, Google Meet).
• Positive attitude, adaptability, and a proactive approach to work.

Qualifications & Experience:
• Bachelor's degree in Business Administration, Marketing, or related field (MBA preferred).
• 1–3 years of experience in Business Development, Marketing, or Client Relations.`
  },
  {
    title: "Admin Executive",
    location: "Bangalore",
    type: "Full Time",
    category: "admin",
    description: `Vendor Management:
• Identify, evaluate, and onboard vendors for various office services (e.g., cleaning, catering, security, IT services).
• Manage vendor contracts, ensuring compliance with company policies and service level agreements (SLAs).
• Negotiate terms and conditions with vendors to achieve cost savings without compromising quality.
• Maintain a comprehensive vendor database and ensure timely renewal of contracts.

Office and Building Maintenance:
• Oversee daily office operations, ensuring a clean, safe, and functional workplace.
• Coordinate AMC (Annual Maintenance Contracts) for office equipment, IT systems, and other facilities to ensure timely servicing and upkeep.
• Supervise building maintenance activities, including electrical, plumbing, HVAC, and other infrastructure repairs.
• Possess basic civil knowledge to assist in building renovation, structural modifications, and small-scale construction projects.
• Ensure the office environment complies with health and safety regulations.

Asset Management:
• Maintain an up-to-date inventory of all company assets, including IT equipment, furniture, and office supplies.
• Oversee the procurement, tagging, and allocation of assets to employees or departments.
• Conduct regular audits of assets to ensure proper usage and prevent loss or damage.
• Generate reports on asset status, utilization, and lifecycle management.

Program Coordination:
• Assist the Special Projects team in planning, executing, and monitoring ongoing business development programs.
• Maintain updated trackers, schedules, and communication records related to ongoing projects.
• Coordinate between internal departments and external stakeholders for seamless program execution.
• Prepare minutes of meetings, follow-up action items, and ensure timely updates to relevant teams.

Qualifications:
• Bachelor's degree in Business Administration, Management, or a related field.
• Proven experience in office administration, vendor management, or a similar role.
• Strong negotiation and communication skills.
• Ability to work independently and as part of a team.`
  },
  {
    title: "Guest Relationship Executive",
    location: "Bangalore (Willing to relocate)",
    type: "Full Time",
    experience: "0-2 years",
    category: "specialprojects",
    description: `Job Summary:
IndusViva is seeking a dynamic and enthusiastic Guest Relationship Executive who will serve as the face of the company, ensuring a seamless and pleasant experience for all guests and customers.

Key Responsibilities:
• Welcome and assist guests, customers, and visitors with a professional and positive attitude.
• Handle customer interactions in-person, over phone, and via email in a prompt and courteous manner.
• Participate and coordinate in all company-organized events, expos, wellness meets, and promotional campaigns.
• Travel to different locations (within India) for customer engagement programs, training sessions, or events.
• Maintain an up-to-date understanding of the company's products and services to provide accurate information to clients.
• Ensure customer satisfaction and develop long-term relationships with clients through professional engagement.

Requirements:
• Bachelor's / Post graduate in Hospitality, Communication, Marketing, or related field.
• Minimum 0–2 years of experience in a customer-facing role (Hospitality, Front Office, Customer Service, etc.).
• Fluent in Hindi (Mandatory). Proficiency in English and any additional Indian language is a plus.
• Pleasant personality with strong communication and interpersonal skills.
• Willingness to relocate to Bangalore and travel as required.
• Proactive, energetic, and a team player with a passion for customer service.`
  },
  {
    title: "Content Writer – Multilingual",
    location: "Bangalore",
    type: "Full Time",
    experience: "0-3 years",
    category: "compliance",
    description: `Job Summary:
We are seeking passionate and creative Content Writers who can effectively create, adapt, in English and translate content at least two South Indian languages (Tamil, Telugu, Kannada, or Malayalam). This role is ideal for candidates who have a flair for writing, a good understanding of language nuances, and are passionate about storytelling in the wellness and lifestyle space.

Key Responsibilities:
• Create engaging, accurate, and grammatically sound content in English
• Translate and adapt English content into 2 South Indian languages while preserving the meaning and tone
• Assist in content creation for product brochures, websites, social media, event materials, presentations, and training manuals
• Work closely with the marketing and design teams to ensure consistency in tone and brand messaging
• Proofread and edit existing content for clarity and linguistic accuracy
• Ensure timely delivery of assigned content pieces

Requirements:
• Bachelor's degree in English, Journalism, Mass Communication, or any related field
• Freshers with excellent language skills are encouraged to apply
• Prior experience in content writing, translation, or digital content creation is an advantage
• Strong attention to detail and ability to work on multiple projects simultaneously
• Knowledge of health & wellness topics will be a plus`
  },
  {
    title: "HR Executive",
    location: "Bangalore",
    type: "Full Time",
    qualification: "MBA in HR",
    category: "hr",
    description: `Duties and responsibilities
• Develop and implement HR policies and procedures in compliance with local labor laws and regulations.
• Manage the end-to-end recruitment process, including job posting, candidate screening, interviewing, and selection.
• Coordinate and conduct new employee orientations and onboarding programs.
• Administer and maintain employee records, ensuring accuracy and confidentiality.
• Provide HR support and guidance to managers and employees on various HR-related matters.
• Collaborate with cross-functional teams to drive employee engagement and retention initiatives.
• Coordinate travel plans of managers.
• Monthly statutory PF, ESI, and PT.
• Attendance and leave management

Requirements:
• MBA in HR
• Proven experience as an HR Executive or similar HR role.
• In-depth knowledge of HR best practices, labor laws, and regulations.
• Experience in full-cycle recruitment and onboarding processes.
• Strong interpersonal and communication skills, with the ability to build rapport with employees at all levels.
• Excellent organizational and time management skills.
• Ability to handle confidential and sensitive information with discretion.
• High level of professionalism and integrity.`
  },
  {
    title: "Customer Support Executive",
    location: "Bangalore, Karnataka",
    type: "Full Time",
    experience: "1-3 years",
    category: "specialprojects",
    description: `Key Responsibilities:
• Initiate and follow up on business development activities such as calls, emails, and client communication.
• Coordinate with the Digital Marketing Team for creation and dissemination of promotional posters, and marketing materials.
• Plan, organize, and coordinate corporate and promotional events (online and offline) in alignment with business goals.
• Manage scheduling, execution, and follow-up of virtual events, and meetings.
• Maintain accurate and updated business development reports, event trackers, and performance records.
• Build and maintain strong professional relationships with prospects, clients, and partners.

Key Skills & Competencies:
• Strong communication and interpersonal skills (verbal & written).
• Ability to coordinate effectively with cross-functional teams.
• Organizational and time management skills with attention to detail.
• Proficiency in MS Office (Excel, Word, PowerPoint) and virtual event tools (Zoom, MS Teams, Google Meet).
• Positive attitude, adaptability, and a proactive approach to work.

Qualifications & Experience:
• Bachelor’s degree in Business Administration, Marketing, or related field (MBA preferred).
• 1–3 years of experience in Business Development, Marketing, or Client Relations.`
  }
];

import React, { useState } from "react";

export default function JobList({ filter = "all" }: { filter?: string }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    let filteredJobs = jobs;
    if (filter && filter !== "all") {
        const titles = jobCategoryMap[filter] || [];
        filteredJobs = jobs.filter(job => titles.includes(job.title));
    }

    return (
        <div>
            {filteredJobs.map((job, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        key={job.title}
                        className="bg-white mt-6 mb-6"
                    >
                            <div className="p-6">
                                {/* Top border above first job card, padded up */}
                                {/* {index === -1 && (
                                    <div className="pt-2">
                
                                        <div className="border-t border-black w-full mb-6" />
                                    </div>
                                )} */}
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold text-gray-800">{job.title}</h2>
                                <div className="flex items-center">
                                    <button
                                        className="bg-green-800 hover:bg-green-900 text-white rounded-full p-2 flex items-center justify-center transition-colors"
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        aria-label={isOpen ? "Hide details" : "Show details"}
                                        style={{marginRight: '-2px'}}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <span className="h-8 border-l border-gray-300 mx-2"></span>
                                    <button className="bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        Submit Application
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-3 mt-2">
                                <span className="font-medium">{job.type}</span>
                                <span>•</span>
                                <span>{job.location}</span>
                                {job.experience && (
                                    <>
                                        <span>•</span>
                                        <span>{job.experience} experience</span>
                                    </>
                                )}
                                {job.qualification && (
                                    <>
                                        <span>•</span>
                                        <span>{job.qualification}</span>
                                    </>
                                )}
                            </div>
                            {/* Description stays below, does not shift buttons */}
                            {isOpen && (
                                <div className="bg-gray-50 p-4 mt-4 border">
                                    <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans leading-relaxed">
                                        {job.description}
                                    </pre>
                                </div>
                            )}
                            {/* Only show bottom border if not last job card */}
                            {index !== filteredJobs.length - 1 && (
                                <div className="border-b border-black w-full mt-6" />
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}