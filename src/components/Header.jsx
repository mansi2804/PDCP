import { useState } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login"; 

export function Header() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSignupOpen = () => setIsSignupOpen(true);
  const handleSignupClose = () => setIsSignupOpen(false);

  const handleLoginOpen = () => {
    console.log("Opening Login...");
    setIsSignupOpen(false);
    setIsLoginOpen(true);
    console.log("Opened Login...");
  };
  const handleLoginClose = () => setIsLoginOpen(false);

  return (
    <>
      <header
        className="w-full h-[11vh] bg-background px-6 md:px-8 lg:px-10 shadow-sm"
        style={{ backgroundColor: "#000235" }}
      >
        <div className="container mx-auto flex items-center justify-between h-full">
          <a href="#" className="flex items-center gap-2">
            <span className="text-lg font-semibold bg-gradient-to-r from-[#8d8ddf] to-white bg-clip-text text-transparent">
              PlanItNow
            </span>
          </a>
          <div className="flex items-center gap-4">
            <button
              onClick={handleLoginOpen}
              className="bg-gradient-to-t from-[#8d8ddf] to-white text-black inline-flex h-9 items-center justify-center rounded-full border border-input px-4 py-2 text-sm font-medium shadow-sm transition-transform transform hover:scale-105 hover:bg-accent hover:text-accent-foreground hover:from-[#8080d7] hover:to-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Login
            </button>
            <button
              onClick={handleSignupOpen}
              className="bg-gradient-to-t from-[#8d8ddf] to-white text-black inline-flex h-9 items-center justify-center rounded-full border border-input px-4 py-2 text-sm font-medium shadow-sm transition-transform transform hover:scale-105 hover:bg-accent hover:text-accent-foreground hover:from-[#8080d7] hover:to-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>
      <div className="w-full h-[2px] bg-white"></div>

      <Signup isOpen={isSignupOpen} onClose={handleSignupClose} switchLogin={handleLoginOpen} />
      <Login isOpen={isLoginOpen} onClose={handleLoginClose} switchSignup={handleSignupOpen} />
    </>
  );
}
