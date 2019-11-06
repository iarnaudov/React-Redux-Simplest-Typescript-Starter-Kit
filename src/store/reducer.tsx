import { IStore } from "./IStore";

const initialState: IStore = {
    count: 24,
    obj: {
		aba: "dada" ,
		baba: "nene"
	},
    counterColor: "green",
};

export const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case "INCREMENT":
			return {
                ...state,
				counterColor: action.data.counterColor,
				obj: {
					...state.obj,
					baba: "default2"
				},
				count: state.count + 1
			}
		case "DECREMENT":
			return {
				...state,
				obj: {
					...state.obj,
					baba: "defbababa"
				},
				count: state.count - 1
			}
		default: 
			return state;
	}
};