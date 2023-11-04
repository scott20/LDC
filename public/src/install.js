// Cria uma variável para armazenar a referência ao evento 'beforeinstallprompt'
let deferredPrompt;

// Adiciona um ouvinte de evento para o evento 'beforeinstallprompt'
window.addEventListener('beforeinstallprompt', (e) => {
  // Previne a exibição automática do prompt de instalação
  e.preventDefault();
  
  // Armazena a referência ao evento 'beforeinstallprompt' para uso posterior
  deferredPrompt = e;
  
  // Exibe o botão de instalação quando o evento 'beforeinstallprompt' é disparado
  document.getElementById('installButton').style.display = 'block';
});

// Adiciona um ouvinte de evento de clique ao botão de instalação
document.getElementById('installButton').addEventListener('click', () => {
  // Verifica se o evento 'beforeinstallprompt' foi disparado
  if (deferredPrompt) {
    // Inicia o fluxo de instalação ao chamar o método 'prompt()' no objeto 'deferredPrompt'
    deferredPrompt.prompt();
    
    // Verifica a escolha do usuário
    deferredPrompt.userChoice.then((choiceResult) => {
      // Se o usuário aceitou a solicitação de instalação
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuário aceitou instalar o PWA');
      } else {
        // Se o usuário recusou a solicitação de instalação
        console.log('Usuário recusou instalar o PWA');
      }
      
      // Limpa a referência ao evento 'beforeinstallprompt'
      deferredPrompt = null;
    });
  }
});