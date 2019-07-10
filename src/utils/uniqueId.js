let lastId = 0;

const uniqueId = function (prefix='id') {
    lastId++
    return `${prefix}${lastId}`;
};

export default uniqueId;