function points(games) {
    let total = 0;
    games.forEach((element) => {
        const scores = element.split(":");
        const us = Number(scores[0]);
        const them = Number(scores[1]);
        if (us > them) {
            total += 3;
        } else if (us === them) {
            total += 1;
        }
    });
    return total;
}

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));


// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
