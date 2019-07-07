import { combineReducers } from 'redux'
import movie from './movie'

export default combineReducers ({
    //dummyVariable: () => 10,
    movie
})


/* 
RULES OF REDUCERS

1. Must return any value besides 'undefined'
    It can be a nubmer, string, object, array or null
2. Reducers are supposed to return 'state' or data to be used inside of your app 
    using only previos state and acition from the last time it was called 
    (reducers are pure).
3. Reducers must be pure functions
    Just return values that use its inputs arguments (state, action)
4. Must not mutate its input 'state' argument
    Mutate = modify the original array(push, pop)/object(update, add or remove a key-value pair)
    dont do: state.pop or state.name ='some name'
    In JS strings and numbers are imutable values, we can't change them in the same way
    we can easly change an array or object. 
        Ex: const name = 'Sam'
            name[0] = 'X'
            name // -->"Sam"
    So, when you are working with arrays and objects, you have to worry about mutation.


    const numbers = [1, 2, 3]
    Here Js compares the value of the variables.
    1 === 1 // true
    "hi" === "hi" //true
    1 !== 2 // true

    numbers === numbser //true
    numbers === [1, 2 3] //false, why?
    In comparison among array/objects, javascript checks if the reference to the new 
    array/object is exact the same array/object in memory, not the contents of the array/object.

    This mutation rule is misleading. You can mutate state and redux will not throw any error message.


    Look at hasChanged reducers at https://github.com/reduxjs/redux/blob/master/src/combineReducers.js

    If accidentaly return the same value that is pumped into your reducer (even if we modify
        the passed state argument) with a return state in the very bottom, the js will see
        that is the same reference in memory (remember: it doesnt care about its content)
        and will not update the store.
        So, thats what people mean with the rule of not mutating the state argument.
*/
