// Load our addon
const GetSecurityScopedBookmark = require('./src')

// Try the helloWorld function
const result = GetSecurityScopedBookmark.getSecurityScopedBookmark('Another test')
const results = GetSecurityScopedBookmark.getSecurityScopedBookmarks([
  'This is a test',
  'Another test string',
  'Yet another test string',
])

// Should print: "Hello from C++! You said: This is a test"
console.log(result)
console.log(results)
