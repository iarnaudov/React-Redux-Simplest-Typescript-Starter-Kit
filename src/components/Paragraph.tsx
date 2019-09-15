import React from "react";
import { IStore } from "../store/IStore";
import { connect } from "react-redux";

class Paragraph extends React.Component<{ count: number, dispatch: any }, {}> {
    public render() {
        return (
            <div>
                This is a sibling and it receives counter: {this.props.count}
            </div>
        );
    }
}

const mapStateToProps = (state: IStore) => ({
    count: state.count,
    counterColor: state.counterColor
});

export default connect(mapStateToProps)(Paragraph);