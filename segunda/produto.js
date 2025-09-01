document.querySelectorAll('.product-card button').forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.parentElement;
    const productName = productCard.querySelector('p').textContent;
    const productImage = productCard.querySelector('img').src;
    const productPrice = productCard.querySelector('.price').textContent;

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({
      name: productName,
      image: productImage,
      price: productPrice
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'carrinho.html';
  });
});
