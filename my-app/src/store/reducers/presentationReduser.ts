import { Reducer } from "redux";
import { ActionType, Presentation} from "../../types";
import name from "./presentationNameReduser";
import slidelist from "./slideReduce";
import { saveProgramAsPDF } from "../../functions/exportFunctions";


const stateStart: Presentation = {
    slidelist: [
        {
            elementlist:[], 
            background:{
                type: 'color', 
                color: '#FFFFFF'},
            effects: 'none',
            idSlide: 1,
            selected: false,
        },   
    ],
    name: 'Презентация без названия',
}


const presentation: Reducer<Presentation, any> = (state: Presentation = stateStart, action: ActionType): Presentation => {
    switch (action.type) {
        case 'EXPORT_PRESENTATION':
            saveProgramAsPDF(state);
            return state
        case 'SAVE_PRESENTATION':
            const toJSON = JSON.stringify(state);
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(toJSON);
            const downloadAnchorNode = document.createElement("a");
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute(
              "download",
              state.name + ".json"
            );
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
            return state;
        case 'OPEN_PRESENTATION': 
            return action.payload;
        case 'Undo': 
            return action.payload.presentation;
        case 'Redo':
            return action.payload.presentation;
        default: return{
            slidelist: slidelist(state.slidelist, action),
            name: name(state.name, action),
        }
    }
};  

export default presentation