import Link from 'next/link';
import GoogleSignInButton from '@/components/GoogleSignInButton';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-navy px-6">
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-8 text-center shadow-xl">

        <Link href="/" className="text-2xl font-bold text-white">
          Study
          <span className="text-primary">
            Mate
          </span>
        </Link>

        <p className="mt-2 text-sm text-gray-400">
          Sign in to find your study partners
        </p>

        <div className="mt-8">
          <GoogleSignInButton />
        </div>
        
      </div>
    </div>
  );
}
