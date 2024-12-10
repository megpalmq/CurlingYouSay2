"use client"
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import NavBar from "./components/Navbar/page";
import "./globals.css";
import { useState } from "react";
import { metadata } from "./metadata";

export default function RootLayout({ children }) {
  const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;
  const [showSignIn, setShowSignIn] = useState(false); // State to control sign-in visibility

  const toggleSignIn = () => {
    setShowSignIn((prev) => !prev); // Toggle the sign-in form visibility
  };

  return (
    <ClerkProvider frontendApi={clerkFrontendApi}>
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </head>
        <body>
          <NavBar /> {/* Always render the NavBar */}
          <div className="page">
            <SignedOut>
            
                <div className="sign-in-container">
                  <SignIn routing="hash" />
                </div>
            </SignedOut>
            <SignedIn>
              {children} {/* Render children only if signed in */}
            </SignedIn>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}