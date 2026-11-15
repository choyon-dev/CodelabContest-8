function compareVersions(version1, version2) {
  let parts1 = version1.split(".");
  let parts2 = version2.split(".");

  let maxLength = Math.max(parts1.length, parts2.length);

  for (let i = 0; i < maxLength; i++) {
    let num1 = Number(parts1[i] || 0);
    let num2 = Number(parts2[i] || 0);

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }

  return 0;
}


// let test = compareVersions("1.10", "1.2");

// let test = compareVersions("1.2", "1.10");
let test = compareVersions("1.2.3", "1.2.3");
console.log(test);