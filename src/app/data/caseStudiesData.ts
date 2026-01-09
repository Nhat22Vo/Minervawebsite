// Case Studies Data Structure
export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  brand: string;
  category: "social-media" | "events" | "merch" | "brand-identity";
  image: string;
  description: string;
  video: string;
  // Detailed case study content
  heroImage: string;
  challenge: string;
  solution: string;
  results: string[];
  images: string[];
  stats: Array<{ label: string; value: string }>;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  year: string;
  services: string[];
}

export const caseStudiesData: CaseStudy[] = [
  // Social Media Campaigns
  {
    id: "1",
    slug: "culture-drop-campaign",
    title: "Culture Drop Campaign",
    brand: "Streetwear Brand",
    category: "social-media",
    image: "https://images.unsplash.com/photo-1712331676372-2fc48f449c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNhbXBhaWduJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzY2NTYzMjg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "10M+ impressions. Sold out in 48 hours.",
    video: "#",
    heroImage: "https://images.unsplash.com/photo-1712331676372-2fc48f449c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNhbXBhaWduJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzY2NTYzMjg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: "Launch a limited edition streetwear drop in a saturated market where hype is hard to generate and attention spans are minimal.",
    solution: "Created a viral culture-first campaign leveraging underground influencers, street art collaborations, and cryptic social teasers. Built anticipation through 14 days of coordinated drops across Instagram, TikTok, and Twitter.",
    results: [
      "10M+ organic impressions across platforms",
      "Sold out entire inventory in 48 hours",
      "Generated $500K+ in revenue",
      "30% increase in brand followers",
      "Featured in Hypebeast and Complex"
    ],
    images: [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1080",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1080",
      "https://images.unsplash.com/photo-1558769132-cb1aea041b2c?w=1080"
    ],
    stats: [
      { label: "Impressions", value: "10M+" },
      { label: "Engagement Rate", value: "12.5%" },
      { label: "Sell-Out Time", value: "48hrs" },
      { label: "Revenue", value: "$500K+" }
    ],
    testimonial: {
      quote: "Minerva didn't just launch our drop—they created a cultural moment. The campaign exceeded every metric we had.",
      author: "Alex Chen",
      position: "Brand Director"
    },
    year: "2025",
    services: ["Social Strategy", "Content Creation", "Influencer Outreach", "Campaign Management"]
  },
  {
    id: "2",
    slug: "festival-moment",
    title: "Festival Moment",
    brand: "Music Brand",
    category: "social-media",
    image: "https://images.unsplash.com/photo-1675972468988-849eaaab198d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwY3Jvd2QlMjBlbmVyZ3l8ZW58MXx8fHwxNzY2NTYzMjg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Viral content. 5M+ organic reach.",
    video: "#",
    heroImage: "https://images.unsplash.com/photo-1675972468988-849eaaab198d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwY3Jvd2QlMjBlbmVyZ3l8ZW58MXx8fHwxNzY2NTYzMjg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: "Capture the energy of a music festival and create shareable content that extends brand reach beyond the physical event.",
    solution: "Deployed a real-time content team capturing authentic moments, created shareable AR filters, and orchestrated a coordinated influencer activation strategy.",
    results: [
      "5M+ organic reach",
      "Content featured on major music blogs",
      "200K+ user-generated content pieces",
      "3x increase in brand awareness",
      "Trending #1 on Twitter during event"
    ],
    images: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1080",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1080"
    ],
    stats: [
      { label: "Organic Reach", value: "5M+" },
      { label: "UGC Content", value: "200K+" },
      { label: "Brand Awareness", value: "+300%" },
      { label: "Twitter Ranking", value: "#1" }
    ],
    year: "2025",
    services: ["Real-Time Content", "AR Filters", "Influencer Strategy", "Social Listening"]
  },
  
  // Events & Activations
  {
    id: "3",
    slug: "immersive-brand-experience",
    title: "Immersive Brand Experience",
    brand: "Luxury Brand",
    category: "events",
    image: "https://images.unsplash.com/photo-1763950744024-c1297429e11e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGFjdGl2YXRpb24lMjBldmVudHxlbnwxfHx8fDE3NjY0ODMyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "3-day activation. 10K+ attendees.",
    video: "#",
    heroImage: "https://images.unsplash.com/photo-1763950744024-c1297429e11e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGFjdGl2YXRpb24lMjBldmVudHxlbnwxfHx8fDE3NjY0ODMyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: "Create a luxury brand experience that bridges physical and digital worlds while maintaining exclusivity and generating social buzz.",
    solution: "Designed a 3-day immersive installation combining art, technology, and product showcase. Integrated NFT elements, VIP experiences, and curated moments designed for social sharing.",
    results: [
      "10K+ attendees over 3 days",
      "50M+ social impressions",
      "Featured in Vogue and GQ",
      "$2M+ in direct sales",
      "Waitlist of 5K+ for future events"
    ],
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1080",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1080"
    ],
    stats: [
      { label: "Attendees", value: "10K+" },
      { label: "Social Impressions", value: "50M+" },
      { label: "Direct Sales", value: "$2M+" },
      { label: "Future Waitlist", value: "5K+" }
    ],
    testimonial: {
      quote: "The activation redefined what a luxury brand experience should be. It was art, commerce, and culture seamlessly integrated.",
      author: "Marie Laurent",
      position: "Global Marketing Director"
    },
    year: "2024",
    services: ["Event Design", "Experience Strategy", "NFT Integration", "Content Production"]
  },
  {
    id: "4",
    slug: "popup-store-launch",
    title: "Pop-Up Store Launch",
    brand: "Fashion Brand",
    category: "events",
    image: "https://images.unsplash.com/photo-1660018322139-0e58555df00d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBwaG90b2dyYXBoeSUyMGZhc2hpb258ZW58MXx8fHwxNzY2NTYzMjkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Full creative direction. Lines around the block.",
    video: "#",
    heroImage: "https://images.unsplash.com/photo-1660018322139-0e58555df00d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBwaG90b2dyYXBoeSUyMGZhc2hpb258ZW58MXx8fHwxNzY2NTYzMjkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: "Launch a pop-up retail experience that generates buzz and drives foot traffic in a competitive fashion district.",
    solution: "Created an editorial-style retail environment with exclusive product drops, in-store content creation spaces, and celebrity appearances. Built pre-launch hype through strategic teasing and influencer previews.",
    results: [
      "Lines around the block daily",
      "$800K+ revenue in 2 weeks",
      "Featured in WWD and Fashionista",
      "Instagram engagement up 400%",
      "Permanent store requested by landlord"
    ],
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1080",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1080"
    ],
    stats: [
      { label: "Revenue", value: "$800K+" },
      { label: "Daily Visitors", value: "500+" },
      { label: "Instagram Growth", value: "+400%" },
      { label: "Duration", value: "2 weeks" }
    ],
    year: "2024",
    services: ["Retail Design", "Creative Direction", "Influencer Strategy", "Content Creation"]
  },

  // Merchandise Campaigns
  {
    id: "5",
    slug: "limited-edition-drop",
    title: "Limited Edition Drop",
    brand: "Sneaker Brand",
    category: "merch",
    image: "https://images.unsplash.com/photo-1614765254651-431998232486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwY29sbGFib3JhdGlvbiUyMGRyb3B8ZW58MXx8fHwxNzY2NTYzMjg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Campaign strategy. Sold out in minutes.",
    video: "#",
    heroImage: "https://images.unsplash.com/photo-1614765254651-431998232486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwY29sbGFib3JhdGlvbiUyMGRyb3B8ZW58MXx8fHwxNzY2NTYzMjg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: "Create unprecedented demand for a limited sneaker collaboration in an oversaturated market.",
    solution: "Developed a scarcity-driven campaign with artist collaborations, secret drops, and a multi-platform digital experience. Used blockchain verification for authenticity.",
    results: [
      "Sold out in 7 minutes",
      "$1.5M revenue on launch day",
      "Resale value 3x retail price",
      "50K+ raffle entries",
      "Coverage in Sole Collector and Highsnobiety"
    ],
    images: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1080",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1080"
    ],
    stats: [
      { label: "Sell-Out Time", value: "7min" },
      { label: "Launch Revenue", value: "$1.5M" },
      { label: "Resale Value", value: "3x" },
      { label: "Raffle Entries", value: "50K+" }
    ],
    testimonial: {
      quote: "Minerva understood sneaker culture at a level most agencies can't touch. They created real demand, not just hype.",
      author: "Jordan Williams",
      position: "Head of Collaborations"
    },
    year: "2024",
    services: ["Campaign Strategy", "Blockchain Integration", "Artist Collaboration", "Drop Strategy"]
  },
  {
    id: "6",
    slug: "collaboration-launch",
    title: "Collaboration Launch",
    brand: "Fashion x Tech",
    category: "merch",
    image: "https://images.unsplash.com/photo-1763771444851-4fa902534f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbWVyY2hhbmRpc2UlMjBwcm9kdWN0fGVufDF8fHx8MTc2NjU2MzI4OXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "End-to-end creative. Record-breaking sales.",
    video: "#",
    heroImage: "https://images.unsplash.com/photo-1763771444851-4fa902534f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbWVyY2hhbmRpc2UlMjBwcm9kdWN0fGVufDF8fHx8MTc2NjU2MzI4OXww&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: "Launch a fashion-tech collaboration that appeals to both streetwear enthusiasts and early adopters.",
    solution: "Created an integrated campaign merging physical apparel with digital experiences. Included AR try-ons, limited NFT drops, and phygital packaging that unlocked exclusive content.",
    results: [
      "Record-breaking sales: $2.3M first week",
      "Trending on Twitter and TikTok",
      "90% sell-through rate",
      "Featured in Wired and The Verge",
      "2M+ campaign impressions"
    ],
    images: [
      "https://images.unsplash.com/photo-1523380677598-64d85d015339?w=1080",
      "https://images.unsplash.com/photo-1523380744952-e45a8292c44c?w=1080"
    ],
    stats: [
      { label: "Week 1 Sales", value: "$2.3M" },
      { label: "Sell-Through", value: "90%" },
      { label: "Campaign Reach", value: "2M+" },
      { label: "Social Mentions", value: "50K+" }
    ],
    year: "2024",
    services: ["Campaign Strategy", "AR Development", "NFT Integration", "Packaging Design"]
  },

  // Brand Identity
  {
    id: "7",
    slug: "tech-startup-rebrand",
    title: "Tech Startup Rebrand",
    brand: "Tech Company",
    category: "brand-identity",
    image: "https://images.unsplash.com/photo-1662313677631-aae267d56223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dvJTIwZGVzaWduJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzY2NjUzNzgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Complete visual identity. 300% brand recognition increase.",
    video: "#",
    heroImage: "https://images.unsplash.com/photo-1662313677631-aae267d56223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dvJTIwZGVzaWduJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzY2NjUzNzgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: "Rebrand a growing tech startup to appeal to enterprise clients while maintaining startup energy and culture.",
    solution: "Developed a bold, modern identity system that balanced professionalism with innovation. Created comprehensive brand guidelines, messaging framework, and digital presence strategy.",
    results: [
      "300% increase in brand recognition",
      "Secured 3 enterprise contracts within 2 months",
      "Featured in TechCrunch and Forbes",
      "Employee pride score increased 85%",
      "Website traffic up 250%"
    ],
    images: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1080",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1080"
    ],
    stats: [
      { label: "Brand Recognition", value: "+300%" },
      { label: "Enterprise Deals", value: "3" },
      { label: "Web Traffic", value: "+250%" },
      { label: "Employee Pride", value: "+85%" }
    ],
    testimonial: {
      quote: "The rebrand wasn't just aesthetic—it fundamentally shifted how we're perceived in the market. Game-changing work.",
      author: "Sarah Kim",
      position: "CEO & Co-Founder"
    },
    year: "2024",
    services: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Digital Strategy"]
  },
  {
    id: "8",
    slug: "investor-pitch-strategy",
    title: "Investor Pitch Strategy",
    brand: "Startup",
    category: "brand-identity",
    image: "https://images.unsplash.com/photo-1590098563575-a82d9dcd7696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXRjaCUyMGRlY2slMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzY2NTY2NjE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "$50M funding secured. Story that sold the vision.",
    video: "#",
    heroImage: "https://images.unsplash.com/photo-1590098563575-a82d9dcd7696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXRjaCUyMGRlY2slMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzY2NTY2NjE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: "Help a crypto startup craft a compelling narrative and visual story to secure Series B funding in a skeptical market.",
    solution: "Developed a data-driven narrative that balanced innovation with market reality. Created pitch deck, one-pager, and supporting materials that told a cohesive, credible story.",
    results: [
      "$50M Series B funding secured",
      "8 out of 10 investors interested",
      "Pitch deck became template for portfolio companies",
      "Featured in Bloomberg",
      "Valuation exceeded projections by 40%"
    ],
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1080",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1080"
    ],
    stats: [
      { label: "Funding Secured", value: "$50M" },
      { label: "Investor Interest", value: "80%" },
      { label: "Valuation Beat", value: "+40%" },
      { label: "Materials Created", value: "15+" }
    ],
    year: "2025",
    services: ["Pitch Strategy", "Deck Design", "Narrative Development", "Data Visualization"]
  }
];

// Helper function to get case study by slug
export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudiesData.find(cs => cs.slug === slug);
};

// Helper function to get case studies by category
export const getCaseStudiesByCategory = (category: CaseStudy["category"]): CaseStudy[] => {
  return caseStudiesData.filter(cs => cs.category === category);
};

// Helper function to get related case studies (same category, exclude current)
export const getRelatedCaseStudies = (currentSlug: string, limit: number = 3): CaseStudy[] => {
  const current = getCaseStudyBySlug(currentSlug);
  if (!current) return [];
  
  return caseStudiesData
    .filter(cs => cs.category === current.category && cs.slug !== currentSlug)
    .slice(0, limit);
};
