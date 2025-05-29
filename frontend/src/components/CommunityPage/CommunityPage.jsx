import { useState, useEffect } from "react";
import CommunityCard from "./CommunityCard";
import firebaseApp from "../../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getCurrentUser } from "../../services/authService";

const database = getDatabase(firebaseApp);

const CommunityPage = () => {
  const [user, setUser] = useState(undefined);
  const [communities, setCommunities] = useState([]);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const currentUser = await getCurrentUser(); 
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    const fetchCommunities = async () => {
  if (!user?.uid) {
    console.warn("User not logged in, skipping community fetch.");
    return;
  }

  try {
    const communitySnapshot = await get(ref(database, "communities"));
    const communitiesData = communitySnapshot.exists()
      ? Object.values(communitySnapshot.val())
      : [];

    const enrichedCommunities = communitiesData.map((community) => {
      const isJoined =
        Array.isArray(community.members) && community.members.includes(user.uid);
      return {
        ...community,
        isJoined,
      };
    });

    console.log("Enriched communities:", enrichedCommunities);
    setCommunities(enrichedCommunities);
  } catch (error) {
    console.error("Error fetching communities:", error);
  }
};

  
    fetchCommunities();
  }, [user]);

  const handleView = (id) => {
    // Navigate to the community chat page
    console.log(`Navigating to community chat page with ID: ${id}`);
  };

  return (
    <div className="w-screen grid grid-cols-2 pt-15">
      {communities.map((community) => (
        <CommunityCard
          key={community.id} 
          communityId={community.id}
          name={community.name}
          memberCount={community.memberCount}
          isJoined={community.isJoined}
          onView={() => handleView(community.id)}
        />
      ))}
    </div>
  );
};

export default CommunityPage;
