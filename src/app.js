import React from 'react'
import NavBar from './Components/NavBar/index.js'
import Cards from './Components/Cards/index.js'

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Cards />
            </div>
        )
    }
}

export default App;