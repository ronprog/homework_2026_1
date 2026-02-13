'use strict';

QUnit.module("Тестируем функцию sortByFrequency", function() {
    QUnit.test("Работает правильно с сортировкой по частоте появления", function(assert) {
        const result = sortByFrequency([4, 6, 2, 6, 4, 4, 2, 2, 2]);

        assert.deepEqual(result, [2, 2, 2, 2, 4, 4, 4, 6, 6], "Массив должен быть отсортирован по частоте.");
    });

    QUnit.test("Работает правильно с пустым массивом", function(assert) {
        const result = sortByFrequency([]);

        assert.deepEqual(result, [], "Пустой массив должен вернуть пустой массив.");
    });

    QUnit.test("Работает правильно с массивом с одним элементом", function(assert) {
        const result = sortByFrequency([5]);

        assert.deepEqual(result, [5], "Массив с одним элементом должен вернуть тот же элемент.");
    });
    QUnit.test('Дополнительный тест: один элемент', function(assert) {

    assert.deepEqual(sortByFrequency([5]), [5]);

    });

    QUnit.test('Дополнительный тест: все элементы разные', function(assert) {

    assert.deepEqual(sortByFrequency([5, 2, 8, 1, 9]), [1, 2, 5, 8, 9]);

    });
    QUnit.test("Уникальный тест: большие числа и границ", function(assert) {
    assert.deepEqual(
        sortByFrequency([1000, 1000, 999999, 999999, 999999, 0, 0, 0, 0]),
        [0, 0, 0, 0, 999999, 999999, 999999, 1000, 1000],
        "Большие числа корректно сравниваются и сортируются"
    );
});
    QUnit.test("Функция не изменяет исходный массив (не in-place)", function(assert) {

    const original = [4, 6, 2, 6, 4, 4, 2, 2, 2];
    const originalCopy = [...original]; 
    
    const result = sortByFrequency(original);

    assert.deepEqual(original, originalCopy, "Исходный массив остался без изменений");

    assert.notStrictEqual(result, original, "Функция вернула новый массив, а не изменила старый");

    assert.deepEqual(result, [2, 2, 2, 2, 4, 4, 4, 6, 6], "Результат отсортирован верно");
});
});



