import { NextApiRequest, NextApiResponse } from 'next'
import { awards } from 'utils/awards'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { year } = _req.query;
    
    const award = awards[parseInt(year as string)];

    if (!Array.isArray(award)) {
      throw new Error(`Cannot find ${year} award data`)
    }

    res.status(200).json(award)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
