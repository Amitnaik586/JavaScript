let students_marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let value of students_marks) {
  sum = sum + value;
}

console.log(sum);

let avg = sum / students_marks.length;
console.log("avrage is =", avg);
