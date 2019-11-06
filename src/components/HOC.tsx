import React from "react";

export interface IPopup {
    title: string;
}

export const Popup = (props: IPopup) => (WrappedComponent: any) => {
  class WithDataFetching extends React.Component {

    render() {
      return (
          <div>
              <div>Higher Order Component = {props.title}</div>
               <WrappedComponent />
          </div>
       
      );
    }
  }

  return WithDataFetching;
};