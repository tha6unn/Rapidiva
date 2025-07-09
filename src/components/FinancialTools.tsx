
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CreditCard, 
  PiggyBank, 
  TrendingUp, 
  Calculator,
  Target,
  Award,
  DollarSign,
  FileText,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const FinancialTools = () => {
  const [loanAmount, setLoanAmount] = useState('50000');
  const [savingsGoal, setSavingsGoal] = useState('100000');

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Financial Empowerment Tools</h2>
        <p className="text-gray-600">நிதி சுதந்திரத்திற்கான உங்கள் பயணம்</p>
      </div>

      <Tabs defaultValue="credit" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="credit">Credit Score</TabsTrigger>
          <TabsTrigger value="loans">Micro Loans</TabsTrigger>
          <TabsTrigger value="savings">Savings</TabsTrigger>
          <TabsTrigger value="calculator">Calculator</TabsTrigger>
        </TabsList>

        <TabsContent value="credit" className="space-y-6">
          <Card className="bg-gradient-to-br from-purple-50 to-indigo-100">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-purple-600" />
                <span>AI Credit Score Assessment</span>
              </CardTitle>
              <CardDescription>Based on your Pink Auto driving patterns and financial behavior</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-purple-800 mb-2">720</div>
                <Badge className="bg-green-100 text-green-800">Excellent Credit Profile</Badge>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Payment History</span>
                    <span className="text-green-600">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Driving Consistency</span>
                    <span className="text-blue-600">88%</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Financial Discipline</span>
                    <span className="text-purple-600">82%</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold mb-2">AI Recommendations to Improve Score:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Maintain consistent daily earnings</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-yellow-500" />
                    <span>Complete financial literacy modules</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-yellow-500" />
                    <span>Set up automatic savings plan</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="loans" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <span>Quick Loan Application</span>
                </CardTitle>
                <CardDescription>AI-powered instant approval based on your profile</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="loan-amount">Loan Amount (₹)</Label>
                  <Input 
                    id="loan-amount" 
                    value={loanAmount} 
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Approval Probability</span>
                    <span className="text-green-600 font-semibold">92%</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Interest Rate</span>
                    <span className="text-blue-600">12% per annum</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Monthly EMI</span>
                    <span className="font-semibold">₹4,683</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600">
                  Apply for Loan
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Available Loan Schemes</CardTitle>
                <CardDescription>Government and partner schemes for Pink Auto drivers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Women Entrepreneur Loan</span>
                    <Badge variant="secondary">8.5% APR</Badge>
                  </div>
                  <p className="text-sm text-gray-600">Up to ₹2,00,000 for business expansion</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Vehicle Maintenance Loan</span>
                    <Badge variant="secondary">10% APR</Badge>
                  </div>
                  <p className="text-sm text-gray-600">Quick loans for auto repairs and maintenance</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Emergency Fund</span>
                    <Badge className="bg-green-100 text-green-800">Pre-approved</Badge>
                  </div>
                  <p className="text-sm text-gray-600">Instant access to ₹25,000 emergency fund</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="savings" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PiggyBank className="w-5 h-5 text-green-600" />
                  <span>Smart Savings Plan</span>
                </CardTitle>
                <CardDescription>AI-recommended savings based on your earnings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="savings-goal">Savings Goal (₹)</Label>
                  <Input 
                    id="savings-goal" 
                    value={savingsGoal} 
                    onChange={(e) => setSavingsGoal(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-800 mb-2">₹34,500</div>
                  <p className="text-sm text-green-700 mb-3">Current Savings Balance</p>
                  <Progress value={34.5} className="h-3 mb-2" />
                  <p className="text-xs text-green-600">34.5% of your goal achieved</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Recommended Monthly Savings</span>
                    <span className="font-semibold">₹3,200</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Time to Goal</span>
                    <span className="font-semibold">20 months</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600">
                  Set Up Auto-Save
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Savings Milestones</CardTitle>
                <CardDescription>Track your progress and earn rewards</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="font-semibold">₹25,000 Milestone</div>
                    <p className="text-sm text-gray-600">Achieved! Earned 500 bonus points</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Target className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-semibold">₹50,000 Milestone</div>
                    <p className="text-sm text-gray-600">65% complete - ₹32,500 remaining</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Target className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-semibold">₹1,00,000 Milestone</div>
                    <p className="text-sm text-gray-600">Unlock premium financial tools</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="calculator" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="w-5 h-5 text-purple-600" />
                  <span>Daily Earnings Calculator</span>
                </CardTitle>
                <CardDescription>Plan your rides and maximize earnings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Hours to Drive</Label>
                    <Input placeholder="8" className="mt-1" />
                  </div>
                  <div>
                    <Label>Target Rides</Label>
                    <Input placeholder="20" className="mt-1" />
                  </div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="text-lg font-semibold text-purple-800 mb-2">
                    Projected Earnings: ₹960
                  </div>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span>Base Fare</span>
                      <span>₹720</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Peak Hour Bonus</span>
                      <span>₹180</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Safety Bonus</span>
                      <span>₹60</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full">Calculate Optimal Route</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>EMI Calculator</CardTitle>
                <CardDescription>Calculate loan repayments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <Label>Principal Amount (₹)</Label>
                    <Input placeholder="50000" className="mt-1" />
                  </div>
                  <div>
                    <Label>Interest Rate (%)</Label>
                    <Input placeholder="12" className="mt-1" />
                  </div>
                  <div>
                    <Label>Tenure (months)</Label>
                    <Input placeholder="12" className="mt-1" />
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-lg font-semibold text-blue-800 mb-2">
                    Monthly EMI: ₹4,683
                  </div>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span>Total Interest</span>
                      <span>₹6,196</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Amount</span>
                      <span>₹56,196</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full">Check Affordability</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FinancialTools;
