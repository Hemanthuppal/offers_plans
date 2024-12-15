// Update the total price based on the selected option
document.querySelectorAll('input[name="unit"]').forEach((radio) => {
    radio.addEventListener('change', (e) => {
      const totalPrice = document.getElementById('total-price');
      switch (e.target.value) {
        case '1':
          totalPrice.textContent = '$10.00 USD';
          break;
        case '2':
          totalPrice.textContent = '$18.00 USD';
          break;
        case '3':
          totalPrice.textContent = '$24.00 USD';
          break;
      }
    });
  });
  