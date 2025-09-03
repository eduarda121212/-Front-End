document.querySelectorAll('.service-card button').forEach(button => {
  button.addEventListener('click', () => {
    const servico = button.parentElement.querySelector('h3').textContent;
    document.getElementById('servico').value = servico;
    document.getElementById('modal-agendamento').style.display = 'flex';
  });
});

document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('modal-agendamento').style.display = 'none';
});

document.getElementById('form-agendamento').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Agendamento confirmado! Obrigada, ' + this.nome.value + ' 💖');
  this.reset();
  document.getElementById('modal-agendamento').style.display = 'none';
});

