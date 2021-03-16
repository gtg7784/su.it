import { NextApiRequest, NextApiResponse } from 'next'
import { QnaData } from 'utils/qna'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(QnaData)) {
      throw new Error(`Cannot find Qna data`)
    }

    res.status(200).json(QnaData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
