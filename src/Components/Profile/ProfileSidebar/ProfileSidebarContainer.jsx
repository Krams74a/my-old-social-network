import TrendItem from "./TrendItem/TrendItem";
import ProfileSidebar from "./ProfileSidebar";
import MyPosts from "../MyPosts/MyPosts";
import {connect} from "react-redux";

/*const ProfileSidebarContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();
                let trendsElements = state.profile.trendsInfo.map(t => <TrendItem name={t.name}
                                                                                  mentionsCount={t.mentionsCount}/>);

                return (
                    <ProfileSidebar trendsElements={trendsElements}/>
                )
            }}
        </StoreContext.Consumer>
    );
}*/

let mapStateToProps = (state) => {
    return {
        trendsElements: state.profile.trendsInfo.map(t => <TrendItem name={t.name} mentionsCount={t.mentionsCount}/>)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const ProfileSidebarContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileSidebar);

export default ProfileSidebarContainer;