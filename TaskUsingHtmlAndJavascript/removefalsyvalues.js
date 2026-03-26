function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}


console.log("Without falsy values:", removeFalsyValues([false, 0, '', 3, 55, 100, null, undefined, NaN]));