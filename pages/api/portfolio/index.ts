import { NextApiRequest, NextApiResponse } from 'next'
import { portfolios } from 'utils/portfolio'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(portfolios)) {
      throw new Error(`Cannot find portfolios data`)
    }

    res.status(200).json(portfolios)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
