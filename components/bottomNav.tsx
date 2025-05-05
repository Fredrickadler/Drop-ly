import Link from 'next/link';

export const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 flex justify-around py-3 border-t border-gray-700">
      <Link href="/wallet" className="flex flex-col items-center text-blue-400">
        <span>💳</span>
        <span className="text-xs">Wallet</span>
      </Link>
      <Link href="/leaderboard" className="flex flex-col items-center">
        <span>🏆</span>
        <span className="text-xs">Leaderboard</span>
      </Link>
      <Link href="/" className="flex flex-col items-center">
        <span>✅</span>
        <span className="text-xs">Tasks</span>
      </Link>
    </div>
  );
};