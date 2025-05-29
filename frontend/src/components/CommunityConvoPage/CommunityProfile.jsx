import { useState } from 'react';
import PropTypes from 'prop-types';
import LeaveButton from '../CommunityPage/LeaveButton';
import JoinButton from '../CommunityPage/JoinButton';

const CommunityProfile = ({ communityId, userId, communityName, communityMemberCount, userJoined, onUserJoined }) => {
    const [userJoinedState, setUserJoinedState] = useState(userJoined);
    const [communityMemberCountState, setCommunityMemberCountState] = useState(communityMemberCount);

    const userJoinedHandler = () => {
        setUserJoinedState(true); 
        onUserJoined(true);
        setCommunityMemberCountState(communityMemberCountState + 1);
    }

    const userLeaveHandler = () => {
        setUserJoinedState(false);
        onUserJoined(false);
        setCommunityMemberCountState(communityMemberCountState - 1);
    }

    return (
    <div className="w-[357px] h-full text-[#13005A] text-center content-center border-r border-blue-dark">
        <h2 className="text-[30px] font-bold">{communityName}</h2>
        <p className="text-[20px] font-medium mt-4">{`Member${communityMemberCountState > 1 ? "s" : ""}: `} {communityMemberCountState}</p>
        <div className='scale-60'>
            {!userJoinedState ? (
                <JoinButton onSuccess={userJoinedHandler} communityId={communityId} userId={userId} />
            ) : (
                <LeaveButton onSuccess={userLeaveHandler} communityId={communityId} userId={userId}/>
            )}
        </div>
    </div>
    );
};

CommunityProfile;CommunityProfile.propTypes = {
    communityId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    communityName: PropTypes.string.isRequired,
    communityMemberCount: PropTypes.number.isRequired,
    userJoined: PropTypes.bool.isRequired,
    onUserJoined: PropTypes.func.isRequired,
};

export default CommunityProfile;