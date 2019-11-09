import React, { memo, useCallback } from "react";
import {Paragraph} from "./Paragraph";
import { useSelector, useDispatch } from "react-redux";
import { IStore } from "../store/IStore";
import { Popup } from "./HOC";
import { HOCChild } from "./HOCChild";



export const Section: React.FC = () => {
    const dispatch = useDispatch();

    const RequestFormPopup = Popup({
        title: "Hoc"
      })(HOCChild);

      const anonymFunc = useCallback((a, b, c) => {
        console.log("dada");
      },[]);
    
    return (<div>
          {console.log("section rendered")}
                <h2>Section:</h2>
                <RequestFormPopup/>
                <Paragraph onWhatever={anonymFunc}/>
            </div>);
}