import { useState, useEffect } from "react";
import CommunityCard from "./CommunityCard";
import CommunityConvoPage from "../CommunityConvoPage/CommunityConvoPage";

const CommunityPage = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    // Simulasi API call
    const fetchCommunities = async () => {
      const data = [
        { id: 1, name: "Community 1", members: 50, isJoined: false },
        { id: 2, name: "Community 2", members: 2, isJoined: true },
        { id: 3, name: "Community 3", members: 75, isJoined: true },
      ];
      setCommunities(data);
    };

    fetchCommunities();
  }, []);

  // const handleJoin = (id) => {
  //   setCommunities((prev) =>
  //     prev.map((community) =>
  //       community.id === id ? { ...community, isJoined: true } : community,
  //     ),
  //   );
  // };

  // const handleLeave = (id) => {
  //   setCommunities((prev) =>
  //     prev.map((community) =>
  //       community.id === id ? { ...community, isJoined: false } : community,
  //     ),
  //   );
  // };

  const handleView = (id) => {
    // Navigate to the community chat page
    console.log(`Navigating to community chat page with ID: ${id}`);
  };

  return (
    <div className="w-screen flex flex-row flex-wrap justify-between pt-20 px-27">
      {communities.map((community) => (
        <CommunityCard
          key={community.id}
          name={community.name}
          members={community.members}
          isJoined={community.isJoined}
          onView={() => handleView(community.id)} 
        />
      ))}
    </div>
  );
};

export default CommunityPage;
