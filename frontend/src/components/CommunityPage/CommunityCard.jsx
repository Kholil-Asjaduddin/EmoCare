import PropTypes from "prop-types";

import ViewButton from "./ViewButton";

const CommunityCard = ({ name, members, isJoined, onView }) => {
  return (
    // <div className="scale-70 flex flex-col justify-between items-center bg-nav rounded-[50px] py-11 drop-shadow-lg">
    <div className="w-140 scale-70 flex flex-col justify-between bg-nav rounded-[50px] py-5 justify-self-center">
      <div className="flex flex-col items-center">
        <h1 className="font-bold pb-2">{name}</h1>
        <p className="font-normal text-3xl">
          {members} {members > 1 ? "members" : "member"}
        </p>
      </div>
      <div className="w-full flex justify-center gap-8">
        {!isJoined ? (
          <ViewButton onClick={onView} />
        ) : (
          <div className="flex flex-col">
            <div className="flex gap-5">
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_223_121)">
                  <circle cx="20.5" cy="16.5" r="16.5" fill="#03C988" />
                </g>
                <defs>
                  <filter
                    id="filter0_d_223_121"
                    x="0"
                    y="0"
                    width="41"
                    height="41"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_223_121"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_223_121"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <p className="font-normal text-2xl text-teal text-shadow-md mb-4">
                You’re in this community
              </p>
            </div>
            <div className="flex justify-center scale-85">
              <ViewButton className="" onClick={onView} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

CommunityCard.propTypes = {
  name: PropTypes.string.isRequired,
  members: PropTypes.number.isRequired,
  isJoined: PropTypes.bool.isRequired,
  onView: PropTypes.func.isRequired,
};

export default CommunityCard;
