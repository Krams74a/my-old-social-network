import TrendItem from "./TrendItem/TrendItem";
import ProfileSidebar from "./ProfileSidebar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        trendsElements: state.profile.trendsInfo.map(t => <TrendItem key={t.id} name={t.name} mentionsCount={t.mentionsCount}/>)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const ProfileSidebarContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileSidebar);

export default ProfileSidebarContainer;