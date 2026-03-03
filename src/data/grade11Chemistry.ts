
export interface Grade11ChemistryQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  chapter: string;
  subject: string;
}

export const grade11Chemistry: { [chapter: string]: Grade11ChemistryQuestion[] } = {
  'Chapter 1: Atomic Structure': [
    {
      id: 'g11chem_atom_e1',
      question: 'What is an atom?',
      options: ['The smallest unit of an element', 'A molecule', 'An ion', 'A compound'],
      correct: 'The smallest unit of an element',
      explanation: 'An atom is the smallest unit of an element that retains the properties of that element.',
      difficulty: 'Easy',
      chapter: 'Chapter 1: Atomic Structure',
      subject: 'Chemistry'
    },
    {
      id: 'g11chem_atom_m1',
      question: 'Where are electrons found in an atom?',
      options: ['In orbitals around the nucleus', 'In the nucleus', 'Outside the atom', 'In the neutrons'],
      correct: 'In orbitals around the nucleus',
      explanation: 'Electrons occupy orbitals or electron clouds around the atomic nucleus.',
      difficulty: 'Medium',
      chapter: 'Chapter 1: Atomic Structure',
      subject: 'Chemistry'
    },
    {
      id: 'g11chem_atom_h1',
      question: 'What is the electron configuration of sodium (Na, atomic number 11)?',
      options: ['1s² 2s² 2p⁶ 3s¹', '1s² 2s² 2p⁶ 3s²', '1s² 2s² 2p⁵ 3s²', '1s² 2s² 2p⁶'],
      correct: '1s² 2s² 2p⁶ 3s¹',
      explanation: 'Sodium has 11 electrons: 2 in 1s, 2 in 2s, 6 in 2p, and 1 in 3s orbital.',
      difficulty: 'Hard',
      chapter: 'Chapter 1: Atomic Structure',
      subject: 'Chemistry'
    }
  ],
  'Chapter 2: Chemical Bonding': [
    {
      id: 'g11chem_bond_e1',
      question: 'What is a chemical bond?',
      options: ['A force that holds atoms together', 'A type of atom', 'A chemical reaction', 'A physical property'],
      correct: 'A force that holds atoms together',
      explanation: 'A chemical bond is an attractive force that holds atoms together in molecules or compounds.',
      difficulty: 'Easy',
      chapter: 'Chapter 2: Chemical Bonding',
      subject: 'Chemistry'
    },
    {
      id: 'g11chem_bond_m1',
      question: 'What type of bond forms between sodium and chlorine?',
      options: ['Ionic bond', 'Covalent bond', 'Metallic bond', 'Hydrogen bond'],
      correct: 'Ionic bond',
      explanation: 'Sodium loses an electron to chlorine, forming Na⁺ and Cl⁻ ions that attract each other.',
      difficulty: 'Medium',
      chapter: 'Chapter 2: Chemical Bonding',
      subject: 'Chemistry'
    },
    {
      id: 'g11chem_bond_h1',
      question: 'What is electronegativity?',
      options: ['The ability of an atom to attract electrons in a bond', 'The number of electrons in an atom', 'The mass of an atom', 'The charge of an atom'],
      correct: 'The ability of an atom to attract electrons in a bond',
      explanation: 'Electronegativity measures how strongly an atom attracts electrons when bonded to another atom.',
      difficulty: 'Hard',
      chapter: 'Chapter 2: Chemical Bonding',
      subject: 'Chemistry'
    }
  ]
};

export const getGrade11ChemistryQuestions = (chapter: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10): Grade11ChemistryQuestion[] => {
  const chapterQuestions = grade11Chemistry[chapter] || [];
  const difficultyMap = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
  const targetDifficulty = difficultyMap[difficulty];
  
  const filteredQuestions = chapterQuestions.filter(q => q.difficulty === targetDifficulty);
  const shuffled = filteredQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
