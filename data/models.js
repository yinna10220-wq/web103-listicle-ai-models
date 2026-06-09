const models = [
  {
    id: 1,
    name: "GPT-5.5",
    company: "OpenAI",
    category: "Language",
    releaseYear: 2026,
    description: "OpenAI's most capable model, released April 2026. Significantly reduces hallucinations in law, medicine, and finance; scores 81.2 on AIME 2025 math benchmark and leads MMMU-Pro multimodal evaluation. Default model powering ChatGPT since May 2026.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    website: "https://openai.com/chatgpt"
  },
  {
    id: 2,
    name: "Claude Opus 4",
    company: "Anthropic",
    category: "Language",
    releaseYear: 2025,
    description: "Anthropic's flagship model in the Claude 4 family, state-of-the-art across software engineering, long-context reasoning, vision, and scientific research. Built with rigorous safety alignment; the most powerful Claude model available.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg",
    website: "https://www.anthropic.com/claude"
  },
  {
    id: 3,
    name: "Gemini 2.5 Pro",
    company: "Google",
    category: "Multimodal",
    releaseYear: 2025,
    description: "Google DeepMind's most powerful multimodal model, leading on coding, math, and science benchmarks. Features a deep 'thinking' reasoning mode, massive context window, and native integration across Google Workspace and consumer products.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
    website: "https://gemini.google.com"
  },
  {
    id: 4,
    name: "Llama 4",
    company: "Meta",
    category: "Open Source",
    releaseYear: 2025,
    description: "Meta's open-weight multimodal LLM family with Scout, Maverick, and Behemoth variants. Maverick outperforms GPT-4o and Gemini 2.0 Flash; Behemoth rivals GPT-4.5 on STEM benchmarks. Freely available for research and commercial use.",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Meta_Platforms_Inc._logo.svg",
    website: "https://www.llama.com"
  },
  {
    id: 5,
    name: "Midjourney V7",
    company: "Midjourney",
    category: "Image Generation",
    releaseYear: 2025,
    description: "Midjourney's current production model with strong prompt adherence, photorealistic output, and improved fine detail. V8.1 Alpha (April 2026) renders 4–5× faster at native 2K resolution and includes a new Prompt Shortener tool.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png",
    website: "https://www.midjourney.com"
  },
  {
    id: 6,
    name: "Stable Diffusion 3.5",
    company: "Stability AI",
    category: "Image Generation",
    releaseYear: 2024,
    description: "Stability AI's flagship open-source text-to-image model using MMDiT (Multi-Modal Diffusion Transformer) architecture. Best-in-class text rendering and prompt adherence among open models; runs locally on consumer hardware for product photography and design.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/Stability_AI_logo.svg",
    website: "https://stability.ai"
  },
  {
    id: 7,
    name: "Cursor",
    company: "Anysphere",
    category: "Code Assistant",
    releaseYear: 2026,
    description: "AI-first code editor now at v3.7 (June 2026). Features Tab prediction, Agent mode, cloud agents, MCP integrations, and new Design Mode for voice and drawing-based UI changes. Used by 500,000+ paid developers and over 50% of the Fortune 500.",
    logo: "https://cursor.com/favicon.svg",
    website: "https://cursor.com"
  },
  {
    id: 8,
    name: "Perplexity",
    company: "Perplexity AI",
    category: "Search",
    releaseYear: 2026,
    description: "Evolved from AI search engine into a full agentic platform. Offers real-time web search with citations, autonomous multi-step 'Computer' tasks, Microsoft 365 integration, and hybrid local-cloud inference. Comet AI browser ships in 2026.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Perplexity_AI_logo.svg",
    website: "https://www.perplexity.ai"
  }
];

module.exports = models;
