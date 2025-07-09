
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Car, 
  DollarSign, 
  Route, 
  Shield, 
  MessageCircle, 
  TrendingUp, 
  MapPin, 
  Bell,
  BookOpen,
  CreditCard,
  Navigation,
  Phone,
  Mic,
  Star,
  Users,
  Target,
  Heart,
  Zap,
  Languages,
  Calendar
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import DashboardStats from '../components/DashboardStats';
import FinancialTools from '../components/FinancialTools';
import RouteOptimizer from '../components/RouteOptimizer';
import SafetyMonitor from '../components/SafetyMonitor';
import AIChatbot from '../components/AIChatbot';
import LearningCenter from '../components/LearningCenter';
import BookingSystem from '../components/BookingSystem';

const Index = () => {
  const { language, setLanguage, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('booking');
  const [userName] = useState('பவானி');

  const displayName = language === 'ta' ? userName : 'Bavani';

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-xl">
                <Car className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  RAPIDIVA
                </h1>
                <p className="text-sm text-gray-600">{t('aiPoweredPlatform')}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                <Button
                  variant={language === 'en' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('en')}
                  className="text-xs"
                >
                  EN
                </Button>
                <Button
                  variant={language === 'ta' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('ta')}
                  className="text-xs"
                >
                  தமிழ்
                </Button>
              </div>
              
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Mic className="w-4 h-4" />
                <span>{t('voice')}</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{t('emergency')}</span>
              </Button>
              <div className="text-right">
                <p className="font-semibold text-gray-800">{t('welcome')}, {displayName}</p>
                <p className="text-sm text-gray-600">{t('pinkAutoDriver')}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-6 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">{t('welcome')}, {displayName}!</h2>
              <p className="text-pink-100 mb-4">{t('welcomeMessage')}</p>
              <div className="flex space-x-4">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  <Star className="w-4 h-4 mr-1" />
                  {t('creditScore')}: 720
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {t('todaysEarnings')}: ₹850
                </Badge>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/20 rounded-full p-4">
                <Car className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8 bg-white shadow-lg">
            <TabsTrigger value="booking" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">{t('booking')}</span>
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span className="hidden sm:inline">{t('dashboard')}</span>
            </TabsTrigger>
            <TabsTrigger value="financial" className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4" />
              <span className="hidden sm:inline">{t('finance')}</span>
            </TabsTrigger>
            <TabsTrigger value="routes" className="flex items-center space-x-2">
              <Route className="w-4 h-4" />
              <span className="hidden sm:inline">{t('routes')}</span>
            </TabsTrigger>
            <TabsTrigger value="safety" className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">{t('safety')}</span>
            </TabsTrigger>
            <TabsTrigger value="learning" className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">{t('learn')}</span>
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">{t('chat')}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="booking">
            <BookingSystem />
          </TabsContent>

          <TabsContent value="dashboard">
            <DashboardStats />
          </TabsContent>

          <TabsContent value="financial">
            <FinancialTools />
          </TabsContent>

          <TabsContent value="routes">
            <RouteOptimizer />
          </TabsContent>

          <TabsContent value="safety">
            <SafetyMonitor />
          </TabsContent>

          <TabsContent value="learning">
            <LearningCenter />
          </TabsContent>

          <TabsContent value="chat">
            <AIChatbot />
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <div className="fixed bottom-6 right-6 space-y-3">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg rounded-full w-14 h-14"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
          <Button 
            size="lg" 
            variant="destructive"
            className="shadow-lg rounded-full w-14 h-14"
          >
            <Phone className="w-6 h-6" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
