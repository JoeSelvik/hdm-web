var saveData = {
  teams: [
    ["Team 1", "Team 2"],
    ["Team 3", "jim"],
    ["Team 4", "george"],
    ["Team 5", "matt"]
  ],
  results: [
      [
        [[1, 0], [null, null], [null, null], [null, null]],
        [[null, null], [1, 4]],
        [[null, null], [null, null]]
      ]
  ]
};

// These are modified by the sliders
var resizeParameters = {
  teamWidth: 60,
  scoreWidth: 20,
  matchMargin: 10,
  roundMargin: 50,
  init: saveData
};
 
function updateResizeDemo() {
  $('#save .demo').bracket(resizeParameters);
}
 
// todo: do I need this here?
// $(updateResizeDemo)

 
/* Called whenever bracket is modified
 *
 * data:     changed bracket object in format given to init
 * userData: optional data given when bracket is created.
 */
function saveFn(data, userData) {
  var json = JSON.stringify(data)
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
      userData: "http://myapi",
      disableToolbar: true,
      disableTeamEdit: true
    })
 
    /* You can also inquiry the current data */
    var data = container.bracket('data')
	$('#dataOutput').text(JSON.stringify(data))
  })
