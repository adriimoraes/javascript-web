document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Aqui você pode adicionar a lógica de autenticação
    // Por exemplo, enviar uma solicitação para o servidor para verificar as credenciais
    
    console.log('Username:', username);
    console.log('Password:', password);
  });