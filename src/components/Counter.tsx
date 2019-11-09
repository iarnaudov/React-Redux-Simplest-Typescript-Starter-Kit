import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../store/IStore";

export const Counter = () => {
    const counter = useSelector((state: IStore) => state.count);
    const dispatch = useDispatch();
    const componentName: string = "Counter";

    useEffect(() => {
        console.log(componentName + " update called");
    });

    const increment = () => {
        dispatch({ type: "INCREMENT" });
    }

    const decrement = () => {
        dispatch({ type: "DECREMENT" });
    };

    return (
        <div>
            <button onClick={increment}>+</button>
            <span>{counter}</span>
            <button onClick={decrement}>-</button>
        </div>
    );
}