const cartContainer = document.getElementById('cart-container');
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

let totalCompra = 0;

if (cartItems.length === 0) {
  cartContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
} else {
  cartItems.forEach((item, index) => {
    const valor = parseFloat(item.price.replace('R$', '').replace(',', '.'));
    totalCompra += valor;

    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <p><strong>${item.name}</strong></p>
      <p class="item-price">${item.price}</p>
      <button class="remove-btn" data-index="${index}">Remover</button>
    `;
    cartContainer.appendChild(div);
  });

  // Exibe o total da compra abaixo dos itens
  const totalDiv = document.createElement('div');
  totalDiv.classList.add('cart-total');
  totalDiv.innerHTML = `<h3>Total da Compra: R$ ${totalCompra.toFixed(2)}</h3>`;
  cartContainer.appendChild(totalDiv);
}

// Função para remover item do carrinho
document.querySelectorAll('.remove-btn').forEach(button => {
  button.addEventListener('click', () => {
    const index = button.getAttribute('data-index');
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    location.reload(); // Atualiza a página
  });
});

// Geração do QR Code de pagamento
document.getElementById('finalizar-compra').addEventListener('click', () => {
  if (cartItems.length === 0) {
    alert('Seu carrinho está vazio.');
    return;
  }

  const pagamentoTexto = `Pagamento JLE Beauty - Total: R$ ${totalCompra.toFixed(2)}, Produtos: ${cartItems.map(p => p.name).join(', ')}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pagamentoTexto)}`;

  const qrImg = document.createElement('img');
  qrImg.src = qrCodeUrl;
  qrImg.alt = 'QR Code de Pagamento';

  const qrArea = document.getElementById('qrcode-area');
  qrArea.innerHTML = '';
  qrArea.appendChild(qrImg);
});
