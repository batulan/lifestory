const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');


registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.username === username);

    if (userExists) {
        alert('User  already exists!');
    } else {
        
        users.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful!');
        registerForm.reset(); 
    }
});


loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        loginForm.reset(); 
        window.location.href = 'index.html'; 
    } else {
        alert('Invalid username or password!');
    }
});