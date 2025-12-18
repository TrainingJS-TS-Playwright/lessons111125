function points(games) {
  let total = 0;
  
  for (let i = 0; i < games.length; i++) {
    let game = games[i];
    let x = Number(game[0]);
    let y = Number(game[2]);
    
    if (x > y) {
      total += 3;
    } else if (x === y) {
      total += 1;
    }
  }
  return total;
}
console.log(points(["3:1", "2:2", "0:1"]));