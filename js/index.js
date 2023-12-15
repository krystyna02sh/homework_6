// const numbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму та кількість позитивних елементів.
// Знайти максимальний елемент масиву та його порядковий номер.
// Визначити кількість негативних елементів.
// Знайти кількість непарних позитивних елементів.
// Визначити кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.
// Знайти добуток позитивних елементів.
// Усі пораховані результати вивести одним повідомленням за допомогою alert.


const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sumOfPositives = 0;
let countOfPositives = 0;
let maxElement = -Infinity;
let indexOfMaxElement = -1;
let countOfNegatives = 0;
let countOfOddPositives = 0;
let countOfEvenPositives = 0;
let sumOfEvenPositives = 0;
let sumOfOddPositives = 0;
let productOfPositives = 1;

for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (num > 0) {
        sumOfPositives += num;
        countOfPositives++;
    }

    if (num > maxElement) {
        maxElement = num;
        indexOfMaxElement = i;
    }

    if (num < 0) {
        countOfNegatives++;
    }

    if (num > 0) {
        if (num % 2 !== 0) {
            countOfOddPositives++;
        } else {
            countOfEvenPositives++;
            sumOfEvenPositives += num;
        }
    }

    if (num > 0 && num % 2 !== 0) {
        sumOfOddPositives += num;
    }
    if (num > 0) {
        productOfPositives *= num;
    }
}


alert(`Сума позитивних елементів: ${sumOfPositives}
Кількість позитивних елементів: ${countOfPositives}
Максимальний елемент: ${maxElement} (під індексом ${indexOfMaxElement})
Кількість негативних елементів: ${countOfNegatives}
Кількість непарних позитивних елементів: ${countOfOddPositives}
Кількість парних позитивних елементів: ${countOfEvenPositives}
Сума парних позитивних елементів: ${sumOfEvenPositives}
Сума непарних позитивних елементів: ${sumOfOddPositives}
Добуток позитивних елементів: ${productOfPositives}`);
