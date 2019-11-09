import { IStore } from "./IStore";

const initialState: IStore = {
	count: 24,
	counterColor: "green",
    heading: {
		title: "My awesome heading" ,
		color: "red"
	},

};

export const reducer = (state = initialState, action: any) => {
	const { heading } = state;

	switch (action.type) {
		case "INCREMENT":
			heading.title = "Incremented";
			return {
                ...state,
				heading,
				count: state.count + 1
			}
		case "DECREMENT":
			heading.title = "decremented";
			return {
				...state,
				heading,
				count: state.count - 1
			}
		default: 
			return state;
	}
};