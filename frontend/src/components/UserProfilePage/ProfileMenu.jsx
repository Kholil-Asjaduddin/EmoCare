// components/ProfileMenu.jsx
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getCurrentUser, logoutUser } from "../../services/authService";

const ProfileMenu = () => {
    const [user, setUser] = useState(undefined);
    const [open, setOpen] = useState(false);
    const auth = getAuth();
    const menuRef = useRef();
    const navigate = useNavigate();

    const defaultAvatar = "https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg";

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

    const handleLogout = async () => {
        try {
            await logoutUser();
            setUser(null);
            setOpen(open);
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error.message);
        }
    };

    return (
        <div className="relative ml-auto" ref={menuRef}>
            <button onClick={handleDropdown} className="flex items-end gap-4 cursor-pointer bg-nav">
                <p className="mb-1 text-lg">{user ? user?.username : "Sign In"}</p>
                <img
                    src={user ? `data:image/jpeg;base64,${user.photoBase64}` : defaultAvatar}
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