import React, {Component} from "react";

export default class TwitterBtn extends Component {
    render() {
        return(
            <div className="col-xs-1 tweet-btn text-left">
                <a className="btn btn-primary text-left twitter-bird" target="_blank" href={"https://www.twitter.com/intent/tweet?hashtags=quotes&related=SamuelAdekunle&text=" + encodeURIComponent("'" + this.props.quote + "'" + this.props.author)} style={{backgroundColor: this.props.color}}>
                    <i className="fa fa-twitter"></i>
                </a>
            </div>
        );
    }
}