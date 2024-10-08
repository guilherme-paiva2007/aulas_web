/**
 * Similar à `Array.forEach`, porém aplicado em HTMLCollection.
 * @param {Function} callback Passa pelos elementos dessa lista, executando tendo os parâmetros de: `element`, `index`, `collection`.
 */
HTMLCollection.prototype.forEach = function HTMLCollectionForEach(callback) {
    let collection = this;
    for (let index = 0; index < this.length; index++) {
        const element = collection[index];
        callback(element, index, collection)
    }
}

HTMLCollection.prototype.addEventListener = function HTMLCollectionAddEventListener(event, method) {
    this.forEach(element => {
        element.addEventListener(event, method);
    })
}

/**
 * Executa uma função baseada no valor atual do input
 * @param {Function(value, otherArgs)} executeFunction 
 * @param {Array} otherArgs
 */
function processInputValue(executeFunction, otherArgs) {
    if (this.value == undefined) this.value = "";

    executeFunction(this.value, otherArgs)
}
HTMLInputElement.prototype.processValue = processInputValue;
HTMLSelectElement.prototype.processValue = processInputValue;
HTMLMeterElement.prototype.processValue = processInputValue;
HTMLProgressElement.prototype.processValue = processInputValue;

/**
 * Remove um trecho de texto e retorna o novo.
 * @param {string} text
 * @returns {string}
 */
String.prototype.removeText = function removeText(text) {
    return this.split(text).join('');
};

/**
 * Diz se esta string é elemento de uma lista.
 * @param {string[]} list 
 * @returns {boolean}
 */
String.prototype.isIn = function isIn(list) {
    let isIn = false;
    list.forEach(element => {
        if (this == element) isIn = true;
    })
    return isIn;
}

/**
 * Transforma um número em hexadecinal
 * @returns {string}
 */
Number.prototype.toHexadecimal = function toHexadecimal() {
    let number = Math.floor(this);
    return number.toString(16);
}

/**
 * Verifica se um número está entre dois outros
 * @param {number} min Valor mínimo da verificação
 * @param {number} max Valor máximo da verificação
 * @param {boolean} includeEquals Inclue valores iguais ao mínimo ou máximo como verdadeiros
 * @param {boolean} complexReturn Muda o retorno para um objeto com detalhes da comparação
 * @returns {boolean|object}
 */
Number.prototype.isBetween = function isBetween(min, max, includeEquals, complexReturn) {
    if (min > max) [min, max] = [max, min];

    let isBetween = true;
    let rel = "between"
    let isEqualTo = null;
    if (includeEquals) {
        if (this > max) { isBetween = false; rel = "bigger" };
        if (this < min) { isBetween = false; rel = "smaller" };
        if (this == max) { isEqualTo = "max" }
        if (this == min) { isEqualTo = "min" }
    } else {
        if (this >= max) { isBetween = false; rel = "bigger" };
        if (this <= min) { isBetween = false; rel = "smaller" };
        if (this == max) { isEqualTo = "max" }
        if (this == min) { isEqualTo = "min" }
    }

    if (complexReturn) {
        let newObject = {}
        newObject.is = isBetween;
        newObject.rel = rel;
        newObject.includeEquals = includeEquals;
        newObject.isEqualTo = isEqualTo;
        newObject.originalValue = this + 0;
        isBetween = newObject;
    }

    return isBetween;
}

/**
 * Preenche um array até que ele esteja completamente cheio e retorna o novo array.
 * @param {any} filler 
 * @param {number} lengthNeeded 
 * @returns {array}
 */
Array.prototype.fillUntil = function fillUntil(filler, lengthNeeded) {
    if (typeof lengthNeeded !== "number") lengthNeeded = 0;

    let array = [];
    for (let i = 0; i < this.length; i++) {
        array[i] = this[i];
        
    }

    while (array.length < lengthNeeded) {
        array.push(filler)
    }
    return array
}

/**
 * Retorna o valor invertido de uma string.
 * @returns {string}
 */
String.prototype.reverse = function reverse() {
    return this.split('').reverse().join('')
}