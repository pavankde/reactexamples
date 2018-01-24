const redux=require("redux");
//create Central store
const createStore=redux.createStore;

//1. data
const initializeState={count:1}

//2. acton creators
const inc="INCREMENT";
const addtype="add";
function increment() {
    return {type: inc}
}

function add(num) {
    return {type: addtype,value : num}
}
console.log("First redux example");

var mathReduer= (state=initializeState,action) => {
    switch (action.type) {
        case inc:
            return {count: state.count+1}            
        case addtype:
            return {count: state.count+action.value}
        default:
            return state;
    }   
    return state;
}
//4.  register reduer 
let mystore=createStore(mathReduer);
console.log("My Store", mystore.getState());
//5. state update notification
mystore.subscribe(()=>{
    console.log("[Subscribe]",mystore.getState());
})

/*mystore.dispatch({type: "INC_COUNTER"})
mystore.dispatch({type: "ADD_COUNTER", value:502})*/
// 6. trigget the action dispatch.
mystore.dispatch(increment());
mystore.dispatch(add(300));


