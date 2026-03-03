
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, User, Save, Trash2 } from 'lucide-react';
import { 
  getPerformanceData, 
  updateStudentName,
  clearPerformanceData,
  getOrCreateProfile
} from '@/lib/performanceUtils';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from 'sonner';
import { useLanguage } from '@/i18n/LanguageContext';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [quizCount, setQuizCount] = useState(0);

  useEffect(() => {
    const data = getPerformanceData();
    setName(data.profile.student_name || '');
    setQuizCount(data.attempts.length);
  }, []);

  const handleSave = () => {
    if (name.trim()) {
      updateStudentName(name.trim());
      toast.success(t('profile.profileUpdated'));
    } else {
      toast.error(t('profile.enterValidName'));
    }
  };

  const handleClearData = () => {
    clearPerformanceData();
    setName('');
    setQuizCount(0);
    toast.success(t('profile.dataCleared'));
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-700 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-white">{t('profile.studentProfile')}</h1>
            <p className="text-purple-200">{t('profile.manageProfile')}</p>
          </div>
        </div>

        <Card className="bg-white/10 border-white/20 mb-6">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-purple-500/20 rounded-full">
                <User className="h-8 w-8 text-purple-400" />
              </div>
              <div>
                <CardTitle className="text-white text-xl">{t('profile.profileSettings')}</CardTitle>
                <CardDescription className="text-gray-300">
                  {t('profile.nameAppears')}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">{t('profile.studentName')}</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('host.enterName')}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
            
            <Button onClick={handleSave} className="w-full bg-purple-600 hover:bg-purple-700">
              <Save className="mr-2 h-4 w-4" />
              {t('profile.saveProfile')}
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-lg">{t('profile.performanceStats')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
              <span className="text-gray-300">{t('profile.totalQuizzes')}</span>
              <span className="text-2xl font-bold text-white">{quizCount}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-red-500/10 border-red-500/30">
          <CardHeader>
            <CardTitle className="text-red-400 text-lg">{t('profile.dangerZone')}</CardTitle>
            <CardDescription className="text-gray-400">
              {t('profile.cannotBeUndone')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="w-full">
                  <Trash2 className="mr-2 h-4 w-4" />
                  {t('profile.clearAllData')}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-gray-900 border-gray-700">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-white">{t('profile.areYouSure')}</AlertDialogTitle>
                  <AlertDialogDescription className="text-gray-400">
                    {t('profile.deleteWarning')}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-gray-800 text-white border-gray-700 hover:bg-gray-700">
                    {t('common.cancel')}
                  </AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={handleClearData}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    {t('profile.yesDelete')}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
