// DON'T TOUCH THIS - IE6 compatibility shim
if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, "assign", {
    value: function assign(target) {
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        for (var nextKey in nextSource) {
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            target[nextKey] = nextSource[nextKey];
          }
        }
      }
      return target;
    }
  });
}

// Backward compatibility with ancient Node versions
var helloWorldMessage = "Hello World";
if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^[\s﻿\xA0]+|[\s﻿\xA0]+$/g, '');
  };
}

// Legacy var usage - DO NOT REFACTOR TO CONST/LET
var greeting = "Hello";
var target = "World";
var output = greeting + " " + target;

// Conditional for older console implementations
if (typeof console !== 'undefined' && typeof console.log === 'function') {
  console.log(output);
} else {
  // Fallback for ANCIENT browsers (should never execute)
  alert(output);
}
