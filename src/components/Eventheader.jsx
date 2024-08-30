import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "/src/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "/src/components/ui/avatar";
import React, { useState } from 'react';

export function Eventheader() {
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
              <DropdownMenuLabel>Logged in as Yogi</DropdownMenuLabel>
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


