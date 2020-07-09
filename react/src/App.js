import React from 'react';

class App extends React.Component {
    constructor(){
        super()
        this.name = "Tom"
    }

    render(){
        return(
                <div>
                <ul>
                    <li>tea</li>
                    <li>coffe</li>
                </ul>
                </div>
            
        )
    }
}

export default App