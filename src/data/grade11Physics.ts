
export interface Grade11PhysicsQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  chapter: string;
  subject: string;
}

export const grade11Physics: { [chapter: string]: Grade11PhysicsQuestion[] } = {
  'Chapter 1: Mechanics': [
    {
      id: 'g11phy_mech_e1',
      question: 'What is the SI unit of force?',
      options: ['Newton', 'Joule', 'Watt', 'Pascal'],
      correct: 'Newton',
      explanation: 'The Newton (N) is the SI unit of force, defined as kg⋅m/s².',
      difficulty: 'Easy',
      chapter: 'Chapter 1: Mechanics',
      subject: 'Physics'
    },
    {
      id: 'g11phy_mech_m1',
      question: 'What is Newton\'s second law of motion?',
      options: ['F = ma', 'F = mv', 'F = ma²', 'F = m/a'],
      correct: 'F = ma',
      explanation: 'Newton\'s second law states that force equals mass times acceleration (F = ma).',
      difficulty: 'Medium',
      chapter: 'Chapter 1: Mechanics',
      subject: 'Physics'
    },
    {
      id: 'g11phy_mech_h1',
      question: 'A 5kg object accelerates at 2 m/s². What is the net force acting on it?',
      options: ['10 N', '2.5 N', '7 N', '3 N'],
      correct: '10 N',
      explanation: 'Using F = ma: F = 5 kg × 2 m/s² = 10 N.',
      difficulty: 'Hard',
      chapter: 'Chapter 1: Mechanics',
      subject: 'Physics'
    }
  ],
  'Chapter 2: Waves and Sound': [
    {
      id: 'g11phy_wave_e1',
      question: 'What is a wave?',
      options: ['A disturbance that transfers energy', 'A solid object', 'A type of matter', 'A chemical reaction'],
      correct: 'A disturbance that transfers energy',
      explanation: 'A wave is a disturbance that travels through space and matter, transferring energy without transferring matter.',
      difficulty: 'Easy',
      chapter: 'Chapter 2: Waves and Sound',
      subject: 'Physics'
    },
    {
      id: 'g11phy_wave_m1',
      question: 'What is the relationship between frequency and wavelength?',
      options: ['Inversely proportional', 'Directly proportional', 'No relationship', 'Exponentially related'],
      correct: 'Inversely proportional',
      explanation: 'As frequency increases, wavelength decreases (v = fλ, where v is constant).',
      difficulty: 'Medium',
      chapter: 'Chapter 2: Waves and Sound',
      subject: 'Physics'
    },
    {
      id: 'g11phy_wave_h1',
      question: 'If a wave has frequency 50 Hz and wavelength 2 m, what is its speed?',
      options: ['100 m/s', '25 m/s', '52 m/s', '48 m/s'],
      correct: '100 m/s',
      explanation: 'Wave speed = frequency × wavelength = 50 Hz × 2 m = 100 m/s.',
      difficulty: 'Hard',
      chapter: 'Chapter 2: Waves and Sound',
      subject: 'Physics'
    }
  ]
};

export const getGrade11PhysicsQuestions = (chapter: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10): Grade11PhysicsQuestion[] => {
  const chapterQuestions = grade11Physics[chapter] || [];
  const difficultyMap = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
  const targetDifficulty = difficultyMap[difficulty];
  
  const filteredQuestions = chapterQuestions.filter(q => q.difficulty === targetDifficulty);
  const shuffled = filteredQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
