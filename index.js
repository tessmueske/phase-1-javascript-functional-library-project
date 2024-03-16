function myEach(collection, callback){
    let objectArray = Object.values(collection)
    objectArray.forEach((element) => callback(element))
    return collection
}

function myMap(collection, callback){
    let objectArray = Object.values(collection)
    let newArray = objectArray.map((element) => callback(element))
    return newArray
}

function myReduce(collection, callback, acc) {
    let objectArray = Object.values(collection);
    let startValue = acc !== undefined ? acc : objectArray.shift();
    for (let i = 0; i < objectArray.length; i++) {
        startValue = callback(startValue, objectArray[i], collection);
    }
    return startValue;
}

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
          return values[i];
        }
      }
    }
    return undefined;
  }

function myFilter(collection, predicate){
    let objectArray = Object.values(collection);
    const newArray = []
    for (let item of objectArray) {
        if (predicate(item)) {
            newArray.push(item);
        }
    }
    return newArray;
}

function mySize(collection){
    let objectArray = Object.values(collection);
    const size = objectArray.length;
    return size
}

function myFirst(array, n){
        if (n !== undefined) {
            return array.slice(0, n);
        } else {
            return array[0];
        }
    }

function myLast(array, n){
        if (n !== undefined) {
            return array.slice(-n);
        } else {
            return array[array.length - 1];
        }
    }

function myKeys(object){
    let newArray = Object.keys(object);
    return newArray
}

function myValues(object){
    let newArray = Object.values(object);
    return newArray
}