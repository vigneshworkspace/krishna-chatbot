# Setup Instructions for Gemini AI Integration

## 🚀 Quick Start Guide

### Step 1: Get Gemini API Key
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

### Step 2: Configure the Application
1. Open `script.js` file
2. Find line 6: `this.geminiApiKey = 'YOUR_GEMINI_API_KEY';`
3. Replace `'YOUR_GEMINI_API_KEY'` with your actual API key
4. Save the file

### Step 3: Test the Application
1. Refresh your browser
2. Open the chat widget
3. Ask any question about Sathyabama University
4. The AI should now provide intelligent responses

## 🔧 Current Status

### ✅ What's Working
- **Chat Interface**: Fully functional with Sathyabama University theme
- **Booking System**: Complete admission consultation booking
- **Fallback Responses**: Predefined responses for common questions
- **Knowledge Base**: Comprehensive university information loaded
- **Error Handling**: Graceful degradation when API is unavailable

### ⚠️ What Needs Configuration
- **Gemini API Key**: Replace placeholder with actual key
- **API Limits**: Monitor usage and set appropriate limits
- **Production Deployment**: Use environment variables for API keys

## 🧪 Testing Results

### Current Behavior (Without API Key)
- Chat opens successfully ✅
- Messages are sent and received ✅
- Fallback responses work correctly ✅
- Booking modal functions properly ✅
- Error handling works as expected ✅

### Expected Behavior (With API Key)
- All current functionality plus:
- Intelligent AI responses to any university question
- Contextual understanding of user queries
- Dynamic information retrieval from knowledge base
- Natural conversation flow

## 🔐 Security Considerations

### For Development
```javascript
// In script.js
this.geminiApiKey = 'AIzaSyC-your-actual-api-key-here';
```

### For Production
```javascript
// Use environment variables
this.geminiApiKey = process.env.GEMINI_API_KEY || 'fallback-key';
```

### Best Practices
- Never commit API keys to version control
- Use environment variables in production
- Implement rate limiting
- Monitor API usage and costs
- Set up proper CORS policies

## 📊 API Usage Monitoring

### Recommended Limits
- **Requests per minute**: 60
- **Requests per day**: 1000
- **Token limit per request**: 300

### Cost Estimation
- Gemini Pro: $0.00025 per 1K characters
- Average chat response: ~200 characters
- Estimated cost per conversation: $0.0001

## 🚀 Deployment Options

### Option 1: Static Hosting (Current Setup)
- Upload files to any web server
- Configure API key in script.js
- Suitable for small to medium usage

### Option 2: Server-Side Integration
- Move API calls to backend server
- Implement proper authentication
- Better security and rate limiting

### Option 3: Serverless Functions
- Use Vercel, Netlify, or AWS Lambda
- Environment variable management
- Automatic scaling

## 🐛 Troubleshooting

### Common Issues

#### 1. API Key Error (400)
```
Error: HTTP error! status: 400
```
**Solution**: Verify API key is correct and has proper permissions

#### 2. CORS Error
```
Failed to load resource: net::ERR_BLOCKED_BY_CLIENT
```
**Solution**: Ensure proper CORS configuration for production

#### 3. Rate Limit Exceeded (429)
```
Error: HTTP error! status: 429
```
**Solution**: Implement rate limiting and retry logic

### Debug Mode
Add this to script.js for debugging:
```javascript
console.log('API Key configured:', this.geminiApiKey !== 'YOUR_GEMINI_API_KEY');
console.log('Making API call to:', apiUrl);
```

## 📞 Support

For technical support:
- Check browser console for errors
- Verify API key configuration
- Test with simple questions first
- Contact development team if issues persist

---

**Note**: The application is fully functional even without the Gemini API key. The fallback system ensures users always receive helpful responses about Sathyabama University.

