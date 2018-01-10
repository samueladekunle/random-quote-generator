import React, {Component} from "react";
import {CSSTransitionGroup} from "react-transition-group";
import Quote from "./components/quote";
import Author from "./components/author";
import TwitterBtn from "./components/twitter-btn";
import NewQuoteBtn from "./components/new-quote-btn";
import quotes from "./data/quotes.json";
import "./index.css";

export default class App extends Component {
    constructor(props) {
        super(props);
        var index = this.getIndex();
        this.state = {
            index: index,
            color: this.getColor(),
            quote: this.getQuote(index),
            author: this.getAuthor(index)
        };
        this.getIndex = this.getIndex.bind(this);
        this.getColor = this.getColor.bind(this);
        this.getQuote = this.getQuote.bind(this);
        this.getAuthor = this.getAuthor.bind(this);
        this.changeState = this.changeState.bind(this);
    }
    getIndex() {
        var index = Math.floor(Math.random() * quotes.quote.length);
        return index;
    }
    getColor() {
        var color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        return color;
    }
    getQuote(index) {
        var quote = quotes.quote[index][1];
        return quote;
    }
    getAuthor(index) {
        var author = quotes.author[quotes.quote[index][0]][1];
        return author;
    }
    changeState() {
        var index = this.getIndex();
        this.setState({
            index: index,
            color: this.getColor(),
            quote: this.getQuote(index),
            author: this.getAuthor(index)
        });
    }
    componentDidMount() {
        setInterval(this.changeState, 5000);
    }
    render() {
        return (
            <CSSTransitionGroup key={this.state.index} transitionName="main" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                <div style={{height: window.innerHeight, width:window.innerWidth, backgroundColor: this.state.color,}}>
                    <div className="container-fluid">
                        <div className="row quote-bar">
                            <blockquote className="blockquote-reverse col-xs-12">
                                <Quote color={this.state.color}
                                       quote={this.state.quote} />
                                <Author color={this.state.color}
                                        author={this.state.author} />
                                <div className="row">
                                    <TwitterBtn color={this.state.color}
                                                quote={this.state.quote}
                                                author={this.state.author} />
                                    <NewQuoteBtn color={this.state.color}
                                                 changeState={() => this.changeState()} />
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </CSSTransitionGroup>
        );
    }
}