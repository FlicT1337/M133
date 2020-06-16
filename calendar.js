document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'timeGrid', 'momentPlugin' ],
    defaultView: 'timeGridWeek',
    handleWindowResize: true,
    height: 'auto',
    weekends: false,
    allDaySlot: false,
    nowIndicator: true,
    minTime: '07:00:00',
    maxTime: '18:30:00',
    
  });

  calendar.render();
});
