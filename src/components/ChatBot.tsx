import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(() => {
    const saved = localStorage.getItem('chat_open');
    return saved ? JSON.parse(saved) : false;
  });
  const [messages, setMessages] = useState<{ role: 'bot' | 'user'; text: string }[]>(() => {
    const saved = localStorage.getItem('chat_messages');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('chat_open', JSON.stringify(isOpen));
  }, [isOpen]);

  useEffect(() => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  }, [messages]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { language } = useLanguage();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const INSTANT_RESPONSES: Record<string, Record<string, string>> = {
    en: {
      pan: "To apply for a **PAN Card**, you need:\n• Aadhaar Card\n• 2 Passport size photos\n• Mobile number linked with Aadhaar\n\nProcess: Fill Form 49A at our center. PAN card delivered by post in 15 days.",
      aadhaar: "For **Aadhaar Update** (Name, DOB, Address, or Photo), please bring:\n• Original Aadhaar Card\n• Mobile number (for OTP)\n• Address proof (Voter ID/Ration Card)\n\nProcess: Biometric or OTP verification at our center.",
      income: "For **Income Certificate**, you need:\n• Jan Aadhaar & Aadhaar Card\n• Ration Card\n• Income proof (Salary slip or Patwari report)\n• Self-declaration form",
      caste: "For **Caste Certificate**, required documents are:\n• Jan Aadhaar & Aadhaar Card\n• Old caste certificate of family member\n• Ration Card\n• Father's caste proof",
      scholarship: "For **Scholarship Forms**, please bring:\n• Jan Aadhaar & Aadhaar Card\n• New Income certificate\n• Last year mark sheet\n• Bank passbook\n• Fee receipt",
      driving: "For **Driving Licence**, required documents:\n• Aadhaar Card\n• Blood group report\n• 2 Photos\n• Mobile number\n\nProcess: Apply for Learner's first, then Permanent after 1 month.",
      birth: "For **Birth Certificate**, you need:\n• Hospital receipt\n• Parents Aadhaar Card\n• Mobile number",
      death: "For **Death Certificate**, you need:\n• Cremation receipt or Hospital proof\n• Deceased person's Aadhaar\n• Applicant's Aadhaar",
      domicile: "For **Domicile Certificate (Mool Niwas)**:\n• Aadhaar & Jan Aadhaar\n• Ration Card\n• 10-year-old proof (Voter list/Marksheet)",
      location: "Our Address: **New Nagari, Mustafa Nagar, Pur-Bhilwara, Rajasthan**.\nTiming: 9:00 AM - 8:00 PM (Mon-Sat).",
      kusum: "☀️ **Kusum Yojana (Solar Pump Subsidy):**\n\n**Documents Required:**\n• Land Records (Jamabandi)\n• Aadhaar Card\n• Bank Account Details\n• Mobile Number\n\n**Process:** Apply online at our center to get subsidy on solar pumps for irrigation.",
      nfsa: "🌾 **Food Security (NFSA):**\n\n**Documents Required:**\n• Jan Aadhaar Card\n• Aadhaar Card\n• Ration Card\n• Income Proof\n\n**Process:** Check eligibility and apply for low-cost ration under the NFSA scheme at our center.",
      surya: "🏠 **PM Surya Ghar Yojana (Solar Rooftop):**\n\n**Documents Required:**\n• Latest Electricity Bill\n• Aadhaar Card\n• Bank Passbook\n• Photo of Rooftop\n\n**Benefit:** Get free electricity and subsidy for solar panel installation.",
      pashu: "🐄 **Pashu Bima Yojana (Animal Insurance):**\n\n**Documents Required:**\n• Animal Health Certificate\n• Owner's Aadhaar Card\n• Bank Passbook\n• Tag Number of Animal\n\n**Benefit:** Insurance coverage for livestock against diseases or accidents.",
      jobs: "To check **Latest Government Jobs**, visit our new **Jobs** section on the website. We provide information for:\n• UPSC, SSC, RPSC, RSSB\n• Railway, Police, REET\n• National Career Service\n\nProcess: We help in online form filling and document scanning at our center."
    },
    hi: {
      pan: "पैन कार्ड (PAN Card) के लिए आवश्यक दस्तावेज:\n• आधार कार्ड\n• 2 पासपोर्ट साइज फोटो\n• मोबाइल नंबर\n\nप्रक्रिया: हमारे केंद्र पर फॉर्म 49A भरें, 15 दिनों में पैन कार्ड डाक से आएगा।",
      aadhaar: "आधार अपडेट (Aadhaar Update) के लिए आवश्यक दस्तावेज:\n• पुराना आधार कार्ड\n• मोबाइल नंबर (OTP के लिए)\n• पते का प्रमाण (वोटर आईडी/राशन कार्ड)\n\nप्रक्रिया: बायोमेट्रिक या ओटीपी के माध्यम से अपडेट किया जाएगा।",
      income: "आय प्रमाण पत्र (Income Certificate) के लिए आवश्यक दस्तावेज:\n• आधार कार्ड और जन आधार\n• राशन कार्ड\n• आय का विवरण (सैलरी स्लिप/पटवारी रिपोर्ट)\n• स्व-घोषणा पत्र (Self-declaration)",
      caste: "जाति प्रमाण पत्र (Caste Certificate) के लिए आवश्यक दस्तावेज:\n• आधार कार्ड और जन आधार\n• पुराने प्रमाण पत्र (यदि हो)\n• राशन कार्ड\n• पिता का जाति प्रमाण पत्र",
      scholarship: "छात्रवृत्ति (Scholarship) के लिए आवश्यक दस्तावेज:\n• जन आधार और आधार कार्ड\n• आय प्रमाण पत्र (नया)\n• अंतिम वर्ष की मार्कशीट\n• फीस की रसीद\n• बैंक पासबुक",
      driving: "ड्राइविंग लाइसेंस (Driving Licence) के लिए आवश्यक दस्तावेज:\n• आधार कार्ड\n• ब्लड ग्रुप रिपोर्ट\n• 2 फोटो\n• मोबाइल नंबर\n\nप्रक्रिया: पहले लर्नर लाइसेंस बनेगा, फिर 1 महीने बाद परमानेंट।",
      birth: "जन्म प्रमाण पत्र (Birth Certificate) के लिए आवश्यक दस्तावेज:\n• अस्पताल की रसीद\n• माता-पिता का आधार कार्ड\n• मोबाइल नंबर",
      death: "मृत्यु प्रमाण पत्र (Death Certificate) के लिए आवश्यक दस्तावेज:\n• श्मशान की रसीद या अस्पताल का प्रमाण\n• मृतक का आधार कार्ड\n• आवेदक का आधार कार्ड",
      domicile: "मूल निवास (Domicile) के लिए आवश्यक दस्तावेज:\n• आधार कार्ड और जन आधार\n• राशन कार्ड\n• 10 साल पुराना कोई भी प्रमाण (वोटर लिस्ट/मार्कशीट)",
      location: "हमारा पता: न्यू नगरी, मुस्तफा नगर, पुर-भीलवाड़ा, राजस्थान।\nसमय: सुबह 9:00 से रात 8:00 बजे तक।",
      kusum: "☀️ **कुसुम योजना (सोलर पंप सब्सिडी):**\n\n**आवश्यक दस्तावेज:**\n• भूमि रिकॉर्ड (जमाबंदी)\n• आधार कार्ड\n• बैंक खाता विवरण\n• मोबाइल नंबर\n\n**प्रक्रिया:** सिंचाई के लिए सोलर पंप पर सब्सिडी पाने के लिए हमारे केंद्र पर ऑनलाइन आवेदन करें।",
      nfsa: "🌾 **खाद्य सुरक्षा (NFSA):**\n\n**आवश्यक दस्तावेज:**\n• जन आधार कार्ड\n• आधार कार्ड\n• राशन कार्ड\n• आय प्रमाण\n\n**प्रक्रिया:** हमारे केंद्र पर NFSA योजना के तहत पात्रता की जांच करें और कम लागत वाले राशन के लिए आवेदन करें।",
      surya: "🏠 **पीएम सूर्य घर योजना (सोलर रूफटॉप):**\n\n**आवश्यक दस्तावेज:**\n• नवीनतम बिजली बिल\n• आधार कार्ड\n• बैंक पासबुक\n• छत की फोटो\n\n**लाभ:** सोलर पैनल स्थापना के लिए मुफ्त बिजली और सब्सिडी प्राप्त करें।",
      pashu: "🐄 **पशु बीमा योजना:**\n\n**आवश्यक दस्तावेज:**\n• पशु स्वास्थ्य प्रमाण पत्र\n• मालिक का आधार कार्ड\n• बैंक पासबुक\n• पशु का टैग नंबर\n\n**लाभ:** बीमारियों या दुर्घटनाओं के खिलाफ पशुधन के लिए बीमा कवरेज।",
      jobs: "नवीनतम **सरकारी नौकरियों** की जानकारी के लिए हमारी वेबसाइट के नए **Jobs** सेक्शन पर जाएं। हम निम्नलिखित के लिए जानकारी प्रदान करते हैं:\n• UPSC, SSC, RPSC, RSSB\n• रेलवे, पुलिस, REET\n• नेशनल करियर सर्विस\n\nप्रक्रिया: हम हमारे केंद्र पर ऑनलाइन फॉर्म भरने और दस्तावेज स्कैन करने में मदद करते हैं।"
    }
  };

  const SYSTEM_INSTRUCTION = `You are a helpful assistant for an e-Mitra center in Pur (Bhilwara District), Rajasthan.
Center Name: e-Mitra Pur - Bhilwara
Location: New Nagari, Mustafa Nagar, Pur-Bhilwara, Rajasthan.
Expertise: Aadhaar update Pur Bhilwara, PAN card service Pur Bhilwara, online form filling Pur Bhilwara, and all government services in Pur.

Services you handle:
- Aadhaar (Update, Address change, Mobile link)
- PAN Card (New, Correction)
- Certificates (Caste, Income, Domicile, Birth, Death)
- Scholarship (Post Metric, SJE)
- Exam Forms (REET, CET, SSC, Railway)
- Driving Licence (Learner, Permanent)
- Government Schemes (PM Kisan, Jan Aadhaar, Kusum Yojana, Surya Ghar, NFSA, Pashu Bima)
- Latest Government Jobs (UPSC, SSC, RPSC, RSSB, NCS)

Guidelines:
- Keep responses concise and professional.
- Use bullet points for document lists.
- Mention that users can visit the center or send documents on WhatsApp (+91 63504 89219).
- Answer in the language the user asks (Hindi, English, or Hinglish).
- If multiple services are asked, provide info for each.
- Always be polite and helpful.`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = language === 'hi' 
        ? "नमस्ते! मैं मुर्तज़ा दरवेश का डिजिटल असिस्टेंट हूँ। मैं आपकी ई-मित्र सेवाओं में कैसे मदद कर सकता हूँ?"
        : "Hello! I am Murtaza Darvesh's Digital Assistant. How can I help you with e-Mitra services today?";
      setMessages([{ role: 'bot', text: greeting }]);
    }
  }, [isOpen, language]);

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.toLowerCase();
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput('');
    setIsTyping(true);

    // Check for instant responses
    const lang = language === 'hi' ? 'hi' : 'en';
    const matches: string[] = [];
    
    if (userMessage.includes('pan')) matches.push('pan');
    if (userMessage.includes('aadhaar') || userMessage.includes('आधार')) matches.push('aadhaar');
    if (userMessage.includes('income') || userMessage.includes('आय')) matches.push('income');
    if (userMessage.includes('caste') || userMessage.includes('जाति') || userMessage.includes('jaati')) matches.push('caste');
    if (userMessage.includes('scholarship') || userMessage.includes('छात्रवृत्ति')) matches.push('scholarship');
    if (userMessage.includes('driving') || userMessage.includes('licence') || userMessage.includes('license')) matches.push('driving');
    if (userMessage.includes('birth') || userMessage.includes('जन्म')) matches.push('birth');
    if (userMessage.includes('death') || userMessage.includes('मृत्यु')) matches.push('death');
    if (userMessage.includes('domicile') || userMessage.includes('mool niwas') || userMessage.includes('मूल निवास')) matches.push('domicile');
    if (userMessage.includes('exam') || userMessage.includes('परीक्षा')) matches.push('exams');
    if (userMessage.includes('address') || userMessage.includes('location') || userMessage.includes('पता') || userMessage.includes('kahan')) matches.push('location');
    if (userMessage.includes('kusum') || userMessage.includes('कुसुम')) matches.push('kusum');
    if (userMessage.includes('nfsa') || userMessage.includes('food security') || userMessage.includes('खाद्य सुरक्षा') || userMessage.includes('khadya suraksha')) matches.push('nfsa');
    if (userMessage.includes('surya') || userMessage.includes('solar') || userMessage.includes('सूर्य') || userMessage.includes('सौर')) matches.push('surya');
    if (userMessage.includes('pashu') || userMessage.includes('animal') || userMessage.includes('पशु') || userMessage.includes('bima')) matches.push('pashu');
    if (userMessage.includes('job') || userMessage.includes('नौकरी') || userMessage.includes('naukri') || userMessage.includes('bharti') || userMessage.includes('recruitment')) matches.push('jobs');

    if (matches.length > 0) {
      const combinedResponse = matches
        .map(m => INSTANT_RESPONSES[lang][m])
        .join('\n\n---\n\n');
        
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'bot', text: combinedResponse }]);
        setIsTyping(false);
      }, 500);
      return;
    }

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("API Key missing");
      }
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-flash-latest",
        contents: [{ role: "user", parts: [{ text: input }] }],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION
        }
      });

      const botResponse = response.text || (language === 'hi' ? "क्षमा करें, मैं अभी आपकी सहायता नहीं कर पा रहा हूँ।" : "I'm sorry, I couldn't process that.");
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      console.error("ChatBot Error:", error);
      const errorMsg = language === 'hi' ? "नेटवर्क समस्या।" : "Network issue.";
      setMessages(prev => [...prev, { role: 'bot', text: errorMsg }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] max-h-[calc(100vh-120px)] h-[600px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-indigo-600 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Murtaza Darvesh Assistant</h3>
                  <p className="text-[10px] text-indigo-100">Online | e-Mitra Expert</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-tr-none' 
                      : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                  }`}>
                    {msg.role === 'bot' ? (
                      <div className="markdown-content">
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      </div>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 rounded-tl-none flex gap-1">
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={language === 'hi' ? "अपना सवाल पूछें..." : "Ask a question..."}
                className="flex-grow bg-slate-50 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-indigo-600 text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default ChatBot;
