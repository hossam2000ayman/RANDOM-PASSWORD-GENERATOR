//RANDOM PASSWORD GENERATOR

function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOBQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolsChars = "!@#$%^&*()_+-=";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolsChars : "";

  if (length <= 0) {
    return `(password length must be at least 1)`;
  }

  if (allowedChars.length === 0) {
    return `(At least 1 set of character need to be selected)`;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);

    password += allowedChars[randomIndex];
  }

  return password;
}

const passwordLength = 10;
const includeLowercase = false;
const includeUppercase = false;
const includeNumbers = false;
const includeSymbols = true;

const password = document.getElementById("generatedPassword");

password.textContent =
  "Your Generated Password is : " +
  generatePassword(
    passwordLength,
    includeNumbers,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );

console.log(password.value);
