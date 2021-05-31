import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import MessagesPage from "./Components/MessagesPage/MessagesPage";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route} from "react-router-dom";
import React from "react";
import UsersContainer from "./Components/Users/UsersContainer";

function App (props) {
    return (
            <div className="app">
                <Header />
                <Navbar state={props.state} />
                <div className="app-wrapper-content">
                    <Route path='/profile' render={ () => <Profile store={props.store}/>}/>
                    <Route path='/messages' render={() => <MessagesPage store={props.store}/>} />
                    <Route path='/users' render={() => <UsersContainer store={props.store}/>} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
    );
}

export default App;
