import React from "react";

const Enroll = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r  py-10 px-4 text-center text-black shadow-lg">
        <h1 className="text-4xl font-bold">Enroll at Navgurukul</h1>
        <p className="mt-2 text-lg opacity-90">
          Begin your transformative journey through education, empowerment, and community.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        {/* Eligibility Requirements */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-amber-600">
            Eligibility Requirements
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Minimum education level: 10th grade passed</li>
            <li>Must be able to commit full-time for the course duration</li>
            <li>Age: 17 to 28 years</li>
          </ul>
        </section>

        {/* Programs Offered */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-amber-600">
            Programs Offered
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* SOP */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-xl font-semibold text-orange-500">
                SOP (School of Programming)
              </h3>
              <p className="text-sm text-gray-500">Duration: 15-18 months</p>
              <p className="mt-2 text-gray-700">
                A comprehensive programming course that helps students build modern websites and apps.
                It focuses on web development, app development, and career-ready technical skills.
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Course:</strong> HTML, CSS, JavaScript, Git, Node.js, React.js, DSA, and soft skills.
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Assessments:</strong> Weekly projects, peer reviews, and final capstone evaluations.
              </p>
            </div>

            {/* SOB */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-xl font-semibold text-orange-500">
                SOB (School of Business)
              </h3>
              <p className="text-sm text-gray-500">Duration: 12 months</p>
              <p className="mt-2 text-gray-700">
                Prepares students for real-world roles in startups and business environments. Builds
                entrepreneurial thinking and practical business knowledge.
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Focus Areas:</strong> Communication, business skills, sales strategies, marketing fundamentals.
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Skill Requirements:</strong> Strong interpersonal skills, teamwork, and interest in business.
              </p>
            </div>

            {/* SOD */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 md:col-span-2">
              <h3 className="text-xl font-semibold text-orange-500">
                SOD (School of Data Analytics)
              </h3>
              <p className="text-sm text-gray-500">Duration: 12-15 months</p>
              <p className="mt-2 text-gray-700">
                Trains students to analyze data, build insights, and make data-driven decisions.
                Combines statistics, programming, and business acumen.
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Modules:</strong> Excel, SQL, Python, statistics, data visualization (Tableau/Power BI), problem-solving.
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Tools:</strong> Google Sheets, Jupyter, Python Libraries, open-source data platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Enrollment Steps */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-amber-600">
            Enrollment Steps
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              Visit the official application page:{" "}
              <a
                href="https://admissions.navgurukul.org/"
                className="text-orange-500 underline hover:text-orange-700"
              >
                https://admissions.navgurukul.org/
              </a>
            </li>
            <li>Fill out the application with personal and educational details</li>
            <li>Complete an aptitude test for the selected program</li>
            <li>Attend an interview if shortlisted</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Enroll;
