import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, CheckCircle, XCircle, Trophy, RotateCcw, Eye } from 'lucide-react';
import { grade12Mathematics, getMathQuestionsForQuiz } from '@/data/grade12Mathematics';
import { getGrade12ChemistryQuestions } from '@/data/grade12ChemistryQuestions';
import { getGrade12PhysicsQuestions } from '@/data/grade12PhysicsQuestions';
import { getGrade12AgricultureQuestions } from '@/data/grade12AgricultureQuestions';
import QuestionExplanation from '@/components/QuestionExplanation';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const QuizPage = () => {
  const navigate = useNavigate();
  const { grade, subject, chapterId, difficulty } = useParams();
  const decodedSubject = decodeURIComponent(subject || '');
  const decodedChapter = decodeURIComponent(chapterId || '');
  const selectedDifficulty = decodeURIComponent(difficulty || '') as 'Easy' | 'Medium' | 'Hard';

  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [quizCompleted, setQuizCompleted] = useState(false);

  console.log('Current route params:', { grade, subject: decodedSubject, chapter: decodedChapter, difficulty: selectedDifficulty });

  // Initialize questions only once when component mounts
  useEffect(() => {
    const initializeQuestions = () => {
      if (decodedSubject === 'Mathematics' && grade === '12' && grade12Mathematics[decodedChapter]) {
        const chapterQuestions = grade12Mathematics[decodedChapter];
        const filteredQuestions = chapterQuestions.filter(q => q.difficulty === selectedDifficulty);
        
        if (filteredQuestions.length === 0) {
          const shuffled = [...chapterQuestions].sort(() => Math.random() - 0.5);
          return shuffled.slice(0, 10).map((q, index) => ({
            id: index + 1,
            question: q.question,
            options: q.options,
            correctAnswer: q.options.indexOf(q.correct),
            explanation: q.explanation
          }));
        }
        
        const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
        const questionsToTake = Math.min(10, shuffled.length);
        return shuffled.slice(0, questionsToTake).map((q, index) => ({
          id: index + 1,
          question: q.question,
          options: q.options,
          correctAnswer: q.options.indexOf(q.correct),
          explanation: q.explanation
        }));
      }
      
      if (decodedSubject === 'Biology' && grade === '12') {
        console.log('Loading Biology questions for:', { chapter: decodedChapter, difficulty: selectedDifficulty });
        
        import('@/data/grade12BiologyQuestions').then(({ getGrade12BiologyQuestions }) => {
          const difficultyLevel = selectedDifficulty.toLowerCase() as 'easy' | 'medium' | 'hard';
          const biologyQuestions = getGrade12BiologyQuestions(decodedChapter, difficultyLevel, 10);
          
          console.log('Loaded Biology questions:', biologyQuestions.length);
          
          if (biologyQuestions.length === 0) {
            const easyQuestions = getGrade12BiologyQuestions(decodedChapter, 'easy', 3);
            const mediumQuestions = getGrade12BiologyQuestions(decodedChapter, 'medium', 3);
            const hardQuestions = getGrade12BiologyQuestions(decodedChapter, 'hard', 4);
            const allQuestions = [...easyQuestions, ...mediumQuestions, ...hardQuestions];
            
            const formattedQuestions = allQuestions.map((q, index) => ({
              id: index + 1,
              question: q.question,
              options: q.options,
              correctAnswer: q.options.indexOf(q.correct),
              explanation: q.explanation || `This question tests your understanding of ${decodedChapter}. The correct answer demonstrates key concepts in this unit.`
            }));
            
            setQuestions(formattedQuestions);
            setAnswers(new Array(formattedQuestions.length).fill(null));
          } else {
            const formattedQuestions = biologyQuestions.map((q, index) => ({
              id: index + 1,
              question: q.question,
              options: q.options,
              correctAnswer: q.options.indexOf(q.correct),
              explanation: q.explanation || `This question tests your understanding of ${decodedChapter}. The correct answer demonstrates key concepts in this unit.`
            }));
            
            console.log('Formatted questions with explanations:', formattedQuestions);
            setQuestions(formattedQuestions);
            setAnswers(new Array(formattedQuestions.length).fill(null));
          }
          
          setIsLoading(false);
        });
        
        return [];
      }

      if (decodedSubject === 'Chemistry' && grade === '12') {
        console.log('Loading Chemistry questions for:', { chapter: decodedChapter, difficulty: selectedDifficulty });
        
        const difficultyLevel = selectedDifficulty.toLowerCase() as 'easy' | 'medium' | 'hard';
        const chemistryQuestions = getGrade12ChemistryQuestions(decodedChapter, difficultyLevel, 10);
        
        console.log('Loaded Chemistry questions:', chemistryQuestions.length);
        
        if (chemistryQuestions.length === 0) {
          const easyQuestions = getGrade12ChemistryQuestions(decodedChapter, 'easy', 3);
          const mediumQuestions = getGrade12ChemistryQuestions(decodedChapter, 'medium', 3);
          const hardQuestions = getGrade12ChemistryQuestions(decodedChapter, 'hard', 4);
          const allQuestions = [...easyQuestions, ...mediumQuestions, ...hardQuestions];
          
          const formattedQuestions = allQuestions.map((q, index) => ({
            id: index + 1,
            question: q.question,
            options: q.options,
            correctAnswer: q.options.indexOf(q.correct),
            explanation: q.explanation || `This question tests your understanding of ${decodedChapter}. The correct answer demonstrates key concepts in this unit.`
          }));
          
          setQuestions(formattedQuestions);
          setAnswers(new Array(formattedQuestions.length).fill(null));
        } else {
          const formattedQuestions = chemistryQuestions.map((q, index) => ({
            id: index + 1,
            question: q.question,
            options: q.options,
            correctAnswer: q.options.indexOf(q.correct),
            explanation: q.explanation || `This question tests your understanding of ${decodedChapter}. The correct answer demonstrates key concepts in this unit.`
          }));
          
          console.log('Formatted Chemistry questions with explanations:', formattedQuestions);
          setQuestions(formattedQuestions);
          setAnswers(new Array(formattedQuestions.length).fill(null));
        }
        
        setIsLoading(false);
        return [];
      }

      if (decodedSubject === 'Physics' && grade === '12') {
        console.log('Loading Physics questions for:', { chapter: decodedChapter, difficulty: selectedDifficulty });
        
        const difficultyLevel = selectedDifficulty.toLowerCase() as 'easy' | 'medium' | 'hard';
        const physicsQuestions = getGrade12PhysicsQuestions(decodedChapter, difficultyLevel, 10);
        
        console.log('Loaded Physics questions:', physicsQuestions.length);
        
        if (physicsQuestions.length === 0) {
          const easyQuestions = getGrade12PhysicsQuestions(decodedChapter, 'easy', 3);
          const mediumQuestions = getGrade12PhysicsQuestions(decodedChapter, 'medium', 3);
          const hardQuestions = getGrade12PhysicsQuestions(decodedChapter, 'hard', 4);
          const allQuestions = [...easyQuestions, ...mediumQuestions, ...hardQuestions];
          
          const formattedQuestions = allQuestions.map((q, index) => ({
            id: index + 1,
            question: q.question,
            options: q.options,
            correctAnswer: q.options.indexOf(q.correct),
            explanation: q.explanation || `This question tests your understanding of ${decodedChapter}. The correct answer demonstrates key concepts in this unit.`
          }));
          
          setQuestions(formattedQuestions);
          setAnswers(new Array(formattedQuestions.length).fill(null));
        } else {
          const formattedQuestions = physicsQuestions.map((q, index) => ({
            id: index + 1,
            question: q.question,
            options: q.options,
            correctAnswer: q.options.indexOf(q.correct),
            explanation: q.explanation || `This question tests your understanding of ${decodedChapter}. The correct answer demonstrates key concepts in this unit.`
          }));
          
          console.log('Formatted Physics questions with explanations:', formattedQuestions);
          setQuestions(formattedQuestions);
          setAnswers(new Array(formattedQuestions.length).fill(null));
        }
        
        return [];
      }

      if (decodedSubject === 'Agriculture' && grade === '12') {
        console.log('Loading Agriculture questions for:', { chapter: decodedChapter, difficulty: selectedDifficulty });
        
        const difficultyLevel = selectedDifficulty as 'Easy' | 'Medium' | 'Hard';
        const agricultureQuestions = getGrade12AgricultureQuestions(decodedChapter, difficultyLevel);
        
        console.log('Loaded Agriculture questions:', agricultureQuestions.length);
        
        if (agricultureQuestions.length === 0) {
          const easyQuestions = getGrade12AgricultureQuestions(decodedChapter, 'Easy').slice(0, 3);
          const mediumQuestions = getGrade12AgricultureQuestions(decodedChapter, 'Medium').slice(0, 3);
          const hardQuestions = getGrade12AgricultureQuestions(decodedChapter, 'Hard').slice(0, 4);
          const allQuestions = [...easyQuestions, ...mediumQuestions, ...hardQuestions];
          
          const formattedQuestions = allQuestions.map((q, index) => ({
            id: index + 1,
            question: q.question,
            options: q.options,
            correctAnswer: q.options.indexOf(q.correct),
            explanation: q.explanation || `This question tests your understanding of ${decodedChapter}. The correct answer demonstrates key concepts in this unit.`
          }));
          
          setQuestions(formattedQuestions);
          setAnswers(new Array(formattedQuestions.length).fill(null));
        } else {
          const shuffled = [...agricultureQuestions].sort(() => Math.random() - 0.5);
          const questionsToTake = Math.min(10, shuffled.length);
          const formattedQuestions = shuffled.slice(0, questionsToTake).map((q, index) => ({
            id: index + 1,
            question: q.question,
            options: q.options,
            correctAnswer: q.options.indexOf(q.correct),
            explanation: q.explanation || `This question tests your understanding of ${decodedChapter}. The correct answer demonstrates key concepts in this unit.`
          }));
          
          console.log('Formatted Agriculture questions with explanations:', formattedQuestions);
          setQuestions(formattedQuestions);
          setAnswers(new Array(formattedQuestions.length).fill(null));
        }
        
        setIsLoading(false);
        return [];
      }
      
      return [
        {
          id: 1,
          question: "What is 2 + 3?",
          options: ["4", "5", "6", "7"],
          correctAnswer: 1,
          explanation: "2 + 3 = 5. This is basic addition where we combine two numbers to get their sum."
        },
        {
          id: 2,
          question: "Which number comes after 9?",
          options: ["8", "10", "11", "12"],
          correctAnswer: 1,
          explanation: "The number sequence continues: 8, 9, 10, 11... So 10 comes after 9."
        },
        {
          id: 3,
          question: "What is 10 - 4?",
          options: ["5", "6", "7", "8"],
          correctAnswer: 1,
          explanation: "10 - 4 = 6. This is basic subtraction where we remove 4 from 10."
        },
        {
          id: 4,
          question: "How many sides does a triangle have?",
          options: ["2", "3", "4", "5"],
          correctAnswer: 1,
          explanation: "A triangle has exactly 3 sides by definition. This is a fundamental geometric property."
        },
        {
          id: 5,
          question: "What is 3 × 2?",
          options: ["5", "6", "7", "8"],
          correctAnswer: 1,
          explanation: "3 × 2 = 6. This is basic multiplication where we add 3 two times: 3 + 3 = 6."
        }
      ];
    };

    if (decodedSubject === 'Biology' && grade === '12') {
      initializeQuestions();
    } else if (decodedSubject === 'Chemistry' && grade === '12') {
      initializeQuestions();
    } else if (decodedSubject === 'Physics' && grade === '12') {
      initializeQuestions();
    } else if (decodedSubject === 'Agriculture' && grade === '12') {
      initializeQuestions();
    } else {
      const quizQuestions = initializeQuestions();
      setQuestions(quizQuestions);
      setAnswers(new Array(quizQuestions.length).fill(null));
      setIsLoading(false);
    }
  }, [decodedSubject, grade, decodedChapter, selectedDifficulty]);

  // Reset explanation when changing questions
  useEffect(() => {
    setShowExplanation(false);
    console.log('Question changed to:', currentQuestion, 'Explanation reset');
  }, [currentQuestion]);

  useEffect(() => {
    if (timeLeft > 0 && !quizCompleted) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setQuizCompleted(true);
            setShowResult(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [quizCompleted]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showExplanation) {
      setSelectedAnswer(answerIndex);
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = answerIndex;
      setAnswers(newAnswers);
      console.log('Answer selected:', answerIndex, 'for question:', currentQuestion);
    }
  };

  const handleShowAnswer = () => {
    if (selectedAnswer !== null) {
      setShowExplanation(true);
      console.log('Showing explanation for question:', currentQuestion);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion + 1]);
      setShowExplanation(false);
      console.log('Moving to next question:', currentQuestion + 1);
    } else {
      handleQuizComplete();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1]);
      setShowExplanation(false);
      console.log('Moving to previous question:', currentQuestion - 1);
    }
  };

  const handleQuizComplete = () => {
    const finalAnswers = [...answers];
    if (selectedAnswer !== null) {
      finalAnswers[currentQuestion] = selectedAnswer;
    }
    
    const correctAnswers = finalAnswers.reduce((count, answer, index) => {
      return answer === questions[index].correctAnswer ? count + 1 : count;
    }, 0);
    
    setScore(correctAnswers);
    setQuizCompleted(true);
    setShowResult(true);
    console.log('Quiz completed. Score:', correctAnswers, '/', questions.length);
  };

  const handleRetake = () => {
    setIsLoading(true);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowResult(false);
    setScore(0);
    setTimeLeft(1800);
    setQuizCompleted(false);
    
    const initializeQuestions = () => {
      if (decodedSubject === 'Mathematics' && grade === '12' && grade12Mathematics[decodedChapter]) {
        const chapterQuestions = grade12Mathematics[decodedChapter];
        const filteredQuestions = chapterQuestions.filter(q => q.difficulty === selectedDifficulty);
        
        if (filteredQuestions.length === 0) {
          const shuffled = [...chapterQuestions].sort(() => Math.random() - 0.5);
          return shuffled.slice(0, 10).map((q, index) => ({
            id: index + 1,
            question: q.question,
            options: q.options,
            correctAnswer: q.options.indexOf(q.correct),
            explanation: q.explanation
          }));
        }
        
        const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
        const questionsToTake = Math.min(10, shuffled.length);
        return shuffled.slice(0, questionsToTake).map((q, index) => ({
          id: index + 1,
          question: q.question,
          options: q.options,
          correctAnswer: q.options.indexOf(q.correct),
          explanation: q.explanation
        }));
      }
      
      if (decodedSubject === 'Biology' && grade === '12') {
        import('@/data/grade12BiologyQuestions').then(({ getGrade12BiologyQuestions }) => {
          const difficultyLevel = selectedDifficulty.toLowerCase() as 'easy' | 'medium' | 'hard';
          const biologyQuestions = getGrade12BiologyQuestions(decodedChapter, difficultyLevel, 10);
          
          const formattedQuestions = biologyQuestions.map((q, index) => ({
            id: index + 1,
            question: q.question,
            options: q.options,
            correctAnswer: q.options.indexOf(q.correct),
            explanation: q.explanation
          }));
          
          setQuestions(formattedQuestions);
          setAnswers(new Array(formattedQuestions.length).fill(null));
          setIsLoading(false);
        });
        
        return [];
      }

      if (decodedSubject === 'Chemistry' && grade === '12') {
        const difficultyLevel = selectedDifficulty.toLowerCase() as 'easy' | 'medium' | 'hard';
        const chemistryQuestions = getGrade12ChemistryQuestions(decodedChapter, difficultyLevel, 10);
        
        const formattedQuestions = chemistryQuestions.map((q, index) => ({
          id: index + 1,
          question: q.question,
          options: q.options,
          correctAnswer: q.options.indexOf(q.correct),
          explanation: q.explanation || `This question tests your understanding of ${decodedChapter}.`
        }));
        
        setQuestions(formattedQuestions);
        setAnswers(new Array(formattedQuestions.length).fill(null));
        setIsLoading(false);
        return [];
      }

      if (decodedSubject === 'Physics' && grade === '12') {
        const difficultyLevel = selectedDifficulty.toLowerCase() as 'easy' | 'medium' | 'hard';
        const physicsQuestions = getGrade12PhysicsQuestions(decodedChapter, difficultyLevel, 10);
        
        const formattedQuestions = physicsQuestions.map((q, index) => ({
          id: index + 1,
          question: q.question,
          options: q.options,
          correctAnswer: q.options.indexOf(q.correct),
          explanation: q.explanation || `This question tests your understanding of ${decodedChapter}.`
        }));
        
        setQuestions(formattedQuestions);
        setAnswers(new Array(formattedQuestions.length).fill(null));
        setIsLoading(false);
        return [];
      }

      if (decodedSubject === 'Agriculture' && grade === '12') {
        const difficultyLevel = selectedDifficulty as 'Easy' | 'Medium' | 'Hard';
        const agricultureQuestions = getGrade12AgricultureQuestions(decodedChapter, difficultyLevel);
        
        const shuffled = [...agricultureQuestions].sort(() => Math.random() - 0.5);
        const questionsToTake = Math.min(10, shuffled.length);
        const formattedQuestions = shuffled.slice(0, questionsToTake).map((q, index) => ({
          id: index + 1,
          question: q.question,
          options: q.options,
          correctAnswer: q.options.indexOf(q.correct),
          explanation: q.explanation || `This question tests your understanding of ${decodedChapter}.`
        }));
        
        setQuestions(formattedQuestions);
        setAnswers(new Array(formattedQuestions.length).fill(null));
        setIsLoading(false);
        return [];
      }
      
      return questions;
    };
    
    if (decodedSubject === 'Biology' && grade === '12') {
      initializeQuestions();
    } else if (decodedSubject === 'Chemistry' && grade === '12') {
      initializeQuestions();
    } else if (decodedSubject === 'Physics' && grade === '12') {
      initializeQuestions();
    } else if (decodedSubject === 'Agriculture' && grade === '12') {
      initializeQuestions();
    } else {
      const newQuestions = initializeQuestions();
      setQuestions(newQuestions);
      setAnswers(new Array(newQuestions.length).fill(null));
      setIsLoading(false);
    }
  };

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'text-green-500';
    if (percentage >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getAnswerStatus = (answerIndex: number) => {
    const correctAnswer = questions[currentQuestion]?.correctAnswer;
    const isCorrect = answerIndex === correctAnswer;
    const isSelected = answerIndex === selectedAnswer;
    
    if (!showExplanation) {
      return isSelected ? 'selected' : 'default';
    }
    
    if (isCorrect) return 'correct';
    if (isSelected && !isCorrect) return 'incorrect';
    return 'default';
  };

  const getAnswerStyle = (status: string) => {
    switch (status) {
      case 'correct':
        return 'border-green-500 bg-green-500/20 text-green-300';
      case 'incorrect':
        return 'border-red-500 bg-red-500/20 text-red-300';
      case 'selected':
        return 'border-blue-500 bg-blue-500/20 text-white';
      default:
        return 'border-white/20 bg-white/10 text-gray-300 hover:border-white/40 hover:bg-white/20';
    }
  };

  const progress = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;
  const currentQuestionData = questions[currentQuestion];
  const isCorrectAnswer = selectedAnswer === currentQuestionData?.correctAnswer;

  if (isLoading || questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Preparing your quiz...</p>
        </div>
      </div>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Quiz Complete!</h1>
            <p className="text-xl text-blue-200">
              {decodedSubject} • {decodedChapter} • {selectedDifficulty} • Grade {grade}
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-3xl mb-4">Your Score</CardTitle>
              <div className={`text-6xl font-bold mb-4 ${getScoreColor(score, questions.length)}`}>
                {score}/{questions.length}
              </div>
              <Badge className={percentage >= 80 ? 'bg-green-500' : percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'}>
                {percentage}% Complete
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{score}</div>
                  <div className="text-gray-300">Correct</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <XCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{questions.length - score}</div>
                  <div className="text-gray-300">Incorrect</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{formatTime(1800 - timeLeft)}</div>
                  <div className="text-gray-300">Time Used</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleRetake}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Retake Quiz
            </Button>
            <Button 
              onClick={() => navigate(`/grade/${grade}/subject/${encodeURIComponent(decodedSubject)}/chapters`)}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
            >
              Back to Chapters
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate(`/grade/${grade}/subjects`)}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Choose Another Subject
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/20"
            onClick={() => navigate(`/grade/${grade}/subject/${encodeURIComponent(decodedSubject)}/chapters`)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Chapters
          </Button>
          
          <div className="flex items-center space-x-4 text-white">
            <Badge variant="secondary" className="bg-white/20 text-white">
              {selectedDifficulty} Level
            </Badge>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
            </div>
            <Badge variant="secondary" className="bg-white/20 text-white">
              Question {currentQuestion + 1} of {questions.length}
            </Badge>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-medium">Progress</span>
            <span className="text-white font-medium">{Math.round(progress)}%</span>
          </div>
          <div className="h-3 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-500 to-blue-500" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardDescription className="text-blue-200">
                {decodedSubject} • {decodedChapter} • {selectedDifficulty} Level • Grade {grade}
              </CardDescription>
            </div>
            <CardTitle className="text-white text-2xl leading-relaxed">
              {currentQuestionData?.question || "Loading question..."}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentQuestionData?.options?.map((option, index) => {
                const status = getAnswerStatus(index);
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${getAnswerStyle(status)} ${showExplanation ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <span className="font-medium mr-3">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                  </button>
                );
              }) || <p className="text-white">Loading options...</p>}
            </div>

            {showExplanation && currentQuestionData && (
              <QuestionExplanation
                isCorrect={isCorrectAnswer}
                correctAnswer={currentQuestionData.options[currentQuestionData.correctAnswer]}
                explanation={currentQuestionData.explanation}
                userAnswer={selectedAnswer !== null ? currentQuestionData.options[selectedAnswer] : ""}
              />
            )}
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button 
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 disabled:opacity-50"
          >
            Previous
          </Button>
          
          <div className="flex gap-2">
            {!showExplanation && selectedAnswer !== null && (
              <Button 
                onClick={handleShowAnswer}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
              >
                <Eye className="mr-2 h-4 w-4" />
                Show Answer
              </Button>
            )}
            
            <Button 
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white disabled:opacity-50"
            >
              {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;

// Force rebuild to clear any cached Progress references
