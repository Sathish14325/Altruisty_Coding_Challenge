function word_Break(s, dictionary) {
    let n = s.length;
    let dp = Array(n + 1).fill(false);
    dp[0] = true; 

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && dictionary.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n] ? 1 : 0;
}

let dictionary = new Set(["i", "like", "sam", "sung", "samsung", "mobile"]);
let s1 = "ilike";
let s2 = "ilikesamsung";
console.log(word_Break(s1, dictionary));
console.log(word_Break(s2, dictionary)); 
