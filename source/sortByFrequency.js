/**
 * Сортирует массив чисел по частоте появления элементов
 * @param {Array<number>} arr - исходный массив чисел
 * @returns {Array<number>} новый массив, отсортированный по частоте
 * @example
 * // returns [1, 1, 1, 3, 3, 2, 2]
 * sortByFrequency([1, 2, 3, 3, 2, 1, 1])
 */
"use strict";
const sortByFrequency = function(arr) {
    // 1. Подсчитываем частоту каждого числа
    const frequency = {};
    
    const frequency = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;  
    }, {});
    
    // 2. Сортируем числа: сначала по частоте (убывание), потом по значению (возрастание)
    const sortedNumbers = Object.keys(frequency).sort((a, b) => {
        /**
         * Функция сравнения для сортировки по частоте и значению
         * @param {string} a - первый ключ для сравнения
         * @param {string} b - второй ключ для сравнения
         * @returns {number} результат сравнения
         */
        const freqA = frequency[a];
        const freqB = frequency[b];
        
        if (freqB !== freqA) {
            return freqB - freqA;
        }
        
       
        return Number(a) - Number(b);
    });
    
    
    const result = [];
    
    for (let i = 0; i < sortedNumbers.length; i++) {
        const num = Number(sortedNumbers[i]);
        const count = frequency[sortedNumbers[i]];
        
        for (let j = 0; j < count; j++) {
            result.push(num);
        }
    }
    
    return result;
};
