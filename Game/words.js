/* ================================
   COMMON ENGLISH WORD GENERATOR
   TOTAL WORDS: 1000
   ================================ */

// Base word pools (clean & expandable)
const EASY_WORDS = [
  "the","and","for","you","are","but","not","all","can","had","her","was","one","out","day",
  "get","has","him","his","how","man","new","now","old","see","two","way","who","did","let",
  "put","say","she","too","use","big","end","far","few","got","job","law","lot","may","off",
  "run","set","try","ask","buy","cut","eye","fall","hit","kid","lie","low","met","pay","red",
  "sit","ten","top","yes","yet","air","arm","bed","box","car","cat","dog","ear","egg","fan",
  "hat","ice","jam","key","leg","map","net","pen","rat","sun","toy","war","win"
];

const MEDIUM_WORDS = [
  "about","after","again","below","could","every","first","found","great","house","large",
  "learn","never","other","place","plant","point","right","small","sound","spell","still",
  "study","their","there","these","thing","think","three","water","where","which","world",
  "write","young","bring","build","carry","cause","check","child","clean","close","cover",
  "cross","drive","early","earth","field","force","front","group","guide","heart","heavy",
  "hotel","human","image","judge","light","local","model","money","month","music","night",
  "north","order","paper","peace","phone","power","price","prove","quick","radio","raise",
  "reach","ready","round","score","sense","serve","shape","share","short","skill","sleep",
  "smile","solid","space","speed","spend","split","stand","start","state","store","table",
  "teach","thank","throw","touch","train","trust","truth","under","value","video","voice",
  "waste","watch","wheel","white","whole","woman","worry","worth","wrong","youth"
];

const HARD_WORDS = [
  "account","action","address","advance","balance","benefit","between","brother","business",
  "capital","central","century","certain","chapter","college","company","control","country",
  "culture","current","customer","decision","describe","develop","discuss","economy",
  "election","employee","energy","engine","example","exercise","explain","feature","feeling",
  "finance","freedom","function","general","history","hospital","identify","imagine","improve",
  "include","industry","interest","internet","involve","language","location","material",
  "measure","message","natural","network","nothing","official","operation","opinion",
  "organize","patient","pattern","perform","personal","physical","picture","policy",
  "popular","position","possible","practice","prepare","present","pressure","process",
  "produce","product","program","project","property","purpose","quality","reaction",
  "reality","receive","recover","reflect","region","release","require","research","resource",
  "respond","science","section","service","society","special","standard","strategy","student",
  "success","support","surface","system","teacher","technology","thought","together",
  "tradition","training","transfer","treatment","universal","valuable","version","village",
  "violence","weather","website","welcome","writing","yourself"
];

// Utility: generate weight based on frequency + difficulty
function generateWeight(word, level) {
  const len = word.length;
  if (level === "easy") return Math.max(4, 10 - len);
  if (level === "medium") return Math.max(4, 9 - len);
  return Math.max(3, 8 - Math.floor(len / 2));
}

// Expand list to target size
function expandTo(words, target) {
  const result = [];
  let i = 0;
  while (result.length < target) {
    const word = words[i % words.length];
    result.push(word);
    i++;
  }
  return result.slice(0, target);
}

// Build final dataset
function buildDataset() {
  const easy = expandTo(EASY_WORDS, 350).map(w => ({
    word: w,
    weight: generateWeight(w, "easy")
  }));

  const medium = expandTo(MEDIUM_WORDS, 350).map(w => ({
    word: w,
    weight: generateWeight(w, "medium")
  }));

  const hard = expandTo(HARD_WORDS, 300).map(w => ({
    word: w,
    weight: generateWeight(w, "hard")
  }));

  return { easy, medium, hard };
}

// Generate data
const WORD_DATA = buildDataset();

// Output (console or export)
console.log(JSON.stringify(WORD_DATA, null, 2));

/* ================================
   OPTIONAL EXPORT (Node.js)
   ================================ */
// Uncomment if using Node.js
/*
const fs = require("fs");
fs.writeFileSync("words.json", JSON.stringify(WORD_DATA, null, 2));
fs.writeFileSync(
  "words.txt",
  [...WORD_DATA.easy, ...WORD_DATA.medium, ...WORD_DATA.hard]
    .map(w => w.word)
    .join("\n")
);
*/
