const fishes = ['catfish', 'carp-fish', 'grasscarp', 'eel-fish', 'crucian carp', 'pike-fish', 'shark', 'seabass-fish', 'barracuda-fish']


/* 
function dbSearch(string) {
    let result = [];
    for (const fish of fishes) {
        if (result.length < 5 && fish.includes(string)) {
            result.push(fish)
        }
    }
    return result
}
 */


function dbSearch(db, string) {
    const result = db.filter(element => element.includes(string))

    return result.length > 5 ? result.slice(0, 5) : result
}


// console.log(dbSearch(fishes, 'fish'));

module.exports = dbSearch