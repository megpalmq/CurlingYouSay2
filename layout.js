// src/pages/_app.js or src/app/layout.js
import { ClerkProvider } from '@clerk/nextjs';
import { RedirectToSignIn } from '@clerk/nextjs';

const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider frontendApi={clerkFrontendApi}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;