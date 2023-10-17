/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The regex to check character doublication
  const checkDoublication = /(.)\1/g;

  // The regex to check consecutive character that repeat more than double
  const checkMoreThanDouble = /(.)\1{2,}/g;

  // The following line ensures, that password is null, undefined and empty return 0
  if (password === null || password === "" || password === undefined) return 0;

  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  if (checkMoreThanDouble.test(password)) return 2;

  if (checkDoublication.test(password)) {
    const matches = password.match(checkDoublication);
    return matches.length;
  }
  return 0;
}
