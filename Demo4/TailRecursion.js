/**
 * Created by abmitra on 2/7/2015.
 */
//Find the factorial

function factorial (n) {
    return n? n * factorial(n - 1): 1
}











function tail_factorial (n) {
    var _factorial = function myself (acc, n) {
        return n
            ? myself(acc * n, n - 1)
            : acc
    };

    return _factorial(1, n);
}
console.log(tail_factorial(10));