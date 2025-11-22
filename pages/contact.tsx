import SEO from '../components/SEO'
import { useState } from 'react'

export default function Contact(){
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = async (e:any) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const body = Object.fromEntries(form as any)
    await fetch('/api/contact', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)})
    setSubmitted(true)
  }
  return (
    <>
      <SEO title="Contact" />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <p className="mt-2">Have questions? Reach out to our farmer support team.</p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm">Name</label>
              <input name="name" required className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm">Email</label>
              <input name="email" type="email" required className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm">Purpose</label>
              <select name="purpose" className="w-full border p-2 rounded">
                <option>Farmer registration</option>
                <option>Partnership</option>
                <option>General enquiry</option>
              </select>
            </div>
            <div>
              <label className="block text-sm">Message</label>
              <textarea name="message" rows={4} className="w-full border p-2 rounded" />
            </div>
            <div>
              <button type="submit" className="px-4 py-2 bg-cocoa text-white rounded">Send Message</button>
            </div>
          </form>
        ) : (
          <div className="mt-6 p-4 bg-green-100 rounded">Thanks — we’ve received your message. Our farmer support team will contact you within 2 business days.</div>
        )}
      </div>
    </>
  );
}
