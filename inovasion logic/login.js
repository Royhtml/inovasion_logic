       document.addEventListener('DOMContentLoaded', function() {
            const loginForm = document.getElementById('login-form');
            const registerForm = document.getElementById('register-form');
            const toggleLogin = document.getElementById('toggle-login');
            const toggleRegister = document.getElementById('toggle-register');
            
            if (!localStorage.getItem('coffeeShopUsers')) {
                localStorage.setItem('coffeeShopUsers', JSON.stringify([]));
            }
            
            toggleRegister.addEventListener('click', function() {
                loginForm.style.display = 'none';
                registerForm.style.display = 'block';
                toggleRegister.style.display = 'none';
                toggleLogin.style.display = 'block';
                document.querySelector('.auth-header h1').textContent = 'Create Your Account';
                document.querySelector('.auth-header p').textContent = 'Join our coffee community today';
                clearErrors();
            });
            
            toggleLogin.addEventListener('click', function() {
                registerForm.style.display = 'none';
                loginForm.style.display = 'block';
                toggleLogin.style.display = 'none';
                toggleRegister.style.display = 'block';
                document.querySelector('.auth-header h1').textContent = 'Welcome to Coffee Haven';
                document.querySelector('.auth-header p').textContent = 'Please login to your account';
                clearErrors();
            });
            

            toggleLogin.style.display = 'none';
            
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                clearErrors();
                
                const email = document.getElementById('login-email').value;
                const password = document.getElementById('login-password').value;
                const users = JSON.parse(localStorage.getItem('coffeeShopUsers'));
                
                if (!email) {
                    showError('login-email-error', 'Email is required');
                    return;
                }
                
                if (!password) {
                    showError('login-password-error', 'Password is required');
                    return;
                }
                

                const user = users.find(u => u.email === email && u.password === password);
                
                if (user) {

                    showSuccess('login-success', 'Login successful! Redirecting...');
                    

                    localStorage.setItem('currentUser', JSON.stringify(user));
                    

                    setTimeout(() => {
                        window.location.href = 'login.html';
                    }, 1500);
                } else {
                    showError('login-error', 'Invalid email or password');
                }
            });
            

            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                clearErrors();
                
                const name = document.getElementById('register-name').value;
                const email = document.getElementById('register-email').value;
                const password = document.getElementById('register-password').value;
                const confirmPassword = document.getElementById('register-confirm-password').value;
                const users = JSON.parse(localStorage.getItem('coffeeShopUsers'));
                

                if (!name) {
                    showError('register-name-error', 'Full name is required');
                    return;
                }
                
                if (!email) {
                    showError('register-email-error', 'Email is required');
                    return;
                }
                
                if (!isValidEmail(email)) {
                    showError('register-email-error', 'Please enter a valid email');
                    return;
                }
                

                if (users.some(u => u.email === email)) {
                    showError('register-email-error', 'Email already registered');
                    return;
                }
                
                if (!password) {
                    showError('register-password-error', 'Password is required');
                    return;
                }
                
                if (password.length < 6) {
                    showError('register-password-error', 'Password must be at least 6 characters');
                    return;
                }
                
                if (password !== confirmPassword) {
                    showError('register-confirm-error', 'Passwords do not match');
                    return;
                }
                

                const newUser = {
                    id: Date.now().toString(),
                    name: name,
                    email: email,
                    password: password,
                    joinDate: new Date().toISOString(),
                    loyaltyPoints: 0,
                    favoriteDrink: ''
                };
                

                users.push(newUser);
                localStorage.setItem('coffeeShopUsers', JSON.stringify(users));
                

                showSuccess('register-success', 'Registration successful! You can now login.');
                

                registerForm.reset();
                

                setTimeout(() => {
                    registerForm.style.display = 'none';
                    loginForm.style.display = 'block';
                    toggleLogin.style.display = 'none';
                    toggleRegister.style.display = 'block';
                    document.querySelector('.auth-header h1').textContent = 'Welcome to Coffee Haven';
                    document.querySelector('.auth-header p').textContent = 'Please login to your account';
                }, 2000);
            });
            

            function showError(elementId, message) {
                const element = document.getElementById(elementId);
                element.textContent = message;
                element.style.display = 'block';
            }
            
            function showSuccess(elementId, message) {
                const element = document.getElementById(elementId);
                element.textContent = message;
                element.style.display = 'block';
            }
            
            function clearErrors() {
                document.querySelectorAll('.error-message, .success-message').forEach(el => {
                    el.style.display = 'none';
                });
            }
            
            function isValidEmail(email) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(email);
            }
        });