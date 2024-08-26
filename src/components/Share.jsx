import { useState } from "react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "/src/components/ui/dialog"
import { Button } from "/src/components/ui/button"
import { Label } from "/src/components/ui/label"
import { Input } from "/src/components/ui/input"

export function Share({ eventName, eventDate, eventTime, hostName }) {
  const [email, setEmail] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) {
      alert("Please enter an email address.");
      return;
    }

    // Construct email subject and body
    const subject = `You're invited to ${eventName}`;
    const body = `Hi there,\n\nYou're invited to the event:\n\nEvent: ${eventName}\nDate: ${eventDate}\nTime: ${eventTime}\n\nPlease RSVP to confirm your seat.\n\nBest regards,\n${hostName}`;

    // Open the user's default email client with the pre-filled email
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Show success message
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }
  return (
    (<Dialog defaultOpen>
      <DialogTrigger asChild>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-b from-white to-[#aad9d9] rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-center">Share Event Plan</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div>
            <Label htmlFor="email" className="sr-only text-White">Email </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
          </div>
          <Button type="submit" className="mx-auto flex items-center justify-center rounded-full border border-black text-black bg-gradient-to-t from-[#8D8DDA] to-white text-black hover:from-[#8080d7] hover:to-white shadow-md">
            Share Invite
          </Button>
          {showSuccess && <div className="text-green-400 px-4 py-2 rounded-md">Invite sent!</div>}
        </form>
      </DialogContent>
    </Dialog>)
  );
}