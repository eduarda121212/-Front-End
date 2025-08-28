const cartContainer = document.getElementById('cart-container');
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

if (cartItems.length === 0) {
  cartContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
} else {
  cartItems.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <p>${item.name}</p>
    `;
    cartContainer.appendChild(div);
  });
}

document.getElementById('finalizar-compra').addEventListener('click', () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  if (cartItems.length === 0) {
    alert('Seu carrinho está vazio.');
    return;
  }

  // Simula valor total (exemplo: R$ 25 por item)
  const total = cartItems.length * 25;
  const pagamentoTexto = `Pagamento JLE Beauty - Total: R$ ${total}, Produtos: ${cartItems.map(p => p.name).join(', ')}`;

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pagamentoTexto)}`;

  const qrImg = document.createElement('img');
  qrImg.src = qrCodeUrl;
  qrImg.alt = 'QR Code de Pagamento';

  const qrArea = document.getElementById('qrcode-area');
  qrArea.innerHTML = '';
  qrArea.appendChild(qrImg);
});
