// themes.js - Hier pas je je thema's aan

const THEMES = [
  { 
    folder: "harry_potter", 
    count: 16, 
    match: { 
        artist: ["John Williams", "Patrick Doyle", "Nicholas Hooper", "Alexandre Desplat"], 
        album: ["Harry Potter", "Philosopher's Stone", "Chamber of Secrets", "Prisoner of Azkaban", "Goblet of Fire", "Order of the Phoenix", "Half-Blood Prince", "Deathly Hallows"], 
        track: ["Hedwig's Theme", "Snape to Malfoy Manor", "Leaving Hogwarts", "Harry's Wondrous World", "The Face of Voldemort", "The Quidditch Match", "Buckbeak's Flight", "Window to the Past", "Double Trouble", "A Window to the Past", "The Hogwarts Hymn", "Dumbledore's Farewell", "Lily's Theme", "Statues", "Courtyard Apocalypse", "A New Beginning"] 
    } 
  },
  { 
    folder: "dune", 
    count: 12, 
    match: { 
        artist: ["Hans Zimmer"], 
        album: ["Dune", "Dune: Part Two", "The Dune Sketchbook", "Dune (Original Motion Picture Soundtrack)"], 
        track: ["Paul's Dream", "Ripples in the Sand", "Gom Jabbar", "Dream of Arrakis", "Worm Ride", "Kiss the Ring", "Herald of the Change", "Leaving Caladan", "Beginnings Are Such Delicate Times", "Eclipse", "Lisan al-Gaib", "Resurrection", "Only I Will Remain", "The Voice in My Head", "Ornithopter"] 
    } 
  },
  { 
    folder: "inception", 
    count: 13, 
    match: { 
        artist: ["Hans Zimmer"], 
        album: ["Inception", "Inception (Music from the Motion Picture)"], 
        track: ["Time", "Dream Is Collapsing", "Mombasa", "Old Souls", "Waiting for a Train"] 
    } 
  },
  { 
    folder: "tenet", 
    count: 13, 
    match: { 
        artist: ["Ludwig Göransson", "Travis Scott"], 
        album: ["Tenet", "Tenet (Original Motion Picture Soundtrack)"], 
        track: ["Rainy Night In Tallinn", "Windmills", "Meeting Neil", "Posterity", "The Plan (From the Motion Picture 'Tenet')", "The Protagonist", "Foils", "Sator", "Trucks In Place", "Red Room Blue Room", "Inversion"] 
    } 
  },
  { 
    folder: "f1", 
    count: 19, 
    match: { 
        artist: ["Brian Tyler"], 
        album: ["Formula 1", "F1 Theme", "F1 The Album"], 
        track: ["Formula 1 Theme", "F1 Main Title", "Formula 1 Theme (Live)", "Slow", "Fast", "Grid", "Podium", "The Start", "Final Lap", "Checkered Flag", "Paddock", "Pit Stop", "Engine Roar"] 
    } 
  },
  { 
    folder: "tintin", 
    count: 17, 
    match: { 
        artist: ["John Williams"], 
        album: ["The Adventures of Tintin", "The Adventures of Tintin: The Secret of the Unicorn"], 
        track: ["The Adventures of Tintin", "Red Rackham’s Curse and the Treasure", "Sir Francis and the Unicorn", "Snowy's Theme", "The Secret of the Unicorn", "Tintin", "Captain Haddock", "Sir Francis Drake", "The Milanese Nightingale", "Pursuit on the Karoudjan", "Red Rackham's Curse", "The Adventure Continues", "Bagghar", "Dueling Pirates"] 
    } 
  },
  { 
    folder: "game_of_thrones", 
    count: 27, 
    match: { 
        artist: ["Ramin Djawadi"], 
        album: ["Game of Thrones", "Game of Thrones Season 1-8"], 
        track: ["Light of the Seven", "Game Of Thrones - Main Theme", "The Night King", "Winter Is Coming", "Mhysa", "The Rains of Castamere", "Goodbye Brother", "A Lannister Always Pays His Debts", "Dracarys", "Chaos Is a Ladder", "You Know Nothing", "Jenny of Oldstones", "The Iron Throne", "The Children", "The Winds of Winter", "Battle of the Bastards", "Against All Odds", "The Army of the Dead", "Seven Nation Army", "Truth", "Hear Me Roar", "The Spoils of War", "Hold the Door", "Blood of My Blood", "Dance of Dragons", "Khaleesi", "Things I Do for Love", "The Bells", "Not Today", "Blood of the Dragon", "You'll Be Queen One Day", "You Win or You Die"] 
    } 
  },
  { 
    folder: "house_of_the_dragon", 
    count: 14, 
    match: { 
        artist: ["Ramin Djawadi"], 
        album: ["HOUSE OF THE DRAGON", "House of the Dragon: Season 1"], 
        track: ["All Must Choose", "The Prince That Was Promised", "Protector of the Realm", "The Crown of Jaeharys", "Dragons Will Reign", "Bloodlines Will Burn", "The Green Council", "The Black Queen", "Fire and Blood", "Reign of the Targaryens", "Fate of the Kingdoms", "A Dance of Dragons"] 
    } 
  },
  { 
    folder: "interstellar", 
    count: 17, 
    match: { 
        artist: ["Hans Zimmer"], 
        album: ["Interstellar"], 
        track: ["No Time for Caution", "Cornfield Chase", "Day One", "Mountains", "S.T.A.Y.", "Where We're Going", "Coward", "Detach", "First Step", "Message From Home", "The Wormhole", "Dust", "Afraid of Time", "Stay", "Quantum Theory"] 
    } 
  },
  { 
    folder: "oppenheimer", 
    count: 18, 
    match: { 
        artist: ["Ludwig Göransson"], 
        album: ["Oppenheimer", "Oppenheimer: Original Motion Picture"], 
        track: ["Destroyer of Worlds", "FREEPORT", "Can You Hear the Music", "TRUCKS IN PLACE", "American Prometheus", "Quantum Mechanics", "Fusion", "Fission", "Manhattan Project", "Los Alamos", "The Trial", "Theory", "Dr. Oppenheimer", "Kitty Comes to Testify", "Something More Important"] 
    } 
  },
  { 
    folder: "dark_knight", 
    count: 23, 
    match: { 
        artist: ["Hans Zimmer", "James Newton Howard", "Hanz Zimmer"], 
        album: ["The Dark Knight", "The Batman Trilogy", "Batman Begins", "The Dark Knight Rises", "The Dark Knight (Collectors Edition)"], 
        track: ["A Dark Knight", "Aggressive Expansion", "A Watchful Guardian", "Batman Begins End Credits", "Antrozous", "Molossus", "Rise", "Introduce a Little Anarchy", "Risen From Darkness", "I'm Not a Hero", "Bank Robbery (Prologue)", "Macrotus", "Like a Dog Chasing Cars", "Descent Into Mystery", "Why Do We Fall?", "Gotham's Reckoning", "Mind If I Cut In?", "Imagine the Fire", "The Fire Rises", "Fear Will Find You"] 
    } 
  },
  { 
    folder: "man_of_steel", 
    count: 16, 
    match: { 
        artist: ["Hans Zimmer"], 
        album: ["Man of Steel", "Man of Steel (Original Motion Picture Soundtrack)"], 
        track: ["Flight (Man of Steel)", "What Are You Going to Do When You Are Not Saving the World?", "Look to the Stars", "Oil Rig", "Sent Here for a Reason", "If You Love These People", "Krypton's Last", "I Will Find Him", "Terraforming", "Launch", "General Zod", "Arcade", "This Is Clark Kent"] 
    } 
  }
];