import PropTypes from "prop-types";

const LeaveButton = ({ communityId, userId, onSuccess }) => {
  const onClick = async () => {
    if (!userId) {
            console.error("User not authenticated");
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/community/leave`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    communityId: communityId,
                    userId: userId
                })
            });
            if (response.status == 200) {
                onSuccess(true);
            }
        } catch (error) {
            console.error("Error saving profile:", error);
        }
  };
  return (
    <button
      onClick={onClick}
      className={`w-fit bg-red-broken text-navy font-normal text-3xl py-4 px-16 rounded-full drop-shadow-lg`}
    >
      Leave
    </button>
  );
};

LeaveButton.propTypes = {
  communityId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
};

export default LeaveButton;
