import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Messages/Messages";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route} from "react-router-dom";

function App (props) {
    return (
            <div className="app">
                <Header />
                <Navbar state={props.state} />
                <div className="app-wrapper-content">
                    <Route path='/profile' render={ () => <Profile state={props.state} dispatch={props.dispatch}/>}/>
                    <Route path='/messages' render={() => <Messages state={props.state} dispatch={props.dispatch}/>} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
    );
}

export default App;
