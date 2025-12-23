import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Senior Frontend Developer - Ali Ayoub</title>
       <meta
          name="description"
          content="Ali Ayoub - Senior Frontend Developer & Shopify Expert"
        />
        <Link rel="icon" href="/favicon.ico"></Link>
      </Head>

      {/* Header */}
      <header className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Ali Ayoub</h1>
        <p className="mt-2 text-xl">Senior Frontend Developer</p>
      </header>

      {/* About Me */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I am a Senior Frontend Developer with 2+ years of experience in
          Shopify custom development, building and customizing stores, integrating apps,
          and optimizing eCommerce experiences. I also have strong skills in
          React.js, Next.js, HTML, CSS, JavaScript, Tailwind CSS, and CMS platforms
          including WordPress, Elementor, Wix, and Squarespace.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Currently pursuing BSCS at Virtual University of Pakistan.
          Enrolled in the Bano Qabil course for backend development,
          and backend learning is in progress.
        </p>
      </section>

      {/* Skills */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-4 bg-white rounded shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">Frontend</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>HTML, CSS, JavaScript</li>
              <li>React.js / Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">CMS & eCommerce</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>WordPress / Elementor</li>
              <li>Wix / Squarespace</li>
              <li>Shopify Custom Development</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">Tools & Workflow</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>VS Code, Git, Postman</li>
              <li>MongoDB Compass</li>
              <li>Performance & Responsive Design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Replace placeholders with actual project links or screenshots */}
          <div className="p-4 bg-white rounded shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">Keepr Life Shopify Site</h3>
            <p className="text-gray-700">Custom Shopify theme with app integrations and responsive design.</p>
            <Link href="https://www.keeprstories.co.uk/"  target="_blank"  className="text-blue-600 mt-2 inline-block">View Project </Link>
          </div>
          <div className="p-4 bg-white rounded shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">Wordpress / Elementor Site</h3>
            <p className="text-gray-700">Business website with responsive design and SEO-friendly pages.</p>
            <Link href="https://wilderculture.com/staging2/" target="_blank" className="text-blue-600 mt-2 inline-block">View Project </Link>
          </div>
          <div className="p-4 bg-white rounded shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">WordPress / Flatsome Site</h3>
            <p className="text-gray-700">Business website with responsive design and SEO-friendly pages.</p>
            <Link href="https://rxreleaf.net/" target="_blank" className="text-blue-600 mt-2 inline-block">View Project </Link>
          </div>
          
          <div className="p-4 bg-white rounded shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">WordPress / Elementor Site</h3>
            <p className="text-gray-700">Business website with responsive design and SEO-friendly pages.</p>
            <Link href="https://rootsofnature.co.uk/roots-to-regeneration/"  target="_blank" className="text-blue-600 mt-2 inline-block">View Project </Link>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Experience & Education</h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-3 text-gray-700">
          <li>Current Designation: Senior Frontend Developer</li>
          <li>2+ years Shopify Custom Development</li>
          <li>React.js / Next.js Frontend Projects</li>
          <li>CMS Projects: WordPress, Elementor, Wix, Squarespace</li>
          <li>Education: BSCS in progress – Virtual University of Pakistan</li>
          <li>Backend learning in progress via Bano Qabil course</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Contact</h2>
        <p className="text-center text-lg mb-2">
          Email: <Link href="mailto:aliayoubpaya@gmail.com" className="text-blue-600">aliayoubpaya@gmail.com </Link>
        </p>
        <p className="text-center text-lg mb-2">
          Phone: <Link href="tel:+923102660271" className="text-blue-600">0310-2660271 </Link>
        </p>
        <p className="text-center text-lg">
          LinkedIn: <Link href="https://www.linkedin.com/in/ali-ayoub-a42269274/" className="text-blue-600">Ali Ayoub </Link>
        </p>
      </section>

      <footer className="py-6 text-center bg-gray-200">
        &copy; 2025 Ali Ayoub. All rights reserved.
      </footer>
    </div>
  );
}
