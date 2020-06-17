document.addEventListener('DOMContentLoaded', function () {
  $('#berufe').on('change', function () {
    getClass($('#berufe option:selected').val());
  });
});
