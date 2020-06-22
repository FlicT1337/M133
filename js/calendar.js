//Full Calendar Settings und Event eintragen
const scheduleUrl = 'https://sandbox.gibm.ch/tafel.php';
var calendarEl = document.getElementById('calendar');
var events = [];
var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: ['timeGrid', 'bootstrap'],
  defaultView: 'timeGridWeek',
  handleWindowResize: true,
  height: 'auto',
  weekends: false,
  allDaySlot: false,
  nowIndicator: true,
  locale: 'de',
  timeZone: 'UTC+2',
  minTime: '07:00:00',
  maxTime: '20:00:00',
  themeSystem: 'bootstrap',
  footer: false,
  header: {
    left: 'prevDate,nextDate,today',
    center: 'title',
    right: 'openModal,timeGridWeek,timeGridDay',
  },
});

window.onload = function () {
  initializeCalendar();
};

function initializeCalendar() {
  events = [];
  updateEvents();
  //console.log(week);
  var now = moment(calendar.getDate());
  var week = now.format('ww-yyyy');
  function updateEvents() {
    console.log('update events');
    $.getJSON(scheduleUrl, { klasse_id: localStorage.getItem('class'), woche: week }, function (data) {
      console.log('pulling data');
      for (var table of data) {
        var event = {
          title: table.tafel_longfach,
          start: table.tafel_datum + 'T' + table.tafel_von,
          end: table.tafel_datum + 'T' + table.tafel_bis,
          prof: table.tafel_lehrer,
          room: table.tafel_raum,
          comment: table.tafel_kommentar,
          allDay: false,
        };
        console.log(JSON.stringify(events, null, '    '));
        events.push(event);
      }
    })
      .done(function () {
        calendar.getEvents().forEach(removeEvents);
        function removeEvents(eventObject) {
          eventObject.remove();
        }

        events.forEach((event) => calendar.addEvent(event));
      })
      .fail(function () {
        console.log('Data fetch failed');
      });
  }

  calendar.render();
}
