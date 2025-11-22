import SEO from '../../components/SEO'

export default function Dashboard(){
  return (
    <>
      <SEO title="Farmer Dashboard" />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold">Farmer Dashboard (Mock)</h1>
        <p className="mt-2">This is a placeholder dashboard. After login, farmers will see their registration status, recent messages, and resources.</p>
        <div className="mt-6 p-4 border rounded">
          <h3 className="font-semibold">Registration status</h3>
          <p className="text-sm mt-2">Pending verification</p>
        </div>
      </div>
    </>
  );
}
