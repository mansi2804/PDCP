import { Link } from "react-router-dom";
import { Input } from "/src/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "/src/components/ui/dropdown-menu";
import { Button } from "/src/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "/src/components/ui/avatar";
import { Separator } from "/src/components/ui/separator";
import React, { useState,useContext } from 'react';
import LocationList from './LocationList';
import { LocationContext } from '/src/components/LocationContext';  



export function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [showLocations, setShowLocations] = useState(false);


  const [locationInput, setLocationInput] = useState('Chicago, IL'); // Default location


  const { fetchLocations } = useContext(LocationContext);

  const handleSearch = () => {
    setShowLocations(true); // Show the location list on search
    fetchLocations(locationQuery, searchQuery);
  };
  
  return (
    <>
  
      <header
        className="w-full h-[11vh] bg-background px-4 md:px-8 lg:px-10 shadow-sm sticky top-0 z-50"
        style={{ backgroundColor: "#000235" }}
      >
        <div className="container flex items-center justify-between h-full px-4 mx-auto md:px-6">
          <a href="#" className="flex items-center gap-2">
            <span className="text-lg font-semibold bg-gradient-to-r from-[#8d8ddf] to-white bg-clip-text text-transparent">
              PlanItNow
            </span>
          </a>

          <div className="flex items-center bg-gradient-to-r from-white to-[#8d8ddf] rounded-full border px-5 py-1 w-full max-w-xl mx-auto shadow-lg">
            <div className="flex items-center gap-4 flex-1">
              <Input
                type="search"
                placeholder="I'm looking for……"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none focus:ring-0 flex-1 text-gray-500"
              />
              <div className="h-8 w-px bg-black" />
              <Input
                type="search"
                placeholder="Location"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                className="bg-transparent border-none focus:ring-0 flex-1 text-gray-500"
              />
            </div>
            <div className="flex-shrink-0 ml-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => {handleSearch()
                  console.log("Search button clicked");
                  console.log("Search Query:", searchQuery);
                  console.log("Location Query:", locationQuery);
                }}
              >
                <SearchIcon className="h-5 w-5 text-gray-500" />
              </Button>
            </div>
          </div>



          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="w-14 h-14 bg-gradient-to-b from-[#8d8ddf] to-white border p-1 relative">
                <AvatarImage className="absolute inset-0 bg-gradient-to-b from-[#8d8ddf] to-white border opacity-40 rounded-full" src="/placeholder-user.jpg" alt="User Avatar" />
                <AvatarFallback>YP</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-gradient-to-b from-white to-[#8d8ddf] border rounded-lg p-2"
            >
              <DropdownMenuLabel>Logged in as Pratima</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <a href="#" className="text-black">
                  Create Plan
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="http://localhost:5173/plans" className="text-black">
                  View Plans
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="http://localhost:5173/events" className="text-black">
                  Events
                </a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <a href="http://localhost:5173/" className="text-black">
                  Logout
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="w-full h-[2px] bg-white"></div>
    </>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}