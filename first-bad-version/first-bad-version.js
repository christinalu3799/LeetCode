/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // [F F F T T T T T T T]
        // T --> keep moving right
        // F --> keep moving left 
        // [F F]
        // Math.floor (index)
        let lo = 1;
        let hi = n;

        while (lo <= hi) {
            let mid = Math.floor(lo + (hi - lo) / 2);
            console.log(mid)
            if (isBadVersion(mid)) {
                hi = mid - 1;
                console.log('hi =', hi)
            }
            else {
                lo = mid + 1;
                console.log('lo =', lo)
            }
        }

        return lo;
    };
};