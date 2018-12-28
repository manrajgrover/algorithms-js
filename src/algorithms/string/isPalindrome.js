

function checkPalindrome(str) {
    return str == str.split('').reverse().join('');
}

module.exports = checkPalindrome;
