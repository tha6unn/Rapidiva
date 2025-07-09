
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Star, 
  Phone,
  Shield,
  Car,
  Calendar,
  Search,
  Users
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BookingSystem = () => {
  const { t } = useLanguage();
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingStep, setBookingStep] = useState(1);

  const nearbyDrivers = [
    {
      id: 1,
      name: 'Priya',
      rating: 4.8,
      distance: '0.5 km',
      eta: '3 mins',
      rides: 1247,
      vehicleNumber: 'TN 01 AB 1234'
    },
    {
      id: 2,
      name: 'Lakshmi',
      rating: 4.9,
      distance: '0.8 km',
      eta: '5 mins',
      rides: 892,
      vehicleNumber: 'TN 01 CD 5678'
    },
    {
      id: 3,
      name: 'Meera',
      rating: 4.7,
      distance: '1.2 km',
      eta: '7 mins',
      rides: 654,
      vehicleNumber: 'TN 01 EF 9012'
    }
  ];

  const handleBooking = () => {
    if (bookingStep === 1) {
      setBookingStep(2);
    } else {
      // Handle final booking
      console.log('Booking confirmed');
      setBookingStep(3);
    }
  };

  if (bookingStep === 3) {
    return (
      <div className="space-y-6">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
          <CardHeader className="text-center">
            <CardTitle className="text-green-800 flex items-center justify-center space-x-2">
              <Shield className="w-6 h-6" />
              <span>Booking Confirmed!</span>
            </CardTitle>
            <CardDescription className="text-green-700">
              Your Pink Auto is on the way
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="bg-white/50 p-4 rounded-lg">
              <p className="font-semibold">Driver: Priya</p>
              <p className="text-sm text-gray-600">Vehicle: TN 01 AB 1234</p>
              <p className="text-sm text-gray-600">ETA: 3 minutes</p>
            </div>
            <Button className="w-full bg-pink-600 hover:bg-pink-700">
              <Phone className="w-4 h-4 mr-2" />
              Call Driver
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Booking Header */}
      <Card className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Car className="w-6 h-6" />
            <span>{t('bookRideNow')}</span>
          </CardTitle>
          <CardDescription className="text-pink-100">
            {t('safeReliableTransport')}
          </CardDescription>
        </CardHeader>
      </Card>

      {bookingStep === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Trip Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="pickup">{t('pickupLocation')}</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  id="pickup"
                  placeholder="Enter pickup location"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="drop">{t('dropLocation')}</Label>
              <div className="relative">
                <Navigation className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  id="drop"
                  placeholder="Enter destination"
                  value={dropLocation}
                  onChange={(e) => setDropLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="time"
                    type="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <Button 
              onClick={handleBooking}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
              disabled={!pickupLocation || !dropLocation}
            >
              <Search className="w-4 h-4 mr-2" />
              {t('findNearbyDrivers')}
            </Button>
          </CardContent>
        </Card>
      )}

      {bookingStep === 2 && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Available Drivers Nearby</CardTitle>
              <CardDescription>Select your preferred Pink Auto driver</CardDescription>
            </CardHeader>
          </Card>

          {nearbyDrivers.map((driver) => (
            <Card key={driver.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{driver.name}</h3>
                      <p className="text-sm text-gray-600">{driver.vehicleNumber}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{driver.rating}</span>
                        </div>
                        <Badge variant="secondary">{driver.rides} rides</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">{driver.distance}</p>
                    <p className="text-sm text-gray-600">{driver.eta} away</p>
                    <Button 
                      size="sm" 
                      className="mt-2 bg-pink-600 hover:bg-pink-700"
                      onClick={handleBooking}
                    >
                      Select
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Current Bookings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span>{t('rideHistory')}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <span className="text-sm font-medium">T. Nagar to Anna Nagar</span>
                  <p className="text-xs text-gray-600">Yesterday, 2:30 PM</p>
                </div>
              </div>
              <span className="text-sm font-semibold">₹180</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <span className="text-sm font-medium">Express Avenue to Velachery</span>
                  <p className="text-xs text-gray-600">2 days ago, 5:15 PM</p>
                </div>
              </div>
              <span className="text-sm font-semibold">₹250</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingSystem;
