function objToArray (data){
    if(typeof data === 'object' && !Array.isArray(data)){
        const dataArrayed = Object.keys(data).map(key => data[key]);
        return dataArrayed;
    }else{
        return data;
    }
}

function myEach(data, alert){
    const array = objToArray(data);
    for (const element of array){
        alert(element);
    }
    return data;
};

function myMap(data, func){
    const array = objToArray(data);
    const newArray = [];
    for (const item of array){
        newArray.push(func(item));
    }
    return newArray;
}

function myReduce(data, func, acc){
    const array = objToArray(data);
    let reducedValue = '';
    if (acc !== undefined){
        reducedValue = array.reduce((x,y) => func(x,y),acc);
    }else{
        reducedValue = array.reduce((x,y) => func(x,y));
    }
    return reducedValue;
}

function myFind(data, predicateFunc){
    const array = objToArray(data);
    for (const item of array){
        if(predicateFunc(item) === true){
            return item;
        }
    }
}

function myFilter(data, predicateFunc){
    const array = objToArray(data);
    let newArray = [];
    for (const item of array){
        if(predicateFunc(item)===true){
            newArray.push(item);
        }
    }
    return newArray;
}

function mySize(data){
    const array = objToArray(data);
    let length = 0;
    for (const item of array){
        length++;
    }
    return length;
}

function myFirst (array, int){
    if(int === undefined){
        return array[0];
    }else {
        return array.slice(0,int);
    }
}

function myLast(array, int){
    if (int === undefined){
        return array[array.length-1];
    }else{
        return array.slice(array.length-int, array.length);
    }
}

function myKeys(obj){
    let newArray = [];
    for (const key in obj){
        newArray.push(key)
    }
    return newArray;
}

function myValues(obj){
    let newArray = [];
    for (const key in obj){
        newArray.push(obj[key])
    }
    return newArray;
}