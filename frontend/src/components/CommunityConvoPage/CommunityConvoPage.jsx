import CommunityProfile from './CommunityProfile';
import PostSection from './PostSection';

const CommunityConvoPage = () => {
    return (
        <div className="w-screen h-screen font-poppins flex flex-col">
            <div className="flex flex-row h-full">
                <CommunityProfile />
                <PostSection />
            </div>
        </div>
    );
};

export default CommunityConvoPage;