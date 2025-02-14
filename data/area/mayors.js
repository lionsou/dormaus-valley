var area = {
        "title": "mayors",
        "position": [0.15,0.71],
        "header": "Town Hall",
        "subheader": 'The town hall is a small wooden building. On one wall, a notice board is holding a variety of messages and papers, advertising fairs or making requests. A ticking clock on the opposite wall stands above the clerk\'s desk and gives the room a businesslike ambience. The mayor\'s desk is behind a glass panel, in a slightly more cozy-looking room.',
        "events": [
            {
                "id": "supplies_booze",
                "title": "Ply Workers With Booze",
                "subtitle": 'You\'ll need assistance when diving into the caves. The best way to get that assistance is with lots and lots of booze.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "wine_1",
                        "value": 49,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "digger",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "supplies",
                "results": {
                    "grizzsex": {
                        "text": "You finally found a use for the crates and crates of wine that you've been hoarding. You go to Grizz's bar armed with a fat stack of work contracts, and a ton of wine. You declare drinks to be on you, and hand out bottles to anyone that asks. The ones who come back again and again for more, you strike up a conversation with.</p>Before long, you've gotten them drunk enough that they are willing to listen to your plans for exploration and adventure. A wobbly signature on your contract, and you're up one new worker. You carry on that way through the night, and by morning you are feeling much more prepared for your adventure.",
                        "outcomes": [
                            {
                                "parameter": "supplies",
                                "quantity": 1,
                                "change": "add"
                            },{
                                "parameter": "wine_1",
                                "quantity": 50,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },{
                "id": "supplies_chips",
                "title": "Gamble For Supplies",
                "subtitle": 'What else are you going to do with poker chips? Conveniently, Ace himself is a licensed digger, and he\'d be happy to roll some dice to see if you get his supplies.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "chips_1",
                        "value": 49,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "digger",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "supplies",
                "results": {
                    "grizzsex": {
                        "text": 'You challenge Ace to a showdown. Best digger takes the pot. Naturally he wins almost immediately, but then you challenge him to best two out of three. It carries on that way for a while, with you losing chips into Ace\'s bottomless pit of card sharkery. Finally, he takes pity on you, and says that you can have some of his supplies, since he needs to unload himself to carry all your chips back home with him anyway.',
                        "outcomes": [
                            {
                                "parameter": "supplies",
                                "quantity": 1,
                                "change": "add"
                            },{
                                "parameter": "chips_1",
                                "quantity": 50,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },{
                "id": "become_digger",
                "title": "Ask for a Digger's Permit",
                "subtitle": 'Saberhagen gave you a letter of recommendation, so you may as well use it',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "saberhagen_connection",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "digger",
                        "value": 1,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "supplies",
                "results": {
                    "grizzsex": {
                        "text": 'Mayor Maine folds one of his legs over the other and leans back in his chair. He considers you carefully for a while, and then finally nods. "Alright adventurer. I suppose I can see my way towards giving you a permit for the caves. After all, what sort of fellow would I be were I to go against the word of one of my fellow cats? I won\'t even make you kiss my feet for the privilege", he says. His eyes glimmer a little at that last part, although by now you are starting to get used to his proclivities. He gets out of his chair and leads you over to the record office, where he begins to fill in a form. "Now, if you want a successful cave dive, you\'re going to need more than just this permit. You\'ll want to gather up some cave-diving supplies. Ten is the bare minimum, but you could probably carry about twenty. Do let me know if you find anything of historical value!", he says, before handing you a piece of paper. It\'s signed with his official seal, and marks you as a licensed treasure digger. "You can gather up help and assistance at the cave entrance if you have favours to call in, but the easiest way to gather supplies is just to purchase them. Unfortunately, due to a complicated bureaucratic mixup, Flute is our official town supplier. He does have a tendency to overcharge.", he finishes. He sits back down at his desk and leaves you to your business.',
                        "outcomes": [
                            {
                                "parameter": "digger",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "mayor_job",
                "title": "Work at the Town Hall",
                "subtitle": "The amount of paperwork in this office is enough to drown in. How does such a small town have so much?",
                "type": "statcheck", //or random
                "stat": "charm",
                "difficulty": 15,
                "requirements": [
                    {
                        "parameter": "outcast",
                        "value": 2,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "muscat_1",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'The mayor isn\'t at the office when you start working. Instead, you are assigned to deal with complainants and write up their paperwork. One by one people file into the office, with their problems needing to be addressed.</p>Your first client is a large, fat fox, who\'s torso is almost round. He pulls off his shirt to reveal that his belly is in fact quite round, as well as orange and firm like a vegetable. You file his complaint and direct him to go wait in the pumpkin patch, where someone will be along to assist him shortly. After that, a large grey-skinned creature slowly shuffles into the office. With a creaky, slow voice, he says that he fell asleep in the fountain plaza and woke up all craggy and stony. It takes quite a lot of convincing and arguing for you to get the guy to accept that it\'s perfectly normal and he\'s always been a statue, but by the end of it, you\'ve tricked him into thinking he came here to be reassigned to a different garden. You file a report and assign him to sit over the church as a gargoyle, and he leaves very happy. You do feel slightly guilty, but the pay helps assuage that guilt.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "change": "add"
                            }
                        ]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'Mayor Maine is here today, sorting through some paperwork. The tall cat is an older man, his belly large and round and heavy, and his orange fur forming a thick fluffy beard-like mane around his neck. He is sitting at his desk, with tall piles of papers stacked haphazardly beside him. He signs another paper, then looks up and notices you. He smiles in a gentle, fatherly way. </p>"Ah, the new assistant! It\'s a delight to have you around. I hate to put you out, but I don\'t suppose you would mind assisting me with this paperwork?" The cat is hard to refuse, and you take a stack of papers and start to sort them as per his instructions. The more you sort and order the files, the more orders the mayor gives you, his tone gradually becoming more aggressive and dominant. You look up to him after you have sorted your own pack, to see his eyes narrowed and an unusual grin on his face. He reaches a finger forward and knocks some papers to the floor. </p>"Whoops! Young man, get on your knees and pick those up." You hesitate for a moment, then get down under the mayor\'s desk. His large bare orange-furred paws are resting on the thick carpet, and when you try to grab the papers, he slides his foot along them, dragging them out of your reach. You reach forward again, and when you get closer, he shoves his foot forward, pressing his warm, furry sole across your face. The scent is masculine and appealing, and his fur is incredibly soft. You feel flushed with embarrassment, but his voice speaks out, deeper and more commanding. </p>"Stay where you are. I think you will be more helpful as a foot stool." The mayor strokes his foot along your cheek, then uses his legs to roll you onto your back. Then he rests one paw on your face, and the other on your crotch. Your predicament is clearly arousing the older man, as his suit pants are tenting with a clear erection. He strokes and gropes it as he wiggles his toes on your body, and you find yourself unable to resist his commands. Whenever you move to leave, he presses his weight down on you, and you know you are not going anywhere. Several visitors come and go from the office, and the mayor makes no attempt to conceal what you are doing. Being seen acting like an object is completely humiliating.</p>Hours later, when he has finished organising the last of his papers, he finally allows you to sit up, your hair mussed and your body covered in his scent. As you leave, he calls after you. "Good boy. Feel free to come back again soon. Maybe you can stay as a footstool forever."',
                        "outcomes": [{
                            "parameter": "outcast",
                            "quantity": 1,
                            "max": 2,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "become_footstool",
                "title": "The Mayor wants to demote you.",
                "subtitle": 'The mayor is resting in his chair when you enter today, with his large feet crossed atop his desk. The soles are fluffy and white, and look incredibly soft and appealing. You blink and try to shake off the weird urge you feel, seeing the older cat\'s paws. You have the oddest desire to just sit beneath them so they can rest. The mayor is toying with a gold chain around his neck, and purrs as you get closer. </p>"The new arrival! Glad you have come to give me a visit. Always a delight. I would normally be out on my rounds, but my poor feet are just so tired. Warm and tired, and aching to be rested. Could you possibly help an old cat out?" he says. His voice is rumbling and purring, flowing through your mind and making it hard to think. Yet you know from his glowing eyes, and evil expression, that if you do not escape then you will surely be trapped here under the cat\'s will forever. Do you submit to his will?',
                "type": "random",
                "requirements": [
                	{
                        "parameter": "outcast",
                        "value": 1,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "maineicon",
                "results": {
                    "grizzpay": {
                        "text": 'The moment you consider serving the cat, you are lost. Your face spreads into an eager, blushing grin, and the mayor\'s eyes narrow into glowing slits. "Such a helpful and dutiful citizen. You are a role model for all the beings here. One day they will all know their place beneath me, as you do." he says. You can barely tell what he is saying, though. Your entire focus is on his perfect, beautiful feet. Before you know it, your fingers are wrapped around his soles, and you are massaging your thumbs through his thick, soft fur. His paws are warm and comfortable to hold, and you feel like you could press them against your flesh forever. You rub and squeeze his toes, and press your face to his sole, feeling the warmth on your cheeks. </p>The mayor pulls them away from you, and you whimper for a moment, before he points down below his desk. Immediately, you obey, crawling under his desk and sitting on your hands and knees with your face gazing up into his wonderful paws. They slowly lower down onto your face, and your mind blanks out. The darkness of his warm paws smothering your vision is all you care about. </p>You don\'t care when your body starts to compress down, and your limbs begin to melt together into your body. You don\'t care when your insides soften and turn to padding and fluff, or when you begin to squish and reshape into a cube. You don\'t even care when your skin becomes shiny, and smooth, and turns into soft red leather. All you care about is the feet, resting on where your face used to be, as you become a boxy leather footstool under the mayor\'s desk. No thoughts. Only feet.',
                        "trapped_desc": "This is just a large red footstool sitting under Mayor Maine's desk.",
                        "trapped": 'You are nothing but Mayor Maine\'s leather footstool. Your master\'s perfect paws will rest on your former face, and you will never escape the joy of serving his feet.',
                        "outcomes": []
                    }
                }
            },{
                "id": "footstool_random",
                "title": "Accept Your Fate",
                "subtitle": "You are nothing but a footstool. Why try to be anything else?",
                "trapped": true,
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "footstool_1": {
                        "text": 'As you sit quietly under the mayor\'s desk, you hear him starting to sigh with boredom. There is a shuffling of papers above you, and then he lifts his wide, fluffy paws and rests them on what used to be your face. You would shiver with delight if you could. His sole rubs slowly back and forth, the thicker pads of his foot pressing into your flat surface. His toes wriggle and stroke across your upholstery. He lifts his feet away, then presses them to your sides. His claws emerge, and tease gently down your sides, the sharp tips leaving a tingly feeling in your footstool body. </p>Then he flexes his paws, presses them both back down on your face, and leaves them there while he works. You lose yourself in the warmth and scent of your owner\'s feet.',
                        "outcomes": []
                    },
                    "footstool_2": {
                        "text": 'When the mayor leaves for the night, and locks up, you are left alone in the dark office. His scent slowly fades from your body, and the haze of lust and obedience that constantly fills you begins to clear up. You start to remember that you aren\'t just a footstool. You used to be an adventurer! You should fight, should resist. But...you are really missing his feet. </p>You miss having him press his soles onto you. You want him to relax and rest on you. You need your master so badly. By the time the morning rolls around, and your master returns and props his paws back on you, you are utterly weak with withdrawal. His warmth and presence fills you with relief, and crushes a little more of your will. Every day is like this, and every day you lose a bit more of your mind to the simple mind of an obedient footstool.',
                        "outcomes": []
                    }
                }
            },{
                "id": "resist_footstool",
                "trapped": true,
                "title": "Resist Your Transformation",
                "subtitle": "You are not an object! You can fight this!",
                "type": "statcheck", //or random
                "stat": "magic",
                "difficulty": 5,
                "requirements": [
                ],
                "icon": "footfetish",
                "results": {
                	"rareSuccess": {
                		"text": 'You are not a footstool! You have to focus and remember who you used to be. You may just be a leather-clad cube right now, but once you had legs, and arms, and a face. You don\'t belong under some evil cat\'s feet. You are an adventurer, you should be out there, exploring, seeing new sights, meeting new people. Every time your thoughts drift back to your owner\'s big, furry, soft feet, you force yourself to think of the sky, to think of walking and moving and being alive. Bit by bit, you struggle to assert your mind, to remind yourself that you are not just an object. It\'s incredibly straining and difficult, and you feel like you have made barely any progress.</p>Fortunately, the Mayor is out late tonight, and can\'t return to the office. All through the day and night you fight with the unnatural paw-obsessed urges in your head. Slowly, your body stretches out, as arms and legs reform. Your head pushes out from the red leather as it turns slowly back into flesh. You weakly crawl out from under your owner\'s...no, from the Mayor\'s desk. You manage to leave the town hall and pant, exhausted, but alive, outside the door. As you sit there, the mayor walks past you, and your eyes are locked onto his large bare paws. He pauses for a moment, and looks down at you with a gleaming grin. "Next time, I won\'t leave anything left to fight back, footstool", he says, before walking through the door and leaving you be.',
                		"freeTrap": true,
                		"outcomes": []
                	},
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You are not a footstool! You have to focus and remember who you used to be. You may just be a leather-clad cube right now, but once you had legs, and arms, and a face. You don\'t belong under some evil cat\'s feet. You are an adventurer, you should be out there, exploring, seeing new sights, meeting new people. Every time your thoughts drift back to your owner\'s big, furry, soft feet, you force yourself to think of the sky, to think of walking and moving and being alive. Bit by bit, you struggle to assert your mind, to remind yourself that you are not just an object. It\'s incredibly straining and difficult, and you feel like you have made barely any progress, when the mayor returns, sits down, and crosses his feet atop you.</p>Immediately, his scent and the warmth of his paws presses down into your mind, and your willpower fades and melts away. You are a good object. But a tiny bit of resistance remains. You can escape this, if you keep struggling.',
                        "outcomes": [
                        ]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'You are not a footstool! You have to focus and remember who you used to be. You may just be a leather-clad cube right now, but once you had legs, and...arms? Something like that, some sort of strange, uncomfortable bits sticking out, instead of the nice easy smoothness of a good footstool. You don\'t belong under some evil cat\'s feet, serving him, obeying him, right? Feeling his toes splay across your top, his musky paws stroking at your sides. Flushed with pleasure and sensation as he toys and teases with you, resting his tired feet on top of you. Using you to help him relax his big, gorgeous paws every day. Showing you what a good, obedient, loyal object you are. You belong here, after all. What were you thinking? Probably nothing. You don\'t need to think. Just be a happy, mindless object. This is where you belong.',
                        "outcomes": []
                    }
                }
            },{
                "id": "become_foot",
                "title": "Mayor Maine\'s Latest Intern",
                "subtitle": 'All of his previous interns ended up absorbed into his feet, but surely you are confident that won\'t be your fate too?',
                "type": "random",
                "requirements": [
                ],
                "icon": "footfetish",
                "results": {
                    "grizzpay": {
                        "text": 'You enter into the Mayor\'s office, asking to see him about a job. He\'s sitting behind his desk, leaning back on his thick leather chair as he looks at himself in a mirror and combs his thick, soft moustache. His bare feet are resting on his gleaming executive table, and you can\'t help but notice that his wide, soft paws have five toes on one foot and six on the other. An unusual mutation that is common on the breed of cats called Maine coons, a breed that the jolly yet sinister mayor closely resembles. He notices you looking, and grins a little.</p>"Hello there good sir! I hear that you\'re looking for some gainful employment. Can\'t tell you how happy I am to see a guest wanting to contribute to the development of my lovely little town", he says. You walk closer as he points to some papers on the table between his feet. You pick up a pen and start to read the papers, but the close proximity of the mayor\'s big soft paws, and the strange way he moves and flexes his toes in an almost hypnotic rhythm, makes it hard to focus on the words. Your vision keeps skipping over sentences as you take glances at the cat\'s feet. "Nothing to worry about, just the usual stipulations. I can promote you whenever you show you\'ve earned it, you are contractually bound to the job for as long as appropriate, and so forth. All very normal", he says. You nod, and find yourself signing almost robotically without thinking. The mayor quickly slips the papers away as soon as you do, and stands up. "Welcome to the team, intern!", he says with glee.</p>For the rest of the day you\'re not sure whether you just want to make a good impression in your new job, or whether it\'s some sort of hypnotic compulsion, but you trail around behind the mayor without ever leaving his side, and you immediately obey his commands as soon as he makes them. At first his orders are fairly normal office things. Fetch papers, make cups of tea, organise files. However, over time they start to get a little stranger. Inspect visitor\'s feet, check the mayor\'s carpet, brush his fur. You don\'t get any breaks, and even when you\'re sitting in the mayor\'s office, carefully running a brush through the thick fur on his round belly, you find yourself unable to question him. "You are doing great, new hire", he reassures you. "Why, you\'re obeying me so well you\'re practically like a body part", he continues. You blush at that, but still remain silent.</p>At the end of the day, you are exhausted and very ready to go home. The mayor, however, has other ideas. He orders you to follow him out of the office, and you tag along behind him like a confused puppy. He leads you all the way down past the other houses, to a larger one nestled against the high cliffs that border Dormaus town.</p>As you walk into the house, and step onto the thick carpet, the mayor orders you to drop your shirt. You do, and then your shoes, and socks, and pants. The deeper into the house you go, the more he orders you naked, and you just can\'t help yourself. You have to obey your boss. You soon enter into a palatial bedroom, where the mayor takes off his own clothes too, revealing his large round belly and his soft, furry cock and balls. He slides under the covers, and orders you to enter too - at the foot of his bed, by his paws. You are unable to resist, as you slide yourself under the sheets and curl up, confused in the dark with your boss\'s paws resting on your face.</p>When you wake up in the morning, you are more bleary, confused and dizzy than ever. You collapse out of the bed and land face-first on the carpet, only for the mayor to slide down to the edge of the bed and rest one of his paws on your naked back. You look to the side and see his other paw, the toes flexing. "That\'s right. On the ground, where you belong. Naked, of course. I never deal in footwear, after all, and you are my foot", he says. You are...what? Who are you? What are you?</p>"Raise my left toe", he commands. Obediently and immediately, you lift your left arm. "Now my right", he continues. Your right arm follows too. As you obey him, it seems to come more instinctively, your body reacting instantly without thought to his commands. His fur begins to flow down over your body as the weight on your back gets heavier. Your arms start to shrink, getting thicker and fatter. Your fists curl up and melt into your arms, leaving behind narrow slits for the mayor\'s claws. Your belly presses into the carpet and flattens, while your legs and lower body start to draw up and crush together, melting into his heel. Your confusion only grows when your head feels like it\'s about to split - and then it does. Your whole head separating into multiple objects, your face flattening and melting out, replaced by toe pawpads. You feel the mayor stretch his toes, stretch your body. He flexes his claws and they slide out from your skin and retract again with a strange, sensitive feeling. As he stands, you are pressed into the carpet. With each step he takes, you lose more of your mind. Carpet, then round smooth cobblestones, then the rough wood of his office. By the time he sits at his desk, you don\'t remember anything at all. You are just a foot. A big, soft cat\'s paw. He smiles and admires his feet. "There. Six toes on each paw. I much prefer that. You were a good intern", he says with a purr. You don\'t understand who he is talking about. You have always been a foot.',
                        "area": "fountain",
                        "trapped_desc": "Mayor Maine's foot is looking very large and handsome today.",
                        "trapped": 'You are nothing but the Mayor\'s foot. You exist to serve beneath him, carry his weight, and feel the ground underneath you.',
                        "outcomes": []
                    }
                }
            },{
                "id": "cat_vore",
                "title": "A Mouse in the Mayor's Office?",
                "subtitle": "As you scurry into his office, Mayor Maine’s eyes bolt up from the papers on his desk and the gargantuan cat fixes his gaze on you. His toes flex in anticipation as he eagerly rubs his paws on the carpet. It’s been some time since a mouse so eagerly entered his lair. [From Cedo]",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 3,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "vorefetish",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'Well, hello adventurer," he booms. "Why don’t you come closer?" </p></p>You know you should run straight back out the door, but you freeze in place as you look up into the Mayor’s glowing eyes. Your heart races as your little feet drag you forward until the great cat is towering over you with a vicious grin.</p></p>"Such a good, obedient mouse," Mayor Maine says as he lifts his foot over you. "You know you belong beneath my lovely paws." He knocks you onto your back against the carpet, engulfing your body in his massive fluffy foot as he pins your little head between his toes. The cat lets out a sigh of pleasure as he presses his foot down and rubs his toes over your face. He releases his enchanting hold on you, letting you hopelessly squirm and wriggle against him.</p></p>Mayor Maine slides his foot down to pin your little chest beneath his big toe. You watch in horror as his claw slides out until the sharp point is pressed against your little pink nose. Above you, the cat has pulled out his cock and begun stroking it while he toys with you. He opens his shirt and rubs the colossal round belly looming over you and licks his chops as he says, "So many visitors are eager to worship my paws, but that seems a waste of such a delicious little morsel."</p></p>He grasps you in his toes and lowers himself to the ground to lie on his back, lifting his foot up to drop you in the center of his belly. You start to run, racing across the soft fur that covers the cat’s gut, but he easily bats you back to the center over and over again as you attempt to escape. Mayor Maine laughs and strokes his furry cock, playing with you like that until you’re slowly limping across his vast expanse like the defeated prey you are. </p></p>With one last burst of determination after being knocked down again, you try to rise and escape when the world beneath you shakes. Mayor Maine’s belly rumbles hungrily and he scoops you up in his hand and dangles you over his glistening sharp teeth as he says, "I could play with a lovely little toy like you forever, but you know what they say…" Mayor Maine grins. "You can’t have your mouse and eat it too."</p></p>The cat drops you into his gaping mouth and slams his jaw shut behind you. You squirm against his massive coarse tongue, darting around his mouth and trying to escape, but your scurrying just makes Mayor Maine moan in pleasure and makes his cock harder. Salivating, the cat drenches you in his saliva, tossing you about with his nimble tongue.</p></p>A ray of light shines in when Mayor Maine parts his teeth and lets out a deafening moan. You have one chance and you take it, but just as you slip out the cat squeezes his teeth against your soft stomach to grab you. You’re trapped, a wet mouse hanging from his mouth helplessly as his massive eyes stare past his nose at you. He licks your little toes and watches you squirm against his powerful jaws until his cock is nearly ready to burst.</p></p>Mayor Maine throws back his head as he opens his jaws wide, sending you tumbling to the back of his mouth where, with a gulp, his powerful muscles grasp your feet and drag you down his throat. The feeling of your wriggling little body working its way down to his stomach pushes him over the edge. He pumps thick ropes of cum all over his belly and then lies there, rubbing it contentedly until he drifts off for a little cat nap.',
                        "area": "belly",
                        "outcomes": [
                        ]
                    }
                }
            },{
                "id": "mayor_random",
                "title": "Sit in the Waiting Room",
                "subtitle": "There are always several other people waiting to see the mayor. Some of them seem to have been waiting forever.",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "mayor_intern": {
                        "text": 'You enter the town hall to see Mayor Maine guiding around a new intern. The mayor is dressed in his usual business suit and sash, and a thin tiger with messy brown hair is following him around, looking stressed out. "Grab those papers", says the mayor, and the tiger nervously does. "Sign that form. Straighten your tie. Greet that adventurer", he moves on. Command after command hits the poor tiger in a never-ending stream, clearly fraying his nerves. Then the mayor leads him into his office, and takes a seat in his huge leather armchair. </p>"Put down those papers. Take off your shirt." says the mayor. The tiger does so, but his expression as he starts to unbutton his shirt and throw it away, revealing his white belly fur, is one of shock and surprise. "Good to see that you\'ve gotten so used to orders that you respond without thinking, boy" says the mayor, with a cruel and wide grin. "Take off your pants and get under my foot", he commands, and the tiger pushes down his pants and crawls over the carpet to get under the mayor\'s wide paw. Despite the fear-sweat on his face, clearly part of his is enjoying this, because he is quite erect. </p>The mayor presses down his foot over the top of the tiger\'s head, his toes spread wide, and starts to rock his footpaw back and forth. The tiger\'s body begins to shrink, and his flesh seems to shimmer and grow soft, allowing the mayor\'s foot to sink into his body. "Lift the left toe on my left foot", Maine says, and the tiger lifts his left arm then drops it. The mayor strokes his crotch as he pushes his feet deeper into the tiger\'s body, spreading his control all throughout his flesh. The tiger\'s head sinks into one of the mayor\'s toes, while his arms are sucked up into adjacent ones. His lower body disappears into the soft fur at the back of the mayor\'s foot, and the cat lifts his paw to show off the face on the underside of his toe. </p>He flexes his foot, as the tiger\'s features start to fade away. "Perfect. Obeying me as effortlessly as my own body part. You were a great intern, my boy" he says.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "complaint": {
                        "text": 'There is a commotion going on in the mayor\'s office today. You stand at the corner and peek in to look closer and see what\'s happening. A tall and burly adventurer is pounding his fists on Mayor Maine\'s desk, and shouting furiously at the cat. The mayor is just smiling under his fluffy moustache, looking completely unpeturbed. "My wizard is a pumpkin, my thief is some dog\'s sock, and now you\'re telling me that there\'s nothing you can do about it?! I\'m not letting you walk all over me, you fat fuck!" the adventurer roars. </p>The mayor strokes the tip of his moustache and smiles widely. "Oh I don\'t need you to let me, dear boy." he says, with a sinister purr. The mayor stands up, and presses one hand on the adventurer\'s chest, before shoving him firmly onto his back. The powerful human protests and struggles, but somehow the chubby cat is controlling him easily. He just lies on the floor helplessly as the mayor lifts his large furry paw and presses it down on the human\'s chest. "I\'ll be walking over you every day", the mayor says. The human pants and shivers as he starts to sink into the deep, plush and soft carpet. </p>His skin turns the same red and brown as the carpet pattern, as he looks almost hairier - except the hairs are growing, thickening carpet fibres. He struggles, but cannot escape. Each time the mayor steps on his body, walks over his chest and face, he is absorbed more and more. His limbs fall apart into plush carpet fabric. His features fade into the pattern, and his equipment disappears. Finally, the mayor is left walking through a thick and fluffy patch of carpet, which wiggles and moves as if it were alive.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "mayor_punch",
                "title": "Punch the Mayor",
                "subtitle": "Unwise. Fail or succeed, either way he'll send you immediately to jail if you do this. There is nothing to be gained from this action.",
                "type": "random",
                "requirements": [
                ],
                "icon": "guilt",
                "results": {
                    "mayor_intern": {
                        "text": "You walk up close to Mayor Maine's desk, and he looks up at you with his smug smile. With all your strength, you lunge forward with your strongest punch.</p>Inches from his face, you find yourself stopped. Something is wrapped around your wrist, and your legs. You look down to see that the mayor's sash has come to life, and is coiled around your arm like a snake. Below you, your feet feel glued to the carpet. Looking down, you see that the carpet itself has risen like a slime, and engulfed your ankles. You are suddenly dragged backwards, as the carpet pulls you down and grips you by the arms and legs.</p>Maine stands from his chair and walks over to you. His huge, soft bare paw presses down on your chest as he looks at you and shakes his head. \"Ah, such terrible impoliteness. I don't blame you, of course, some people simply aren't ready for polite society. Fear not, my friend, for I know a place that will suit you just fine\", he says. He strokes his foot over your face for a moment, before returning to his desk and taking a quill pen out, to write a letter.</p>\"Feel free to proceed out of my office at any time. In a few moments Warden Vicious, a personal acquaintance of mine, will be fully informed of your needs\", he says. The carpet carries you out from his room like a strange slug, and tosses you into the street.",
                        "outcomes": [
                            {
                                "parameter": "guilt",
                                "quantity": 5,
                                "change": "set"
                            }
                        ]
                    }
                }
            }
        ],
        "npcs": [
            {
                "id": "maine",
                "name": "Mayor Maine",
                "description": "Mayor Maine is a very chubby and friendly cat. He wears a pair of small glasses, and his fluffy moustache is always twitched into a grin.",
                "icon": "maineicon",
                "dialogue": [
                    {
                        "input": "What is your name?",
                        "output": '"My name is Maine, traveller! It\'s always a delight to meet a new friend."'
                    },
                    {
                    	"input": 'What is your job?',
                        "output": '"Why, I am the mayor of this wonderful little town! I keep everything in order and organised. It is difficult work, but satisfying!"'
                    },
                    {
                    	"input": 'See you later.',
                        "output": '"I hope you have a wonderful time in my little town."'
                    },
                    {
                    	"input": 'How is your cock?',
                        "output": 'The cat laughs and winks at you. "Well, I might not be as long as some of these young bucks, but I promise I know how to use it!"'
                    },
                    {
                    	"input": 'What are your paws like?',
                        "output": 'The mayor\'s eyes suddenly gleam, and his ever-present smile stretches out into a huge grin. "My feet? Oh what a peculiar question! Why, I couldn\'t say how they are. Perhaps you could check them for me?" He leans back on his chair, and rests both his paws on his desk. The chubby toes are soft and look warm and touchable, and the soles are cushiony and a faint peach colour. His voice is suddenly deeper, and darker. "You like this, boy? I bet you are rock hard thinking of my feet on your face, holding you down on the floor where you belong." He sighs and puts his feet back on the ground. "Ahem. Do enjoy your stay in our town!"'
                    }
                ]
            }
        ]
    }