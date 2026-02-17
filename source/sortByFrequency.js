"use strict";
/**
 * Сортирует массив чисел по частоте появления элементов
 * @param {Array<number>} arr - исходный массив чисел
 * @returns {Array<number>} новый массив, отсортированный по частоте
 * @example
 * // returns [1, 1, 1, 2, 2, 3, 3]
 * sortByFrequency([1, 2, 3, 3, 2, 1, 1])
 */
const sortByFrequency = (arr) => {
 
    const frequency = arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
    
    /**
     * Функция сравнения для сортировки по частоте и значению
     * @param {string} a - первый ключ для сравнения (строковое представление числа)
     * @param {string} b - второй ключ для сравнения (строковое представление числа)
     * @returns {number} результат сравнения
     */
    const sortedNumbers = Object.keys(frequency).sort((a, b) => {
        const freqA = frequency[a];
        const freqB = frequency[b];

        if (freqB !== freqA) {
            return freqB - freqA;
        }

        return Number(a) - Number(b);
    });

    const result = sortedNumbers.reduce((acc, numStr) => {
        const num = Number(numStr);
        const count = frequency[numStr];

        for (let j = 0; j < count; j++) {
            acc.push(num);
        }

        return acc;
    }, []);

    return result;
};
