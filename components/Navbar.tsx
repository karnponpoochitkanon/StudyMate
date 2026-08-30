import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 sm:px-10">
      <Link href="/" className="text-xl font-bold text-white">
        Study<span className="text-primary">Mate</span>
      </Link>
      <Link
        href="/login"
        className="text-sm font-medium text-gray-300 transition-colors hover:text-primary"
      >
        Login
      </Link>
    </nav>
  );
}
