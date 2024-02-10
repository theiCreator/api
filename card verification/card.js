function validateCreditCard(cardNumber) {
  // Regex patterns for Visa,Verve and Mastercard cards
  const visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const mastercard = /^5[1-5][0-9]{14}$/;
  const verve = /^(506[0-1][0-8][0-9]|6500(0[2-9]|1[0-9]|2[0-7])|507(8[6-9][0-9]|9[0-6][0-4]))[0-9]{10,13}$/;


  // Validation process
    if (visa.test(cardNumber)) {
      return "A Visa Card";
  } else if (mastercard.test(cardNumber)) {
      return "A Mastercard";
  } else if (verve.test(cardNumber)) {
      return "A Verve Card";
  } else{
      return "Card Not Found";
  }
}
// Usage:
const cardNumber = "0123456789"; // Replace with card number for validation
const typeOfCard = validateCreditCard(cardNumber);
console.log(`This card is: ${typeOfCard}`);
