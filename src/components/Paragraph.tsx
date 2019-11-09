import React, { useState, useEffect, ReactNode, memo } from "react";
import { IStore } from "../store/IStore";
import { connect, useSelector, useDispatch, shallowEqual } from "react-redux";

interface IParagraph {
    onWhatever: (a: string, b: string, c: string) => void;
}

export const Paragraph: React.FC<IParagraph> = memo((props: IParagraph) => {
    const heading = useSelector((state: IStore) => state.heading);
    const dispatch = useDispatch();

    return (
        <div>
            {console.log("Pragraph rendered")}
            <h2>{heading.title}</h2>
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