import AiHubMixProviderLogo from '@renderer/assets/images/providers/aihubmix.jpg'
import AnthropicProviderLogo from '@renderer/assets/images/providers/anthropic.png'
import BaichuanProviderLogo from '@renderer/assets/images/providers/baichuan.png'
import BytedanceProviderLogo from '@renderer/assets/images/providers/bytedance.png'
import DashScopeProviderLogo from '@renderer/assets/images/providers/dashscope.png'
import DeepSeekProviderLogo from '@renderer/assets/images/providers/deepseek.png'
import GithubProviderLogo from '@renderer/assets/images/providers/github.png'
import GoogleProviderLogo from '@renderer/assets/images/providers/google.png'
import GraphRagProviderLogo from '@renderer/assets/images/providers/graph-rag.png'
import GroqProviderLogo from '@renderer/assets/images/providers/groq.png'
import MinimaxProviderLogo from '@renderer/assets/images/providers/minimax.png'
import MoonshotProviderLogo from '@renderer/assets/images/providers/moonshot.png'
import OcoolAiProviderLogo from '@renderer/assets/images/providers/ocoolai.png'
import OllamaProviderLogo from '@renderer/assets/images/providers/ollama.png'
import OpenAiProviderLogo from '@renderer/assets/images/providers/openai.png'
import OpenRouterProviderLogo from '@renderer/assets/images/providers/openrouter.png'
import SiliconFlowProviderLogo from '@renderer/assets/images/providers/silicon.png'
import StepProviderLogo from '@renderer/assets/images/providers/step.png'
import ZeroOneProviderLogo from '@renderer/assets/images/providers/zero-one.png'
import ZhipuProviderLogo from '@renderer/assets/images/providers/zhipu.png'

export function getProviderLogo(providerId: string) {
  switch (providerId) {
    case 'openai':
      return OpenAiProviderLogo
    case 'silicon':
      return SiliconFlowProviderLogo
    case 'deepseek':
      return DeepSeekProviderLogo
    case 'yi':
      return ZeroOneProviderLogo
    case 'groq':
      return GroqProviderLogo
    case 'zhipu':
      return ZhipuProviderLogo
    case 'ollama':
      return OllamaProviderLogo
    case 'moonshot':
      return MoonshotProviderLogo
    case 'openrouter':
      return OpenRouterProviderLogo
    case 'baichuan':
      return BaichuanProviderLogo
    case 'dashscope':
      return DashScopeProviderLogo
    case 'anthropic':
      return AnthropicProviderLogo
    case 'aihubmix':
      return AiHubMixProviderLogo
    case 'gemini':
      return GoogleProviderLogo
    case 'stepfun':
      return StepProviderLogo
    case 'doubao':
      return BytedanceProviderLogo
    case 'graphrag-kylin-mountain':
      return GraphRagProviderLogo
    case 'minimax':
      return MinimaxProviderLogo
    case 'github':
      return GithubProviderLogo
    case 'ocoolai':
      return OcoolAiProviderLogo
    default:
      return undefined
  }
}

export const PROVIDER_CONFIG = {
  openai: {
    api: {
      url: 'https://api.openai.com'
    },
    websites: {
      official: 'https://openai.com/',
      apiKey: 'https://platform.openai.com/api-keys',
      docs: 'https://platform.openai.com/docs',
      models: 'https://platform.openai.com/docs/models'
    }
  },
  gemini: {
    api: {
      url: 'https://generativelanguage.googleapis.com'
    },
    websites: {
      official: 'https://gemini.google.com/',
      apiKey: 'https://aistudio.google.com/app/apikey',
      docs: 'https://ai.google.dev/gemini-api/docs',
      models: 'https://ai.google.dev/gemini-api/docs/models/gemini'
    }
  },
  silicon: {
    api: {
      url: 'https://api.siliconflow.cn'
    },
    websites: {
      official: 'https://www.siliconflow.cn/',
      apiKey: 'https://cloud.siliconflow.cn/account/ak?referrer=clxty1xuy0014lvqwh5z50i88',
      docs: 'https://docs.siliconflow.cn/',
      models: 'https://docs.siliconflow.cn/docs/model-names'
    }
  },
  deepseek: {
    api: {
      url: 'https://api.deepseek.com'
    },
    websites: {
      official: 'https://deepseek.com/',
      apiKey: 'https://platform.deepseek.com/api_keys',
      docs: 'https://platform.deepseek.com/api-docs/',
      models: 'https://platform.deepseek.com/api-docs/'
    }
  },
  ocoolai: {
    api: {
      url: 'https://one.ooo.cool'
    },
    websites: {
      official: 'https://ocoolai.com/',
      apiKey: 'https://one.ocoolai.com/token',
      docs: 'https://docs.ooo.cool/',
      models: 'https://docs.ooo.cool/guides/jiage/'
    }
  },
  github: {
    api: {
      url: 'https://models.inference.ai.azure.com/'
    },
    websites: {
      official: 'https://github.com/marketplace/models',
      apiKey: 'https://github.com/settings/tokens',
      docs: 'https://docs.github.com/en/github-models',
      models: 'https://github.com/marketplace/models'
    }
  },
  yi: {
    api: {
      url: 'https://api.lingyiwanwu.com'
    },
    websites: {
      official: 'https://platform.lingyiwanwu.com/',
      apiKey: 'https://platform.lingyiwanwu.com/apikeys',
      docs: 'https://platform.lingyiwanwu.com/docs',
      models: 'https://platform.lingyiwanwu.com/docs#%E6%A8%A1%E5%9E%8B'
    }
  },
  zhipu: {
    api: {
      url: 'https://open.bigmodel.cn/api/paas/v4/'
    },
    websites: {
      official: 'https://open.bigmodel.cn/',
      apiKey: 'https://open.bigmodel.cn/usercenter/apikeys',
      docs: 'https://open.bigmodel.cn/dev/howuse/introduction',
      models: 'https://open.bigmodel.cn/modelcenter/square'
    }
  },
  moonshot: {
    api: {
      url: 'https://api.moonshot.cn'
    },
    websites: {
      official: 'https://moonshot.ai/',
      apiKey: 'https://platform.moonshot.cn/console/api-keys',
      docs: 'https://platform.moonshot.cn/docs/',
      models: 'https://platform.moonshot.cn/docs/intro#%E6%A8%A1%E5%9E%8B%E5%88%97%E8%A1%A8'
    }
  },
  baichuan: {
    api: {
      url: 'https://api.baichuan-ai.com'
    },
    websites: {
      official: 'https://www.baichuan-ai.com/',
      apiKey: 'https://platform.baichuan-ai.com/console/apikey',
      docs: 'https://platform.baichuan-ai.com/docs',
      models: 'https://platform.baichuan-ai.com/price'
    }
  },
  dashscope: {
    api: {
      url: 'https://dashscope.aliyuncs.com/compatible-mode/v1/'
    },
    websites: {
      official: 'https://dashscope.aliyun.com/',
      apiKey: 'https://help.aliyun.com/zh/dashscope/developer-reference/acquisition-and-configuration-of-api-key',
      docs: 'https://help.aliyun.com/zh/dashscope/',
      models: 'https://dashscope.console.aliyun.com/model'
    }
  },
  stepfun: {
    api: {
      url: 'https://api.stepfun.com'
    },
    websites: {
      official: 'https://platform.stepfun.com/',
      apiKey: 'https://platform.stepfun.com/interface-key',
      docs: 'https://platform.stepfun.com/docs/overview/concept',
      models: 'https://platform.stepfun.com/docs/llm/text'
    }
  },
  doubao: {
    api: {
      url: 'https://ark.cn-beijing.volces.com/api/v3/'
    },
    websites: {
      official: 'https://console.volcengine.com/ark/',
      apiKey: 'https://console.volcengine.com/ark/region:ark+cn-beijing/apiKey',
      docs: 'https://www.volcengine.com/docs/82379/1182403',
      models: 'https://console.volcengine.com/ark/region:ark+cn-beijing/endpoint'
    }
  },
  minimax: {
    api: {
      url: 'https://api.minimax.chat/v1/'
    },
    websites: {
      official: 'https://platform.minimaxi.com/',
      apiKey: 'https://platform.minimaxi.com/user-center/basic-information/interface-key',
      docs: 'https://platform.minimaxi.com/document/Announcement',
      models: 'https://platform.minimaxi.com/document/Models'
    }
  },
  'graphrag-kylin-mountain': {
    api: {
      url: ''
    }
  },
  openrouter: {
    api: {
      url: 'https://openrouter.ai/api/v1/'
    },
    websites: {
      official: 'https://openrouter.ai/',
      apiKey: 'https://openrouter.ai/settings/keys',
      docs: 'https://openrouter.ai/docs/quick-start',
      models: 'https://openrouter.ai/docs/models'
    }
  },
  groq: {
    api: {
      url: 'https://api.groq.com/openai'
    },
    websites: {
      official: 'https://groq.com/',
      apiKey: 'https://console.groq.com/keys',
      docs: 'https://console.groq.com/docs/quickstart',
      models: 'https://console.groq.com/docs/models'
    }
  },
  ollama: {
    api: {
      url: 'http://localhost:11434/v1/'
    },
    websites: {
      official: 'https://ollama.com/',
      docs: 'https://github.com/ollama/ollama/tree/main/docs',
      models: 'https://ollama.com/library'
    }
  },
  anthropic: {
    api: {
      url: 'https://api.anthropic.com/'
    },
    websites: {
      official: 'https://anthropic.com/',
      apiKey: 'https://console.anthropic.com/settings/keys',
      docs: 'https://docs.anthropic.com/en/docs',
      models: 'https://docs.anthropic.com/en/docs/about-claude/models'
    }
  },
  aihubmix: {
    api: {
      url: 'https://aihubmix.com'
    },
    websites: {
      official: 'https://aihubmix.com/',
      apiKey: 'https://aihubmix.com/token',
      docs: 'https://doc.aihubmix.com/',
      models: 'https://aihubmix.com/models'
    }
  }
}