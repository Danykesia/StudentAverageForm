function studentsAverage() {
  const form = document.querySelector('.form');
  const result = document.querySelector('.result')

  function eventForm(event) {
    event.preventDefault();

    const students = [];

    const name = document.querySelector('.name');
    const age = document.querySelector('.age');
    const course = document.querySelector('.course');
    const grade1 = document.querySelector('.grade1');
    const grade2 = document.querySelector('.grade2');

    students.push({
      name: name.value,
      age: age.value,
      course: course.value,
      grade1: grade1.value,
      grade2: grade2.value
    })

    console.log(students)

    const average = (Number(grade1.value) + Number(grade2.value)) / 2

    result.innerHTML += `<p>Name: ${name.value}</p>`;
    result.innerHTML += `<p>Age: ${age.value}</p>`;
    result.innerHTML += `<p>Course: ${course.value}</p>`;
    result.innerHTML += `<p>Average: ${average}</p>`

    function averageResult() {
      if (average <= 6) {
        result.innerHTML += `<p>Result: DISAPPROVED</p>`
      } else {
        result.innerHTML += `<p>Result: APPROVED</p>`
      }
    }
    averageResult();

    function clearFields() {
      name.value = '';
      age.value = '';
      course.value = '';
      grade1.value = '';
      grade2.value = '';
    }
    clearFields();
  }
  form.addEventListener('submit', eventForm)
}
studentsAverage()
