document.querySelectorAll('.product-card button').forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.previousElementSibling.textContent;
    const productImage = button.parentElement.querySelector('img').src;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, image: productImage });
    localStorage.setItem('cart', JSON.stringify(cart));

    window.location.href = 'carrinho.html';
  });
});
