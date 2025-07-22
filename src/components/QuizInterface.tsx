import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Award,
  RefreshCw,
  Star
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getQuestionsForQuiz } from '@/data/naturalScienceQuizzes';
import QuestionExplanation from './QuestionExplanation';

interface QuizInterfaceProps {
  quiz: any;
  user: any;
  onComplete: (result: any) => void;
  onBack: () => void;
}

const QuizInterface = ({ quiz, user, onComplete, onBack }: QuizInterfaceProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(quiz.duration * 60);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const { toast } = useToast();

  const questions = useMemo(() => {
    const generateQuestions = () => {
      if (quiz.chapters && quiz.chapters.length > 0) {
        const allQuestions: any[] = [];
        
        quiz.chapters.forEach((chapter: string) => {
          const chapterQuestions = getQuestionsForQuiz(quiz.subject, chapter, quiz.difficulty, 2);
          allQuestions.push(...chapterQuestions);
        });
        
        const shuffled = allQuestions.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(quiz.questions || 10, shuffled.length));
      }
      return [];
    };
    return generateQuestions();
  }, [quiz.subject, quiz.chapters, quiz.difficulty, quiz.questions]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  console.log('Quiz started:', quiz);
  console.log('Generated questions:', questions);
  console.log('Current question:', currentQuestion);

  useEffect(() => {
    if (timeLeft > 0 && !quizCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !quizCompleted) {
      handleSubmitQuiz();
    }
  }, [timeLeft, quizCompleted]);

  // Reset explanation when moving to a new question
  useEffect(() => {
    setShowExplanation(false);
  }, [currentQuestionIndex]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
    console.log('Answer selected:', answer, 'for question:', currentQuestion.id);
  };

  const handleShowExplanation = () => {
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    console.log('Next question clicked, current index:', currentQuestionIndex);
    console.log('Total questions:', questions.length);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  const handlePreviousQuestion = () => {
    console.log('Previous question clicked, current index:', currentQuestionIndex);
    
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitQuiz = () => {
    console.log('Submitting quiz...');
    console.log('Selected answers:', selectedAnswers);
    console.log('Questions:', questions);
    
    const correctAnswers = questions.filter(q => selectedAnswers[q.id] === q.correct).length;
    const score = Math.round((correctAnswers / questions.length) * 100);
    
    const quizResults = {
      quiz: quiz,
      score: score,
      correctAnswers: correctAnswers,
      totalQuestions: questions.length,
      timeSpent: (quiz.duration * 60) - timeLeft,
      answers: selectedAnswers
    };

    console.log('Quiz results:', quizResults);
    
    setResults(quizResults);
    setQuizCompleted(true);

    toast({
      title: "Quiz Completed!",
      description: `You scored ${score}% (${correctAnswers}/${questions.length})`,
    });

    // Call the onComplete callback
    onComplete(quizResults);
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setTimeLeft(quiz.duration * 60);
    setQuizCompleted(false);
    setResults(null);
    
    toast({
      title: "Quiz Reset",
      description: "Starting fresh quiz attempt",
    });
  };

  const handleBackToSubjects = () => {
    onBack();
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardContent className="p-6 text-center">
              <p className="text-xl mb-4 text-white">No questions available for this quiz.</p>
              <Button onClick={handleBackToSubjects} className="bg-gradient-to-r from-green-600 to-yellow-600 text-white">
                Back to Subjects
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (quizCompleted && results) {
    return (
      <div className="min-h-screen bg-slate-900 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full">
                  <Award className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-white">Quiz Complete!</CardTitle>
              <div className="flex justify-center items-center space-x-2 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-8 w-8 ${
                      i < Math.floor(results.score / 20) 
                        ? 'text-yellow-400 fill-yellow-400' 
                        : 'text-gray-400'
                    }`}
                  />
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                  {results.score}%
                </div>
                <p className="text-xl text-white">
                  {results.correctAnswers} out of {results.totalQuestions} questions correct
                </p>
                <Badge 
                  className={`text-lg px-6 py-2 text-white ${
                    results.score >= 90 ? 'bg-green-500' :
                    results.score >= 70 ? 'bg-yellow-500' :
                    results.score >= 50 ? 'bg-orange-500' : 'bg-red-500'
                  }`}
                >
                  {results.score >= 90 ? 'Excellent!' :
                   results.score >= 70 ? 'Good Job!' :
                   results.score >= 50 ? 'Keep Practicing!' : 'Needs Improvement'}
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-slate-700 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">{results.correctAnswers}</div>
                  <div className="text-sm text-white">Correct</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-400">{results.totalQuestions - results.correctAnswers}</div>
                  <div className="text-sm text-white">Incorrect</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400">{Math.floor(results.timeSpent / 60)}m</div>
                  <div className="text-sm text-white">Time Spent</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Review Your Answers</h3>
                {questions.map((question, index) => {
                  const userAnswer = selectedAnswers[question.id];
                  const isCorrect = userAnswer === question.correct;
                  
                  return (
                    <div key={question.id} className="bg-slate-700 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        {isCorrect ? (
                          <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                        ) : (
                          <XCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium mb-2 text-white">Q{index + 1}: {question.question}</p>
                          <div className="text-sm space-y-1">
                            <p className="text-white">Your answer: <span className={isCorrect ? 'text-green-400' : 'text-red-400'}>{userAnswer || 'Not answered'}</span></p>
                            {!isCorrect && (
                              <p className="text-white">Correct answer: <span className="text-green-400">{question.correct}</span></p>
                            )}
                            <p className="text-gray-300 italic">{question.explanation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleBackToSubjects}
                  className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white border-0"
                >
                  Back to Subjects
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleRetakeQuiz}
                  className="border-slate-600 text-slate-900 bg-white hover:bg-slate-100"
                >
                  <RefreshCw className="mr-2 h-4 w-4 text-slate-900" />
                  Retake Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const isCorrectAnswer = selectedAnswers[currentQuestion?.id] === currentQuestion?.correct;

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            onClick={handleBackToSubjects}
            className="text-white hover:bg-slate-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Subjects
          </Button>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-slate-800 rounded-lg px-4 py-2">
              <Clock className="h-4 w-4 text-white" />
              <span className={`font-mono text-white ${timeLeft < 300 ? 'text-red-400' : 'text-white'}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
            <Badge variant="secondary" className="bg-slate-700 text-white border-slate-600">
              {currentQuestionIndex + 1} / {questions.length}
            </Badge>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2 text-white">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-500 to-blue-500" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Card className="bg-slate-800 border-slate-700 text-white mb-6">
          <CardHeader>
            <CardTitle className="text-xl text-white">
              Question {currentQuestionIndex + 1}
              {quiz.difficulty && (
                <Badge className={`ml-2 ${
                  quiz.difficulty === 'Easy' ? 'bg-green-500' :
                  quiz.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
                }`}>
                  {quiz.difficulty}
                </Badge>
              )}
            </CardTitle>
            <p className="text-lg leading-relaxed text-white">{currentQuestion.question}</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswers[currentQuestion.id] === option ? "default" : "outline"}
                  className={`w-full text-left justify-start p-4 h-auto ${
                    selectedAnswers[currentQuestion.id] === option
                      ? 'bg-gradient-to-r from-green-600 to-yellow-600 text-white border-0'
                      : 'border-slate-600 text-slate-900 bg-white hover:bg-slate-100 hover:text-slate-900'
                  }`}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={showExplanation}
                >
                  <span className="mr-4 font-bold">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </Button>
              ))}
            </div>

            {showExplanation && (
              <QuestionExplanation
                isCorrect={isCorrectAnswer}
                correctAnswer={currentQuestion.correct}
                explanation={currentQuestion.explanation || "No explanation available for this question."}
                userAnswer={selectedAnswers[currentQuestion.id] || ""}
              />
            )}
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="border-slate-600 text-white bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </Button>
          
          {!showExplanation && selectedAnswers[currentQuestion.id] ? (
            <Button
              onClick={handleShowExplanation}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0"
            >
              Check Answer
            </Button>
          ) : (
            <Button
              onClick={handleNextQuestion}
              disabled={!selectedAnswers[currentQuestion.id]}
              className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white border-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestionIndex === questions.length - 1 ? 'Submit Quiz' : 'Next Question'}
            </Button>
          )}
        </div>

        <div className="mt-8 p-4 bg-slate-800 rounded-lg">
          <h4 className="text-sm font-medium mb-3 text-white">Question Navigator</h4>
          <div className="flex flex-wrap gap-2">
            {questions.map((_, index) => (
              <Button
                key={index}
                size="sm"
                variant={index === currentQuestionIndex ? "default" : "outline"}
                className={`w-10 h-10 p-0 ${
                  index === currentQuestionIndex
                    ? 'bg-gradient-to-r from-green-600 to-yellow-600 text-white border-0'
                    : selectedAnswers[questions[index].id]
                    ? 'border-green-500 text-green-400 bg-slate-800 hover:bg-green-500/10'
                    : 'border-slate-600 text-white bg-slate-800 hover:bg-slate-700'
                }`}
                onClick={() => setCurrentQuestionIndex(index)}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizInterface;
