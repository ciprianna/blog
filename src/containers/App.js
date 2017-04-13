import * as React from "react";
import { Component } from "react";
import styles from '.././App.css';
import Paragraph from '.././Paragraph';

export default class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <h1>Kitteh says, "Meowz!"</h1>
                <Paragraph text="Cute Kitteh" />
                <Paragraph text="Mrow, Kitteh" />
            </div>
        )}
};