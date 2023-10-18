function calculateTotalSalesWithTax(products, tax) {
  const result = products.map((product) => {
    return product.price * product.quantity * (1 + tax / 100);
  });

  const sum = result.reduce((acc, val) => acc + val, 0);
  return parseFloat(sum.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
