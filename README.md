# Sathyabama University Chat Application with Gemini AI

A modern, responsive chat widget designed specifically for Sathyabama University's admission inquiries and booking system. The application uses Google's Gemini AI to provide intelligent, contextual responses to any questions about the university, while maintaining the university's official website theme.

## 🤖 AI-Powered Features

### Intelligent Responses
- **Gemini AI Integration**: Uses Google's Gemini Pro model for natural language understanding
- **Comprehensive Knowledge Base**: Detailed information about Sathyabama University
- **Contextual Answers**: Provides relevant responses to any university-related questions
- **Fallback System**: Graceful degradation to predefined responses if AI is unavailable

### Smart Capabilities
- **Course Information**: Detailed answers about all academic programs
- **Admission Guidance**: Step-by-step admission process information
- **Campus Details**: Information about facilities, rankings, and achievements
- **Contact Assistance**: Intelligent routing to appropriate contact methods

## Features

### 🎨 Design & Theme
- **University Branding**: Matches Sathyabama University's official color scheme (red/maroon, blue, gold accents)
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Bottom Corner Positioning**: Unobtrusive widget positioned in the bottom-right corner
- **Smooth Animations**: Professional transitions and hover effects

### 💬 Chat Functionality
- **Interactive Chat Interface**: Real-time messaging experience
- **Quick Action Buttons**: Instant access to common queries
  - View Courses
  - Admission Process
  - Book Consultation
- **Intelligent Bot Responses**: Automated responses for common admission questions
- **Typing Indicators**: Visual feedback during bot responses
- **Message History**: Maintains conversation context within the session

### 📅 Admission Booking System
- **Consultation Booking**: Complete form for scheduling admission consultations
- **Course Selection**: Dropdown with all available programs
- **Date/Time Preferences**: Calendar integration for appointment scheduling
- **Instant Confirmation**: Booking reference number generation
- **Form Validation**: Ensures all required information is provided

### 📱 User Experience
- **Minimized State**: Small notification badge to attract attention
- **Expandable Interface**: Full chat window with professional layout
- **Easy Navigation**: Intuitive close/minimize functionality
- **Accessibility**: Keyboard navigation and screen reader friendly

## File Structure

```
sathyabama-chat-html/
├── index.html          # Main HTML file with chat widget structure
├── styles.css          # Complete CSS styling with Sathyabama theme
├── script.js           # JavaScript functionality and chat logic
└── README.md           # This documentation file
```

## Installation & Setup

### Option 1: Simple Web Server
1. Download all files to a folder
2. Open terminal/command prompt in the folder
3. Run: `python -m http.server 8080` (Python 3) or `python -m SimpleHTTPServer 8080` (Python 2)
4. Open browser and go to `http://localhost:8080`

### Option 2: Integration with Existing Website
1. Copy the chat widget HTML from `index.html` (lines 12-85)
2. Include `styles.css` in your website's CSS
3. Include `script.js` in your website's JavaScript
4. The chat widget will automatically appear in the bottom-right corner

### Option 3: Web Hosting
1. Upload all files to your web hosting service
2. Ensure the files maintain their relative paths
3. Access through your domain/subdomain

## Customization

### Colors & Branding
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-red: #8B1538;    /* Sathyabama red */
    --primary-blue: #1E3A8A;   /* Sathyabama blue */
    --light-blue: #3B82F6;     /* Accent blue */
    --gold: #F59E0B;           /* Gold highlights */
}
```

### Chat Responses
Modify the bot responses in `script.js` in the `handleBotResponse()` function to customize automated replies.

### Course Options
Update the course dropdown in `index.html` (lines 60-67) to match your specific programs.

### Contact Information
Update phone numbers and contact details in the `handleBotResponse()` function in `script.js`.

## Technical Specifications

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- Lightweight: ~15KB total file size
- Fast loading: Optimized CSS and JavaScript
- No external dependencies
- Minimal server requirements

### Security Features
- Form validation on client-side
- XSS protection through proper HTML escaping
- No sensitive data storage in browser
- HTTPS ready

## Integration with Backend Systems

The current implementation is frontend-only. To integrate with actual admission systems:

1. **API Integration**: Modify the `submitBooking()` function in `script.js` to send data to your backend API
2. **Database Storage**: Implement server-side storage for booking information
3. **Email Notifications**: Add email confirmation system for bookings
4. **Admin Dashboard**: Create admin interface to manage bookings and chat history

## Deployment Options

### Static Hosting (Recommended for Demo)
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront

### Full-Stack Hosting
- Heroku
- DigitalOcean
- AWS EC2
- Google Cloud Platform

## Support & Maintenance

### Regular Updates
- Monitor chat logs for common questions to improve bot responses
- Update course information as programs change
- Refresh contact details and admission procedures

### Analytics Integration
Add Google Analytics or similar tracking to monitor:
- Chat widget usage
- Popular queries
- Booking conversion rates
- User engagement metrics

## License

This chat application is created specifically for Sathyabama University. All branding and design elements should be used in accordance with the university's brand guidelines.

## Contact

For technical support or customization requests, please contact the development team.

---

**Note**: This is a demonstration application. For production use, implement proper backend integration, security measures, and data protection compliance.

