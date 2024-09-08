// function ask(question, yes, no) {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// }
// ask('', function () { alert('Вы согласились') }, function () { alert('Вы Отказались') })
// Заменить все функции на arrow function

let ask = (question, yes, no) => {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}
ask('Вы согласны?', () => { alert('Вы согласились') }, () => { alert('Вы Отказались') });