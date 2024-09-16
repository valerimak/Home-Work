function Pet (name, mark) {
    return {
        name,
        mark,
    }
};

const pet1 = Pet('Бобик', 4);
const pet2 = Pet('Шарик', 3);
const pet3 = Pet('Балто', 5);
const pet4 = Pet('Баскервиль', 4);
const pet5 = Pet('Хатико', 3);

function findAverageMark (pet1, pet2, pet3, pet4, pet5) {
    return (pet1.mark+pet2.mark+pet3.mark+pet4.mark+pet5.mark) / 5
}
console.log(findAverageMark(pet1, pet2, pet3, pet4, pet5));