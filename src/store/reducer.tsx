import { IStore } from "./IStore";

const initialState: IStore = {
    count: 24,
    appColor: "blue",
    counterColor: "green",
};

export const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case "INCREMENT":
			return {
                ...state,
                appColor: action.data.appColor,
                counterColor: action.data.counterColor,
				count: state.count + 1
			}
		case "DECREMENT":
			return {
                ...initialState,
				count: state.count - 1
			}
		default: 
			return state;
	}
};