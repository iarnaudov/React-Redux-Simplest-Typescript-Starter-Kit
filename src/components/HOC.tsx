import React, { ReactType } from "react";

export interface IPopup {
  title: string;
}

export const Popup = (props: IPopup) => (WrappedComponent: ReactType) => {
  const popup = () => {
      return (
        <div>
          <div>Higher Order Component = {props.title}</div>
          <WrappedComponent {...props} />
        </div>
      );
    };

  return popup;
};