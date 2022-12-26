/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    if (s.length != t.length) {
        return false
    } else {
        let Scount = {}
        for (let i = 0; i < s.length; i++) {
            !Scount[s[i]] ? Scount[s[i]] = 1 : Scount[s[i]]++
        }   
        for (let i = 0; i < t.length; i++) {
            if (Scount[t[i]]) {
                Scount[t[i]]--
            }
        }   
        return Object.values(Scount).every(element => element === 0);
    }
}