// Selections = the old "Rare Soul LPs" + "Hattricks full of Soul I-V",
// consolidated into one page. Rare Soul LPs is a curated write-up per record;
// the Hattricks chapters are picture-sleeve 45 galleries. Each chapter opens
// with a cover image, then its 45s in triplets — a "hattrick" is always three
// singles sharing a theme, so `sets` keeps them grouped instead of flattened
// (Harry's book has the detailed info on each 45; no per-sleeve captions here).
export interface RareRecord { title: string; blurb: string; image: string | null; }
export interface Selection {
  title: string;
  blurb: string;
  records?: RareRecord[];
  cover?: string;
  sets?: string[][];
}

export const selections: Selection[] = [
  {
    title: 'Rare Soul LPs',
    blurb: 'Obscure and overlooked soul long-players from the collection \u2014 not for sale, just for the love of the music.',
    records: [
      {
        title: 'Janet Helms — Same (Stone Groove, 1974)',
        blurb: 'Absolutely superb soul LP from 1974 from the obscure soul sister Janet Helms. There is not much information on the internet about her or this LP and the strange thing is that the reviews you can find online do not give this record the credit it deserves.  The production is ultra soulful throughout and Janets voice soars over the music which is both deep and funky throughout. The Stone Groove label may be small, but they splashed on the gatefold cover and the full production with a string section as well as horns. The LP contains at least a handful masterpieces of female soul. My personal fave is the intense and brooding "Surer than yesterday" which is peerless soul music. But the whole album is pure class. Seek it out!',
        image: '/images/img-2445.jpg',
      },
      {
        title: 'First Class - Same (Sugar Hill, 1980)',
        blurb: 'A very rare LP on a large label (Sugar Hill) which is a bit strange. The label probably had financial troubles so the record was not pressed in large quantities. First Class were a superb sweet soul group; their problem was that they did not write any material of their own which made them very much dependent on others: they were not in control of their own career. This record is almost a track by track reissue of the 1977 (and very rare) LP "They call this group First Class", sporting an ugly white cover. Musically it is great Philly Soul , with personal faves being the ballads "Let\'s make love", "Lucky me", and theit take on "Going out of my head".',
        image: '/images/img-8600.jpg',
      },
      {
        title: 'The All Rounders - Same (Mozambique Black Music, 1976)',
        blurb: 'Hans found this one at a record fair and was intrigued by the song choices, with covers of Barbara Lynn, Joe Simon and Shirley Brown. Some research found that this is actually a South African group, with local legend Babsy Mlangeni as the male lead singer. Soundwise it is a primitive affair, with recognizable South African influences integrated in the soul sound. Best track is a superb cover of Shirley Brown’s “Woman to woman”, while Barbara Lynn’s “Until then I’ll suffer” gets a credible treatment by female lead Pam Machine. The latter song also sports a sublime cheesy organ in the background. Overall the backing vocals are ultra soulful with that African vibe. This LP was also released in South Africa with another cover picture.',
        image: '/images/img-8599.jpg',
      },
      {
        title: 'The Entertainers - Same (HMC, 1983)',
        blurb: 'The Carolinas spawned a specific and interesting subculture: Beach Music. This scene is all about partying in the beach clubs in North and South Carolina and dancing to a specific type of uptempo soul music, not unlike the Northern Soul scene in the UK. Many old school soul artists (like the Chairmen Of The Board and the Tams) have made a living off performing in the beach clubs and released records specifically aimed at that scene. One of the dances popular there was The Shag, which prompted many a release referencing “Shagging” in the title. This has led to hilarity in the UK, where “shagging” has different connotations… The Entertainers were a white soul group popular on the Beach scene and this record has a smooth, uptempo and tight sound with enough Northern Soul characteristics to make it a sought after album in that scene. The style is firmly uptempo, although the best track on the album is a delightful two-stepper called “I won’t cry anymore”. Overall a very nice album!',
        image: '/images/entertainers.jpg',
      },
      {
        title: 'The Weeks Sisters - Down by the riverside (HSE, 197?)',
        blurb: 'The Weeks Sisters were also known as “The Soul Shouting Weeks Sisters” and if ever there was an apt name for the group this was it. Their brand of gospel is funky, deeply soulful and passionate. This LP is for some reason not yet on Discogs, although it is not that hard to find. Best of the songs on offer for us is the wildly funky “Can’t hide sinners” which rides a wicked rhythm throughout. But there’s also deep ballads if you’re into that sort of thing (we are). All their records are worth seeking out by the way.',
        image: '/images/weeks-sisters.jpg',
      },
      {
        title: 'Sunny Ozuna & the Sunliners – The Versatile Sunny Ozuna & the Sunliners (Key-Loc, 1968)',
        blurb: 'Here is one of the many albums by the versatile but also very prolific Sunny & the Sunliners. On this album they play two very different style, one side devoted to Texano Ranchero music, not particularly interesting to soul lovers. On side two however the style is straight soul and all lyrics are sung in English.  This side contains excellent soul tunes, only covers sung in a tight vocal group style.  There is a version of “I’d rather go blind”, “Little green apples” and the cream track is the version of “Brown-eyed woman” (also famously done by Bill Medley of the Righteous Brothers). A hard to find gem.',
        image: '/images/sunny-ozuna.jpg',
      },
      {
        title: 'The Manila Machine - same (Asia Minor, 1973)',
        blurb: 'This album was an independent release from the Philippines by a journeyman lounge band mainly covering other people’s soul classics. Does not sound promising? Think again. This LP is one of sweet souls under the radar masterpieces. Rarely has the essence of sweet soul been so completely captured as on this LP. And it’s not just slow sweet ballads either. There are also two majestic crossover tunes on the album. Listen to the clips to hear for yourself. Unfortunately no one has so far made the effort to reissue it, so because of its rarity most people are not even aware of it. Highlights aplenty, with the Machine’s own “Poor loser” and their covers of the Chi-Lites “Oh Girl” and the Originals’ “Baby I’m for real” in the ballad department shining spectacularly, plus the beautiful crossover tunes  “Any way I can”  and “I dig everything about you”. They even manage to salvage “Puppy love”… Unbeatable.',
        image: '/images/manila-machine.jpg',
      },
      {
        title: 'Sacca Twins Revue – “He’s my….Brother” (Virtue Studios), 1978',
        blurb: 'Here is another obscurity, a typical self-released vanity record by the lounge act The Sacca Twins Revue, a band fronted by two identical (white) twins, the Sacca brothers. The Sacca Twins performed in lounges and cabarets in the late seventies, also in Las Vegas, but their sound was much deeper and more soulful than the average lounge act. As is usual in these kinds of records most of the songs presented are cover versions of well known songs, in this case mainly soul and gospel songs. There are versions of the Hollies’  “He ain’t heavy… He’s my brother”, often covered by soul artists, Gamble & Huffs “The love I lost”, Smokey’s “Ooh baby baby” and Kool & the Gangs “Hollywood Swinging”, here renamed “Hollywood Swinger”. The style is a loose funk based groove, with sometimes Tower of Power like horns, soulful vocals and overall a very nice vibe. After the Revue ended one of the brothers, Tony Sacca, had a long career in Las Vegas as entertainer and TV show host.',
        image: '/images/sacca-twins-revue.jpg',
      },
      {
        title: 'Billy Jones & the Stars - Love is gonna rain on you (Catfish)',
        blurb: 'Billy Jones was from Texas and a big fan of Archie Bell & the Drells. He ended up living in Amsterdam and sang in Oscar Harris\'  Twinke Stars. As Billy Jones & The Stars they made this spectacular album which is wholly in the Archie Bell style. The production on this LP is fantastic, just as on Billy\'s other LP "Birds of the sea". Billy\'s version of "Love is gonna rain on you", the self-penned ballad "Change your mind" and "My baby\'s gone" are all classics.',
        image: '/images/billy-jones.jpg',
      },
      {
        title: 'Flamingos - Today (Ronze 1972)',
        blurb: 'The Flamingos were one of the original Doo Wop groups, with Tommy Hunt an original member. The group had many incarnations over the years, with the brothers Zeke, J.C. and Jake Carey a constant factor. This LP finds them in 1972 on the small Ronze label for which they recorded several excellent lp\'s. This one is worth seeking out for the superb remakes of some of their own classic 50s hits, primarily "Golden teardrops"  which is transformed into an early seventies anti-drug song. Also noteworthy is "let it be me" which has a running faucet audibly throughout, apparently to give the impression of a thunderstorm...',
        image: '/images/flamingos-today.jpg',
      },
    ],
  },
  {
    title: 'Hattricks full of Soul I \u2014 Get Dressed',
    blurb: 'Chapter \u201cGet Dressed\u201d \u2014 40 picture-sleeve 45s from Harry\u2019s collection.',
    cover: '/images/georgeclinton-get-dressed.png',
    sets: [['/images/hat1.png', '/images/hat2.png', '/images/hat3.png'], ['/images/man-hat-2.png', '/images/man-hat-3.png', '/images/man-hats1.png'], ['/images/top-1.png', '/images/top-2.png', '/images/top3.png'], ['/images/tie-1.png', '/images/tie-2.png', '/images/tie-3.png'], ['/images/gloves1_1.png', '/images/gloves2_1.png', '/images/gloves3_1.png'], ['/images/red1.png', '/images/red2.png', '/images/red3.png'], ['/images/hot1.png', '/images/hot2.png', '/images/hot3.png'], ['/images/pants1.png', '/images/pants2.png', '/images/patnts3.png'], ['/images/outrageous1.png', '/images/outrageous2.png', '/images/outrageous3.png'], ['/images/indian1.png', '/images/indians2.png', '/images/indians3.png'], ['/images/fur1.png', '/images/fur2.png', '/images/fur3.png'], ['/images/shoes1.png', '/images/shoes2.png', '/images/shoes3.png'], ['/images/shoes4.png', '/images/shoes5.png', '/images/shoes6.png']],
  },
  {
    title: 'Hattricks full of Soul II \u2014 Body Talk',
    blurb: 'Chapter \u201cBody Talk\u201d \u2014 34 picture-sleeve 45s from Harry\u2019s collection.',
    cover: '/images/body-talk.png',
    sets: [['/images/etta-james.png', '/images/udisputed.png', '/images/valyoung.png'], ['/images/isleys_1.png', '/images/pickett.png', '/images/delasoul.png'], ['/images/preston.png', '/images/sledge.png', '/images/gap-band.png'], ['/images/wildcherry.png', '/images/amoramor.png', '/images/sistersledge.png'], ['/images/hands1.png', '/images/hands2.png', '/images/hands3.png'], ['/images/hands4.png', '/images/hands5.png', '/images/hands6.png'], ['/images/torso1.png', '/images/torso2.png', '/images/torso3.png'], ['/images/breasts1.png', '/images/breasts2.png', '/images/breasts3.png'], ['/images/booty1.png', '/images/booty2_1.png', '/images/booty3.png'], ['/images/legs1.png', '/images/legs2.png', '/images/legs3.png'], ['/images/toes1.png', '/images/toes2.png', '/images/toes3.png']],
  },
  {
    title: 'Hattricks full of Soul III \u2014 Fight The Power',
    blurb: 'Chapter \u201cFight The Power\u201d \u2014 43 picture-sleeve 45s from Harry\u2019s collection.',
    cover: '/images/isleys_6.png',
    sets: [['/images/strangefruit.png', '/images/strangefruit2.png', '/images/strangefruit3.png'], ['/images/king1.png', '/images/king2.png', '/images/king3.png'], ['/images/abraham1.png', '/images/abraham2.png', '/images/abraham3.png'], ['/images/nam1.png', '/images/nam2.png', '/images/nam3.png'], ['/images/angela1.png', '/images/angeladavis_1.jpg', '/images/angela3.png'], ['/images/president1.png', '/images/president2.png', '/images/president3.png'], ['/images/reagan1.png', '/images/reagan2.png', '/images/reagan3.png'], ['/images/obstinaat1.png', '/images/dictator3.png', '/images/obstinaat2.png'], ['/images/dictatoe2.png', '/images/obstinaat3.png', '/images/dictator1.png'], ['/images/zuidafrika1.png', '/images/zuidafrika2.png', '/images/zuidafrika3.png'], ['/images/mandela1.png', '/images/mandela2.png', '/images/mandela3.png'], ['/images/twin-towers-1.png', '/images/twin-towers-2.png', '/images/twin-towers-3.png'], ['/images/statue1.png', '/images/statue2.png', '/images/statue3.png'], ['/images/yeswecan1.png', '/images/yeswecan2.png', '/images/yeswecan3.png']],
  },
  {
    title: 'Hattricks full of Soul IV \u2014 Trains and Boats and Planes',
    blurb: 'Chapter \u201cTrains and Boats and Planes\u201d \u2014 61 picture-sleeve 45s from Harry\u2019s collection.',
    cover: '/images/dionne.png',
    sets: [['/images/walking1.png', '/images/walking2.png', '/images/walking3.png'], ['/images/skates1.png', '/images/skateboards-1_1.jpg', '/images/skate2.png'], ['/images/skateboard-2.jpg', '/images/skates3.png', '/images/skateboard-3.jpg'], ['/images/bikes1.png', '/images/bikes2.png', '/images/bikes3.png'], ['/images/motor1.png', '/images/motor2.png', '/images/motor3.png'], ['/images/carriage1.png', '/images/carriage2.png', '/images/carriage3.png'], ['/images/car1.png', '/images/car2.png', '/images/car3.png'], ['/images/taxi1.png', '/images/taxi2.png', '/images/taxi3.png'], ['/images/tourbus1.png', '/images/heftruck1.png', '/images/tourbus2.png'], ['/images/htruck2.png', '/images/tourbus3.png', '/images/htruck3.png'], ['/images/truck1.png', '/images/train1.png', '/images/train4.png'], ['/images/train7.png', '/images/oats1.png', '/images/wings1.png'], ['/images/carpet1.png', '/images/truck2.png', '/images/train2.png'], ['/images/train5.png', '/images/train8.png', '/images/boats2.png'], ['/images/wings2.png', '/images/carpet2.png', '/images/truck3.png'], ['/images/train3.png', '/images/train6.png', '/images/train9.png'], ['/images/boats3.png', '/images/wings3.png', '/images/carpet3.png'], ['/images/ballon1.png', '/images/plane1.png', '/images/space.png'], ['/images/ballon2.png', '/images/plane2.png', '/images/space2.png'], ['/images/ballon3_1.png', '/images/plane3.png', '/images/space3.png']],
  },
  {
    title: 'Hattricks full of Soul V \u2014 Cloud Nine',
    blurb: 'Chapter \u201cCloud Nine\u201d \u2014 13 picture-sleeve 45s from Harry\u2019s collection.',
    cover: '/images/drugs-1-cloud-nine.jpg',
    sets: [['/images/drugs-2-capital-letters.jpg', '/images/drugs-8-general-kane.jpg', '/images/drugs-3-black-slate.jpg'], ['/images/oranjones.jpg', '/images/drugs-4-rita-marley.jpg', '/images/drugs-9-public-enemy.jpg'], ['/images/drugs-5-dillinger.jpg', '/images/drugs-6-grandmaster-flash.jpg', '/images/drugs-7-eric-s-friends.jpg'], ['/images/drugs-11-william-bell.jpg', '/images/drugs-12-james-brown.jpg', '/images/drugs-13-last-poets.jpg']],
  },
];
