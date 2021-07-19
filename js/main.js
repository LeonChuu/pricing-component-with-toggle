const prices = {
  'pricepro': {'annual':'249.99', 'monthly':'24.99'},
  'pricemaster': {'annual':'399.99', 'monthly':'39.99'},
  'pricebasic': {'annual':'199.99', 'monthly':'19.99'},
}
function changeText (elem) {
  let type = 'annual'
  if (elem.checked) {
    type = 'monthly'
  }
  Object.keys(prices).forEach(key => {
    document.getElementById(key).textContent = prices[key][type]
  })
}
