
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    welcome: "Welcome",
    dashboard: "Dashboard",
    finance: "Finance",
    routes: "Routes",
    safety: "Safety",
    learn: "Learn",
    chat: "AI Chat",
    booking: "Book Ride",
    voice: "Voice",
    emergency: "Emergency",
    pinkAutoDriver: "Pink Auto Driver",
    aiPoweredPlatform: "Pink Auto AI Platform",
    welcomeMessage: "Your AI-powered journey to financial freedom starts here",
    creditScore: "Credit Score",
    todaysEarnings: "Today's Earnings",
    bookRideNow: "Book a Pink Auto Ride",
    safeReliableTransport: "Safe and reliable transportation by women drivers",
    pickupLocation: "Pickup Location",
    dropLocation: "Drop Location",
    selectDateTime: "Select Date & Time",
    bookNow: "Book Now",
    findNearbyDrivers: "Find Nearby Drivers",
    rideHistory: "Ride History",
    currentBookings: "Current Bookings"
  },
  ta: {
    welcome: "வணக்கம்",
    dashboard: "டாஷ்போர்டு",
    finance: "நிதி",
    routes: "வழிகள்",
    safety: "பாதுகாப்பு",
    learn: "கற்றல்",
    chat: "AI சாட்",
    booking: "பயணம் பதிவு",
    voice: "குரல்",
    emergency: "அவசரம்",
    pinkAutoDriver: "பிங்க் ஆட்டோ ஓட்டுநர்",
    aiPoweredPlatform: "பிங்க் ஆட்டோ AI பிளாட்ஃபார்ம்",
    welcomeMessage: "உங்கள் AI-இயங்கும் நிதி சுதந்திரத்திற்கான பயணம் இங்கே தொடங்குகிறது",
    creditScore: "கடன் மதிப்பீடு",
    todaysEarnings: "இன்றைய வருமானம்",
    bookRideNow: "பिं்க் ஆட்டோ பயணம் பதிவு செய்யுங்கள்",
    safeReliableTransport: "பெண் ஓட்டுநர்களால் பாதுகாப்பான மற்றும் நம்பகமான போக்குவரத்து",
    pickupLocation: "ஏறும் இடம்",
    dropLocation: "இறங்கும் இடம்",
    selectDateTime: "தேதி மற்றும் நேரத்தை தேர்ந்தெடுக்கவும்",
    bookNow: "இப்போது பதிவு செய்யுங்கள்",
    findNearbyDrivers: "அருகிலுள்ள ஓட்டுநர்களை கண்டறியுங்கள்",
    rideHistory: "பயண வரலாறு",
    currentBookings: "தற்போதைய பதிவுகள்"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
