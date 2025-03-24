import { EventEmitter } from 'events'

declare class GetSecurityScopedBookmark extends EventEmitter {
  /**
   * Gets a security-scoped bookmark for the provided file path
   * @param input File path to create a security-scoped bookmark for
   * @returns A string representing the security-scoped bookmark data
   */
  getSecurityScopedBookmark(input?: string): string

  /**
   * Gets security-scoped bookmarks for multiple file paths
   * @param input Array of file paths to create security-scoped bookmarks for
   * @returns Array of strings representing security-scoped bookmark data
   */
  getSecurityScopedBookmarks(input?: string[]): string[]
}

/**
 * Singleton instance of GetSecurityScopedBookmark
 * On non-macOS platforms, this provides fallback methods that return empty values
 */
declare const instance: GetSecurityScopedBookmark

export = instance
