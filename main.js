const pandemicStartMap = "XX0X10010X000X010X0";
// 0 - uninfected
// 1 - infected
// Х - ocean

infectedArr = pandemicStartMap.split('');
const start = document.querySelector('.pandemicStart');

function infection(people) {
    for (let i = 0; i <= people.length; i++) {
        let cube = document.createElement('div');
        if (people[i] == "X") {
            start.appendChild(cube).classList.add("ocean");
        } else if (people[i] == 1) {
            start.appendChild(cube).classList.add("infected");
        } else if (people[i] == 0) {
            start.appendChild(cube).classList.add("uninfected");
        }
    }
}

infection(infectedArr);
