import { connectToDB } from '@utils/database'
import Prompt from '@models/prompt'

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    // get all the prompts and find the creator of the prompts
    const prompts = await Prompt.find({
      creator: params.id
    }).populate('creator')

    return new Response(JSON.stringify(prompts), { status: 200 })
  } 
  catch (error) {
    return new Response('Failed to fetch all prompts', { status: 500 })
  }
}
