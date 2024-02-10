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
      return "Not Found";
  }
}
// Usage:
const cardNumber = "0123456789"; // Replace with card number for validation
const typeOfCard = validateCreditCard(cardNumber);
console.log(`This card is: ${typeOfCard}`);

// Descriptions of patterns used
/*
 Visa:
    Begins with 4.
    Followed by 12 digits.
    Optionally followed by 3 more digits.
 Mastercard:
    Begins with 5.
    The second digit is any of the numbers 1 to 5.
    Followed by 14 digits.
 Verve:
    Begins with either 506099-506198 or 650002-650027 or 507865-507964
    Followed by 10,11,12 or 13 digits, since verve cards can have 16-19 digits.
*/