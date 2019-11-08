import React, { memo, useCallback } from "react";
import {Paragraph} from "./Paragraph";
import { useSelector, useDispatch } from "react-redux";
import { IStore } from "../store/IStore";
import { Popup } from "./HOC";
import {What} from "./What";



export const Section: React.FC = () => {
    const aba = useSelector((state: IStore) => state.obj.aba);
    const dispatch = useDispatch();

    const RequestFormPopup = Popup({
        title: "da"
      })(What);

      const anonymFunc = useCallback((a, b, c) => {
        console.log("dada");
      },[]);
    
    return (<div>
          {console.log("section rendered")}
                <h2>Section:</h2>
                <div>{aba}</div>
                <RequestFormPopup/>
                <Paragraph onWhatever={anonymFunc}/>
            </div>);
}