export function validateURL(url) {
    try {
      // Create a URL object which will throw an error for invalid URLs.
      const parsedUrl = new URL(url);
  
      // Validate the protocol to ensure it's either HTTP or HTTPS.
      if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
        return false;
      }
  
      // Check if the hostname is valid (non-empty and not an IP address).
      if (!parsedUrl.hostname || parsedUrl.hostname.match(/^(\d{1,3}\.){3}\d{1,3}$/)) {
        return false;
      }
  
      // Additional validation to reject URLs with only special characters or invalid formatting.
      if (!parsedUrl.hostname.match(/^[a-zA-Z0-9.-]+$/)) {
        return false;
      }
  
      return true; // If all checks pass, the URL is valid.
    } catch (e) {
      // If URL constructor throws an error, it's an invalid URL.
      return false;
    }
  }
  
