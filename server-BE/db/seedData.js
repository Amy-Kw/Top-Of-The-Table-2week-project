//Make array of objects based on scema design here

//user - goes to rate and info
const user =[
  {firstname: 'Boi', lastname: 'Pog', username: 'boardgame4life'},
  {firstname: 'Jane', lastname: 'Floss', username: 'cards4thewin'},
  {firstname: 'Chris', lastname: 'Ko', username: 'ggtabletop'}
]

//info - goes to rate and list
const info =[
    {gametitle: 'Betrayal at House on the Hill', theme: 'fantasy', yearthatitcameout: '2004', expansion: true},
    {gametitle: 'Wingspan', theme: 'birdwatching', yearthatitcameout: '2019', expansion: true},
    {gametitle: 'steam up', theme: 'food', yearthatitcameout: '2023', expansion: false},
    {gametitle: 'Splendor', theme: 'chip-collecting', yearthatitcameout: '2014', expansion: true},
    {gametitle: 'project L', theme: 'puzzle', yearthatitcameout: '2020', expansion: true},
    {gametitle: 'cartographers', theme: 'drawing', yearthatitcameout: '2019', expansion: true},
  ]

//rate - goes to user
const rate =[
    {recommended: true, setupcomplexities : '1', levelofdifficulties: '1'},
    {recommended: true, setupcomplexities : '1', levelofdifficulties: '2'},
    {recommended: true, setupcomplexities : '1', levelofdifficulties: '3'},
    {recommended: true, setupcomplexities : '1', levelofdifficulties: '4'},
    {recommended: true, setupcomplexities : '1', levelofdifficulties: '5'},
    
    {recommended: true, setupcomplexities : '2', levelofdifficulties: '1'},
    {recommended: true, setupcomplexities : '2', levelofdifficulties: '2'},
    {recommended: true, setupcomplexities : '2', levelofdifficulties: '3'},
    {recommended: true, setupcomplexities : '2', levelofdifficulties: '4'},
    {recommended: true, setupcomplexities : '2', levelofdifficulties: '5'},
    
    {recommended: true, setupcomplexities : '3', levelofdifficulties: '1'},
    {recommended: true, setupcomplexities : '3', levelofdifficulties: '2'},
    {recommended: true, setupcomplexities : '3', levelofdifficulties: '3'},
    {recommended: true, setupcomplexities : '3', levelofdifficulties: '4'},
    {recommended: true, setupcomplexities : '3', levelofdifficulties: '5'},

    {recommended: true, setupcomplexities : '4', levelofdifficulties: '1'},
    {recommended: true, setupcomplexities : '4', levelofdifficulties: '2'},
    {recommended: true, setupcomplexities : '4', levelofdifficulties: '3'},
    {recommended: true, setupcomplexities : '4', levelofdifficulties: '4'},
    {recommended: true, setupcomplexities : '4', levelofdifficulties: '5'},

    {recommended: true, setupcomplexities : '5', levelofdifficulties: '1'},
    {recommended: true, setupcomplexities : '5', levelofdifficulties: '2'},
    {recommended: true, setupcomplexities : '5', levelofdifficulties: '3'},
    {recommended: true, setupcomplexities : '5', levelofdifficulties: '4'},
    {recommended: true, setupcomplexities : '5', levelofdifficulties: '5'},

    {recommended: false, setupcomplexities : '1', levelofdifficulties: '1'},
    {recommended: false, setupcomplexities : '1', levelofdifficulties: '2'},
    {recommended: false, setupcomplexities : '1', levelofdifficulties: '3'},
    {recommended: false, setupcomplexities : '1', levelofdifficulties: '4'},
    {recommended: false, setupcomplexities : '1', levelofdifficulties: '5'},
    
    {recommended: false, setupcomplexities : '2', levelofdifficulties: '1'},
    {recommended: false, setupcomplexities : '2', levelofdifficulties: '2'},
    {recommended: false, setupcomplexities : '2', levelofdifficulties: '3'},
    {recommended: false, setupcomplexities : '2', levelofdifficulties: '4'},
    {recommended: false, setupcomplexities : '2', levelofdifficulties: '5'},
    
    {recommended: false, setupcomplexities : '3', levelofdifficulties: '1'},
    {recommended: false, setupcomplexities : '3', levelofdifficulties: '2'},
    {recommended: false, setupcomplexities : '3', levelofdifficulties: '3'},
    {recommended: false, setupcomplexities : '3', levelofdifficulties: '4'},
    {recommended: false, setupcomplexities : '3', levelofdifficulties: '5'},

    {recommended: false, setupcomplexities : '4', levelofdifficulties: '1'},
    {recommended: false, setupcomplexities : '4', levelofdifficulties: '2'},
    {recommended: false, setupcomplexities : '4', levelofdifficulties: '3'},
    {recommended: false, setupcomplexities : '4', levelofdifficulties: '4'},
    {recommended: false, setupcomplexities : '4', levelofdifficulties: '5'},

    {recommended: false, setupcomplexities : '5', levelofdifficulties: '1'},
    {recommended: false, setupcomplexities : '5', levelofdifficulties: '2'},
    {recommended: false, setupcomplexities : '5', levelofdifficulties: '3'},
    {recommended: false, setupcomplexities : '5', levelofdifficulties: '4'},
    {recommended: false, setupcomplexities : '5', levelofdifficulties: '5'},
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

module.exports = { user, info, rate, list }