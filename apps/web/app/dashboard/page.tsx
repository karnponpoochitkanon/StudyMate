import { redirect } from 'next/navigation';
import { auth } from '@/auth';

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/login');
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-navy px-6">
      <h1 className="text-3xl font-bold text-white">
        Welcome, 
        <span className="text-primary">
          {session.user.name}
        </span>
      </h1>
    </div>
  );
}
