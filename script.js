/*document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'admin' && password === '12345') {
        alert('Login realizado com sucesso!');

     window.location.href = 'https://www.programiz.com/javascript/online-compiler/';
    
    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos!';
    }
});*/


function moveButton(button) {
    let maxHeight = window.innerHeight - button.offsetHeight - 20;
    let maxWidth = window.innerWidth - button.offsetWidth - 20;

    // Evitar que o botão saia da tela
    let newTop = Math.random() * maxHeight;
    let newLeft = Math.random() * maxWidth;

    button.style.position = 'absolute';
    button.style.top = newTop + 'px';
    button.style.left = newLeft + 'px';
}

// Evento para desktops (mouseover)
document.getElementById('naoAceito').addEventListener('mouseover', function() {
    moveButton(this);
});

// Evento para dispositivos móveis (touchstart)
document.getElementById('naoAceito').addEventListener('touchstart', function() {
    moveButton(this);
});

// Botão "Ok"
document.getElementById('ok').addEventListener('click', function() {
    alert('( ͡° ͜ʖ ͡°) safada');
});





