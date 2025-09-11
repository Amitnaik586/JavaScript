function count(str) {
  vowel = 0;
  for (char of str) {
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      vowel = vowel + 1;
    }
  }
  console.log("total vowel in thid string is = ", vowel);
}

count("i love web development");
