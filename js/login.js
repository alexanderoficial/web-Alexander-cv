document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');
  
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que se envíe el formulario
    
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    const username = usernameInput.value;
    const password = passwordInput.value;
    
    if (username === 'blogalexander' && password === 'Alexander2023') {
      window.location.href = 'www.google.com';
    } else {
      alert('Nombre de usuario o contraseña incorrectos.');
    }
  });
});

