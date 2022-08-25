import React from "react";
import Header from "./Header";
import Main from './Main'
import Footer from './Footer';


class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <div >   
                <Main />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;
