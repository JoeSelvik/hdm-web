var saveData = {
  teams: [
    ["Team 1", "Team 2"],
    ["Team 3", null],
    ["Team 4", null],
    ["Team 5", null]
  ],
  results: [
      [
        [[1, 0], [null, null], [null, null], [null, null]],
        [[null, null], [1, 4]],
        [[null, null], [null, null]]
      ]
  ]
};
 
/* Called whenever bracket is modified
 *
 * data:     changed bracket object in format given to init
 * userData: optional data given when bracket is created.
 */
function saveFn(data, userData) {
  var json = jQuery.toJSON(data)
  $('#saveOutput').text('POST '+userData+' '+json)
  /* You probably want to do something like this
  jQuery.ajax("rest/"+userData, {contentType: 'application/json',
                                dataType: 'json',
                                type: 'post',
                                data: json})
  */
}
 
$(function() {
    var container = $('div#save .demo')
    container.bracket({
      init: saveData,
      save: saveFn,
      userData: "http://myapi"})
 
    /* You can also inquiry the current data */
    var data = container.bracket('data')
    $('#dataOutput').text(jQuery.toJSON(data))
  })