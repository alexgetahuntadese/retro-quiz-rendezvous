
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Clock, Target } from 'lucide-react';
import { 
  Calculator, 
  Atom, 
  Globe, 
  Book, 
  Palette, 
  Music, 
  Heart, 
  Zap,
  TreePine,
  Languages,
  Users,
  Briefcase,
  Wheat,
  ScrollText,
  Monitor
} from 'lucide-react';

const SubjectsPage = () => {
  const navigate = useNavigate();
  const { grade } = useParams();

  const subjectIcons = {
    'Mathematics': Calculator,
    'Physics': Atom,
    'Chemistry': Zap,
    'Biology': TreePine,
    'Geography': Globe,
    'History': ScrollText,
    'English': Languages,
    'Amharic': Book,
    'Art': Palette,
    'Music': Music,
    'Physical Education': Heart,
    'Civic Education': Users,
    'Economics': Briefcase,
    'General Science': Atom,
    'Agriculture': Wheat,
    'Information Technology': Monitor,
  };

  // Grade-specific subjects configuration
  const getSubjectsForGrade = (gradeNum: string) => {
    const baseSubjects = [
      {
        name: 'Mathematics',
        description: 'Numbers, algebra, geometry, and problem solving',
        chapters: 12,
        estimatedTime: '45 hours',
        difficulty: 'Advanced',
        icon: subjectIcons.Mathematics,
      },
      {
        name: 'Physics',
        description: 'Motion, forces, energy, and natural phenomena',
        chapters: 5,
        estimatedTime: '40 hours',
        difficulty: 'Advanced',
        icon: subjectIcons.Physics,
      },
      {
        name: 'Chemistry',
        description: 'Atoms, molecules, reactions, and materials',
        chapters: 9,
        estimatedTime: '35 hours',
        difficulty: 'Advanced',
        icon: subjectIcons.Chemistry,
      },
      {
        name: 'Biology',
        description: 'Living organisms, ecosystems, and life processes',
        chapters: 11,
        estimatedTime: '38 hours',
        difficulty: 'Intermediate',
        icon: subjectIcons.Biology,
      },
      {
        name: 'English',
        description: 'Reading, writing, grammar, and literature',
        chapters: 8,
        estimatedTime: '30 hours',
        difficulty: 'Intermediate',
        icon: subjectIcons.English,
      },
      {
        name: 'Geography',
        description: 'Earth science, maps, climate, and human geography',
        chapters: 7,
        estimatedTime: '25 hours',
        difficulty: 'Intermediate',
        icon: subjectIcons.Geography,
      },
      {
        name: 'History',
        description: 'Ethiopian and world history, civilizations, and cultural heritage',
        chapters: 9,
        estimatedTime: '32 hours',
        difficulty: 'Intermediate',
        icon: subjectIcons.History,
      },
      {
        name: 'Civic Education',
        description: 'Democracy, rights, responsibilities, justice, and ethical citizenship',
        chapters: 11,
        estimatedTime: '35 hours',
        difficulty: 'Intermediate',
        icon: subjectIcons['Civic Education'],
      },
    ];

    // Add grade-specific subjects
    if (gradeNum === '11') {
      baseSubjects.push({
        name: 'Agriculture',
        description: 'Crop production, livestock management, natural resources, and sustainable farming practices',
        chapters: 16,
        estimatedTime: '50 hours',
        difficulty: 'Intermediate',
        icon: subjectIcons.Agriculture,
      });
    }

    if (gradeNum === '12') {
      baseSubjects.push(
        {
          name: 'Agriculture',
          description: 'Crop production, livestock, soil science, and sustainable farming',
          chapters: 6,
          estimatedTime: '40 hours',
          difficulty: 'Intermediate',
          icon: subjectIcons.Agriculture,
        },
        {
          name: 'Information Technology',
          description: 'Computer systems, programming, databases, web development, and emerging technologies',
          chapters: 6,
          estimatedTime: '42 hours',
          difficulty: 'Intermediate',
          icon: subjectIcons['Information Technology'],
        }
      );
    }

    return baseSubjects;
  };

  const subjects = getSubjectsForGrade(grade || '12');

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Advanced': return 'bg-red-500 text-white';
      case 'Intermediate': return 'bg-yellow-500 text-black';
      case 'Beginner': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const handleSubjectSelect = (subjectName: string) => {
    navigate(`/grade/${grade}/subject/${encodeURIComponent(subjectName)}/chapters`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/20 mr-4"
            onClick={() => navigate('/grades')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Grades
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Grade {grade} Subjects
          </h1>
          <p className="text-xl text-blue-200">
            Choose a subject to explore chapters and start learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => {
            const IconComponent = subject.icon;
            return (
              <Card 
                key={subject.name}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                onClick={() => handleSubjectSelect(subject.name)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-lg bg-blue-500 group-hover:bg-blue-400 transition-colors">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-xl">
                          {subject.name}
                        </CardTitle>
                        <Badge className={getDifficultyColor(subject.difficulty)}>
                          {subject.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-blue-200 mt-2">
                    {subject.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                    <div className="flex items-center">
                      <BookOpen className="mr-2 h-4 w-4" />
                      <span>{subject.chapters} chapters</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>{subject.estimatedTime}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSubjectSelect(subject.name);
                    }}
                  >
                    Explore Chapters
                    <Target className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubjectsPage;
