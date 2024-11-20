// src/app/account/page.js
import { SignIn } from '@clerk/nextjs';

export default function AccountPage() {
  return (
    <div>
      <h1>Your Account</h1>
      <SignIn />
    </div>
  );
}