function studentsAverage() {
  const form = document.querySelector('.form');
  const result = document.querySelector('.result');
  const dataList = document.querySelector('.data-list');
  const dataForm = document.querySelector('.data-form');
  const btnBack = document.querySelector('.btn-back')

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector('.name');
    const age = document.querySelector('.age');
    const course = document.querySelector('.course');
    const grade1 = document.querySelector('.grade1');
    const grade2 = document.querySelector('.grade2');

    const students = [];

    students.push({
      name: name.value,
      age: age.value,
      course: course.value,
      grade1: grade1.value,
      grade2: grade2.value
    })
    console.log(students)

    // Show Results
    const average = (Number(grade1.value) + Number(grade2.value)) / 2

    result.innerHTML += `<p><strong>Name:</strong> ${name.value}</p>`;
    result.innerHTML += `<p><strong>Age:</strong> ${age.value}</p>`;
    result.innerHTML += `<p><strong>Course:</strong> ${course.value}</p>`;
    result.innerHTML += `<p><strong>Average:</strong> ${average}</p>`

    function averageResult() {
      if (average <= 6) {
        result.innerHTML += `<div class="disapproved">DISAPPROVED</div>`
      } else {
        result.innerHTML += `<div class="approved">APPROVED</div>`
      }
    }
    averageResult();

    function clearFields() {
      name.value = '';
      age.value = '';
      course.value = '';
      grade1.value = '';
      grade2.value = '';
      dataForm.style.display = 'none';
    }
    clearFields();

    // Show Data List
    dataList.style.display = 'block'
  });

  // Show Data Form & Hide Data List
  btnBack.addEventListener('click', function () {
    dataForm.style.display = 'block';
    dataList.style.display = 'none';
  })
}
studentsAverage()


// Excluir dados anteriores
// Validações para só enviar se os formulários estiverem preenchidos
