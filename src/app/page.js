import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-32">

        <h1 className="text-5xl font-bold">
          Future AI Engineer 🚀
        </h1>

        <p className="mt-6 text-lg max-w-xl">
          I build AI agents, machine learning models, APIs, and real-world systems.
          My goal is to turn ideas into impactful AI solutions.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black"
          >
            Contact Me
          </a>
        </div>

      </div>

      {/* Projects Section */}
      <div id="projects" className="py-20 px-6">

        <h2 className="text-4xl font-bold text-center">
          Featured Projects
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Real-world systems and backend applications I have built.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-14 max-w-6xl mx-auto">

          {/* CRM Automation API */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition">

            <h3 className="text-2xl font-bold">
              CRM Automation API
            </h3>

            <p className="mt-4 text-gray-400 leading-7">
              A professional CRM Automation Backend API built using Node.js,
              Express.js, and MongoDB. The system supports lead management,
              analytics, Telegram integration, filtering, pagination,
              and cloud deployment.
            </p>

            {/* Features */}
            <div className="mt-6">
              <h4 className="font-semibold text-lg">
                Key Features:
              </h4>

              <ul className="mt-3 space-y-2 text-gray-400">
                <li>✅ Lead Management System</li>
                <li>✅ Search & Filter Leads</li>
                <li>✅ Telegram Notification Integration</li>
                <li>✅ Analytics API</li>
                <li>✅ RESTful API Architecture</li>
                <li>✅ Cloud Deployment with Render</li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-3">

              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                Node.js
              </span>

              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                Express.js
              </span>

              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                MongoDB
              </span>

              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                Mongoose
              </span>

              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                Telegram API
              </span>

              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                Render
              </span>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">

              <a
                href="https://github.com/AbuBakkarSabitth/crm-automation-api"
                target="_blank"
                className="bg-white text-black px-5 py-3 rounded-lg hover:bg-gray-300"
              >
                GitHub Repo
              </a>

              <a
                href="https://crm-automation-api-zri3.onrender.com/api/leads"
                target="_blank"
                className="border border-white px-5 py-3 rounded-lg hover:bg-white hover:text-black"
              >
                Live API
              </a>

            </div>

          </div>

          {/* Second Project */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition">

            <h3 className="text-2xl font-bold">
              AI Diet Assistant
            </h3>

            <p className="mt-4 text-gray-400 leading-7">
              AI-powered assistant that suggests personalized diet plans
              based on user input and health-related information.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                Python
              </span>

              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                Machine Learning
              </span>

              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                AI
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* About Section */}
      <div className="py-20 px-6 bg-gray-950 text-center">

        <h2 className="text-3xl font-bold">
          About Me
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-8">
          I am a CSE student passionate about Artificial Intelligence,
          Backend Engineering, Machine Learning, and Automation.
          I enjoy building scalable systems and solving real-world problems
          through software and AI technologies.
        </p>

      </div>

      {/* Learning Journey */}
      <div className="py-20 px-6 text-center">

        <h2 className="text-3xl font-bold">
          Learning Journey
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">
              Currently Learning
            </h3>

            <ul className="mt-4 text-gray-400 space-y-2">
              <li>Machine Learning</li>
              <li>AI Agents & Automation</li>
              <li>Advanced Backend Engineering</li>
              <li>Data Structures & Algorithms</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">
              Next Goals
            </h3>

            <ul className="mt-4 text-gray-400 space-y-2">
              <li>Build AI SaaS Products</li>
              <li>Master Deep Learning</li>
              <li>Launch AI Startup</li>
              <li>Work on Scalable Systems</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className="py-20 px-6 text-center bg-gray-950"
      >

        <h2 className="text-3xl font-bold">
          Let's Work Together
        </h2>

        <p className="mt-4 text-gray-400">
          Open for internships, backend development,
          AI projects, and collaboration.
        </p>

        <div className="mt-6 flex justify-center gap-4">

          <a
            href="https://github.com/AbuBakkarSabith"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sabithmab2/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3sliCFrWQW6MVQ8pflZGkw%3D%3D"
            target="_blank"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black"
          >
            LinkedIn
          </a>

        </div>

      </div>

      {/* Footer */}
      <div className="text-center py-6 text-gray-500 text-sm">
        © 2026 Sabith | Future AI Engineer
      </div>

    </div>
  );
}