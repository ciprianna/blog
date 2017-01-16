import React, {Component} from 'react';
import Paragraph from './Paragraph';

export default class App extends Component {
    render() {
        return (
            <div className="my-app">
                <h1>Prrrrr</h1>
                <Paragraph text="First Kitteh" />
                <Paragraph text="Second Kitteh" />
            </div>
        );
    }
}