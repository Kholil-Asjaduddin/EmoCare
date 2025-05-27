// components/ProfileMenu.jsx
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getCurrentUser } from "../../services/authService";

const ProfileMenu = () => {
    const [user, setUser] = useState(undefined);
    const [open, setOpen] = useState(false);
    const auth = getAuth();
    const menuRef = useRef();
    const navigate = useNavigate();

    // Close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const fetchUserData = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                const currentUser = await getCurrentUser();
                setUser(currentUser);
            } else {
                setUser(null);
            }
        });

        return () => fetchUserData();
    }, [auth]);

    const handleDropdown = () => {
        if (user) {
            setOpen(!open);
        }
        else {
            navigate("/login");   
        }
    }

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <div className="relative ml-auto" ref={menuRef}>
            <button onClick={handleDropdown} className="flex items-end gap-4 cursor-pointer bg-nav">
                <p className="mb-1 text-lg">Sam</p>
                <img
                    src="https://imgs.search.brave.com/s-FdOtiJTvkBr0HYUw4f3vZj06rt6KUs5reDU36P13Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/Nzc1MDA1MS9waG90/by9sYXJnZS1tYW4t/bWFraW5nLWZ1bm55/LXN1cnByaXNlZC1m/YWNlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz10cXdrQS04/YnpLU1dTeHNFMXNS/VWNGWWo3QjBPZFFp/N1E4d29lRTBoQnZn/PQ"
                    alt="User avatar"
                    className="size-9 bg-gray-300 border border-bg-light rounded-full"
                />
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-xl border border-gray-50 z-80">
                    <button
                        onClick={() => navigate("/profile")}
                        className="block w-full px-4 py-2 text-left hover:bg-gray-100 rounded-lg text-teal"
                    >
                        Go to Profile
                    </button>
                    <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100 rounded-lg"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfileMenu;