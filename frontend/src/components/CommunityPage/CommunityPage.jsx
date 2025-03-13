import JoinButton from "./JoinButton";

const CommunityPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <JoinButton onClick={() => console.log("Join button clicked")} />
        </div>                        
    )
}

export default CommunityPage;