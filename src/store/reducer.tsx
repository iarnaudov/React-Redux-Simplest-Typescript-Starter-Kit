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
	const { obj } = state;

	switch (action.type) {
		case "INCREMENT":
			obj.baba = "default2";
			return {
                ...state,
				counterColor: action.data.counterColor,
				obj,
				count: state.count + 1
			}
		case "DECREMENT":
			obj.baba = "defbababa";
			return {
				...state,
				obj,
				count: state.count - 1
			}
		default: 
			return state;
	}
};