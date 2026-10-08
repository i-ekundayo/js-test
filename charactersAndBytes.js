const sizes = (str) => {
  const charCount = str.length;
  const byteCount = new TextEncoder().encode(str).length;
  return { characters: charCount, bytes: byteCount };
};

console.log(sizes("hello"));
console.log(sizes("hi😀"));
console.log(sizes("€"));
