document.addEventListener('DOMContentLoaded', function () {
  $('#myModal').modal('show');
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

$('#klassen').on('change', function () {
  setLocalStorage();
});

function retriveClass() {
  getClass($('#berufe option:selected').val());
}
