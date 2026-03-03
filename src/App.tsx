
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Index from "./pages/Index";
import GradeSelection from "./pages/GradeSelection";
import GradesPage from "./pages/GradesPage";
import SubjectsPage from "./pages/SubjectsPage";
import ChaptersPage from "./pages/ChaptersPage";
import QuizPage from "./pages/QuizPage";
import CareerSimulatorPage from "./pages/CareerSimulatorPage";
import PerformancePage from "./pages/PerformancePage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <LanguageSwitcher />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/grades" element={<GradesPage />} />
              <Route path="/grade/:grade" element={<GradeSelection />} />
              <Route path="/grade/:grade/subjects" element={<SubjectsPage />} />
              <Route path="/grade/:grade/subject/:subject/chapters" element={<ChaptersPage />} />
              <Route path="/grade/:grade/subject/:subject/chapter/:chapterId/difficulty/:difficulty/quiz" element={<QuizPage />} />
              <Route path="/career-simulator" element={<CareerSimulatorPage />} />
              <Route path="/performance" element={<PerformancePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
