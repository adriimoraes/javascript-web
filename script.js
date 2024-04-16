document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Aqui você pode adicionar a lógica de autenticação
    // Por exemplo, enviar uma solicitação para o servidor para verificar as credenciais
    
    console.log('Username:', username);
    console.log('Password:', password);
  });




  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var loginContainer = document.querySelector('.login-container');

    // Verificar as credenciais
    if (username === 'Pedro' && password === '12345678') {
        // Credenciais corretas, mudar cor para verde
        loginContainer.style.backgroundColor = '#4CAF50'; // verde
    } else {
        // Credenciais incorretas, mudar cor para vermelho
        loginContainer.style.backgroundColor = '#f44336'; // vermelho
    }
});












