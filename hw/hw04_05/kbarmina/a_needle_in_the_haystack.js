function findNeedle(haystack) {
    let x = haystack.findIndex((element) => element === 'needle');
    return `found the needle at position ${x}`
}