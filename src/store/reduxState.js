import { createStore } from "redux";
import constants from "../constants";

const initialState = {
    dataSets: [],
    chartData: {},
    activeSetIndex: 0
}

const reducer = (state = initialState, action) => {
    let chartData;
    switch (action.type) {
        case constants.ACTIONS.DATA_RECIEVED:
            let dataSets = action.payload;
            chartData = dataSets[0];
            return {
                ...state,
                dataSets,
                chartData
            }
        case constants.ACTIONS.CHANGE_DATA_SET:
            chartData = action.payload.chartData;
            let activeSetIndex = action.payload.activeSetIndex;
            return {
                ...state,
                chartData,
                activeSetIndex
            }
    }
}

const store = createStore(reducer);
export default store;