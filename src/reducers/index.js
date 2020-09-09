import {combineReducers} from 'redux';


const addTemplateReducer = (tempList=[], action) => {
    if (action.type === "ADD_TEMPLATE"){
        return [...tempList,action.payload]
    }
        return tempList
};

const loadTemplateReducer = (loadTempList=[], action) => {
    if (action.type === "ADD_TEMPLATE"){
        return [...loadTempList,action.payload]
    }
        return loadTempList
};



export default combineReducers({
    loadTemplate:loadTemplateReducer,
    templates:addTemplateReducer
});





















// const modeTypeReducer = (mode={activeSend:false, activeMail:false}, action) => {
//     if (action.type === "MODE_SELECTED"){
//         if (action.payload === "Send"){
//             return {activeSend:true, activeMail:false}
//         }else if (action.payload === "Mail"){
//             return {activeSend:false, activeMail:true}
//         }else
//             return mode 
//     }
//     return mode 
// };
