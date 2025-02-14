var area = {
        "title": "shop",
        "position": [0.66,0.77],
        "header": "The Want of a Nail General Store",
        "subheader": 'The walls and floor of this store are stocked with an assortment of strange odds and ends. Bags of flour sit next to chipped statues, and on the shelves, bottles of vinegar share space with wooden masks and stuffed animals.',
        "events": [
        	{
                "id": "shop_job",
                "title": "Work at the Store",
                "subtitle": "Customers always need tending to.",
                "type": "statcheck", //or random
                "stat": "charm",
                "difficulty": 2,
                "requirements": [
                    {
                        "parameter": "mikhail_interest",
                        "value": 2,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "muscat_1",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'Mikhail leaves you in charge of the store for a day. His instructions are to listen to what customers need, and make sure they buy the most appropriate charm or item for their problems.</p>You wait and dust the counters for a little while, and soon an adventurer comes in. He\'s scrawny and thin, and barely fits in his armor. He asks for something to make himself big and tough, and you recommend an enchanted loincloth. It takes some convincing, but he eventually buys it and leaves. Next comes a guy who wants to blend in. Your recommendation of a colourful chameleon coat comes with some resistance, but he eventually takes it.</p>The next day, a massive burly minotaur bursts into the shop with a huge grin on his face, stinking of sweat and musk. "Me big! Me strong now!", he bellows, before shaking your hand. A few moments later, something taps you on the shoulder. You turn and look up to see a huge chameleon appear, his skin changing to green from its invisible hue. He grins and taps you with his tail again, while he dangles from the ceiling. "Excellent choice! Loving this new body, my friend", he says, before disappearing again. Seems like you\'re good at this!',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            },
                            {
                                "parameter": "mikhail_interest",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'Mikhail leaves you in charge of the store for a day. His instructions are to listen to what customers need, and make sure they buy the most appropriate charm or item for their problems.</p>You wait and dust the counters for a little while, and soon an adventurer comes in. He\'s scrawny and thin, and barely fits in his armor. He asks for something to make himself big and tough, and you recommend an enchanted loincloth. Unfortunately, you can\'t quite convince him to buy something so embarrassing. He buys a set of oversized armor with a "Grow to Fit" curse on it instead. Next comes a guy who wants to blend in. Your recommendation of a colourful chameleon coat comes with too much resistance, and instead he decides to go for a plain muddy long coat.</p>The next day, a horrible stench flows into the shop. The door bursts open to reveal an enormously fat black pigman. He storms in, snorting and stinking, and demands a refund. That armor didn\'t make him tough, it made him fat! Then you feel something clutching at your ankle. You look down to see an arm made of mud, which makes some obscene gestures at you. Looks like that guy blended in a bit too much. It takes a lot of arguing to get them to go away, and you feel horribly embarrassed.',
                        "outcomes": [{
                            "parameter": "outcast",
                            "quantity": 1,
                            "max": 2,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "shop_payday",
                "title": "Payday",
                "subtitle": "It's time for payment for working at the shop.",
                "type": "random",
                "requirements": [
                	{
                        "parameter": "mikhail_interest",
                        "value": 1,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "mikhailicong",
                "results": {
                    "grizzpay": {
                        "text": 'Mikhail slaps you firmly on the back while you\'re organising some products, and you bump into them and spill them everywhere. He picks you up, and sits you on his lap. "Hey there kid, you\'ve done a real good job lately. Got you some pocket money", he says in his deep gruff voice. He drops a heavy bag of coins into your hand, and then ruffles your hair affectionately. "Keep up the good work!"',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 15,
                                "change": "add"
                            },
                            {
                                "parameter": "mikhail_interest",
                                "quantity": 0,
                                "change": "set"
                            },
                            {
                                "parameter": "mikhail_connection",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "daddy_mikhail_male",
                "title": "Daddy Mikhail",
                "subtitle": 'As you browse the little shop, you start to notice little photographs tucked in between the goods and trinkets. They all contain the tall and distinguished dog shopkeeper, Mikhail, but he\'s with a different younger dog in each image. His stern grey-streaked moustache and silver-dusted fur is contrasted by the youthful energy of the other dogs, all the same breed as him, and all roughly in their twenties, with similar fur patterns and markings. </p>You get curious, and ask Mikhail what the photos are of. He looks up from a drawer he is organising, and smiles. </p>"Those are my sons, of course. I have many eager and loyal sons, and they\'d do anything for their daddy." That last word makes you blush a little, and he raises one bushy eyebrow. </p>"Is something the matter, son?" he says, putting emphasis on the last word. His eyes stare between your legs, and a bit of a smirk makes his fluffy muzzle twitch. "If I didn\'t know better, I\'d think you wanted a daddy of your own, boy. Is that what you want? To come sit on daddy\'s lap?" </p>Do you admit your arousal to the handsome german shepherd?',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "mikhail_connection",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "species",
                        "value": 4,
                        "comparison": "nequal" //default greater
                    },
                    {
                        "parameter": "gender",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "mikhailicong",
                "results": {
                    "mikhailsex": {
                        "text": 'Mikhail sits down on a large leather armchair, spreads his legs, and pats his thigh. “Come on now, boy. Show your daddy some love.” You walk over nervously, and sit down carefully on the dog\'s lap, feeling the bulge of his cock pressing out from his pants. </p>He wraps his powerful arms around you, and presses you against his chest. You didn\'t realise how tall he was. He looks down at you through his glasses, and leans forward. His moustache tickles your face as his long red tongue slides into your mouth. As he kisses you, his furry arm strokes along your chest, up and down, teasing and stroking you. Then it slides down to his pants, and reaches inside, to slowly pull out his cock. It stands proud and erect in the air, long and firm. </p>“Tell me you want it, son. Say you want daddy\'s cock.” You gulp and pant, then find yourself saying it out loud. “I want daddy\'s cock”, you stammer, and he growls with lust as he lifts you up, then pulls you down as he plunges his cock into your ass. </p>Your rear stretches around the older dog\'s shaft, and he growls a little as he thrusts in and out, his cock throbbing within you. Your heart pounds and your face is flushed with the pleasure of his shaft ramming your ass. You can feel your tailbone start to twitch, wiggling as it grows. It lengthens out behind you, and starts to wag from side to side, before growing fluffy fur. That same fur spreads up your back, where Mikhail strokes his clawed hands through it, admiring the same patterns and colours as his own furry body. Your face grows, pushing into his kiss as you grow a muzzle of your own. Your ears grow longer, develop fur, then flop over like a dog\'s. Your hands and feet throb for a moment, forming rough pawpads, and your nails become hard and sharp as they transform into claws. </p>Your whole body is changing, taking on aspects of your daddy\'s form, as you become a dog, the spitting image of Mikhail as a younger man. </p>He chuckles, and grips your shaft, stroking and pumping it as it turns red and pointed. The base swells out and inflates, forming a doggy knot, which he squeezes firmly in his hand. You whimper and bark with lust, and he growls at you. </p>“Cum for your daddy, pup.” You cannot disobey. You howl and bark, your cock pulsing and spraying out a thick load of cum into the air, that splatters over his shirt and over your furry chest. Then he holds you firmly and growls, and you feel his own cock release its musky load as a rush of heat deep in your rear. </p>You are left panting and dizzy, until he carefully pulls his cock free from your rear and allows you to stand. </p>“Good boy, son. You make your daddy proud.” he says. Your tail wags happily to hear your dad\'s praise.',
                        "descriptionchange": "This adventurer is a furry, eager dog.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 4,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "daddy_mikhail_female",
                "title": "Daddy Mikhail",
                "subtitle": 'As you browse the little shop, you start to notice little photographs tucked in between the goods and trinkets. They all contain the tall and distinguished dog shopkeeper, Mikhail, but he\'s with a different younger dog in each image. His stern grey-streaked moustache and silver-dusted fur is contrasted by the youthful energy of the other dogs, all the same breed as him, and all roughly in their twenties, with similar fur patterns and markings. </p>You get curious, and ask Mikhail what the photos are of. He looks up from a drawer he is organising, and smiles. </p>“Those are my sons, of course. I have many eager and loyal sons, and they\'d do anything for their daddy.” That last word makes you blush a little, and he raises one bushy eyebrow. </p>“Is something the matter, lass?” he says curiously. His eyes stare deep into yours, and a bit of a smirk makes his fluffy muzzle twitch. “If I didn\'t know better, I\'d think you wanted a daddy of your own, lass. Is that what you want? To come sit on daddy\'s lap?” </p>Do you admit your arousal to the handsome german shepherd?',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "mikhail_connection",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "species",
                        "value": 4,
                        "comparison": "nequal" //default greater
                    },
                    {
                        "parameter": "gender",
                        "value": 2,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "mikhailicong",
                "results": {
                    "mikhailsex": {
                        "text": 'Mikhail sits down on a large leather armchair, spreads his legs, and pats his thigh. “Come on now, girl. Show your daddy some love.” You walk over nervously, and sit down carefully on the dog\'s lap, feeling the bulge of his cock pressing out from his pants. </p>He wraps his powerful arms around you, and presses you against his chest. You didn\'t realise how tall he was. He looks down at you through his glasses, and leans forward. His moustache tickles your face as his long red tongue slides into your mouth. As he kisses you, his furry arm strokes along your chest, up and down, teasing and stroking you. Then it slides down to his pants, and reaches inside, to slowly pull out his cock. It stands proud and erect in the air, long and firm. </p>“Tell me you want it, girl. Say you want daddy\'s cock.” You gulp and pant, then find yourself saying it out loud. “I want daddy\'s cock”, you stammer, and he growls with lust as he lifts you up, then pulls you down as he plunges his cock into your pussy. </p>You feel stretched around the older dog\'s shaft, and he growls a little as he thrusts in and out, his cock throbbing within you and sliding along your sensitive inner walls. Your heart pounds and your face is flushed with the pleasure of his shaft ramming you rough and hard. You can feel your tailbone start to twitch, wiggling as it grows. It lengthens out behind you, and starts to wag from side to side, before growing fluffy fur. That same fur spreads up your back, where Mikhail strokes his clawed hands through it, admiring the same patterns and colours as his own furry body. Your face grows, pushing into his kiss as you grow a muzzle of your own. Your ears grow longer, develop fur, then flop over like a dog\'s. Your hands and feet throb for a moment, forming rough pawpads, and your nails become hard and sharp as they transform into claws. </p>Your whole body is changing, taking on aspects of your daddy\'s form, as you become a dog, a beautiful daughter for your loving daddy. </p>He chuckles, and strokes your breasts, squeezing and gently teasing them as they are covered in fur. You whimper and bark with lust, and he growls at you. </p>“You love your daddy, don\'t you, pup. Howl for me.” You cannot disobey. You howl and bark, and as you do, the pleasure of his cock deep inside you becomes too much, and your body heats up as a shuddering orgasm rolls from your toes to your head, filling you completely. Then he holds you firmly and growls, and you feel his own cock release its musky load as a rush of heat deep into your pussy. </p>You are left panting and dizzy, until he carefully pulls his cock free from you and allows you to stand. </p>“Good girl, lass. You make your daddy proud.” he says. Your tail wags happily to hear your dad\'s praise.',
                        "descriptionchange": "This adventurer is a furry, eager dog.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 4,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "uniform",
                "title": "Dress Codes",
                "subtitle": "Two gryphons are in Mikhail's store. They are wearing scruffy and crumpled guard uniforms, and their breath stinks of booze so much that it can be smelled from across the room. Mikhail looks at the edge of his patience.",
                "type": "random",
                "requirements": [
                   
                ],
                "icon": "default",
                "results": {
                    "Orc Absinthe": {
                        "text": "One of the gryphons nudges the other with his elbow and makes a comment about the low quality of 'downlander' steelwork. The other sniggers and reaches for a sword on the wall, but his arm sways and accidentally knocks one of Mikhail's photo frames to the floor.</p>\"A-TEEEEEN-SHUN!\", Mikhail suddenly bellows. The two gryphons look around in a panic and bump into one another. Mikhail strides towards them while smacking a rod in his hand. \"What sorry mess am I looking at here? You call yourselves representatives of Horn?\", He yells. The taller gryphon stammers, but the shorter one pokes Mikhail in the chest. \"Hey, who do you think you are, comrade?\", The gryphon grunts. Mikhail reaches up to his lapel and bends it back, revealing an ancient metal badge. The two gryphons recoil like they have been burned, and suddenly salute. The taller one goes pale and looks like he might faint. Mikhail slaps his rod against their chests, making them puff up and stand straighter.</p>\"Shirt unbuttoned? Demerit! Pants not ironed. Demerit! Buttons not polished! DEMERIT!\", He barks. With each word the gryphons cringe and look more and more upset. \"Drinking in uniform, though? In my day I'd have you dishonourably discharged so fast your goddamn beaks would spin! Take off those uniforms, you are a disgrace!\", He roars. The tall gryphon whimpers and the shorter one replies \"Yes, Commander!\"</p>They both drop their jackets and unbutton the tunics beneath, revealing their soft, feathery chests. They then pull their belts out from the loops on their pants and lower them, leaving them standing only in underpants. The taller one has heart-print boxers, and the short one has plain white trunks with a visible tent in the front. Mikhail pokes the erection with the rod in his hand, and the gryphon looks down shamefully.</p>\"The two of you are going to clean this place until you have earned back every single demerit, and if you are lucky, I will let you have those uniforms back instead of just turning you into new ones!\", He barks. The gryphons salute again and immediately grab a brush and mop, bumping into each other in their eagerness to serve.</p>Mikhail sees you watching and gives you a wink. His badge is still visible for a moment before he folds his lapel back down. It's a metal eagle holding a broken spiral horn in its mouth - the flag of Horn. Mikhail used to be a Horn officer?</p>He returns to his seat and props his feet up on the back of the shorter gryphon, who is scrubbing the floor. The gryphon blushes hotly and shudders before returning to his chore.",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "shop_random",
                "title": "Loiter Downstairs",
                "subtitle": "It's not loitering if you read the labels on the products and stuff.",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "adventurer_underwear": {
                        "text": 'You see someone unloading gear and selling it off to Mikhail. The adventurer is carrying an enormous sack of goods, and he slides over a breastplate, boots, swords and many other things. He grabs something from the bottom of the bag and slides it over - a large pair of underwear. There is a face on the front, which struggles and whimpers. "Oh, this one isn\'t quite finished." he says, apologetically. </p>Mikhail just grins and drops his pants, then takes the living underwear and pulls it up over his crotch. His cock and balls bulge out the front of the underwear, and the face changes from terror to a look of lust and arousal. As Mihail strokes and rubs the front of his bulge with his big rough hand, the face slowly fades, the person within accepting their fate and giving in to the dog\'s warmth and musk. "There ya go, all sorted. I\'ll pay extra for these ones." he says. The adventurer leaves with a grin and a bulge in his own pants. He even tosses you a few coins too.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "rubber_bun": {
                        "text": 'There is a rabbit trying to sell something to Mikhail as you come into the shop today. It\'s a large bottle full of shiny pink fluid. Mikhail\'s arms are crossed, though, and he\'s frowning. "Don\'t mess with potions and stuff in this shop, son. Take it to the fox peddler, I only sell equipment and objects. No perishables." he says. The rabbit sighs with disappointment, and turns to leave. His long foot catches on the hook of an umbrella on the floor, and he yelps and trips over. </p>The potion shatters, coating his chest with shiny pink goo. He squirms as he tries to pull it off, but it sticks to his hands too, flowing down them and spreading up his arms and down his torso. His hands are left squeaky, shiny mittens, and his belly becomes round and smooth. It flows over his crotch, spreading around his balls and making his cock harden and stiffen, before the goo solidifies it into what looks like a big rubber dildo. His legs are coated too, and he starts to moan and drool. Goo crawls up his head, spreading over his features and into his mouth, and his face is sealed into an O shape as he stops moving. The bunny lies still, a pink rubber sex doll, waiting to be used. </p>Mikhail nods and strokes his chin. "Now this I can sell", he says with satisfaction.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "fathers_day": {
                        "text": 'Bonacieux the wolf priest is in the store, sitting behind the counter and chatting to Mikhail like an old friend. They laugh about something, and together they both laugh, and clink a pair of wine glasses together. You walk over, and look down to see that the two old men are pantsless. Kneeling before them is a pair of furry adventurers. A german shepherd, clearly one of Mikhail\'s transformed "sons", is nuzzling and kissing the wolf\'s huge furry grey balls, while a slender and handsome wolf is licking and stroking Mikhail\'s heavy dog cock. </p>The two old men see you looking, and wink at you. "Bony and me like to get together every now and then and trade our boys.", Mikhail says. Bonacieux smiles too. "Mikhail the town dad and Father Bonacieux – we call it Father\'s Day!" he says, and then grips the dog\'s head between his legs and howls as he fills the eager man\'s muzzle with hot, thick wolf cum.',
                        "outcomes": [
                            {
                                "parameter": "wine_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "im_late": {
                        "text": 'You walk into the store and see an exhausted rabbit clerk hopping around lazily with an armful of merchandise while Mikhail, the german shepherd shopkeeper, stands at the counter and looks down over his grey-streaked mustache to tinker with a watch. Startled, the bunny jumps into air when Mikhail shouts, "When you finish sorting those, get started on that bag of socks thieves keep getting into." </p>The rabbit drops everything into a box with a huff and hops up onto the counter in front of Mikhail and whines, "I\'m late already! I was supposed to be off ten minutes ago." </p> The large german shepherd puts down his watch and looks at the little bunny with a warm smile, but you catch a glimpse of a brief glow in his eyes. In his deep voice, Mikhail says, "Well, I\'m sorry about that. It\'s been hard keeping track of the time ever since my watch broke."</p>The rabbit smiles up at his boss and nods, "I just have an important date to get to." But he suddenly falls forward on the table in front of Mikhail\'s huge muscle gut, with his arms straightening out over his head. The rabbit\'s head and chest start squeezing together into a perfect circle as he cries out, "What\'s happening to me?"</p>The shopkeeper grins down at the transforming rabbit and chuckles, "Since keeping track of the time is so important to you, I thought you wouldn\'t mind helping me."</p>You watch intently as the rabbit\'s arms and legs fuse together, shifting into a beautiful brown leather band. Mikhail flips him over as the bunny\'s head melts into the perfect circle of his former chest and becomes a glass and metal watch face. The rabbit\'s nose pokes out at the center and his buck teeth stretch to form the minute and hour hands.</p>The large dog picks up his former employee and wraps him around his burly wrist with a grin. He remarks, "It looks like you\'re going to be very late." You catch a glimpse of the simple watch face on Mikhail\'s wrist and the only hint that it was ever anything else is the strange, blinking pair of eyes that flank the spot where the hands meet.</p>Mikhail looks at his watch and looks at you. He smiles and asks, "You don\'t happen to need a job. Do you?" (Guest event from Dccurious)',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "stache": {
                        "text": "Mikhail is discussing something with one of his customers, and you listen in curiously. The short rabbit he's talking to seems very excitable, and is bouncing and hopping from paw to paw. \"So, yeah, that's why I just, why I just think you're the hottest dad in town, sir\", he says with a nervous grin.</p>Mikhail chuckles and leans back in his chair, before stroking his beard and gently brushing his claws through his thick, soft moustache. \"You know what the trick to being a handsome dad is, kid? The moustache\", he says. The rabbit nods, utterly entranced. \"It has to be thick, and well-groomed, and ideally just a little bit ticklish, as it brushes over the body of an obedient and horny friend\", he says. His moustache twitches as he grins, and the rabbit moves forward, inching closer and closer to him. He places his hands on the bunny, and lifts him up, before nuzzling and stroking his muzzle across the short rabbit's body. The rabbit's paws kick and flail, and he whines and whimpers as Mikhail's moustache brushes up against his sensitive inner thigh, along his bare panting belly, and over his neck and cheeks. \"I...I want to be your moustache, daddy!\", he yelps. Mikhail smiles, and starts to press the rabbit into his muzzle, his hands pushing down on his back. The rabbit's soft, fluffy white fur starts to turn brown, and thick, and bristly. His limbs soften, losing definition as they become brushy tufts of fur. Mikhail starts to stroke his claws through the rabbit's thick furry body, as he clings desperately to the dog's face, his entire body fusing with the end of Mikhail's muzzle.</p>As he is entirely overcome with the fuzzy fur he is becoming, the rabbit humps and thrusts, trying desperately to cum, but soon his motions slow and stop. His face and head become just more fur and bristly fuzz, as Mikhail's fingers smooth and groom and adjust him, combing him into his moustache until there is no sign he was ever there, except that his facial fuzz is now thicker and bushier than ever.",
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    }
                }
            }
        ],
        "npcs": [
            {
                "id": "mikhail",
                "name": "Mikhail",
                "description": "Mikhail is an older german-shepherd dog. His fur is dusted with grey hairs, as is his fluffy moustache.",
                "icon": "mikhailicon",
                "shop": {
                	"trades": ["chips_1", "muscat_1", "watervine_1", "nosering", "magic_hat", "fancyhat", "iron_helm", "old_sword", "comb", "candle_glory", "dwarf_axe", "magic_boots", "paw_musk", "prison_shirt", "water_cloth", "useless_raccoon"],
                	"buys": [],
                	"sells": []
                },
                "dialogue": [
                    {
                        "input": "What is your name?",
                        "output": '"My name is Mikhail, kid. Though some call me Daddy."'
                    },
                    {
                    	"input": 'What is your job?',
                        "output": '"I own this little store here. It may not be much, but I am as proud of it as I am of my sons."'
                    },
                    {
                    	"input": 'What is dust?',
                        "output": '"Well, back in the day there used to be a lot of fuss over what kinda coins and barters to use for shopping. Eventually everyone decided that we\'d just trade using dust. It\'s the stuff that is left if you disenchant any item, sort of like magic powder."'
                    },
                    {
                    	"input": 'See you later.',
                        "output": '"Travel safely, adventurer. Make sure to wrap up warm and get enough to eat."'
                    },
                    {
                    	"input": 'Can I see your cock?',
                        "output": 'The old dog smiles and shakes his head. "It\'s quite handsome, I am told. Adventurers these days, so forward!"'
                    },
                    {
                    	"input": 'What are your paws like?',
                        "output": 'Something about that question makes the dog laugh a little darkly. "Oh, hard-working and musky, I assure you. Though only bad boys get punished with my paws. Keep your hands off the merchandise and we will have no problems."'
                    }
                ]
            }
        ]
    }