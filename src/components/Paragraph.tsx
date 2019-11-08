import React, { useState, useEffect, ReactNode, memo } from "react";
import { IStore } from "../store/IStore";
import { connect, useSelector, useDispatch, shallowEqual } from "react-redux";
import { createSelector } from 'reselect'

interface IParagraph {
    onWhatever: (a: string, b: string, c: string) => void;
}

export const Paragraph: React.FC<IParagraph> = memo((props: IParagraph) => {
    // const color = useSelector((state: IStore) => state.counterColor);
    const aba = useSelector((state: IStore) => state.obj.aba);
    const dispatch = useDispatch();


    const decrement = () => {
        dispatch({ type: "DECREMENT" });
    }


    return (
        <div>
            {console.log("Pragraph rendered")}
            {/* This is a sibling and it receives counter: {color} */}
            <button onClick={decrement}>{aba}</button>
        </div>
    );
});

// const mapStateToProps = (state: IStore) => ({
//     counterColor: state.counterColor
// });

// const mapDispatchToProps = (state: IStore) => ({
//     counterColor: state.counterColor
// });

// export default connect(mapStateToProps, mapDispatch)(Paragraph);