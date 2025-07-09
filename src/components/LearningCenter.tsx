
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Play, 
  CheckCircle, 
  Star, 
  Award,
  Mic,
  Volume2,
  FileText,
  Target,
  TrendingUp,
  Users,
  Lightbulb
} from 'lucide-react';

const LearningCenter = () => {
  const [currentModule, setCurrentModule] = useState(null);

  const learningModules = [
    {
      title: "Basic Financial Literacy",
      description: "அடிப்படை நிதியியல் அறிவு",
      duration: "15 mins",
      progress: 100,
      status: "completed",
      points: 50,
      lessons: 5
    },
    {
      title: "Budgeting & Savings",
      description: "பட்ஜெட் மற்றும் சேமிப்பு",
      duration: "20 mins",
      progress: 60,
      status: "in-progress",
      points: 30,
      lessons: 6
    },
    {
      title: "Credit & Loans",
      description: "கடன் மற்றும் கடன் பெறுதல்",
      duration: "25 mins",
      progress: 0,
      status: "not-started",
      points: 0,
      lessons: 8
    },
    {
      title: "Government Schemes",
      description: "அரசு திட்டங்கள்",
      duration: "18 mins",
      progress: 80,
      status: "in-progress",
      points: 40,
      lessons: 7
    },
    {
      title: "Digital Payments",
      description: "டிஜிட்டல் பேமெண்ட்",
      duration: "12 mins",
      progress: 100,
      status: "completed",
      points: 35,
      lessons: 4
    },
    {
      title: "Investment Basics",
      description: "முதலீடு அடிப்படைகள்",
      duration: "30 mins",
      progress: 0,
      status: "not-started",
      points: 0,
      lessons: 10
    }
  ];

  const achievements = [
    { title: "First Steps", description: "Completed first module", earned: true },
    { title: "Quick Learner", description: "Completed 3 modules in a week", earned: true },
    { title: "Finance Expert", description: "Scored 90% in all modules", earned: false },
    { title: "Consistent Learner", description: "7-day learning streak", earned: true }
  ];

  const governmentSchemes = [
    {
      name: "PM SVANidhi Scheme",
      description: "Micro-credit for street vendors and small businesses",
      eligibility: "Pink Auto drivers eligible",
      benefit: "Loan up to ₹50,000",
      status: "Available"
    },
    {
      name: "Stand-Up India",
      description: "Support for women entrepreneurs",
      eligibility: "Women-owned businesses",
      benefit: "₹10 lakh to ₹1 crore loan",
      status: "Available"
    },
    {
      name: "Mudra Yojana",
      description: "Micro-finance for small businesses",
      eligibility: "Small transport businesses",
      benefit: "Up to ₹10 lakh loan",
      status: "Available"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Learning & Development Center</h2>
        <p className="text-gray-600">கற்றல் மற்றும் வளர்ச்சி மையம்</p>
      </div>

      <Tabs defaultValue="modules" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="modules">Learning Modules</TabsTrigger>
          <TabsTrigger value="schemes">Govt Schemes</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="modules" className="space-y-6">
          {/* Voice Learning Feature */}
          <Card className="bg-gradient-to-br from-purple-50 to-indigo-100">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mic className="w-5 h-5 text-purple-600" />
                <span>Voice-Enabled Learning</span>
              </CardTitle>
              <CardDescription>Tamil voice support for all lessons</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Volume2 className="w-4 h-4 mr-2" />
                  Listen in Tamil
                </Button>
                <Button variant="outline">
                  <Mic className="w-4 h-4 mr-2" />
                  Voice Questions
                </Button>
                <Badge className="bg-green-100 text-green-800">
                  தமிழில் கிடைக்கும்
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Learning Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningModules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <Badge variant={
                      module.status === 'completed' ? 'default' : 
                      module.status === 'in-progress' ? 'secondary' : 'outline'
                    }>
                      {module.status === 'completed' ? 'Done' : 
                       module.status === 'in-progress' ? 'Learning' : 'Start'}
                    </Badge>
                  </div>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>{module.lessons} lessons</span>
                    <span>{module.duration}</span>
                  </div>
                  
                  {module.progress > 0 && (
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{module.progress}%</span>
                      </div>
                      <Progress value={module.progress} className="h-2" />
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm">{module.points} points</span>
                    </div>
                    <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600">
                      {module.status === 'completed' ? 'Review' : 
                       module.status === 'in-progress' ? 'Continue' : 'Start'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="schemes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>Government Schemes Navigator</span>
              </CardTitle>
              <CardDescription>AI-powered guidance for accessing government benefits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {governmentSchemes.map((scheme, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-lg">{scheme.name}</h3>
                      <Badge className="bg-green-100 text-green-800">
                        {scheme.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{scheme.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm font-medium">Eligibility:</span>
                        <p className="text-sm text-gray-600">{scheme.eligibility}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium">Benefit:</span>
                        <p className="text-sm text-gray-600">{scheme.benefit}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm">Learn More</Button>
                      <Button size="sm" variant="outline">Apply Now</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span>Learning Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">72%</div>
                  <p className="text-sm text-gray-600">Overall Completion</p>
                </div>
                <Progress value={72} className="h-3" />
                
                <div className="space-y-3 mt-6">
                  <div className="flex justify-between">
                    <span className="text-sm">Modules Completed</span>
                    <span className="font-semibold">2/6</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Total Points Earned</span>
                    <span className="font-semibold">155</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Learning Streak</span>
                    <span className="font-semibold">7 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Time Spent Learning</span>
                    <span className="font-semibold">2.5 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  <span>Learning Goals</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Complete 4 modules this month</span>
                      <span>2/4</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Earn 300 learning points</span>
                      <span>155/300</span>
                    </div>
                    <Progress value={52} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Maintain 7-day streak</span>
                      <span>7/7</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold mb-2">Next Milestone</h4>
                  <p className="text-sm text-gray-600">
                    Complete "Credit & Loans" module to unlock premium financial tools!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-600" />
                <span>Learning Achievements</span>
              </CardTitle>
              <CardDescription>Celebrate your learning milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`p-4 border rounded-lg ${
                      achievement.earned ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${
                        achievement.earned ? 'bg-yellow-100' : 'bg-gray-100'
                      }`}>
                        {achievement.earned ? (
                          <Award className="w-5 h-5 text-yellow-600" />
                        ) : (
                          <Award className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                      <div>
                        <h3 className={`font-semibold ${
                          achievement.earned ? 'text-yellow-800' : 'text-gray-600'
                        }`}>
                          {achievement.title}
                        </h3>
                        <p className={`text-sm ${
                          achievement.earned ? 'text-yellow-700' : 'text-gray-500'
                        }`}>
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="w-5 h-5 text-blue-600" />
                <span>Learning Impact</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-800 mb-2">
                  Financial Literacy Score: 85/100
                </div>
                <p className="text-blue-700 mb-4">
                  You're in the top 15% of Pink Auto drivers for financial knowledge!
                </p>
                <Badge className="bg-blue-100 text-blue-800">
                  Advanced Level
                </Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LearningCenter;
