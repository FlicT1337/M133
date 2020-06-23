document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('class') === null && localStorage.getItem('job') === null) {
    $('#myModal').modal('show');
  }

  $('#berufe').on('change', function () {
    getClass($('#berufe option:selected').val());
  });
});

$('#klassen').hide();

$('#berufe').on('change', function () {
  retriveClass();
  setLocalStorage();

  $('#klassen').show();
  setLocalStorage();
});

function retriveClass() {
  getClass($('#berufe option:selected').val());
}
