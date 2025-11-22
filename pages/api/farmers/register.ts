import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)
  const file = path.join(dataDir, 'farmers.json')
  const body = req.body
  const farmers = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : []
  const newF = {...body, id: uuidv4(), status:'pending', createdAt:new Date().toISOString()}
  farmers.push(newF)
  fs.writeFileSync(file, JSON.stringify(farmers, null, 2))
  res.status(200).json({ok:true, id:newF.id})
}
