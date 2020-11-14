const STATE_INITIAL={
    users:[],
    current_user:{}
}
export default(state=STATE_INITIAL,action)=>{
    switch(action.type){
        case "SetFirebaseUsers":
            return({
                ...state,
                users:action.name,
                
            })
        case "SetUser":
            return({
                ...state,
                current_user:action.name,
            })
        
        }
        return state;
}