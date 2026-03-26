function secondLargest(arr) {
    let unique = [...new Set(arr)]; 
    unique.sort((a, b) => b - a);   
    return unique[1];
}

console.log("Second largest:", secondLargest([150, 767, 991, 260, 105]));