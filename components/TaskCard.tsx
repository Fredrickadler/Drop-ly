import Link from 'next/link';
import { motion } from 'framer-motion';

type Task = {
  id: string;
  currency: 'ETH' | 'USDC';
  status: 'LIVE' | 'COMING_SOON' | 'COMPLETED';
  myStatus: 'NEW' | 'IN_PROGRESS' | 'COMPLETED';
  description: string;
  targetUser: {
    name: string;
    handle: string;
    avatar: string;
  };
  reward: {
    amount: number;
    usdValue: number;
  };
};

export const TaskCard = ({ task }: { task: Task }) => {
  return (
    <Link href={`/task/${task.id}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gray-800 rounded-xl p-4 mb-4 border-l-4 border-blue-500"
      >
        {/* محتوای کارت */}
      </motion.div>
    </Link>
  );
};