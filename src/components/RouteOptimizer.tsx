
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Navigation, 
  MapPin, 
  Clock, 
  DollarSign, 
  TrendingUp,
  Route,
  Zap,
  Shield,
  Users,
  AlertTriangle
} from 'lucide-react';

const RouteOptimizer = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  const hotspots = [
    { name: "T. Nagar", earnings: "₹180/hr", safety: 95, demand: "High" },
    { name: "Anna Nagar", earnings: "₹160/hr", safety: 92, demand: "Medium" },
    { name: "Velachery", earnings: "₹140/hr", safety: 90, demand: "High" },
    { name: "Adyar", earnings: "₹170/hr", safety: 88, demand: "Medium" },
    { name: "Porur", earnings: "₹150/hr", safety: 85, demand: "Low" }
  ];

  const suggestedRoutes = [
    {
      route: "Anna Nagar → T. Nagar → Adyar",
      earnings: "₹520",
      time: "3.5 hrs",
      safety: 94,
      rides: 8
    },
    {
      route: "Velachery → OMR → T. Nagar",
      earnings: "₹480",
      time: "3 hrs",
      safety: 91,
      rides: 7
    },
    {
      route: "Porur → Anna Nagar → Vadapalani",
      earnings: "₹420",
      time: "2.5 hrs",
      safety: 89,
      rides: 6
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Smart Route Optimizer</h2>
        <p className="text-gray-600">AI-powered route suggestions for maximum earnings and safety</p>
      </div>

      {/* Route Planner */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-100">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Navigation className="w-5 h-5 text-blue-600" />
            <span>Plan Your Route</span>
          </CardTitle>
          <CardDescription>Get AI-optimized routes based on current demand and safety</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="from">From</Label>
              <Input 
                id="from" 
                placeholder="Enter starting location"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="to">To (Optional)</Label>
              <Input 
                id="to" 
                placeholder="Enter destination"
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
                className="mt-1"
              />
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600">
            <Zap className="w-4 h-4 mr-2" />
            Get AI Route Suggestions
          </Button>
        </CardContent>
      </Card>

      {/* Current Hotspots */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span>Current Earning Hotspots</span>
          </CardTitle>
          <CardDescription>Real-time demand and earning potential by area</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hotspots.map((spot, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg">{spot.name}</h3>
                  <Badge variant={spot.demand === 'High' ? 'default' : spot.demand === 'Medium' ? 'secondary' : 'outline'}>
                    {spot.demand}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Avg. Earnings</span>
                    <span className="font-semibold text-green-600">{spot.earnings}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Safety Score</span>
                    <span className="font-semibold">{spot.safety}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Route Suggestions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Route className="w-5 h-5 text-purple-600" />
            <span>AI Recommended Routes</span>
          </CardTitle>
          <CardDescription>Optimized for today's conditions and your driving pattern</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {suggestedRoutes.map((route, index) => (
              <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg">{route.route}</h3>
                  <Badge className="bg-green-100 text-green-800">
                    {index === 0 ? 'Best Match' : index === 1 ? 'High Earnings' : 'Quick Route'}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <div>
                      <div className="text-sm text-gray-600">Projected Earnings</div>
                      <div className="font-semibold">{route.earnings}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <div>
                      <div className="text-sm text-gray-600">Time</div>
                      <div className="font-semibold">{route.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-purple-500" />
                    <div>
                      <div className="text-sm text-gray-600">Safety</div>
                      <div className="font-semibold">{route.safety}%</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    <div>
                      <div className="text-sm text-gray-600">Expected Rides</div>
                      <div className="font-semibold">{route.rides}</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  <MapPin className="w-4 h-4 mr-2" />
                  Navigate This Route
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Real-time Alerts */}
      <Card className="border-yellow-200 bg-yellow-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-yellow-600" />
            <span>Real-time Traffic & Safety Alerts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div>
                <div className="font-semibold text-red-800">Heavy Traffic Alert</div>
                <p className="text-sm text-red-700">GST Road experiencing 40-minute delays. Consider alternate routes.</p>
                <p className="text-xs text-gray-600">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <div className="font-semibold text-blue-800">High Demand Area</div>
                <p className="text-sm text-blue-700">Increased ride requests near Express Avenue Mall. Good earning opportunity!</p>
                <p className="text-xs text-gray-600">5 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <div className="font-semibold text-green-800">Safety Update</div>
                <p className="text-sm text-green-700">New well-lit parking area added near Central Railway Station for Pink Auto drivers.</p>
                <p className="text-xs text-gray-600">1 hour ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RouteOptimizer;
