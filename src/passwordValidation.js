export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

//function to check if a string include ascending or descending numbers

export const checkAscAndDesc = (str) => {
  // Regular expression to match sequences of digits in the input string
  const regex = /\d+/g;
  // Use the regular expression to find all digit sequences and store them in an array
  const matchedElement = str.match(regex);

  // Check if there are at least 5 different digits in the input string
  if (matchedElement && [...new Set(matchedElement.join(""))].length > 4) {
    // Extract the last 3 unique digits
    const firstNumbers = [...new Set(matchedElement.join(""))].slice(-3);
    // Extract the first 3 unique digits
    const lastNumbers = [...new Set(matchedElement.join(""))].slice(0, 3);

    // Check if 'firstNumbers' is in ascending or descending order
    if (
      firstNumbers == firstNumbers.sort((a, b) => a - b) ||
      firstNumbers == firstNumbers.sort((a, b) => b - a)
    )
      return true;
    // Check if 'lastNumbers' is in ascending or descending order
    if (
      lastNumbers == lastNumbers.sort((a, b) => a - b) ||
      lastNumbers == lastNumbers.sort((a, b) => b - a)
    )
      return true;
  } else {
    return false;
  }
  return false;
};
/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string.
  if (typeof password !== "string") password = String(password);
  if (password.length !== 10) return false;

  // Check if the password contains only numbers.
  if (/^[0-9]+$/.test(password)) return false;

  // Check if the password contains only alphabetic characters (both lowercase and uppercase).
  if (/^[A-Za-z]+$/.test(password)) return false;

  // Check if the password contains at least one character that is not alphanumeric (i.e., special characters).
  if (/[^A-Za-z0-9]/.test(password)) return false;

  // Check if the password contains at least one lowercase letter.
  if (!/[a-z]/.test(password)) return false;

  // Check if the password contains at least one uppercase letter.
  if (!/[A-Z]/.test(password)) return false;

  // Check if the password is included in a list of forbidden passwords.
  if (forbiddenPasswords.includes(password)) return false;

  // Check if the password contains a sequence of three or more digits in ascending or descending order.
  if (checkAscAndDesc(password)) return false;

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;

  return true;
}
