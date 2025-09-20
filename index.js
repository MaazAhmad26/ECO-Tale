// Auth functionality
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const authModal = document.getElementById('auth-modal');
    const loginIcon = document.getElementById('login-icon');
    const registerIcon = document.getElementById('register-icon');
    const closeAuth = document.getElementById('close-auth');
    const authTabs = document.querySelectorAll('.auth-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginMessage = document.getElementById('login-message');
    const registerMessage = document.getElementById('register-message');
    const authIcons = document.getElementById('auth-icons');
    const userMenu = document.getElementById('user-menu');
    const userAvatar = document.getElementById('user-avatar');
    const clearChatBtn = document.getElementById('clear-chat-btn');
    const chatMessages = document.querySelector('.chat-messages');

    // Check authentication status on page load
    checkAuthStatus();

    // Open modal with login form
    loginIcon.addEventListener('click', () => {
        authModal.style.display = 'flex';
        switchTab('login');
    });

    // Open modal with register form
    registerIcon.addEventListener('click', () => {
        authModal.style.display = 'flex';
        switchTab('register');
    });

    // Close modal
    closeAuth.addEventListener('click', () => {
        authModal.style.display = 'none';
        clearMessages();
    });

    // Close modal when clicking outside
    authModal.addEventListener('click', (e) => {
        if (e.target === authModal) {
            authModal.style.display = 'none';
            clearMessages();
        }
    });

    // Switch between login and register tabs
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            switchTab(tabName);
        });
    });

    // Login functionality
    loginBtn.addEventListener('click', async () => {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        if (!email || !password) {
            showMessage(loginMessage, 'Please fill in all fields', 'error');
            return;
        }
        
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            
            const data = await response.json();
            
            if (data.success) {
                showMessage(loginMessage, data.message, 'success');
                setTimeout(() => {
                    authModal.style.display = 'none';
                    clearMessages();
                    updateUIAfterAuth(data.user);
                    loadUserChat(); // Load user's chat after login
                }, 1500);
            } else {
                showMessage(loginMessage, data.message, 'error');
            }
        } catch (error) {
            console.error('Login error:', error);
            showMessage(loginMessage, 'An error occurred during login', 'error');
        }
    });

    // Register functionality
    registerBtn.addEventListener('click', async () => {
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm').value;
        
        if (!username || !email || !password || !confirmPassword) {
            showMessage(registerMessage, 'Please fill in all fields', 'error');
            return;
        }
        
        if (password !== confirmPassword) {
            showMessage(registerMessage, 'Passwords do not match', 'error');
            return;
        }
        
        if (password.length < 6) {
            showMessage(registerMessage, 'Password must be at least 6 characters', 'error');
            return;
        }
        
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });
            
            const data = await response.json();
            
            if (data.success) {
                showMessage(registerMessage, data.message, 'success');
                setTimeout(() => {
                    authModal.style.display = 'none';
                    clearMessages();
                    updateUIAfterAuth(data.user);
                    // Add welcome message for new users
                    addAIMessage("Welcome to Eco-Tales! I'm your Climate Learning Assistant. How can I help you understand climate change today? You can ask me about causes, effects, or solutions!");
                    saveMessage('assistant', "Welcome to Eco-Tales! I'm your Climate Learning Assistant. How can I help you understand climate change today? You can ask me about causes, effects, or solutions!");
                }, 1500);
            } else {
                showMessage(registerMessage, data.message, 'error');
            }
        } catch (error) {
            console.error('Registration error:', error);
            showMessage(registerMessage, 'An error occurred during registration', 'error');
        }
    });

    // Clear chat functionality
    if (clearChatBtn) {
        clearChatBtn.addEventListener('click', async () => {
            if (!confirm('Are you sure you want to clear your chat history?')) return;
            
            try {
                const response = await fetch('/api/chat', {
                    method: 'DELETE'
                });
                
                const data = await response.json();
                
                if (data.success) {
                    // Clear the chat UI but keep the initial AI message
                    const initialMessage = chatMessages.querySelector('.ai-message:first-child');
                    chatMessages.innerHTML = '';
                    if (initialMessage) {
                        chatMessages.appendChild(initialMessage);
                    }
                    
                    // Add a new welcome message
                    addAIMessage("Your chat history has been cleared. How can I help you with climate change questions today?");
                    saveMessage('assistant', "Your chat history has been cleared. How can I help you with climate change questions today?");
                } else {
                    alert('Error clearing chat: ' + data.message);
                }
            } catch (error) {
                console.error('Error clearing chat:', error);
                alert('Error clearing chat history');
            }
        });
    }

    // Chat functionality
    document.querySelector('.chat-input button').addEventListener('click', handleChatMessage);
    document.querySelector('.chat-input input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleChatMessage();
        }
    });

    // Helper functions
    function switchTab(tabName) {
        authTabs.forEach(tab => {
            if (tab.getAttribute('data-tab') === tabName) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
        
        if (tabName === 'login') {
            loginForm.classList.add('active');
            registerForm.classList.remove('active');
        } else {
            registerForm.classList.add('active');
            loginForm.classList.remove('active');
        }
        
        clearMessages();
    }

    function showMessage(element, message, type) {
        element.textContent = message;
        element.classList.remove('success', 'error');
        element.classList.add(type);
        element.style.display = 'block';
    }

    function clearMessages() {
        loginMessage.style.display = 'none';
        registerMessage.style.display = 'none';
        loginMessage.classList.remove('success', 'error');
        registerMessage.classList.remove('success', 'error');
    }

    async function checkAuthStatus() {
        try {
            const response = await fetch('/auth/status');
            const data = await response.json();
            
            if (data.isAuthenticated) {
                updateUIAfterAuth(data.user);
                loadUserChat(); // Load user's chat if authenticated
            }
        } catch (error) {
            console.error('Error checking auth status:', error);
        }
    }

    function updateUIAfterAuth(user) {
        authIcons.style.display = 'none';
        userMenu.style.display = 'flex';
        userAvatar.textContent = user.username.charAt(0).toUpperCase();
        
        // Show clear chat button for authenticated users
        if (clearChatBtn) {
            clearChatBtn.style.display = 'block';
        }
        
        // Add logout functionality to avatar
        userAvatar.onclick = () => {
            if (confirm('Are you sure you want to logout?')) {
                fetch('/logout', { method: 'POST' })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            authIcons.style.display = 'flex';
                            userMenu.style.display = 'none';
                            
                            // Hide clear chat button for non-authenticated users
                            if (clearChatBtn) {
                                clearChatBtn.style.display = 'none';
                            }
                            
                            // Reset chat to default state
                            resetChatToDefault();
                        }
                    })
                    .catch(error => {
                        console.error('Logout error:', error);
                    });
            }
        };
    }

    async function loadUserChat() {
        try {
            const response = await fetch('/api/chat');
            const data = await response.json();
            
            if (data.success) {
                // Clear current chat except the initial message
                const initialMessage = chatMessages.querySelector('.ai-message:first-child');
                chatMessages.innerHTML = '';
                if (initialMessage) {
                    chatMessages.appendChild(initialMessage);
                }
                
                // Add user's saved messages
                if (data.messages && data.messages.length > 0) {
                    data.messages.forEach(msg => {
                        if (msg.role === 'user') {
                            addUserMessage(msg.content);
                        } else {
                            addAIMessage(msg.content);
                        }
                    });
                }
                
                // Scroll to bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        } catch (error) {
            console.error('Error loading chat:', error);
        }
    }

    async function saveMessage(role, content) {
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ role, content })
            });
            
            const data = await response.json();
            
            if (!data.success) {
                console.error('Error saving message:', data.message);
            }
        } catch (error) {
            console.error('Error saving message:', error);
        }
    }

    function handleChatMessage() {
        const input = document.querySelector('.chat-input input');
        const message = input.value.trim();
        
        if (message) {
            // Add user message to UI
            addUserMessage(message);
            
            // Save user message if authenticated
            if (userMenu.style.display !== 'none') {
                saveMessage('user', message);
            }
            
            // Clear input
            input.value = '';
            
            // Show loading indicator
            const loadingElem = document.createElement('div');
            loadingElem.classList.add('chat-loading');
            loadingElem.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
            chatMessages.appendChild(loadingElem);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            // Simulate AI response after a short delay
            setTimeout(function() {
                // Remove loading indicator
                loadingElem.remove();
                
                // Generate AI response
                let aiResponse = generateAIResponse(message);
                
                // Add AI message to UI
                addAIMessage(aiResponse);
                
                // Save AI message if authenticated
                if (userMenu.style.display !== 'none') {
                    saveMessage('assistant', aiResponse);
                }
                
                // Scroll to bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        }
    }

    function addUserMessage(content) {
        const userMessageElem = document.createElement('div');
        userMessageElem.classList.add('message', 'user-message');
        userMessageElem.textContent = content;
        chatMessages.appendChild(userMessageElem);
    }

    function addAIMessage(content) {
        const aiMessageElem = document.createElement('div');
        aiMessageElem.classList.add('message', 'ai-message');
        aiMessageElem.innerHTML = content;
        chatMessages.appendChild(aiMessageElem);
    }

    function generateAIResponse(message) {
        // Simple response logic for demo
        if (message.toLowerCase().includes('cause')) {
            return "The main causes of climate change are greenhouse gas emissions from human activities like burning fossil fuels, deforestation, and agriculture. These gases trap heat in the atmosphere, leading to global warming.";
        } else if (message.toLowerCase().includes('effect')) {
            return "Climate change effects include rising temperatures, sea level rise, extreme weather events, loss of biodiversity, and impacts on human health and food production.";
        } else if (message.toLowerCase().includes('solution') || message.toLowerCase().includes('what can i do')) {
            return "There are many solutions! We can transition to renewable energy, improve energy efficiency, adopt sustainable agriculture, protect forests, and reduce waste. On a personal level, you can reduce your carbon footprint by using public transport, eating less meat, and conserving energy.";
        } else {
            return "That's an interesting question about climate change. Our AI is continuously learning about climate science to provide better answers. Try asking about causes, effects, or solutions to climate change!";
        }
    }

    function resetChatToDefault() {
        // Clear chat and reset to initial state
        chatMessages.innerHTML = `
            <div class="message ai-message">
                Hi there! I'm your Climate Learning Assistant. How can I help you understand climate change
                today? You can ask me about causes, effects, or solutions!
            </div>
            <div class="message user-message">
                What are the main causes of climate change?
            </div>
            <div class="message ai-message">
                Great question! The main causes are:<br>
                1. Burning fossil fuels (coal, oil, gas)<br>
                2. Deforestation<br>
                3. Agriculture<br>
                4. Industrial processes<br>
                Would you like me to explain any of these in more detail?
            </div>
        `;
    }
});