// Import question data
import { grade11AgricultureQuestions } from "@/data/grade11AgricultureQuestions";
import { grade11Biology } from "@/data/grade11Biology";
import { grade11Chemistry } from "@/data/grade11Chemistry";
import { grade11Mathematics } from "@/data/grade11Mathematics";
import { grade11Physics } from "@/data/grade11Physics";
import { grade12AgricultureQuestions } from "@/data/grade12AgricultureQuestions";
import { grade12BiologyQuestions } from "@/data/grade12BiologyQuestions";
import { grade12ChemistryQuestions } from "@/data/grade12ChemistryQuestions";
import { grade12CivicsQuestions } from "@/data/grade12CivicsQuestions";
import { grade12EnglishQuestions } from "@/data/grade12EnglishQuestions";
import { grade12GeographyQuestions } from "@/data/grade12GeographyQuestions";
import { grade12HistoryQuestions } from "@/data/grade12HistoryQuestions";
import { grade12ITQuestions } from "@/data/grade12ITQuestions";
import { grade12Mathematics } from "@/data/grade12Mathematics";
import { grade12PhysicsQuestions } from "@/data/grade12PhysicsQuestions";

interface NormalizedQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
  difficulty?: string;
}

// Flatten questions from nested objects to flat arrays
const flattenQuestions = (questionsObj: Record<string, any[]>): any[] => {
  const result: any[] = [];
  Object.values(questionsObj).forEach(chapterQuestions => {
    if (Array.isArray(chapterQuestions)) {
      result.push(...chapterQuestions);
    }
  });
  return result;
};

// Normalize different question formats to a standard format
const normalizeQuestion = (q: any): NormalizedQuestion => ({
  question: q.question,
  options: q.options,
  correctAnswer: q.correct || q.correctAnswer,
  explanation: q.explanation,
  difficulty: q.difficulty?.toLowerCase()
});

const questionSets: Record<string, Record<string, any>> = {
  "11": {
    "Agriculture": grade11AgricultureQuestions,
    "Biology": grade11Biology,
    "Chemistry": grade11Chemistry,
    "Mathematics": grade11Mathematics,
    "Physics": grade11Physics,
  },
  "12": {
    "Agriculture": grade12AgricultureQuestions,
    "Biology": grade12BiologyQuestions,
    "Chemistry": grade12ChemistryQuestions,
    "Civics": grade12CivicsQuestions,
    "English": grade12EnglishQuestions,
    "Geography": grade12GeographyQuestions,
    "History": grade12HistoryQuestions,
    "IT": grade12ITQuestions,
    "Mathematics": grade12Mathematics,
    "Physics": grade12PhysicsQuestions,
  },
};

export const getQuestionsForQuiz = (
  grade: number,
  subject: string,
  chapterId: string,
  difficulty: string
): NormalizedQuestion[] => {
  const gradeKey = grade.toString();
  const subjectData = questionSets[gradeKey]?.[subject];
  
  if (!subjectData) return [];

  // Flatten the questions object to an array
  const allQuestions = flattenQuestions(subjectData);
  
  // Normalize and filter by difficulty
  let normalized = allQuestions.map(normalizeQuestion);

  if (difficulty && difficulty !== "all") {
    normalized = normalized.filter(q => q.difficulty === difficulty.toLowerCase());
  }

  // Shuffle and return
  return normalized.sort(() => Math.random() - 0.5);
};
