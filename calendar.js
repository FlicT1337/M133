document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ['timeGrid', 'bootstrap'],
    defaultView: 'timeGridWeek',
    prev: 'fa-chevron-left',
    next: 'fa-chevron-right',
    prevYear: 'fa-angle-double-left',
    nextYear: 'fa-angle-double-right',
    handleWindowResize: true,
    height: 'auto',
    weekends: false,
    allDaySlot: false,
    nowIndicator: true,
    locale: 'de',
    timeZone: 'UTC+2',
    minTime: '07:00:00',
    maxTime: '18:30:00',
    themeSystem: 'bootstrap',
    close: 'fa-times',
  });

  var str = calendar.formatDate('19-06-2020', {
    month: 'long',
    year: 'numeric',
    day: 'numeric'
  });


  calendar.render();
});
