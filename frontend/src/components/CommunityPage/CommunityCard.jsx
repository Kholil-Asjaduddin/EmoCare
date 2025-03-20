import PropTypes from "prop-types";

import JoinButton from "./JoinButton";
import ViewButton from "./ViewButton";
import LeaveButton from "./LeaveButton";

const CommunityCard = ({
  name,
  members,
  isJoined,
  onJoin,
  onView,
  onLeave,
}) => {
  return (
    <div className="w-xl h-80 flex flex-col justify-between items-center bg-nav rounded-[50px] mb-25 p-12 drop-shadow-lg">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-5xl pb-2">{name}</h1>
        <p className="font-normal text-4xl">
          {members} {members > 1 ? "members" : "member"}
        </p>
      </div>
      <div className="w-full flex justify-center gap-8">
        {!isJoined ? (
          <JoinButton onClick={onJoin} />
        ) : (
          <>
            <ViewButton onClick={onView} />
            <LeaveButton onClick={onLeave} />
          </>
        )}
      </div>
    </div>
  );
};

CommunityCard.propTypes = {
  name: PropTypes.string.isRequired,
  members: PropTypes.number.isRequired,
  isJoined: PropTypes.bool.isRequired,
  onJoin: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
};

export default CommunityCard;
