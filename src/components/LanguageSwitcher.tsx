import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const languageCycle: Record<string, 'en' | 'om' | 'am'> = { en: 'om', om: 'am', am: 'en' };
const languageLabels: Record<string, string> = { en: 'EN', om: 'OM', am: 'አማ' };

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setLanguage(languageCycle[language])}
        className="bg-white/90 backdrop-blur-md border-white text-gray-900 hover:bg-white font-semibold gap-2 shadow-lg"
      >
        <Globe className="h-4 w-4" />
        {languageLabels[language]}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
