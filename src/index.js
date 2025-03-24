const EventEmitter = require('events')

// Load the native addon using the 'bindings' module
// This will look for the compiled .node file in various places
const bindings = require('bindings')
const native = bindings('get-security-scoped-bookmark')

// Create a nice JavaScript wrapper
class GetSecurityScopedBookmark extends EventEmitter {
  constructor() {
    super()

    // Create an instance of our C++ class
    this.addon = new native.GetSecurityScopedBookmark()
  }

  // Wrap the C++ method with a nicer JavaScript API
  getSecurityScopedBookmark(input = '') {
    if (typeof input !== 'string') {
      throw new TypeError('Input must be a string')
    }
    return this.addon.getBookmarkData(input)
  }

  getSecurityScopedBookmarks(input = []) {
    if (!Array.isArray(input)) {
      throw new TypeError('Input must be an array')
    }
    const result = input.map((item) => {
      if (typeof item !== 'string') {
        throw new TypeError('Array items must be strings')
      }
      return this.addon.getBookmarkData(item)
    })
    return result
  }
}

// Export a singleton instance
if (process.platform === 'darwin') {
  module.exports = new GetSecurityScopedBookmark()
} else {
  // Provide a fallback for unsupported platforms
  console.warn('get-security-scoped-bookmark not supported on this platform')

  module.exports = {
    getSecurityScopedBookmark: () => '',
    getSecurityScopedBookmarks: () => [],
  }
}
