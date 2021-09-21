const pandemicStartMap = "XX0X10010X000X010X0";
// 0 - uninfected
// 1 - infected
// Х - ocean

let infectedArr = pandemicStartMap.split('');
const pandemicStart = document.querySelector('.pandemicStart');
const pandemicEnd = document.querySelector('.pandemicEnd');

function infection(people, div) {
    for (let i = 0; i <= people.length; i++) {
        let cube = document.createElement('div');
        if (people[i] == "X") {
            div.appendChild(cube).classList.add("ocean");
        } else if (people[i] == 1) {
            div.appendChild(cube).classList.add("infected");
        } else if (people[i] == 0) {
            div.appendChild(cube).classList.add("uninfected");
        }
    }
}

infection(infectedArr, pandemicStart);


for (let i = 0; i < infectedArr.length; i++) {
    if (infectedArr[i] == 0 || infectedArr[i] == 1) {
        if (infectedArr[i] == 1) {
            for (let j = i; j >= 0; j--) {
                if (infectedArr[j] == "X") {
                    break;
                } else {
                    for (let k = j; k < infectedArr.length; k++) {
                        if (infectedArr[k] == 0 || infectedArr[k] == 1) {
                            infectedArr.fill("1", start = k, end = k + 1);
                        } else {
                            break;
                        }
                    }
                }
            }
        }
    }
}


infection(infectedArr, pandemicEnd);


