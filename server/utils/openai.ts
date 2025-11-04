import OpenAI from 'openai';

const config = useRuntimeConfig();

const openai = new OpenAI({
  apiKey: config.openaiApiKey
});

export default openai;
