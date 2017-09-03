import React, {Component} from "react";

export default class Quote extends Component {
    render() {
        return (
            <div className="row">
                <div className="row text-left col-xs-12">
                    <p>
                        <span>
                            <i className="fa fa-quote-left" style={{color: this.props.color}}>
                            </i>
                        </span>
                    </p>
                </div>
                <div className="row col-xs-offset-1 col-xs-9">
                    <p className="word-quote" style={{color: this.props.color}}>
                        {this.props.quote}
                    </p>
                </div>
                <div className="row text-right col-xs-12">
                    <p>
                        <span>
                            <i className="fa fa-quote-right" style={{color: this.props.color}}>
                            </i>
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}