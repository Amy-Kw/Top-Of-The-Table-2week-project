//Make array of objects based on scema design here

//user - goes to rate and info
const users =[
  {firstname: 'Boi', lastname: 'Pog', username: 'boardgame4life', password: 'pass123'},
  {firstname: 'Jane', lastname: 'Floss', username: 'cards4thewin', password: 'account700'},
  {firstname: 'Chris', lastname: 'Ko', username: 'ggtabletop', password: 'word456'}
]

//info - goes to rate and list
const info =[
    {gametitle: 'Betrayal at House on the Hill', theme: 'fantasy', year: '2004', expansions: true, rateline_id: 12, listline_id: 6},
    {gametitle: 'Wingspan', theme: 'birdwatching', year: '2019', expansions: true, rateline_id: 7, listline_id: 7},
    {gametitle: 'steam up', theme: 'food', year: '2023', expansions: false, rateline_id: 13, listline_id: 3},
    {gametitle: 'Splendor', theme: 'chip-collecting', year: '2014', expansions: true, rateline_id: 2, listline_id: 8},
    {gametitle: 'project L', theme: 'puzzle', year: '2020', expansions: true, rateline_id: 9, listline_id: 6},
    {gametitle: 'cartographers', theme: 'drawing', year: '2019', expansions: true, rateline_id: 2, listline_id: 4}
  ]

//rate - goes to users
const rate =[
    {recommended: true, setupcomplexities : '1', lvlofdifficulties: '1'},
    {recommended: true, setupcomplexities : '1', lvlofdifficulties: '2'},
    {recommended: true, setupcomplexities : '1', lvlofdifficulties: '3'},
    {recommended: true, setupcomplexities : '1', lvlofdifficulties: '4'},
    {recommended: true, setupcomplexities : '1', lvlofdifficulties: '5'}, /////////
    {recommended: true, setupcomplexities : '2', lvlofdifficulties: '1'},
    {recommended: true, setupcomplexities : '2', lvlofdifficulties: '2'},
    {recommended: true, setupcomplexities : '2', lvlofdifficulties: '3'},
    {recommended: true, setupcomplexities : '2', lvlofdifficulties: '4'},
    {recommended: true, setupcomplexities : '2', lvlofdifficulties: '5'},/////////
    {recommended: true, setupcomplexities : '3', lvlofdifficulties: '1'},
    {recommended: true, setupcomplexities : '3', lvlofdifficulties: '2'},
    {recommended: true, setupcomplexities : '3', lvlofdifficulties: '3'},
    {recommended: true, setupcomplexities : '3', lvlofdifficulties: '4'},
    {recommended: true, setupcomplexities : '3', lvlofdifficulties: '5'},////////
    {recommended: true, setupcomplexities : '4', lvlofdifficulties: '1'},
    {recommended: true, setupcomplexities : '4', lvlofdifficulties: '2'},
    {recommended: true, setupcomplexities : '4', lvlofdifficulties: '3'},
    {recommended: true, setupcomplexities : '4', lvlofdifficulties: '4'},
    {recommended: true, setupcomplexities : '4', lvlofdifficulties: '5'},///////
    {recommended: true, setupcomplexities : '5', lvlofdifficulties: '1'},
    {recommended: true, setupcomplexities : '5', lvlofdifficulties: '2'},
    {recommended: true, setupcomplexities : '5', lvlofdifficulties: '3'},
    {recommended: true, setupcomplexities : '5', lvlofdifficulties: '4'},
    {recommended: true, setupcomplexities : '5', lvlofdifficulties: '5'},///////
    {recommended: false, setupcomplexities : '1', lvlofdifficulties: '1'},
    {recommended: false, setupcomplexities : '1', lvlofdifficulties: '2'},
    {recommended: false, setupcomplexities : '1', lvlofdifficulties: '3'},
    {recommended: false, setupcomplexities : '1', lvlofdifficulties: '4'},
    {recommended: false, setupcomplexities : '1', lvlofdifficulties: '5'},//////
    {recommended: false, setupcomplexities : '2', lvlofdifficulties: '1'},
    {recommended: false, setupcomplexities : '2', lvlofdifficulties: '2'},
    {recommended: false, setupcomplexities : '2', lvlofdifficulties: '3'},
    {recommended: false, setupcomplexities : '2', lvlofdifficulties: '4'},
    {recommended: false, setupcomplexities : '2', lvlofdifficulties: '5'},//////
    {recommended: false, setupcomplexities : '3', lvlofdifficulties: '1'},
    {recommended: false, setupcomplexities : '3', lvlofdifficulties: '2'},
    {recommended: false, setupcomplexities : '3', lvlofdifficulties: '3'},
    {recommended: false, setupcomplexities : '3', lvlofdifficulties: '4'},
    {recommended: false, setupcomplexities : '3', lvlofdifficulties: '5'},//////
    {recommended: false, setupcomplexities : '4', lvlofdifficulties: '1'},
    {recommended: false, setupcomplexities : '4', lvlofdifficulties: '2'},
    {recommended: false, setupcomplexities : '4', lvlofdifficulties: '3'},
    {recommended: false, setupcomplexities : '4', lvlofdifficulties: '4'},
    {recommended: false, setupcomplexities : '4', lvlofdifficulties: '5'},//////
    {recommended: false, setupcomplexities : '5', lvlofdifficulties: '1'},
    {recommended: false, setupcomplexities : '5', lvlofdifficulties: '2'},
    {recommended: false, setupcomplexities : '5', lvlofdifficulties: '3'},
    {recommended: false, setupcomplexities : '5', lvlofdifficulties: '4'},
    {recommended: false, setupcomplexities : '5', lvlofdifficulties: '5'},//////
]

//list
const list =[
    {played: false, wanttobuy: false, owned: false},
    {played: false, wanttobuy: true, owned: true},
    {played: false, wanttobuy: false, owned: true},
    {played: false, wanttobuy: true, owned: false},
    {played: true, wanttobuy: true, owned: true},
    {played: true, wanttobuy: false, owned: false},
    {played: true, wanttobuy: true, owned: false},
    {played: true, wanttobuy: false, owned: true},

]

module.exports = { users, info, rate, list }