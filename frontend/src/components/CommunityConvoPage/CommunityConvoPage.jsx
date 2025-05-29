import { useState, useEffect, useCallback } from 'react';
import CommunityProfile from './CommunityProfile';
import PostSection from './PostSection';
import { useParams } from "react-router-dom";
import firebaseApp from "../../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getCurrentUser } from "../../services/authService";

const database = getDatabase(firebaseApp);

const CommunityConvoPage = () => {
    const [userId, setUserId] = useState(null);
    const [username, setUsername] = useState(null);
    const [userJoined, setUserJoined] = useState(null);
    const [communityName, setCommunityName] = useState(null);
    const [refreshKey, setRefreshKey] = useState(0);
    const [communityMemberCount, setCommunityMemberCount] = useState(null);
    const { chatId } = useParams();
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                const currentUser = await getCurrentUser();
                setUsername(currentUser.username);
                setUserId(currentUser.uid);
            } else {
                setUserId(null);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    // Ekstrak fetchCommunities ke fungsi useCallback agar bisa dipakai ulang
    const refreshCommunityData = useCallback(async () => {
    if (!userId) {
        console.warn("User not logged in, skipping community fetch.");
        return;
    }

    try {
        const communitySnapshot = await get(ref(database, `communities/${chatId}`));
        if (!communitySnapshot.exists()) {
            console.warn("Community not found:", chatId);
            return;
        }

        const commun = communitySnapshot.val();
        const isJoined = Array.isArray(commun.members) && commun.members.includes(userId);

        const enrichedCommunity = {
            ...commun,
            isJoined,
        };

        setCommunityName(enrichedCommunity.name);
        setCommunityMemberCount(enrichedCommunity.memberCount);
        setUserJoined(enrichedCommunity.isJoined);

        // Tambahkan ini untuk trigger re-render PostSection
        setRefreshKey(prev => prev + 1);
    } catch (error) {
        console.error("Error fetching community:", error);
    }
}, [userId, chatId]);

    useEffect(() => {
        refreshCommunityData();
    }, [refreshCommunityData]);

    return (
        <div className="w-screen h-screen font-poppins flex flex-col">
            <div className="flex flex-row h-full">
                <div className="basis-1/3">
                    {communityName && communityMemberCount && (userJoined != null) ? (
                        <CommunityProfile
                            onUserJoined={setUserJoined}
                            communityId={chatId}
                            userId={userId}
                            communityName={communityName}
                            communityMemberCount={communityMemberCount}
                            userJoined={userJoined}
                        />
                    ) : null}
                </div>
                <div className="basis-2/3">
                    {communityName && communityMemberCount && (userJoined != null) ? (
                        <PostSection
                            onSuccess={refreshCommunityData}
                            chatId={chatId}
                            userId={userId}
                            username={username}
                            userJoined={userJoined}
                            refreshKey={refreshKey}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default CommunityConvoPage;