import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const GradesPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const grades = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-700 p-4">
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="text-white hover:bg-white/10 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('common.backToHome')}
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            {t('grades.selectGrade')}
          </h1>
          <p className="text-lg text-blue-100 animate-fade-in [animation-delay:0.2s]">
            {t('grades.chooseGrade')}
          </p>
        </div>


        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {grades.map((grade, index) => (
            <Card
              key={grade}
              onClick={() => navigate(`/grade/${grade}/subjects`)}
              className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-purple-500/30 shadow-lg opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-center text-white text-lg">
                  {t('common.grade')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {grade}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradesPage;
