import JoinButton from "./JoinButton";
import ViewButton from "./ViewButton";
import LeaveButton from "./LeaveButton";

const CommunityPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <JoinButton onClick={() => console.log("Join button clicked")} />
            <ViewButton onClick={() => console.log("View button clicked")} />
            <LeaveButton onClick={() => console.log("View button clicked")} />
        </div>
    )
}

export default CommunityPage;