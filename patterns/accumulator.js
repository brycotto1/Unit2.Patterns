/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  if (typeof n !== "number") return NaN;
  if(n < 0) return;

  let product = 1;
  for(let a = 1; a <= n; a++){
    product *= a;
  }
  return product;
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  if (typeof n !== "number") return null;

  let finalArray = [];
  for(let a = 1; a <= n; a++){
    finalArray.push(a);
  }

  return finalArray;
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {  
  let longestString = ``;
  for(let a = 0; a <= strings.length; a++){
    if(strings[a] > longestString){
      longestString = strings[a];
    }
  }
  return longestString;
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  let finalArray = [];
  for(let a = 0; a <= attendance.length; a++){
    if(attendance[a]){
      finalArray.push(attendance[a]);
    }    
  }
  return finalArray.length;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  if (typeof dna !== "string") return null;
  if(!(dna.length > 0)) return ``;

  let newDNA = ``;

  for(let i = 0; i < dna.length; i++){
    if(dna[i] === `A`) newDNA += `T`;
    if(dna[i] === `T`) newDNA += `A`;
    if(dna[i] === `C`) newDNA += `G`;
    if(dna[i] === `G`) newDNA += `C`;
  }

  return newDNA;
}
