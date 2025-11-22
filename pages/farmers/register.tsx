import SEO from '../../components/SEO'
import { useState } from 'react'

export default function Register(){
  const [done,setDone] = useState(false)
  const handleSubmit = async (e:any) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target) as any)
    await fetch('/api/farmers/register', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data)})
    setDone(true)
  }
  return (
    <>
      <SEO title="Farmer Registration" />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold">Register as a Farmer</h1>
        {!done ? (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm">Full name</label>
              <input name="fullName" required className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm">Farm name (optional)</label>
              <input name="farmName" className="w-full border p-2 rounded" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm">Region</label>
                <input name="region" required className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm">District</label>
                <input name="district" required className="w-full border p-2 rounded" />
              </div>
            </div>
            <div>
              <label className="block text-sm">Phone</label>
              <input name="phone" required className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm">Email</label>
              <input name="email" type="email" required className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm">Farm size (hectares)</label>
              <input name="farmSize" className="w-full border p-2 rounded" />
            </div>
            <div>
              <button className="px-4 py-2 bg-cocoa text-white rounded">Submit Registration</button>
            </div>
          </form>
        ) : (
          <div className="mt-6 p-4 bg-green-100 rounded">Registration submitted. We will review and contact you.</div>
        )}
      </div>
    </>
  )
}
