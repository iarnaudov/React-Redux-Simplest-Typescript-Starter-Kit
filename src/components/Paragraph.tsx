import React, { useState, useEffect, ReactNode, memo } from "react";
import { IStore } from "../store/IStore";
import { connect, useSelector, useDispatch, shallowEqual } from "react-redux";
import { createSelector } from 'reselect'

interface IParagraph {
    counterColor: string, dispatch: any, children?: ReactNode;
}

export const Paragraph: React.FC = memo(() => {
    const color = useSelector((state: IStore) => state.counterColor);
    const dispatch = useDispatch();


    const decrement = () => {
        dispatch({ type: "DECREMENT" });
    }


    return (
        <div>
            {console.log("Pragraph rendered")}
            This is a sibling and it receives counter: {color}
            <button onClick={decrement}>DECREMENT</button>
        </div>
    );
});

// const mapStateToProps = (state: IStore) => ({
//     counterColor: state.counterColor
// });

// export default connect(mapStateToProps)(Paragraph);