import { Schema, model, models } from 'mongoose'

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required'],
  },
  tag: {
    type: String,
    required: [true, 'tag is required'],
  },
});

// models.Prompt => if exists
// call new model('Prompt', PromptSchema) => if not exits
const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;