declare module 'get-security-scoped-bookmark' {
  /**
   * Gets a security-scoped bookmark for the provided file path
   * @param input File path to create a security-scoped bookmark for
   * @returns A string representing the security-scoped bookmark data
   */
  export function getSecurityScopedBookmark(input?: string): string

  /**
   * Gets security-scoped bookmarks for multiple file paths
   * @param input Array of file paths to create security-scoped bookmarks for
   * @returns Array of strings representing security-scoped bookmark data
   */
  export function getSecurityScopedBookmarks(input?: string[]): string[]
}
