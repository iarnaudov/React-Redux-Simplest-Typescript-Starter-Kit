import React from "react";
import { connect } from "react-redux";
import { IStore } from "../store/IStore";

class Counter extends React.Component<{ count: number, counterColor: string, dispatch: any }, {}> {

    private className = "Counter";

    componentWillMount() {
        console.log(this.className + " componentWillMount called");
    }

    componentDidMount() {
        console.log(this.className + " componentDidMount called");
    }

    componentWillUpdate() {
        console.log(this.className + " componentWillUpdate called");
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

    public render() {
        console.log(this.className + " render called");

        return (
            <div>
                <h2 style={{backgroundColor: this.props.counterColor}}>Counter:</h2>
                <button onClick={() => this.increment()}>+</button>
                <span className="count">{this.props.count}</span>
                <button onClick={() => this.decrement()}>-</button>
            </div>
        );
    }
}

const mapStateToProps = (state: IStore) => ({
    count: state.count,
    counterColor: state.counterColor
});

export default connect(mapStateToProps)(Counter);