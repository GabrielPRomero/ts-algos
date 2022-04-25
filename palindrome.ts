// palindrome = word that is the same forwards and backwards
// example: racecar, mom, dad, radar

// the simplest way is turning the string into array, reversing it and then comparing it to its original form

export function isPalidrome(word: string): boolean {
    return word.split('').reverse().join('') === word;
}

// any permutation of a string is a palindrome
// example: mom, dad, radar, racecar
// permutations means all possible combinations of the letters in the string
// example: mom, dad, radar, racecar, momdad, dadradar, momradar, radar
// a simple solution is to check all permutations and see if they are palindromes
// this is not the most efficient solution

// ex:
// export function isPalindromePermutation(word: string): boolean {
//     return permutations(word).some(permutation => isPalidrome(permutation));
// }

// the most efficient solution is to check the patter, the string civic for example has a pattern
// c in the first and last postition, i in the second and second to last position, and v in the middle
// this means that all character must have a pair except for a maximum of one character
// example: civic

function isPalindromePermutation(word: string): boolean {
    const unmatched = new Set<string>();
    word.split('').forEach(char => {
        if (unmatched.has(char)) {
            unmatched.delete(char);
        }
        else {
            unmatched.add(char);
        }
    }
    );
    return unmatched.size <= 1;
}

// test with civic, vicic, toot, toto, radar, civil(should be false)
// console.log(isPalindromePermutation("civic"));
// // true
// console.log(isPalindromePermutation("vicic"));
// // true
// console.log(isPalindromePermutation("toot"));
// // true
// console.log(isPalindromePermutation("toto"));
// // true
// console.log(isPalindromePermutation("radar"));
// // true
// console.log(isPalindromePermutation("civil"));
// // false
