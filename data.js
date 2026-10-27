window.RULING_DATA = {
 "teams": [
  {
   "id": 1,
   "name": "Factory Workers",
   "color": "#D7263D",
   "ink": "#FFFFFF",
   "shape": "circle",
   "reading": "Communist Manifesto",
   "who": "The modern working class, packed into factories and cities by big industry.",
   "learn": "The Manifesto says the real fruit of workers’ battles is “the ever-expanding union of the workers.”"
  },
  {
   "id": 2,
   "name": "Guild Artisans",
   "color": "#1B6CA8",
   "ink": "#FFFFFF",
   "shape": "square",
   "reading": "Communist Manifesto",
   "who": "Medieval craftsmen and shopkeepers, squeezed out by big industry.",
   "learn": "The Manifesto says the lower middle class fights big business only to save itself: “they try to roll back the wheel of history.”"
  },
  {
   "id": 3,
   "name": "Pin Makers",
   "color": "#2A9D5C",
   "ink": "#FFFFFF",
   "shape": "triangle",
   "reading": "Wealth of Nations",
   "who": "Adam Smith’s ten workers, each doing one small step of making a pin.",
   "learn": "Smith says ten workers who split up the job can make upwards of 48,000 pins a day. Marx agrees it’s productive, but asks who ends up owning the pins."
  },
  {
   "id": 4,
   "name": "Bedouin",
   "color": "#F4B400",
   "ink": "#1E1E1E",
   "shape": "diamond",
   "reading": "Muqaddimah",
   "who": "Ibn Khaldun’s desert tribe, held together by group feeling.",
   "learn": "Ibn Khaldun says desert peoples have the strongest group feeling, which is why they conquer cities, until city luxury softens them too."
  }
 ],
 "rules": [
  [
   "Before you start",
   [
    "Tokens are the Bank of Han Xue notes in the currency PDF. Each note says one million but counts as 1 token, since money is arbitrary anyway. The Banker starts with all 60, gives each team 3, and keeps the rest.",
    "Each team gets its Identity Card, scrap paper and a pen. Put the prize (candy) where everyone can see it."
   ]
  ],
  [
   "Answering",
   [
    "The Host reads a question. After 20 seconds, everyone holds up their answer on “3, 2, 1.”",
    "Every team that’s right gets 1 token from the Banker.",
    "After Rounds 1, 2 and 3, the Historian asks one discussion question. Keep it to about 2 minutes."
   ]
  ],
  [
   "Round 1: Work",
   [
    "Play questions 1–5. The team with the most tokens becomes the Ruling Class and gets the placard. If there’s a tie, the closest guess on the tiebreaker wins."
   ]
  ],
  [
   "Round 2: Rule",
   [
    "The Ruling Class picks one Rule Card and finishes the sentence “This rule is good for everyone because…” The Banker enforces it for the rest of the game.",
    "Play questions 6–10. Everyone answers, including the Ruling Class."
   ]
  ],
  [
   "Round 3: Wages",
   [
    "The Ruling Class can’t answer the Hard Question. The other teams call out lower and lower wages (3, 2, 1, 0) to do it, and the lowest offer gets the job.",
    "The Ruling Class pays that wage. If the answer is right, the Banker gives 3 tokens to the Ruling Class, not to the team that answered. Play two Hard Questions."
   ]
  ],
  [
   "Round 4: Revolution",
   [
    "First, the Ruling Class may offer 2 tokens to one team. If that team takes the Bribe, it sits out the revolution.",
    "All the other teams answer one Revolution Prompt together, one sentence per team. The Historian judges.",
    "If the revolution wins, the placard is torn up and everyone except a bribed team shares the prize. If it fails, the Ruling Class and any bribed team share it."
   ]
  ]
 ],
 "rounds": [
  {
   "n": 1,
   "name": "Work",
   "mins": 6,
   "what": "Questions 1–5: “Who said it?” with Smith, Ibn Khaldun and Marx. The team with the most tokens becomes the Ruling Class.",
   "teaches": "Smith, Ibn Khaldun and Marx agree more than you’d expect, and the quotes prove it."
  },
  {
   "n": 2,
   "name": "Rule",
   "mins": 6,
   "what": "The Ruling Class picks a Rule Card and says why it’s “good for everyone.” Then questions 6–10 on the Theses and the Manifesto.",
   "teaches": "The Manifesto calls the state “a committee for managing the common affairs of the whole bourgeoisie.” The Ruling Class writes the rules and the State enforces them."
  },
  {
   "n": 3,
   "name": "Wages",
   "mins": 6,
   "what": "The Ruling Class can’t answer the Hard Questions. The other teams undercut each other for the job, and the reward goes to the Ruling Class.",
   "teaches": "The worker is “a commodity, like every other article of commerce.” Competition between workers pushes wages down, and the profit goes to someone else."
  },
  {
   "n": 4,
   "name": "Revolution",
   "mins": 4,
   "what": "The Ruling Class may bribe one team to sit out. The rest answer one prompt together. If they win, everyone shares the prize.",
   "teaches": "A revolution needs the workers to stay united, and a ruling class survives by splitting them."
  }
 ],
 "questions": [
  {
   "id": "1",
   "round": 1,
   "type": "Who said it?",
   "prompt": "“It is not from the benevolence of the butcher, the brewer, or the baker, that we expect our dinner, but from their regard to their own interest.”",
   "options": [
    "Karl Marx",
    "Adam Smith",
    "Ibn Khaldun"
   ],
   "correct": 1,
   "answer": "Adam Smith (Wealth of Nations, Book I)",
   "why": "The Manifesto describes the same thing as “naked self-interest” and “callous cash payment.” Same fact, opposite verdict."
  },
  {
   "id": "2",
   "round": 1,
   "type": "Who said it?",
   "prompt": "The bourgeoisie “has accomplished wonders far surpassing Egyptian pyramids, Roman aqueducts, and Gothic cathedrals.”",
   "options": [
    "Karl Marx",
    "Adam Smith",
    "Ibn Khaldun"
   ],
   "correct": 0,
   "answer": "Marx and Engels (Manifesto, Section I)",
   "why": "That’s Marx, not Smith, praising capitalism. Hold that thought: it’s the first discussion question."
  },
  {
   "id": "3",
   "round": 1,
   "type": "Who said it?",
   "prompt": "Differences between peoples come from “the different ways in which they make their living.”",
   "options": [
    "Karl Marx",
    "Adam Smith",
    "Ibn Khaldun"
   ],
   "correct": 2,
   "answer": "Ibn Khaldun (Muqaddimah, Chapter 2)",
   "why": "How people make a living shapes who they are. Ibn Khaldun said it more than 450 years before Marx."
  },
  {
   "id": "4",
   "round": 1,
   "type": "Who said it?",
   "prompt": "Doing a few simple tasks all day can make a worker “as stupid and ignorant as it is possible for a human creature to become.”",
   "options": [
    "Karl Marx",
    "Adam Smith",
    "Ibn Khaldun"
   ],
   "correct": 1,
   "answer": "Adam Smith (Wealth of Nations, Book V)",
   "why": "The Manifesto says the same worker becomes “an appendage of the machine.” Smith’s fix is schooling; Marx’s is ending the system."
  },
  {
   "id": "5",
   "round": 1,
   "type": "Who said it?",
   "prompt": "“The philosophers have only interpreted the world, in various ways; the point, however, is to change it.”",
   "options": [
    "Karl Marx",
    "Adam Smith",
    "Ibn Khaldun"
   ],
   "correct": 0,
   "answer": "Marx (Theses on Feuerbach, Thesis XI)",
   "why": "The most famous line in the Theses, and the theme of this game: next round, someone gets to change the rules."
  },
  {
   "id": "6",
   "round": 2,
   "type": "Multiple choice",
   "prompt": "In Thesis VI, what does Marx say the human essence really is?",
   "options": [
    "Reason, which every person is born with",
    "The ensemble of the social relations",
    "A soul given by God"
   ],
   "correct": 1,
   "answer": "The ensemble of the social relations",
   "why": "No fixed human nature: you are your relationships. In this game, too, what matters is whether your team rules, not what it’s called."
  },
  {
   "id": "7",
   "round": 2,
   "type": "Multiple choice",
   "prompt": "The Manifesto compares modern bourgeois society to someone who can “no longer control the powers of the nether world” they called up. Who?",
   "options": [
    "A king",
    "A sorcerer",
    "A gambler"
   ],
   "correct": 1,
   "answer": "A sorcerer",
   "why": "Capitalism’s own productive power runs out of control in crises of over-production."
  },
  {
   "id": "8",
   "round": 2,
   "type": "Multiple choice",
   "prompt": "The Manifesto says the executive of the modern state is a committee for managing the common affairs of…",
   "options": [
    "the whole people",
    "the whole bourgeoisie",
    "the working class"
   ],
   "correct": 1,
   "answer": "the whole bourgeoisie",
   "why": "That’s why our Banker plays the State: it enforces whatever the Ruling Class decides."
  },
  {
   "id": "9",
   "round": 2,
   "type": "Multiple choice",
   "prompt": "In the Manifesto, what does “All that is solid melts into air” describe?",
   "options": [
    "Capitalism constantly overturning how people work and live",
    "A workers’ revolution destroying the state",
    "Feudal lords losing their castles"
   ],
   "correct": 0,
   "answer": "Capitalism constantly overturning how people work and live",
   "why": "The bourgeoisie “cannot exist without constantly revolutionising the instruments of production,” so nothing stays fixed for long."
  },
  {
   "id": "10",
   "round": 2,
   "type": "Multiple choice",
   "prompt": "Thesis II says the question of whether human thinking is true is a question of…",
   "options": [
    "theory",
    "practice",
    "faith"
   ],
   "correct": 1,
   "answer": "practice",
   "why": "You prove an idea is true by acting on it. Arguing about it in the abstract is, for Marx, “purely scholastic.”"
  }
 ],
 "tiebreakers": [
  {
   "id": "T1",
   "prompt": "In what year was The German Ideology, the book the Theses were written for, first published? Closest guess wins.",
   "answer": "1932",
   "why": "Marx and Engels left the manuscript to “the gnawing criticism of the mice.”"
  }
 ],
 "hard": [
  {
   "id": "H1",
   "prompt": "The Manifesto says the bourgeoisie gets out of economic crises in two ways. Name both.",
   "answer": "Destroying a mass of productive forces; conquering new markets and exploiting old ones more thoroughly. Both set up bigger crises later."
  },
  {
   "id": "H2",
   "prompt": "The Manifesto says the workers’ fight grows in stages. Name any two.",
   "answer": "Single workers, then a whole factory, then one trade in one place; smashing machines and imported goods; forming trade unions; uniting into one national struggle and a political party."
  }
 ],
 "prompts": [
  {
   "id": "P1",
   "prompt": "The Manifesto says the bourgeoisie produces “its own grave-diggers.” Explain how, in two steps.",
   "answer": "(1) Industry creates a mass working class and packs it into factories and cities. (2) Railways and communication connect the workers, so competition turns into union, which overthrows the system."
  },
  {
   "id": "P2",
   "prompt": "Smith says people have a natural “propensity to truck, barter, and exchange.” How would Marx answer him?",
   "answer": "Marx would say that isn’t human nature, it’s a product of one kind of society. For him the human essence is “the ensemble of the social relations,” and the Manifesto shows the bourgeoisie made “naked self-interest” the only bond between people. It’s historical, so it can change."
  }
 ],
 "debrief": [
  [
   "The leader wrote the rules",
   "The ruling class’s ideas become everyone’s ideas",
   "German Ideology, p. 172"
  ],
  [
   "The “good for everyone” speech",
   "Every class dresses up its interest as the common interest",
   "German Ideology, p. 174"
  ],
  [
   "The Banker enforced it",
   "The state as “a committee” for the bourgeoisie",
   "Manifesto, p. 475"
  ],
  [
   "Teams undercut each other",
   "Competition between workers pushes wages down",
   "Manifesto, p. 479"
  ],
  [
   "The worker team didn’t get the 3",
   "Workers find work only while it “increases capital”",
   "Manifesto, p. 479"
  ],
  [
   "Your team name didn’t matter, your position did",
   "We are “the ensemble of the social relations”",
   "Thesis VI"
  ],
  [
   "The bribe split the teams",
   "Workers’ unity is “continually being upset” by competition",
   "Manifesto, p. 481"
  ],
  [
   "Teams revolted together",
   "The “ever-expanding union of the workers”",
   "Manifesto, p. 481"
  ],
  [
   "We played instead of just reading",
   "“The point, however, is to change it”",
   "Thesis XI"
  ]
 ],
 "roundLines": [
  [
   "After Round 1",
   "Smith, Ibn Khaldun and Marx all think how we make a living shapes everything else. They disagree about what to do with that fact."
  ],
  [
   "After Round 2",
   "The Ruling Class just claimed its rule was good for everyone, and the State, our Banker, enforced it. That’s the Manifesto’s “committee for managing the common affairs of the whole bourgeoisie.”"
  ],
  [
   "After Round 3",
   "One team did the work and another got the tokens. The Manifesto says workers “live only so long as they find work, and who find work only so long as their labour increases capital.” And you undercut each other, which is how it says wages fall."
  ]
 ],
 "endings": [
  {
   "key": "revolution",
   "label": "Revolution won",
   "line": "You won together, the Manifesto’s “ever-expanding union of the workers.” And nobody replaced the Ruling Class. That’s Marx’s big claim: this revolution ends class rule itself."
  },
  {
   "key": "survived",
   "label": "Ruling Class survived",
   "line": "The bribe or a weak answer saved the rulers. The Manifesto says workers’ unity is “continually being upset” by competition between them, and the ruling class uses that."
  }
 ],
 "discussion": [
  {
   "id": "D1",
   "round": 1,
   "prompt": "The Manifesto praises the bourgeoisie for “wonders far surpassing Egyptian pyramids.” Why would Marx praise the class he wants to overthrow?",
   "hint": "The Manifesto says capitalism built huge productive forces and, along the way, created the working class that will replace it (pp. 477–478)."
  },
  {
   "id": "D2",
   "round": 2,
   "prompt": "The Manifesto calls the modern state “a committee for managing the common affairs of the whole bourgeoisie.” Is that true of governments today, or too cynical?",
   "hint": "Think about who wrote this game’s rules and who enforced them. The Manifesto also says workers win laws like the ten-hours’ bill by using splits among the rich (p. 481)."
  },
  {
   "id": "D3",
   "round": 3,
   "prompt": "The Manifesto predicts workers become “an appendage of the machine” and wages sink to the bare cost of living. Did that come true, or did unions and laws prove it wrong?",
   "hint": "Thesis II says truth is proved in practice. Compare factory work in 1848 with gig work or AI automation now."
  }
 ]
};
