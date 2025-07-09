
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Send, 
  Mic, 
  Volume2, 
  Bot,
  User,
  Star,
  HelpCircle,
  Languages,
  Zap
} from 'lucide-react';

const AIChatbot = () => {
  const [message, setMessage] = useState('');
  const [isListening, setIsListening] = useState(false);

  const chatHistory = [
    {
      type: 'bot',
      message: 'வணக்கம் பவானி! எனக்கு கிவா பெயர். உங்களுக்கு எவ்வாறு உதவ முடியும்?',
      time: '10:30 AM',
      translation: 'Hello Pavani! My name is Kiva. How can I help you today?'
    },
    {
      type: 'user',
      message: 'I want to know about loan options',
      time: '10:31 AM'
    },
    {
      type: 'bot',
      message: 'Based on your credit score of 720 and driving history, you qualify for several loan options. Would you like me to explain them in Tamil or English?',
      time: '10:31 AM'
    },
    {
      type: 'user',
      message: 'Tamil please',
      time: '10:32 AM'
    },
    {
      type: 'bot',
      message: 'உங்கள் 720 கிரெடிட் ஸ்கோர் மற்றும் ஓட்டுநர் வரலாற்றின் அடிப்படையில், நீங்கள் பல கடன் விருப்பங்களுக்கு தகுதியுடையவர். 1) வணிக விரிவாக்க கடன் - ₹2,00,000 வரை 2) வாகன பராமரிப்பு கடன் - ₹50,000 வரை 3) அவசர நிதி - ₹25,000 வரை உடனடி அனுமதி',
      time: '10:32 AM'
    }
  ];

  const quickQuestions = [
    "How to improve my credit score?",
    "Best routes for today?",
    "Government schemes for women?",
    "Safety tips for night driving",
    "How to save money?",
    "Apply for loan"
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add message sending logic here
      setMessage('');
    }
  };

  const toggleVoiceInput = () => {
    setIsListening(!isListening);
    // Add voice recognition logic here
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">AI Financial Assistant</h2>
        <p className="text-gray-600">கிவா - உங்கள் நிதி உதவியாளர்</p>
      </div>

      {/* AI Assistant Info */}
      <Card className="bg-gradient-to-br from-purple-50 to-indigo-100">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bot className="w-5 h-5 text-purple-600" />
            <span>Meet Kiva - Your AI Assistant</span>
          </CardTitle>
          <CardDescription>Personalized financial guidance in Tamil and English</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-purple-100 text-purple-800">
              <Languages className="w-3 h-3 mr-1" />
              Tamil Support
            </Badge>
            <Badge className="bg-blue-100 text-blue-800">
              <Mic className="w-3 h-3 mr-1" />
              Voice Enabled
            </Badge>
            <Badge className="bg-green-100 text-green-800">
              <Zap className="w-3 h-3 mr-1" />
              24/7 Available
            </Badge>
            <Badge className="bg-yellow-100 text-yellow-800">
              <Star className="w-3 h-3 mr-1" />
              Personalized
            </Badge>
          </div>
          <p className="text-sm text-gray-700">
            Kiva understands your unique needs as a Pink Auto driver and provides tailored 
            financial advice, route suggestions, and safety guidance.
          </p>
        </CardContent>
      </Card>

      {/* Chat Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-blue-600" />
                <span>Chat with Kiva</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {chatHistory.map((chat, index) => (
                  <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      chat.type === 'user' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <div className="flex items-start space-x-2">
                        {chat.type === 'bot' && (
                          <Bot className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm">{chat.message}</p>
                          {chat.translation && (
                            <p className="text-xs opacity-75 mt-1 italic">
                              {chat.translation}
                            </p>
                          )}
                          <p className={`text-xs mt-1 ${
                            chat.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {chat.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex space-x-2">
                <div className="flex-1 flex space-x-2">
                  <Input
                    placeholder="Type your message or speak in Tamil..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button
                    onClick={toggleVoiceInput}
                    variant={isListening ? "default" : "outline"}
                    size="icon"
                    className={isListening ? "bg-red-500 hover:bg-red-600" : ""}
                  >
                    <Mic className="w-4 h-4" />
                  </Button>
                </div>
                <Button onClick={handleSendMessage}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              {isListening && (
                <div className="mt-2 p-2 bg-red-50 text-red-700 text-sm rounded">
                  🎤 Listening... Speak in Tamil or English
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions & Suggestions */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <HelpCircle className="w-5 h-5 text-green-600" />
                <span>Quick Questions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-full text-left justify-start text-sm h-auto py-3 px-3"
                    onClick={() => setMessage(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Volume2 className="w-5 h-5 text-purple-600" />
                <span>Voice Features</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" variant="outline">
                <Volume2 className="w-4 h-4 mr-2" />
                Read Last Response
              </Button>
              <Button className="w-full" variant="outline">
                <Languages className="w-4 h-4 mr-2" />
                Switch to Tamil
              </Button>
              <Button className="w-full" variant="outline">
                <Mic className="w-4 h-4 mr-2" />
                Voice Tutorial
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="text-sm font-semibold text-blue-800">Today's Tip</div>
                  <p className="text-xs text-blue-700 mt-1">
                    Based on traffic patterns, consider starting 30 minutes earlier for 15% higher earnings.
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="text-sm font-semibold text-green-800">Credit Update</div>
                  <p className="text-xs text-green-700 mt-1">
                    Your consistent payments have improved your score by 15 points this month!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;
