function points(games) {
    let points = 0;
    
    for (let i = 0; i < games.length; i++) {
        let match = games[i].split(":");
        let x = Number(match[0]);
        let y = Number(match[1]);
        
        if (x > y) {
            points += 3;
        } else if (x === y) {
            points += 1;
    }
}


    return points;
}

console.log(points(["3:1", "2:2", "0:1"]));