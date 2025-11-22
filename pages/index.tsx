import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <Hero />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Our Services */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard title="Procurement & Buying">
              Transparent buying process, fair pricing, and reliable off-take.
            </ServiceCard>
            <ServiceCard title="Quality Assurance">
              On-site quality checks and grading to ensure market-ready beans.
            </ServiceCard>
            <ServiceCard title="Logistics & Storage">
              Efficient collection, safe storage, and timely delivery to buyers.
            </ServiceCard>
          </div>
        </section>

        {/* For Farmers */}
        <section className="mt-12 bg-cream p-6 rounded">
          <h3 className="text-xl font-semibold">For Farmers</h3>
          <p className="mt-2">
            Register as a farmer to become a supplier. We support farmers with fair pricing and logistics.
          </p>
          <div className="mt-4">
            <Link
              href="/farmers/register"
              className="inline-block px-6 py-3 bg-cocoa text-white rounded font-medium hover:bg-cocoa/90 transition"
            >
              Register as Farmer
            </Link>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Latest from our Blog</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="p-6 border rounded hover:shadow-md transition">
              <h4 className="font-semibold text-lg">How Cocoa Buying Works</h4>
              <p className="text-sm text-gray-600 mt-2">
                A short guide on our procurement process.
              </p>
              <div className="mt-4">
                <Link
                  href="/blog/how-cocoa-buying-works"
                  className="text-cocoa font-medium hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </article>

            <article className="p-6 border rounded hover:shadow-md transition">
              <h4 className="font-semibold text-lg">Sustainability at Adikanfo</h4>
              <p className="text-sm text-gray-600 mt-2">
                Our commitment to farmer welfare and the environment.
              </p>
              <div className="mt-4">
                <Link
                  href="/blog/sustainability-at-adikanfo"
                  className="text-cocoa font-medium hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </article>

            <article className="p-6 border rounded hover:shadow-md transition">
              <h4 className="font-semibold text-lg">Farmer Success Story: Kwame</h4>
              <p className="text-sm text-gray-600 mt-2">
                How partnership helped improve yields and income.
              </p>
              <div className="mt-4">
                <Link
                  href="/blog/kwame-success-story"
                  className="text-cocoa font-medium hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}