
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, BookOpen, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-700">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4 opacity-0 animate-fade-in">
            {t('index.title')}
          </h1>
          <p className="text-xl text-blue-100 mb-8 opacity-0 animate-fade-in [animation-delay:0.2s]">
            {t('index.subtitle')}
          </p>
          <div className="text-lg text-purple-100 opacity-0 animate-fade-in [animation-delay:0.4s]">
            {t('index.gradeInfo')}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 shadow-2xl hover:shadow-purple-500/20 opacity-0 animate-fade-in [animation-delay:0.6s]">
            <CardHeader>
              <div className="flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-purple-400" />
                <div>
                  <CardTitle className="text-white text-xl">{t('index.exploreSubjects')}</CardTitle>
                  <CardDescription className="text-blue-100">
                    {t('index.browseDescription')}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => navigate('/grades')}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {t('index.browseQuizzes')}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 shadow-2xl hover:shadow-green-500/20 opacity-0 animate-fade-in [animation-delay:0.7s]">
            <CardHeader>
              <div className="flex items-center gap-3">
                <BarChart3 className="h-8 w-8 text-green-400" />
                <div>
                  <CardTitle className="text-white text-xl">{t('index.myPerformance')}</CardTitle>
                  <CardDescription className="text-blue-100">
                    {t('index.trackProgress')}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => navigate('/performance')}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {t('index.viewDashboard')}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/20 opacity-0 animate-fade-in [animation-delay:0.8s] md:col-span-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-yellow-400" />
                <div>
                  <CardTitle className="text-white text-xl">🚀 Future Me Mode</CardTitle>
                  <CardDescription className="text-blue-100">
                    AI-powered career simulator — experience a day in any career!
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => navigate('/career-simulator')}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Try Career Simulator
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center opacity-0 animate-fade-in [animation-delay:1s]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white/80">
            <div>
              <div className="text-2xl font-bold text-green-400">2050+</div>
              <div className="text-sm">{t('common.questions')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">12</div>
              <div className="text-sm">{t('common.subjects')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">12</div>
              <div className="text-sm">{t('common.gradeLevels')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-400">AI</div>
              <div className="text-sm">{t('common.powered')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
