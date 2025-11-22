import Link from 'next/link';
import Image from 'next/image'; // optional – you can keep the background image if you prefer

export default function Hero() {
  const img =
    'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=60';

  return (
    <section className="relative">
      <div
        className="h-72 md:h-96 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="bg-white/80 p-6 rounded max-w-2xl backdrop-blur-sm">
            <h1
              className="text-3xl md:text-4xl font-bold text-cocoa"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Your Trusted Cocoa Partner in Ghana
            </h1>
            <p className="mt-3 text-gray-800">
              Transparent cocoa buying, farmer-first values, and sustainable sourcing.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                href="/farmers/register"
                className="px-6 py-3 bg-cocoa text-white rounded font-medium hover:bg-cocoa/90 transition text-center"
              >
                Register as Farmer
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 border-2 border-cocoa text-cocoa rounded font-medium hover:bg-cocoa hover:text-white transition text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}