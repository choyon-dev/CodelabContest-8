function simplifyPath(path) {
  let parts = path.split("/");
  let stack = [];

  for (let i = 0; i < parts.length; i++) {
    let part = parts[i];

    if (part === "" || part === ".") {
      continue;
    } else if (part === "..") {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(part);
    }
  }

  return "/" + stack.join("/");
}



// let test = simplifyPath("/home/");
// let test = simplifyPath("/home/user/../docs/./file.txt");
// let test = simplifyPath("/home//user///docs");

// let test = simplifyPath("/a/b/c/../../d");

console.log(test);