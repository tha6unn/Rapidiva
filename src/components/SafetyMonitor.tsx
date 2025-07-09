
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Shield, 
  Phone, 
  MapPin, 
  AlertTriangle, 
  CheckCircle,
  Users,
  Clock,
  Heart,
  Zap,
  Eye,
  Bell
} from 'lucide-react';

const SafetyMonitor = () => {
  const [emergencyMode, setEmergencyMode] = useState(false);
  const [locationSharing, setLocationSharing] = useState(true);
  const [autoAlerts, setAutoAlerts] = useState(true);

  const emergencyContacts = [
    { name: "Pink Auto Helpline", number: "1800-123-4567", type: "Primary" },
    { name: "Police Control Room", number: "100", type: "Emergency" },
    { name: "Family Contact", number: "+91 98765 43210", type: "Personal" },
    { name: "Pink Auto Support", number: "1800-PINK-AUTO", type: "Support" }
  ];

  const safetyAlerts = [
    {
      time: "2 hours ago",
      type: "success",
      message: "Safe arrival at destination confirmed",
      location: "T. Nagar"
    },
    {
      time: "4 hours ago",
      type: "warning",
      message: "Unusual route deviation detected - resolved",
      location: "Anna Nagar"
    },
    {
      time: "Yesterday",
      type: "info",
      message: "Safety check-in completed successfully",
      location: "Vadapalani"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Safety & Emergency Center</h2>
        <p className="text-gray-600">உங்கள் பாதுகாப்பு எங்கள் முன்னுரிமை</p>
      </div>

      {/* Emergency Actions */}
      <Card className="bg-gradient-to-br from-red-50 to-pink-100 border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-red-800">
            <Shield className="w-5 h-5" />
            <span>Emergency Actions</span>
          </CardTitle>
          <CardDescription>Quick access to emergency features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white h-16"
            >
              <Phone className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="font-semibold">Emergency Call</div>
                <div className="text-sm opacity-90">Instant help</div>
              </div>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-red-200 text-red-700 h-16"
            >
              <MapPin className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="font-semibold">Share Location</div>
                <div className="text-sm">Send to contacts</div>
              </div>
            </Button>
          </div>
          
          <div className="mt-4 p-4 bg-white rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <Label htmlFor="emergency-mode" className="text-sm font-medium">
                Emergency Mode
              </Label>
              <Switch 
                id="emergency-mode"
                checked={emergencyMode}
                onCheckedChange={setEmergencyMode}
              />
            </div>
            {emergencyMode && (
              <div className="text-sm text-red-700 bg-red-50 p-2 rounded">
                Emergency mode activated. Your location is being shared with emergency contacts.
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Safety Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Safety Status</span>
            </CardTitle>
            <CardDescription>Real-time safety monitoring</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Current Safety Score</span>
              <Badge className="bg-green-100 text-green-800">95% Excellent</Badge>
            </div>
            <Progress value={95} className="h-3" />
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Eye className="w-4 h-4 text-blue-500" />
                <span className="text-sm">GPS Tracking: Active</span>
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>
              <div className="flex items-center space-x-3">
                <Bell className="w-4 h-4 text-purple-500" />
                <span className="text-sm">Emergency Alerts: Enabled</span>
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-4 h-4 text-orange-500" />
                <span className="text-sm">Contact Sync: Updated</span>
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-pink-600" />
              <span>Well-being Check</span>
            </CardTitle>
            <CardDescription>Daily safety and wellness monitoring</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-4 bg-pink-50 rounded-lg">
              <div className="text-2xl font-bold text-pink-800 mb-1">Safe</div>
              <p className="text-sm text-pink-700">All systems normal</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Today's Safety Checks</span>
                <span className="font-semibold">8/8 ✓</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Route Deviations</span>
                <span className="font-semibold text-green-600">0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Emergency Drills</span>
                <span className="font-semibold">2 this month</span>
              </div>
            </div>
            
            <Button className="w-full" variant="outline">
              Complete Safety Check-in
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Contacts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-blue-600" />
            <span>Emergency Contacts</span>
          </CardTitle>
          <CardDescription>Quick access to help when you need it</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-semibold">{contact.name}</div>
                  <div className="text-sm text-gray-600">{contact.number}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={contact.type === 'Emergency' ? 'destructive' : 'secondary'}>
                    {contact.type}
                  </Badge>
                  <Button size="sm">Call</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Safety Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            <span>Safety Settings</span>
          </CardTitle>
          <CardDescription>Customize your safety preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-sm font-medium">Real-time Location Sharing</Label>
              <p className="text-xs text-gray-600 mt-1">Share location with emergency contacts</p>
            </div>
            <Switch 
              checked={locationSharing}
              onCheckedChange={setLocationSharing}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-sm font-medium">Automatic Safety Alerts</Label>
              <p className="text-xs text-gray-600 mt-1">AI-powered unusual activity detection</p>
            </div>
            <Switch 
              checked={autoAlerts}
              onCheckedChange={setAutoAlerts}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-sm font-medium">Check-in Reminders</Label>
              <p className="text-xs text-gray-600 mt-1">Regular safety status updates</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Recent Safety Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-gray-600" />
            <span>Recent Safety Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {safetyAlerts.map((alert, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  alert.type === 'success' ? 'bg-green-500' : 
                  alert.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                }`}></div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">{alert.message}</div>
                  <div className="text-xs text-gray-600 mt-1">
                    {alert.location} • {alert.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SafetyMonitor;
