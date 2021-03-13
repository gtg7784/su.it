import { NextApiRequest, NextApiResponse } from 'next'
import { members } from 'utils/members'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { grade } = _req.query;

    const member = members[parseInt(grade as string)];

    if (!Array.isArray(member)) {
      throw new Error(`Cannot find ${grade}th grade member data`)
    }
    
    res.status(200).json(member)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
