import React from "react";
import { connect } from "react-redux";
import { IStore } from "../store/IStore";
import { object } from "prop-types";

class Counter extends React.Component<{ simple1: string, dispatch: any }, {}> {
    private className = "Counter";

    componentDidMount() {
        console.log(this.className + " componentDidMount called");
    }

    componentDidUpdate() {
        console.log(this.className + " componentDidUpdate called");
    }

    private increment = () => {
        this.props.dispatch({ type: "INCREMENT", data: {
            appColor: "red",
            counterColor: "yellow",
        }});
    }

    private decrement = () => {
        this.props.dispatch({ type: "DECREMENT" });
    }

    private changeColor = () => {
        this.props.dispatch({ type: "CHANGE_Color" });
    }

    public render() {
        return (
            <div>
                {/* <h2 style={{backgroundColor: this.props.counterColor}}>Counter:</h2> */}
                <button onClick={() => this.increment()}>+</button>
                {/* <span className="count">{this.props.count}</span> */}
                <span >{this.props.simple1}</span>
                <button onClick={() => this.decrement()}>-</button>
            </div>
        );
    }
}

const mapStateToProps = (state: IStore) => ({
    // count: state.count,
    // counterColor: state.counterColor,
    simple1: state.obj.aba
});

export default connect(mapStateToProps)(Counter);