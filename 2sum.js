//runs in 0n^2
function two_sum(arr, num) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1 < i; j < arr.length; j++) {

            if (arr[i] + arr[j] == num) {
                return true;
            }
            return false;

        }
    }
}

two_sum([1, 2, 3, 4], 3)

//runs in linear time
function twoSum(arr, S) {
    let hashTable = {}
    for (let i = 0; i < arr.length; i++) {
        let diff = S - arr[i]
        if (hashTable[diff] !== undefined) {
            return true;
        }
        hashTable[arr[i]] = true;
    }
    return false;
}