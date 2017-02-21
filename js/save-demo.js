var bracketData = {
  teams: [
    ["Team 1", "Team 2"],
    ["Team 3", "jim"],
    ["Team 4", "george"],
    ["Team 5", "matt"]
  ],
  results: [
      [
        [ // firstRound
		  [1, 0, "firstRound-m1"], 
		  [null, null, "firstRound-m2"], 
		  [null, null, "firstRound-m3"], 
		  [null, null, "firstRound-m4"]
		],
        [ // secondRound
		  [null, null, "secondRound-m1"],
		  [1, 4, "secondRound-m2"]
		],
        [ // final
		  [null, null, "final"],
		  [null, null, "uhhh"]
		]
      ]
  ]
};

var dog = {
	teams: [["joe","matt"],["tj","cody"],["george","jim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"]],
	results: null
}

var dog = {
	teams: [
		["bob", "bob"],
		["bob", "bob"],
		["bob", "bob"],
		[null, null]
	],
	results: null
}


var fullData = {"teams":[["joe","matt"],["tj","cody"],["george","jim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"],["ted","tim"]],"results":[[[1,0,"firstRound-m1"],[null,null,"firstRound-m2"],[null,null,"firstRound-m3"],[null,null,"firstRound-m4"],[null,null,"firstRound-m1"],[null,null,"firstRound-m1"],[null,null,"firstRound-m1"],[null,null,"firstRound-m1"],[null,null,"firstRound-m1"],[null,null,"firstRound-m1"],[null,null,"firstRound-m1"],[null,null,"firstRound-m1"],[null,null,"firstRound-m1"],[null,null,"firstRound-m1"],[null,null,"firstRound-m1"],[null,null,"firstRound-m1"]],[[null,null,"secondRound-m1"],[null,null,"secondRound-m2"],[null,null,"secondRound-m3"],[null,null,"secondRound-m4"],[null,null,"secondRound-m1"],[null,null,"secondRound-m1"],[null,null,"secondRound-m1"],[null,null,"secondRound-m1"],[null,null,"secondRound-m1"],[null,null,"secondRound-m1"],[null,null,"secondRound-m1"],[null,null,"secondRound-m1"],[null,null,"secondRound-m1"],[null,null,"secondRound-m1"],[null,null,"secondRound-m1"],[null,null,"secondRound-m1"]],[[null,null,"sweetSixteen-m1"],[null,null,"sweetSixteen-m2"],[null,null,"sweetSixteen-m3"],[null,null,"sweetSixteen-m4"],[null,null,"sweetSixteen-m1"],[null,null,"sweetSixteen-m1"],[null,null,"sweetSixteen-m1"],[null,null,"sweetSixteen-m1"]],[[null,null,"eliteEight-m1"],[null,null,"eliteEight-m2"],[null,null,"eliteEight-m3"],[null,null,"eliteEight-m4"]],[[1,0,"finalFour-m1"],[null,null,"finalFour-m2"]],[[null,null,"championship"]]]}


 
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

function onclick(data) {
  $('#matchCallback').text("onclick(data: '" + data + "')")
  // POST to matchViewVote
  // tell hdm-service 
}
 
function onhover(data, hover) {
  $('#matchCallback').text("onhover(data: '" + data + "', hover: " + hover + ")")
}

function updateBracket(data) {
	var container = $('div#save .demo')
	container.bracket({
		init: data
	})
}

function loadBracket(data, status) {
	console.log(bracketData)
	console.log(data)
	var container = $('div#save .demo')
    container.bracket({
      init: data,
      userData: "http://myapi",
	  onMatchClick: onclick, // can only be used with save disabled
      onMatchHover: onhover, // can only be used with save disabled
      dir: 'lr',  // or 'rl'
      centerConnectors: true,
      // save: saveFn,  // edit mode
      // disableToolbar: true,  // can only use with save enabled
      // disableTeamEdit: false,  // can only use with save enabled
    })

    /* You can also inquiry the current data */
    var data = container.bracket('data')
    $('#dataOutput').text(JSON.stringify(data))
}

// main-like function
$(function() {
	// load bracketData from DB
    jQuery.get("http://localhost:8080/bracketData/", loadBracket) 
  })
