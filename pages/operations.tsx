import SEO from '../components/SEO'

export default function Operations(){
  return (
    <>
      <SEO title="Operations" />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">How We Work</h1>
        <p className="mt-4">Our procurement process is farmer-friendly and transparent. Below is a simplified flow.</p>
        <ol className="list-decimal ml-6 mt-4 space-y-2">
          <li><strong>Register:</strong> Farmers register and provide basic details.</li>
          <li><strong>Deliver:</strong> Deliver cocoa to designated collection points.</li>
          <li><strong>Grade & Weigh:</strong> Quality checks and weighing done on-site.</li>
          <li><strong>Payment:</strong> Payment made to farmers promptly via agreed channels.</li>
        </ol>
      </div>
    </>
  );
}
