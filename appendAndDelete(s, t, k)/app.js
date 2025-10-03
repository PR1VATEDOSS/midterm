function appendAndDelete(s, t, k) {
   
    let commonLength = 0;
    while (commonLength < s.length && commonLength < t.length && s[commonLength] === t[commonLength]) {
        commonLength++;
    }
    let deletions = s.length - commonLength;


    let additions = t.length - commonLength;

    let totalOperations = deletions + additions;

    if (totalOperations > k) {
        return "No";
    }   else if ((k - totalOperations) % 2 === 0) {
        return "Yes";
    } else if (k >= s.length + t.length) {
        return "Yes";
    } else {
        return "No";
    }           

    
}