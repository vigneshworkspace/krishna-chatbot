// Configuration for Sathyabama Chat Application

// IMPORTANT: Replace 'YOUR_GEMINI_API_KEY' with your actual Gemini API key
// To get a Gemini API key:
// 1. Go to https://makersuite.google.com/app/apikey
// 2. Sign in with your Google account
// 3. Click "Create API Key"
// 4. Copy the generated API key
// 5. Replace the placeholder in script.js

// Example of how to set the API key in script.js:
// this.geminiApiKey = 'AIzaSyC-your-actual-api-key-here';

// API Configuration
const GEMINI_CONFIG = {
    model: 'gemini-pro',
    temperature: 0.7,
    topK: 40,
    topP: 0.95,
    maxOutputTokens: 300
};

// For production deployment, consider using environment variables
// or a secure configuration management system to store API keys

// Security Note:
// - Never commit API keys to version control
// - Use environment variables in production
// - Consider implementing rate limiting
// - Monitor API usage and costs

