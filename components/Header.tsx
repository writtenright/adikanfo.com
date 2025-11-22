import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-cream border-b" style={{ backgroundColor: '#F5EFE6' }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-cocoa font-bold text-xl">
          Adikanfo Commodities
        </Link>

        {/* Navigation */}
        <nav className="space-x-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>

          <Link href="/operations" className="hover:underline">
            Operations
          </Link>

          <Link href="/farmers/register" className="hover:underline">
            For Farmers
          </Link>

          <Link href="/sustainability" className="hover:underline">
            Sustainability
          </Link>

          <Link href="/blog" className="hover:underline">
            Blog
          </Link>

          {/* Contact button */}
          <Link
            href="/contact"
            className="ml-4 px-3 py-2 bg-cocoa text-white rounded hover:bg-cocoa/90 transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}