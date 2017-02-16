var singleElimination = {
  "teams": [              // Matchups
    ["Team 1", "Team 2"], // First match
    ["Team 3", "Team 4"]  // Second match
  ],
  "results": [            // List of brackets (single elimination, so only one bracket)
    [                     // List of rounds in bracket
      [                   // First round in this bracket
        [1, 2],           // Team 1 vs Team 2
        [3, 4]            // Team 3 vs Team 4
      ],
      [                   // Second (final) round in single elimination bracket
        [5, 6],           // Match for first place
        [7, 8]            // Match for 3rd place
      ]
    ]
  ]
}


var teams = []
teams.push(["joe", "tj"])
teams.push(["matt", "george"])
teams.push(["cody", "al"])
teams.push(["tim", "ted"])

var results = []
var firstRound = []
firstRound.push([1,2])
firstRound.push([3,4])

var secondRound = []
secondRound.push([5,6])
secondRound.push([7,8])

results.push(firstRound, secondRound)

var hdmBracket = {
  "teams": teams
}


// $(function(){
//   var container = $('.basic')
//   container.bracket({
//     init: hdmBracket
//   });
// });
