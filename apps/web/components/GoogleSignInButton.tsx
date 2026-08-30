'use client';

import { signIn } from 'next-auth/react';

export default function GoogleSignInButton() {
  return (
    <button
      onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
      className="flex w-full items-center justify-center gap-3 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-navy transition-transform hover:scale-[1.02]"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 11v2.4h5.6c-.24 1.4-1.68 4.1-5.6 4.1-3.37 0-6.12-2.79-6.12-6.5S8.63 4.5 12 4.5c1.92 0 3.2.82 3.94 1.52l2.69-2.6C16.98 1.7 14.7.7 12 .7 5.98.7 1.1 5.58 1.1 11.5S5.98 22.3 12 22.3c6.93 0 11-4.87 11-11.72 0-.79-.08-1.39-.19-1.98H12Z"
        />
      </svg>
      Sign in with Google
    </button>
  );
}
