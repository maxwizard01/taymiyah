const passage1 =`<pre>SECTION A: ENGLISH LANGUAGE
Read the following passage carefully and answer the questions that follow:
When we think of birds, we think mainly of small flying creatures with feathers. However, there are many types of birds,
large and small; and not all birds actually fly. 
The smallest bird, the Humming birds, weighs less than a kilogramme, while the largest is the Ostrich 
which is as tall as eight feet and weighs more than 140 kilograrmmes. 

Many centuries ago, there were birds which weighed more than the Ostrich. These birds no longer exist. 
Among them was Moa which was about 4 meters tall and most probably weighted up to 240 kilogrammes. There was even another type of bird 
called the Elephant bird which weighted probably as much as 500 kilogrammes. This type truly merits the name elephant bird.
 Most of the big birds cannot fly. The Ostrich, for instance cannot fly, but it can run as fast as 56 kilometers an hour.

All the birds, however, are provided with various facilities suitable to their environment so that each may look for its own food 
in a way most suitable to its surroundings. For example, those like the Flamingo, which eat small fish, frogs and other 
forms of water life have bills like daggers of spears.
</pre>`
const passage2 =`<pre>
Read the following passage carefully and answer the questions that follow:
Truthfulness is a sterling quality of good character. It is pure and simple. Honesty with yourself, your fellow man,
 your school, and to your country and the world at large, is one of the most important virtues to cultivate. 
 It is the mark of the manhood or womanhood.

The truth is nature way, it is immortal, while dishonesty is mortal. To understand the truth and speak it is freedom. 
One can never experience peace of mind without the truth. Regardless of our circumstances in life, 
he who utters not the truth is bound in mental slavery. One who has lied in a particular issue, must be prepared to tell 
more lies to cover up the first lie. This is so because no matter how much lie is disguised, it will sooner or later be detected.

There are no "half-truth' Truth cannot be equated with falsehood. We either stand on the solid rock of TRUTH or the quick 
sand of DISHONESTY The grandest homage we can pay to TRUTH is to use it.
</pre>`

var allSubject = {
  "English JSS1":[{Question:'Which of the following is true according to the passage?' ,
Option:{a: 'All birds fly ',b:' Some birds do not have feathers ',c:' Some birds do not fly ',d:' Most birds weigh about 140 kilogrammes', e:' The smallest bird weighs at least one kilogramme'},
Answer:'c',
Instruction:passage1},

{Question:'Why does the writer say that the elephant bird merit its name? ',
Option:{a: 'It has shape of an elephant ',b:' It cannot fly ',c:' It has tusks ',d:' It can kill an elephant', e:' It is extremely big'},
Answer:'d',
Instruction:passage1},

{Question:'Why is it that some birds cannot fly? ',
Option:{a: 'They can be carried away by winds ',b:' They are too big to fly ',c:' They do not have feathers ',d:' They look like elephant', e:' They eat small fish and frog'},
Answer:'b',
Instruction:passage1},

{Question:'Why some birds according to the passage have bills like daggers or spears?' ,
Option:{a: 'To kill other small animals for food ',b:' To enable them run as fast as possible ',c:' To prevent other birds from flying ',d:' To protect themselves from other birds', e:' To use the bills as feathers'},
Answer:'a',
Instruction:passage1},

{Question:'According to the passage, the largest bird that is still existing is' ,
Option:{a: 'Elephant bird ',b:' Humming bird ',c:' Flamingo ',d:' Ostrich'},
Answer:'d',
Instruction:passage1},

{Question:'The <u>victory</u> of the visiting teams surprised the spectators',
Option:{a:' failure ',
b:' wisdom',
c:' success',d:' happiness'},
Answer:'a',
Instruction:'From the list of words lettered A-D, choose the one that is mostly nearly opposite in meaning to the underlined word in each sentence'},

{Question:'he club caters for those who are <u>partially</u> blind',
Option:{a:' usually ',
b:' mostly',
c:' totally',d:' nearly'},
Answer:'c',
Instruction:'From the list of words lettered A-D, choose the one that is mostly nearly opposite in meaning to the underlined word in each sentence'},

{Question:'he boy <u>quietly</u> entered the classroom',
Option:{a:' gently ',
b:' immediately',
c:' noisily',d:' suddenly'},
Answer:'c',
Instruction:'From the list of words lettered A-D, choose the one that is mostly nearly opposite in meaning to the underlined word in each sentence'},


{Question:'he boy s<u>ucceeded</u> in the examination',
Option:{a:' failed ',
b:' passed',
c:' did not do well',d:' was sick'},
Answer:'b',
Instruction:'From the list of words lettered A-D, choose the one that has almost the same meaning as the underlined word in each sentence'},

{Question:'The invading soldiers <u>departed</u> from the city after mass destruction',
Option:{a:' arrived at ',
b:' saw',
c:' entered',d:''},
Answer:'d',
Instruction:'From the list of words lettered A-D, choose the one that has almost the same meaning as the underlined word in each sentence'},

{Question:'Accidents <u>happen</u> daily on the road',
Option:{a:' prevent ',
b:' occur',
c:' present',d:' seen'},
Answer:'b',
Instruction:'From the list of words lettered A-D, choose the one that has almost the same meaning as the underlined word in each sentence'},


{Question:'The oranges were to be shared ______ the three boys',
Option:{a:' between ',
b:' around',
c:' among',d:' all over '},
Answer:'c',
Instruction:'Choose from the list of words or group of words below, the one in which correctly and most suitable to fill the gap'},

{Question:'The ball went________ the bar',
Option:{a:' over ',
b:' beside',
c:' under',d:' beyond'},
Answer:'a',
Instruction:'Choose from the list of words or group of words below, the one in which correctly and most suitable to fill the gap'},

{Question:'The doctor advised the patient to take care ________his health',
Option:{a:' about ',
b:' over',
c:' of',d:' at'},
Answer:'c',
Instruction:'Choose from the list of words or group of words below, the one in which correctly and most suitable to fill the gap'},

{Question:'The man helped Tope and _________',
Option:{a:' me ',
b:' I',
c:' my',d:' mine '},
Answer:'a',
Instruction:'Choose from the list of words or group of words below, the one in which correctly and most suitable to fill the gap'},



{Question:'The jewel __________found in the bush',
Option:{a:' was ',
b:' was being',
c:' were',d:' where'},
Answer:'a',
Instruction:'Choose from the list of words or group of words below, the one in which correctly and most suitable to fill the gap'},

{Question:'1. It makes them rich quickly.<br> 2. Farmers love to plant it.<br>3. Cocoa is a cash crop',
Option:{a:' 1,2,3',
 b:' 1,3,2 ',
 c:' 3,1,2',
 d:' 3,2,1'},
 Answer:'d',
 Instruction:`In each of the number below, there are three sentences, rearrange the sentence in the proper logical order.<br>
Example.<br>
1. He sat on the table to eat breakfast.<br>
2. He completed his morning duties.<br>
3. Tony wake up in the morning<br>
(a) 1,2,3 (b) 2,1,3 (c) 3,2,1 (d) 3,1,2<br> 
The correct answer is C`},

{Question:' 1. It forms a large pool.<br> 2. I love to swim in it.<br>3. The river flows down the stream',
Option:{a:' 3,1,2',
 b:' 1,2,3 ',
 c:' 1,3,2',
 d:' 2,3,1'},
 Answer:'a',
 Instruction:`In each of the number below, there are three sentences, rearrange the sentence in the proper logical order.<br>
Example.<br>
1. He sat on the table to eat breakfast.<br>
2. He completed his morning duties.<br>
3. Tony wake up in the morning<br>
(a) 1,2,3 (b) 2,1,3 (c) 3,2,1 (d) 3,1,2<br> 
The correct answer is C`},

{Question:' 1. Tokunbo started by crawling.<br>2. Now he runs about.<br>3. He then tried to walk',
Option:{a:' 1,2,3',
 b:' 3,1,2 ',
 c:' 2,1,3',
 d:' 1,3,2'},
 Answer:'d',
 Instruction:`In each of the number below, there are three sentences, rearrange the sentence in the proper logical order.<br>
Example.<br>
1. He sat on the table to eat breakfast.<br>
2. He completed his morning duties.<br>
3. Tony wake up in the morning<br>
(a) 1,2,3 (b) 2,1,3 (c) 3,2,1 (d) 3,1,2<br> 
The correct answer is C`},

 {Question:'',
 Option:{a:' sparrow',
 b:' kite ',
 c:' eagle',
 d:' bird'},
 Answer:'d',
 Instruction:`From the option A-D one word is the general name, which describe the others, choose the one that represents the other<br>
Example. <br>(a)Crocodile (b) lizard (c) snake (d) reptile<br>
The correct answer is D`},



{Question:'From the option A-D one word is the general name, which describe the others, choose the one that represents the other',
 Option:{a:' shelf',
 b:' table ',
 c:' furniture',
 d:' stool'},
 Answer:'c',
 Instruction:''},

{Question:'From the option A-D one word is the general name, which describe the others, choose the one that represents the other',
 Option:{a:' breakfast',
 b:' meal ',
 c:' lunch',
 d:' dinner'},
 Answer:'b',
 Instruction:''},

 {Question:`In each of the following, pick the one out that does not belong to the group<br>
Example<br>
Option:(a)run (b) see (c) walk (d) jog<br>
The correct answer is B`,
 Option:{a:' door',
 b:' chair ',
 c:' house',
 d:' driver'},
 Answer:'d',
 Instruction:''},

{Question:'In each of the following, pick the one out that does not belong to the group',
 Option:{a:' triangle',
 b:' circle ',
 c:' rectangle',
 d:' quart'},
 Answer:'d',
 Instruction:''},

{Question:'In each of the following, pick the one out that does not belong to the group',
 Option:{a:' chalk',
 b:' duster ',
 c:' blackboard',
 d:' knife'},
 Answer:'d',
 Instruction:''}],


 'Mathematics JSS1': [{ Question: 'Express 31010 in words',
Option:{a:' Thirty one thousand and ten ',
b:' Thirty thousand, one hundred and ten ',
c:' three thousand, ten thousand and ten ',
d:' Three hundred one hundred and ten.'},
Answer:'a',
Instruction:''},

{ Question: 'Express 1084 in roman figure',
Option:{a:' MCLXXXIV ',
b:' MCCLXXVI ',
c:' MLXIV ',
d:' MLXXIV'},
Answer:'d',
Instruction:''},

{ Question: 'Find the HCF of 9,12 and 15',
Option:{a:' 2 ',
b:' 3 ',
c:' 5 ',
d:' 6'},
Answer:'b',
Instruction:''},

{ Question: 'Dayo spent 2/5 of his money in one shop then 4/7 in another shop. He then had #200 left. How much was his money',
Option:{a:' #7000 ',
b:' 10,000 ',
c:' #4000 ',
d:' #6800'},
Answer:'a',
Instruction:''},

{ Question: 'Simplify 2/5 ×3/4-3/16  +1 ¼  ',
Option:{a:' 3/20 ',
b:' 1/5 ',
c:' 1 5/12 ',
d:' 3 1/16'},
Answer:'a',
Instruction:''},

{ Question: 'Express 4.05173 in 3 d.p',
Option:{a:' 4.051 ',
b:' 4.052 ',
c:' 1 5/12  ',
d:' 3 1/16'},
Answer:'b',
Instruction:''},

{ Question: 'Mary bought a bag of rice for #9000 and sold it for #6,300. What was his percentage loss ',
Option:{a:' 60% ',
b:' 50% ',
c:' 40% ',
d:' 30%'},
Answer:'d',
Instruction:''},

{Question:' A sum of #840 is shared among three brothers in the ratio 5:7:9. What is the largest share',
Option:{a:' #260.00 ',
b:' #360.00 ',
c:' #460.00  ',
d:' #1330'},
Answer:'b',
Instruction:''},

{Question:' How many seconds are there in 3 <sup>1</sup>/<sub>2</sub> minutes',
Option:{a:' 120 ',
b:' 180 ',
c:' 160 ',
d:' 210'},
Answer:'d',
Instruction:''},

{Question:' Given that x=5, y=9, then xy<sup>2</sup>/(y-x)',
Option:{a:' 405/4 ',
b:' 201/14  ',
c:' 105/8  ',
d:' 225/4 '},
Answer:'a',
Instruction:''},

{Question:' Find the value of x in 2x+3=5x-15',
Option:{a:' 15 ',
b:' 12 ',
c:' 70 ',
d:' 6'},
Answer:'d',
Instruction:''},

{Question:' Find the value of y if 9y-(4y+y) =24',
Option:{a:' 20 ',
b:' 18 ',
c:' 11 ',
d:' 6'},
Answer:'d',
Instruction:''},

{Question:' Find x in the figure above',
Option:{a:' 53 ',
b:' 127 ',
c:' 143 ',
d:' 270'},
Answer:'b',
Instruction:'',
Img:`<img src="./Images/img1.png" width="320" alt=" ">`},

{Question:' Find the value of the side marked y in the figure above',
Option:{a:' 9 ',
b:' 8 ',
c:' 17 ',
d:' 6'},
Answer:'d',
Instruction:'',
Img:`<img src="./Images/img2.png" width="220" alt=" ">`},

{Question:' What is the value of x in the diagram above',
Option:{a:' 20 ',
b:' 40 ',
c:' 130 ',
d:' 50 '},
Answer:'b',
Instruction:'',
Img:`<img src="./Images/img3.png" width="220" alt=" ">`},

{Question:' The area of a rectangle is 60cm<sup>2</sup>. Find the length of the rectangle if it’s breadth is 5cm',
Option:{a:' 25cm ',
b:' 12cm ',
c:' 13cm',
d:' 15cm'},
Answer:'b',
Instruction:''},

{Question:' Calculate the perimeter of a circle of radius 3.5cm  (π=22/7)',
Option:{a:' 18cm ',
b:' 7cm ',
c:' 75cm ',
d:'22cm'},
Answer:'d',
Instruction:''},

{Question:' What is the mode of the following set of number 6,5,3,6,3,2,4,6,4,5,6,4.',
Option:{a:' 2 ',
b: '3 ',
c:' 4. ',
d:' 6'},
Answer:'d'},

{Question:' Find the average of 122, 110, 194, 125 and 109',
Option:{a:' 132 ',
b:' 130 ',
c:' 138 ',
d:' 122'},
Answer:'a',
Instruction:''},

{Question:'',
Option:{a:'4  ', b:'16 ', c: '14',d:' 2'},
Answer:'d',
Instruction:'<img src="./Images/img4.png" width="320" alt=" ">',
Img:'<img src="./Images/img5.png" width="120" alt=" ">'},

{Question:'',
Option:{a:'4  ', b:'2  ', c: '16',d:' 8'},
Answer:'a',
Instruction:'<img src="./Images/img4.png" width="320" alt=" ">',
Img:'<img src="./Images/img6.png" width="120" alt=" ">'},

{Question:'',
Instruction:'<img src="./Images/img4.png" width="320" alt=" ">',
Img:'<img src="./Images/img7.png" width="120" alt=" ">',
Option:{a:'225', b:'125', c: '15',d:' 25'},
Answer:'a'},

{Question:'',
Instruction:'<img src="./Images/img12.png" width="320" alt=" ">',
Img:'<img src="./Images/img13.png" width="120" alt=" ">',
Option:{
       a:'9',
       b:'6',
       c:'25',
       d:'13'},
Answer:'a',

},

{Question:'',
Instruction:'<img src="./Images/img12.png" width="320" alt=" ">',
Option:{
       a:'56',
       b:'66',
       c:'35',
       d:'11'},
Answer:'c',
Img:'<img src="./Images/img14.png" width="120" alt=" ">'

},

{Question:'',
Instruction:'<img src="./Images/img12.png" width="320" alt=" ">',
Option:{
       a:'1',
       b:'1/2',
       c:'1 1/3',
       d:'3/4'},
Answer:'a',
Img:'<img src="./Images/img15.png" width="120" alt=" ">'
}],


"Use of English JSS1": [
 {Option:{"a":' a good character ',
         'b':' your school and your country',
         'c':' truthfulness',
          "d":' the most important virtue to cultivate'},
Answer:"c",
Question: "According to the passage, what is the mark of true manhood or womanhood?",
Instruction:passage2},

{Option:{"a":' it is oral ',
         'b':' it is immortal',
         'c':' it is freedom',
          "d":' it is good'},
Answer:"b",
Question: "Truth is nature's way because",
Instruction:passage2},

{Option:{"a":' peace of mind ',
         'b':' only to speak the truth',
         'c':' to understand the truth and speak it',
          "d": "the nature's way"},
Answer:"c",
Question: "What is freedom according to the passage? ",
iIstruction:""},
 
{Option:{"a":' True ',
         'b':' False',
         'c':' All of the above',
          "d":' none of the above '},
Answer:"a",
Question: "In the passage. Truth is the same as Honesty",
iIstruction:passage2},
 
{Option:{"a":' lose it ',
         'b':' use it always',
         'c':' equate it with falsehood',
          "d":' like dishonesty'},
Answer:"b",
Question: "The best thing we can do to TRUTH is to",
Instruction:passage2},

 
{Option:{"a":' lowly ',
         'b':' coolly',
         'c':' quickly',
          "d":' slowly'},
Answer:"d",
Question: "The current flows <u>rapidly</u> to the west",
Instruction:"From the list of words lettered A-D, choose the one that is mostly nearly opposite in meaning to the underlined word in each sentence"},

{Option:{"a":' Quiet ',
         'b':' cool',
         'c':' peaceful',
          "d":' noisy'},
Answer:"d",
Question: "Some areas in the city are not as calm while some are ",
iIstruction:"From the list of words lettered A-D, choose the one that is mostly nearly opposite in meaning to the underlined word in each sentence"},
 
{Option:{"a":' Interesting ',
         'b':' long',
         'c':' familiar',
          "d":' frightening'},
Answer:"c",
Question: "The old man told us a <u>strange</u> story yesterday",
instrIction:"From the list of words lettered A-D, choose the one that is mostly nearly opposite in meaning to the underlined word in each sentence"},

{Option:{"a":' assists ',
         'b':' draws',
         'c':' faces',
          "d":' resists'},
Answer:"a",
Question: "My mummy always <u>stand by</u> me in all my efforts to pass the examination ",
Instruction:"From the list of words lettered A-D, choose the one that has almost the same meaning as the underlined word in each sentence"},

 
{Option:{"a":' dangerous ',
         'b':' difficult',
         'c':' impossible',
          "d":' sad'},
Answer:"b",
Question: "It will be <u>hard</u> for Taiwo to handover to Kayode",
Instruction:"From the list of words lettered A-D, choose the one that has almost the same meaning as the underlined word in each sentence"},

 
{Option:{"a":' likes ',
         'b':' detects',
         'c':' hates',
          "d":' mocks'},
Answer:"c",
Question: "John <u>detests</u> night journey",
Instruction:"From the list of words lettered A-D, choose the one that has almost the same meaning as the underlined word in each sentence"},

{Option:{"a":' over ',
         'b':' top',
         'c':' under',
          "d":' out'},
Answer:"d",
Question: "Adetola <u>came in flying colors</u> in the examination ",
Instruction:"Choose from the list of words or group of words below, the one in which correctly and most suitable to fill gap"},

 
{Option:{"a":' in so far as ',
         'b':' in order to',
         'c':' in as much as',
          "d":' as in'},
Answer:"b",
Question: "The government is making Mathematics compulsory _______ produce quality scientist",
Instruction:"Choose from the list of words or group of words below, the one in which correctly and most suitable to fill gap"},

 
{Option:{"a":' mine ',
         'b':' my',
         'c':' theirs',
          "d":' yours'},
Answer:"a",
Question: "The bag is ______, it belongs to me",
Instruction:"Choose from the list of words or group of words below, the one in which correctly and most suitable to fill gap"},

 
{Option:{"a":' each other ',
         'b':' on another',
         'c':' themselves',
          "d":' their selves '},
Answer:"a",
Question: "Jane and John love______ very much",
Instruction:"Choose from the list of words or group of words below, the one in which correctly and most suitable to fill gap"},


{Option:{"a":' on ',
         'b':' at',
         'c':' over',
          "d":' looking at'},
Answer:"a",
Question: "The majority of the boys were present________ Toyin's birthday ",
Instruction:"Choose from the list of words or group of words below, the one in which correctly and most suitable to fill gap"},


{Option:{"a":' 1, 2, 3 ',
         'b':' 3, 2, 1',
         'c':' 1, 3, 2',
          "d":' 2, 1, 3'},
Answer:"a",
Question: "1. I collected my question paper.<br>2. I read the Instructions carefully.<br>3. I answered all the question",
Instruction:`In each of the number below, there are three sentences, rearrange the sentence in the proper logical order.<br>
Example.
<br>1. with their flock.<br>
2. When coming home.<br>
3. The herds men hatched out to pasture<br>
(a)1, 2, 3 (b) 2, 1, 3 (c) 2, 3, 1 (d) 1,3,2<br>
The correct answer is C`},


{Option:{"a":' 1, 3, 2 ',
         'b':' 2, 1, 3',
         'c':'3, 1, 2',
          "d":' 2, 3, 1 '},
Answer:"c",
Question: "1. The ground was slippery.<br>2. The boy slipped and fell.<br>3. It had just stop raining",
Instruction:`In each of the number below, there are three sentences, rearrange the sentence in the proper logical order.<br>
Example.
<br>1. with their flock.<br>
2. When coming home.<br>
3. The herds men hatched out to pasture<br>
(a)1, 2, 3 (b) 2, 1, 3 (c) 2, 3, 1 (d) 1,3,2<br>
The correct answer is C`},

{Option:{"a":' 1.3.2 ',
         'b':' 2.3.1',
         'c':' 3.1.2',
          "d":' 1,2,3'},
Answer:"a",
Question: "1. Rashidat counted the Mangoes. <br>2. She put the Mangoes in her bag.<br>3. The Mangoes are twenty",
Instruction:`In each of the number below, there are three sentences, rearrange the sentence in the proper logical order.<br>
Example.
<br>1. with their flock.<br>
2. When coming home.<br>
3. The herds men hatched out to pasture<br>
(a)1, 2, 3 (b) 2, 1, 3 (c) 2, 3, 1 (d) 1,3,2<br>
The correct answer is C`},


{Option:{"a":' Pawpaw ',
         'b':' Fruit',
         'c':' Orange',
          "d":' Mango'},
Answer:"b",
Question: "",
Instruction:`From the option A-D one word is the general name, which describe the others, choose the one that represents the other<br>
Example. <br>
<br>(a) Pig (b) Sheep (c) Goat (d) Animal<br>
The answer is D`},


{Option:{"a":' Tin ',
         'b':' Mineral',
         'c':' Lead',
          "d":' Zinc'},
Answer:"b",
Question: "",
Instruction:`From the option A-D one word is the general name, which describe the others, choose the one that represents the other<br>
Example. <br>
<br>(a) Pig (b) Sheep (c) Goat (d) Animal<br>
The answer is D`
},
 
{Option:{"a":' Lorry ',
         'b':' Car',
         'c':' Vehicle',
          "d":' Truck'},
Answer:"c",
Question: "",
Instruction:`From the option A-D one word is the general name, which describe the others, choose the one that represents the other<br>
Example. <br>
<br>(a) Pig (b) Sheep (c) Goat (d) Animal<br>
The answer is D`
},

{Option:{"a":' car ',
         'b':' boat',
         'c':' ship',
          "d":' canoe'},
Answer:"a",
Question: "",
Instruction:`In each of the following, pick the one out that does not belong to the group
<br>Example. (a) Orange (b) rice(c) mango (d) apple<br>
The answer is B`},

 
{Option:{"a":' pen ',
         'b':' ruler',
         'c':' school',
          "d":' pencil'},
Answer:"c",
Question: "",
Instruction:`In each of the following, pick the one out that does not belong to the group
<br>Example. (a) Orange (b) rice(c) mango (d) apple<br>
The answer is B`},
 
{Option:{"a":' small ',
         'b':' big',
         'c':' huge',
          "d":' fast'},
Answer:"d",
Question: "",
Instruction:`In each of the following, pick the one out that does not belong to the group
<br>Example. (a) Orange (b) rice(c) mango (d) apple<br>
The answer is B`},

]
    }