function points(games) {
  let intResults = games.map((element) => element.split(':').map(Number));
  let numberOfPoints = 0;
  for (let i=0; i<intResults.length; i++){
    if (intResults[i][0] > intResults[i][1]) {
      numberOfPoints += 3;
  } else if (intResults[i][0] === intResults[i][1]){
      numberOfPoints += 1;
    }
  }
    return numberOfPoints;
}