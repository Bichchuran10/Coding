function simulate(probabilities) {
    let probSum = 0;
    probabilities.forEach((prob) => {
        probSum += prob
    })

    let rand = Math.random()
    let chance = 0

    for(let i=0; i<probabilities.length; i++) {
        chance += probabilities[i] / probSum;
        if (rand < chance) {
            return i
        }
    }

}

let resMap = {};

for (let simulation=0; simulation<1000000; simulation++) {
    let res = simulate([0.1, 0.15, 0.3, 0.25, 0.05, 0.15]) + 1
    if (res in resMap) {
        resMap[res] = resMap[res] + 1
    } else {
        resMap[res] = 1
    }
}

console.log('results', resMap);