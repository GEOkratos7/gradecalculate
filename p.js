function calculateAvarage() {
    const studentGrades = {
        math: 85,
        English: 78,
        Science: 92,
        History: 88,
        art: 95
    };
    let totalScore = 0;
    let subjectCount = 0;


    for (let subject in studentGrades) {
        totalScore += studentGrades[subject];
        subjectCount++;
    }

    const avarageGrade = totalScore / subjectCount;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `The avarage grade is <span style="color: green;">${avarageGrade.toFixed(2)}</span>. `;
    
}
let  click = document.getElementById("calculate");
click.addEventListener('click', () => {
    calculateAvarage();
});