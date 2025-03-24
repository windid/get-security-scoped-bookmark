#include <string>
#import <Foundation/Foundation.h>
#include "./bookmark.h"

namespace bookmark
{
  std::string GetBookmarkData(const std::string& path) {
     NSString* nsPath = [NSString stringWithUTF8String:path.c_str()];
        
    // Convert NSString to NSURL
    NSURL* url = [NSURL fileURLWithPath:nsPath];

    // Create the file if it doesn't exist (necessary for NSSavePanel options).
    // NSFileManager* defaultManager = [NSFileManager defaultManager];
    // if (![defaultManager fileExistsAtPath:[url path]]) {
    //   [defaultManager createFileAtPath:[url path] contents:nil attributes:nil];
    // }

    // Send back an empty string if the file does not exist.
    NSFileManager* defaultManager = [NSFileManager defaultManager];
    if (![defaultManager fileExistsAtPath:[url path]]) {
      return "";
    }

    NSError* error = nil;
    NSData* bookmarkData =
        [url bookmarkDataWithOptions:NSURLBookmarkCreationWithSecurityScope
            includingResourceValuesForKeys:nil
                            relativeToURL:nil
                                    error:&error];
    if (error != nil) {
      // Send back an empty string if there was an error.
      return "";
    } else {
      // Encode NSData in base64 then convert to NSString.
      NSString* base64data = [[NSString alloc]
          initWithData:[bookmarkData base64EncodedDataWithOptions:0]
              encoding:NSUTF8StringEncoding];
      // Convert NSString to std::string directly
      return std::string([base64data UTF8String]);
    }
  }
}