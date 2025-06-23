const verses = [
  {
    reference: "Jeremiah 29:11",
    text: "“For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.”",
  },
  {
    reference: "Philippians 4:13",
    text: "I can do all this through him who gives me strength.",
  },
  {
    reference: "Psalm 23:1",
    text: "The Lord is my shepherd, I lack nothing.",
  },
  {
    reference: "Isaiah 41:10",
    text: "So do not fear, for I am with you; do not be dismayed, for I am your God.",
  },
  {
    reference: "Romans 8:28",
    text: "And we know that in all things God works for the good of those who love him.",
  },
  {
    reference: "Proverbs 3:5-6",
    text: "Trust in the Lord with all your heart and lean not on your own understanding;",
  },
  {
    reference: "John 3:16",
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
  },
  {
    reference: "Isaiah 40:31",
    text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles;",
  },
  {
    reference: "Romans 12:2",
    text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind.",
  },
  {
    reference: "Matthew 11:28",
    text: "Come to me, all you who are weary and burdened, and I will give you rest.",
  },
  {
    reference: "Psalm 46:1",
    text: "God is our refuge and strength, an ever-present help in trouble.",
  },
  {
    reference: "2 Corinthians 5:7",
    text: "For we live by faith, not by sight.",
  },
  {
    reference: "1 Peter 5:7",
    text: "Cast all your anxiety on him because he cares for you.",
  },
  {
    reference: "James 1:2-3",
    text: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance.",
  },
  {
    reference: "Matthew 6:33",
    text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
  },
  {
    reference: "Psalm 118:24",
    text: "The Lord has done it this very day; let us rejoice today and be glad.",
  },
  {
    reference: "Romans 5:8",
    text: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
  },
  {
    reference: "Hebrews 11:1",
    text: "Now faith is confidence in what we hope for and assurance about what we do not see.",
  },
  {
    reference: "1 Thessalonians 5:16-18",
    text: "Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus.",
  },
  {
    reference: "Proverbs 18:10",
    text: "The name of the Lord is a fortified tower; the righteous run to it and are safe.",
  },
  {
    reference: "Joshua 1:9",
    text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
  },
  {
    reference: "Ephesians 2:8-9",
    text: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.",
  },
  {
    reference: "Psalm 27:1",
    text: "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?",
  },
  {
    reference: "Romans 8:38-39",
    text: "For I am convinced that neither death nor life, neither angels nor demons... will be able to separate us from the love of God that is in Christ Jesus our Lord.",
  },
  {
    reference: "2 Timothy 1:7",
    text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
  },
  {
    reference: "Psalm 91:1-2",
    text: "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty.",
  },
  {
    reference: "John 14:27",
    text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives.",
  },
  {
    reference: "1 Corinthians 10:13",
    text: "No temptation has overtaken you except what is common to mankind. And God is faithful;",
  },
  {
    reference: "Galatians 2:20",
    text: "I have been crucified with Christ and I no longer live, but Christ lives in me.",
  },
  {
    reference: "Lamentations 3:22-23",
    text: "Because of the Lord’s great love we are not consumed, for his compassions never fail. They are new every morning;",
  },
  {
    reference: "Colossians 3:23",
    text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.",
  },
  {
    reference: "Isaiah 26:3",
    text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
  },
  {
    reference: "Romans 15:13",
    text: "May the God of hope fill you with all joy and peace as you trust in him.",
  },
  {
    reference: "Psalm 37:4",
    text: "Take delight in the Lord, and he will give you the desires of your heart.",
  },
  {
    reference: "John 15:5",
    text: "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit;",
  },
  {
    reference: "1 John 4:4",
    text: "You, dear children, are from God and have overcome them, because the one who is in you is greater than the one who is in the world.",
  },
  {
    reference: "James 1:5",
    text: "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault.",
  },
  {
    reference: "2 Corinthians 12:9",
    text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'",
  },
  {
    reference: "Deuteronomy 31:6",
    text: "Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you;",
  },
  {
    reference: "Micah 6:8",
    text: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.",
  },
  {
    reference: "Psalm 121:1-2",
    text: "I lift up my eyes to the mountains—where does my help come from? My help comes from the Lord, the Maker of heaven and earth.",
  },
  {
    reference: "Ephesians 6:11",
    text: "Put on the full armor of God, so that you can take your stand against the devil’s schemes.",
  },
  {
    reference: "Matthew 5:14",
    text: "You are the light of the world. A town built on a hill cannot be hidden.",
  },
  {
    reference: "Hebrews 4:16",
    text: "Let us then approach God’s throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.",
  },
  {
    reference: "Psalm 19:14",
    text: "May these words of my mouth and this meditation of my heart be pleasing in your sight, Lord, my Rock and my Redeemer.",
  },
  {
    reference: "Proverbs 16:3",
    text: "Commit to the Lord whatever you do, and he will establish your plans.",
  },
  {
    reference: "Isaiah 43:2",
    text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you.",
  },
  {
    reference: "Romans 10:9",
    text: "If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved.",
  },
  {
    reference: "Psalm 34:8",
    text: "Taste and see that the Lord is good; blessed is the one who takes refuge in him.",
  },
  {
    reference: "John 8:12",
    text: "I am the light of the world. Whoever follows me will never walk in darkness, but will have the light of life.",
  },
  {
    reference: "Ecclesiastes 3:1",
    text: "There is a time for everything, and a season for every activity under the heavens.",
  },
  {
    reference: "1 John 1:9",
    text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.",
  },
  {
    reference: "Isaiah 54:17",
    text: "No weapon forged against you will prevail, and you will refute every tongue that accuses you.",
  },
  {
    reference: "Matthew 7:7",
    text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
  },
  {
    reference: "Luke 6:38",
    text: "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap.",
  },
  {
    reference: "James 4:7",
    text: "Submit yourselves, then, to God. Resist the devil, and he will flee from you.",
  },
  {
    reference: "1 Corinthians 13:13",
    text: "And now these three remain: faith, hope and love. But the greatest of these is love.",
  },
  {
    reference: "Psalm 119:105",
    text: "Your word is a lamp for my feet, a light on my path.",
  },
  {
    reference: "John 11:25",
    text: "I am the resurrection and the life. The one who believes in me will live, even though they die;",
  },
  {
    reference: "Matthew 28:19",
    text: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.",
  },
  {
    reference: "Mark 11:24",
    text: "Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours.",
  },
  {
    reference: "Galatians 5:22-23",
    text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.",
  },
  {
    reference: "Psalm 139:14",
    text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
  },
  {
    reference: "Isaiah 55:8-9",
    text: "“For my thoughts are not your thoughts, neither are your ways my ways,” declares the Lord.",
  },
  {
    reference: "Ephesians 3:20",
    text: "Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us.",
  },
  {
    reference: "Philippians 4:6",
    text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
  },
  {
    reference: "Job 19:25",
    text: "I know that my redeemer lives, and that in the end he will stand on the earth.",
  },
  {
    reference: "Titus 2:11",
    text: "For the grace of God has appeared that offers salvation to all people.",
  },
  {
    reference: "1 Timothy 6:12",
    text: "Fight the good fight of the faith. Take hold of the eternal life to which you were called.",
  },
  {
    reference: "Psalm 40:1-2",
    text: "I waited patiently for the Lord; he turned to me and heard my cry.",
  },
  {
    reference: "2 Thessalonians 3:3",
    text: "But the Lord is faithful, and he will strengthen you and protect you from the evil one.",
  },
  {
    reference: "Hebrews 13:5",
    text: "Never will I leave you; never will I forsake you.",
  },
  {
    reference: "John 16:33",
    text: "In this world you will have trouble. But take heart! I have overcome the world.",
  },
  {
    reference: "Acts 1:8",
    text: "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses...",
  },
  {
    reference: "Romans 6:23",
    text: "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.",
  },
  {
    reference: "Matthew 5:16",
    text: "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
  },
  {
    reference: "Proverbs 4:23",
    text: "Above all else, guard your heart, for everything you do flows from it.",
  },
  {
    reference: "1 Corinthians 16:14",
    text: "Do everything in love.",
  },
  {
    reference: "Psalm 100:4",
    text: "Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name.",
  },
  {
    reference: "1 Samuel 16:7",
    text: "The Lord does not look at the things people look at. People look at the outward appearance, but the Lord looks at the heart.",
  },
  {
    reference: "Nahum 1:7",
    text: "The Lord is good, a refuge in times of trouble. He cares for those who trust in him.",
  },
  {
    reference: "Zephaniah 3:17",
    text: "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you...",
  },
  {
    reference: "Colossians 3:2",
    text: "Set your minds on things above, not on earthly things.",
  },
  {
    reference: "Hebrews 10:23",
    text: "Let us hold unswervingly to the hope we profess, for he who promised is faithful.",
  },
  {
    reference: "Romans 1:16",
    text: "For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes.",
  },
  {
    reference: "Matthew 19:26",
    text: "With man this is impossible, but with God all things are possible.",
  },
  {
    reference: "Philippians 1:6",
    text: "He who began a good work in you will carry it on to completion until the day of Christ Jesus.",
  },
  {
    reference: "1 John 4:19",
    text: "We love because he first loved us.",
  },
  {
    reference: "Psalm 56:3",
    text: "When I am afraid, I put my trust in you.",
  },
  {
    reference: "Luke 1:37",
    text: "For no word from God will ever fail.",
  },
  {
    reference: "Romans 12:12",
    text: "Be joyful in hope, patient in affliction, faithful in prayer.",
  },
  {
    reference: "Isaiah 30:21",
    text: "Whether you turn to the right or to the left, your ears will hear a voice behind you, saying, 'This is the way; walk in it.'",
  },
  {
    reference: "Psalm 34:18",
    text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
  },
  {
    reference: "Deuteronomy 6:5",
    text: "Love the Lord your God with all your heart and with all your soul and with all your strength.",
  },
  {
    reference: "John 13:34",
    text: "A new command I give you: Love one another. As I have loved you, so you must love one another.",
  },
  {
    reference: "Ephesians 4:32",
    text: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
  },
  {
    reference: "Psalm 62:6",
    text: "Truly he is my rock and my salvation; he is my fortress, I will not be shaken.",
  },
  {
    reference: "Galatians 6:9",
    text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
  },
  {
    reference: "Isaiah 6:8",
    text: "Then I heard the voice of the Lord saying, 'Whom shall I send? And who will go for us?' And I said, 'Here am I. Send me!'",
  },
  {
    reference: "2 Corinthians 4:17",
    text: "For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all.",
  },
  {
    reference: "Psalm 30:5",
    text: "Weeping may stay for the night, but rejoicing comes in the morning.",
  },
  {
    reference: "Hebrews 13:8",
    text: "Jesus Christ is the same yesterday and today and forever.",
  },
  {
    reference: "Matthew 22:37",
    text: "Love the Lord your God with all your heart and with all your soul and with all your mind.",
  },
  {
    reference: "1 John 3:18",
    text: "Dear children, let us not love with words or speech but with actions and in truth.",
  },
  {
    reference: "Psalm 84:11",
    text: "For the Lord God is a sun and shield; the Lord bestows favor and honor;",
  },
  {
    reference: "Luke 18:27",
    text: "What is impossible with man is possible with God.",
  },
  {
    reference: "Romans 14:8",
    text: "If we live, we live for the Lord; and if we die, we die for the Lord.",
  },
  {
    reference: "Isaiah 58:11",
    text: "The Lord will guide you always; he will satisfy your needs in a sun-scorched land.",
  },
  {
    reference: "James 5:16",
    text: "The prayer of a righteous person is powerful and effective.",
  },
  {
    reference: "Proverbs 27:17",
    text: "As iron sharpens iron, so one person sharpens another.",
  },
  {
    reference: "2 Peter 3:9",
    text: "The Lord is not slow in keeping his promise, as some understand slowness. Instead he is patient with you.",
  },
  {
    reference: "Isaiah 40:8",
    text: "The grass withers and the flowers fall, but the word of our God endures forever.",
  },
  {
    reference: "Matthew 10:29-31",
    text: "So don’t be afraid; you are worth more than many sparrows.",
  },
  {
    reference: "Ephesians 5:1-2",
    text: "Follow God’s example, therefore, as dearly loved children and walk in the way of love...",
  },
  {
    reference: "Jeremiah 17:7",
    text: "But blessed is the one who trusts in the Lord, whose confidence is in him.",
  },
  {
    reference: "2 Chronicles 7:14",
    text: "If my people, who are called by my name, will humble themselves and pray and seek my face...",
  },
  {
    reference: "1 Corinthians 1:18",
    text: "For the message of the cross is foolishness to those who are perishing, but to us who are being saved it is the power of God.",
  },
  {
    reference: "Psalm 91:4",
    text: "He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart.",
  },
  {
    reference: "1 Peter 2:9",
    text: "But you are a chosen people, a royal priesthood, a holy nation, God’s special possession...",
  },
  {
    reference: "Romans 8:1",
    text: "Therefore, there is now no condemnation for those who are in Christ Jesus.",
  },
  {
    reference: "2 Corinthians 5:17",
    text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
  },
  {
    reference: "Hebrews 12:1-2",
    text: "Let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith.",
  },
  {
    reference: "Psalm 145:18",
    text: "The Lord is near to all who call on him, to all who call on him in truth.",
  },
  {
    reference: "1 Corinthians 15:58",
    text: "Therefore, my dear brothers and sisters, stand firm. Let nothing move you.",
  },
  {
    reference: "Isaiah 32:17",
    text: "The fruit of that righteousness will be peace; its effect will be quietness and confidence forever.",
  },
  {
    reference: "Zechariah 4:6",
    text: "‘Not by might nor by power, but by my Spirit,’ says the Lord Almighty.",
  },
  {
    reference: "Psalm 73:26",
    text: "My flesh and my heart may fail, but God is the strength of my heart and my portion forever.",
  },
  {
    reference: "1 Thessalonians 3:12",
    text: "May the Lord make your love increase and overflow for each other and for everyone else...",
  },
  {
    reference: "John 1:5",
    text: "The light shines in the darkness, and the darkness has not overcome it.",
  },
  {
    reference: "Proverbs 11:25",
    text: "A generous person will prosper; whoever refreshes others will be refreshed.",
  },
  {
    reference: "Lamentations 3:25",
    text: "The Lord is good to those whose hope is in him, to the one who seeks him;",
  },
  {
    reference: "Psalm 16:8",
    text: "I keep my eyes always on the Lord. With him at my right hand, I will not be shaken.",
  },
  {
    reference: "Romans 15:5",
    text: "May the God who gives endurance and encouragement give you the same attitude of mind toward each other...",
  },
  {
    reference: "Ecclesiastes 4:9-10",
    text: "Two are better than one... If either of them falls down, one can help the other up.",
  },
  {
    reference: "Titus 3:5",
    text: "He saved us, not because of righteous things we had done, but because of his mercy.",
  },
  {
    reference: "Isaiah 12:2",
    text: "Surely God is my salvation; I will trust and not be afraid. The Lord himself is my strength and my defense;",
  },
  {
    reference: "Mark 12:30",
    text: "Love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength.",
  },
  {
    reference: "Hebrews 6:19",
    text: "We have this hope as an anchor for the soul, firm and secure.",
  },
  {
    reference: "Psalm 3:3",
    text: "But you, Lord, are a shield around me, my glory, the One who lifts my head high.",
  },
  {
    reference: "1 Peter 1:3",
    text: "In his great mercy he has given us new birth into a living hope through the resurrection of Jesus Christ from the dead.",
  },
  {
    reference: "Galatians 6:2",
    text: "Carry each other’s burdens, and in this way you will fulfill the law of Christ.",
  },
  {
    reference: "2 Timothy 2:13",
    text: "If we are faithless, he remains faithful, for he cannot disown himself.",
  },
  {
    reference: "Psalm 31:24",
    text: "Be strong and take heart, all you who hope in the Lord.",
  },
  {
    reference: "Colossians 2:6-7",
    text: "Continue to live your lives in him, rooted and built up in him, strengthened in the faith...",
  },
  {
    reference: "Ephesians 6:10",
    text: "Finally, be strong in the Lord and in his mighty power.",
  },
  {
    reference: "Matthew 6:34",
    text: "Therefore do not worry about tomorrow, for tomorrow will worry about itself.",
  },
  {
    reference: "Philippians 2:3-4",
    text: "Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves.",
  }
];