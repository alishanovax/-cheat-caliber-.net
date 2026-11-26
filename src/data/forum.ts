export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    upvotes: 14,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'caliber-map-awareness', title: 'What does map awareness include in the guide?', upvotes: 73,
    excerpt: 'A quick breakdown of player, chest, loot, and smoke information covered by the map awareness guide.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Caliber wall ESP setup guide', sourcePath: '/blog/caliber-esp-setup/',
    answer: 'The guide covers operator ESP, chest and reboot markers, loot information, smoke alerts, and last-seen positions. The exact options depend on the selected product tier.',
    detail: 'It recommends starting with a restrained layout and enabling only the information you can read comfortably during a team fight.',
    tip: 'Keep the overlay uncluttered: begin with the core indicators, then adjust the range and visibility settings one at a time.',
  }),
  guideDiscussion({
    slug: 'map-overlay-setup', title: 'How should I set up the map overlay for the first time?', upvotes: 58,
    excerpt: 'Start with the basic display options, confirm the overlay in a practice session, then adjust one setting at a time.',
    category: 'Guides & Builds', categoryTone: 'blue',     sourceTitle: 'Wall ESP overlay setup walkthrough (ESP guide)', sourcePath: '/blog/caliber-esp-setup/',
    answer: 'Use the setup guide to enable the overlay, choose readable colors, and check that the indicators do not cover important parts of the game interface.',
    detail: 'Test your layout in a bot lobby before relying on it in a live match. A simple configuration is easier to understand than turning on every option immediately.',
    tip: 'If the screen feels crowded, reduce the number of indicators before changing their size or position.',
  }),
  guideDiscussion({
    slug: 'camera-zoom', title: 'What camera zoom settings are comfortable to play with?', upvotes: 44,
    excerpt: 'The zoom guide focuses on finding a view that improves map context without making your player hard to control.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Caliber zone map guide', sourcePath: '/blog/caliber-zone-map/',
    answer: 'There is no single ideal zoom value for every player. The guide recommends adjusting gradually and checking that you can still track your player, spell ranges, and nearby fights.',
    detail: 'Keep a quick reset to the default camera view available so you can compare the wider view and return to familiar framing.',
    tip: 'Change one step at a time and play a short practice session before settling on a new camera distance.',
  }),
  guideDiscussion({
    slug: 'aimbot-delay', title: 'How do delay settings affect player aimbot?', upvotes: 32,
    excerpt: 'A practical question about timing, combo readability, and why the aimbot guide recommends conservative tuning.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Caliber aimbot for competitive play', sourcePath: '/blog/caliber-aimbot-competitive/',
    answer: 'Delay settings control the spacing between automated actions. The guide recommends starting with slower timings and testing them in a practice setting before making changes.',
    detail: 'A consistent sequence is easier to review and tune than changing several timing values at once.',
    tip: 'Keep a note of each configuration you try so you can return to the last setup that behaved as expected.',
  }),
  guideDiscussion({
    slug: 'aimbot-practice', title: 'What is a good way to practice an aimbot?', upvotes: 29,
    excerpt: 'Use a repeatable player setup, learn the sequence, and check each spell and item timing in a controlled lobby.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Caliber aimbot player aimbot', sourcePath: '/blog/caliber-aimbot-combat/',
    answer: 'Choose one player and one combo to practice at a time. The guide walks through example sequences and explains how target selection and ability order fit together.',
    detail: 'A custom lobby lets you repeat the sequence and see which steps need adjustment without the pressure of a live match.',
    tip: 'Learn the manual sequence first; that makes it much easier to spot when a configuration is mistimed.',
  }),
  guideDiscussion({
    slug: 'elite-tier-tools', title: 'What additional tools are included in the Elite tier?', upvotes: 67,
    excerpt: 'The Elite guide explains how its extra utility modules compare with the Lite and Pro feature sets.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Elite tier guide', sourcePath: '/blog/caliber-elite-tier/',
    answer: 'The guide describes Elite as including the Lite and Pro feature sets plus additional utilities such as Loot Assist, Triggerbot, Recoil control, and loadout tools.',
    detail: 'It also covers who may benefit from the extra modules and why it makes sense to understand the simpler feature set first.',
    tip: 'Compare the included features against your needs before choosing a tier; the full comparison is linked in the guide.',
  }),
  guideDiscussion({
    slug: 'lite-pro-diff', title: 'How do Lite and Pro differ in practice?', upvotes: 53,
    excerpt: 'Lite centers on awareness features, while Pro adds player script tools; here is the short version.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Lite vs Pro: which tier fits you', sourcePath: '/blog/caliber-lite-vs-pro/',
    answer: 'The comparison guide describes Lite as focused on awareness tools such as ESP, chest and loot information, and zoom. Pro adds aimbot automation features on top of that foundation.',
    detail: 'The right choice depends on whether you need map information alone or also want the additional script modules described in the comparison.',
    tip: 'Use the full side-by-side comparison to check specific modules before making a decision.',
  }),
  guideDiscussion({
    slug: 'loadout-tools', title: 'What should I know about the loadout tools utility?', upvotes: 38,
    excerpt: 'The product guide explains how cosmetic previews work and what to expect from the utility.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Caliber loadout tools guide', sourcePath: '/blog/caliber-loadouts/',
    answer: 'The guide describes loadout tools as a local cosmetic preview utility. It explains setup, supported options, and how to restore the default appearance.',
    detail: 'Review the compatibility notes and follow the current setup instructions before using the utility.',
    tip: 'Cosmetic changes are local previews; check the guide for current limitations and setup steps.',
  }),
  guideDiscussion({
    slug: 'anti-cheat-verify', title: 'What should I do if anti-cheat cannot verify my Caliber install?', upvotes: 24,
    excerpt: 'Start with the EA app or Ubisoft Connect file verification and a clean restart before assuming the issue is an account restriction.',
    category: 'Patch Talk', categoryTone: 'orange', sourceTitle: 'anti-cheat unable to verify Caliber', sourcePath: '/blog/anti-cheat-fix/',
    answer: 'The troubleshooting guide says the message can result from game-file problems or software conflicts and does not always mean an account ban. First verify Caliber files through the EA app or Ubisoft Connect.',
    detail: 'It also recommends fully exiting the the EA app or Ubisoft Connect, restarting the PC, and checking for conflicting overlays before trying more disruptive steps.',
    tip: 'Test a normal the EA app or Ubisoft Connect launch before starting other software so you can narrow down the cause.',
  }),
  guideDiscussion({
    slug: 'external-loader', title: 'What does “external loader” mean?', upvotes: 46,
    excerpt: 'The external software guide explains the term and outlines the general setup described on the site.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Caliber external cheat guide', sourcePath: '/blog/caliber-external-loader/',
    answer: 'The guide uses “external” to describe software that runs separately from the Caliber process and presents its interface as an overlay.',
    detail: 'It discusses the architecture at a high level and explains setup, patch updates, and the differences described between external and internal tools.',
    tip: 'Check compatibility and current status information whenever Caliber receives an update.',
  }),
  guideDiscussion({
    slug: 'stream-proof-obs', title: 'How can I check whether OBS captures an overlay?', upvotes: 21,
    excerpt: 'The stream-proof setup guide recommends recording a short test and checking the playback before streaming.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Stream-proof overlay setup for Caliber', sourcePath: '/blog/caliber-stream-proof/',
    answer: 'Record a short local test with the exact OBS scene and capture mode you plan to use, then review the playback for any overlay elements.',
    detail: 'The guide recommends testing game capture and display capture separately, since capture methods and multi-monitor setups can behave differently.',
    tip: 'Do not rely on the preview alone; review a saved recording from the same scene you intend to stream.',
  }),
  guideDiscussion({
    slug: 'after-hwid-change', title: 'What should I check after changing PCs or hardware?', upvotes: 33,
    excerpt: 'The HWID guide covers common setup checks and when to contact support for an account or device reset.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Caliber HWID spoofer after ban', sourcePath: '/blog/caliber-hwid-ban/',
    answer: 'Start by checking the account and device instructions for your product. The guide explains common HWID questions and when a reset request may be needed.',
    detail: 'Avoid changing several system settings at once. If the product does not recognize your device, contact support with the relevant error details.',
    tip: 'Use the official support path for device resets instead of relying on unrelated third-party tools.',
  }),
  guideDiscussion({
    slug: 'before-install', title: 'What should I review before installing a new tool?', upvotes: 18,
    excerpt: 'Check the official setup steps, current compatibility notes, and support information before proceeding.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'Caliber cheats features guide', sourcePath: '/blog/caliber-cheat-features/',
    answer: 'Read the feature and setup information first, confirm that it matches your system, and check the current update/status notes.',
    detail: 'The site guide describes the available feature groups and links to more specific setup guides for individual modules.',
    tip: 'Use the linked product and support pages as the source of truth for current availability and compatibility.',
  }),
  guideDiscussion({
    slug: 'choose-caliber-tier', title: 'How do I choose the right Caliber product tier?', upvotes: 48,
    excerpt: 'Compare the feature sets first, then follow the official checkout and setup instructions for your selection.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'How to buy Caliber cheats in 2026', sourcePath: '/blog/buy-caliber-cheats/',
    answer: 'The buying guide recommends comparing included features and choosing the tier that fits your needs before continuing through the official checkout.',
    detail: 'It covers the purchase flow, account access, downloading the current build, and checking setup instructions before launching.',
    tip: 'If you have a payment or account question, use the site support page and avoid sharing purchase details publicly.',
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'lobby-codes-competitive', category: 'General', categoryTone: 'purple',
    title: 'Lite vs Pro vs Elite: which tier should I buy first?',
    excerpt: 'From the tier buy guide: Lite for ESP, Pro when you want aimbot, Elite for loot assist and automation.',
    author: 'guide_team', age: '2 hours ago', commentsCount: 3, upvotes: 128, flair: 'Guide Q&A',
    sourceTitle: 'Buy Caliber cheats: tier advantages before checkout', sourcePath: '/blog/caliber-training-grounds-practice/',
    body: ['The guide walks Lite, Pro, and Elite module stacks so you checkout once with the right raid tools.', 'Compare features on the products hub, then open secure checkout when the status banner is online.'],
    comments: [
      { author: 'mid_or_feed', age: '1 hour ago', score: 24, body: 'Started on Lite for ESP only, upgraded to Pro when I wanted aimbot—guide made the jump clear.' },
      { author: 'ancient_archivist', age: '48 min. ago', score: 11, body: 'Elite section lists loot assist and loadout tools; worth reading before you overspend on day one.' },
      { author: 'push_first', age: '35 min. ago', score: 8, body: 'Straight to checkout links in the post—no fluff.' },
    ],
  },
  {
    slug: 'caliber-console-commands-forum', category: 'General', categoryTone: 'purple',
    title: 'How do I buy and install Caliber cheats on PC?',
    excerpt: 'Pick a tier, complete checkout, download the loader from the portal, and load a conservative preset.',
    author: 'guide_team', age: '4 hours ago', commentsCount: 2, upvotes: 86, flair: 'Guide Q&A',
    sourceTitle: 'How to buy and set up Caliber cheats on PC', sourcePath: '/blog/caliber-cheat-setup/',
    body: ['The setup guide covers tier choice, secure checkout, portal download, and first-session presets.', 'Check the homepage status banner after patches before you queue with a new build.'],
    comments: [
      { author: 'pos4_roamer', age: '3 hours ago', score: 17, body: 'Order email → portal → loader. Took me under ten minutes.' },
      { author: 'carry_curious', age: '2 hours ago', score: 9, body: 'Conservative ESP distance on first raid was the tip I needed.' },
    ],
  },
  {
    slug: 'caliber-high-ground', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'What do Pro aimbot and ESP modules actually add in matchs?',
    excerpt: 'The advantages guide breaks down smooth aim, wall ESP, and when to buy Pro vs Lite.',
    author: 'guide_team', age: '6 hours ago', commentsCount: 2, upvotes: 64, flair: 'Guide Q&A',
    sourceTitle: 'Aimbot & ESP cheat advantages for Caliber raids', sourcePath: '/blog/caliber-training-tips/',
    body: ['Pro stacks combat automation on top of Lite awareness tools—FOV, smoothness, bone priority, and ESP distance caps.', 'Links to product pages and checkout so you can compare before buying.'],
    comments: [
      { author: 'stack_and_pull', age: '5 hours ago', score: 13, body: 'Wall ESP + moderate aimbot FOV is what sold me on Pro.' },
      { author: 'map_reader', age: '4 hours ago', score: 6, body: 'Good summary of tier advantages without offline drill talk.' },
    ],
  },
  {
    slug: 'after-caliber-patch', category: 'Patch Talk', categoryTone: 'orange',
    title: 'What should I check before playing after a Caliber patch?',
    excerpt: 'The patch-day checklist recommends checking build status, updating, and testing in a bot lobby before queueing.',
    author: 'guide_team', age: '9 hours ago', commentsCount: 2, upvotes: 42, flair: 'Guide Q&A',
    sourceTitle: 'anti-cheat patch day checklist', sourcePath: '/blog/anti-cheat-patch/',
    body: ['Check the current build/status notice first. After a game update, wait for a compatible build, update the loader, then verify the setup in a bot or casual matches lobby before returning to competitive.', 'If anything behaves unexpectedly, stop and review the status notes rather than assuming the old setup still applies. The checklist covers the patch-day routine in more detail.'],
    comments: [
      { author: 'farm_pattern', age: '8 hours ago', score: 12, body: 'Testing after the update before competitive is the part I used to skip. Now I check the build note and run a quick bot lobby.' },
      { author: 'support_main_5', age: '7 hours ago', score: 7, body: 'Agree. If the build/status has not caught up, wait. A checklist is better than guessing.' },
    ],
  },
  {
    slug: 'lite-vs-pro', category: 'Community', categoryTone: 'green',
    title: 'Lite or Pro: which tier includes player aimbot?',
    excerpt: 'Our comparison guide breaks down the difference: Lite focuses on vision tools; Pro adds script modules.',
    author: 'guide_team', age: '12 hours ago', commentsCount: 1, upvotes: 31, flair: 'Guide Q&A',
    sourceTitle: 'Lite vs Pro: feature comparison', sourcePath: '/blog/caliber-lite-vs-pro/',
    body: ['According to the comparison guide, Lite centers on map awareness features such as operator ESP, chest and loot information, zoom, and stream-proof options. Pro includes those features and adds player aimbot such as Aimbot, Smooth Aim, Sticky Aim, Bone Priority, and Hotkey macros.', 'The best fit depends on which features you need. Read the full comparison before choosing.'],
    comments: [
      { author: 'one_more_game', age: '10 hours ago', score: 10, body: 'The comparison page is useful because it shows which modules are included in each tier instead of only listing headlines.' },
    ],
  },
  {
    slug: 'caliber-aim-practice', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'Which cheat modules unlock on Lite, Pro, and Elite?',
    excerpt: 'Side-by-side tier table from the modules guide—ESP, aimbot, equipment tools, and checkout links.',
    author: 'guide_team', age: '1 day ago', commentsCount: 2, upvotes: 27, flair: 'Guide Q&A',
    sourceTitle: 'Caliber cheat modules: what you get per tier', sourcePath: '/blog/caliber-console-commands/',
    body: ['The guide lists Lite, Pro, and Elite stacks with a comparison table for raid advantages.', 'Use it before checkout so you do not buy Elite when Lite ESP is enough—or skip Pro if you need loot assist.'],
    comments: [
      { author: 'mid_or_feed', age: '20 hours ago', score: 10, body: 'Table made the Elite loot row obvious.' },
      { author: 'ancient_archivist', age: '18 hours ago', score: 5, body: 'Linked straight to /go/caliber from the post—easy purchase path.' },
    ],
  },
  ...additionalGuidePosts,
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
