/**
 * Created by abmitra on 2/7/2015.
 */
function evenSteven(n) {
    if (n === 0)
        return true;
    else
        return oddJohn(Math. abs(n) - 1);
}
function oddJohn(n) {
    if (n === 0)
        return false;
    else
        return evenSteven(Math. abs(n) - 1);
}
console.log(evenSteven(11));