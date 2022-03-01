const {favorites, others} = require("./animal.json");

console.log(others)

function amountOfFavoriteAnimals(){
    return favorites.length;
}

module.exports = {
    calculateFavoriteAnimals: amountOfFavoriteAnimals
};