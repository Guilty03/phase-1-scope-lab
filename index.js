var customerName = 'bob';
var bestCustomer;  // Declare globally

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';  // Set global bestCustomer
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';  // Overwrite global bestCustomer
}

const leastFavoriteCustomer = 'Alice';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Charlie';  // This will fail, as leastFavoriteCustomer is a constant
}
