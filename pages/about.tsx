import SEO from '../components/SEO'

export default function About(){
  return (
    <>
      <SEO title="About" />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">About Adikanfo Commodities</h1>
        <p className="mt-4">Adikanfo Commodities Ltd is a licensed cocoa buying company based in Ghana. We partner with local farmers to procure high-quality cocoa beans through a transparent and farmer-first procurement process.</p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="mt-2">To support cocoa farmers with fair pricing, reliable logistics, and sustainable practices.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="p-4 border rounded"><strong>Kwame Mensah</strong><div className="text-sm">CEO</div></div>
            <div className="p-4 border rounded"><strong>Abena Nyarko</strong><div className="text-sm">Head of Operations</div></div>
            <div className="p-4 border rounded"><strong>Kofi Boateng</strong><div className="text-sm">Head of Procurement</div></div>
          </div>
        </section>
      </div>
    </>
  );
}
