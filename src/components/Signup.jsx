import { Dialog, DialogContent } from "/src/components/ui/dialog";
import { Button } from "/src/components/ui/button";
import { Label } from "/src/components/ui/label";
import { Input } from "/src/components/ui/input";

export function Signup({ isOpen, onClose , switchLogin }) {
  // Function to handle Google OAuth
  const handleGoogleSignup = () => { 
    const googleOAuthUrl = "http://your-backend-url.com/auth/google";
    window.location.href = googleOAuthUrl;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] backdrop-blur-md bg-opacity-50 bg-gradient-to-b from-[#AAD9D9] to-[white]">
        <div className="space-y-6 p-6  bg-white rounded-lg shadow-lg bg-gradient-to-t from-[#AAD9D9] to-[white]">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold">Sign Up</h2>
            <p className="text-muted-foreground">Enter your details to create an account.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Doe" required />
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full bg-gradient-to-t from-[#8d8ddf] to-white rounded-full border border-input px-6 py-3 text-base font-medium shadow-lg transition-transform transform hover:from-[#8080d7] hover:to-white hover:scale-105 hover:bg-accent hover:text-accent-foreground"
            onClick={handleGoogleSignup}
          >
            <ChromeIcon className="mr-2 h-5 w-5" />
            Sign up with Google
          </Button>
          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <div className="underline" onClick={switchLogin}>
              Login
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}
