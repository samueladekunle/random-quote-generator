import React, {Component} from "react";

export default class Author extends Component {
    render() {
        return(
            <footer style={{color: this.props.color}}>
                {this.props.author}
            </footer>
        );
    }
}