import React, {Component} from 'react';
import "./Styles.css";

class App extends Component {

    constructor(props) {
        super(props);
    }

    // Changes the background color to light purple when website first starts.
    componentDidMount() {
        document.body.style.backgroundColor = "#D8BFD8"
    }

    render() {
        return (
            <div>
                <h1>Perfect Team</h1>
                <p>todo</p>
            </div>
        );
    }
}

export default App;
