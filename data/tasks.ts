export const tasks = [
  {
    id: '1',
    currency: 'ETH',
    status: 'LIVE',
    myStatus: 'NEW',
    description: 'Follow @jayonchain.eth on Warpcast',
    targetUser: {
      name: 'Jay 🔵🎩',
      handle: 'jayonchain.eth',
      avatar: '/avatars/avatar1.png',
    },
    reward: {
      amount: 0.006,
      usdValue: 11.04,
    },
  },
  // ... سایر تسک‌ها
] as const;