const scenarioData = [
    {
      image: '/scene1-img.png',
      explanation: 'You received a salary of $3000. What will you do next?',
    question: 'How much should you save from your salary?',
    options: ['20%', '30%', '50%', '10%'], // Removed empty strings
    correctAnswer: '20%',
    feedback: {
      correct: 'Correct! Saving 20% is recommended.',
      incorrect: 'Incorrect. Financial experts suggest saving 20% of income.',
    },
    description: 'The 50/30/20 rule suggests dividing your income as 50% needs, 30% wants, and 20% savings.',
  },
];

export default scenarioData;