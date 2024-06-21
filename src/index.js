// ITERATION 1

function updateSubtotal(product) {
  // Obtener elementos DOM del product
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  console.log(quantity)
  // Calcular el subtotal
  let subtotal = price * quantity;
  // Actualizar el subtotal en el DOM
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal;
  // Retornar el subtotal
  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  const productElements = Array.from(document.getElementsByClassName('product'));
  // Usar forEach para iterar sobre cada producto y actualizar el subtotal
  let total = 0;
  productElements.forEach(product => {
    total += updateSubtotal(product);
  });
  // ITERATION 3
  // Actualizar el total general
  const totalElement = document.querySelector('#total-value span');
  totalElement.innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productRow = target.closest('.product');
  productRow.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productTable = document.getElementById('cart');
  const newproductName = document.getElementById("new-name").value;
  const newproductPrice = document.getElementById("new-price").value;
  console.log(newproductName);
  const newRow = document.createElement('tr');
  newRow.className = 'product';

  newRow.innerHTML = `
     <td class="name">
            <span>${newproductName}</span>
          </td>
          <td class="price">$<span>${newproductPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
  `;
  cart.appendChild(newRow);
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(btn => {
    btn.addEventListener('click', removeProduct);
  });
  document.getElementById('new-name').value = '';
  document.getElementById('new-price').value = '';
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll); 
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(btn => {
    btn.addEventListener('click', removeProduct);
  });
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
  //... your code goes here
});
