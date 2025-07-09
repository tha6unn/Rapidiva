
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Star, 
  Target, 
  Calendar,
  MapPin,
  Clock,
  Award,
  Heart
} from 'lucide-react';

const DashboardStats = () => {
  return (
    <div className="space-y-6">
      {/* Key Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-800">Today's Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">₹850</div>
            <p className="text-xs text-green-700">+12% from yesterday</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-cyan-100 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-800">Rides Completed</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">23</div>
            <p className="text-xs text-blue-700">+3 from average</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-800">Credit Score</CardTitle>
            <Star className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">720</div>
            <p className="text-xs text-purple-700">+15 this month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-50 to-rose-100 border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-pink-800">Safety Score</CardTitle>
            <Award className="h-4 w-4 text-pink-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-pink-900">95%</div>
            <p className="text-xs text-pink-700">Excellent rating</p>
          </CardContent>
        </Card>
      </div>

      {/* Progress Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-purple-600" />
              <span>Monthly Goals Progress</span>
            </CardTitle>
            <CardDescription>Track your financial and driving targets</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Monthly Earnings Target</span>
                <span>₹18,500 / ₹25,000</span>
              </div>
              <Progress value={74} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Rides Completed</span>
                <span>420 / 600</span>
              </div>
              <Progress value={70} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Financial Literacy Score</span>
                <span>85 / 100</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-pink-600" />
              <span>பிங்க் ஆட்டோ Impact</span>
            </CardTitle>
            <CardDescription>Your contribution to women's empowerment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Women Riders Served</span>
              <Badge variant="secondary">1,247</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Safe Trips Completed</span>
              <Badge variant="secondary">2,891</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Community Rating</span>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="bg-pink-50 p-3 rounded-lg">
              <p className="text-sm text-pink-800">
                "வணக்கம்! You're making a real difference in women's safety and empowerment. Keep driving towards financial freedom!"
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span>Recent Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Completed ride: T. Nagar to Anna Nagar</span>
              </div>
              <span className="text-sm text-gray-600">₹180</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">AI suggested optimal route for peak hours</span>
              </div>
              <span className="text-sm text-gray-600">+15% earnings</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Completed financial literacy module</span>
              </div>
              <span className="text-sm text-gray-600">+10 points</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
