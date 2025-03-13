const JoinButton = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`bg-teal text-navy font-normal text-3xl py-4 px-20 rounded-full drop-shadow-lg`}
      >
        Join
      </button>
    )
  }
  
export default JoinButton;