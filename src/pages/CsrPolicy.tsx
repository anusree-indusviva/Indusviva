import NavigationHeroSection from "@/components/NavigationHeroSection";


const CsrPolicy = () => {
  return (
    <section>
      {/* Hero section with breadcrumb navigation */}
      <NavigationHeroSection title="CSR Policy" path="CSR Policy" />

      {/* Main content wrapper */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center my-6">
          Corporate Social Responsibility Policy
        </h2>

        {/* CSR Policy Sections */}
        <section>
          {/* Preface Section */}
          <h4 className="text-2xl font-semibold mb-3">Preface</h4>
          <div className="space-y-3">
            <p>
              IndusViva is committed to improve the lives of the society in which it operates...
            </p>
            <p>
              We understand that there is a need to strike a balance between the overall objectives...
            </p>
            <p>
              Though, the Companies Act, 2013 has formally introduced the Corporate Social Responsibility...
            </p>
            <p>
              Legal framework of CSR is an edge to Corporate Charitable/reformative approach...
            </p>
            <p>
              The management of IndusViva expresses its willingness and support to the CSR concept...
            </p>

            {/* Objective Section */}
            <h4 className="text-xl font-semibold mb-3">Objective</h4>
            <p>
              The objective of the policy is to actively contribute to the social, environmental and economic development...
            </p>

            {/* Definitions Section */}
            <h4 className="text-xl font-semibold mb-3">Definitions</h4>
            <p>
              The terms defined in this CSR Policy shall have the meanings herein specified...
            </p>

            {/* Definitions List */}
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>“Act” means the Companies Act, 2013...</li>
              <li>“Associate Company” in relation to another company...</li>
              <p><strong>Explanation:</strong> Significant influence means...</p>
              <li>“Average Net Profit” means profit calculated as per Section 198...</li>
              <li>“Board” means the Board of Directors...</li>
              <li>“Company” means INDUSVIVA HEALTHSCIENCES PRIVATE LIMITED</li>
              <li>“CSR” means Corporate Social Responsibility</li>
              <li>“CSR activities” means the activities or projects...</li>
              <li>“CSR Committee” means the Committee of the Board constituted under section 135...</li>
              <li>“CSR Policy” means the Corporate Social Responsibility Policy...</li>
              <li>“Independent Director” means a non-executive director...</li>
              <li>“Net profit” means the net profit of the Company...</li>
              <li>“Subsidiary Company” means a Company within the meaning...</li>
            </ul>

            {/* Governance Section */}
            <h4 className="text-xl font-semibold mb-3">Governance Structure</h4>
            <p>
              The company has constituted a CSR committee consisting of 2 (Two) Directors...
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Mr. Kuruvila Chacko, Chairman & Member</li>
              <li>Mr. Mandalaneni Subramanyam, Member</li>
            </ul>
            <p className="text-gray-500">
              The Board of Directors of the Company may re-constitute the Committee...
            </p>
            <p className="text-gray-500">
              The Committee shall exercise powers and perform the functions assigned...
            </p>
            <p><strong>The responsibilities of the CSR committee further include:</strong></p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Drafting of the CSR policy...</li>
              <li>Review and recommend new CSR initiatives...</li>
              <li>Review the progress of CSR projects...</li>
              <li>Review and recommend the CSR report...</li>
              <li>Recommend amendments to the CSR policy...</li>
              <li>Other delegated CSR responsibilities...</li>
              <li>Recommend expenditure: at least 2% of average net profits...</li>
            </ul>
            <p className="text-gray-500">
              <strong>
                Any other executive of the company associated with CSR will report to the committee...
              </strong>
            </p>
          </div>

          {/* CSR Activities Section */}
          <div className="space-y-3 mt-4">
            <h4 className="text-xl font-semibold mb-3">CSR Activities</h4>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                The Company shall undertake the activities as recommended by the CSR committee...
              </li>
              <ul className="list-disc pl-6 mt-2 space-y-1" style={{ listStyleType: "circle" }}>
                <li>Eradicating hunger, poverty and malnutrition...</li>
                <li>Promoting education, vocational skills...</li>
                <li>Promoting gender equality, empowering women...</li>
                <li>Ensuring environmental sustainability...</li>
                <li>Protection of national heritage, art and culture...</li>
                <li>Measures for armed forces veterans and dependents...</li>
                <li>Promoting rural/Olympic/Paralympic sports...</li>
                <li>Contribution to PM’s Relief Fund or other funds...</li>
                <li>Support for tech incubators in academic institutions...</li>
                <li>Rural development projects</li>
              </ul>
              <li>CSR activities shall exclude those in normal course of business.</li>
              <li>CSR projects shall be within India only.</li>
              <li>Benefits should not be restricted only to company employees.</li>
              <li>No contributions to political parties will be considered CSR.</li>
              <li>CSR admin cost capped at 5% of total CSR expenditure.</li>
            </ul>
            <p className="text-gray-500">
              <strong>
                Any surplus from CSR projects will not be treated as company profit.
              </strong>
            </p>

            {/* CSR Expenditure Section */}
            <h4 className="text-xl font-semibold mb-3">CSR Expenditure</h4>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Minimum 2% of average net profits for last 3 years to be spent on CSR.</li>
              <li>CSR Committee will recommend project-wise budget to the Board.</li>
              <li>Only Board-approved projects under Schedule VII are considered CSR expenditure.</li>
            </ul>

            {/* Execution Modalities Section */}
            <h4 className="text-xl font-semibold mb-3">
              Modalities Of Execution And Implementation
            </h4>
            <p>
              The Board may implement CSR activities via:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The Company itself; or</li>
              <li>
                A registered trust/society/company (Section 8 or otherwise) if:
                <ul style={{ listStyleType: "circle" }} className="list-disc pl-6 mt-1">
                  <li>It has a 3-year track record in similar activities;</li>
                  <li>Company specifies project, funding & monitoring plan;</li>
                </ul>
              </li>
              <li>
                In collaboration with other companies (provided reports are filed separately).
              </li>
            </ul>

            {/* Monitoring Section */}
            <h4 className="text-xl font-semibold mb-3">Monitoring The CSR Policy</h4>
            <p>
              The CSR Committee will periodically monitor the progress of projects and report to the Board...
            </p>
            <p>
              The Board will review CSR implementation reports and provide suggestions for better impact.
            </p>

            {/* Reporting Section */}
            <h4 className="text-xl font-semibold mb-3">Reporting</h4>
            <p>The Board’s report must include:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>CSR policy outline & web link</li>
              <li>CSR committee composition</li>
              <li>Average net profit for last 3 years</li>
              <li>Prescribed 2% CSR expenditure</li>
              <li>Actual CSR spent & reasons for underspending</li>
              <li>CSR Committee’s responsibility statement</li>
            </ul>

            {/* Management Commitment */}
            <h4 className="text-xl font-semibold mb-3">Management Commitment</h4>
            <p>
              The entire management and staff of IndusViva support the philosophy of compassionate care and inclusive development.
            </p>
            <p>
              This CSR policy complies with the Companies Act, 2013 and all its amendments.
            </p>

            {/* Conclusion */}
            <h4 className="text-xl font-semibold mb-3">Conclusion</h4>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>CSR Policy is subject to change based on Government guidelines.</li>
              <li>Board may review policy based on feedback or changes in beneficiary needs.</li>
            </ul>

            {/* Footer Signature */}
            <p className="text-gray-500 mt-4">
              <strong>
                Viva Tower, No.36,<br />
                For IndusViva HealthSciences Private Limited<br />
                SD/<br />
                Mr. Kuruvila Chacko,<br />
                Chairman & Member (CSR Committee)<br />
                07118634
              </strong>
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CsrPolicy;
