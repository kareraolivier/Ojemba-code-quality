export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

//function to check if a string include ascending or descending numbers

export const checkAscAndDesc = (str) => {
  // Regular expression to match sequences of digits in the input string
  const regex = /\d+/g;
  // Use the regular expression to find all digit sequences and store them in an array
  const matchedElement = str.match(regex);

  // Check if there are at least 5 different digits in the input string
  if (matchedElement && [...new Set(matchedElement.join(""))].length > 4) {
    // Extract the last 3 unique digits from the combined sequences and store them in 'a'
    let a = [...new Set(matchedElement.join(""))].slice(-3);
    // Extract the first 3 unique digits from the combined sequences and store them in 'b'
    let b = [...new Set(matchedElement.join(""))].slice(0, 3);

    // Check if 'a' is in ascending or descending order and return true if either is true
    if (a == a.sort((a, b) => a - b) || a == a.sort((a, b) => b - a))
      return true;
    // This section appears to be incomplete and doesn't affect the return value
    if (b == b.sort((a, b) => a - b) || b == b.sort((a, b) => b - a))
      return true;
  } else {
    return false;
  }

  // If the conditions are not met, return false
  return false;
};
/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);
  if (password.length !== 10) return false;

  // Check if the password contains only numbers. If it does, return false.
  if (/^[0-9]+$/.test(password)) return false;

  // Check if the password contains only alphabetic characters (both lowercase and uppercase). If it does, return false.
  if (/^[A-Za-z]+$/.test(password)) return false;

  // Check if the password contains at least one character that is not alphanumeric (i.e., special characters). If it doesn't, return false.
  if (/[^A-Za-z0-9]/.test(password)) return false;

  // Check if the password contains at least one lowercase letter. If it doesn't, return false.
  if (!/[a-z]/.test(password)) return false;

  // Check if the password contains at least one uppercase letter. If it doesn't, return false.
  if (!/[A-Z]/.test(password)) return false;

  // Check if the password is included in a list of forbidden passwords. If it is, return false.
  if (forbiddenPasswords.includes(password)) return false;

  // Check if the password contains a sequence of three or more digits in ascending or descending order. If it does, return false.
  if (checkAscAndDesc(password)) return false;

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;

  return true;
}
