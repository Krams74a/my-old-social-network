import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Messages/Messages";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route, BrowserRouter} from "react-router-dom";

function App (props) {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Navbar state={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={ () => <Profile profile={props.state.profile} addPost={props.addPost}  updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/messages' render={() => <Messages state={props.state.messages} messagesInfo={props.state.messages.messagesInfo}/>} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
