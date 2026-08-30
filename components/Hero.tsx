import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
        Study<span className="text-primary">Mate</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg text-gray-300">
        Find the right study partners for your SKE/CPE courses at Kasetsart
        University.
      </p>
      <Link
        href="/login"
        className="mt-10 rounded-full bg-primary px-8 py-3 text-base font-semibold text-navy transition-transform hover:scale-105"
      >
        Get Started
      </Link>
    </section>
  );
}
