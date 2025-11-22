import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)
  const file = path.join(dataDir, 'contacts.json')
  const body = req.body
  const contacts = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : []
  contacts.push({...body, createdAt: new Date().toISOString()})
  fs.writeFileSync(file, JSON.stringify(contacts, null, 2))
  res.status(200).json({ok:true})
}
