
// this is my opiniion the simplest way to solve this problem but it is not the most efficient
// the logic here is that if the words contain the same letters in the same order, they are anagrams
export function areAnagrams(word1: string, word2: string): boolean {
    word1 = word1.split('').sort().join('');
    word2 = word2.split('').sort().join('');
    return word1 === word2;
}

// the more efficient way is using a hash map
// the idea is to create a hash map with the letters of the first word
// then we loop through the second word and check if the letter is in the hash map
// if it is, we remove it from the hash map
// if it is not, we return false
// if the hash map is empty, we return true
export function areAnagrams2(word1: string, word2: string): boolean {
    const charCounts = new Map<string, number>();
    for (const char of word1.split('')) {
        charCounts.set(char, (charCounts.get(char) || 0) + 1);
    }
    for (const char of word2.split('')) {
        if (!charCounts.has(char)) return false;
        // @ts-ignore
        charCounts.set(char, charCounts.get(char) - 1);
    }
    return Array.from(charCounts.values()).every(count => count === 0);
}

// test with earth and heart
// console.log(areAnagrams("earth", "heart"));
// true
// console.log(areAnagrams2("earth", "heart"));
// // true

// // test with silent and listen
// console.log(areAnagrams("silent", "listen"));
// // true
// console.log(areAnagrams2("silent", "listen"));
// // true

// // test with foo and bar
// console.log(areAnagrams("foo", "bar"));
// // false
// console.log(areAnagrams2("foo", "bar"));
// // false