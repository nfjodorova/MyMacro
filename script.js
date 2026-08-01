function calc() {

const sex = document.getElementById("sex").value;
const age = Number(document.getElementById("age").value);
const height = Number(document.getElementById("height").value);
const weight = Number(document.getElementById("weight").value);

const activity = Number(document.getElementById("activity").value);
const goal = Number(document.getElementById("goal").value);

if (!age || !height || !weight) {
    alert("Пожалуйста, заполните возраст, рост и вес.");
    return;
}

let calories;

if (sex === "female") {
    calories = 354 - (6.91 * age) +
        activity * ((9.36 * weight) + (726 * (height / 100)));
} else {
    calories = 662 - (9.53 * age) +
        activity * ((15.91 * weight) + (539.6 * (height / 100)));
}

calories = Math.round(calories + goal);

const protein = Math.round(weight * 2);
const fat = Math.round(calories * 0.30 / 9);
const carbs = Math.round((calories - protein * 4 - fat * 9) / 4);
const water = (weight * 35 / 1000).toFixed(1);
const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
saveData();
document.getElementById("clearBtn").style.display = "block";document.getElementById("result").innerHTML = `
<div class="card"><span>🔥 Калории</span><span class="value">${calories}</span></div>
<div class="card"><span>🥩 Белки</span><span class="value">${protein} г</span></div>
<div class="card"><span>🥑 Жиры</span><span class="value">${fat} г</span></div>
<div class="card"><span>🍚 Углеводы</span><span class="value">${carbs} г</span></div>
<div class="card"><span>💧 Вода</span><span class="value">${water} л</span></div>
<div class="card"><span>⚖️ ИМТ</span><span class="value">${bmi}</span></div>
`;

}
function saveData() {
    localStorage.setItem("sex", document.getElementById("sex").value);
    localStorage.setItem("age", document.getElementById("age").value);
    localStorage.setItem("height", document.getElementById("height").value);
    localStorage.setItem("weight", document.getElementById("weight").value);
    localStorage.setItem("activity", document.getElementById("activity").value);
    localStorage.setItem("goal", document.getElementById("goal").value);
    localStorage.setItem("meals", document.getElementById("meals").value);
}

function loadData() {
    if (localStorage.getItem("sex"))
        document.getElementById("sex").value = localStorage.getItem("sex");

    if (localStorage.getItem("age"))
        document.getElementById("age").value = localStorage.getItem("age");

    if (localStorage.getItem("height"))
        document.getElementById("height").value = localStorage.getItem("height");

    if (localStorage.getItem("weight"))
        document.getElementById("weight").value = localStorage.getItem("weight");

    if (localStorage.getItem("activity"))
        document.getElementById("activity").value = localStorage.getItem("activity");

    if (localStorage.getItem("goal"))
        document.getElementById("goal").value = localStorage.getItem("goal");

    if (localStorage.getItem("meals"))
        document.getElementById("meals").value = localStorage.getItem("meals");
}

window.onload = loadData;
