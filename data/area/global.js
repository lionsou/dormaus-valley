var global_area = {
        "events": [
            {
                "id": "contributor",
                "title": "Thank You",
                "global": true,
                "subtitle": 'Thank you for supporting Dormaus Valley. Without all of your help, this game could not have been brought back.',
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "contributor",
                        "value": 1,
                        "comparison": "less" //default greater
                    },{
                        "parameter": "contributor",
                        "value": 10,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "contributor",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'All of you have my deepest thanks for your kindness, contributions, donations and support. I hope to continue extending this game for a long time. This special attribute will give you early access to new content, as a thank you for your help.',
                        "outcomes": [
                            {
                                "parameter": "contributor",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "am_male",
                "title": "Are you male?",
                "global": true,
                "subtitle": 'A tall stranger bumps into you and apologises. Sorry sir, er, madam, er...',
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "gender",
                        "value": 1,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "gendericon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You look up at the stranger, who turns out to be a tall, poor-sighted bat in a long cloak to protect him from the sun. You correct him that you\'re male, and his long ears twitch as he smiles. "I see. Well, I hope to meet you again, sir", he says, before continuing on his way.',
                        "outcomes": [
                            {
                                "parameter": "gender",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "am_female",
                "global": true,
                "title": "Are you female?",
                "subtitle": 'A tall stranger bumps into you and apologises. Sorry sir, er, madam, er...',
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "gender",
                        "value": 1,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "gendericon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You look up at the stranger, who turns out to be a tall, poor-sighted bat in a long cloak to protect him from the sun. You correct him that you\'re female, and his long ears twitch as he smiles. "I see. Well, I hope to meet you again, my lady", he says, before continuing on his way.',
                        "outcomes": [
                            {
                                "parameter": "gender",
                                "quantity": 2,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "save_me_batty",
                "title": "Save me Mr Bat!",
                "global": true,
                "subtitle": 'A tall bat in a cloak bumps into you, and blinks with surprise. "Oh my! Do you require assistance?"',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "gender",
                        "value": 100,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "mrbat",
                "results": {
                    "success": { 
                        "text": 'The bat adjusts his glasses and takes a close look at you. He strokes his chin for a moment, then opens up his long cloak. From within, he draws out a small black book and reads it thoughtfully. "Here you are, this should resolve your problem, my friend", he says. He touches the page and quickly mutters a long string of complex syllables. The words seem to spin and twirl around you, and for a moment your body feels completely fluid. There is a crackle and pop of electricity, and then with a sudden SNAP, the curse binding you is undone! </p>As you look down at yourself, your form restored, the bat gives you a little bow. "I am glad I found myself lost so that I could provide you assistance, my friend. Until we meet again!"',
                        "freeTrap": true,
                        "outcomes": [
                        ]
                    }
                }
            },{
                "id": "fox_spell",
                "title": "The Spell of Befox!",
                "global": true,
                "subtitle": 'A glowing aura of orange energy is swirling around you, trying to possess your body.',
                "type": "random",
                "requirements": [
                    {
                        "temporary_param": "fox"
                    }
                ],
                "icon": "thevoid",
                "results": {
                    "success": { 
                        "text": 'You feel the magic flowing through you, your body tingling. Your skin prickles as you develop soft, fluffy orange fur. The fur becomes light and peachy on your neck and chest, and dark at your hands and feet. Your head stretches forward into a pointed muzzle, while your ears grow pointed and fluffy. A long, bushy tail sprouts from your rear, swaying in the air as you transform into a fox!',
                        "clearTemp": "fox",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 8,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "rabbit_spell",
                "title": "The Spell of Berabbit!",
                "global": true,
                "subtitle": 'A glowing aura of hopping, rapid energy is surrounding you, trying to possess your body.',
                "type": "random",
                "requirements": [
                    {
                        "temporary_param": "rabbit"
                    }
                ],
                "icon": "thevoid",
                "results": {
                    "success": { 
                        "text": 'You feel the magic flowing through you, your body tingling. Your skin prickles as you develop soft, silky white fur. It spreads down your body, and when it hits your legs, they thicken with muscle, then your feet grow long and thin. You start to shrink, and your head develops a small rounded muzzle, while your ears grow enormously long, stretching above your head and twitching in the air. A soft, white cottontail sprouts from your rear, bobbing in the air as you turn into a rabbit!',
                        "clearTemp": "rabbit",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 29,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "vore_spell",
                "title": "The Spell of Vore!",
                "global": true,
                "subtitle": 'A glowing aura like the maw of a mighty beast is swirling around you, dragging you towards the caster.',
                "type": "random",
                "requirements": [
                    {
                        "temporary_param": "vore"
                    }
                ],
                "icon": "thevoid",
                "results": {
                    "success": { 
                        "text": 'The magic drags you over to the caster with a rush of air. They open their mouth revealing large fanged teeth dripping with drool. Their face contorts into a snarling, predatory grimace and their belly growls loudly. With beastlike rage, they grab you and grip you firmly in their hands. Opening their jaw wide, they start to shove you into their mouth. They drool and snarl as you wriggle and struggle, your body sliding over their tongue. Their tongue licks over your body, every inch of you being tasted, until they start to swallow. You are dragged into their dark, tight throat, and forced down a slippery warm tunnel until you land, curled up and confused, inside their belly.',
                        "clearTemp": "vore",
                        "area": "belly",
                        "outcomes": [
                        ]
                    }
                }
            },{
                "id": "dumb_0",
                "title": "Drink a Stupidity Potion",
                "subtitle": "Is that really wise?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "dumb_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 0,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "dumb_potion",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You swallow the strange creamy milk. It is warm and salty and very very thick. You blink a few times, and realise you have a dumb, slow grin on your face. You rub your forehead and realise you\'re reacting slower than you used to. You can\'t seem to focus on anything for long. You are stupider than you used to be, but there\'s a sort of slow, addictive happiness to your new ignorance.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 3,
                                "change": "set"
                            },
                            {
                                "parameter": "dumb_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "dumb_1",
                "title": "Drink a Stupidity Potion",
                "global": true,
                "subtitle": "Is that really wise?",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "dumb_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "dumb_potion",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'Your stupid brain seems to be stopping completely. You struggle to form even a single sentence in your head. You try to speak, but all that comes out is grunts and noises. You vaguely understand that you are losing something, but you don\'t understand the concept of what is happening to you. You are working on basic, animal instinct, nothing more than a beast. You can no longer speak.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 1,
                                "change": "set"
                            },
                            {
                                "parameter": "dumb_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "dumb_2",
                "title": "Drink a Stupidity Potion",
                "subtitle": "Is that really wise?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "dumb_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 2,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "dumb_potion",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'Your stupid brain seems to be stopping completely. You struggle to form even a single sentence in your head. You try to speak, but all that comes out is grunts and noises. You vaguely understand that you are losing something, but you don\'t understand the concept of what is happening to you. You are working on basic, animal instinct, nothing more than a beast. You can no longer speak.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 1,
                                "change": "set"
                            },
                            {
                                "parameter": "dumb_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "dumb_3",
                "title": "Drink a Stupidity Potion",
                "subtitle": "Is that really wise?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "dumb_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 3,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "dumb_potion",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You swallow the strange creamy milk. It is warm and salty and very very thick. Your already-below-average brain seems to slow to a crawl. You blink slowly and start to drool. Your mind is full of fog and wool, and you can barely focus on any thought for more than a few moments, before your mind drifts away. You look down and see a discarded newsletter by your feet, and realise that there is something written on it, but you can no longer understand the letters. You laugh, in a dumb, slow, stupid way. You are happy and content in your stupid tiny brain. You will struggle to speak intelligently now.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 2,
                                "change": "set"
                            },
                            {
                                "parameter": "dumb_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "dumb_4",
                "title": "Drink a Stupidity Potion",
                "subtitle": "Is that really wise?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "dumb_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 4,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "dumb_potion",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You swallow the strange creamy milk. It is warm and salty and very very thick. You blink a few times, and realise you have a dumb, slow grin on your face. You rub your forehead and realise you\'re reacting slower than you used to. You can\'t seem to focus on anything for long. You are stupider than you used to be, but there\'s a sort of slow, addictive happiness to your new ignorance.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 3,
                                "change": "set"
                            },
                            {
                                "parameter": "dumb_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "dumb_5",
                "title": "Drink a Stupidity Potion",
                "subtitle": "Is that really wise?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "dumb_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 5,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "dumb_potion",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You swallow the strange creamy milk. It is warm and salty and very very thick. Your intelligent mind feels a little strange. You blink a few times, and almost feel a thick, slow morass in your head, slowing you down. You feel like things like algebra and science would be less easy to understand now. You are thinking at the level of an average person.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 4,
                                "change": "set"
                            },
                            {
                                "parameter": "dumb_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "dumb_6",
                "title": "Drink a Stupidity Potion",
                "subtitle": "Is that really wise?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "dumb_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 6,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "dumb_potion",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You swallow the strange creamy milk. It is warm and salty and very very thick. Your rapid and intelligent thoughts seem to move slower and more sluggishly, like they are struggling through thick fluid. You can feel it in your head, slowing you down. You know you are more intelligent than average, but you no longer so easily grasp ultra-complex thoughts.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 5,
                                "change": "set"
                            },
                            {
                                "parameter": "dumb_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "dumb_7",
                "title": "Drink a Stupidity Potion",
                "subtitle": "Is that really wise?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "dumb_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 7,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "dumb_potion",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You swallow the strange creamy milk. It is warm and salty and very very thick. Your mechanical mind whirrs and chugs for a moment, as stupidity almost seems to flow into your head and clog the delicate and powerful machinery of your brain. The hot, rapid thoughts in your robot brain start to slow down, and you feel warm and squishy and soft in your head. Your stiff, robotic posture slouches a little, and you begin to breathe, and sweat. Your body aches as you sense organic sensations and impulses. You cough and rub your face as you return to a flesh and blood creature.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 6,
                                "change": "set"
                            },
                            {
                                "parameter": "dumb_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },{
                "id": "smart_0",
                "title": "Drink an Intelligence Potion",
                "subtitle": "What could be bad about being smarter?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "smart_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 0,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "smart_potion",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You swallow the thin and tingly fluid. It almost feels electrical in your mouth, and it makes your brain zap and tingle. You feel smarter, and faster. Your mind runs through alebra and riddles, and they unravel with ease under the power of your fast and potent thoughts.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 4,
                                "change": "set"
                            },
                            {
                                "parameter": "smart_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "smart_1",
                "title": "Drink an Intelligence Potion",
                "subtitle": "What could be bad about being smarter?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "smart_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "smart_potion",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You swallow the thin and tingly fluid. It almost feels electrical in your mouth, and it makes your brain zap and tingle. Your basic, instinctive animal brain sparks and tingles. You look around, and feel thoughts in your head. Stupid, and slow, and basic, but still thoughts. You no longer have the mind of a simple animal.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 2,
                                "change": "set"
                            },
                            {
                                "parameter": "smart_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "smart_2",
                "title": "Drink an Intelligence Potion",
                "subtitle": "What could be bad about being smarter?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "smart_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 2,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "smart_potion",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You swallow the thin and tingly fluid. It almost feels electrical in your mouth, and it makes your brain zap and tingle. You stop drooling, and your slack idiot grin sobers up, though you still struggle to think straight. You are slow and dumb, but smarter than you were before.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 3,
                                "change": "set"
                            },
                            {
                                "parameter": "smart_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "smart_3",
                "global": true,
                "title": "Drink an Intelligence Potion",
                "subtitle": "What could be bad about being smarter?",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "smart_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 3,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "smart_potion",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You swallow the thin and tingly fluid. It almost feels electrical in your mouth, and it makes your brain zap and tingle. You blink and stretch, your mind understanding concepts properly again. Anything complex and powerful would be tough, but you\'re no dumber than the average person.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 4,
                                "change": "set"
                            },
                            {
                                "parameter": "smart_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "smart_4",
                "title": "Drink an Intelligence Potion",
                "global": true,
                "subtitle": "What could be bad about being smarter?",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "smart_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 4,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "smart_potion",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You swallow the thin and tingly fluid. It almost feels electrical in your mouth, and it makes your brain zap and tingle. You feel smarter, and faster. Your mind runs through alebra and riddles, and they unravel with ease under the power of your fast and potent thoughts.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 5,
                                "change": "set"
                            },
                            {
                                "parameter": "smart_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "smart_5",
                "title": "Drink an Intelligence Potion",
                "global": true,
                "subtitle": "What could be bad about being smarter?",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "smart_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 5,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "smart_potion",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You swallow the thin and tingly fluid. It almost feels electrical in your mouth, and it makes your brain zap and tingle. Your intelligent brain burgeons with power and speed. Everything around you seems to move slower, as you realise you are comprehending and analysing everything around you. Even incredibly complex problems are almost instantly solved in your head. You realise, suddenly, that you understand capital letters now. It\'s so simple!',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 6,
                                "change": "set"
                            },
                            {
                                "parameter": "smart_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "smart_6",
                "title": "Drink an Intelligence Potion",
                "subtitle": "What could be bad about being smarter?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "smart_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 6,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "smart_potion",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You swallow the thin and tingly fluid. It almost feels electrical in your mouth, and it makes your brain zap and tingle. Your mind begins to move at speeds you could never have even imagined. In a microsecond you have analysed everything around you. You think through plans and strategies for every eventuality in an instant. Your body is no longer moving like an ordinary being. Your posture becomes stiff and straight. Your breathing slows, then stops completely. You no longer need it. You feel cold, and complex, and mechanical inside. Your skin becomes cold and firm, your organs begin to transform into whirring and buzzing machinery. Your brain, organic and sticky and slow, is rapidly replaced by a perfect artificial intelligence. Your wrinkled and wet organic mind becomes a perfect glittering sphere in your head, a mechanical computer far more powerful than it ever was before.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 7,
                                "change": "set"
                            },
                            {
                                "parameter": "smart_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            }
        ],
        "npcs": [
            
        ]
    }