import React, {Component} from 'react'

class App extends React.Component {
    render() {
        let myName = 'Réka';
        let myFirstElement = <h2>I am {myName}.</h2>;
        return (
            <div className="App">
                <h1>Hello, React!</h1>
                {myFirstElement}
            </div>
        )
    }
}

let myName = 'Réka'

let firstElement = <h2>Hello React! This is my firstElement. I am {myName}.</h2>

export default App