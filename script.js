// Divine Krishna Chat Application
class DivineKrishnaChatApp {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.geminiApiKey = 'YOUR_GEMINI_API_KEY'; // Replace with actual API key
        this.sessionId = null;
        this.init();
    }

    generateSessionId() {
        // Simple session ID generator using timestamp and random number
        return 'session-' + Date.now() + '-' + Math.floor(Math.random() * 10000);
    }

    init() {
        this.bindEvents();
        this.setupQuickActions();
        this.setupBookingForm();
        this.setMinDate();
    }

    bindEvents() {
        // Chat button click
        document.getElementById('chat-button').addEventListener('click', () => {
            this.toggleChat();
        });

        // Close chat button
        document.getElementById('close-chat').addEventListener('click', () => {
            this.closeChat();
        });

        // Send message
        document.getElementById('send-button').addEventListener('click', () => {
            this.sendMessage();
        });

        // Enter key to send message
        document.getElementById('chat-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        // Close modal
        document.getElementById('close-modal').addEventListener('click', () => {
            this.closeModal();
        });

        // Click outside modal to close
        document.getElementById('booking-modal').addEventListener('click', (e) => {
            if (e.target.id === 'booking-modal') {
                this.closeModal();
            }
        });
    }

    setupQuickActions() {
        document.querySelectorAll('.quick-action-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.getAttribute('data-action');
                this.handleQuickAction(action);
            });
        });
    }

    setupBookingForm() {
        document.getElementById('booking-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitBooking();
        });
    }

    setMinDate() {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const minDate = tomorrow.toISOString().split('T')[0];
        document.getElementById('preferred-date').setAttribute('min', minDate);
    }

    toggleChat() {
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.sessionId = this.generateSessionId();
            this.openChat();
        }
    }

    openChat() {
        const chatWindow = document.getElementById('chat-window');
        const chatButton = document.getElementById('chat-button');
        const notification = document.getElementById('notification-badge');
        
        chatWindow.classList.remove('hidden');
        chatButton.style.display = 'none';
        notification.style.display = 'none';
        
        setTimeout(() => {
            chatWindow.classList.add('show');
        }, 10);
        
        this.isOpen = true;
    }

    closeChat() {
        const chatWindow = document.getElementById('chat-window');
        const chatButton = document.getElementById('chat-button');
        
        chatWindow.classList.remove('show');
        
        setTimeout(() => {
            chatWindow.classList.add('hidden');
            chatButton.style.display = 'flex';
        }, 300);
        
        this.isOpen = false;
    }

    async sendMessage() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        this.addMessage(message, 'user');
        input.value = '';
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Await bot response and hide typing indicator after response
        await this.handleBotResponse(message);
        this.hideTypingIndicator();
    }

    addMessage(content, sender) {
        const messagesContainer = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = sender === 'user' ? 
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/></svg>' :
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/></svg>';
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';

        // Replace newline characters (both escaped and actual) with <br>, convert markdown bold **text** to <strong>text</strong>, and replace asterisks used as bullets with HTML bullet points
        const formattedContent = content
            .replace(/\\n/g, '<br>')
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/(^|\s)\*(\s|$)/g, '&bull; ');

        messageContent.innerHTML = `<p>${formattedContent}</p>`;
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(messageContent);
        messagesContainer.appendChild(messageDiv);
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        this.messages.push({ content, sender, timestamp: new Date() });
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chat-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message';
        typingDiv.id = 'typing-indicator';
        
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
                </svg>
            </div>
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    handleQuickAction(action) {
        switch (action) {
            case 'courses':
                this.addMessage('I want to know about available courses', 'user');
                setTimeout(() => {
                    this.addMessage('We offer various programs including:<br><br>🎓 <strong>Engineering:</strong> Computer Science, Electronics, Mechanical, Civil<br>📊 <strong>Management:</strong> MBA, BBA<br>🔬 <strong>Arts & Science:</strong> Physics, Chemistry, Mathematics<br>⚖️ <strong>Law:</strong> BA LLB, BBA LLB<br>🦷 <strong>Dental:</strong> BDS, MDS<br>💊 <strong>Pharmacy:</strong> B.Pharm, M.Pharm<br><br>Would you like detailed information about any specific program?', 'bot');
                }, 1000);
                // Send to n8n with appended string in background
                this.handleBotResponse('I want to know about available courses do not reply-101');
                break;
            case 'admission':
                this.addMessage('How do I apply for admission?', 'user');
                setTimeout(() => {
                    this.addMessage('The admission process is simple:<br><br>1️⃣ <strong>Online Application:</strong> Fill out the application form<br>2️⃣ <strong>Document Submission:</strong> Upload required documents<br>3️⃣ <strong>Entrance Test:</strong> Appear for the entrance examination<br>4️⃣ <strong>Counseling:</strong> Attend counseling session<br>5️⃣ <strong>Fee Payment:</strong> Complete the admission process<br><br>📞 <strong>Contact:</strong> +91 99400 58263<br>🌐 <strong>Apply Online:</strong> www.sathyabama.ac.in<br><br>Would you like to book a consultation call?', 'bot');
                }, 1500);
                // Send to n8n with appended string in background
                this.handleBotResponse('How do I apply for admission? do not reply-101');
                break;
            case 'book':
                this.addMessage('I want to book a consultation', 'user');
                setTimeout(() => {
                    this.addMessage('Great! I\'ll help you book a consultation with our admission counselor. Please fill out the form to schedule your appointment.', 'bot');
                    this.openBookingModal();
                }, 1000);
                // Send to n8n with appended string in background
                this.handleBotResponse('I want to book a consultation do not reply-101');
                break;
        }
    }

    async handleBotResponse(userMessage) {
        try {
            // Send user message to n8n webhook with sessionId
            const webhookUrl = 'http://localhost:5678/webhook/5628bba4-ab04-443d-8b7a-8e506b0afc3e/chat';
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: userMessage, sessionId: this.sessionId })
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error(`HTTP error! status: ${response.status}, response: ${errorText}`);
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseText = await response.text();
            console.log('Raw webhook response text:', responseText);

            const data = JSON.parse(responseText);

            // Adjusted to handle n8n response formats with 'item' array or 'output' field
            if (data.item && Array.isArray(data.item) && data.item.length > 0 && data.item[0].output) {
                this.addMessage(data.item[0].output, 'bot');
            } else if (data.output) {
                this.addMessage(data.output, 'bot');
            } else {
                console.error(`Invalid response format from webhook: ${responseText}`);
                throw new Error('Invalid response format from webhook');
            }
        } catch (error) {
            console.error('Error calling webhook:', error);
            // Fallback to predefined responses if webhook fails
            // this.handleFallbackResponse(userMessage); // Removed as per request
        }
    }

    handleFallbackResponse(userMessage) {
        // All template/fallback responses removed as per request
    }

    openBookingModal() {
        document.getElementById('booking-modal').classList.remove('hidden');
    }

    closeModal() {
        document.getElementById('booking-modal').classList.add('hidden');
    }

    submitBooking() {
        const formData = {
            name: document.getElementById('student-name').value,
            email: document.getElementById('student-email').value,
            phone: document.getElementById('student-phone').value,
            course: document.getElementById('course-interest').value,
            date: document.getElementById('preferred-date').value,
            time: document.getElementById('preferred-time').value
        };

        // Validate required fields
        if (!formData.name || !formData.email || !formData.phone || !formData.course) {
            alert('Please fill in all required fields.');
            return;
        }

        // Generate booking reference
        const bookingRef = 'SIST' + Date.now().toString().slice(-6);
        
        // Close modal
        this.closeModal();
        
        // Add confirmation message
        const confirmationMessage = `✅ <strong>Booking Confirmed!</strong><br><br>📋 <strong>Reference:</strong> ${bookingRef}<br>👤 <strong>Name:</strong> ${formData.name}<br>📧 <strong>Email:</strong> ${formData.email}<br>📱 <strong>Phone:</strong> ${formData.phone}<br>🎓 <strong>Course:</strong> ${formData.course}<br>${formData.date ? `📅 <strong>Date:</strong> ${formData.date}` : ''}<br>${formData.time ? `🕒 <strong>Time:</strong> ${formData.time}` : ''}<br><br>Our admission counselor will contact you within 24 hours. Thank you for choosing Divine Krishna!`;
        setTimeout(() => {
            this.addMessage(confirmationMessage, 'bot');
            this.handleBotResponse(confirmationMessage);
        }, 500);

        // Reset form
        document.getElementById('booking-form').reset();
        
        // In a real application, you would send this data to your backend
        console.log('Booking submitted:', formData);
    }
}

// Initialize the chat application when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new DivineKrishnaChatApp();
});

