var area = {
        "title": "makarna_market",
        "header": "Sea Gate Road",
        "nomap": "You don't know your way around this area yet. You'll have to navigate on foot.",
        "subheader": 'Beyond the dock gates, a wide road leads up through the city, ending at a second, larger and even more intimidating gate. Bumping up against the walls of the city are many huge windowless storage buildings, but beyond those there is a thriving marketplace, with vendors plying their wares to all who wander past. A few moments of travel let you sample scents of food and spices from all over the world, along with hearing the calls of mounts for sale and exotic birds for companions.',
        "events": [
            {
                "id": "gototraining",
                "title": "Go to the Silk Market",
                "subtitle": "The market continues all along a second street.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You weave through the busy street towards the Silk Market.",
                        "area": "makarna_silk_market",
                        "outcomes": []
                    }
                }
            },{
                "id": "gotodocks",
                "title": "Go to the docks",
                "subtitle": "There is a steady flow of workers and travellers coming from the western docks",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You weave through the busy streets and head for the docks.",
                        "area": "makarna_dockyard",
                        "outcomes": []
                    }
                }
            },{
                "id": "hookah",
                "title": "The Hookah Lounge",
                "subtitle": "One building along the market square seems to have an open-plan design, with no walls, only large pillars. Within, cushions and carpets make a comfy-looking seating area, dotted with many tall, ornate hookahs. A large number of lizardpeople of various colours and shapes are lounging in the shade, filling the air with fragrant smoke.",
                "type": "statcheck", //or random
                "stat": "magic",
                "difficulty": 40,
                "requirements": [
                ],
                "icon": "tffetish",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "As you walk into the seating area, several of the lizards turn their heads and give you a grin. One of them near where you entered, a particularly fat spotted monitor lizard, blows a plume of purple smoke in your direction.</p>You are unsure where to sit, and the clientele is giving you a strange vibe in here. As you look around, you see a tall, slender yellow lizard beckoning you over. There's an empty space next to him with some comfortable-looking cushions. You walk over and sit down, and the lizard yawns and blows out a plume of blue smoke.</p>He turns his long neck to you and gives a lazy smile. He's wearing only a blue shirt, and his bottom half is completely bare. He spreads his yellow legs slightly, revealing his pale creamy underbelly, and his large, half-erect soft shaft.</p>\"Hey there friend. New to the lounge, I take it?\", he says. You nod, and he passes you a small silver pipe, which is attached by a thin hose to the glass hookah beside him. You place it in your mouth and breathe in. A smoky, spicy flavour flows out from the pipe and into your mouth, its warmth flowing down into you and making you immediately start to feel relaxed. You find yourself leaning back against the cushions and sighing. Your aches and pains melt away, you body feeling soft and light. You slowly breathe out, letting a long plume of smoke ooze from your mouth as you grin.</p>The lizard leans down over you, his head resting on your chest as he idly strokes and touches his hand across your belly. \"Feels great, doesn't it? The calm, relaxing smoke. Light, empty, floating. Don't you think it would be good to be like that? No worries or cares. Just floating, swirling. Endless warmth and faint aroma, a carefree life without thoughts, only comfort...\", he says. That does sound great, and you notice a certain wistfulness in your scaly friend's eyes. You smile and take another deep lungful of the fragrant smoke, before then turning and pressing him down onto the cushions under you.</p>You press your face to his, and slowly exhale the smoke into his mouth. He is surprised at first, but then smiles and lets you give him a deep, smoky kiss.</p>You keep blowing the smoke into him, while you also stroke your hands across his body. His shirt lifts easily, letting you touch and feel his smooth, cream coloured chest. He shivers in pleasure, smoke billowing out from both of your mouths and spreading around you.</p>Something about this lounge feels very odd indeed. As you stroke and touch him, feeling his body, you feel more and more light and carefree. Your hand strokes along his thighs, and your skin becomes pale and wispy. You squeeze between his legs and feel him growing hard, and smoke pours endlessly from your mouth. His tail lifts up and wraps around you, squeezing you firmly, and you press your bodies together tighter than ever.</p>With one long, deep, utterly relaxing breath, you let go of your worries and cares, and feel your body melt away and fall apart into smoke. Flowing into the lizard's open mouth, sliding across his tongue and down his throat.</p>You feel his body all around you, as you fill him deeply. Every inch of you sliding up into his nostrils and down his throat, making him squirm and wriggle with delight. He strokes and squeezes his shaft, arching his back on the cushions as you push your way inside him.</p>For a moment, you can feel his entire body around you, and then you can feel what he is feeling too. Opening your eyes and looking up into the smoky ceiling, feeling your large reptilian hand around your twitching throbbing shaft. Your mind and his wrestling for control over his body...and you winning. With a rush of messy, warm pleasure, his cock erupts cum all over your shared belly, and you exhale. Blowing out his mind and essence, letting him flow out of you as a creamy curry-coloured fog of smoke. He billows out into the air, and you sigh with the warmth and pleasure of your exchange.</p>You sit up, feeling this smooth, lanky new body, and shiver a little as the yellow smoke tingles your cheeks. You get the feeling the lizard didn't mind becoming smoke one bit.",
                        "descriptionchange": "This adventurer is a lanky, smooth lizard person, with creamy curry-coloured scales and a soft white underbelly.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 52,
                                "change": "set"
                            }
                        ]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": "As you walk into the seating area, several of the lizards turn their heads and give you a grin. One of them near where you entered, a particularly fat spotted monitor lizard, blows a plume of purple smoke in your direction.</p>You are unsure where to sit, and the clientele is giving you a strange vibe in here. As you look around, you see a tall, slender yellow lizard beckoning you over. There's an empty space next to him with some comfortable-looking cushions. You walk over and sit down, and the lizard yawns and blows out a plume of blue smoke.</p>He turns his long neck to you and gives a lazy smile. He's wearing only a blue shirt, and his bottom half is completely bare. He spreads his yellow legs slightly, revealing his pale creamy underbelly, and his large, half-erect soft shaft.</p>\"Hey there friend. New to the lounge, I take it?\", he says. You nod, and he passes you a small silver pipe, which is attached by a thin hose to the glass hookah beside him. You place it in your mouth and breathe in. A smoky, spicy flavour flows out from the pipe and into your mouth, its warmth flowing down into you and making you immediately start to feel relaxed. You find yourself leaning back against the cushions and sighing. Your aches and pains melt away, you body feeling soft and light. You slowly breathe out, letting a long plume of smoke ooze from your mouth as you grin.</p>The lizard leans down over you, his head resting on your chest as he idly strokes and touches his hand across your belly. \"Feels great, doesn't it? The calm, relaxing smoke. Light, empty, floating. Don't you think it would be good to be like that? No worries or cares. Just floating, swirling. Endless warmth and faint aroma, a carefree life without thoughts, only comfort...\", he says. You nod and smile. That does sound great to you right now. He places the pipe to his mouth and breathes in deeply, then leans down against you.  His soft, smooth muzzle presses to your face, as he starts to kiss you. His lips touching to yours, his tongue sliding against your mouth. In your dozy, happy state, you eagerly accept the kiss. Pushing your head against his, while his hands stroke and tease your body. He breathes out, blowing the smoke into you, which makes you shiver and sigh. You relax even more, laying back flopped and lazy in the cushions.</p>You feel his arms at your sides, as he pulls you up and lifts you. You hang limply like a cushion in his grip, even as he pulls on the glass of his hookah, and opens it up at the side. He pushes you forward, so that you are curled up within it, with warm fragrant fluid around your legs and the smooth glass all around you. With a click, he closes the hookah again, and leans back into his cushions.</p>He takes a long, slow drag from his pipe. As he breathes in, you feel even more relaxed and lazy. Leaning back against the glass and letting your mind just empty out. It's like an all-over, utterly blissful massage. Your body feels so soft and light, like cotton wool. You can barely even feel your fingers or toes. He takes another breath, and your whole body starts to look translucent and strange. Swirling clouds of smoke faintly visible inside you, while your nose and mouth oozes an endless flow of thick, tasty pink smoke. Your eyes swirl and twist as you grin stupidly. Wanting him to breathe more, suck up more of you.</p>With his next breath, you feel a warm rush of pleasure all through you. Feeling like you were sinking into a hot, steamy bath, but the water is orgasmic pleasure. Your body begins to fall apart, uncurling into strands and billows of smoke, with just your faintly glowing eyes in the cloud. The next time he sucks in, you feel yourself flowing up through the pipe. Your worries and cares melting away. Your body drawn into his, sucked into his lungs and filling him with pleasure and desire. He holds you inside him for a moment, as you feel him all around you, before slowly exhaling you.</p>As you billow up into the air, mixing with the smoky remains of other people who were smoked too, you sink into utter, mindless relaxation and pleasure. Nothing but warmth and smoke and pleasant smells, your body floating in the room and drifting free.",
                        "trapped_desc": "The smoky air here almost smells like an adventurer, somehow...",
                        "trapped": 'You are just a billowing cloud of smoke within a sinister hookah lounge.',
                        "outcomes": []
                    }
                }
            },{
                "id": "grok",
                "title": "GROK!",
                "subtitle": "The sun is starting to go down as you walk through the stone streets of Makarna. The busy crowds are thinning, and the heat and light of this desert land is fading to the cool and dark of dusk. You see a few buildings which have glowing braziers outside their doors, the light of which indicates that lodgings are available within. One particular traveller seems to be having difficulty obtaining a place to stay, however. You walk past an incredibly tall creature, almost mistaking his hulking form for a statue or strange pillar in the dark at first. That is, until the innkeeper he's talking to slams their door, and he thumps the wall with one enormous dark green fist. \"Grok's money as good as anyone else's!\", he growls, and storms off. When he turns, you get a better look at him. The enormous thick tusk of his horn is unmistakeable, he's some sort of rhinocerous. But he's massive, with gigantic bulging muscles under a thick and tough green hide. A loincloth with a belt, and a bandolier bristling with weapons, are his only attempts at clothing. He notices you staring, and snorts steam from his nostrils. \"No one let Grok stay, just because Grok ate dinner without waiting it stop moving first. City people so sensitive. Rhinorcs know meat is meat\", he complains. His ears wiggle as he considers his options. \"Grok sleep in stables tonight. Camels not complain about table manners. You join me?\", he asks. The rhinorc is much friendlier than his intimidating appearance would suggest. Do you want to spend the night in the stables with him?",
                "type": "random",
                "requirements": [
                    
                ],
                "icon": "default",
                "results": {
                    "thing": {
                        "html": "data/active/Grok.html",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "sweatshop",
                "title": "Fresh Drinks",
                "subtitle": 'One of the market stalls has a large sign reading "Fresh Drinks, available here". The merchant is a huge tanned brown pig, sitting on a wooden bench in the hot sun. He is just wearing a pair of dark pants, and his wide chest and large belly is glistening with sweat. He doesn\'t seem to have anything to sell.',
                "type": "random",
                "requirements": [
                    
                ],
                "icon": "watervine_1",
                "results": {
                    "thing": {
                        "html": "data/active/FreshDrinks.html",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "meetace",
                "title": "A Familiar Face",
                "subtitle": "The interior of one of the open-walled taverns at the market has a billboard filled with requests for adventurers and hunters. It could be worth checking out.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "mystery_dragons",
                        "value": 1,
                        "comparison": "equal" //default greater
                    },{
                        "parameter": "ace_connection",
                        "value": 1,
                        "comparison": "less" //default greater
                    },{
                        "parameter": "ace_missing",
                        "value": 1,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "aceicon",
                "results": {
                    "thing": {
                        "html": "data/active/AceContract.html",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "entrance_random",
                "title": "Watch the customers",
                "subtitle": "There are massive crowds here, buying and selling all manner of object. You could watch and try to gain some information about the city.",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "reluctant_horse": {
                        "text": "Most of the patrons at the market are carefully avoiding a corner near the entrance columns of the bar. When you sneak closer, you see why. An enormous liontaur is carefully measuring the columns, with a stern look on her face. Everyone in the city gives the taurs a wide berth, which suggests they are more dangerous than most other creatures here.</p>A guard walks up to the taur, and crosses his arms. \"I still think the Body Shop should have been built in the Spice Market\", he says. The taur ignores him. The lion guard continues, more loudly. \"Body parts are clearly fresh goods. If they sell pets in the Spice Market, they should sell body parts!\", he insists.</p>Finally the taur turns to him, and sighs. \"A committee decreed that the Body Shop functionally is selling outfits and costumes. Clearly you need a little more knowledge about clothing and accessories\", the taur says in a purring, rumbling voice. The lion guard starts to look dizzy, and falls to his knees. The taur places her hands against the guard's cheeks, causing his face to freeze in place. Shiny gold spreads over the guard's body, as he shrinks and starts to curl up. The taur molds and massages him as he becomes shinier, glossier, and smaller. Soon, the taur has squeezed and twisted him into nothing but a short golden spring, which she then turns and slides down onto the base of her tail. She takes a moment to pull a small stone from her necklace and toss it to the ground, then walks off into the streets.</p>You glance at the discarded stone, and notice it is a tiny flask, now empty. How curious.",
                        "outcomes": [
                            {
                                "parameter": "watervine_1",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    },
                    "ap_carpenter": {
                        "text": "A toucan and a macaw are sitting on cushions outside of an incense store, discussing the latest news. The toucan strokes his beak, and mutters. \"You know, I really don't see how you manage with this thing. It's so huge and unwieldy\", he says. The macaw woman chuckles, and taps her shorter beak. \"You'll get used to it. I'm quite enjoying this body of yours, I get so much attention from men now\", she says. The toucan sighs. A lion walks past, and the two watch quietly. Once he's out of sight, the macaw speaks, more quietly.</p>\"You know, I hear the king has a new obsession lately. The servants in the palace have been gossiping. Some lioness from his harem escaped recently, and then after he visited that old hag in the savannah, he went mad with rage. Smashed up his room, tore the harem curtain like a feral beast. He's desperate to get her back, they say.</p>The toucan nods, and then looks around. Very quietly, he says \"You know, I hear that she had dragon eyes\". The macaw tackles him, and clamps her wing-hands over his massive beak. She looks around, terrified. \"Don't let the priests hear you say that!\", she hisses.",
                        "outcomes": [
                            {
                                "parameter": "watervine_1",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            }
        ],
        "npcs": [
        ]
    }