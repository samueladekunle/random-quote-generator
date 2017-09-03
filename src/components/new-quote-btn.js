import React, {Component} from "react";

export default class NewQuoteBtn extends Component {
    render() {
        return (
            <div className="col-xs-11 quote-btn">
                <button className="btn btn-primary new-quote" style={{backgroundColor: this.props.color}} onClick={this.props.changeState}>
                    New Quote
                </button>
            </div>
        );
    }
}