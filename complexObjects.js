/* 
OBJECTS
*/

let netflix = {
    id: 9,
    name: 'super store',
    season1: {
        SeasonInfo: {
            episodeInfo: [
                { episode: 1, episodeName: 'Pilot' },
                { episode: 2, episodeName: 'Magazine Profile' },
                { episode: 3, episodeName: 'Shots and salsa' },
                { episode: 4, episodeName: 'Mannaquin' },
                { episode: 5, episodeName: 'Shoplifter' },
                { episode: 6, episodeName: 'Secret Shopper' },
                { episode: 7, episodeName: 'Color Wars' },
                { episode: 8, episodeName: 'Wedding Day Sale' },
                { episode: 9, episodeName: 'All-nighter' },
                { episode: 10, episodeName: 'Demotion' },
                { episode: 11, episodeName: 'Labor' }
            ]
        }
    },
    season2: {},
    season3: {}
}


//console.log(netflix);
//console.log(netflix.season1.SeasonInfo.episodeInfo); // dot notation allows us to get deeper into the object.
//console.log(netflix.season1.SeasonInfo.episodeInfo[3].episodeName)

//pick an episode to log in the terminal using dot natation walk into the netflix 
//object and print of the episdoe number and episdoe name
console.log(netflix.season1.SeasonInfo.episodeInfo[6].episode, netflix.season1.SeasonInfo.episodeInfo[6].episodeName)

//JSON -> javascript object notation


let spaceJam = {
    toonsqaud: {
        human: 'michael jordan',
        rabit1: 'Bugs bunny',
        rabit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        CharlotteHornets1: 'Larry Johnson',
        CharlotteHornets2: 'Muggst Bogues'
    }
}

console.log(Object.keys(spaceJam)); // Object.keys returns an array consisting of the keys in our object
console.log(Object.keys(spaceJam.toonsqaud));
console.log(Object.keys(spaceJam.toonsqaud).toString());

console.log(Object.values(spaceJam)); // Object.values an array of the items in an array format.
console.log(Object.values(spaceJam.toonsqaud));

let garden = {
    vegetable: 'zuccini',
    flower: 'Sunflower',
    fruit: 'Grape',
    water: true,
    sun: true,
    size: 10
}
console.log(garden.vegetable); // use dot notation with key to get the value
console.log(garden.flower);
console.log(garden.water);

let inc = 'vegetable';

console.log(garden.inc); // undefined
console.log(garden[inc]);


let baking = {}
baking['zuccini'] = 'better make some bread'
console.log(baking.zuccini)
