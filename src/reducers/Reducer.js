function Reducer(state={result:[]},action){

    switch(action.type){
        case "Information":
            return Object.assign({}, state, { result: action.payload });

                default : return state;
    }
}
export default Reducer;