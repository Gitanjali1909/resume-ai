import OpenAI from 'openai'
import dotenv from 'dotenv'
dotenv.config()

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function analyzeResume(text: string) {
  const prompt = `Analyze this resume and give JSON feedback:
  { summary:string, score:number, suggestions:string[] }
  Resume: """${text}"""`

  const res = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.3,
  })

  const output = res.choices[0].message?.content || '{}'
  try {
    return JSON.parse(output)
  } catch {
    return { summary: output }
  }
}
