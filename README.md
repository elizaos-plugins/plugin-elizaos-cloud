# ElizaOS Cloud Plugin

This plugin provides integration with ElizaOS Cloud API services for AI model access and functionality.

## Usage

Add the plugin to your character configuration:

```json
"plugins": ["@elizaos/plugin-elizaos-cloud"]
```

## Configuration

The plugin requires these environment variables (can be set in .env file or character settings):

```json
"settings": {
  "ELIZAOS_API_KEY": "your_elizaos_cloud_api_key",
  "ELIZAOS_BASE_URL": "http://localhost:3001/api/v1",
  "ELIZAOS_SMALL_MODEL": "gpt-4o",
  "ELIZAOS_LARGE_MODEL": "gpt-5-mini",
  "ELIZAOS_EMBEDDING_MODEL": "text-embedding-3-small",
  "ELIZAOS_EMBEDDING_API_KEY": "your_elizaos_cloud_api_key_for_embedding",
  "ELIZAOS_EMBEDDING_URL": "optional_custom_endpoint",
  "ELIZAOS_EMBEDDING_DIMENSIONS": "1536",
  "ELIZAOS_IMAGE_DESCRIPTION_MODEL": "gpt-4o",
  "ELIZAOS_IMAGE_DESCRIPTION_MAX_TOKENS": "8192",
  "ELIZAOS_TTS_MODEL": "gpt-4o-mini-tts",
  "ELIZAOS_TTS_VOICE": "nova",
  "ELIZAOS_TTS_INSTRUCTIONS": "",
  "ELIZAOS_EXPERIMENTAL_TELEMETRY": "false"
}
```

Or in `.env` file:

```
ELIZAOS_API_KEY=your_elizaos_cloud_api_key
# Optional overrides:
ELIZAOS_BASE_URL=http://localhost:3001/api/v1
ELIZAOS_SMALL_MODEL=gpt-4o
ELIZAOS_LARGE_MODEL=gpt-5-mini
ELIZAOS_EMBEDDING_MODEL=text-embedding-3-small
ELIZAOS_EMBEDDING_API_KEY=your_elizaos_cloud_api_key_for_embedding
ELIZAOS_EMBEDDING_URL=optional_custom_endpoint
ELIZAOS_EMBEDDING_DIMENSIONS=1536
ELIZAOS_IMAGE_DESCRIPTION_MODEL=gpt-4o
ELIZAOS_IMAGE_DESCRIPTION_MAX_TOKENS=8192
ELIZAOS_TTS_MODEL=gpt-4o-mini-tts
ELIZAOS_TTS_VOICE=nova
ELIZAOS_TTS_INSTRUCTIONS=
ELIZAOS_EXPERIMENTAL_TELEMETRY=false
```

### Configuration Options

- `ELIZAOS_API_KEY` (required): Your ElizaOS Cloud API credentials
- `ELIZAOS_BASE_URL`: Custom API endpoint (default: http://localhost:3001/api/v1)
- `ELIZAOS_SMALL_MODEL`: Defaults to GPT-4o ("gpt-4o")
- `ELIZAOS_LARGE_MODEL`: Defaults to GPT-5 Mini ("gpt-5-mini")
- `ELIZAOS_EMBEDDING_MODEL`: Defaults to text-embedding-3-small ("text-embedding-3-small")
- `ELIZAOS_EMBEDDING_API_KEY`: Custom embedding api key (defaults to `ELIZAOS_API_KEY`)
- `ELIZAOS_EMBEDDING_URL`: Custom embedding endpoint (defaults to `ELIZAOS_BASE_URL`)
- `ELIZAOS_EMBEDDING_DIMENSIONS`: Defaults to 1536 (1536)
- `ELIZAOS_IMAGE_DESCRIPTION_MODEL`: Model used for image description (default: "gpt-4o")
- `ELIZAOS_IMAGE_DESCRIPTION_MAX_TOKENS`: Maximum tokens for image descriptions (default: 8192)
- `ELIZAOS_TTS_MODEL`: Text-to-speech model (default: "gpt-4o-mini-tts")
- `ELIZAOS_TTS_VOICE`: Voice profile for TTS (default: "nova")
- `ELIZAOS_TTS_INSTRUCTIONS`: Optional TTS instructions (default: "")
- `ELIZAOS_EXPERIMENTAL_TELEMETRY`: Enable experimental telemetry features for enhanced debugging and usage analytics (default: false)

### Experimental Telemetry

When `ELIZAOS_EXPERIMENTAL_TELEMETRY` is set to `true`, the plugin enables advanced telemetry features that provide:

- Enhanced debugging capabilities for model performance issues
- Detailed usage analytics for optimization
- Better observability into ElizaOS API interactions
- Foundation for future monitoring and analytics features through Sentry or other frameworks

**Note**: This feature is opt-in due to privacy considerations, as telemetry data may contain information about model usage patterns. Enable only when you need enhanced debugging or analytics capabilities.

The plugin provides these model classes:

- `TEXT_SMALL`: Optimized for fast, cost-effective responses
- `TEXT_LARGE`: For complex tasks requiring deeper reasoning
- `TEXT_EMBEDDING`: Text embedding model (text-embedding-3-small by default)
- `IMAGE`: DALL-E image generation
- `IMAGE_DESCRIPTION`: GPT-4o image analysis
- `TRANSCRIPTION`: Whisper audio transcription
- `TEXT_TOKENIZER_ENCODE`: Text tokenization
- `TEXT_TOKENIZER_DECODE`: Token decoding

## Additional Features

### Image Generation

```js
await runtime.useModel(ModelType.IMAGE, {
  prompt: 'A sunset over mountains',
  n: 1, // number of images
  size: '1024x1024', // image resolution
});
```

### Audio Transcription

```js
const transcription = await runtime.useModel(
  ModelType.TRANSCRIPTION,
  audioBuffer
);
```

### Image Analysis

```js
const { title, description } = await runtime.useModel(
  ModelType.IMAGE_DESCRIPTION,
  'https://example.com/image.jpg'
);
```

### Text Embeddings

```js
const embedding = await runtime.useModel(
  ModelType.TEXT_EMBEDDING,
  'text to embed'
);
```
