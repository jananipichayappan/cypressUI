// cypress/support/usernameHelper.js

/**
 * Generates a unique username with optional random characters.
 * @param {string} prefix - Optional prefix for the username (default: 'user').
 * @param {number} randomLength - Length of random alphanumeric string to append (default: 5).
 * @return {string} - The generated username.
 */
export function generateUsername(prefix = 'user', randomLength = 5) {
  const timestamp = Date.now(); // Use timestamp for uniqueness
  const randomString = Math.random().toString(36).substring(2, 2 + randomLength); // Random alphanumeric string
  return `${prefix}_${timestamp}_${randomString}`;
}

// cypress/support/emailHelper.js

/**
 * Generates a unique email address with optional random characters.
 * @param {string} domain - The domain for the email address (default: 'example.com').
 * @param {string} prefix - Optional prefix for the email address (default: 'testuser').
 * @param {number} randomLength - Length of random alphanumeric string to append (default: 5).
 * @return {string} - The generated email address.
 */
export function generateEmail(domain = 'example.com', randomLength = 5) {
  const timestamp = Date.now(); // Ensure uniqueness
  const randomString = Math.random().toString(36).substring(2, 2 + randomLength); // Random alphanumeric string
  return `${timestamp}_${randomString}@${domain}`;
}

// Generate a random password with a specified length
export function generatePassword(length = 8, includeSpecialChars = true) {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  
  // Build the character set to use
  let charSet = lowercase + numbers;
  
  if (includeSpecialChars) {
      charSet += specialChars;
  }
  
  // Add uppercase letters to the character set if desired
  charSet += uppercase;
  
  // Generate the password by selecting random characters from the charSet
  let password = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
  }
  
  return password;
}


