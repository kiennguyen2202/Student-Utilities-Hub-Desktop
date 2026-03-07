function calculateGPA() {

let s1 = parseFloat(document.getElementById("score1").value);
let s2 = parseFloat(document.getElementById("score2").value);
let s3 = parseFloat(document.getElementById("score3").value);

let gpa = (s1 + s2 + s3) / 3;

document.getElementById("result").innerText = "GPA: " + gpa.toFixed(2);

}