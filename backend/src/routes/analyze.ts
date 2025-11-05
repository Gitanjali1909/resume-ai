import express from 'express'
import { analyzeResume } from '../utils/openaiClient'
const router = express.Router()

router.post('/', async (req, res) => {
  const { text } = req.body
  if (!text) return res.status(400).json({ error: 'No text provided' })
  try {
    const analysis = await analyzeResume(text)
    res.json(analysis)
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
})

export default router
