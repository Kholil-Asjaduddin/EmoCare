import SignupForm from "./SignupForm";

const SignupPage = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            {/* Left Side - Welcome Message */}
            <div className="w-2/5 h-full flex items-center justify-center bg-nav text-center">
                <h1 className="text-navy text-6xl font-semibold leading-tight">
                    Welcome to EmoCare!
                </h1>
            </div>

            {/* Right Side - Signup Form */}
            <div className="w-3/5 h-full flex items-center justify-center">
                <SignupForm />
            </div>
        </div>
    );
};

export default SignupPage;
