import constants from "../constants"

export const dataRecieved = (data) => {
    return {
        type: constants.ACTIONS.DATA_RECIEVED,
        payload: data
    }
}

export const changeDataSet = (data, index) => {
    return {
        type: constants.ACTIONS.CHANGE_DATA_SET,
        payload: {
            chartData: data,
            activeSetIndex: index
        }
    }
}