import { 
  UserCheck, CreditCard, UserPlus, FileText, 
  Baby, Skull, Wallet, MapPin, ShieldCheck, 
  GraduationCap, School, FileCheck, FileOutput, 
  Car, Truck, Repeat, FileSearch, Activity,
  Users, Flame, Zap, Droplets, Landmark, 
  Home, Building, FileSignature, Layout, 
  Heart, UserMinus, Accessibility, Briefcase, 
  UserCircle, HardHat, Banknote, Coins, 
  TrendingUp, Stethoscope, Sprout, CookingPot,
  ClipboardList, Search, MessageCircle, Download,
  Globe, Shield, Scale, Landmark as Court,
  FileBadge, UserCheck as Police, Map,
  BookOpen, Award, Landmark as Bank,
  Smartphone, Mail, Phone, MapPin as Address,
  ShoppingBag, User, UserSearch, Info, MessageSquare,
  FileEdit, HeartPulse, ListOrdered, Fingerprint,
  IndianRupee, ArrowLeftRight, Clock, Rocket, Ship,
  Copyright, Lightbulb, Store, PiggyBank, Factory,
  Wind, Pill, Utensils, MoveRight, BadgeCheck,
  LogOut, Copy, Edit, Library, Bus, Settings,
  Laptop, Bike, RefreshCw, Volume2, Crosshair,
  RotateCw, HeartHandshake, UserX, Edit3, Shirt,
  Book, DollarSign, CheckCircle, Hotel, Plane,
  Mountain, Music, Video, Camera, ArrowUpCircle, Star
} from 'lucide-react';
import { Service } from './services';

export interface FormGuide {
  purpose: { en: string; hi: string };
  eligibility: { en: string | string[]; hi: string | string[] };
  documents: { en: string[]; hi: string[] };
  process: { en: string | string[]; hi: string | string[] };
  tips: { en: string | string[]; hi: string | string[] };
}

export interface ExtendedService extends Service {
  guide?: FormGuide;
}

export const formsData: ExtendedService[] = [
  // IDENTITY FORMS
  {
    id: 'aadhaar-new',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'Aadhaar Card',
    serviceNameHi: 'आधार कार्ड',
    formName: 'Aadhaar Enrollment Form',
    formNameHi: 'आधार नामांकन फॉर्म',
    description: 'Apply for a new Aadhaar card for adults or children.',
    descriptionHi: 'वयस्कों या बच्चों के लिए नए आधार कार्ड के लिए आवेदन करें।',
    icon: UserCheck,
    guidelines: ['Identity proof required', 'Address proof required', 'Date of birth proof'],
    guidelinesHi: ['पहचान का प्रमाण आवश्यक', 'पते का प्रमाण आवश्यक', 'जन्म तिथि का प्रमाण'],
    searchQuery: 'Aadhaar enrollment form pdf',
    guide: {
      purpose: {
        en: 'To register for a unique 12-digit identification number (Aadhaar).',
        hi: 'एक अद्वितीय 12-अंकीय पहचान संख्या (आधार) के लिए पंजीकरण करना।'
      },
      eligibility: {
        en: 'Any resident of India, NRIs with valid Indian passport, Children (Baal Aadhaar).',
        hi: 'भारत का कोई भी निवासी, वैध भारतीय पासपोर्ट वाले एनआरआई, बच्चे (बाल आधार)।'
      },
      documents: {
        en: ['Proof of Identity (Voter ID, Passport, PAN)', 'Proof of Address (Ration Card, Electricity Bill)', 'Proof of Date of Birth'],
        hi: ['पहचान का प्रमाण (वोटर आईडी, पासपोर्ट, पैन)', 'पते का प्रमाण (राशन कार्ड, बिजली बिल)', 'जन्म तिथि का प्रमाण']
      },
      process: {
        en: '1. Download form. 2. Visit nearest Aadhaar Kendra. 3. Submit biometric data. 4. Get acknowledgment slip.',
        hi: '1. फॉर्म डाउनलोड करें। 2. निकटतम आधार केंद्र पर जाएं। 3. बायोमेट्रिक डेटा जमा करें। 4. पावती पर्ची प्राप्त करें।'
      },
      tips: {
        en: 'Ensure mobile number is linked, Check spellings twice, Keep original docs handy.',
        hi: 'सुनिश्चित करें कि मोबाइल नंबर लिंक है, वर्तनी की दो बार जांच करें, मूल दस्तावेज पास रखें।'
      }
    }
  },
  {
    id: 'voter-id-new',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'Voter ID',
    serviceNameHi: 'वोटर आईडी',
    formName: 'Voter ID Form 6',
    formNameHi: 'वोटर आईडी फॉर्म 6',
    description: 'Application for inclusion of name in electoral roll for first time.',
    descriptionHi: 'पहली बार मतदाता सूची में नाम शामिल करने के लिए आवेदन।',
    icon: UserPlus,
    guidelines: ['Age 18+', 'Indian citizenship', 'Resident of the constituency'],
    guidelinesHi: ['आयु 18+', 'भारतीय नागरिकता', 'निर्वाचन क्षेत्र का निवासी'],
    searchQuery: 'Voter ID form 6 pdf'
  },
  {
    id: 'voter-id-correction',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'Voter ID',
    serviceNameHi: 'वोटर आईडी',
    formName: 'Voter ID Form 8',
    formNameHi: 'वोटर आईडी फॉर्म 8',
    description: 'Correction of entries in existing electoral roll.',
    descriptionHi: 'मौजूदा मतदाता सूची में प्रविष्टियों का सुधार।',
    icon: FileSignature,
    guidelines: ['Existing Voter ID number', 'Proof of correct details', 'Address proof'],
    guidelinesHi: ['मौजूदा वोटर आईडी नंबर', 'सही विवरण का प्रमाण', 'पते का प्रमाण'],
    searchQuery: 'Voter ID form 8 pdf'
  },
  {
    id: 'pan-new-49a',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'PAN Card',
    serviceNameHi: 'पैन कार्ड',
    formName: 'PAN Form 49A',
    formNameHi: 'पैन फॉर्म 49A',
    description: 'Application for allotment of Permanent Account Number for Indian citizens.',
    descriptionHi: 'भारतीय नागरिकों के लिए स्थायी खाता संख्या के आवंटन के लिए आवेदन।',
    icon: CreditCard,
    guidelines: ['Two passport photos', 'Identity proof', 'Address proof'],
    guidelinesHi: ['दो पासपोर्ट फोटो', 'पहचान प्रमाण', 'पते का प्रमाण'],
    searchQuery: 'PAN card application form 49A pdf'
  },
  {
    id: 'pan-correction',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'PAN Card',
    serviceNameHi: 'पैन कार्ड',
    formName: 'PAN Correction Form',
    formNameHi: 'पैन सुधार फॉर्म',
    description: 'Request for new PAN card or changes in PAN data.',
    descriptionHi: 'नए पैन कार्ड या पैन डेटा में बदलाव के लिए अनुरोध।',
    icon: Repeat,
    guidelines: ['Existing PAN copy', 'Proof of change', 'Identity proof'],
    guidelinesHi: ['मौजूदा पैन की प्रति', 'बदलाव का प्रमाण', 'पहचान प्रमाण'],
    searchQuery: 'PAN card correction form pdf'
  },
  {
    id: 'passport-fresh',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'Passport',
    serviceNameHi: 'पासपोर्ट',
    formName: 'Passport Main Form',
    formNameHi: 'पासपोर्ट मुख्य फॉर्म',
    description: 'Application for fresh or reissue of Indian Passport.',
    descriptionHi: 'भारतीय पासपोर्ट के नए या पुनर्जारी के लिए आवेदन।',
    icon: Globe,
    guidelines: ['Birth certificate', 'Address proof', 'Educational proof'],
    guidelinesHi: ['जन्म प्रमाण पत्र', 'पते का प्रमाण', 'शैक्षिक प्रमाण'],
    searchQuery: 'Passport application form 1 pdf'
  },

  // CERTIFICATE FORMS
  {
    id: 'birth-cert-rajasthan',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Birth Certificate',
    serviceNameHi: 'जन्म प्रमाण पत्र',
    formName: 'Rajasthan Birth Registration Form',
    formNameHi: 'राजस्थान जन्म पंजीकरण फॉर्म',
    description: 'Register birth in Rajasthan (Pehchan Portal).',
    descriptionHi: 'राजस्थान में जन्म पंजीकरण (पहचान पोर्टल)।',
    icon: Baby,
    guidelines: ['Hospital slip', 'Parents ID', 'Informant details'],
    guidelinesHi: ['अस्पताल की पर्ची', 'माता-पिता की आईडी', 'मुखबिर का विवरण'],
    searchQuery: 'Rajasthan birth certificate form pdf'
  },
  {
    id: 'death-cert-rajasthan',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Death Certificate',
    serviceNameHi: 'मृत्यु प्रमाण पत्र',
    formName: 'Rajasthan Death Registration Form',
    formNameHi: 'राजस्थान मृत्यु पंजीकरण फॉर्म',
    description: 'Register death in Rajasthan (Pehchan Portal).',
    descriptionHi: 'राजस्थान में मृत्यु पंजीकरण (पहचान पोर्टल)।',
    icon: Skull,
    guidelines: ['Medical report', 'Deceased ID', 'Cremation proof'],
    guidelinesHi: ['मेडिकल रिपोर्ट', 'मृतक की आईडी', 'शमशान का प्रमाण'],
    searchQuery: 'Rajasthan death certificate form pdf'
  },
  {
    id: 'marriage-cert-rajasthan',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Marriage Certificate',
    serviceNameHi: 'विवाह प्रमाण पत्र',
    formName: 'Rajasthan Marriage Form',
    formNameHi: 'राजस्थान विवाह फॉर्म',
    description: 'Register marriage under Rajasthan Marriage Act.',
    descriptionHi: 'राजस्थान विवाह अधिनियम के तहत विवाह पंजीकृत करें।',
    icon: ClipboardList,
    guidelines: ['Wedding card', 'Age proof', 'Witnesses'],
    guidelinesHi: ['शादी का कार्ड', 'आयु प्रमाण', 'गवाह'],
    searchQuery: 'Rajasthan marriage registration form pdf'
  },
  {
    id: 'income-cert-1page',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Income Certificate',
    serviceNameHi: 'आय प्रमाण पत्र',
    formName: 'Income Certificate (1 Page)',
    formNameHi: 'आय प्रमाण पत्र (1 पेज)',
    description: 'Simplified 1-page income certificate for general use.',
    descriptionHi: 'सामान्य उपयोग के लिए सरलीकृत 1-पेज आय प्रमाण पत्र।',
    icon: Wallet,
    guidelines: ['Aadhaar card', 'Self declaration', 'Witness signature'],
    guidelinesHi: ['आधार कार्ड', 'स्व-घोषणा', 'गवाह के हस्ताक्षर'],
    searchQuery: 'Income certificate 1 page form Rajasthan pdf'
  },
  {
    id: 'income-cert-4page',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Income Certificate',
    serviceNameHi: 'आय प्रमाण पत्र',
    formName: 'Income Certificate (4 Page)',
    formNameHi: 'आय प्रमाण पत्र (4 पेज)',
    description: 'Detailed 4-page income certificate for scholarships.',
    descriptionHi: 'छात्रवृत्ति के लिए विस्तृत 4-पेज आय प्रमाण पत्र।',
    icon: Wallet,
    guidelines: ['Patwari report', 'Tehsildar verification', 'Income proof'],
    guidelinesHi: ['पटवारी रिपोर्ट', 'तहसीलदार सत्यापन', 'आय प्रमाण'],
    searchQuery: 'Income certificate 4 page form Rajasthan pdf'
  },
  {
    id: 'caste-sc-st',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Caste Certificate',
    serviceNameHi: 'जाति प्रमाण पत्र',
    formName: 'SC/ST Caste Certificate Form',
    formNameHi: 'SC/ST जाति प्रमाण पत्र फॉर्म',
    description: 'Application for SC/ST caste certificate in Rajasthan.',
    descriptionHi: 'राजस्थान में SC/ST जाति प्रमाण पत्र के लिए आवेदन।',
    icon: ShieldCheck,
    guidelines: ['Father caste proof', 'Aadhaar card', 'Residence proof'],
    guidelinesHi: ['पिता का जाति प्रमाण', 'आधार कार्ड', 'निवास प्रमाण'],
    searchQuery: 'SC ST caste certificate form Rajasthan pdf'
  },
  {
    id: 'caste-obc-state',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Caste Certificate',
    serviceNameHi: 'जाति प्रमाण पत्र',
    formName: 'OBC State Caste Certificate Form',
    formNameHi: 'OBC राज्य जाति प्रमाण पत्र फॉर्म',
    description: 'OBC certificate for Rajasthan state government jobs.',
    descriptionHi: 'राजस्थान राज्य सरकार की नौकरियों के लिए ओबीसी प्रमाणपत्र।',
    icon: ShieldCheck,
    guidelines: ['Income proof', 'Caste proof', 'Aadhaar card'],
    guidelinesHi: ['आय प्रमाण', 'जाति प्रमाण', 'आधार कार्ड'],
    searchQuery: 'OBC state caste certificate form Rajasthan pdf'
  },
  {
    id: 'caste-obc-central',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Caste Certificate',
    serviceNameHi: 'जाति प्रमाण पत्र',
    formName: 'OBC Central Caste Certificate Form',
    formNameHi: 'OBC केंद्रीय जाति प्रमाण पत्र फॉर्म',
    description: 'OBC certificate for Central government jobs (NC-OBC).',
    descriptionHi: 'केंद्र सरकार की नौकरियों (NC-OBC) के लिए ओबीसी प्रमाणपत्र।',
    icon: ShieldCheck,
    guidelines: ['Central format', 'Income proof', 'Caste proof'],
    guidelinesHi: ['केंद्रीय प्रारूप', 'आय प्रमाण', 'जाति प्रमाण'],
    searchQuery: 'OBC central caste certificate form pdf'
  },
  {
    id: 'ews-cert',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'EWS Certificate',
    serviceNameHi: 'ईडब्ल्यूएस प्रमाण पत्र',
    formName: 'EWS Certificate Application Form',
    formNameHi: 'ईडब्ल्यूएस प्रमाण पत्र आवेदन फॉर्म',
    description: 'Certificate for Economically Weaker Sections (General).',
    descriptionHi: 'आर्थिक रूप से कमजोर वर्गों (सामान्य) के लिए प्रमाण पत्र।',
    icon: Wallet,
    guidelines: ['Income < 8 Lakh', 'Land records', 'Aadhaar card'],
    guidelinesHi: ['आय < 8 लाख', 'भूमि रिकॉर्ड', 'आधार कार्ड'],
    searchQuery: 'EWS certificate application form Rajasthan pdf'
  },
  {
    id: 'domicile-rajasthan',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Domicile Certificate',
    serviceNameHi: 'मूल निवास प्रमाण पत्र',
    formName: 'Rajasthan Mool Niwas Form',
    formNameHi: 'राजस्थान मूल निवास फॉर्म',
    description: 'Application for Bonafide Resident of Rajasthan.',
    descriptionHi: 'राजस्थान के मूल निवासी के लिए आवेदन।',
    icon: MapPin,
    guidelines: ['10 years residence', 'Aadhaar card', 'Voter ID'],
    guidelinesHi: ['10 साल का निवास', 'आधार कार्ड', 'वोटर आईडी'],
    searchQuery: 'Rajasthan domicile certificate form pdf'
  },

  // TRANSPORT FORMS
  {
    id: 'dl-learner',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Driving Licence',
    serviceNameHi: 'ड्राइविंग लाइसेंस',
    formName: 'Learner Licence Form 2',
    formNameHi: 'लर्नर लाइसेंस फॉर्म 2',
    description: 'Application for grant of Learner Licence.',
    descriptionHi: 'लर्नर लाइसेंस प्रदान करने के लिए आवेदन।',
    icon: Car,
    guidelines: ['Age 18+', 'Medical form 1', 'Address proof'],
    guidelinesHi: ['आयु 18+', 'मेडिकल फॉर्म 1', 'पते का प्रमाण'],
    searchQuery: 'Learner licence form 2 pdf'
  },
  {
    id: 'dl-permanent',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Driving Licence',
    serviceNameHi: 'ड्राइविंग लाइसेंस',
    formName: 'Permanent DL Form 4',
    formNameHi: 'स्थायी डीएल फॉर्म 4',
    description: 'Application for Permanent Driving Licence.',
    descriptionHi: 'स्थायी ड्राइविंग लाइसेंस के लिए आवेदन।',
    icon: Car,
    guidelines: ['Learner licence', 'Driving test', 'Fees receipt'],
    guidelinesHi: ['लर्नर लाइसेंस', 'ड्राइविंग टेस्ट', 'फीस रसीद'],
    searchQuery: 'Permanent driving licence form 4 pdf'
  },
  {
    id: 'rc-transfer-29',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Vehicle Transfer',
    serviceNameHi: 'वाहन हस्तांतरण',
    formName: 'RTO Form 29',
    formNameHi: 'आरटीओ फॉर्म 29',
    description: 'Notice of transfer of ownership of a motor vehicle.',
    descriptionHi: 'मोटर वाहन के स्वामित्व के हस्तांतरण की सूचना।',
    icon: Repeat,
    guidelines: ['Seller signature', 'Buyer details', 'Duplicate copy'],
    guidelinesHi: ['विक्रेता के हस्ताक्षर', 'खरीदार का विवरण', 'डुप्लिकेट प्रति'],
    searchQuery: 'RTO form 29 pdf'
  },
  {
    id: 'rc-transfer-30',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Vehicle Transfer',
    serviceNameHi: 'वाहन हस्तांतरण',
    formName: 'RTO Form 30',
    formNameHi: 'आरटीओ फॉर्म 30',
    description: 'Report of transfer of ownership of a motor vehicle.',
    descriptionHi: 'मोटर वाहन के स्वामित्व के हस्तांतरण की रिपोर्ट।',
    icon: Repeat,
    guidelines: ['Seller & Buyer sign', 'Insurance copy', 'RC original'],
    guidelinesHi: ['विक्रेता और खरीदार हस्ताक्षर', 'बीमा प्रति', 'आरसी मूल'],
    searchQuery: 'RTO form 30 pdf'
  },
  {
    id: 'rc-duplicate-26',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Duplicate RC',
    serviceNameHi: 'डुप्लिकेट आरसी',
    formName: 'RTO Form 26',
    formNameHi: 'आरटीओ फॉर्म 26',
    description: 'Application for issue of duplicate registration certificate.',
    descriptionHi: 'डुप्लिकेट पंजीकरण प्रमाण पत्र जारी करने के लिए आवेदन।',
    icon: FileSearch,
    guidelines: ['Police report', 'Chassis print', 'Insurance'],
    guidelinesHi: ['पुलिस रिपोर्ट', 'चेसिस प्रिंट', 'बीमा'],
    searchQuery: 'RTO form 26 pdf'
  },
  {
    id: 'hp-termination-35',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Hypothecation Termination',
    serviceNameHi: 'हाइपोथेकेशन समाप्ति',
    formName: 'RTO Form 35',
    formNameHi: 'आरटीओ फॉर्म 35',
    description: 'Notice of termination of agreement of hire-purchase/lease/hypothecation.',
    descriptionHi: 'हायर-परचेज/लीज/हाइपोथेकेशन के समझौते की समाप्ति की सूचना।',
    icon: Shield,
    guidelines: ['Bank NOC', 'Original RC', 'Insurance'],
    guidelinesHi: ['बैंक एनओसी', 'मूल आरसी', 'बीमा'],
    searchQuery: 'RTO form 35 pdf'
  },

  // EDUCATION FORMS
  {
    id: 'rte-admission',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'RTE Admission',
    serviceNameHi: 'आरटीई प्रवेश',
    formName: 'RTE Free Admission Form',
    formNameHi: 'आरटीई मुफ्त प्रवेश फॉर्म',
    description: 'Free admission in private schools under RTE Act.',
    descriptionHi: 'आरटीई अधिनियम के तहत निजी स्कूलों में मुफ्त प्रवेश।',
    icon: School,
    guidelines: ['Income < 2.5 Lakh', 'Residence proof', 'Child birth cert'],
    guidelinesHi: ['आय < 2.5 लाख', 'निवास प्रमाण', 'बच्चे का जन्म प्रमाण'],
    searchQuery: 'RTE Rajasthan admission form pdf'
  },
  {
    id: 'scholarship-post-matric',
    category: 'Scholarship Forms',
    categoryHi: 'छात्रवृत्ति फॉर्म',
    serviceName: 'Post Matric Scholarship',
    serviceNameHi: 'उत्तर मैट्रिक छात्रवृत्ति',
    formName: 'Post Matric Scholarship Form',
    formNameHi: 'उत्तर मैट्रिक छात्रवृत्ति फॉर्म',
    description: 'Scholarship for SC/ST/OBC students after 10th class.',
    descriptionHi: '10वीं कक्षा के बाद SC/ST/OBC छात्रों के लिए छात्रवृत्ति।',
    icon: GraduationCap,
    guidelines: ['Income certificate', 'Caste certificate', 'Fees receipt'],
    guidelinesHi: ['आय प्रमाण पत्र', 'जाति प्रमाण पत्र', 'फीस रसीद'],
    searchQuery: 'Post matric scholarship form Rajasthan pdf'
  },
  {
    id: 'scholarship-labor',
    category: 'Scholarship Forms',
    categoryHi: 'छात्रवृत्ति फॉर्म',
    serviceName: 'Labor Scholarship',
    serviceNameHi: 'श्रमिक छात्रवृत्ति',
    formName: 'Labor Department Scholarship Form',
    formNameHi: 'श्रम विभाग छात्रवृत्ति फॉर्म',
    description: 'Scholarship for children of labor card holders.',
    descriptionHi: 'लेबर कार्ड धारकों के बच्चों के लिए छात्रवृत्ति।',
    icon: HardHat,
    guidelines: ['Labor card copy', 'School certificate', 'Aadhaar card'],
    guidelinesHi: ['लेबर कार्ड की प्रति', 'स्कूल प्रमाण पत्र', 'आधार कार्ड'],
    searchQuery: 'Labor department scholarship form Rajasthan pdf'
  },

  // EMPLOYMENT FORMS
  {
    id: 'mgnrega-new',
    category: 'Employment Forms',
    categoryHi: 'रोजगार फॉर्म',
    serviceName: 'MGNREGA',
    serviceNameHi: 'मनरेगा',
    formName: 'MGNREGA Job Card Form',
    formNameHi: 'मनरेगा जॉब कार्ड फॉर्म',
    description: 'Application for registration under MGNREGA.',
    descriptionHi: 'मनरेगा के तहत पंजीकरण के लिए आवेदन।',
    icon: Briefcase,
    guidelines: ['Family photo', 'Aadhaar card', 'Bank account'],
    guidelinesHi: ['पारिवारिक फोटो', 'आधार कार्ड', 'बैंक खाता'],
    searchQuery: 'MGNREGA job card form pdf'
  },
  {
    id: 'labor-card-new',
    category: 'Employment Forms',
    categoryHi: 'रोजगार फॉर्म',
    serviceName: 'Labor Card',
    serviceNameHi: 'लेबर कार्ड',
    formName: 'Labor Registration Form',
    formNameHi: 'श्रम पंजीकरण फॉर्म',
    description: 'Registration of construction workers in Rajasthan.',
    descriptionHi: 'राजस्थान में निर्माण श्रमिकों का पंजीकरण।',
    icon: HardHat,
    guidelines: ['90 days work cert', 'Aadhaar card', 'Bank passbook'],
    guidelinesHi: ['90 दिनों का कार्य प्रमाण', 'आधार कार्ड', 'बैंक पासबुक'],
    searchQuery: 'Labor card registration form Rajasthan pdf'
  },

  // PENSION FORMS
  {
    id: 'pension-old-age',
    category: 'Pension Forms',
    categoryHi: 'पेंशन फॉर्म',
    serviceName: 'Social Security Pension',
    serviceNameHi: 'सामाजिक सुरक्षा पेंशन',
    formName: 'Old Age Pension Form',
    formNameHi: 'वृद्धावस्था पेंशन फॉर्म',
    description: 'Application for old age social security pension.',
    descriptionHi: 'वृद्धावस्था सामाजिक सुरक्षा पेंशन के लिए आवेदन।',
    icon: Heart,
    guidelines: ['Age proof', 'Income certificate', 'Bank account'],
    guidelinesHi: ['आयु प्रमाण', 'आय प्रमाण पत्र', 'बैंक खाता'],
    searchQuery: 'Old age pension form Rajasthan pdf'
  },
  {
    id: 'pension-widow',
    category: 'Pension Forms',
    categoryHi: 'पेंशन फॉर्म',
    serviceName: 'Social Security Pension',
    serviceNameHi: 'सामाजिक सुरक्षा पेंशन',
    formName: 'Widow Pension Form',
    formNameHi: 'विधवा पेंशन फॉर्म',
    description: 'Application for widow social security pension.',
    descriptionHi: 'विधवा सामाजिक सुरक्षा पेंशन के लिए आवेदन।',
    icon: UserMinus,
    guidelines: ['Death certificate', 'Aadhaar card', 'Income certificate'],
    guidelinesHi: ['मृत्यु प्रमाण पत्र', 'आधार कार्ड', 'आय प्रमाण पत्र'],
    searchQuery: 'Widow pension form Rajasthan pdf'
  },

  // LAND & PROPERTY FORMS
  {
    id: 'jamabandi-nakhal',
    category: 'Land & Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Land Records',
    serviceNameHi: 'भूमि रिकॉर्ड',
    formName: 'Jamabandi Nakhal Form',
    formNameHi: 'जमाबंदी नकल फॉर्म',
    description: 'Application to get certified copy of Jamabandi.',
    descriptionHi: 'जमाबंदी की प्रमाणित प्रति प्राप्त करने के लिए आवेदन।',
    icon: Landmark,
    guidelines: ['Khasra number', 'Village name', 'Identity proof'],
    guidelinesHi: ['खसरा नंबर', 'गांव का नाम', 'पहचान प्रमाण'],
    searchQuery: 'Jamabandi nakhal application form Rajasthan pdf'
  },
  {
    id: 'mutation-form',
    category: 'Land & Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Mutation (Namantaran)',
    serviceNameHi: 'नामांतरण',
    formName: 'Mutation Application Form',
    formNameHi: 'नामांतरण आवेदन फॉर्म',
    description: 'Application for mutation of land records.',
    descriptionHi: 'भूमि रिकॉर्ड के नामांतरण के लिए आवेदन।',
    icon: Building,
    guidelines: ['Sale deed', 'Death cert (if any)', 'Identity proof'],
    guidelinesHi: ['बिक्री विलेख', 'मृत्यु प्रमाण (यदि कोई हो)', 'पहचान प्रमाण'],
    searchQuery: 'Land mutation application form Rajasthan pdf'
  },

  // POLICE VERIFICATION FORMS
  {
    id: 'police-verification',
    category: 'Police Verification Forms',
    categoryHi: 'पुलिस सत्यापन फॉर्म',
    serviceName: 'Police Verification',
    serviceNameHi: 'पुलिस सत्यापन',
    formName: 'Character Verification Form',
    formNameHi: 'चरित्र सत्यापन फॉर्म',
    description: 'Police verification for jobs, tenants, or servants.',
    descriptionHi: 'नौकरी, किरायेदारों या नौकरों के लिए पुलिस सत्यापन।',
    icon: Police,
    guidelines: ['Identity proof', 'Address proof', 'Two references'],
    guidelinesHi: ['पहचान का प्रमाण', 'पते का प्रमाण', 'दो संदर्भ'],
    searchQuery: 'Police verification form Rajasthan pdf'
  },

  // GOVERNMENT SCHEME FORMS
  {
    id: 'jan-aadhaar-new',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'Jan Aadhaar',
    serviceNameHi: 'जन आधार',
    formName: 'Jan Aadhaar Enrollment Form',
    formNameHi: 'जन आधार नामांकन फॉर्म',
    description: 'One Number, One Identity for Rajasthan residents.',
    descriptionHi: 'राजस्थान निवासियों के लिए एक नंबर, एक पहचान।',
    icon: Users,
    guidelines: ['Family Aadhaar', 'Bank account', 'Mobile number'],
    guidelinesHi: ['पारिवारिक आधार', 'बैंक खाता', 'मोबाइल नंबर'],
    searchQuery: 'Jan Aadhaar enrollment form pdf'
  },
  {
    id: 'pm-kisan-new',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'PM Kisan',
    serviceNameHi: 'पीएम किसान',
    formName: 'PM Kisan Registration Form',
    formNameHi: 'पीएम किसान पंजीकरण फॉर्म',
    description: 'Application for PM Kisan Samman Nidhi Yojana.',
    descriptionHi: 'पीएम किसान सम्मान निधि योजना के लिए आवेदन।',
    icon: Sprout,
    guidelines: ['Land records', 'Aadhaar card', 'Bank account'],
    guidelinesHi: ['भूमि रिकॉर्ड', 'आधार कार्ड', 'बैंक खाता'],
    searchQuery: 'PM Kisan registration form pdf'
  },
  {
    id: 'ayushman-card',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'Ayushman Bharat',
    serviceNameHi: 'आयुष्मान भारत',
    formName: 'Ayushman Card Application',
    formNameHi: 'आयुष्मान कार्ड आवेदन',
    description: 'Health card for free treatment up to 5 Lakhs.',
    descriptionHi: '5 लाख तक के मुफ्त इलाज के लिए स्वास्थ्य कार्ड।',
    icon: Stethoscope,
    guidelines: ['Ration card', 'Aadhaar card', 'Mobile number'],
    guidelinesHi: ['राशन कार्ड', 'आधार कार्ड', 'मोबाइल नंबर'],
    searchQuery: 'Ayushman Bharat card form pdf'
  },
  {
    id: 'palanhari-yojana',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'Palanhari Yojana',
    serviceNameHi: 'पालनहार योजना',
    formName: 'Palanhari Application Form',
    formNameHi: 'पालनहार आवेदन फॉर्म',
    description: 'Support for orphan children in Rajasthan.',
    descriptionHi: 'राजस्थान में अनाथ बच्चों के लिए सहायता।',
    icon: Heart,
    guidelines: ['Orphan certificate', 'Aadhaar card', 'Income certificate'],
    guidelinesHi: ['अनाथ प्रमाण पत्र', 'आधार कार्ड', 'आय प्रमाण पत्र'],
    searchQuery: 'Palanhari Yojana application form Rajasthan pdf'
  },
  {
    id: 'shubh-shakti',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'Shubh Shakti Yojana',
    serviceNameHi: 'शुभ शक्ति योजना',
    formName: 'Shubh Shakti Form',
    formNameHi: 'शुभ शक्ति फॉर्म',
    description: 'Financial aid for daughters of labor card holders.',
    descriptionHi: 'लेबर कार्ड धारकों की बेटियों के लिए वित्तीय सहायता।',
    icon: Award,
    guidelines: ['Labor card', 'Daughter age 18+', 'Unmarried certificate'],
    guidelinesHi: ['लेबर कार्ड', 'बेटी की उम्र 18+', 'अविवाहित प्रमाण पत्र'],
    searchQuery: 'Shubh Shakti Yojana application form Rajasthan pdf'
  },
  {
    id: 'silicosis-policy',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'Silicosis Policy',
    serviceNameHi: 'सिलिकोसिस नीति',
    formName: 'Silicosis Aid Form',
    formNameHi: 'सिलिकोसिस सहायता फॉर्म',
    description: 'Financial aid for workers suffering from Silicosis.',
    descriptionHi: 'सिलिकोसिस से पीड़ित श्रमिकों के लिए वित्तीय सहायता।',
    icon: Activity,
    guidelines: ['Medical certificate', 'Aadhaar card', 'Bank account'],
    guidelinesHi: ['मेडिकल प्रमाण पत्र', 'आधार कार्ड', 'बैंक खाता'],
    searchQuery: 'Silicosis aid application form Rajasthan pdf'
  },
  {
    id: 'ration-card-add',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'Ration Card',
    serviceNameHi: 'राशन कार्ड',
    formName: 'Add Member in Ration Card',
    formNameHi: 'राशन कार्ड में सदस्य जोड़ें',
    description: 'Application to add new member in existing Ration Card.',
    descriptionHi: 'मौजूदा राशन कार्ड में नया सदस्य जोड़ने के लिए आवेदन।',
    icon: UserPlus,
    guidelines: ['Birth cert/Marriage cert', 'Aadhaar card', 'Original Ration Card'],
    guidelinesHi: ['जन्म प्रमाण/विवाह प्रमाण', 'आधार कार्ड', 'मूल राशन कार्ड'],
    searchQuery: 'Add member in ration card form Rajasthan pdf'
  },
  {
    id: 'ration-card-delete',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'Ration Card',
    serviceNameHi: 'राशन कार्ड',
    formName: 'Delete Member from Ration Card',
    formNameHi: 'राशन कार्ड से सदस्य हटाएं',
    description: 'Application to delete member from existing Ration Card.',
    descriptionHi: 'मौजूदा राशन कार्ड से सदस्य हटाने के लिए आवेदन।',
    icon: UserMinus,
    guidelines: ['Death cert/Marriage cert', 'Original Ration Card'],
    guidelinesHi: ['मृत्यु प्रमाण/विवाह प्रमाण', 'मूल राशन कार्ड'],
    searchQuery: 'Delete member from ration card form Rajasthan pdf'
  },
  {
    id: 'ration-card-surrender',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'Ration Card',
    serviceNameHi: 'राशन कार्ड',
    formName: 'Ration Card Surrender Form',
    formNameHi: 'राशन कार्ड सरेंडर फॉर्म',
    description: 'Application to surrender Ration Card for moving or new card.',
    descriptionHi: 'स्थानांतरण या नए कार्ड के लिए राशन कार्ड सरेंडर करने के लिए आवेदन।',
    icon: FileOutput,
    guidelines: ['Original Ration Card', 'Reason for surrender'],
    guidelinesHi: ['मूल राशन कार्ड', 'सरेंडर करने का कारण'],
    searchQuery: 'Ration card surrender form Rajasthan pdf'
  },
  // ADDITIONAL FORMS
  {
    id: 'police-character-cert',
    category: 'Police Verification Forms',
    categoryHi: 'पुलिस सत्यापन फॉर्म',
    serviceName: 'Police Verification',
    serviceNameHi: 'पुलिस सत्यापन',
    formName: 'Police Character Certificate Form',
    formNameHi: 'पुलिस चरित्र प्रमाण पत्र फॉर्म',
    description: 'Required for government jobs and private security roles.',
    descriptionHi: 'सरकारी नौकरियों और निजी सुरक्षा भूमिकाओं के लिए आवश्यक।',
    icon: Police,
    guidelines: ['Aadhaar card', 'Address proof', 'Passport size photo'],
    guidelinesHi: ['आधार कार्ड', 'पते का प्रमाण', 'पासपोर्ट आकार का फोटो'],
    searchQuery: 'Police character certificate application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To verify the character and criminal record of an individual for employment or other legal purposes.',
        hi: 'रोजगार या अन्य कानूनी उद्देश्यों के लिए किसी व्यक्ति के चरित्र और आपराधिक रिकॉर्ड को सत्यापित करने के लिए।'
      },
      eligibility: {
        en: 'Any citizen residing in the jurisdiction for at least 6 months.',
        hi: 'कम से कम 6 महीने से अधिकार क्षेत्र में रहने वाला कोई भी नागरिक।'
      },
      documents: {
        en: ['Aadhaar Card', 'Address Proof (Voter ID/Electricity Bill)', 'Passport size photo', 'Affidavit'],
        hi: ['आधार कार्ड', 'पते का प्रमाण (वोटर आईडी/बिजली बिल)', 'पासपोर्ट आकार का फोटो', 'हलफनामा']
      },
      process: {
        en: '1. Fill the application form. 2. Submit at e-Mitra or Police Station. 3. Police verification at your residence. 4. Collect certificate after approval.',
        hi: '1. आवेदन पत्र भरें। 2. ई-मित्र या पुलिस स्टेशन में जमा करें। 3. आपके निवास पर पुलिस सत्यापन। 4. अनुमोदन के बाद प्रमाण पत्र प्राप्त करें।'
      },
      tips: {
        en: 'Ensure all details match your Aadhaar card to avoid rejection.',
        hi: 'अस्वीकृति से बचने के लिए सुनिश्चित करें कि सभी विवरण आपके आधार कार्ड से मेल खाते हैं।'
      }
    }
  },
  {
    id: 'tenant-verification',
    category: 'Police Verification Forms',
    categoryHi: 'पुलिस सत्यापन फॉर्म',
    serviceName: 'Tenant Verification',
    serviceNameHi: 'किरायेदार सत्यापन',
    formName: 'Tenant Verification Form',
    formNameHi: 'किरायेदार सत्यापन फॉर्म',
    description: 'Mandatory verification for tenants in Rajasthan.',
    descriptionHi: 'राजस्थान में किरायेदारों के लिए अनिवार्य सत्यापन।',
    icon: Home,
    guidelines: ['Tenant ID proof', 'Owner ID proof', 'Rent agreement'],
    guidelinesHi: ['किरायेदार आईडी प्रमाण', 'मालिक आईडी प्रमाण', 'किराया समझौता'],
    searchQuery: 'Tenant verification form Rajasthan police pdf',
    guide: {
      purpose: {
        en: 'To ensure the safety of the locality by verifying the identity of tenants.',
        hi: 'किरायेदारों की पहचान सत्यापित करके इलाके की सुरक्षा सुनिश्चित करना।'
      },
      eligibility: {
        en: 'Property owners renting out their premises.',
        hi: 'संपत्ति के मालिक जो अपना परिसर किराए पर दे रहे हैं।'
      },
      documents: {
        en: ['Tenant Aadhaar Card', 'Owner Aadhaar Card', 'Tenant Photo', 'Rent Agreement'],
        hi: ['किरायेदार का आधार कार्ड', 'मालिक का आधार कार्ड', 'किरायेदार का फोटो', 'किराया समझौता']
      },
      process: {
        en: '1. Fill the tenant verification form. 2. Attach photos and ID proofs. 3. Submit to the local police station or online via Rajasthan Police portal.',
        hi: '1. किरायेदार सत्यापन फॉर्म भरें। 2. फोटो और आईडी प्रमाण संलग्न करें। 3. स्थानीय पुलिस स्टेशन या राजस्थान पुलिस पोर्टल के माध्यम से ऑनलाइन जमा करें।'
      },
      tips: {
        en: 'It is a legal requirement for owners to verify tenants.',
        hi: 'मालिकों के लिए किरायेदारों का सत्यापन करना एक कानूनी आवश्यकता है।'
      }
    }
  },
  {
    id: 'domestic-help-verification',
    category: 'Police Verification Forms',
    categoryHi: 'पुलिस सत्यापन फॉर्म',
    serviceName: 'Servant Verification',
    serviceNameHi: 'नौकर सत्यापन',
    formName: 'Domestic Help Verification Form',
    formNameHi: 'घरेलू सहायक सत्यापन फॉर्म',
    description: 'Verification for domestic workers and servants.',
    descriptionHi: 'घरेलू कामगारों और नौकरों के लिए सत्यापन।',
    icon: UserCheck,
    guidelines: ['Servant ID proof', 'Address proof', 'Photo'],
    guidelinesHi: ['नौकर आईडी प्रमाण', 'पते का प्रमाण', 'फोटो'],
    searchQuery: 'Domestic help verification form Rajasthan police pdf'
  },
  {
    id: 'arms-licence-new',
    category: 'Police Verification Forms',
    categoryHi: 'पुलिस सत्यापन फॉर्म',
    serviceName: 'Arms Licence',
    serviceNameHi: 'हथियार लाइसेंस',
    formName: 'New Arms Licence Form',
    formNameHi: 'नया हथियार लाइसेंस फॉर्म',
    description: 'Application for grant of new Arms Licence.',
    descriptionHi: 'नया हथियार लाइसेंस प्रदान करने के लिए आवेदन।',
    icon: Shield,
    guidelines: ['Threat perception proof', 'Medical fitness', 'Identity proof'],
    guidelinesHi: ['खतरे की धारणा का प्रमाण', 'मेडिकल फिटनेस', 'पहचान प्रमाण'],
    searchQuery: 'Arms licence application form Rajasthan pdf'
  },
  {
    id: 'scholarship-national',
    category: 'Scholarship Forms',
    categoryHi: 'छात्रवृत्ति फॉर्म',
    serviceName: 'National Scholarship (NSP)',
    serviceNameHi: 'राष्ट्रीय छात्रवृत्ति (NSP)',
    formName: 'NSP Registration Form',
    formNameHi: 'NSP पंजीकरण फॉर्म',
    description: 'Central government scholarship for minority and merit students.',
    descriptionHi: 'अल्पसंख्यक और मेधावी छात्रों के लिए केंद्र सरकार की छात्रवृत्ति।',
    icon: GraduationCap,
    guidelines: ['Income certificate', 'Caste certificate', 'Bank account'],
    guidelinesHi: ['आय प्रमाण पत्र', 'जाति प्रमाण पत्र', 'बैंक खाता'],
    searchQuery: 'NSP scholarship application form pdf'
  },
  {
    id: 'scholarship-inspire',
    category: 'Scholarship Forms',
    categoryHi: 'छात्रवृत्ति फॉर्म',
    serviceName: 'Inspire Scholarship',
    serviceNameHi: 'इंस्पायर छात्रवृत्ति',
    formName: 'Inspire Scholarship Form',
    formNameHi: 'इंस्पायर छात्रवृत्ति फॉर्म',
    description: 'Scholarship for higher education in science.',
    descriptionHi: 'विज्ञान में उच्च शिक्षा के लिए छात्रवृत्ति।',
    icon: Award,
    guidelines: ['Top 1% in 12th', 'Science stream', 'Endorsement form'],
    guidelinesHi: ['12वीं में टॉप 1%', 'विज्ञान स्ट्रीम', 'अनुमोदन फॉर्म'],
    searchQuery: 'Inspire scholarship application form pdf'
  },
  {
    id: 'scholarship-pre-matric',
    category: 'Scholarship Forms',
    categoryHi: 'छात्रवृत्ति फॉर्म',
    serviceName: 'Pre-Matric Scholarship',
    serviceNameHi: 'पूर्व मैट्रिक छात्रवृत्ति',
    formName: 'Pre-Matric Scholarship Form',
    formNameHi: 'पूर्व मैट्रिक छात्रवृत्ति फॉर्म',
    description: 'Scholarship for students from class 1 to 10.',
    descriptionHi: 'कक्षा 1 से 10 तक के छात्रों के लिए छात्रवृत्ति।',
    icon: School,
    guidelines: ['Caste certificate', 'Income certificate', 'Aadhaar card'],
    guidelinesHi: ['जाति प्रमाण पत्र', 'आय प्रमाण पत्र', 'आधार कार्ड'],
    searchQuery: 'Pre matric scholarship form Rajasthan pdf'
  },
  {
    id: 'scholarship-kali-bai',
    category: 'Scholarship Forms',
    categoryHi: 'छात्रवृत्ति फॉर्म',
    serviceName: 'Kali Bai Scooty Yojana',
    serviceNameHi: 'काली बाई स्कूटी योजना',
    formName: 'Kali Bai Scooty Form',
    formNameHi: 'काली बाई स्कूटी फॉर्म',
    description: 'Free scooty for meritorious girl students in Rajasthan.',
    descriptionHi: 'राजस्थान में मेधावी छात्राओं के लिए मुफ्त स्कूटी।',
    icon: Award,
    guidelines: ['12th marksheet', 'Jan Aadhaar', 'Income certificate'],
    guidelinesHi: ['12वीं की मार्कशीट', 'जन आधार', 'आय प्रमाण पत्र'],
    searchQuery: 'Kali Bai Scooty Yojana form Rajasthan pdf'
  },
  {
    id: 'scholarship-devnarayan',
    category: 'Scholarship Forms',
    categoryHi: 'छात्रवृत्ति फॉर्म',
    serviceName: 'Devnarayan Scooty Yojana',
    serviceNameHi: 'देवनारायण स्कूटी योजना',
    formName: 'Devnarayan Scooty Form',
    formNameHi: 'देवनारायण स्कूटी फॉर्म',
    description: 'Scooty and incentive for MBC category girl students.',
    descriptionHi: 'MBC श्रेणी की छात्राओं के लिए स्कूटी और प्रोत्साहन।',
    icon: Award,
    guidelines: ['MBC caste certificate', '12th marksheet', 'Jan Aadhaar'],
    guidelinesHi: ['MBC जाति प्रमाण पत्र', '12वीं की मार्कशीट', 'जन आधार'],
    searchQuery: 'Devnarayan Scooty Yojana form Rajasthan pdf'
  },
  {
    id: 'unemployment-allowance',
    category: 'Employment Forms',
    categoryHi: 'रोजगार फॉर्म',
    serviceName: 'Berozgari Bhatta',
    serviceNameHi: 'बेरोजगारी भत्ता',
    formName: 'Unemployment Allowance Form',
    formNameHi: 'बेरोजगारी भत्ता फॉर्म',
    description: 'Monthly allowance for unemployed graduates in Rajasthan.',
    descriptionHi: 'राजस्थान में बेरोजगार स्नातकों के लिए मासिक भत्ता।',
    icon: Wallet,
    guidelines: ['Graduate degree', 'Rajasthan domicile', 'Income < 2 Lakh'],
    guidelinesHi: ['स्नातक की डिग्री', 'राजस्थान मूल निवास', 'आय < 2 लाख'],
    searchQuery: 'Berozgari bhatta application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To provide financial assistance to unemployed graduates (Mukhya Mantri Yuva Sambal Yojana).',
        hi: 'बेरोजगार स्नातकों को वित्तीय सहायता प्रदान करना (मुख्यमंत्री युवा संबल योजना)।'
      },
      eligibility: {
        en: 'Unemployed graduates from Rajasthan, age 21-30 (General) or 21-35 (SC/ST/Women/PH).',
        hi: 'राजस्थान के बेरोजगार स्नातक, आयु 21-30 (सामान्य) या 21-35 (SC/ST/महिला/PH)।'
      },
      documents: {
        en: ['10th Marksheet', 'Graduation Degree', 'Bonafide Certificate', 'Income Certificate (Form I, K)', 'Jan Aadhaar Card'],
        hi: ['10वीं की मार्कशीट', 'स्नातक की डिग्री', 'मूल निवास प्रमाण पत्र', 'आय प्रमाण पत्र (फॉर्म I, K)', 'जन आधार कार्ड']
      },
      process: {
        en: '1. Register on Employment Portal. 2. Apply for Yuva Sambal Yojana. 3. Upload documents. 4. Complete mandatory 4-hour internship daily.',
        hi: '1. रोजगार पोर्टल पर पंजीकरण करें। 2. युवा संबल योजना के लिए आवेदन करें। 3. दस्तावेज अपलोड करें। 4. प्रतिदिन अनिवार्य 4 घंटे की इंटर्नशिप पूरी करें।'
      },
      tips: {
        en: 'Internship is mandatory to receive the allowance.',
        hi: 'भत्ता प्राप्त करने के लिए इंटर्नशिप अनिवार्य है।'
      }
    }
  },
  {
    id: 'employment-exchange-renewal',
    category: 'Employment Forms',
    categoryHi: 'रोजगार फॉर्म',
    serviceName: 'Employment Exchange',
    serviceNameHi: 'रोजगार कार्यालय',
    formName: 'Registration Renewal Form',
    formNameHi: 'पंजीकरण नवीनीकरण फॉर्म',
    description: 'Renewal of existing employment exchange registration.',
    descriptionHi: 'मौजूदा रोजगार कार्यालय पंजीकरण का नवीनीकरण।',
    icon: Repeat,
    guidelines: ['Registration number', 'Identity proof', 'Educational updates'],
    guidelinesHi: ['पंजीकरण संख्या', 'पहचान प्रमाण', 'शैक्षिक अपडेट'],
    searchQuery: 'Employment exchange renewal form Rajasthan pdf'
  },
  {
    id: 'pension-verification-annual',
    category: 'Pension Forms',
    categoryHi: 'पेंशन फॉर्म',
    serviceName: 'Pension Verification',
    serviceNameHi: 'पेंशन सत्यापन',
    formName: 'Annual Life Certificate Form',
    formNameHi: 'वार्षिक जीवन प्रमाण पत्र फॉर्म',
    description: 'Mandatory annual verification for continuing pension.',
    descriptionHi: 'पेंशन जारी रखने के लिए अनिवार्य वार्षिक सत्यापन।',
    icon: UserCheck,
    guidelines: ['PPO number', 'Aadhaar card', 'Bank account'],
    guidelinesHi: ['PPO नंबर', 'आधार कार्ड', 'बैंक खाता'],
    searchQuery: 'Annual life certificate form for pensioners pdf'
  },
  {
    id: 'pension-disability-new',
    category: 'Pension Forms',
    categoryHi: 'पेंशन फॉर्म',
    serviceName: 'Disability Pension',
    serviceNameHi: 'विकलांगता पेंशन',
    formName: 'Divyang Pension Form',
    formNameHi: 'दिव्यांग पेंशन फॉर्म',
    description: 'Application for disability social security pension.',
    descriptionHi: 'विकलांगता सामाजिक सुरक्षा पेंशन के लिए आवेदन।',
    icon: Accessibility,
    guidelines: ['Disability certificate', 'Aadhaar card', 'Income certificate'],
    guidelinesHi: ['विकलांगता प्रमाण पत्र', 'आधार कार्ड', 'आय प्रमाण पत्र'],
    searchQuery: 'Disability pension form Rajasthan pdf'
  },
  {
    id: 'land-conversion-90a',
    category: 'Land & Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Land Conversion',
    serviceNameHi: 'भूमि रूपांतरण',
    formName: '90-A Conversion Form',
    formNameHi: '90-A रूपांतरण फॉर्म',
    description: 'Conversion of agricultural land to non-agricultural.',
    descriptionHi: 'कृषि भूमि का गैर-कृषि में रूपांतरण।',
    icon: Layout,
    guidelines: ['Land documents', 'Site plan', 'NOC from departments'],
    guidelinesHi: ['भूमि दस्तावेज', 'साइट प्लान', 'विभागों से एनओसी'],
    searchQuery: '90A land conversion form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To change the land use from agricultural to residential, commercial, or industrial.',
        hi: 'भूमि के उपयोग को कृषि से आवासीय, व्यावसायिक या औद्योगिक में बदलने के लिए।'
      },
      eligibility: {
        en: 'Land owners having clear title of the agricultural land.',
        hi: 'कृषि भूमि का स्पष्ट शीर्षक रखने वाले भूमि मालिक।'
      },
      documents: {
        en: ['Jamabandi (Latest)', 'Trace Map', 'Site Plan', 'ID Proof', 'Affidavit'],
        hi: ['जमाबंदी (नवीनतम)', 'ट्रेस मैप', 'साइट प्लान', 'आईडी प्रमाण', 'हलफनामा']
      },
      process: {
        en: '1. Submit application to the local authority (UIT/Municipality). 2. Field inspection by Patwari/Tehsildar. 3. Payment of conversion charges. 4. Issuance of conversion order.',
        hi: '1. स्थानीय प्राधिकरण (UIT/नगरपालिका) को आवेदन जमा करें। 2. पटवारी/तहसीलदार द्वारा फील्ड निरीक्षण। 3. रूपांतरण शुल्क का भुगतान। 4. रूपांतरण आदेश जारी करना।'
      },
      tips: {
        en: 'Check the Master Plan of the area before applying.',
        hi: 'आवेदन करने से पहले क्षेत्र के मास्टर प्लान की जांच करें।'
      }
    }
  },
  {
    id: 'land-partition',
    category: 'Land & Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Land Partition',
    serviceNameHi: 'भूमि विभाजन',
    formName: 'Land Partition Form',
    formNameHi: 'भूमि विभाजन फॉर्म',
    description: 'Application for legal partition of joint land property.',
    descriptionHi: 'संयुक्त भूमि संपत्ति के कानूनी विभाजन के लिए आवेदन।',
    icon: Court,
    guidelines: ['Jamabandi copy', 'Map of land', 'Consent of co-sharers'],
    guidelinesHi: ['जमाबंदी की प्रति', 'भूमि का नक्शा', 'सह-साझेदारों की सहमति'],
    searchQuery: 'Land partition application form Rajasthan pdf'
  },
  {
    id: 'land-demarcation',
    category: 'Land & Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Land Demarcation',
    serviceNameHi: 'भूमि सीमांकन',
    formName: 'Land Demarcation (Seemagyan) Form',
    formNameHi: 'भूमि सीमांकन (सीमाज्ञान) फॉर्म',
    description: 'Application for measurement and marking of land boundaries.',
    descriptionHi: 'भूमि की सीमाओं के माप और अंकन के लिए आवेदन।',
    icon: Map,
    guidelines: ['Jamabandi copy', 'Trace map', 'Fees payment'],
    guidelinesHi: ['जमाबंदी की प्रति', 'ट्रेस मैप', 'फीस भुगतान'],
    searchQuery: 'Land demarcation seemagyan form Rajasthan pdf'
  },
  {
    id: 'building-plan-approval',
    category: 'Land & Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Building Plan',
    serviceNameHi: 'भवन योजना',
    formName: 'Building Plan Approval Form',
    formNameHi: 'भवन योजना अनुमोदन फॉर्म',
    description: 'Approval of building maps from Municipality/UIT.',
    descriptionHi: 'नगरपालिका/यूआईटी से भवन मानचित्रों का अनुमोदन।',
    icon: Building,
    guidelines: ['Ownership proof', 'Architectural map', 'NOC from fire/etc'],
    guidelinesHi: ['स्वामित्व प्रमाण', 'वास्तुकला मानचित्र', 'फायर/आदि से एनओसी'],
    searchQuery: 'Building plan approval form Rajasthan pdf'
  },
  {
    id: 'birth-cert-correction',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Birth Certificate',
    serviceNameHi: 'जन्म प्रमाण पत्र',
    formName: 'Name Addition/Correction Form',
    formNameHi: 'नाम जोड़ने/सुधारने का फॉर्म',
    description: 'Add child name or correct details in birth certificate.',
    descriptionHi: 'जन्म प्रमाण पत्र में बच्चे का नाम जोड़ें या विवरण सुधारें।',
    icon: Baby,
    guidelines: ['Original certificate', 'Affidavit', 'School records'],
    guidelinesHi: ['मूल प्रमाण पत्र', 'हलफनामा', 'स्कूल रिकॉर्ड'],
    searchQuery: 'Birth certificate name addition form Rajasthan pdf'
  },
  {
    id: 'death-cert-correction',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Death Certificate',
    serviceNameHi: 'मृत्यु प्रमाण पत्र',
    formName: 'Death Certificate Correction Form',
    formNameHi: 'मृत्यु प्रमाण पत्र सुधार फॉर्म',
    description: 'Correct details in an existing death certificate.',
    descriptionHi: 'मौजूदा मृत्यु प्रमाण पत्र में विवरण सुधारें।',
    icon: Skull,
    guidelines: ['Original certificate', 'Medical report', 'Affidavit'],
    guidelinesHi: ['मूल प्रमाण पत्र', 'मेडिकल रिपोर्ट', 'हलफनामा'],
    searchQuery: 'Death certificate correction form Rajasthan pdf'
  },
  {
    id: 'solvency-cert',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Solvency Certificate',
    serviceNameHi: 'सॉल्वेंसी सर्टिफिकेट',
    formName: 'Solvency Certificate Form',
    formNameHi: 'सॉल्वेंसी सर्टिफिकेट फॉर्म',
    description: 'Proof of financial stability for tenders and contracts.',
    descriptionHi: 'निविदाओं और अनुबंधों के लिए वित्तीय स्थिरता का प्रमाण।',
    icon: Bank,
    guidelines: ['Property documents', 'Bank balance cert', 'Income tax returns'],
    guidelinesHi: ['संपत्ति के दस्तावेज', 'बैंक बैलेंस सर्टिफिकेट', 'आयकर रिटर्न'],
    searchQuery: 'Solvency certificate application form Rajasthan pdf'
  },
  {
    id: 'legal-heir-cert',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Legal Heir Certificate',
    serviceNameHi: 'कानूनी वारिस प्रमाण पत्र',
    formName: 'Legal Heir (Warisan) Form',
    formNameHi: 'कानूनी वारिस (वारिसान) फॉर्म',
    description: 'Certificate to identify legal heirs of a deceased person.',
    descriptionHi: 'मृतक व्यक्ति के कानूनी वारिसों की पहचान करने के लिए प्रमाण पत्र।',
    icon: Users,
    guidelines: ['Death certificate', 'Family tree (Shajra)', 'ID proof of heirs'],
    guidelinesHi: ['मृत्यु प्रमाण पत्र', 'वंश वृक्ष (शजरा)', 'वारिसों का आईडी प्रमाण'],
    searchQuery: 'Legal heir certificate form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To establish the relationship between the deceased and their survivors for inheritance.',
        hi: 'विरासत के लिए मृतक और उनके उत्तरजीवियों के बीच संबंध स्थापित करना।'
      },
      eligibility: {
        en: 'Direct family members (Spouse, Children, Parents) of the deceased.',
        hi: 'मृतक के प्रत्यक्ष परिवार के सदस्य (पति/पत्नी, बच्चे, माता-पिता)।'
      },
      documents: {
        en: ['Death Certificate', 'Aadhaar of all heirs', 'Family Tree (Shajra)', 'Address Proof', 'Affidavit'],
        hi: ['मृत्यु प्रमाण पत्र', 'सभी वारिसों का आधार', 'वंश वृक्ष (शजरा)', 'पते का प्रमाण', 'हलफनामा']
      },
      process: {
        en: '1. Apply at the Tehsildar office or e-Mitra. 2. Public notice for objections. 3. Inquiry by Patwari. 4. Issuance of certificate.',
        hi: '1. तहसीलदार कार्यालय या ई-मित्र पर आवेदन करें। 2. आपत्तियों के लिए सार्वजनिक सूचना। 3. पटवारी द्वारा जांच। 4. प्रमाण पत्र जारी करना।'
      },
      tips: {
        en: 'Ensure all family members are included in the Shajra.',
        hi: 'सुनिश्चित करें कि शजरा में परिवार के सभी सदस्य शामिल हैं।'
      }
    }
  },
  {
    id: 'minority-cert',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Minority Certificate',
    serviceNameHi: 'अल्पसंख्यक प्रमाण पत्र',
    formName: 'Minority Status Form',
    formNameHi: 'अल्पसंख्यक दर्जा फॉर्म',
    description: 'Certificate for religious or linguistic minorities.',
    descriptionHi: 'धार्मिक या भाषाई अल्पसंख्यकों के लिए प्रमाण पत्र।',
    icon: ShieldCheck,
    guidelines: ['Self declaration', 'Community proof', 'Aadhaar card'],
    guidelinesHi: ['स्व-घोषणा', 'समुदाय का प्रमाण', 'आधार कार्ड'],
    searchQuery: 'Minority certificate application form Rajasthan pdf'
  },
  {
    id: 'senior-citizen-card',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'Senior Citizen Card',
    serviceNameHi: 'वरिष्ठ नागरिक कार्ड',
    formName: 'Senior Citizen ID Form',
    formNameHi: 'वरिष्ठ नागरिक आईडी फॉर्म',
    description: 'Identity card for citizens aged 60 and above.',
    descriptionHi: '60 वर्ष और उससे अधिक आयु के नागरिकों के लिए पहचान पत्र।',
    icon: Heart,
    guidelines: ['Age proof', 'Address proof', 'Blood group'],
    guidelinesHi: ['आयु प्रमाण', 'पते का प्रमाण', 'ब्लड ग्रुप'],
    searchQuery: 'Senior citizen ID card application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To avail benefits and concessions provided by the government for elderly citizens.',
        hi: 'बुजुर्ग नागरिकों के लिए सरकार द्वारा प्रदान किए जाने वाले लाभों और रियायतों का लाभ उठाने के लिए।'
      },
      eligibility: {
        en: 'Citizens aged 60 years or above.',
        hi: '60 वर्ष या उससे अधिक आयु के नागरिक।'
      },
      documents: {
        en: ['Age Proof (Birth Cert/10th Marksheet)', 'Address Proof', 'Passport size photo', 'Blood Group Report'],
        hi: ['आयु प्रमाण (जन्म प्रमाण पत्र/10वीं की मार्कशीट)', 'पते का प्रमाण', 'पासपोर्ट आकार का फोटो', 'ब्लड ग्रुप रिपोर्ट']
      },
      process: {
        en: '1. Fill the application form. 2. Attach required documents. 3. Submit at the Social Justice and Empowerment department or e-Mitra.',
        hi: '1. आवेदन पत्र भरें। 2. आवश्यक दस्तावेज संलग्न करें। 3. सामाजिक न्याय और अधिकारिता विभाग या ई-मित्र पर जमा करें।'
      },
      tips: {
        en: 'This card is useful for travel concessions and priority in government offices.',
        hi: 'यह कार्ड यात्रा रियायतों और सरकारी कार्यालयों में प्राथमिकता के लिए उपयोगी है।'
      }
    }
  },
  {
    id: 'disability-id-udid',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'UDID Card',
    serviceNameHi: 'UDID कार्ड',
    formName: 'Unique Disability ID Form',
    formNameHi: 'विशिष्ट विकलांगता आईडी फॉर्म',
    description: 'National database for persons with disabilities.',
    descriptionHi: 'विकलांग व्यक्तियों के लिए राष्ट्रीय डेटाबेस।',
    icon: Accessibility,
    guidelines: ['Disability certificate', 'Aadhaar card', 'Photo'],
    guidelinesHi: ['विकलांगता प्रमाण पत्र', 'आधार कार्ड', 'फोटो'],
    searchQuery: 'UDID card application form pdf',
    guide: {
      purpose: {
        en: 'To provide a single document for identification and verification of persons with disabilities.',
        hi: 'विकलांग व्यक्तियों की पहचान और सत्यापन के लिए एकल दस्तावेज प्रदान करना।'
      },
      eligibility: {
        en: 'Any person with a disability of 40% or more.',
        hi: '40% या उससे अधिक विकलांगता वाला कोई भी व्यक्ति।'
      },
      documents: {
        en: ['Disability Certificate', 'Aadhaar Card', 'Passport size photo', 'Income Proof'],
        hi: ['विकलांगता प्रमाण पत्र', 'आधार कार्ड', 'पासपोर्ट आकार का फोटो', 'आय का प्रमाण']
      },
      process: {
        en: '1. Register on the Swavlamban Card portal. 2. Fill personal and disability details. 3. Upload documents. 4. Visit medical board for assessment if required.',
        hi: '1. स्वावलंबन कार्ड पोर्टल पर पंजीकरण करें। 2. व्यक्तिगत और विकलांगता विवरण भरें। 3. दस्तावेज अपलोड करें। 4. यदि आवश्यक हो तो मूल्यांकन के लिए मेडिकल बोर्ड के पास जाएं।'
      },
      tips: {
        en: 'UDID card is valid across India for all government schemes.',
        hi: 'UDID कार्ड सभी सरकारी योजनाओं के लिए पूरे भारत में मान्य है।'
      }
    }
  },
  {
    id: 'jan-aadhaar-correction',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'Jan Aadhaar',
    serviceNameHi: 'जन आधार',
    formName: 'Jan Aadhaar Correction Form',
    formNameHi: 'जन आधार सुधार फॉर्म',
    description: 'Update family or member details in Jan Aadhaar.',
    descriptionHi: 'जन आधार में परिवार या सदस्य का विवरण अपडेट करें।',
    icon: Repeat,
    guidelines: ['Jan Aadhaar card', 'Proof of correction', 'Aadhaar card'],
    guidelinesHi: ['जन आधार कार्ड', 'सुधार का प्रमाण', 'आधार कार्ड'],
    searchQuery: 'Jan Aadhaar correction form pdf',
    guide: {
      purpose: {
        en: 'To update or correct information like name, date of birth, or bank details in Jan Aadhaar.',
        hi: 'जन आधार में नाम, जन्म तिथि या बैंक विवरण जैसी जानकारी को अपडेट या सही करने के लिए।'
      },
      eligibility: {
        en: 'Any member of a family registered in Jan Aadhaar.',
        hi: 'जन आधार में पंजीकृत परिवार का कोई भी सदस्य।'
      },
      documents: {
        en: ['Jan Aadhaar Card', 'Aadhaar Card', 'Supporting document for correction (Marksheet/Birth Cert/Bank Passbook)'],
        hi: ['जन आधार कार्ड', 'आधार कार्ड', 'सुधार के लिए सहायक दस्तावेज (मार्कशीट/जन्म प्रमाण पत्र/बैंक पासबुक)']
      },
      process: {
        en: '1. Visit an e-Mitra center. 2. Provide Jan Aadhaar number. 3. Specify details to be corrected. 4. Upload supporting documents. 5. Biometric or OTP verification.',
        hi: '1. ई-मित्र केंद्र पर जाएं। 2. जन आधार नंबर प्रदान करें। 3. सुधारे जाने वाले विवरण निर्दिष्ट करें। 4. सहायक दस्तावेज अपलोड करें। 5. बायोमेट्रिक या ओटीपी सत्यापन।'
      },
      tips: {
        en: 'Ensure your mobile number is linked with Aadhaar for easy OTP verification.',
        hi: 'आसान ओटीपी सत्यापन के लिए सुनिश्चित करें कि आपका मोबाइल नंबर आधार से जुड़ा है।'
      }
    }
  },
  {
    id: 'jan-aadhaar-split',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'Jan Aadhaar',
    serviceNameHi: 'जन आधार',
    formName: 'Jan Aadhaar Family Split Form',
    formNameHi: 'जन आधार परिवार विभाजन फॉर्म',
    description: 'Split a family into two separate Jan Aadhaar cards.',
    descriptionHi: 'एक परिवार को दो अलग-अलग जन आधार कार्डों में विभाजित करें।',
    icon: Users,
    guidelines: ['Marriage cert/Separation proof', 'Aadhaar card', 'NOC from HOF'],
    guidelinesHi: ['विवाह प्रमाण/विभाजन प्रमाण', 'आधार कार्ड', 'HOF से एनओसी'],
    searchQuery: 'Jan Aadhaar family split form pdf'
  },
  {
    id: 'pm-kisan-ekyc',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'PM Kisan',
    serviceNameHi: 'पीएम किसान',
    formName: 'PM Kisan e-KYC Form',
    formNameHi: 'पीएम किसान ई-केवाईसी फॉर्म',
    description: 'Mandatory KYC for PM Kisan beneficiaries.',
    descriptionHi: 'पीएम किसान लाभार्थियों के लिए अनिवार्य केवाईसी।',
    icon: UserCheck,
    guidelines: ['Aadhaar card', 'Mobile linked with Aadhaar', 'Biometric (if needed)'],
    guidelinesHi: ['आधार कार्ड', 'आधार से जुड़ा मोबाइल', 'बायोमेट्रिक (यदि आवश्यक हो)'],
    searchQuery: 'PM Kisan eKYC form pdf',
    guide: {
      purpose: {
        en: 'To verify the identity of beneficiaries to ensure the benefit reaches the right farmers.',
        hi: 'यह सुनिश्चित करने के लिए कि लाभ सही किसानों तक पहुंचे, लाभार्थियों की पहचान सत्यापित करना।'
      },
      eligibility: {
        en: 'All farmers registered under PM Kisan Samman Nidhi Yojana.',
        hi: 'पीएम किसान सम्मान निधि योजना के तहत पंजीकृत सभी किसान।'
      },
      documents: {
        en: ['Aadhaar Card', 'Mobile number linked with Aadhaar'],
        hi: ['आधार कार्ड', 'आधार से जुड़ा मोबाइल नंबर']
      },
      process: {
        en: '1. Visit PM Kisan portal or e-Mitra. 2. Enter Aadhaar number. 3. Complete OTP verification or Biometric authentication.',
        hi: '1. पीएम किसान पोर्टल या ई-मित्र पर जाएं। 2. आधार नंबर दर्ज करें। 3. ओटीपी सत्यापन या बायोमेट्रिक प्रमाणीकरण पूरा करें।'
      },
      tips: {
        en: 'e-KYC is mandatory to receive future installments of PM Kisan.',
        hi: 'पीएम किसान की भविष्य की किश्तें प्राप्त करने के लिए ई-केवाईसी अनिवार्य है।'
      }
    }
  },
  {
    id: 'pm-kisan-correction',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'PM Kisan',
    serviceNameHi: 'पीएम किसान',
    formName: 'Aadhaar Name Correction Form',
    formNameHi: 'आधार नाम सुधार फॉर्म',
    description: 'Correct name as per Aadhaar in PM Kisan records.',
    descriptionHi: 'पीएम किसान रिकॉर्ड में आधार के अनुसार नाम सुधारें।',
    icon: FileSignature,
    guidelines: ['Aadhaar card', 'Registration number', 'Mobile number'],
    guidelinesHi: ['आधार कार्ड', 'पंजीकरण संख्या', 'मोबाइल नंबर'],
    searchQuery: 'PM Kisan Aadhaar name correction form pdf'
  },
  {
    id: 'ujjwala-kyc',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'Ujjwala Yojana',
    serviceNameHi: 'उज्ज्वला योजना',
    formName: 'Ujjwala 2.0 KYC Form',
    formNameHi: 'उज्ज्वला 2.0 केवाईसी फॉर्म',
    description: 'KYC for new connection under Ujjwala 2.0.',
    descriptionHi: 'उज्ज्वला 2.0 के तहत नए कनेक्शन के लिए केवाईसी।',
    icon: UserCheck,
    guidelines: ['Aadhaar card', 'Ration card', 'Bank account'],
    guidelinesHi: ['आधार कार्ड', 'राशन कार्ड', 'बैंक खाता'],
    searchQuery: 'Ujjwala 2.0 KYC form pdf'
  },
  {
    id: 'pm-svanidhi-loan',
    category: 'Banking Services',
    categoryHi: 'बैंकिंग सेवाएं',
    serviceName: 'PM SVANidhi',
    serviceNameHi: 'पीएम स्वनिधि',
    formName: 'Street Vendor Loan Form',
    formNameHi: 'स्ट्रीट वेंडर ऋण फॉर्म',
    description: 'Working capital loan for street vendors.',
    descriptionHi: 'स्ट्रीट वेंडर्स के लिए कार्यशील पूंजी ऋण।',
    icon: Banknote,
    guidelines: ['Vending certificate', 'Aadhaar card', 'Mobile number'],
    guidelinesHi: ['वेंडिंग प्रमाणपत्र', 'आधार कार्ड', 'मोबाइल नंबर'],
    searchQuery: 'PM SVANidhi loan application form pdf'
  },
  {
    id: 'stand-up-india',
    category: 'Banking Services',
    categoryHi: 'बैंकिंग सेवाएं',
    serviceName: 'Stand Up India',
    serviceNameHi: 'स्टैंड अप इंडिया',
    formName: 'Stand Up India Loan Form',
    formNameHi: 'स्टैंड अप इंडिया ऋण फॉर्म',
    description: 'Loans for SC/ST and Women entrepreneurs.',
    descriptionHi: 'SC/ST और महिला उद्यमियों के लिए ऋण।',
    icon: TrendingUp,
    guidelines: ['Business project', 'Caste certificate (if SC/ST)', 'Identity proof'],
    guidelinesHi: ['बिजनेस प्रोजेक्ट', 'जाति प्रमाण पत्र (यदि SC/ST)', 'पहचान प्रमाण'],
    searchQuery: 'Stand Up India loan application form pdf'
  },
  {
    id: 'atal-pension',
    category: 'Banking Services',
    categoryHi: 'बैंकिंग सेवाएं',
    serviceName: 'Atal Pension Yojana',
    serviceNameHi: 'अटल पेंशन योजना',
    formName: 'APY Enrollment Form',
    formNameHi: 'APY नामांकन फॉर्म',
    description: 'Pension scheme for unorganized sector workers.',
    descriptionHi: 'असंगठित क्षेत्र के श्रमिकों के लिए पेंशन योजना।',
    icon: Heart,
    guidelines: ['Age 18-40', 'Bank account', 'Mobile number'],
    guidelinesHi: ['आयु 18-40', 'बैंक खाता', 'मोबाइल नंबर'],
    searchQuery: 'Atal Pension Yojana enrollment form pdf'
  },
  {
    id: 'pm-suraksha-bima',
    category: 'Banking Services',
    categoryHi: 'बैंकिंग सेवाएं',
    serviceName: 'PMSBY',
    serviceNameHi: 'PMSBY',
    formName: 'Accident Insurance Form',
    formNameHi: 'दुर्घटना बीमा फॉर्म',
    description: 'Accidental death and disability insurance at Rs. 20/year.',
    descriptionHi: '20 रुपये/वर्ष पर दुर्घटना मृत्यु और विकलांगता बीमा।',
    icon: Shield,
    guidelines: ['Bank account', 'Age 18-70', 'Consent form'],
    guidelinesHi: ['बैंक खाता', 'आयु 18-70', 'सहमति फॉर्म'],
    searchQuery: 'PM Suraksha Bima Yojana enrollment form pdf'
  },
  {
    id: 'pm-jeevan-jyoti',
    category: 'Banking Services',
    categoryHi: 'बैंकिंग सेवाएं',
    serviceName: 'PMJJBY',
    serviceNameHi: 'PMJJBY',
    formName: 'Life Insurance Form',
    formNameHi: 'जीवन बीमा फॉर्म',
    description: 'Life insurance cover of 2 Lakhs at Rs. 436/year.',
    descriptionHi: '436 रुपये/वर्ष पर 2 लाख का जीवन बीमा कवर।',
    icon: ShieldCheck,
    guidelines: ['Bank account', 'Age 18-50', 'Consent form'],
    guidelinesHi: ['बैंक खाता', 'आयु 18-50', 'सहमति फॉर्म'],
    searchQuery: 'PM Jeevan Jyoti Bima Yojana enrollment form pdf'
  },
  {
    id: 'sukanya-samriddhi',
    category: 'Banking Services',
    categoryHi: 'बैंकिंग सेवाएं',
    serviceName: 'Sukanya Samriddhi',
    serviceNameHi: 'सुकन्या समृद्धि',
    formName: 'SSY Account Opening Form',
    formNameHi: 'SSY खाता खोलने का फॉर्म',
    description: 'Savings scheme for girl child education and marriage.',
    descriptionHi: 'बालिका शिक्षा और विवाह के लिए बचत योजना।',
    icon: Baby,
    guidelines: ['Girl child < 10 years', 'Birth certificate', 'Parent ID'],
    guidelinesHi: ['बालिका < 10 वर्ष', 'जन्म प्रमाण पत्र', 'अभिभावक आईडी'],
    searchQuery: 'Sukanya Samriddhi account opening form pdf'
  },
  {
    id: 'kcc-farmer',
    category: 'Banking Services',
    categoryHi: 'बैंकिंग सेवाएं',
    serviceName: 'Kisan Credit Card',
    serviceNameHi: 'किसान क्रेडिट कार्ड',
    formName: 'KCC Application Form',
    formNameHi: 'KCC आवेदन फॉर्म',
    description: 'Credit support for farmers for cultivation and needs.',
    descriptionHi: 'खेती और जरूरतों के लिए किसानों के लिए ऋण सहायता।',
    icon: CreditCard,
    guidelines: ['Land records', 'Identity proof', 'Address proof'],
    guidelinesHi: ['भूमि रिकॉर्ड', 'पहचान प्रमाण', 'पते का प्रमाण'],
    searchQuery: 'Kisan Credit Card application form pdf'
  },
  {
    id: 'driving-license-new',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Driving License',
    serviceNameHi: 'ड्राइविंग लाइसेंस',
    formName: 'Learner/Permanent License Form',
    formNameHi: 'लर्नर/स्थायी लाइसेंस फॉर्म',
    description: 'Application for new driving license or learner license.',
    descriptionHi: 'नए ड्राइविंग लाइसेंस या लर्नर लाइसेंस के लिए आवेदन।',
    icon: Car,
    guidelines: ['Age proof', 'Address proof', 'Medical certificate'],
    guidelinesHi: ['आयु प्रमाण', 'पते का प्रमाण', 'मेडिकल प्रमाण पत्र'],
    searchQuery: 'Driving license application form 4 pdf',
    guide: {
      purpose: {
        en: 'To legally drive a motor vehicle on public roads.',
        hi: 'सार्वजनिक सड़कों पर कानूनी रूप से मोटर वाहन चलाने के लिए।'
      },
      eligibility: {
        en: 'Age 18+ for transport/non-transport, 16+ for gearless 2-wheelers.',
        hi: 'परिवहन/गैर-परिवहन के लिए आयु 18+, बिना गियर वाले 2-पहिया वाहनों के लिए 16+।'
      },
      documents: {
        en: ['Aadhaar Card', 'Birth Certificate', 'Medical Certificate (Form 1A)', 'Passport size photos'],
        hi: ['आधार कार्ड', 'जन्म प्रमाण पत्र', 'मेडिकल प्रमाण पत्र (फॉर्म 1A)', 'पासपोर्ट आकार के फोटो']
      },
      process: {
        en: '1. Apply online on Sarathi portal. 2. Pay fees. 3. Book slot for test. 4. Pass the driving test at RTO.',
        hi: '1. सारथी पोर्टल पर ऑनलाइन आवेदन करें। 2. शुल्क का भुगतान करें। 3. टेस्ट के लिए स्लॉट बुक करें। 4. आरटीओ में ड्राइविंग टेस्ट पास करें।'
      },
      tips: {
        en: 'Always carry your original documents for verification during the test.',
        hi: 'टेस्ट के दौरान सत्यापन के लिए हमेशा अपने मूल दस्तावेज साथ रखें।'
      }
    }
  },
  {
    id: 'vehicle-registration-rc',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Vehicle Registration',
    serviceNameHi: 'वाहन पंजीकरण',
    formName: 'Form 20 for New Registration',
    formNameHi: 'नए पंजीकरण के लिए फॉर्म 20',
    description: 'Registration of new motor vehicle with RTO.',
    descriptionHi: 'आरटीओ के साथ नए मोटर वाहन का पंजीकरण।',
    icon: Truck,
    guidelines: ['Sale certificate', 'Insurance', 'Roadworthiness'],
    guidelinesHi: ['बिक्री प्रमाण पत्र', 'बीमा', 'रोडवर्थिनेस'],
    searchQuery: 'New vehicle registration form 20 pdf',
    guide: {
      purpose: {
        en: 'To register a new vehicle and obtain a Registration Certificate (RC).',
        hi: 'नए वाहन को पंजीकृत करने और पंजीकरण प्रमाण पत्र (RC) प्राप्त करने के लिए।'
      },
      eligibility: {
        en: 'Owner of the new vehicle.',
        hi: 'नए वाहन का मालिक।'
      },
      documents: {
        en: ['Form 20', 'Sale Certificate (Form 21)', 'Insurance Policy', 'Address Proof'],
        hi: ['फॉर्म 20', 'बिक्री प्रमाण पत्र (फॉर्म 21)', 'बीमा पॉलिसी', 'पते का प्रमाण']
      },
      process: {
        en: '1. Submit application at RTO. 2. Vehicle inspection by RTO officer. 3. Pay registration fees and taxes. 4. Receive RC.',
        hi: '1. आरटीओ में आवेदन जमा करें। 2. आरटीओ अधिकारी द्वारा वाहन निरीक्षण। 3. पंजीकरण शुल्क और करों का भुगतान करें। 4. आरसी प्राप्त करें।'
      },
      tips: {
        en: 'Ensure the engine and chassis numbers match the documents.',
        hi: 'सुनिश्चित करें कि इंजन और चेसिस नंबर दस्तावेजों से मेल खाते हैं।'
      }
    }
  },
  {
    id: 'land-jamabandi',
    category: 'Land and Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Jamabandi (Land Record)',
    serviceNameHi: 'जमाबंदी (भूमि रिकॉर्ड)',
    formName: 'Copy of Record of Rights (ROR)',
    formNameHi: 'अधिकारों के रिकॉर्ड (ROR) की प्रति',
    description: 'Official document showing ownership of land.',
    descriptionHi: 'भूमि के स्वामित्व को दर्शाने वाला आधिकारिक दस्तावेज।',
    icon: Map,
    guidelines: ['Khasra number', 'Owner name', 'Village name'],
    guidelinesHi: ['खसरा नंबर', 'मालिक का नाम', 'गांव का नाम'],
    searchQuery: 'Rajasthan Jamabandi nakal online form',
    guide: {
      purpose: {
        en: 'To verify ownership and details of agricultural or residential land.',
        hi: 'कृषि या आवासीय भूमि के स्वामित्व और विवरण को सत्यापित करने के लिए।'
      },
      eligibility: {
        en: 'Land owner or interested party.',
        hi: 'भूमि मालिक या इच्छुक पार्टी।'
      },
      documents: {
        en: ['Old Jamabandi copy (optional)', 'Aadhaar Card', 'Khasra/Khata Number'],
        hi: ['पुरानी जमाबंदी प्रति (वैकल्पिक)', 'आधार कार्ड', 'खसरा/खाता संख्या']
      },
      process: {
        en: '1. Visit Apna Khata portal or e-Mitra. 2. Select District, Tehsil, and Village. 3. Enter Khasra/Khata number. 4. Download/Print Jamabandi.',
        hi: '1. अपना खाता पोर्टल या ई-मित्र पर जाएं। 2. जिला, तहसील और गांव का चयन करें। 3. खसरा/खाता संख्या दर्ज करें। 4. जमाबंदी डाउनलोड/प्रिंट करें।'
      },
      tips: {
        en: 'Digitally signed Jamabandi is valid for all legal purposes.',
        hi: 'डिजिटल रूप से हस्ताक्षरित जमाबंदी सभी कानूनी उद्देश्यों के लिए मान्य है।'
      }
    }
  },
  {
    id: 'land-mutation-namantaran',
    category: 'Land and Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Mutation (Namantaran)',
    serviceNameHi: 'नामांतरण',
    formName: 'Application for Mutation of Land',
    formNameHi: 'भूमि के नामांतरण के लिए आवेदन',
    description: 'Transfer of land ownership in government records.',
    descriptionHi: 'सरकारी रिकॉर्ड में भूमि स्वामित्व का हस्तांतरण।',
    icon: FileSignature,
    guidelines: ['Registry copy', 'Death certificate (if inheritance)', 'Identity proof'],
    guidelinesHi: ['रजिस्ट्री प्रति', 'मृत्यु प्रमाण पत्र (यदि विरासत है)', 'पहचान प्रमाण'],
    searchQuery: 'Land mutation application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To update the revenue records after sale, gift, or inheritance of land.',
        hi: 'भूमि की बिक्री, उपहार या विरासत के बाद राजस्व रिकॉर्ड को अपडेट करने के लिए।'
      },
      eligibility: {
        en: 'New owner of the land.',
        hi: 'भूमि का नया मालिक।'
      },
      documents: {
        en: ['Sale Deed/Registry', 'Aadhaar Card', 'Old Jamabandi', 'Death Certificate (for inheritance cases)'],
        hi: ['बिक्री विलेख/रजिस्ट्री', 'आधार कार्ड', 'पुरानी जमाबंदी', 'मृत्यु प्रमाण पत्र (विरासत के मामलों के लिए)']
      },
      process: {
        en: '1. Apply online on Apna Khata or visit Tehsil office. 2. Submit documents to Patwari. 3. Verification by Patwari and Tehsildar. 4. Record update.',
        hi: '1. अपना खाता पर ऑनलाइन आवेदन करें या तहसील कार्यालय जाएं। 2. पटवारी को दस्तावेज जमा करें। 3. पटवारी और तहसीलदार द्वारा सत्यापन। 4. रिकॉर्ड अपडेट।'
      },
      tips: {
        en: 'Always check the status of mutation after 30-45 days of application.',
        hi: 'आवेदन के 30-45 दिनों के बाद हमेशा नामांतरण की स्थिति की जांच करें।'
      }
    }
  },
  {
    id: 'police-character-certificate',
    category: 'Police Verification Forms',
    categoryHi: 'पुलिस सत्यापन फॉर्म',
    serviceName: 'Character Certificate',
    serviceNameHi: 'चरित्र प्रमाण पत्र',
    formName: 'Police Verification Form',
    formNameHi: 'पुलिस सत्यापन फॉर्म',
    description: 'Verification of criminal record for jobs or visa.',
    descriptionHi: 'नौकरी या वीजा के लिए आपराधिक रिकॉर्ड का सत्यापन।',
    icon: Police,
    guidelines: ['Aadhaar card', 'Photo', 'Address proof'],
    guidelinesHi: ['आधार कार्ड', 'फोटो', 'पते का प्रमाण'],
    searchQuery: 'Rajasthan Police character certificate form online',
    guide: {
      purpose: {
        en: 'To certify that a person has no criminal record.',
        hi: 'यह प्रमाणित करने के लिए कि व्यक्ति का कोई आपराधिक रिकॉर्ड नहीं है।'
      },
      eligibility: {
        en: 'Any citizen requiring verification for employment or other purposes.',
        hi: 'रोजगार या अन्य उद्देश्यों के लिए सत्यापन की आवश्यकता वाला कोई भी नागरिक।'
      },
      documents: {
        en: ['Aadhaar Card', 'Passport size photo', 'Address Proof (Voter ID/Electricity Bill)'],
        hi: ['आधार कार्ड', 'पासपोर्ट आकार का फोटो', 'पते का प्रमाण (वोटर आईडी/बिजली बिल)']
      },
      process: {
        en: '1. Apply online on Rajasthan Police portal or e-Mitra. 2. Pay fees. 3. Police station visit for verification. 4. Download certificate online.',
        hi: '1. राजस्थान पुलिस पोर्टल या ई-मित्र पर ऑनलाइन आवेदन करें। 2. शुल्क का भुगतान करें। 3. सत्यापन के लिए पुलिस स्टेशन का दौरा। 4. प्रमाण पत्र ऑनलाइन डाउनलोड करें।'
      },
      tips: {
        en: 'Ensure your current address matches your identity documents.',
        hi: 'सुनिश्चित करें कि आपका वर्तमान पता आपके पहचान दस्तावेजों से मेल खाता है।'
      }
    }
  },
  {
    id: 'pm-kisan-registration',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'PM Kisan',
    serviceNameHi: 'पीएम किसान',
    formName: 'Farmer Registration Form',
    formNameHi: 'किसान पंजीकरण फॉर्म',
    description: 'Income support of Rs. 6000/year for farmers.',
    descriptionHi: 'किसानों के लिए 6000 रुपये/वर्ष की आय सहायता।',
    icon: Sprout,
    guidelines: ['Land records', 'Bank account', 'Aadhaar card'],
    guidelinesHi: ['भूमि रिकॉर्ड', 'बैंक खाता', 'आधार कार्ड'],
    searchQuery: 'PM Kisan Samman Nidhi registration form pdf',
    guide: {
      purpose: {
        en: 'To provide financial assistance to small and marginal farmers.',
        hi: 'छोटे और सीमांत किसानों को वित्तीय सहायता प्रदान करने के लिए।'
      },
      eligibility: {
        en: 'Farmers with cultivable land in their name.',
        hi: 'जिनके नाम पर कृषि योग्य भूमि है, वे किसान।'
      },
      documents: {
        en: ['Aadhaar Card', 'Land Holding Documents (Jamabandi)', 'Bank Passbook', 'Mobile Number'],
        hi: ['आधार कार्ड', 'भूमि धारण दस्तावेज (जमाबंदी)', 'बैंक पासबुक', 'मोबाइल नंबर']
      },
      process: {
        en: '1. Register on PM-Kisan portal or visit e-Mitra. 2. Fill farmer details and land info. 3. Submit for verification by district authorities.',
        hi: '1. पीएम-किसान पोर्टल पर पंजीकरण करें या ई-मित्र पर जाएं। 2. किसान विवरण और भूमि की जानकारी भरें। 3. जिला अधिकारियों द्वारा सत्यापन के लिए जमा करें।'
      },
      tips: {
        en: 'Ensure your Aadhaar is linked with your bank account for DBT.',
        hi: 'डीबीटी के लिए सुनिश्चित करें कि आपका आधार आपके बैंक खाते से जुड़ा हुआ है।'
      }
    }
  },
  {
    id: 'mnrega-job-card',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'MNREGA Job Card',
    serviceNameHi: 'मनरेगा जॉब कार्ड',
    formName: 'Job Card Application Form',
    formNameHi: 'जॉब कार्ड आवेदन फॉर्म',
    description: '100 days of guaranteed wage employment in a year.',
    descriptionHi: 'एक वर्ष में 100 दिनों के गारंटीकृत मजदूरी रोजगार।',
    icon: HardHat,
    guidelines: ['Aadhaar card', 'Bank account', 'Family photo'],
    guidelinesHi: ['आधार कार्ड', 'बैंक खाता', 'पारिवारिक फोटो'],
    searchQuery: 'NREGA job card application form pdf',
    guide: {
      purpose: {
        en: 'To provide a legal guarantee for at least 100 days of employment to every rural household.',
        hi: 'प्रत्येक ग्रामीण परिवार को कम से कम 100 दिनों के रोजगार की कानूनी गारंटी प्रदान करना।'
      },
      eligibility: {
        en: 'Adult members of rural households willing to do unskilled manual work.',
        hi: 'अकुशल शारीरिक कार्य करने के इच्छुक ग्रामीण परिवारों के वयस्क सदस्य।'
      },
      documents: {
        en: ['Aadhaar Card', 'Bank Passbook', 'Ration Card', 'Passport size photo'],
        hi: ['आधार कार्ड', 'बैंक पासबुक', 'राशन कार्ड', 'पासपोर्ट आकार का फोटो']
      },
      process: {
        en: '1. Submit application to Gram Panchayat. 2. Verification of details. 3. Issuance of Job Card within 15 days.',
        hi: '1. ग्राम पंचायत को आवेदन जमा करें। 2. विवरण का सत्यापन। 3. 15 दिनों के भीतर जॉब कार्ड जारी करना।'
      },
      tips: {
        en: 'Keep your job card updated with the number of days worked.',
        hi: 'काम किए गए दिनों की संख्या के साथ अपना जॉब कार्ड अपडेट रखें।'
      }
    }
  },
  {
    id: 'ration-card-new',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'Ration Card',
    serviceNameHi: 'राशन कार्ड',
    formName: 'New Ration Card Application',
    formNameHi: 'नया राशन कार्ड आवेदन',
    description: 'Document for food security and identity.',
    descriptionHi: 'खाद्य सुरक्षा और पहचान के लिए दस्तावेज।',
    icon: CookingPot,
    guidelines: ['Family photo', 'Aadhaar cards', 'Address proof'],
    guidelinesHi: ['पारिवारिक फोटो', 'आधार कार्ड', 'पते का प्रमाण'],
    searchQuery: 'Rajasthan new ration card application form pdf',
    guide: {
      purpose: {
        en: 'To obtain subsidized food grains and as a proof of identity/address.',
        hi: 'रियायती खाद्यान्न प्राप्त करने के लिए और पहचान/पते के प्रमाण के रूप में।'
      },
      eligibility: {
        en: 'Head of the family (preferably female) and all family members.',
        hi: 'परिवार का मुखिया (अधिमानतः महिला) और परिवार के सभी सदस्य।'
      },
      documents: {
        en: ['Aadhaar Cards of all members', 'Family Group Photo', 'Address Proof', 'Income Certificate'],
        hi: ['सभी सदस्यों के आधार कार्ड', 'फैमिली ग्रुप फोटो', 'पते का प्रमाण', 'आय प्रमाण पत्र']
      },
      process: {
        en: '1. Apply online via e-Mitra. 2. Field verification by Food Department. 3. Approval by District Supply Officer. 4. Collect card from e-Mitra.',
        hi: '1. ई-मित्र के माध्यम से ऑनलाइन आवेदन करें। 2. खाद्य विभाग द्वारा फील्ड सत्यापन। 3. जिला रसद अधिकारी द्वारा अनुमोदन। 4. ई-मित्र से कार्ड प्राप्त करें।'
      },
      tips: {
        en: 'Ensure all family members have their Aadhaar linked to avoid issues.',
        hi: 'समस्याओं से बचने के लिए सुनिश्चित करें कि सभी परिवार के सदस्यों का आधार लिंक है।'
      }
    }
  },
  {
    id: 'voter-id-new',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'Voter ID',
    serviceNameHi: 'वोटर आईडी',
    formName: 'Form 6 for New Voter',
    formNameHi: 'नए मतदाता के लिए फॉर्म 6',
    description: 'Registration as a voter in electoral rolls.',
    descriptionHi: 'निर्वाचक नामावली में मतदाता के रूप में पंजीकरण।',
    icon: UserCheck,
    guidelines: ['Age 18+', 'Photo', 'Address proof'],
    guidelinesHi: ['आयु 18+', 'फोटो', 'पते का प्रमाण'],
    searchQuery: 'Voter ID form 6 download pdf',
    guide: {
      purpose: {
        en: 'To register as a voter and obtain an Electors Photo Identity Card (EPIC).',
        hi: 'मतदाता के रूप में पंजीकरण करने और निर्वाचक फोटो पहचान पत्र (EPIC) प्राप्त करने के लिए।'
      },
      eligibility: {
        en: 'Indian citizen, aged 18 years or above on the qualifying date.',
        hi: 'भारतीय नागरिक, योग्यता तिथि पर 18 वर्ष या उससे अधिक आयु का।'
      },
      documents: {
        en: ['Passport size photo', 'Age Proof (Birth Certificate/10th Marksheet)', 'Address Proof'],
        hi: ['पासपोर्ट आकार का फोटो', 'आयु प्रमाण (जन्म प्रमाण पत्र/10वीं की मार्कशीट)', 'पते का प्रमाण']
      },
      process: {
        en: '1. Apply online on NVSP portal or Voter Helpline App. 2. Verification by Booth Level Officer (BLO). 3. Approval by ERO. 4. Receive EPIC by post.',
        hi: '1. NVSP पोर्टल या वोटर हेल्पलाइन ऐप पर ऑनलाइन आवेदन करें। 2. बूथ स्तर के अधिकारी (BLO) द्वारा सत्यापन। 3. ERO द्वारा अनुमोदन। 4. डाक द्वारा EPIC प्राप्त करें।'
      },
      tips: {
        en: 'You can track your application status online using the reference ID.',
        hi: 'आप संदर्भ आईडी का उपयोग करके अपने आवेदन की स्थिति को ऑनलाइन ट्रैक कर सकते हैं।'
      }
    }
  },
  {
    id: 'marriage-certificate-reg',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Marriage Certificate',
    serviceNameHi: 'विवाह प्रमाण पत्र',
    formName: 'Marriage Registration Form',
    formNameHi: 'विवाह पंजीकरण फॉर्म',
    description: 'Legal proof of marriage registration.',
    descriptionHi: 'विवाह पंजीकरण का कानूनी प्रमाण।',
    icon: Heart,
    guidelines: ['Wedding card', 'Photos', 'Witnesses'],
    guidelinesHi: ['शादी का कार्ड', 'फोटो', 'गवाह'],
    searchQuery: 'Rajasthan marriage registration form pdf',
    guide: {
      purpose: {
        en: 'To legally register a marriage and obtain a certificate.',
        hi: 'विवाह को कानूनी रूप से पंजीकृत करने और प्रमाण पत्र प्राप्त करने के लिए।'
      },
      eligibility: {
        en: 'Groom (21+) and Bride (18+).',
        hi: 'दूल्हा (21+) और दुल्हन (18+)।'
      },
      documents: {
        en: ['Wedding Invitation Card', 'Marriage Photos', 'Aadhaar Cards of Couple', 'Aadhaar Cards of 2 Witnesses'],
        hi: ['शादी का निमंत्रण कार्ड', 'शादी के फोटो', 'दंपति के आधार कार्ड', '2 गवाहों के आधार कार्ड']
      },
      process: {
        en: '1. Apply online on Pehchan portal. 2. Visit Registrar office with witnesses. 3. Verification of documents. 4. Issuance of certificate.',
        hi: '1. पहचान पोर्टल पर ऑनलाइन आवेदन करें। 2. गवाहों के साथ रजिस्ट्रार कार्यालय जाएं। 3. दस्तावेजों का सत्यापन। 4. प्रमाण पत्र जारी करना।'
      },
      tips: {
        en: 'Marriage registration is mandatory for visa and joint bank accounts.',
        hi: 'वीजा और संयुक्त बैंक खातों के लिए विवाह पंजीकरण अनिवार्य है।'
      }
    }
  },
  {
    id: 'ews-certificate-income',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'EWS Certificate',
    serviceNameHi: 'EWS प्रमाण पत्र',
    formName: 'Economically Weaker Section Form',
    formNameHi: 'आर्थिक रूप से कमजोर वर्ग फॉर्म',
    description: '10% reservation for general category students/candidates.',
    descriptionHi: 'सामान्य श्रेणी के छात्रों/उम्मीदवारों के लिए 10% आरक्षण।',
    icon: Wallet,
    guidelines: ['Income proof', 'Asset details', 'Caste proof'],
    guidelinesHi: ['आय प्रमाण', 'संपत्ति विवरण', 'जाति प्रमाण'],
    searchQuery: 'EWS certificate application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To avail 10% reservation in government jobs and educational institutions.',
        hi: 'सरकारी नौकरियों और शैक्षणिक संस्थानों में 10% आरक्षण का लाभ उठाने के लिए।'
      },
      eligibility: {
        en: 'General category candidates with family income below 8 Lakhs/year.',
        hi: '8 लाख/वर्ष से कम पारिवारिक आय वाले सामान्य श्रेणी के उम्मीदवार।'
      },
      documents: {
        en: ['Income Certificate', 'Aadhaar Card', 'Bhamashah/Jan Aadhaar', 'Land/Property Documents'],
        hi: ['आय प्रमाण पत्र', 'आधार कार्ड', 'भामाशाह/जन आधार', 'भूमि/संपत्ति दस्तावेज']
      },
      process: {
        en: '1. Apply via e-Mitra. 2. Verification by Patwari and Tehsildar. 3. Issuance of certificate.',
        hi: '1. ई-मित्र के माध्यम से आवेदन करें। 2. पटवारी और तहसीलदार द्वारा सत्यापन। 3. प्रमाण पत्र जारी करना।'
      },
      tips: {
        en: 'EWS certificate is usually valid for one financial year.',
        hi: 'EWS प्रमाण पत्र आमतौर पर एक वित्तीय वर्ष के लिए मान्य होता है।'
      }
    }
  },
  {
    id: 'pension-old-age',
    category: 'Pension Forms',
    categoryHi: 'पेंशन फॉर्म',
    serviceName: 'Old Age Pension',
    serviceNameHi: 'वृद्धावस्था पेंशन',
    formName: 'Social Security Pension Form',
    formNameHi: 'सामाजिक सुरक्षा पेंशन फॉर्म',
    description: 'Monthly financial aid for senior citizens.',
    descriptionHi: 'वरिष्ठ नागरिकों के लिए मासिक वित्तीय सहायता।',
    icon: UserCircle,
    guidelines: ['Age 58+(F)/60+(M)', 'Income limit', 'Bank account'],
    guidelinesHi: ['आयु 58+(F)/60+(M)', 'आय सीमा', 'बैंक खाता'],
    searchQuery: 'Rajasthan old age pension form pdf',
    guide: {
      purpose: {
        en: 'To provide monthly financial support to elderly citizens.',
        hi: 'बुजुर्ग नागरिकों को मासिक वित्तीय सहायता प्रदान करने के लिए।'
      },
      eligibility: {
        en: 'Women aged 55+ and Men aged 58+ with low family income.',
        hi: 'कम पारिवारिक आय वाली 55+ वर्ष की महिलाएं और 58+ वर्ष के पुरुष।'
      },
      documents: {
        en: ['Jan Aadhaar Card', 'Aadhaar Card', 'Bank Passbook', 'Income Certificate'],
        hi: ['जन आधार कार्ड', 'आधार कार्ड', 'बैंक पासबुक', 'आय प्रमाण पत्र']
      },
      process: {
        en: '1. Apply online via RajSSP portal or e-Mitra. 2. Verification by SDO/BDO. 3. Monthly pension credited to bank account.',
        hi: '1. RajSSP पोर्टल या ई-मित्र के माध्यम से ऑनलाइन आवेदन करें। 2. SDO/BDO द्वारा सत्यापन। 3. बैंक खाते में जमा मासिक पेंशन।'
      },
      tips: {
        en: 'Annual physical verification is required to continue receiving pension.',
        hi: 'पेंशन प्राप्त करना जारी रखने के लिए वार्षिक भौतिक सत्यापन आवश्यक है।'
      }
    }
  },
  {
    id: 'scholarship-post-matric',
    category: 'Scholarship Forms',
    categoryHi: 'छात्रवृत्ति फॉर्म',
    serviceName: 'Post-Matric Scholarship',
    serviceNameHi: 'उत्तर मैट्रिक छात्रवृत्ति',
    formName: 'Scholarship Form for SC/ST/OBC',
    formNameHi: 'SC/ST/OBC के लिए छात्रवृत्ति फॉर्म',
    description: 'Financial aid for students in higher education.',
    descriptionHi: 'उच्च शिक्षा में छात्रों के लिए वित्तीय सहायता।',
    icon: GraduationCap,
    guidelines: ['Caste certificate', 'Income certificate', 'Last year marksheet'],
    guidelinesHi: ['जाति प्रमाण पत्र', 'आय प्रमाण पत्र', 'पिछले वर्ष की मार्कशीट'],
    searchQuery: 'Rajasthan post matric scholarship form pdf',
    guide: {
      purpose: {
        en: 'To provide financial assistance to students belonging to reserved categories for pursuing higher studies.',
        hi: 'आरक्षित श्रेणियों के छात्रों को उच्च शिक्षा प्राप्त करने के लिए वित्तीय सहायता प्रदान करना।'
      },
      eligibility: {
        en: 'Students of SC/ST/OBC/SBC categories with family income below specified limits.',
        hi: 'निर्धारित सीमा से कम पारिवारिक आय वाले SC/ST/OBC/SBC श्रेणियों के छात्र।'
      },
      documents: {
        en: ['Caste Certificate', 'Income Certificate', 'Last Year Marksheet', 'Fees Receipt', 'Jan Aadhaar Card'],
        hi: ['जाति प्रमाण पत्र', 'आय प्रमाण पत्र', 'पिछले वर्ष की मार्कशीट', 'फीस रसीद', 'जन आधार कार्ड']
      },
      process: {
        en: '1. Apply online on SJMS portal or e-Mitra. 2. Verification by Institute. 3. Approval by District Office. 4. Scholarship credited to bank account.',
        hi: '1. SJMS पोर्टल या ई-मित्र पर ऑनलाइन आवेदन करें। 2. संस्थान द्वारा सत्यापन। 3. जिला कार्यालय द्वारा अनुमोदन। 4. बैंक खाते में जमा छात्रवृत्ति।'
      },
      tips: {
        en: 'Ensure your bank account is active and linked with Aadhaar for DBT.',
        hi: 'डीबीटी के लिए सुनिश्चित करें कि आपका बैंक खाता सक्रिय है और आधार से जुड़ा हुआ है।'
      }
    }
  },
  {
    id: 'rte-admission-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'RTE Admission',
    serviceNameHi: 'RTE प्रवेश',
    formName: 'Free Admission in Private Schools',
    formNameHi: 'निजी स्कूलों में मुफ्त प्रवेश',
    description: '25% reservation for poor students in private schools.',
    descriptionHi: 'निजी स्कूलों में गरीब छात्रों के लिए 25% आरक्षण।',
    icon: School,
    guidelines: ['Income certificate', 'Age proof', 'Address proof'],
    guidelinesHi: ['आय प्रमाण पत्र', 'आयु प्रमाण', 'पते का प्रमाण'],
    searchQuery: 'Rajasthan RTE admission form online',
    guide: {
      purpose: {
        en: 'To provide free education to children from weaker sections in private schools.',
        hi: 'निजी स्कूलों में कमजोर वर्गों के बच्चों को मुफ्त शिक्षा प्रदान करना।'
      },
      eligibility: {
        en: 'Children from families with annual income below 2.5 Lakhs.',
        hi: '2.5 लाख से कम वार्षिक आय वाले परिवारों के बच्चे।'
      },
      documents: {
        en: ['Birth Certificate', 'Income Certificate', 'Address Proof (Ration Card/Aadhaar)', 'Caste Certificate (if applicable)'],
        hi: ['जन्म प्रमाण पत्र', 'आय प्रमाण पत्र', 'पते का प्रमाण (राशन कार्ड/आधार)', 'जाति प्रमाण पत्र (यदि लागू हो)']
      },
      process: {
        en: '1. Apply online on RTE portal. 2. Select schools in your neighborhood. 3. Lottery system for selection. 4. Admission in selected school.',
        hi: '1. RTE पोर्टल पर ऑनलाइन आवेदन करें। 2. अपने पड़ोस के स्कूलों का चयन करें। 3. चयन के लिए लॉटरी प्रणाली। 4. चयनित स्कूल में प्रवेश।'
      },
      tips: {
        en: 'Apply to multiple schools in your area to increase chances of selection.',
        hi: 'चयन की संभावना बढ़ाने के लिए अपने क्षेत्र के कई स्कूलों में आवेदन करें।'
      }
    }
  },
  {
    id: 'bonafide-certificate-mool',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Bonafide Certificate',
    serviceNameHi: 'मूल निवास प्रमाण पत्र',
    formName: 'Domicile Certificate Form',
    formNameHi: 'मूल निवास प्रमाण पत्र फॉर्म',
    description: 'Proof of permanent residence in Rajasthan.',
    descriptionHi: 'राजस्थान में स्थायी निवास का प्रमाण।',
    icon: MapPin,
    guidelines: ['10 years residence', 'Aadhaar card', 'Jan Aadhaar'],
    guidelinesHi: ['10 साल का निवास', 'आधार कार्ड', 'जन आधार'],
    searchQuery: 'Rajasthan bonafide certificate application form pdf',
    guide: {
      purpose: {
        en: 'To prove that a person is a permanent resident of the state.',
        hi: 'यह साबित करने के लिए कि व्यक्ति राज्य का स्थायी निवासी है।'
      },
      eligibility: {
        en: 'Persons residing in Rajasthan for at least 10 years.',
        hi: 'कम से कम 10 वर्षों से राजस्थान में रहने वाले व्यक्ति।'
      },
      documents: {
        en: ['Aadhaar Card', 'Jan Aadhaar Card', 'Voter ID/Ration Card', 'School Marksheets/Birth Certificate'],
        hi: ['आधार कार्ड', 'जन आधार कार्ड', 'वोटर आईडी/राशन कार्ड', 'स्कूल की मार्कशीट/जन्म प्रमाण पत्र']
      },
      process: {
        en: '1. Apply via e-Mitra. 2. Verification by Patwari and Tehsildar. 3. Digitally signed certificate issued.',
        hi: '1. ई-मित्र के माध्यम से आवेदन करें। 2. पटवारी और तहसीलदार द्वारा सत्यापन। 3. डिजिटल रूप से हस्ताक्षरित प्रमाण पत्र जारी।'
      },
      tips: {
        en: 'This certificate is essential for state government jobs and scholarships.',
        hi: 'यह प्रमाण पत्र राज्य सरकार की नौकरियों और छात्रवृत्तियों के लिए आवश्यक है।'
      }
    }
  },
  {
    id: 'pan-card-new-form',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'PAN Card',
    serviceNameHi: 'पैन कार्ड',
    formName: 'Form 49A for New PAN',
    formNameHi: 'नए पैन के लिए फॉर्म 49A',
    description: 'Permanent Account Number for financial transactions.',
    descriptionHi: 'वित्तीय लेनदेन के लिए स्थायी खाता संख्या।',
    icon: CreditCard,
    guidelines: ['Aadhaar card', 'Photo', 'Signature'],
    guidelinesHi: ['आधार कार्ड', 'फोटो', 'हस्ताक्षर'],
    searchQuery: 'PAN card form 49A download pdf',
    guide: {
      purpose: {
        en: 'To obtain a unique 10-digit alphanumeric identity for tax and financial purposes.',
        hi: 'कर और वित्तीय उद्देश्यों के लिए एक अद्वितीय 10-अंकीय अल्फ़ान्यूमेरिक पहचान प्राप्त करने के लिए।'
      },
      eligibility: {
        en: 'Any individual, company, or entity.',
        hi: 'कोई भी व्यक्ति, कंपनी या संस्था।'
      },
      documents: {
        en: ['Aadhaar Card (as proof of ID, address, and DOB)', 'Two Passport size photos'],
        hi: ['आधार कार्ड (आईडी, पते और जन्मतिथि के प्रमाण के रूप में)', 'दो पासपोर्ट आकार के फोटो']
      },
      process: {
        en: '1. Apply online on NSDL or UTIITSL portal. 2. Fill Form 49A. 3. Pay fees. 4. Submit documents physically or via e-KYC.',
        hi: '1. NSDL या UTIITSL पोर्टल पर ऑनलाइन आवेदन करें। 2. फॉर्म 49A भरें। 3. शुल्क का भुगतान करें। 4. दस्तावेज भौतिक रूप से या ई-केवाईसी के माध्यम से जमा करें।'
      },
      tips: {
        en: 'E-PAN can be generated instantly using Aadhaar-based e-KYC.',
        hi: 'आधार-आधारित ई-केवाईसी का उपयोग करके ई-पैन तुरंत उत्पन्न किया जा सकता है।'
      }
    }
  },
  {
    id: 'passport-application-fresh',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'Passport',
    serviceNameHi: 'पासपोर्ट',
    formName: 'Fresh Passport Application',
    formNameHi: 'नया पासपोर्ट आवेदन',
    description: 'Travel document for international travel.',
    descriptionHi: 'अंतरराष्ट्रीय यात्रा के लिए यात्रा दस्तावेज।',
    icon: Globe,
    guidelines: ['Address proof', 'DOB proof', 'Non-ECR proof'],
    guidelinesHi: ['पते का प्रमाण', 'जन्मतिथि प्रमाण', 'गैर-ईसीआर प्रमाण'],
    searchQuery: 'Passport application form download pdf',
    guide: {
      purpose: {
        en: 'To obtain a travel document issued by the government for traveling abroad.',
        hi: 'विदेश यात्रा के लिए सरकार द्वारा जारी यात्रा दस्तावेज प्राप्त करने के लिए।'
      },
      eligibility: {
        en: 'Indian citizens.',
        hi: 'भारतीय नागरिक।'
      },
      documents: {
        en: ['Aadhaar Card', 'Voter ID/Electricity Bill', '10th Marksheet (for Non-ECR)', 'Birth Certificate'],
        hi: ['आधार कार्ड', 'वोटर आईडी/बिजली बिल', '10वीं की मार्कशीट (गैर-ईसीआर के लिए)', 'जन्म प्रमाण पत्र']
      },
      process: {
        en: '1. Register on Passport Seva portal. 2. Fill application form. 3. Pay fees and book appointment. 4. Visit Passport Seva Kendra (PSK) for verification. 5. Police verification.',
        hi: '1. पासपोर्ट सेवा पोर्टल पर पंजीकरण करें। 2. आवेदन पत्र भरें। 3. शुल्क का भुगतान करें और अपॉइंटमेंट बुक करें। 4. सत्यापन के लिए पासपोर्ट सेवा केंद्र (PSK) पर जाएं। 5. पुलिस सत्यापन।'
      },
      tips: {
        en: 'Ensure all details in your application match your supporting documents exactly.',
        hi: 'सुनिश्चित करें कि आपके आवेदन के सभी विवरण आपके सहायक दस्तावेजों से बिल्कुल मेल खाते हैं।'
      }
    }
  },
  {
    id: 'aadhaar-correction-form',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'Aadhaar Correction',
    serviceNameHi: 'आधार सुधार',
    formName: 'Aadhaar Enrollment/Update Form',
    formNameHi: 'आधार नामांकन/अपडेट फॉर्म',
    description: 'Update name, address, DOB, or mobile in Aadhaar.',
    descriptionHi: 'आधार में नाम, पता, जन्मतिथि या मोबाइल अपडेट करें।',
    icon: UserCircle,
    guidelines: ['Proof of Identity', 'Proof of Address', 'Mobile number'],
    guidelinesHi: ['पहचान का प्रमाण', 'पते का प्रमाण', 'मोबाइल नंबर'],
    searchQuery: 'Aadhaar update form download pdf',
    guide: {
      purpose: {
        en: 'To correct or update personal information in the Aadhaar database.',
        hi: 'आधार डेटाबेस में व्यक्तिगत जानकारी को सुधारने या अपडेट करने के लिए।'
      },
      eligibility: {
        en: 'Any Aadhaar holder.',
        hi: 'कोई भी आधार धारक।'
      },
      documents: {
        en: ['Valid ID Proof (for Name/DOB change)', 'Valid Address Proof (for Address change)', 'Mobile Number (for linking)'],
        hi: ['वैध आईडी प्रमाण (नाम/जन्मतिथि परिवर्तन के लिए)', 'वैध पता प्रमाण (पता परिवर्तन के लिए)', 'मोबाइल नंबर (लिंकिंग के लिए)']
      },
      process: {
        en: '1. Download form or get from Aadhaar center. 2. Fill details to be updated. 3. Visit Aadhaar Seva Kendra with documents. 4. Biometric verification.',
        hi: '1. फॉर्म डाउनलोड करें या आधार केंद्र से प्राप्त करें। 2. अपडेट किए जाने वाले विवरण भरें। 3. दस्तावेजों के साथ आधार सेवा केंद्र पर जाएं। 4. बायोमेट्रिक सत्यापन।'
      },
      tips: {
        en: 'Address can be updated online if your mobile number is linked with Aadhaar.',
        hi: 'यदि आपका मोबाइल नंबर आधार से जुड़ा है तो पता ऑनलाइन अपडेट किया जा सकता है।'
      }
    }
  },
  {
    id: 'caste-certificate-sc-st',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Caste Certificate (SC/ST)',
    serviceNameHi: 'जाति प्रमाण पत्र (SC/ST)',
    formName: 'SC/ST Certificate Application',
    formNameHi: 'SC/ST प्रमाण पत्र आवेदन',
    description: 'Proof of belonging to SC or ST category.',
    descriptionHi: 'SC या ST श्रेणी से संबंधित होने का प्रमाण।',
    icon: FileBadge,
    guidelines: ['Father caste proof', 'Aadhaar card', 'Address proof'],
    guidelinesHi: ['पिता की जाति का प्रमाण', 'आधार कार्ड', 'पते का प्रमाण'],
    searchQuery: 'Rajasthan SC ST caste certificate form pdf',
    guide: {
      purpose: {
        en: 'To avail benefits of reservation in education and jobs for SC/ST categories.',
        hi: 'SC/ST श्रेणियों के लिए शिक्षा और नौकरियों में आरक्षण का लाभ उठाने के लिए।'
      },
      eligibility: {
        en: 'Persons belonging to SC or ST communities in Rajasthan.',
        hi: 'राजस्थान में SC या ST समुदायों से संबंधित व्यक्ति।'
      },
      documents: {
        en: ['Father/Sibling Caste Certificate', 'Aadhaar Card', 'Ration Card', 'School Certificate'],
        hi: ['पिता/भाई-बहन का जाति प्रमाण पत्र', 'आधार कार्ड', 'राशन कार्ड', 'स्कूल प्रमाण पत्र']
      },
      process: {
        en: '1. Apply via e-Mitra. 2. Verification by Patwari and Tehsildar. 3. Issuance of digitally signed certificate.',
        hi: '1. ई-मित्र के माध्यम से आवेदन करें। 2. पटवारी और तहसीलदार द्वारा सत्यापन। 3. डिजिटल रूप से हस्ताक्षरित प्रमाण पत्र जारी।'
      },
      tips: {
        en: 'SC/ST certificates in Rajasthan usually have life-time validity.',
        hi: 'राजस्थान में SC/ST प्रमाण पत्र आमतौर पर जीवन भर के लिए मान्य होते हैं।'
      }
    }
  },
  {
    id: 'employment-exchange-reg',
    category: 'Employment Forms',
    categoryHi: 'रोजगार फॉर्म',
    serviceName: 'Employment Registration',
    serviceNameHi: 'रोजगार पंजीकरण',
    formName: 'Employment Exchange Form',
    formNameHi: 'रोजगार कार्यालय फॉर्म',
    description: 'Registration for unemployment allowance and jobs.',
    descriptionHi: 'बेरोजगारी भत्ते और नौकरियों के लिए पंजीकरण।',
    icon: Briefcase,
    guidelines: ['Education docs', 'Aadhaar card', 'Residence proof'],
    guidelinesHi: ['शिक्षा दस्तावेज', 'आधार कार्ड', 'निवास प्रमाण'],
    searchQuery: 'Rajasthan employment exchange registration online',
    guide: {
      purpose: {
        en: 'To register as an unemployed youth for job notifications and unemployment allowance (Berozgari Bhatta).',
        hi: 'नौकरी की सूचनाओं और बेरोजगारी भत्ते के लिए बेरोजगार युवा के रूप में पंजीकरण करना।'
      },
      eligibility: {
        en: 'Unemployed residents of Rajasthan with minimum 10th/Graduate qualification.',
        hi: 'न्यूनतम 10वीं/स्नातक योग्यता वाले राजस्थान के बेरोजगार निवासी।'
      },
      documents: {
        en: ['All Educational Marksheets', 'Aadhaar Card', 'Bonafide Certificate', 'Income Certificate (for allowance)'],
        hi: ['सभी शैक्षणिक मार्कशीट', 'आधार कार्ड', 'मूल निवास प्रमाण पत्र', 'आय प्रमाण पत्र (भत्ते के लिए)']
      },
      process: {
        en: '1. Register on Employment portal or e-Mitra. 2. Upload educational documents. 3. Verification by Employment Office. 4. Receive registration number.',
        hi: '1. रोजगार पोर्टल या ई-मित्र पर पंजीकरण करें। 2. शैक्षणिक दस्तावेज अपलोड करें। 3. रोजगार कार्यालय द्वारा सत्यापन। 4. पंजीकरण संख्या प्राप्त करें।'
      },
      tips: {
        en: 'Keep your profile updated with higher qualifications to get better job matches.',
        hi: 'बेहतर नौकरी के मिलान के लिए उच्च योग्यता के साथ अपनी प्रोफाइल अपडेट रखें।'
      }
    }
  },
  {
    id: 'jan-aadhaar-new',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'Jan Aadhaar',
    serviceNameHi: 'जन आधार',
    formName: 'Jan Aadhaar New Registration',
    formNameHi: 'जन आधार नया पंजीकरण',
    description: 'One Number, One Identity for all Rajasthan residents.',
    descriptionHi: 'सभी राजस्थान निवासियों के लिए एक नंबर, एक पहचान।',
    icon: UserPlus,
    guidelines: ['Family photo', 'Aadhaar of all members', 'Bank account of female head'],
    guidelinesHi: ['पारिवारिक फोटो', 'सभी सदस्यों का आधार', 'महिला मुखिया का बैंक खाता'],
    searchQuery: 'Jan Aadhaar new registration form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To provide a unique identity to families in Rajasthan for direct benefit transfer (DBT) of government schemes.',
        hi: 'सरकारी योजनाओं के प्रत्यक्ष लाभ हस्तांतरण (DBT) के लिए राजस्थान के परिवारों को एक अद्वितीय पहचान प्रदान करना।'
      },
      eligibility: {
        en: 'All families residing in Rajasthan.',
        hi: 'राजस्थान में रहने वाले सभी परिवार।'
      },
      documents: {
        en: ['Aadhaar Cards of all members', 'Bank Passbook of Female Head', 'Mobile Number', 'Family Photo'],
        hi: ['सभी सदस्यों के आधार कार्ड', 'महिला मुखिया की बैंक पासबुक', 'मोबाइल नंबर', 'पारिवारिक फोटो']
      },
      process: {
        en: '1. Visit e-Mitra with documents. 2. Fill family details. 3. Upload photos and documents. 4. Get Jan Aadhaar ID.',
        hi: '1. दस्तावेजों के साथ ई-मित्र पर जाएं। 2. परिवार का विवरण भरें। 3. फोटो और दस्तावेज अपलोड करें। 4. जन आधार आईडी प्राप्त करें।'
      },
      tips: {
        en: 'Ensure the female head of the family has a functional bank account linked to Aadhaar.',
        hi: 'सुनिश्चित करें कि परिवार की महिला मुखिया का आधार से जुड़ा एक कार्यात्मक बैंक खाता हो।'
      }
    }
  },
  {
    id: 'chiranjeevi-reg',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'Chiranjeevi Health Insurance',
    serviceNameHi: 'चिरंजीवी स्वास्थ्य बीमा',
    formName: 'Chiranjeevi Registration Form',
    formNameHi: 'चिरंजीवी पंजीकरण फॉर्म',
    description: 'Cashless health insurance up to 25 Lakhs for Rajasthan families.',
    descriptionHi: 'राजस्थान के परिवारों के लिए 25 लाख तक का कैशलेस स्वास्थ्य बीमा।',
    icon: Heart,
    guidelines: ['Jan Aadhaar card', 'Aadhaar card', 'Mobile number'],
    guidelinesHi: ['जन आधार कार्ड', 'आधार कार्ड', 'मोबाइल नंबर'],
    searchQuery: 'Chiranjeevi Yojana registration form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To provide health insurance coverage for hospitalization and surgeries in government and empanelled private hospitals.',
        hi: 'सरकारी और सूचीबद्ध निजी अस्पतालों में अस्पताल में भर्ती होने और सर्जरी के लिए स्वास्थ्य बीमा कवरेज प्रदान करना।'
      },
      eligibility: {
        en: 'All families of Rajasthan (Free for NFSA, SECC, Small Farmers, Contractual Workers; Others pay Rs. 850/year).',
        hi: 'राजस्थान के सभी परिवार (NFSA, SECC, लघु किसान, संविदा कर्मियों के लिए निःशुल्क; अन्य 850 रुपये/वर्ष का भुगतान करते हैं)।'
      },
      documents: {
        en: ['Jan Aadhaar Card', 'Aadhaar Card', 'Mobile Number'],
        hi: ['जन आधार कार्ड', 'आधार कार्ड', 'मोबाइल नंबर']
      },
      process: {
        en: '1. Login to SSO portal or visit e-Mitra. 2. Select Chiranjeevi Yojana. 3. Verify Jan Aadhaar. 4. Pay premium if applicable. 5. Download policy.',
        hi: '1. SSO पोर्टल पर लॉगिन करें या ई-मित्र पर जाएं। 2. चिरंजीवी योजना चुनें। 3. जन आधार सत्यापित करें। 4. यदि लागू हो तो प्रीमियम का भुगतान करें। 5. पॉलिसी डाउनलोड करें।'
      },
      tips: {
        en: 'Renewal is required every year to keep the benefits active.',
        hi: 'लाभों को सक्रिय रखने के लिए हर साल नवीनीकरण आवश्यक है।'
      }
    }
  },
  {
    id: 'palanhar-yojana',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'Palanhar Yojana',
    serviceNameHi: 'पालनहार योजना',
    formName: 'Palanhar New Application',
    formNameHi: 'पालनहार नया आवेदन',
    description: 'Financial aid for children whose parents are deceased or in jail.',
    descriptionHi: 'उन बच्चों के लिए वित्तीय सहायता जिनके माता-पिता की मृत्यु हो गई है या वे जेल में हैं।',
    icon: Baby,
    guidelines: ['Jan Aadhaar card', 'Death certificate of parents', 'School certificate'],
    guidelinesHi: ['जन आधार कार्ड', 'माता-पिता का मृत्यु प्रमाण पत्र', 'स्कूल प्रमाण पत्र'],
    searchQuery: 'Palanhar Yojana application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To provide monthly financial assistance for the education and upbringing of orphan or vulnerable children.',
        hi: 'अनाथ या कमजोर बच्चों की शिक्षा और पालन-पोषण के लिए मासिक वित्तीय सहायता प्रदान करना।'
      },
      eligibility: {
        en: 'Orphan children, children of parents with life imprisonment, or children of widowed/divorced mothers.',
        hi: 'अनाथ बच्चे, आजीवन कारावास वाले माता-पिता के बच्चे, या विधवा/तलाकशुदा माताओं के बच्चे।'
      },
      documents: {
        en: ['Jan Aadhaar Card', 'Death Certificate of Parents', 'School Bonafide Certificate', 'Income Certificate'],
        hi: ['जन आधार कार्ड', 'माता-पिता का मृत्यु प्रमाण पत्र', 'स्कूल का बोनाफाइड सर्टिफिकेट', 'आय प्रमाण पत्र']
      },
      process: {
        en: '1. Apply online via SJE portal or e-Mitra. 2. Upload required certificates. 3. Verification by Social Justice Dept. 4. Monthly payment to guardian account.',
        hi: '1. SJE पोर्टल या ई-मित्र के माध्यम से ऑनलाइन आवेदन करें। 2. आवश्यक प्रमाण पत्र अपलोड करें। 3. सामाजिक न्याय विभाग द्वारा सत्यापन। 4. अभिभावक के खाते में मासिक भुगतान।'
      },
      tips: {
        en: 'Annual verification (Varshik Sat सत्यापन) is mandatory to continue receiving benefits.',
        hi: 'लाभ प्राप्त करना जारी रखने के लिए वार्षिक सत्यापन (वार्षिक सत्यापन) अनिवार्य है।'
      }
    }
  },
  {
    id: 'labour-card-new',
    category: 'Employment Forms',
    categoryHi: 'रोजगार फॉर्म',
    serviceName: 'Labour Card',
    serviceNameHi: 'लेबर कार्ड',
    formName: 'Labour Registration Form',
    formNameHi: 'लेबर पंजीकरण फॉर्म',
    description: 'Registration for construction workers to get government benefits.',
    descriptionHi: 'सरकारी लाभ प्राप्त करने के लिए निर्माण श्रमिकों के लिए पंजीकरण।',
    icon: HardHat,
    guidelines: ['90 days work certificate', 'Aadhaar card', 'Bank passbook'],
    guidelinesHi: ['90 दिनों का कार्य प्रमाण पत्र', 'आधार कार्ड', 'बैंक पासबुक'],
    searchQuery: 'Labour card registration form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To provide social security and welfare benefits to unorganized construction workers.',
        hi: 'असंगठित निर्माण श्रमिकों को सामाजिक सुरक्षा और कल्याणकारी लाभ प्रदान करना।'
      },
      eligibility: {
        en: 'Workers aged 18-60 who have worked for at least 90 days in construction in the last year.',
        hi: '18-60 वर्ष की आयु के श्रमिक जिन्होंने पिछले वर्ष में निर्माण में कम से कम 90 दिनों तक काम किया है।'
      },
      documents: {
        en: ['Aadhaar Card', 'Jan Aadhaar Card', '90 Days Work Certificate', 'Bank Passbook', 'Passport Photo'],
        hi: ['आधार कार्ड', 'जन आधार कार्ड', '90 दिनों का कार्य प्रमाण पत्र', 'बैंक पासबुक', 'पासपोर्ट फोटो']
      },
      process: {
        en: '1. Get 90 days work certificate from contractor/department. 2. Apply on LDMS portal or e-Mitra. 3. Pay registration fee. 4. Verification and card issuance.',
        hi: '1. ठेकेदार/विभाग से 90 दिनों का कार्य प्रमाण पत्र प्राप्त करें। 2. LDMS पोर्टल या ई-मित्र पर आवेदन करें। 3. पंजीकरण शुल्क का भुगतान करें। 4. सत्यापन और कार्ड जारी करना।'
      },
      tips: {
        en: 'Renew the card every year or as specified to stay eligible for scholarship and insurance schemes.',
        hi: 'छात्रवृत्ति और बीमा योजनाओं के लिए पात्र बने रहने के लिए हर साल या निर्दिष्ट अनुसार कार्ड का नवीनीकरण करें।'
      }
    }
  },
  {
    id: 'birth-cert-rajasthan',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Birth Certificate',
    serviceNameHi: 'जन्म प्रमाण पत्र',
    formName: 'Birth Registration Form',
    formNameHi: 'जन्म पंजीकरण फॉर्म',
    description: 'Official birth registration in Rajasthan (Pehchan Portal).',
    descriptionHi: 'राजस्थान में आधिकारिक जन्म पंजीकरण (पहचान पोर्टल)।',
    icon: Baby,
    guidelines: ['Hospital slip', 'Parents Aadhaar', 'Address proof'],
    guidelinesHi: ['अस्पताल की पर्ची', 'माता-पिता का आधार', 'पते का प्रमाण'],
    searchQuery: 'Birth certificate application form Pehchan Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To obtain a legal document certifying the birth of a child.',
        hi: 'बच्चे के जन्म को प्रमाणित करने वाला कानूनी दस्तावेज प्राप्त करना।'
      },
      eligibility: {
        en: 'Any birth occurring within Rajasthan.',
        hi: 'राजस्थान के भीतर होने वाला कोई भी जन्म।'
      },
      documents: {
        en: ['Hospital Discharge Slip', 'Aadhaar Cards of Parents', 'Address Proof', 'Informant Details'],
        hi: ['अस्पताल डिस्चार्ज स्लिप', 'माता-पिता के आधार कार्ड', 'पते का प्रमाण', 'सूचना देने वाले का विवरण']
      },
      process: {
        en: '1. Register at Pehchan portal or local municipality/Gram Panchayat. 2. Submit hospital proof. 3. Verification by Registrar. 4. Download digital certificate.',
        hi: '1. पहचान पोर्टल या स्थानीय नगरपालिका/ग्राम पंचायत में पंजीकरण करें। 2. अस्पताल का प्रमाण जमा करें। 3. रजिस्ट्रार द्वारा सत्यापन। 4. डिजिटल प्रमाण पत्र डाउनलोड करें।'
      },
      tips: {
        en: 'Registration within 21 days is free; late registration requires an affidavit and fees.',
        hi: '21 दिनों के भीतर पंजीकरण निःशुल्क है; विलंब से पंजीकरण के लिए हलफनामा और शुल्क की आवश्यकता होती है।'
      }
    }
  },
  {
    id: 'income-cert-rajasthan',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Income Certificate',
    serviceNameHi: 'आय प्रमाण पत्र',
    formName: 'Income Certificate (1/4 Page)',
    formNameHi: 'आय प्रमाण पत्र (1/4 पेज)',
    description: 'Proof of family income for scholarships and schemes in Rajasthan.',
    descriptionHi: 'राजस्थान में छात्रवृत्ति और योजनाओं के लिए पारिवारिक आय का प्रमाण।',
    icon: Wallet,
    guidelines: ['Aadhaar card', 'Ration card', 'Two witnesses'],
    guidelinesHi: ['आधार कार्ड', 'राशन कार्ड', 'दो गवाह'],
    searchQuery: 'Income certificate form Rajasthan 4 page pdf',
    guide: {
      purpose: {
        en: 'To certify the annual income of a family for availing government benefits.',
        hi: 'सरकारी लाभ प्राप्त करने के लिए परिवार की वार्षिक आय को प्रमाणित करना।'
      },
      eligibility: {
        en: 'Residents of Rajasthan requiring income proof for schemes.',
        hi: 'योजनाओं के लिए आय प्रमाण की आवश्यकता वाले राजस्थान के निवासी।'
      },
      documents: {
        en: ['Aadhaar Card', 'Jan Aadhaar Card', 'Ration Card', 'Self-Declaration Form', 'Witness Signatures'],
        hi: ['आधार कार्ड', 'जन आधार कार्ड', 'राशन कार्ड', 'स्व-घोषणा पत्र', 'गवाहों के हस्ताक्षर']
      },
      process: {
        en: '1. Download the 1-page or 4-page form. 2. Get it signed by two gazetted officers/witnesses. 3. Notarize if required. 4. Submit at e-Mitra.',
        hi: '1. 1-पेज या 4-पेज का फॉर्म डाउनलोड करें। 2. दो राजपत्रित अधिकारियों/गवाहों से हस्ताक्षर करवाएं। 3. यदि आवश्यक हो तो नोटरी करवाएं। 4. ई-मित्र पर जमा करें।'
      },
      tips: {
        en: 'The 4-page form is generally required for scholarships and EWS certificates.',
        hi: 'छात्रवृत्ति और ईडब्ल्यूएस प्रमाण पत्र के लिए आमतौर पर 4-पेज के फॉर्म की आवश्यकता होती है।'
      }
    }
  },
  {
    id: 'widow-pension-rajasthan',
    category: 'Pension Forms',
    categoryHi: 'पेंशन फॉर्म',
    serviceName: 'Widow Pension',
    serviceNameHi: 'विधवा पेंशन',
    formName: 'Widow Pension Application',
    formNameHi: 'विधवा पेंशन आवेदन',
    description: 'Financial support for widowed women in Rajasthan.',
    descriptionHi: 'राजस्थान में विधवा महिलाओं के लिए वित्तीय सहायता।',
    icon: UserMinus,
    guidelines: ['Husband death certificate', 'Jan Aadhaar', 'Income certificate'],
    guidelinesHi: ['पति का मृत्यु प्रमाण पत्र', 'जन आधार', 'आय प्रमाण पत्र'],
    searchQuery: 'Widow pension application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To provide monthly financial assistance to widowed women for their livelihood.',
        hi: 'विधवा महिलाओं को उनकी आजीविका के लिए मासिक वित्तीय सहायता प्रदान करना।'
      },
      eligibility: {
        en: 'Widowed women of Rajasthan with family income less than Rs. 48,000 per year.',
        hi: 'राजस्थान की विधवा महिलाएं जिनकी पारिवारिक आय 48,000 रुपये प्रति वर्ष से कम है।'
      },
      documents: {
        en: ['Jan Aadhaar Card', 'Aadhaar Card', 'Husband Death Certificate', 'Income Certificate', 'Bank Passbook'],
        hi: ['जन आधार कार्ड', 'आधार कार्ड', 'पति का मृत्यु प्रमाण पत्र', 'आय प्रमाण पत्र', 'बैंक पासबुक']
      },
      process: {
        en: '1. Apply online via SSP portal or e-Mitra. 2. Upload death certificate and income proof. 3. Verification by Tehsildar/SDO. 4. Monthly pension starts.',
        hi: '1. SSP पोर्टल या ई-मित्र के माध्यम से ऑनलाइन आवेदन करें। 2. मृत्यु प्रमाण पत्र और आय प्रमाण अपलोड करें। 3. तहसीलदार/एसडीओ द्वारा सत्यापन। 4. मासिक पेंशन शुरू होती है।'
      },
      tips: {
        en: 'Ensure the husband\'s name is correctly mentioned in the Jan Aadhaar before applying.',
        hi: 'आवेदन करने से पहले सुनिश्चित करें कि जन आधार में पति का नाम सही ढंग से लिखा गया है।'
      }
    }
  },
  {
    id: 'disability-pension-rajasthan',
    category: 'Pension Forms',
    categoryHi: 'पेंशन फॉर्म',
    serviceName: 'Disability Pension',
    serviceNameHi: 'विकलांगता पेंशन',
    formName: 'Disability Pension Form',
    formNameHi: 'विकलांगता पेंशन फॉर्म',
    description: 'Support for persons with 40% or more disability in Rajasthan.',
    descriptionHi: 'राजस्थान में 40% या अधिक विकलांगता वाले व्यक्तियों के लिए सहायता।',
    icon: Accessibility,
    guidelines: ['Disability certificate', 'Jan Aadhaar', 'Income certificate'],
    guidelinesHi: ['विकलांगता प्रमाण पत्र', 'जन आधार', 'आय प्रमाण पत्र'],
    searchQuery: 'Disability pension application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To provide monthly financial assistance to persons with disabilities for their welfare.',
        hi: 'विकलांग व्यक्तियों के कल्याण के लिए उन्हें मासिक वित्तीय सहायता प्रदान करना।'
      },
      eligibility: {
        en: 'Residents of Rajasthan with 40% or more disability and family income less than Rs. 60,000 per year.',
        hi: '40% या अधिक विकलांगता वाले राजस्थान के निवासी और जिनकी पारिवारिक आय 60,000 रुपये प्रति वर्ष से कम है।'
      },
      documents: {
        en: ['Disability Certificate (UDID)', 'Jan Aadhaar Card', 'Aadhaar Card', 'Income Certificate', 'Bank Passbook'],
        hi: ['विकलांगता प्रमाण पत्र (UDID)', 'जन आधार कार्ड', 'आधार कार्ड', 'आय प्रमाण पत्र', 'बैंक पासबुक']
      },
      process: {
        en: '1. Apply online via SSP portal or e-Mitra. 2. Upload disability certificate and income proof. 3. Verification by Medical Board/Tehsildar. 4. Pension approval.',
        hi: '1. SSP पोर्टल या ई-मित्र के माध्यम से ऑनलाइन आवेदन करें। 2. विकलांगता प्रमाण पत्र और आय प्रमाण अपलोड करें। 3. मेडिकल बोर्ड/तहसीलदार द्वारा सत्यापन। 4. पेंशन की मंजूरी।'
      },
      tips: {
        en: 'The UDID card is now mandatory for disability-related schemes in Rajasthan.',
        hi: 'राजस्थान में विकलांगता से संबंधित योजनाओं के लिए अब UDID कार्ड अनिवार्य है।'
      }
    }
  },
  {
    id: 'tenant-verification-rajasthan',
    category: 'Police Verification Forms',
    categoryHi: 'पुलिस सत्यापन फॉर्म',
    serviceName: 'Tenant Verification',
    serviceNameHi: 'किरायेदार सत्यापन',
    formName: 'Tenant Verification Form',
    formNameHi: 'किरायेदार सत्यापन फॉर्म',
    description: 'Mandatory police verification for tenants in Rajasthan.',
    descriptionHi: 'राजस्थान में किरायेदारों के लिए अनिवार्य पुलिस सत्यापन।',
    icon: Home,
    guidelines: ['Tenant ID proof', 'Owner ID proof', 'Rent agreement'],
    guidelinesHi: ['किरायेदार आईडी प्रमाण', 'मालिक आईडी प्रमाण', 'किराया समझौता'],
    searchQuery: 'Tenant verification form Rajasthan police pdf',
    guide: {
      purpose: {
        en: 'To ensure the safety of the locality by verifying the identity and background of tenants.',
        hi: 'किरायेदारों की पहचान और पृष्ठभूमि को सत्यापित करके इलाके की सुरक्षा सुनिश्चित करना।'
      },
      eligibility: {
        en: 'Property owners renting out their premises in Rajasthan.',
        hi: 'राजस्थान में अपना परिसर किराए पर देने वाले संपत्ति के मालिक।'
      },
      documents: {
        en: ['Tenant Aadhaar Card', 'Owner Aadhaar Card', 'Tenant Photo', 'Rent Agreement'],
        hi: ['किरायेदार का आधार कार्ड', 'मालिक का आधार कार्ड', 'किरायेदार का फोटो', 'किराया समझौता']
      },
      process: {
        en: '1. Fill the tenant verification form. 2. Attach photos and ID proofs. 3. Submit to the local police station or online via Rajasthan Police portal.',
        hi: '1. किरायेदार सत्यापन फॉर्म भरें। 2. फोटो और आईडी प्रमाण संलग्न करें। 3. स्थानीय पुलिस स्टेशन या राजस्थान पुलिस पोर्टल के माध्यम से ऑनलाइन जमा करें।'
      },
      tips: {
        en: 'It is a legal requirement for owners to verify tenants to prevent criminal activities.',
        hi: 'आपराधिक गतिविधियों को रोकने के लिए मालिकों के लिए किरायेदारों का सत्यापन करना एक कानूनी आवश्यकता है।'
      }
    }
  },
  {
    id: 'voter-id-correction',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'Voter ID Correction',
    serviceNameHi: 'वोटर आईडी सुधार',
    formName: 'Voter ID Form 8',
    formNameHi: 'वोटर आईडी फॉर्म 8',
    description: 'Correction of entries in existing electoral roll.',
    descriptionHi: 'मौजूदा मतदाता सूची में प्रविष्टियों का सुधार।',
    icon: Repeat,
    guidelines: ['Existing Voter ID', 'Proof of correction', 'Aadhaar card'],
    guidelinesHi: ['मौजूदा वोटर आईडी', 'सुधार का प्रमाण', 'आधार कार्ड'],
    searchQuery: 'Voter ID form 8 correction online pdf',
    guide: {
      purpose: {
        en: 'To correct name, age, address, or photo in the existing Voter ID card.',
        hi: 'मौजूदा वोटर आईडी कार्ड में नाम, उम्र, पता या फोटो सुधारने के लिए।'
      },
      eligibility: {
        en: 'Registered voters with errors in their Voter ID details.',
        hi: 'पंजीकृत मतदाता जिनके वोटर आईडी विवरण में त्रुटियां हैं।'
      },
      documents: {
        en: ['Existing Voter ID Card', 'Aadhaar Card', 'Proof of Correct Detail (Birth Cert/Marksheet/Bill)', 'Photo'],
        hi: ['मौजूदा वोटर आईडी कार्ड', 'आधार कार्ड', 'सही विवरण का प्रमाण (जन्म प्रमाण पत्र/मार्कशीट/बिल)', 'फोटो']
      },
      process: {
        en: '1. Login to NVSP portal or Voter Helpline app. 2. Select Form 8. 3. Enter details to be corrected. 4. Upload supporting documents. 5. Submit and track.',
        hi: '1. NVSP पोर्टल या वोटर हेल्पलाइन ऐप पर लॉगिन करें। 2. फॉर्म 8 चुनें। 3. सुधारे जाने वाले विवरण दर्ज करें। 4. सहायक दस्तावेज अपलोड करें। 5. सबमिट करें और ट्रैक करें।'
      },
      tips: {
        en: 'Linking Aadhaar with Voter ID makes the correction process faster and more secure.',
        hi: 'वोटर आईडी के साथ आधार को लिंक करने से सुधार प्रक्रिया तेज और अधिक सुरक्षित हो जाती है।'
      }
    }
  },
  {
    id: 'pm-awas-yojana',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'PM Awas Yojana',
    serviceNameHi: 'पीएम आवास योजना',
    formName: 'PMAY Application Form',
    formNameHi: 'पीएमएवाई आवेदन फॉर्म',
    description: 'Housing for all scheme by Central Government.',
    descriptionHi: 'केंद्र सरकार द्वारा सभी के लिए आवास योजना।',
    icon: Home,
    guidelines: ['Income proof', 'Aadhaar card', 'Bank details'],
    guidelinesHi: ['आय प्रमाण', 'आधार कार्ड', 'बैंक विवरण'],
    searchQuery: 'PM Awas Yojana application form online pdf',
    guide: {
      purpose: {
        en: 'To provide affordable housing to the urban and rural poor.',
        hi: 'शहरी और ग्रामीण गरीबों को किफायती आवास प्रदान करना।'
      },
      eligibility: {
        en: 'Families with no pucca house and annual income within specified limits (EWS/LIG/MIG).',
        hi: 'वे परिवार जिनके पास कोई पक्का घर नहीं है और वार्षिक आय निर्दिष्ट सीमा (EWS/LIG/MIG) के भीतर है।'
      },
      documents: {
        en: ['Aadhaar Card', 'Voter ID', 'Income Certificate', 'Bank Passbook', 'Affidavit of no pucca house'],
        hi: ['आधार कार्ड', 'वोटर आईडी', 'आय प्रमाण पत्र', 'बैंक पासबुक', 'पक्का घर न होने का शपथ पत्र']
      },
      process: {
        en: '1. Register on PMAY portal or visit local municipality/Gram Panchayat. 2. Fill the application form. 3. Verification by authorities. 4. Subsidy/Grant approval.',
        hi: '1. PMAY पोर्टल पर पंजीकरण करें या स्थानीय नगरपालिका/ग्राम पंचायत पर जाएं। 2. आवेदन पत्र भरें। 3. अधिकारियों द्वारा सत्यापन। 4. सब्सिडी/अनुदान की मंजूरी।'
      },
      tips: {
        en: 'Ensure your Aadhaar is linked to your bank account for direct benefit transfer.',
        hi: 'प्रत्यक्ष लाभ हस्तांतरण के लिए सुनिश्चित करें कि आपका आधार आपके बैंक खाते से लिंक है।'
      }
    }
  },
  {
    id: 'ujjwala-yojana',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'Ujjwala Yojana',
    serviceNameHi: 'उज्ज्वला योजना',
    formName: 'Ujjwala Gas Connection Form',
    formNameHi: 'उज्ज्वला गैस कनेक्शन फॉर्म',
    description: 'Free LPG connection for BPL families.',
    descriptionHi: 'बीपीएल परिवारों के लिए मुफ्त एलपीजी कनेक्शन।',
    icon: Flame,
    guidelines: ['BPL Ration card', 'Aadhaar card', 'Bank details'],
    guidelinesHi: ['बीपीएल राशन कार्ड', 'आधार कार्ड', 'बैंक विवरण'],
    searchQuery: 'PM Ujjwala Yojana application form pdf',
    guide: {
      purpose: {
        en: 'To provide clean cooking fuel (LPG) to women of BPL households.',
        hi: 'बीपीएल परिवारों की महिलाओं को स्वच्छ खाना पकाने का ईंधन (एलपीजी) प्रदान करना।'
      },
      eligibility: {
        en: 'Adult woman belonging to BPL household with no existing LPG connection.',
        hi: 'बीपीएल परिवार की वयस्क महिला जिसके पास पहले से कोई एलपीजी कनेक्शन नहीं है।'
      },
      documents: {
        en: ['BPL Ration Card', 'Aadhaar Card', 'Bank Passbook', 'Photo'],
        hi: ['बीपीएल राशन कार्ड', 'आधार कार्ड', 'बैंक पासबुक', 'फोटो']
      },
      process: {
        en: '1. Visit nearest LPG distributor. 2. Submit Ujjwala application form. 3. KYC verification. 4. Gas connection release.',
        hi: '1. निकटतम एलपीजी वितरक पर जाएं। 2. उज्ज्वला आवेदन पत्र जमा करें। 3. केवाईसी सत्यापन। 4. गैस कनेक्शन जारी करना।'
      },
      tips: {
        en: 'The connection is issued in the name of the woman of the household.',
        hi: 'कनेक्शन घर की महिला के नाम पर जारी किया जाता है।'
      }
    }
  },
  {
    id: 'nfsa-rajasthan',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'Food Security (NFSA)',
    serviceNameHi: 'खाद्य सुरक्षा (NFSA)',
    formName: 'NFSA Inclusion Form',
    formNameHi: 'एनएफएसए समावेशन फॉर्म',
    description: 'Subsidized food grains under National Food Security Act.',
    descriptionHi: 'राष्ट्रीय खाद्य सुरक्षा अधिनियम के तहत रियायती खाद्यान्न।',
    icon: ShoppingBag,
    guidelines: ['Ration card', 'Jan Aadhaar', 'Income proof'],
    guidelinesHi: ['राशन कार्ड', 'जन आधार', 'आय प्रमाण'],
    searchQuery: 'NFSA Rajasthan application form online pdf',
    guide: {
      purpose: {
        en: 'To provide subsidized food grains (wheat/rice) to eligible families.',
        hi: 'पात्र परिवारों को रियायती खाद्यान्न (गेहूं/चावल) प्रदान करना।'
      },
      eligibility: {
        en: 'BPL, Antyodaya, or eligible priority households as per Rajasthan government norms.',
        hi: 'राजस्थान सरकार के मानदंडों के अनुसार बीपीएल, अंत्योदय, या पात्र प्राथमिकता वाले परिवार।'
      },
      documents: {
        en: ['Jan Aadhaar Card', 'Ration Card', 'Income Certificate', 'Category Proof (BPL/Labour Card/etc.)'],
        hi: ['जन आधार कार्ड', 'राशन कार्ड', 'आय प्रमाण पत्र', 'श्रेणी प्रमाण (बीपीएल/लेबर कार्ड/आदि)']
      },
      process: {
        en: '1. Apply online via e-Mitra or SSO portal. 2. Upload Jan Aadhaar and eligibility documents. 3. Verification by SDO/Tehsildar. 4. Name added to NFSA list.',
        hi: '1. ई-मित्र या SSO पोर्टल के माध्यम से ऑनलाइन आवेदन करें। 2. जन आधार और पात्रता दस्तावेज अपलोड करें। 3. एसडीओ/तहसीलदार द्वारा सत्यापन। 4. एनएफएसए सूची में नाम जोड़ा गया।'
      },
      tips: {
        en: 'Check the current status of NFSA portal as it opens periodically for new registrations.',
        hi: 'एनएफएसए पोर्टल की वर्तमान स्थिति की जांच करें क्योंकि यह समय-समय पर नए पंजीकरण के लिए खुलता है।'
      }
    }
  },
  {
    id: 'bonafide-certificate-rajasthan',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Bonafide Certificate',
    serviceNameHi: 'मूल निवास प्रमाण पत्र',
    formName: 'Bonafide Application Form',
    formNameHi: 'मूल निवास आवेदन फॉर्म',
    description: 'Proof of permanent residence in Rajasthan.',
    descriptionHi: 'राजस्थान में स्थायी निवास का प्रमाण।',
    icon: FileText,
    guidelines: ['Jan Aadhaar', 'Address proof', 'Photo'],
    guidelinesHi: ['जन आधार', 'पता प्रमाण', 'फोटो'],
    searchQuery: 'Bonafide certificate Rajasthan application form pdf',
    guide: {
      purpose: {
        en: 'To certify that a person is a permanent resident of Rajasthan.',
        hi: 'यह प्रमाणित करने के लिए कि व्यक्ति राजस्थान का स्थायी निवासी है।'
      },
      eligibility: {
        en: 'Persons living in Rajasthan for the last 10 years or more.',
        hi: 'पिछले 10 वर्षों या उससे अधिक समय से राजस्थान में रहने वाले व्यक्ति।'
      },
      documents: {
        en: ['Jan Aadhaar Card', 'Aadhaar Card', 'Old Residence Proof (Voter ID/Bill/Registry)', 'Self Declaration'],
        hi: ['जन आधार कार्ड', 'आधार कार्ड', 'पुराना निवास प्रमाण (वोटर आईडी/बिल/रजिस्ट्री)', 'स्व-घोषणा']
      },
      process: {
        en: '1. Apply online via e-Mitra. 2. Upload address proof and Jan Aadhaar. 3. Verification by Patwari and Tehsildar. 4. Digital certificate issued.',
        hi: '1. ई-मित्र के माध्यम से ऑनलाइन आवेदन करें। 2. पता प्रमाण और जन आधार अपलोड करें। 3. पटवारी और तहसीलदार द्वारा सत्यापन। 4. डिजिटल प्रमाण पत्र जारी किया गया।'
      },
      tips: {
        en: 'Ensure your address is correctly updated in Jan Aadhaar before applying.',
        hi: 'आवेदन करने से पहले सुनिश्चित करें कि जन आधार में आपका पता सही ढंग से अपडेट किया गया है।'
      }
    }
  },
  {
    id: 'death-certificate-rajasthan',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Death Certificate',
    serviceNameHi: 'मृत्यु प्रमाण पत्र',
    formName: 'Death Registration Form',
    formNameHi: 'मृत्यु पंजीकरण फॉर्म',
    description: 'Registration of death in Rajasthan.',
    descriptionHi: 'राजस्थान में मृत्यु का पंजीकरण।',
    icon: FileText,
    guidelines: ['Hospital report', 'Aadhaar of deceased', 'Applicant ID'],
    guidelinesHi: ['अस्पताल की रिपोर्ट', 'मृतक का आधार', 'आवेदक की आईडी'],
    searchQuery: 'Death certificate Rajasthan application form pdf',
    guide: {
      purpose: {
        en: 'To officially record the death of a person for legal and administrative purposes.',
        hi: 'कानूनी और प्रशासनिक उद्देश्यों के लिए किसी व्यक्ति की मृत्यु को आधिकारिक रूप से रिकॉर्ड करना।'
      },
      eligibility: {
        en: 'Family members or relatives of the deceased person in Rajasthan.',
        hi: 'राजस्थान में मृतक व्यक्ति के परिवार के सदस्य या रिश्तेदार।'
      },
      documents: {
        en: ['Hospital Death Report', 'Aadhaar Card of Deceased', 'Aadhaar Card of Applicant', 'Jan Aadhaar Card'],
        hi: ['अस्पताल की मृत्यु रिपोर्ट', 'मृतक का आधार कार्ड', 'आवेदक का आधार कार्ड', 'जन आधार कार्ड']
      },
      process: {
        en: '1. Register death within 21 days at local registrar office (Gram Panchayat/Municipality). 2. Submit hospital report and ID proofs. 3. Verification by Registrar. 4. Certificate issued.',
        hi: '1. स्थानीय रजिस्ट्रार कार्यालय (ग्राम पंचायत/नगरपालिका) में 21 दिनों के भीतर मृत्यु का पंजीकरण करें। 2. अस्पताल की रिपोर्ट और आईडी प्रमाण जमा करें। 3. रजिस्ट्रार द्वारा सत्यापन। 4. प्रमाण पत्र जारी किया गया।'
      },
      tips: {
        en: 'Registration within 21 days is free; after that, a late fee and SDM permission may be required.',
        hi: '21 दिनों के भीतर पंजीकरण निःशुल्क है; उसके बाद, विलंब शुल्क और एसडीएम की अनुमति की आवश्यकता हो सकती है।'
      }
    }
  },
  {
    id: 'obc-certificate-central',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'OBC Certificate (Central)',
    serviceNameHi: 'ओबीसी प्रमाण पत्र (केंद्रीय)',
    formName: 'Central OBC Form',
    formNameHi: 'केंद्रीय ओबीसी फॉर्म',
    description: 'OBC certificate for Central Government jobs and education.',
    descriptionHi: 'केंद्र सरकार की नौकरियों और शिक्षा के लिए ओबीसी प्रमाण पत्र।',
    icon: FileText,
    guidelines: ['Caste proof', 'Income proof', 'Aadhaar card'],
    guidelinesHi: ['जाति प्रमाण', 'आय प्रमाण', 'आधार कार्ड'],
    searchQuery: 'Central OBC certificate application form pdf',
    guide: {
      purpose: {
        en: 'To avail reservation benefits in Central Government jobs and educational institutions.',
        hi: 'केंद्र सरकार की नौकरियों और शैक्षणिक संस्थानों में आरक्षण लाभ प्राप्त करने के लिए।'
      },
      eligibility: {
        en: 'Persons belonging to castes listed in the Central OBC list and falling under Non-Creamy Layer.',
        hi: 'केंद्रीय ओबीसी सूची में सूचीबद्ध जातियों से संबंधित व्यक्ति और जो नॉन-क्रीमी लेयर के अंतर्गत आते हैं।'
      },
      documents: {
        en: ['State OBC Certificate', 'Income Certificate (last 3 years)', 'Aadhaar Card', 'Jan Aadhaar Card', 'Ration Card'],
        hi: ['राज्य ओबीसी प्रमाण पत्र', 'आय प्रमाण पत्र (पिछले 3 वर्ष)', 'आधार कार्ड', 'जन आधार कार्ड', 'राशन कार्ड']
      },
      process: {
        en: '1. Apply online via e-Mitra. 2. Upload state OBC certificate and income proof. 3. Verification by Tehsildar. 4. Central format certificate issued.',
        hi: '1. ई-मित्र के माध्यम से ऑनलाइन आवेदन करें। 2. राज्य ओबीसी प्रमाण पत्र और आय प्रमाण अपलोड करें। 3. तहसीलदार द्वारा सत्यापन। 4. केंद्रीय प्रारूप प्रमाण पत्र जारी किया गया।'
      },
      tips: {
        en: 'The Non-Creamy Layer status is based on family income and must be updated every year or as per rules.',
        hi: 'नॉन-क्रीमी लेयर की स्थिति पारिवारिक आय पर आधारित होती है और इसे हर साल या नियमों के अनुसार अपडेट किया जाना चाहिए।'
      }
    }
  },
  {
    id: 'senior-citizen-id',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'Senior Citizen ID',
    serviceNameHi: 'वरिष्ठ नागरिक आईडी',
    formName: 'Senior Citizen Card Form',
    formNameHi: 'वरिष्ठ नागरिक कार्ड फॉर्म',
    description: 'Identity card for citizens aged 60 and above.',
    descriptionHi: '60 वर्ष और उससे अधिक आयु के नागरिकों के लिए पहचान पत्र।',
    icon: UserCheck,
    guidelines: ['Age proof', 'Address proof', 'Photo'],
    guidelinesHi: ['आयु प्रमाण', 'पता प्रमाण', 'फोटो'],
    searchQuery: 'Senior citizen ID card application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To provide various benefits and concessions to elderly citizens in travel, health, etc.',
        hi: 'बुजुर्ग नागरिकों को यात्रा, स्वास्थ्य आदि में विभिन्न लाभ और रियायतें प्रदान करना।'
      },
      eligibility: {
        en: 'Residents of Rajasthan aged 60 years or above.',
        hi: '60 वर्ष या उससे अधिक आयु के राजस्थान के निवासी।'
      },
      documents: {
        en: ['Aadhaar Card (for age proof)', 'Jan Aadhaar Card', 'Voter ID', 'Passport size Photo'],
        hi: ['आधार कार्ड (आयु प्रमाण के लिए)', 'जन आधार कार्ड', 'वोटर आईडी', 'पासपोर्ट साइज फोटो']
      },
      process: {
        en: '1. Apply online via Social Justice and Empowerment portal or e-Mitra. 2. Upload age and residence proof. 3. Approval by District Social Welfare Officer. 4. ID card issued.',
        hi: '1. सामाजिक न्याय और अधिकारिता पोर्टल या ई-मित्र के माध्यम से ऑनलाइन आवेदन करें। 2. आयु और निवास प्रमाण अपलोड करें। 3. जिला समाज कल्याण अधिकारी द्वारा स्वीकृति। 4. आईडी कार्ड जारी किया गया।'
      },
      tips: {
        en: 'This card is useful for getting discounts in Rajasthan Roadways buses and other government services.',
        hi: 'यह कार्ड राजस्थान रोडवेज की बसों और अन्य सरकारी सेवाओं में छूट पाने के लिए उपयोगी है।'
      }
    }
  },
  {
    id: 'name-change-gazette',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'Name Change (Gazette)',
    serviceNameHi: 'नाम परिवर्तन (राजपत्र)',
    formName: 'Gazette Notification Form',
    formNameHi: 'राजपत्र अधिसूचना फॉर्म',
    description: 'Official name change notification in Government Gazette.',
    descriptionHi: 'सरकारी राजपत्र में आधिकारिक नाम परिवर्तन अधिसूचना।',
    icon: FileSignature,
    guidelines: ['Affidavit', 'Newspaper ad', 'ID proof'],
    guidelinesHi: ['शपथ पत्र', 'समाचार पत्र विज्ञापन', 'आईडी प्रमाण'],
    searchQuery: 'Name change gazette notification form India pdf',
    guide: {
      purpose: {
        en: 'To officially change your name in all government records through a Gazette notification.',
        hi: 'राजपत्र अधिसूचना के माध्यम से सभी सरकारी रिकॉर्ड में अपना नाम आधिकारिक रूप से बदलने के लिए।'
      },
      eligibility: {
        en: 'Any Indian citizen wishing to change their name for personal or legal reasons.',
        hi: 'कोई भी भारतीय नागरिक जो व्यक्तिगत या कानूनी कारणों से अपना नाम बदलना चाहता है।'
      },
      documents: {
        en: ['Affidavit for Name Change', 'Newspaper Advertisement (Original)', 'Identity Proof (Aadhaar/Voter ID)', 'Passport size Photos'],
        hi: ['नाम परिवर्तन के लिए शपथ पत्र', 'समाचार पत्र विज्ञापन (मूल)', 'पहचान प्रमाण (आधार/वोटर आईडी)', 'पासपोर्ट साइज फोटो']
      },
      process: {
        en: '1. Prepare a name change affidavit. 2. Publish an advertisement in two newspapers. 3. Submit application to the Department of Publication. 4. Wait for Gazette notification.',
        hi: '1. नाम परिवर्तन का शपथ पत्र तैयार करें। 2. दो समाचार पत्रों में विज्ञापन प्रकाशित करें। 3. प्रकाशन विभाग को आवेदन जमा करें। 4. राजपत्र अधिसूचना की प्रतीक्षा करें।'
      },
      tips: {
        en: 'Keep multiple copies of the Gazette notification as it is required for updating bank accounts and passports.',
        hi: 'राजपत्र अधिसूचना की कई प्रतियां रखें क्योंकि बैंक खातों और पासपोर्ट को अपडेट करने के लिए इसकी आवश्यकता होती है।'
      }
    }
  },
  {
    id: 'obc-ncl-rajasthan',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'OBC NCL Certificate (State)',
    serviceNameHi: 'ओबीसी एनसीएल प्रमाण पत्र (राज्य)',
    formName: 'OBC Non-Creamy Layer Form',
    formNameHi: 'ओबीसी नॉन-क्रीमी लेयर फॉर्म',
    description: 'State level OBC certificate for Rajasthan government benefits.',
    descriptionHi: 'राजस्थान सरकार के लाभों के लिए राज्य स्तरीय ओबीसी प्रमाण पत्र।',
    icon: FileCheck,
    guidelines: ['Jan Aadhaar', 'Caste proof', 'Income certificate'],
    guidelinesHi: ['जन आधार', 'जाति प्रमाण', 'आय प्रमाण पत्र'],
    searchQuery: 'OBC NCL certificate Rajasthan application form pdf',
    guide: {
      purpose: {
        en: 'To certify that the applicant belongs to the OBC category and falls under the Non-Creamy Layer for state benefits.',
        hi: 'यह प्रमाणित करने के लिए कि आवेदक ओबीसी श्रेणी से संबंधित है और राज्य के लाभों के लिए नॉन-क्रीमी लेयर के अंतर्गत आता है।'
      },
      eligibility: {
        en: 'Residents of Rajasthan belonging to OBC castes with family income below the specified limit.',
        hi: 'ओबीसी जातियों से संबंधित राजस्थान के निवासी जिनकी पारिवारिक आय निर्दिष्ट सीमा से कम है।'
      },
      documents: {
        en: ['Jan Aadhaar Card', 'Aadhaar Card', 'Caste Proof (Old certificate or father\'s certificate)', 'Income Certificate (Form I, J, K)', 'Ration Card'],
        hi: ['जन आधार कार्ड', 'आधार कार्ड', 'जाति प्रमाण (पुराना प्रमाण पत्र या पिता का प्रमाण पत्र)', 'आय प्रमाण पत्र (फॉर्म I, J, K)', 'राशन कार्ड']
      },
      process: {
        en: '1. Apply online via e-Mitra. 2. Upload Jan Aadhaar and required documents. 3. Verification by Patwari and Tehsildar. 4. Digital certificate issued.',
        hi: '1. ई-मित्र के माध्यम से ऑनलाइन आवेदन करें। 2. जन आधार और आवश्यक दस्तावेज अपलोड करें। 3. पटवारी और तहसीलदार द्वारा सत्यापन। 4. डिजिटल प्रमाण पत्र जारी किया गया।'
      },
      tips: {
        en: 'Income certificate must be signed by two gazetted officers and the applicant.',
        hi: 'आय प्रमाण पत्र पर दो राजपत्रित अधिकारियों और आवेदक के हस्ताक्षर होने चाहिए।'
      }
    }
  },
  {
    id: 'vehicle-transfer-ownership',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Transfer of Ownership',
    serviceNameHi: 'स्वामित्व का हस्तांतरण',
    formName: 'RTO Form 29 & 30',
    formNameHi: 'आरटीओ फॉर्म 29 और 30',
    description: 'Transfer of vehicle ownership to a new buyer.',
    descriptionHi: 'वाहन के स्वामित्व का नए खरीदार को हस्तांतरण।',
    icon: Repeat,
    guidelines: ['Original RC', 'Insurance', 'PUC', 'Buyer ID'],
    guidelinesHi: ['मूल आरसी', 'बीमा', 'पीयूसी', 'खरीदार आईडी'],
    searchQuery: 'Vehicle transfer of ownership form 29 30 pdf',
    guide: {
      purpose: {
        en: 'To legally transfer the ownership of a motor vehicle from the seller to the buyer.',
        hi: 'मोटर वाहन के स्वामित्व को विक्रेता से खरीदार को कानूनी रूप से हस्तांतरित करने के लिए।'
      },
      eligibility: {
        en: 'Vehicle owners selling their vehicle and the buyer.',
        hi: 'वाहन मालिक जो अपना वाहन बेच रहे हैं और खरीदार।'
      },
      documents: {
        en: ['Form 29 & 30', 'Original Registration Certificate (RC)', 'Valid Insurance', 'Valid PUC Certificate', 'Address Proof of Buyer', 'Chassis Print'],
        hi: ['फॉर्म 29 और 30', 'मूल पंजीकरण प्रमाण पत्र (RC)', 'वैध बीमा', 'वैध पीयूसी प्रमाण पत्र', 'खरीदार का पता प्रमाण', 'चेसिस प्रिंट']
      },
      process: {
        en: '1. Fill Form 29 and 30. 2. Pay transfer fee online via Parivahan portal. 3. Submit documents to the RTO where the vehicle is registered. 4. New RC issued to buyer.',
        hi: '1. फॉर्म 29 और 30 भरें। 2. परिवहन पोर्टल के माध्यम से ऑनलाइन हस्तांतरण शुल्क का भुगतान करें। 3. आरटीओ में दस्तावेज जमा करें जहां वाहन पंजीकृत है। 4. खरीदार को नई आरसी जारी की गई।'
      },
      tips: {
        en: 'Ensure there are no pending traffic fines or loans (Hypothecation) on the vehicle before transfer.',
        hi: 'हस्तांतरण से पहले सुनिश्चित करें कि वाहन पर कोई लंबित ट्रैफिक जुर्माना या ऋण (हाइपोथेकेशन) नहीं है।'
      }
    }
  },
  {
    id: 'duplicate-rc-form',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Duplicate RC',
    serviceNameHi: 'डुप्लीकेट आरसी',
    formName: 'RTO Form 26',
    formNameHi: 'आरटीओ फॉर्म 26',
    description: 'Application for duplicate registration certificate.',
    descriptionHi: 'डुप्लीकेट पंजीकरण प्रमाण पत्र के लिए आवेदन।',
    icon: FileSearch,
    guidelines: ['Police FIR', 'Insurance', 'PUC', 'Owner ID'],
    guidelinesHi: ['पुलिस प्राथमिकी', 'बीमा', 'पीयूसी', 'मालिक आईडी'],
    searchQuery: 'Duplicate RC application form 26 pdf',
    guide: {
      purpose: {
        en: 'To get a new Registration Certificate if the original is lost, stolen, or damaged.',
        hi: 'यदि मूल आरसी खो गई है, चोरी हो गई है या क्षतिग्रस्त हो गई है तो नया पंजीकरण प्रमाण पत्र प्राप्त करने के लिए।'
      },
      eligibility: {
        en: 'Registered owners of the vehicle.',
        hi: 'वाहन के पंजीकृत मालिक।'
      },
      documents: {
        en: ['Form 26', 'Police FIR (for lost RC)', 'Valid Insurance', 'Valid PUC Certificate', 'Aadhaar Card of Owner', 'Chassis Print'],
        hi: ['फॉर्म 26', 'पुलिस प्राथमिकी (खोई हुई आरसी के लिए)', 'वैध बीमा', 'वैध पीयूसी प्रमाण पत्र', 'मालिक का आधार कार्ड', 'चेसिस प्रिंट']
      },
      process: {
        en: '1. File an FIR for lost RC. 2. Fill Form 26. 3. Pay duplicate RC fee on Parivahan portal. 4. Submit documents to RTO. 5. Duplicate RC sent by post.',
        hi: '1. खोई हुई आरसी के लिए प्राथमिकी दर्ज करें। 2. फॉर्म 26 भरें। 3. परिवहन पोर्टल पर डुप्लीकेट आरसी शुल्क का भुगतान करें। 4. आरटीओ में दस्तावेज जमा करें। 5. डुप्लीकेट आरसी डाक द्वारा भेजी गई।'
      },
      tips: {
        en: 'A chassis print on a piece of paper using a pencil is mandatory for RTO submissions.',
        hi: 'आरटीओ सबमिशन के लिए पेंसिल का उपयोग करके कागज के टुकड़े पर चेसिस प्रिंट अनिवार्य है।'
      }
    }
  },
  {
    id: 'girdawari-rajasthan',
    category: 'Land and Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Girdawari Copy',
    serviceNameHi: 'गिरदावरी नकल',
    formName: 'Girdawari Application',
    formNameHi: 'गिरदावरी आवेदन',
    description: 'Record of cultivation and crop details.',
    descriptionHi: 'खेती और फसल के विवरण का रिकॉर्ड।',
    icon: Sprout,
    guidelines: ['Jan Aadhaar', 'Khasra number', 'Mobile number'],
    guidelinesHi: ['जन आधार', 'खसरा नंबर', 'मोबाइल नंबर'],
    searchQuery: 'Girdawari copy Rajasthan online download pdf',
    guide: {
      purpose: {
        en: 'To get proof of the crop sown in a particular field for a specific season.',
        hi: 'किसी विशेष मौसम के लिए किसी विशेष खेत में बोई गई फसल का प्रमाण प्राप्त करने के लिए।'
      },
      eligibility: {
        en: 'Farmers and land owners in Rajasthan.',
        hi: 'राजस्थान के किसान और भूमि मालिक।'
      },
      documents: {
        en: ['Jan Aadhaar Card', 'Khasra Number of Land', 'Mobile Number'],
        hi: ['जन आधार कार्ड', 'भूमि का खसरा नंबर', 'मोबाइल नंबर']
      },
      process: {
        en: '1. Visit Apna Khata (E-Dharti) portal. 2. Select District, Tehsil, and Village. 3. Enter Khasra number. 4. Download and print Girdawari copy.',
        hi: '1. अपना खाता (ई-धरती) पोर्टल पर जाएं। 2. जिला, तहसील और गांव का चयन करें। 3. खसरा नंबर दर्ज करें। 4. गिरदावरी नकल डाउनलोड और प्रिंट करें।'
      },
      tips: {
        en: 'Girdawari is essential for claiming crop insurance (PMFBY) and selling crops at MSP.',
        hi: 'फसल बीमा (PMFBY) का दावा करने और MSP पर फसल बेचने के लिए गिरदावरी आवश्यक है।'
      }
    }
  },
  {
    id: 'water-connection-rajasthan',
    category: 'Municipal Services',
    categoryHi: 'नगरपालिका सेवाएं',
    serviceName: 'New Water Connection',
    serviceNameHi: 'नया पानी कनेक्शन',
    formName: 'PHED Water Connection Form',
    formNameHi: 'पीएचईडी पानी कनेक्शन फॉर्म',
    description: 'Application for new domestic water connection.',
    descriptionHi: 'नए घरेलू पानी कनेक्शन के लिए आवेदन।',
    icon: Droplets,
    guidelines: ['Ownership proof', 'Aadhaar card', 'Site plan'],
    guidelinesHi: ['स्वामित्व प्रमाण', 'आधार कार्ड', 'साइट प्लान'],
    searchQuery: 'New water connection application form Rajasthan PHED pdf',
    guide: {
      purpose: {
        en: 'To apply for a new tap water connection for residential or commercial premises.',
        hi: 'आवासीय या व्यावसायिक परिसर के लिए नए नल के पानी के कनेक्शन के लिए आवेदन करने के लिए।'
      },
      eligibility: {
        en: 'Property owners or authorized tenants in Rajasthan.',
        hi: 'राजस्थान में संपत्ति के मालिक या अधिकृत किरायेदार।'
      },
      documents: {
        en: ['Proof of Ownership (Registry/Patta)', 'Aadhaar Card', 'Property Tax Receipt', 'Site Map/Plan'],
        hi: ['स्वामित्व का प्रमाण (रजिस्ट्री/पट्टा)', 'आधार कार्ड', 'संपत्ति कर रसीद', 'साइट मैप/प्लान']
      },
      process: {
        en: '1. Apply online via PHED Rajasthan portal or e-Mitra. 2. Submit documents and site plan. 3. Site inspection by PHED engineer. 4. Pay connection fee. 5. Connection installed.',
        hi: '1. पीएचईडी राजस्थान पोर्टल या ई-मित्र के माध्यम से ऑनलाइन आवेदन करें। 2. दस्तावेज और साइट प्लान जमा करें। 3. पीएचईडी इंजीनियर द्वारा साइट निरीक्षण। 4. कनेक्शन शुल्क का भुगतान करें। 5. कनेक्शन स्थापित।'
      },
      tips: {
        en: 'Ensure there are no pending dues on the property before applying for a new connection.',
        hi: 'नए कनेक्शन के लिए आवेदन करने से पहले सुनिश्चित करें कि संपत्ति पर कोई लंबित बकाया नहीं है।'
      }
    }
  },
  {
    id: 'electricity-connection-rajasthan',
    category: 'Municipal Services',
    categoryHi: 'नगरपालिका सेवाएं',
    serviceName: 'New Electricity Connection',
    serviceNameHi: 'नया बिजली कनेक्शन',
    formName: 'Discom New Connection Form',
    formNameHi: 'डिस्कॉम नया कनेक्शन फॉर्म',
    description: 'Application for new electricity connection (AVVNL/JVVNL).',
    descriptionHi: 'नए बिजली कनेक्शन (AVVNL/JVVNL) के लिए आवेदन।',
    icon: Zap,
    guidelines: ['Ownership proof', 'Aadhaar card', 'Photo'],
    guidelinesHi: ['स्वामित्व प्रमाण', 'आधार कार्ड', 'फोटो'],
    searchQuery: 'New electricity connection application form Rajasthan discom pdf',
    guide: {
      purpose: {
        en: 'To apply for a new electricity meter for domestic or non-domestic use.',
        hi: 'घरेलू या गैर-घरेलू उपयोग के लिए नए बिजली मीटर के लिए आवेदन करने के लिए।'
      },
      eligibility: {
        en: 'Property owners or legal occupants in Rajasthan.',
        hi: 'राजस्थान में संपत्ति के मालिक या कानूनी कब्जाधारी।'
      },
      documents: {
        en: ['Ownership Proof (Registry/Patta/Allotment Letter)', 'Aadhaar Card', 'Passport size Photo', 'Neighbor\'s Bill Copy (Optional)'],
        hi: ['स्वामित्व प्रमाण (रजिस्ट्री/पट्टा/आवंटन पत्र)', 'आधार कार्ड', 'पासपोर्ट साइज फोटो', 'पड़ोसी के बिल की प्रति (वैकल्पिक)']
      },
      process: {
        en: '1. Apply online via Discom portal (e.g., JVVNL/AVVNL) or e-Mitra. 2. Fill application and upload documents. 3. Feasibility check by Discom staff. 4. Pay demand note. 5. Meter installation.',
        hi: '1. डिस्कॉम पोर्टल (जैसे, JVVNL/AVVNL) या ई-मित्र के माध्यम से ऑनलाइन आवेदन करें। 2. आवेदन भरें और दस्तावेज अपलोड करें। 3. डिस्कॉम कर्मचारियों द्वारा व्यवहार्यता जांच। 4. डिमांड नोट का भुगतान करें। 5. मीटर स्थापना।'
      },
      tips: {
        en: 'Applying online is faster and allows you to track the status of your demand note.',
        hi: 'ऑनलाइन आवेदन करना तेज़ है और आपको अपने डिमांड नोट की स्थिति को ट्रैक करने की अनुमति देता है।'
      }
    }
  },
  {
    id: 'sukanya-samriddhi-yojana',
    category: 'Banking and Financial Forms',
    categoryHi: 'बैंकिंग और वित्तीय फॉर्म',
    serviceName: 'Sukanya Samriddhi Yojana',
    serviceNameHi: 'सुकन्या समृद्धि योजना',
    formName: 'SSY Account Opening Form',
    formNameHi: 'एसएसवाई खाता खोलने का फॉर्म',
    description: 'Savings scheme for the girl child with high interest.',
    descriptionHi: 'बालिकाओं के लिए उच्च ब्याज वाली बचत योजना।',
    icon: Banknote,
    guidelines: ['Birth certificate', 'Parent ID', 'Address proof'],
    guidelinesHi: ['जन्म प्रमाण पत्र', 'अभिभावक आईडी', 'पता प्रमाण'],
    searchQuery: 'Sukanya Samriddhi Yojana account opening form pdf',
    guide: {
      purpose: {
        en: 'To encourage parents to build a fund for the future education and marriage of their girl child.',
        hi: 'अभिभावकों को अपनी बालिकाओं की भविष्य की शिक्षा और विवाह के लिए धन जुटाने के लिए प्रोत्साहित करना।'
      },
      eligibility: {
        en: 'Parents or legal guardians of a girl child below 10 years of age.',
        hi: '10 वर्ष से कम आयु की बालिका के माता-पिता या कानूनी अभिभावक।'
      },
      documents: {
        en: ['Birth Certificate of Girl Child', 'Aadhaar Card of Parent/Guardian', 'PAN Card of Parent/Guardian', 'Address Proof', 'Photos'],
        hi: ['बालिका का जन्म प्रमाण पत्र', 'माता-पिता/अभिभावक का आधार कार्ड', 'माता-पिता/अभिभावक का पैन कार्ड', 'पता प्रमाण', 'फोटो']
      },
      process: {
        en: '1. Visit nearest Post Office or authorized Bank. 2. Fill the SSY account opening form. 3. Submit documents and initial deposit (min Rs. 250). 4. Receive SSY passbook.',
        hi: '1. निकटतम डाकघर या अधिकृत बैंक पर जाएं। 2. एसएसवाई खाता खोलने का फॉर्म भरें। 3. दस्तावेज और प्रारंभिक जमा (न्यूनतम 250 रुपये) जमा करें। 4. एसएसवाई पासबुक प्राप्त करें।'
      },
      tips: {
        en: 'SSY offers one of the highest interest rates among small savings schemes and provides tax benefits under Section 80C.',
        hi: 'एसएसवाई छोटी बचत योजनाओं में सबसे अधिक ब्याज दरों में से एक प्रदान करता है और धारा 80C के तहत कर लाभ प्रदान करता है।'
      }
    }
  },
  {
    id: 'atal-pension-yojana',
    category: 'Banking and Financial Forms',
    categoryHi: 'बैंकिंग और वित्तीय फॉर्म',
    serviceName: 'Atal Pension Yojana',
    serviceNameHi: 'अटल पेंशन योजना',
    formName: 'APY Registration Form',
    formNameHi: 'एपीवाई पंजीकरण फॉर्म',
    description: 'Pension scheme for unorganized sector workers.',
    descriptionHi: 'असंगठित क्षेत्र के श्रमिकों के लिए पेंशन योजना।',
    icon: Coins,
    guidelines: ['Bank account', 'Aadhaar card', 'Mobile number'],
    guidelinesHi: ['बैंक खाता', 'आधार कार्ड', 'मोबाइल नंबर'],
    searchQuery: 'Atal Pension Yojana registration form pdf',
    guide: {
      purpose: {
        en: 'To provide a guaranteed monthly pension to workers in the unorganized sector after the age of 60.',
        hi: '60 वर्ष की आयु के बाद असंगठित क्षेत्र के श्रमिकों को गारंटीकृत मासिक पेंशन प्रदान करना।'
      },
      eligibility: {
        en: 'Any Indian citizen aged between 18 and 40 years with a savings bank account.',
        hi: 'बचत बैंक खाते वाला 18 से 40 वर्ष की आयु के बीच का कोई भी भारतीय नागरिक।'
      },
      documents: {
        en: ['Aadhaar Card', 'Savings Bank Account Details', 'Mobile Number'],
        hi: ['आधार कार्ड', 'बचत बैंक खाते का विवरण', 'मोबाइल नंबर']
      },
      process: {
        en: '1. Visit your bank branch or apply via Net Banking. 2. Fill the APY registration form. 3. Choose pension amount (Rs. 1000 to Rs. 5000). 4. Set up auto-debit for contributions.',
        hi: '1. अपनी बैंक शाखा पर जाएं या नेट बैंकिंग के माध्यम से आवेदन करें। 2. एपीवाई पंजीकरण फॉर्म भरें। 3. पेंशन राशि चुनें (1000 रुपये से 5000 रुपये)। 4. योगदान के लिए ऑटो-डेबिट सेट करें।'
      },
      tips: {
        en: 'The earlier you join, the lower will be your monthly contribution for the same pension amount.',
        hi: 'जितनी जल्दी आप शामिल होंगे, उतनी ही कम आपकी समान पेंशन राशि के लिए मासिक योगदान होगा।'
      }
    }
  },
  {
    id: 'pm-vishwakarma-yojana',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'PM Vishwakarma',
    serviceNameHi: 'पीएम विश्वकर्मा',
    formName: 'Vishwakarma Registration Form',
    formNameHi: 'विश्वकर्मा पंजीकरण फॉर्म',
    description: 'Support for traditional artisans and craftspeople.',
    descriptionHi: 'पारंपरिक कारीगरों और शिल्पकारों के लिए सहायता।',
    icon: HardHat,
    guidelines: ['Aadhaar card', 'Bank details', 'Trade proof'],
    guidelinesHi: ['आधार कार्ड', 'बैंक विवरण', 'व्यापार प्रमाण'],
    searchQuery: 'PM Vishwakarma Yojana registration form online pdf',
    guide: {
      purpose: {
        en: 'To provide end-to-end support to artisans and craftspeople engaged in traditional trades.',
        hi: 'पारंपरिक व्यवसायों में लगे कारीगरों और शिल्पकारों को शुरू से अंत तक सहायता प्रदान करना।'
      },
      eligibility: {
        en: 'Artisans working with hands and tools in 18 specified traditional trades (e.g., Carpenter, Blacksmith, Potter).',
        hi: '18 निर्दिष्ट पारंपरिक व्यवसायों (जैसे, बढ़ई, लोहार, कुम्हार) में हाथों और औजारों से काम करने वाले कारीगर।'
      },
      documents: {
        en: ['Aadhaar Card', 'Mobile Number', 'Bank Passbook', 'Ration Card'],
        hi: ['आधार कार्ड', 'मोबाइल नंबर', 'बैंक पासबुक', 'राशन कार्ड']
      },
      process: {
        en: '1. Register on PM Vishwakarma portal via CSC/e-Mitra. 2. Aadhaar biometric authentication. 3. Three-step verification (Gram Panchayat, District, Screening Committee). 4. Receive ID card and toolkit incentive.',
        hi: '1. सीएससी/ई-मित्र के माध्यम से पीएम विश्वकर्मा पोर्टल पर पंजीकरण करें। 2. आधार बायोमेट्रिक प्रमाणीकरण। 3. तीन-चरणीय सत्यापन (ग्राम पंचायत, जिला, स्क्रीनिंग कमेटी)। 4. आईडी कार्ड और टूलकिट प्रोत्साहन प्राप्त करें।'
      },
      tips: {
        en: 'Benefits include skill training, toolkit incentive of Rs. 15,000, and collateral-free loans at low interest.',
        hi: 'लाभों में कौशल प्रशिक्षण, 15,000 रुपये का टूलकिट प्रोत्साहन और कम ब्याज पर संपार्श्विक-मुक्त ऋण शामिल हैं।'
      }
    }
  },
  {
    id: 'voter-id-deletion-7',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'Voter ID',
    serviceNameHi: 'वोटर आईडी',
    formName: 'Voter ID Form 7',
    formNameHi: 'वोटर आईडी फॉर्म 7',
    description: 'Application for objection to inclusion of name or deletion of name in electoral roll.',
    descriptionHi: 'मतदाता सूची में नाम शामिल करने पर आपत्ति या नाम हटाने के लिए आवेदन।',
    icon: UserMinus,
    guidelines: ['Voter ID of deceased/shifted person', 'Death certificate (if applicable)', 'Applicant ID'],
    guidelinesHi: ['मृतक/स्थानांतरित व्यक्ति का वोटर आईडी', 'मृत्यु प्रमाण पत्र (यदि लागू हो)', 'आवेदक आईडी'],
    searchQuery: 'Voter ID form 7 deletion pdf',
    guide: {
      purpose: {
        en: 'To remove a name from the voter list due to death, shifting, or duplicate entry.',
        hi: 'मृत्यु, स्थानांतरण या दोहरी प्रविष्टि के कारण मतदाता सूची से नाम हटाने के लिए।'
      },
      eligibility: {
        en: 'Any registered voter in the same constituency.',
        hi: 'उसी निर्वाचन क्षेत्र का कोई भी पंजीकृत मतदाता।'
      },
      documents: {
        en: ['Voter ID of the person to be deleted', 'Death Certificate (for death cases)', 'Address Proof (for shifting cases)', 'Applicant Voter ID'],
        hi: ['हटाए जाने वाले व्यक्ति का वोटर आईडी', 'मृत्यु प्रमाण पत्र (मृत्यु के मामलों के लिए)', 'पते का प्रमाण (स्थानांतरण के मामलों के लिए)', 'आवेदक वोटर आईडी']
      },
      process: {
        en: '1. Fill Form 7. 2. Submit to BLO or ERO office or online via Voter Helpline App. 3. Field verification by BLO. 4. Name deleted from roll.',
        hi: '1. फॉर्म 7 भरें। 2. बीएलओ या ईआरओ कार्यालय में या वोटर हेल्पलाइन ऐप के माध्यम से ऑनलाइन जमा करें। 3. बीएलओ द्वारा फील्ड सत्यापन। 4. मतदाता सूची से नाम हटा दिया गया।'
      },
      tips: {
        en: 'Deleting names of deceased family members helps maintain a clean electoral roll.',
        hi: 'मृत परिवार के सदस्यों के नाम हटाने से स्वच्छ मतदाता सूची बनाए रखने में मदद मिलती है।'
      }
    }
  },
  {
    id: 'vehicle-fitness-38',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Vehicle Fitness',
    serviceNameHi: 'वाहन फिटनेस',
    formName: 'RTO Form 38',
    formNameHi: 'आरटीओ फॉर्म 38',
    description: 'Application for grant or renewal of certificate of fitness.',
    descriptionHi: 'फिटनेस प्रमाण पत्र प्रदान करने या नवीनीकरण के लिए आवेदन।',
    icon: FileCheck,
    guidelines: ['Vehicle inspection', 'Insurance copy', 'Tax receipt'],
    guidelinesHi: ['वाहन निरीक्षण', 'बीमा प्रति', 'टैक्स रसीद'],
    searchQuery: 'RTO form 38 vehicle fitness pdf',
    guide: {
      purpose: {
        en: 'To certify that a transport/commercial vehicle is mechanically fit to ply on roads.',
        hi: 'यह प्रमाणित करने के लिए कि एक परिवहन/व्यावसायिक वाहन सड़कों पर चलने के लिए यांत्रिक रूप से फिट है।'
      },
      eligibility: {
        en: 'Owners of transport/commercial vehicles (Trucks, Taxis, Buses).',
        hi: 'परिवहन/व्यावसायिक वाहनों (ट्रक, टैक्सी, बस) के मालिक।'
      },
      documents: {
        en: ['Form 38', 'Original RC', 'Valid Insurance', 'Valid PUC', 'Road Tax Receipt', 'Speed Governor Certificate'],
        hi: ['फॉर्म 38', 'मूल आरसी', 'वैध बीमा', 'वैध पीयूसी', 'रोड टैक्स रसीद', 'स्पीड गवर्नर प्रमाण पत्र']
      },
      process: {
        en: '1. Pay fitness fee online on Parivahan. 2. Book an appointment for inspection. 3. Take vehicle to RTO for physical inspection. 4. Fitness certificate issued.',
        hi: '1. परिवहन पर ऑनलाइन फिटनेस शुल्क का भुगतान करें। 2. निरीक्षण के लिए अपॉइंटमेंट बुक करें। 3. भौतिक निरीक्षण के लिए वाहन को आरटीओ ले जाएं। 4. फिटनेस प्रमाण पत्र जारी किया गया।'
      },
      tips: {
        en: 'Ensure all lights, brakes, and reflectors are working perfectly before the RTO inspection.',
        hi: 'आरटीओ निरीक्षण से पहले सुनिश्चित करें कि सभी लाइटें, ब्रेक और रिफ्लेक्टर पूरी तरह से काम कर रहे हैं।'
      }
    }
  },
  {
    id: 'rc-renewal-25',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'RC Renewal',
    serviceNameHi: 'आरसी नवीनीकरण',
    formName: 'RTO Form 25',
    formNameHi: 'आरटीओ फॉर्म 25',
    description: 'Application for renewal of registration of non-transport vehicle.',
    descriptionHi: 'गैर-परिवहन वाहन के पंजीकरण के नवीनीकरण के लिए आवेदन।',
    icon: Repeat,
    guidelines: ['After 15 years', 'Vehicle inspection', 'Insurance'],
    guidelinesHi: ['15 साल बाद', 'वाहन निरीक्षण', 'बीमा'],
    searchQuery: 'RTO form 25 RC renewal pdf',
    guide: {
      purpose: {
        en: 'To renew the registration of a private vehicle after its initial 15-year period.',
        hi: 'निजी वाहन के शुरुआती 15 साल की अवधि के बाद उसके पंजीकरण का नवीनीकरण करना।'
      },
      eligibility: {
        en: 'Owners of private cars and bikes older than 15 years.',
        hi: '15 साल से पुरानी निजी कारों और बाइकों के मालिक।'
      },
      documents: {
        en: ['Form 25', 'Original RC', 'Valid Insurance', 'Valid PUC', 'Address Proof', 'Chassis Print'],
        hi: ['फॉर्म 25', 'मूल आरसी', 'वैध बीमा', 'वैध पीयूसी', 'पता प्रमाण', 'चेसिस प्रिंट']
      },
      process: {
        en: '1. Apply online via Parivahan. 2. Pay renewal and green tax. 3. Visit RTO for vehicle inspection. 4. RC renewed for another 5 years.',
        hi: '1. परिवहन के माध्यम से ऑनलाइन आवेदन करें। 2. नवीनीकरण और ग्रीन टैक्स का भुगतान करें। 3. वाहन निरीक्षण के लिए आरटीओ जाएं। 4. आरसी अगले 5 वर्षों के लिए नवीनीकृत।'
      },
      tips: {
        en: 'Apply at least 60 days before the expiry of the current registration to avoid late fees.',
        hi: 'विलंब शुल्क से बचने के लिए वर्तमान पंजीकरण की समाप्ति से कम से कम 60 दिन पहले आवेदन करें।'
      }
    }
  },
  {
    id: 'employment-registration-rajasthan',
    category: 'Employment Forms',
    categoryHi: 'रोजगार फॉर्म',
    serviceName: 'Employment Exchange',
    serviceNameHi: 'रोजगार कार्यालय',
    formName: 'Employment Registration Form',
    formNameHi: 'रोजगार पंजीकरण फॉर्म',
    description: 'Register as unemployed to get job alerts and allowance.',
    descriptionHi: 'नौकरी अलर्ट और भत्ता प्राप्त करने के लिए बेरोजगार के रूप में पंजीकरण करें।',
    icon: Briefcase,
    guidelines: ['Educational docs', 'Domicile cert', 'Aadhaar card'],
    guidelinesHi: ['शैक्षिक दस्तावेज', 'मूल निवास प्रमाण पत्र', 'आधार कार्ड'],
    searchQuery: 'Employment exchange registration form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To register with the state employment department for job opportunities and unemployment allowance (Berozgari Bhatta).',
        hi: 'नौकरी के अवसरों और बेरोजगारी भत्ते के लिए राज्य रोजगार विभाग के साथ पंजीकरण करना।'
      },
      eligibility: {
        en: 'Unemployed residents of Rajasthan with minimum 10th pass qualification.',
        hi: 'न्यूनतम 10वीं पास योग्यता वाले राजस्थान के बेरोजगार निवासी।'
      },
      documents: {
        en: ['Mark sheets (10th, 12th, Graduation)', 'Domicile Certificate', 'Caste Certificate', 'Aadhaar Card', 'Jan Aadhaar Card'],
        hi: ['अंकतालिकाएं (10वीं, 12वीं, स्नातक)', 'मूल निवास प्रमाण पत्र', 'जाति प्रमाण पत्र', 'आधार कार्ड', 'जन आधार कार्ड']
      },
      process: {
        en: '1. Register on Raj-Kaj or Employment portal. 2. Fill educational details. 3. Upload documents. 4. Get registration number and card.',
        hi: '1. राज-काज या रोजगार पोर्टल पर पंजीकरण करें। 2. शैक्षिक विवरण भरें। 3. दस्तावेज अपलोड करें। 4. पंजीकरण संख्या और कार्ड प्राप्त करें।'
      },
      tips: {
        en: 'Keep your registration active by renewing it every 3 years.',
        hi: 'हर 3 साल में नवीनीकरण करके अपना पंजीकरण सक्रिय रखें।'
      }
    }
  },
  {
    id: 'pension-disability',
    category: 'Pension Forms',
    categoryHi: 'पेंशन फॉर्म',
    serviceName: 'Social Security Pension',
    serviceNameHi: 'सामाजिक सुरक्षा पेंशन',
    formName: 'Disability Pension Form',
    formNameHi: 'विकलांगता पेंशन फॉर्म',
    description: 'Application for disability social security pension.',
    descriptionHi: 'विकलांगता सामाजिक सुरक्षा पेंशन के लिए आवेदन।',
    icon: Accessibility,
    guidelines: ['Disability cert (40%+)', 'Income cert', 'Aadhaar card'],
    guidelinesHi: ['विकलांगता प्रमाण पत्र (40%+)', 'आय प्रमाण पत्र', 'आधार कार्ड'],
    searchQuery: 'Disability pension form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To provide financial assistance to persons with disabilities (Divyangjan).',
        hi: 'विकलांग व्यक्तियों (दिव्यांगजन) को वित्तीय सहायता प्रदान करना।'
      },
      eligibility: {
        en: 'Persons with 40% or more disability and family income below the specified limit.',
        hi: '40% या उससे अधिक विकलांगता वाले व्यक्ति और जिनकी पारिवारिक आय निर्दिष्ट सीमा से कम है।'
      },
      documents: {
        en: ['Disability Certificate (UDID Card)', 'Income Certificate', 'Aadhaar Card', 'Jan Aadhaar Card', 'Bank Passbook'],
        hi: ['विकलांगता प्रमाण पत्र (UDID कार्ड)', 'आय प्रमाण पत्र', 'आधार कार्ड', 'जन आधार कार्ड', 'बैंक पासबुक']
      },
      process: {
        en: '1. Apply online via e-Mitra or SSP portal. 2. Submit disability and income proofs. 3. Verification by SDO/BDO. 4. Monthly pension credited to bank account.',
        hi: '1. ई-मित्र या एसएसपी पोर्टल के माध्यम से ऑनलाइन आवेदन करें। 2. विकलांगता और आय प्रमाण जमा करें। 3. एसडीओ/बीडीओ द्वारा सत्यापन। 4. मासिक पेंशन बैंक खाते में जमा।'
      },
      tips: {
        en: 'Ensure your UDID card is linked with Jan Aadhaar for seamless processing.',
        hi: 'निर्बाध प्रसंस्करण के लिए सुनिश्चित करें कि आपका यूडीआईडी कार्ड जन आधार से जुड़ा हुआ है।'
      }
    }
  },
  {
    id: 'pm-awas-yojana-urban',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'PM Awas Yojana',
    serviceNameHi: 'पीएम आवास योजना',
    formName: 'PMAY Urban Application Form',
    formNameHi: 'पीएमएवाई शहरी आवेदन फॉर्म',
    description: 'Financial aid for building houses in urban areas.',
    descriptionHi: 'शहरी क्षेत्रों में घर बनाने के लिए वित्तीय सहायता।',
    icon: Home,
    guidelines: ['Kutcha house owner', 'Income limit', 'Aadhaar card'],
    guidelinesHi: ['कच्चे घर का मालिक', 'आय सीमा', 'आधार कार्ड'],
    searchQuery: 'PMAY urban application form pdf',
    guide: {
      purpose: {
        en: 'To provide affordable housing to the urban poor through financial subsidies.',
        hi: 'वित्तीय सब्सिडी के माध्यम से शहरी गरीबों को किफायती आवास प्रदान करना।'
      },
      eligibility: {
        en: 'Families without a pucca house anywhere in India, falling under EWS/LIG categories.',
        hi: 'भारत में कहीं भी पक्का घर न रखने वाले परिवार, जो ईडब्ल्यूएस/एलआईजी श्रेणियों के अंतर्गत आते हैं।'
      },
      documents: {
        en: ['Aadhaar Card', 'Voter ID', 'Income Certificate', 'Bank Passbook', 'Affidavit of not owning a house'],
        hi: ['आधार कार्ड', 'वोटर आईडी', 'आय प्रमाण पत्र', 'बैंक पासबुक', 'घर न होने का हलफनामा']
      },
      process: {
        en: '1. Apply online via PMAY portal or at Common Service Centers (CSC). 2. Assessment by municipal corporation. 3. Inclusion in beneficiary list. 4. Funds released in installments.',
        hi: '1. पीएमएवाई पोर्टल के माध्यम से या कॉमन सर्विस सेंटर (सीएससी) पर ऑनलाइन आवेदन करें। 2. नगर निगम द्वारा मूल्यांकन। 3. लाभार्थी सूची में शामिल होना। 4. किस्तों में जारी धन।'
      },
      tips: {
        en: 'The house must be registered in the name of the female head of the family or jointly.',
        hi: 'घर परिवार की महिला मुखिया के नाम पर या संयुक्त रूप से पंजीकृत होना चाहिए।'
      }
    }
  },
  {
    id: 'pm-awas-yojana-gramin',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'PM Awas Yojana',
    serviceNameHi: 'पीएम आवास योजना',
    formName: 'PMAY Gramin Application Form',
    formNameHi: 'पीएमएवाई ग्रामीण आवेदन फॉर्म',
    description: 'Financial aid for building houses in rural areas.',
    descriptionHi: 'ग्रामीण क्षेत्रों में घर बनाने के लिए वित्तीय सहायता।',
    icon: Home,
    guidelines: ['SECC 2011 list', 'Kutcha house', 'Aadhaar card'],
    guidelinesHi: ['SECC 2011 सूची', 'कच्चा घर', 'आधार कार्ड'],
    searchQuery: 'PMAY gramin application form pdf',
    guide: {
      purpose: {
        en: 'To provide financial assistance to rural families for constructing pucca houses.',
        hi: 'ग्रामीण परिवारों को पक्के मकान बनाने के लिए वित्तीय सहायता प्रदान करना।'
      },
      eligibility: {
        en: 'Homeless families or those living in kutcha/dilapidated houses in rural areas.',
        hi: 'बेघर परिवार या ग्रामीण क्षेत्रों में कच्चे/जर्जर घरों में रहने वाले।'
      },
      documents: {
        en: ['Aadhaar Card', 'Bank Account Details', 'MGNREGA Job Card Number', 'Swachh Bharat Mission ID'],
        hi: ['आधार कार्ड', 'बैंक खाते का विवरण', 'मनरेगा जॉब कार्ड नंबर', 'स्वच्छ भारत मिशन आईडी']
      },
      process: {
        en: '1. Selection based on SECC 2011 data and Awas+ survey. 2. Verification by Gram Sabha. 3. Sanction of house. 4. Direct Benefit Transfer (DBT) of funds.',
        hi: '1. SECC 2011 डेटा और आवास+ सर्वेक्षण के आधार पर चयन। 2. ग्राम सभा द्वारा सत्यापन। 3. घर की मंजूरी। 4. धन का प्रत्यक्ष लाभ हस्तांतरण (DBT)।'
      },
      tips: {
        en: 'Beneficiaries also get 90/95 days of unskilled labor wages under MGNREGA for house construction.',
        hi: 'लाभार्थियों को घर निर्माण के लिए मनरेगा के तहत 90/95 दिनों की अकुशल श्रम मजदूरी भी मिलती है।'
      }
    }
  },
  {
    id: 'pm-ujjwala-yojana',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'Ujjwala Yojana',
    serviceNameHi: 'उज्ज्वला योजना',
    formName: 'Ujjwala Gas Connection Form',
    formNameHi: 'उज्ज्वला गैस कनेक्शन फॉर्म',
    description: 'Free LPG connection for women from BPL families.',
    descriptionHi: 'बीपीएल परिवारों की महिलाओं के लिए मुफ्त एलपीजी कनेक्शन।',
    icon: Flame,
    guidelines: ['BPL/Antyodaya card', 'Aadhaar card', 'Bank account'],
    guidelinesHi: ['बीपीएल/अंत्योदय कार्ड', 'आधार कार्ड', 'बैंक खाता'],
    searchQuery: 'PM Ujjwala Yojana application form pdf',
    guide: {
      purpose: {
        en: 'To provide clean cooking fuel (LPG) to women from poor households to improve health and environment.',
        hi: 'स्वास्थ्य और पर्यावरण में सुधार के लिए गरीब परिवारों की महिलाओं को स्वच्छ खाना पकाने का ईंधन (एलपीजी) प्रदान करना।'
      },
      eligibility: {
        en: 'Adult woman belonging to BPL, SC/ST, or other marginalized categories.',
        hi: 'बीपीएल, एससी/एसटी, या अन्य हाशिए की श्रेणियों से संबंधित वयस्क महिला।'
      },
      documents: {
        en: ['BPL Ration Card', 'Aadhaar Card of all family members', 'Bank Passbook', 'Passport size Photo'],
        hi: ['बीपीएल राशन कार्ड', 'परिवार के सभी सदस्यों का आधार कार्ड', 'बैंक पासबुक', 'पासपोर्ट साइज फोटो']
      },
      process: {
        en: '1. Fill Ujjwala application form. 2. Submit to nearest LPG distributor (Indane/HP/Bharat). 3. Verification of documents. 4. Connection issued.',
        hi: '1. उज्ज्वला आवेदन पत्र भरें। 2. निकटतम एलपीजी वितरक (इंडेन/एचपी/भारत) को जमा करें। 3. दस्तावेजों का सत्यापन। 4. कनेक्शन जारी।'
      },
      tips: {
        en: 'The first refill and stove are provided free of cost under the scheme.',
        hi: 'योजना के तहत पहली रिफिल और चूल्हा मुफ्त प्रदान किया जाता है।'
      }
    }
  },
  {
    id: 'nfsa-inclusion-rajasthan',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'NFSA (Ration Card)',
    serviceNameHi: 'एनएफएसए (राशन कार्ड)',
    formName: 'NFSA Inclusion Form',
    formNameHi: 'एनएफएसए समावेश फॉर्म',
    description: 'Application to get wheat at Rs. 2/kg under Food Security Act.',
    descriptionHi: 'खाद्य सुरक्षा अधिनियम के तहत 2 रुपये/किलो गेहूं प्राप्त करने के लिए आवेदन।',
    icon: ShoppingBag,
    guidelines: ['Eligible category', 'Jan Aadhaar', 'Income proof'],
    guidelinesHi: ['पात्र श्रेणी', 'जन आधार', 'आय प्रमाण'],
    searchQuery: 'NFSA inclusion application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To include a family under the National Food Security Act to receive subsidized food grains.',
        hi: 'रियायती खाद्यान्न प्राप्त करने के लिए राष्ट्रीय खाद्य सुरक्षा अधिनियम के तहत एक परिवार को शामिल करना।'
      },
      eligibility: {
        en: 'Families falling under specified categories like BPL, Antyodaya, small farmers, or labor card holders.',
        hi: 'बीपीएल, अंत्योदय, छोटे किसान, या लेबर कार्ड धारकों जैसी निर्दिष्ट श्रेणियों के अंतर्गत आने वाले परिवार।'
      },
      documents: {
        en: ['Jan Aadhaar Card', 'Ration Card', 'Category Proof (e.g., Labor Card, Pension PPO)', 'Self Declaration Form'],
        hi: ['जन आधार कार्ड', 'राशन कार्ड', 'श्रेणी प्रमाण (जैसे, लेबर कार्ड, पेंशन पीपीओ)', 'स्व-घोषणा फॉर्म']
      },
      process: {
        en: '1. Apply online via e-Mitra during open registration periods. 2. Submit category and income proofs. 3. Verification by Tehsildar/SDO. 4. Name added to NFSA list.',
        hi: '1. पंजीकरण अवधि के दौरान ई-मित्र के माध्यम से ऑनलाइन आवेदन करें। 2. श्रेणी और आय प्रमाण जमा करें। 3. तहसीलदार/एसडीओ द्वारा सत्यापन। 4. एनएफएसए सूची में नाम जोड़ा गया।'
      },
      tips: {
        en: 'Check the official portal regularly as the window for new NFSA applications opens periodically.',
        hi: 'नियमित रूप से आधिकारिक पोर्टल की जांच करें क्योंकि नए एनएफएसए आवेदनों के लिए विंडो समय-समय पर खुलती है।'
      }
    }
  },
  {
    id: 'marriage-special-act',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Marriage Certificate',
    serviceNameHi: 'विवाह प्रमाण पत्र',
    formName: 'Special Marriage Act Form',
    formNameHi: 'विशेष विवाह अधिनियम फॉर्म',
    description: 'Registration of inter-faith or civil marriages in India.',
    descriptionHi: 'भारत में अंतर-धार्मिक या नागरिक विवाह का पंजीकरण।',
    icon: ClipboardList,
    guidelines: ['30 days notice', 'Age proof', '3 witnesses'],
    guidelinesHi: ['30 दिन का नोटिस', 'आयु प्रमाण', '3 गवाह'],
    searchQuery: 'Special Marriage Act registration form pdf',
    guide: {
      purpose: {
        en: 'To legally register a marriage between two individuals of different religions or those who prefer a civil ceremony.',
        hi: 'दो अलग-अलग धर्मों के व्यक्तियों या नागरिक समारोह पसंद करने वालों के बीच विवाह को कानूनी रूप से पंजीकृत करना।'
      },
      eligibility: {
        en: 'Male age 21+, Female age 18+, both must be single or legally divorced/widowed.',
        hi: 'पुरुष की आयु 21+, महिला की आयु 18+, दोनों का अविवाहित या कानूनी रूप से तलाकशुदा/विधवा होना अनिवार्य है।'
      },
      documents: {
        en: ['Application Form signed by both', 'Age Proof (10th Marksheet/Passport)', 'Address Proof', 'Affidavit of Marital Status', 'Passport size Photos'],
        hi: ['दोनों द्वारा हस्ताक्षरित आवेदन पत्र', 'आयु प्रमाण (10वीं की अंकतालिका/पासपोर्ट)', 'पते का प्रमाण', 'वैवाहिक स्थिति का हलफनामा', 'पासपोर्ट साइज फोटो']
      },
      process: {
        en: '1. Submit notice of intended marriage to the Marriage Officer. 2. Notice is displayed for 30 days for objections. 3. If no objections, marriage is solemnized in presence of 3 witnesses. 4. Certificate issued.',
        hi: '1. विवाह अधिकारी को इच्छित विवाह का नोटिस जमा करें। 2. आपत्तियों के लिए 30 दिनों तक नोटिस प्रदर्शित किया जाता है। 3. यदि कोई आपत्ति नहीं है, तो 3 गवाहों की उपस्थिति में विवाह संपन्न होता है। 4. प्रमाण पत्र जारी किया गया।'
      },
      tips: {
        en: 'The 30-day notice period is mandatory and cannot be waived.',
        hi: '30 दिन की नोटिस अवधि अनिवार्य है और इसे माफ नहीं किया जा सकता है।'
      }
    }
  },
  {
    id: 'character-certificate-general',
    category: 'Police Verification Forms',
    categoryHi: 'पुलिस सत्यापन फॉर्म',
    serviceName: 'Character Certificate',
    serviceNameHi: 'चरित्र प्रमाण पत्र',
    formName: 'General Character Certificate',
    formNameHi: 'सामान्य चरित्र प्रमाण पत्र',
    description: 'Character certificate for private employment or admission.',
    descriptionHi: 'निजी रोजगार या प्रवेश के लिए चरित्र प्रमाण पत्र।',
    icon: ShieldCheck,
    guidelines: ['Identity proof', 'Address proof', 'Two references'],
    guidelinesHi: ['पहचान का प्रमाण', 'पते का प्रमाण', 'दो संदर्भ'],
    searchQuery: 'General character certificate form pdf',
    guide: {
      purpose: {
        en: 'To provide a formal statement about an individual\'s background and conduct.',
        hi: 'किसी व्यक्ति की पृष्ठभूमि और आचरण के बारे में औपचारिक विवरण प्रदान करना।'
      },
      eligibility: {
        en: 'Any individual requiring the certificate for jobs, studies, or legal matters.',
        hi: 'नौकरी, पढ़ाई या कानूनी मामलों के लिए प्रमाण पत्र की आवश्यकता वाला कोई भी व्यक्ति।'
      },
      documents: {
        en: ['Aadhaar Card', 'Address Proof', 'Passport size Photo', 'Reference letters from two reputable persons'],
        hi: ['आधार कार्ड', 'पते का प्रमाण', 'पासपोर्ट साइज फोटो', 'दो प्रतिष्ठित व्यक्तियों के संदर्भ पत्र']
      },
      process: {
        en: '1. Fill the application form. 2. Get it attested by a Gazetted Officer or submit to the local police station. 3. Verification of records. 4. Certificate issued.',
        hi: '1. आवेदन पत्र भरें। 2. इसे राजपत्रित अधिकारी द्वारा सत्यापित करवाएं या स्थानीय पुलिस स्टेशन में जमा करें। 3. रिकॉर्ड का सत्यापन। 4. प्रमाण पत्र जारी किया गया।'
      },
      tips: {
        en: 'Police character certificates are generally more widely accepted than those from individuals.',
        hi: 'पुलिस चरित्र प्रमाण पत्र आम तौर पर व्यक्तियों के प्रमाण पत्रों की तुलना में अधिक व्यापक रूप से स्वीकार किए जाते हैं।'
      }
    }
  },
  {
    id: 'migration-certificate-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Migration Certificate',
    serviceNameHi: 'प्रवासन प्रमाण पत्र',
    formName: 'Migration Application Form',
    formNameHi: 'प्रवासन आवेदन फॉर्म',
    description: 'Required for students moving to a different Board or University.',
    descriptionHi: 'दूसरे बोर्ड या विश्वविद्यालय में जाने वाले छात्रों के लिए आवश्यक।',
    icon: GraduationCap,
    guidelines: ['Last marksheet', 'TC copy', 'Fees receipt'],
    guidelinesHi: ['अंतिम अंकतालिका', 'टीसी प्रति', 'फीस रसीद'],
    searchQuery: 'Migration certificate application form pdf',
    guide: {
      purpose: {
        en: 'To allow a student to transfer from one educational board or university to another.',
        hi: 'एक छात्र को एक शैक्षिक बोर्ड या विश्वविद्यालय से दूसरे में स्थानांतरित करने की अनुमति देना।'
      },
      eligibility: {
        en: 'Students who have completed their course or are leaving mid-way to join another institution.',
        hi: 'वे छात्र जिन्होंने अपना पाठ्यक्रम पूरा कर लिया है या किसी अन्य संस्थान में शामिल होने के लिए बीच में ही छोड़ रहे हैं।'
      },
      documents: {
        en: ['Original Transfer Certificate (TC)', 'Copy of last Marksheet', 'Identity Proof', 'Fee Payment Receipt'],
        hi: ['मूल स्थानांतरण प्रमाण पत्र (TC)', 'अंतिम अंकतालिका की प्रति', 'पहचान प्रमाण', 'शुल्क भुगतान रसीद']
      },
      process: {
        en: '1. Apply to the Registrar of the current University or Board. 2. Pay the prescribed migration fee. 3. Submit the required documents. 4. Certificate is sent by post or collected in person.',
        hi: '1. वर्तमान विश्वविद्यालय या बोर्ड के रजिस्ट्रार को आवेदन करें। 2. निर्धारित प्रवासन शुल्क का भुगतान करें। 3. आवश्यक दस्तावेज जमा करें। 4. प्रमाण पत्र डाक द्वारा भेजा जाता है या व्यक्तिगत रूप से प्राप्त किया जाता है।'
      },
      tips: {
        en: 'Ensure you have your original TC before applying for a migration certificate.',
        hi: 'प्रवासन प्रमाण पत्र के लिए आवेदन करने से पहले सुनिश्चित करें कि आपके पास अपना मूल टीसी है।'
      }
    }
  },
  {
    id: 'land-conversion-90a',
    category: 'Land & Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Land Conversion',
    serviceNameHi: 'भूमि रूपांतरण',
    formName: '90-A Conversion Form',
    formNameHi: '90-A रूपांतरण फॉर्म',
    description: 'Convert agricultural land to non-agricultural use in Rajasthan.',
    descriptionHi: 'राजस्थान में कृषि भूमि को गैर-कृषि उपयोग में बदलें।',
    icon: Map,
    guidelines: ['Land title', 'Site plan', 'Conversion charges'],
    guidelinesHi: ['भूमि शीर्षक', 'साइट प्लान', 'रूपांतरण शुल्क'],
    searchQuery: '90-A land conversion form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To legally change the status of agricultural land for residential, commercial, or industrial use.',
        hi: 'आवासीय, व्यावसायिक या औद्योगिक उपयोग के लिए कृषि भूमि की स्थिति को कानूनी रूप से बदलने के लिए।'
      },
      eligibility: {
        en: 'Land owners in Rajasthan whose land falls under the master plan or specific conversion zones.',
        hi: 'राजस्थान के भूमि मालिक जिनकी भूमि मास्टर प्लान या विशिष्ट रूपांतरण क्षेत्रों के अंतर्गत आती है।'
      },
      documents: {
        en: ['Jamabandi (latest)', 'Trace Map', 'Site Plan', 'Identity Proof', 'Affidavit regarding land use'],
        hi: ['जमाबंदी (नवीनतम)', 'ट्रेस मैप', 'साइट प्लान', 'पहचान प्रमाण', 'भूमि उपयोग के संबंध में हलफनामा']
      },
      process: {
        en: '1. Apply online via the Urban Development or Revenue portal. 2. Submit documents and pay processing fees. 3. Public notice for objections (7-15 days). 4. Site inspection and final approval. 5. Pay conversion charges.',
        hi: '1. शहरी विकास या राजस्व पोर्टल के माध्यम से ऑनलाइन आवेदन करें। 2. दस्तावेज जमा करें और प्रसंस्करण शुल्क का भुगतान करें। 3. आपत्तियों के लिए सार्वजनिक नोटिस (7-15 दिन)। 4. साइट निरीक्षण और अंतिम अनुमोदन। 5. रूपांतरण शुल्क का भुगतान करें।'
      },
      tips: {
        en: 'Land conversion is mandatory before starting any construction on agricultural land.',
        hi: 'कृषि भूमि पर कोई भी निर्माण शुरू करने से पहले भूमि रूपांतरण अनिवार्य है।'
      }
    }
  },
  {
    id: 'e-shram-registration',
    category: 'Employment Forms',
    categoryHi: 'रोजगार फॉर्म',
    serviceName: 'e-Shram Card',
    serviceNameHi: 'ई-श्रम कार्ड',
    formName: 'e-Shram Enrollment Form',
    formNameHi: 'ई-श्रम नामांकन फॉर्म',
    description: 'National database for unorganized workers to get social security benefits.',
    descriptionHi: 'सामाजिक सुरक्षा लाभ प्राप्त करने के लिए असंगठित श्रमिकों के लिए राष्ट्रीय डेटाबेस।',
    icon: HardHat,
    guidelines: ['Aadhaar card', 'Bank account', 'Mobile number'],
    guidelinesHi: ['आधार कार्ड', 'बैंक खाता', 'मोबाइल नंबर'],
    searchQuery: 'e-Shram card registration form pdf',
    guide: {
      purpose: {
        en: 'To create a national database of unorganized workers and provide them with social security benefits and accidental insurance.',
        hi: 'असंगठित श्रमिकों का एक राष्ट्रीय डेटाबेस बनाना और उन्हें सामाजिक सुरक्षा लाभ और दुर्घटना बीमा प्रदान करना।'
      },
      eligibility: {
        en: 'Any worker in the unorganized sector aged between 16 and 59 years (e.g., construction workers, street vendors, domestic workers).',
        hi: 'असंगठित क्षेत्र का कोई भी श्रमिक जिसकी आयु 16 से 59 वर्ष के बीच हो (जैसे, निर्माण श्रमिक, रेहड़ी-पटरी वाले, घरेलू कामगार)।'
      },
      documents: {
        en: ['Aadhaar Card', 'Bank Passbook', 'Active Mobile Number linked with Aadhaar'],
        hi: ['आधार कार्ड', 'बैंक पासबुक', 'आधार से जुड़ा सक्रिय मोबाइल नंबर']
      },
      process: {
        en: '1. Visit e-Shram portal or nearest CSC/e-Mitra. 2. Self-registration using Aadhaar OTP. 3. Fill occupation and bank details. 4. Download and print e-Shram card.',
        hi: '1. ई-श्रम पोर्टल या निकटतम सीएससी/ई-मित्र पर जाएं। 2. आधार ओटीपी का उपयोग करके स्व-पंजीकरण। 3. व्यवसाय और बैंक विवरण भरें। 4. ई-श्रम कार्ड डाउनलोड और प्रिंट करें।'
      },
      tips: {
        en: 'Registration is free of cost. The card provides a unique UAN number valid across India.',
        hi: 'पंजीकरण निःशुल्क है। कार्ड एक अद्वितीय यूएएन नंबर प्रदान करता है जो पूरे भारत में मान्य है।'
      }
    }
  },
  {
    id: 'udid-card-disability',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'UDID Card',
    serviceNameHi: 'यूडीआईडी कार्ड',
    formName: 'Unique Disability ID Form',
    formNameHi: 'विशिष्ट विकलांगता आईडी फॉर्म',
    description: 'Single document for identification and verification of persons with disabilities.',
    descriptionHi: 'विकलांग व्यक्तियों की पहचान और सत्यापन के लिए एकल दस्तावेज।',
    icon: Accessibility,
    guidelines: ['Disability cert', 'Aadhaar card', 'Photo'],
    guidelinesHi: ['विकलांगता प्रमाण पत्र', 'आधार कार्ड', 'फोटो'],
    searchQuery: 'UDID card application form pdf',
    guide: {
      purpose: {
        en: 'To provide a unique identity card to persons with disabilities to streamline the tracking of benefits and schemes.',
        hi: 'विकलांग व्यक्तियों को एक विशिष्ट पहचान पत्र प्रदान करना ताकि लाभों और योजनाओं की ट्रैकिंग को सुव्यवस्थित किया जा सके।'
      },
      eligibility: {
        en: 'Any person with a disability as defined under the RPwD Act 2016.',
        hi: 'RPwD अधिनियम 2016 के तहत परिभाषित विकलांगता वाला कोई भी व्यक्ति।'
      },
      documents: {
        en: ['Disability Certificate', 'Identity Proof (Aadhaar/Voter ID)', 'Address Proof', 'Passport size Photo'],
        hi: ['विकलांगता प्रमाण पत्र', 'पहचान प्रमाण (आधार/वोटर आईडी)', 'पते का प्रमाण', 'पासपोर्ट साइज फोटो']
      },
      process: {
        en: '1. Register on the Swavlamban Card portal. 2. Fill personal and disability details. 3. Upload documents and photo. 4. Verification by medical board. 5. Card sent by post.',
        hi: '1. स्वावलंबन कार्ड पोर्टल पर पंजीकरण करें। 2. व्यक्तिगत और विकलांगता विवरण भरें। 3. दस्तावेज और फोटो अपलोड करें। 4. मेडिकल बोर्ड द्वारा सत्यापन। 5. कार्ड डाक द्वारा भेजा गया।'
      },
      tips: {
        en: 'The UDID card removes the need for carrying multiple disability certificates for different purposes.',
        hi: 'यूडीआईडी कार्ड विभिन्न उद्देश्यों के लिए कई विकलांगता प्रमाण पत्र ले जाने की आवश्यकता को समाप्त करता है।'
      }
    }
  },
  {
    id: 'pm-svanidhi-loan',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'PM SVANidhi',
    serviceNameHi: 'पीएम स्वनिधि',
    formName: 'Street Vendor Loan Form',
    formNameHi: 'रेहड़ी-पटरी वाला ऋण फॉर्म',
    description: 'Working capital loan up to Rs. 10,000 for street vendors.',
    descriptionHi: 'रेहड़ी-पटरी वालों के लिए 10,000 रुपये तक का कार्यशील पूंजी ऋण।',
    icon: Banknote,
    guidelines: ['Vendor ID card', 'Aadhaar card', 'Bank account'],
    guidelinesHi: ['विक्रेता आईडी कार्ड', 'आधार कार्ड', 'बैंक खाता'],
    searchQuery: 'PM SVANidhi loan application form pdf',
    guide: {
      purpose: {
        en: 'To provide affordable working capital loans to street vendors to resume their livelihoods.',
        hi: 'रेहड़ी-पटरी वालों को अपनी आजीविका फिर से शुरू करने के लिए किफायती कार्यशील पूंजी ऋण प्रदान करना।'
      },
      eligibility: {
        en: 'Street vendors in urban areas who were vending on or before March 24, 2020.',
        hi: 'शहरी क्षेत्रों के रेहड़ी-पटरी वाले जो 24 मार्च, 2020 या उससे पहले वेंडिंग कर रहे थे।'
      },
      documents: {
        en: ['Certificate of Vending / Vendor ID Card', 'Aadhaar Card', 'Voter ID', 'Bank Account Details'],
        hi: ['वेंडिंग का प्रमाण पत्र / विक्रेता आईडी कार्ड', 'आधार कार्ड', 'वोटर आईडी', 'बैंक खाते का विवरण']
      },
      process: {
        en: '1. Apply online via PM SVANidhi portal or mobile app. 2. Select the lending institution (Bank/NBFC). 3. Verification by Urban Local Body (ULB). 4. Loan disbursement.',
        hi: '1. पीएम स्वनिधि पोर्टल या मोबाइल ऐप के माध्यम से ऑनलाइन आवेदन करें। 2. ऋण देने वाली संस्था (बैंक/एनबीएफसी) का चयन करें। 3. शहरी स्थानीय निकाय (ULB) द्वारा सत्यापन। 4. ऋण वितरण।'
      },
      tips: {
        en: 'Timely repayment makes you eligible for a higher loan amount (Rs. 20,000 and Rs. 50,000) in the next cycles.',
        hi: 'समय पर पुनर्भुगतान आपको अगले चक्रों में उच्च ऋण राशि (20,000 रुपये और 50,000 रुपये) के लिए पात्र बनाता है।'
      }
    }
  },
  {
    id: 'patta-application-urban',
    category: 'Land & Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Lease (Patta)',
    serviceNameHi: 'पट्टा',
    formName: 'Urban Lease Application',
    formNameHi: 'शहरी पट्टा आवेदन',
    description: 'Application for ownership rights (Patta) in urban areas of Rajasthan.',
    descriptionHi: 'राजस्थान के शहरी क्षेत्रों में स्वामित्व अधिकार (पट्टा) के लिए आवेदन।',
    icon: Building,
    guidelines: ['Possession proof', 'Aadhaar card', 'Site plan'],
    guidelinesHi: ['कब्जे का प्रमाण', 'आधार कार्ड', 'साइट प्लान'],
    searchQuery: 'Urban lease patta application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To obtain legal ownership rights (Patta) for residential plots in urban local bodies.',
        hi: 'शहरी स्थानीय निकायों में आवासीय भूखंडों के लिए कानूनी स्वामित्व अधिकार (पट्टा) प्राप्त करने के लिए।'
      },
      eligibility: {
        en: 'Residents occupying land in urban areas without formal title, as per government schemes like Prashasan Shehron Ke Sang.',
        hi: 'प्रशासन शहरों के संग जैसी सरकारी योजनाओं के अनुसार, औपचारिक शीर्षक के बिना शहरी क्षेत्रों में भूमि पर कब्जा करने वाले निवासी।'
      },
      documents: {
        en: ['Proof of Possession (Old electricity/water bills)', 'Site Map', 'Aadhaar Card', 'Jan Aadhaar Card', 'Affidavit of possession'],
        hi: ['कब्जे का प्रमाण (पुराने बिजली/पानी के बिल)', 'साइट मैप', 'आधार कार्ड', 'जन आधार कार्ड', 'कब्जे का हलफनामा']
      },
      process: {
        en: '1. Apply during special camps or online via the municipal portal. 2. Submit possession proofs and site plan. 3. Site inspection and measurement. 4. Pay lease money and urban assessment. 5. Patta issued.',
        hi: '1. विशेष शिविरों के दौरान या नगरपालिका पोर्टल के माध्यम से ऑनलाइन आवेदन करें। 2. कब्जे के प्रमाण और साइट प्लान जमा करें। 3. साइट निरीक्षण और माप। 4. लीज मनी और शहरी मूल्यांकन का भुगतान करें। 5. पट्टा जारी।'
      },
      tips: {
        en: 'Special campaigns like "Prashasan Shehron Ke Sang" offer significant discounts on lease money.',
        hi: '"प्रशासन शहरों के संग" जैसे विशेष अभियान लीज मनी पर महत्वपूर्ण छूट प्रदान करते हैं।'
      }
    }
  },
  {
    id: 'birth-certificate-rajasthan',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Birth Certificate',
    serviceNameHi: 'जन्म प्रमाण पत्र',
    formName: 'Birth Registration Form',
    formNameHi: 'जन्म पंजीकरण फॉर्म',
    description: 'Official record of a child\'s birth in Rajasthan.',
    descriptionHi: 'राजस्थान में बच्चे के जन्म का आधिकारिक रिकॉर्ड।',
    icon: Baby,
    guidelines: ['Hospital discharge summary', 'Parents Aadhaar', 'Address proof'],
    guidelinesHi: ['अस्पताल से छुट्टी का सारांश', 'माता-पिता का आधार', 'पते का प्रमाण'],
    searchQuery: 'Birth certificate registration form Rajasthan Pehchan portal pdf',
    guide: {
      purpose: {
        en: 'To officially record the birth of a child and obtain a legal document for identity and age proof.',
        hi: 'बच्चे के जन्म को आधिकारिक रूप से रिकॉर्ड करने और पहचान और आयु प्रमाण के लिए कानूनी दस्तावेज प्राप्त करने के लिए।'
      },
      eligibility: {
        en: 'Any child born in Rajasthan. Registration must ideally be done within 21 days of birth.',
        hi: 'राजस्थान में पैदा हुआ कोई भी बच्चा। पंजीकरण आदर्श रूप से जन्म के 21 दिनों के भीतर किया जाना चाहिए।'
      },
      documents: {
        en: ['Hospital Discharge Slip', 'Aadhaar Card of Parents', 'Address Proof (Voter ID/Electricity Bill)', 'Informant Details'],
        hi: ['अस्पताल डिस्चार्ज स्लिप', 'माता-पिता का आधार कार्ड', 'पते का प्रमाण (वोटर आईडी/बिजली बिल)', 'सूचना देने वाले का विवरण']
      },
      process: {
        en: '1. Visit the Pehchan portal or e-Mitra. 2. Fill the birth registration form. 3. Upload hospital discharge slip and parents\' IDs. 4. Verification by Registrar. 5. Download certificate from Pehchan portal.',
        hi: '1. पहचान पोर्टल या ई-मित्र पर जाएं। 2. जन्म पंजीकरण फॉर्म भरें। 3. अस्पताल डिस्चार्ज स्लिप और माता-पिता की आईडी अपलोड करें। 4. रजिस्ट्रार द्वारा सत्यापन। 5. पहचान पोर्टल से प्रमाण पत्र डाउनलोड करें।'
      },
      tips: {
        en: 'Registration within 21 days is free. Delayed registration requires an affidavit and permission from higher authorities.',
        hi: '21 दिनों के भीतर पंजीकरण निःशुल्क है। विलंबित पंजीकरण के लिए हलफनामे और उच्च अधिकारियों से अनुमति की आवश्यकता होती है।'
      }
    }
  },
  {
    id: 'death-certificate-rajasthan',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Death Certificate',
    serviceNameHi: 'मृत्यु प्रमाण पत्र',
    formName: 'Death Registration Form',
    formNameHi: 'मृत्यु पंजीकरण फॉर्म',
    description: 'Official record of a person\'s death in Rajasthan.',
    descriptionHi: 'राजस्थान में किसी व्यक्ति की मृत्यु का आधिकारिक रिकॉर्ड।',
    icon: FileText,
    guidelines: ['Medical certificate of death', 'Deceased Aadhaar', 'Informant ID'],
    guidelinesHi: ['मृत्यु का चिकित्सा प्रमाण पत्र', 'मृतक का आधार', 'सूचना देने वाले की आईडी'],
    searchQuery: 'Death certificate registration form Rajasthan Pehchan portal pdf',
    guide: {
      purpose: {
        en: 'To officially record the death of a person for legal, financial, and property settlement purposes.',
        hi: 'कानूनी, वित्तीय और संपत्ति निपटान उद्देश्यों के लिए किसी व्यक्ति की मृत्यु को आधिकारिक रूप से रिकॉर्ड करने के लिए।'
      },
      eligibility: {
        en: 'Death occurring in Rajasthan. Must be registered within 21 days.',
        hi: 'राजस्थान में होने वाली मृत्यु। 21 दिनों के भीतर पंजीकृत होना चाहिए।'
      },
      documents: {
        en: ['Medical Certificate of Death (from hospital)', 'Aadhaar Card of Deceased', 'Informant\'s Identity Proof', 'Address Proof of Deceased'],
        hi: ['मृत्यु का चिकित्सा प्रमाण पत्र (अस्पताल से)', 'मृतक का आधार कार्ड', 'सूचना देने वाले का पहचान प्रमाण', 'मृतक का पते का प्रमाण']
      },
      process: {
        en: '1. Apply on Pehchan portal or via e-Mitra. 2. Submit medical certificate and deceased\'s details. 3. Verification by local registrar. 4. Certificate issued online.',
        hi: '1. पहचान पोर्टल पर या ई-मित्र के माध्यम से आवेदन करें। 2. चिकित्सा प्रमाण पत्र और मृतक का विवरण जमा करें। 3. स्थानीय रजिस्ट्रार द्वारा सत्यापन। 4. प्रमाण पत्र ऑनलाइन जारी किया गया।'
      },
      tips: {
        en: 'Timely registration is crucial for insurance claims and legal heirship processes.',
        hi: 'बीमा दावों और कानूनी उत्तराधिकार प्रक्रियाओं के लिए समय पर पंजीकरण महत्वपूर्ण है।'
      }
    }
  },
  {
    id: 'caste-certificate-rajasthan',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Caste Certificate',
    serviceNameHi: 'जाति प्रमाण पत्र',
    formName: 'SC/ST/OBC Certificate Form',
    formNameHi: 'एससी/एसटी/ओबीसी प्रमाण पत्र फॉर्म',
    description: 'Proof of belonging to a specific caste category for reservation benefits.',
    descriptionHi: 'आरक्षण लाभ के लिए एक विशिष्ट जाति श्रेणी से संबंधित होने का प्रमाण।',
    icon: ShieldCheck,
    guidelines: ['Aadhaar card', 'Ration card', 'Caste proof of father', 'Old record'],
    guidelinesHi: ['आधार कार्ड', 'राशन कार्ड', 'पिता का जाति प्रमाण', 'पुराना रिकॉर्ड'],
    searchQuery: 'Caste certificate application form Rajasthan e-Mitra pdf',
    guide: {
      purpose: {
        en: 'To provide official proof of caste for availing reservation in education, jobs, and government schemes.',
        hi: 'शिक्षा, नौकरियों और सरकारी योजनाओं में आरक्षण का लाभ उठाने के लिए जाति का आधिकारिक प्रमाण प्रदान करना।'
      },
      eligibility: {
        en: 'Residents of Rajasthan belonging to SC, ST, or OBC categories.',
        hi: 'राजस्थान के निवासी जो एससी, एसटी या ओबीसी श्रेणियों से संबंधित हैं।'
      },
      documents: {
        en: ['Aadhaar Card', 'Jan Aadhaar Card', 'Ration Card', 'Father\'s Caste Certificate', 'Land Records/Old School Certificate (showing caste)', 'Self-Declaration Form'],
        hi: ['आधार कार्ड', 'जन आधार कार्ड', 'राशन कार्ड', 'पिता का जाति प्रमाण पत्र', 'भूमि रिकॉर्ड/पुराना स्कूल प्रमाण पत्र (जाति दिखाते हुए)', 'स्व-घोषणा फॉर्म']
      },
      process: {
        en: '1. Visit e-Mitra center. 2. Fill the application form. 3. Attach required documents and father\'s caste proof. 4. Tehsildar verification. 5. Digitally signed certificate issued.',
        hi: '1. ई-मित्र केंद्र पर जाएं। 2. आवेदन फॉर्म भरें। 3. आवश्यक दस्तावेज और पिता का जाति प्रमाण संलग्न करें। 4. तहसीलदार सत्यापन। 5. डिजिटल रूप से हस्ताक्षरित प्रमाण पत्र जारी।'
      },
      tips: {
        en: 'OBC certificates for Central Government jobs have a different format and validity period compared to State certificates.',
        hi: 'केंद्र सरकार की नौकरियों के लिए ओबीसी प्रमाण पत्र का प्रारूप और वैधता अवधि राज्य प्रमाण पत्रों की तुलना में भिन्न होती है।'
      }
    }
  },
  {
    id: 'income-certificate-rajasthan',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Income Certificate',
    serviceNameHi: 'आय प्रमाण पत्र',
    formName: 'Income Declaration Form',
    formNameHi: 'आय घोषणा फॉर्म',
    description: 'Document certifying the annual income of a family in Rajasthan.',
    descriptionHi: 'राजस्थान में एक परिवार की वार्षिक आय को प्रमाणित करने वाला दस्तावेज।',
    icon: IndianRupee,
    guidelines: ['Aadhaar card', 'Ration card', 'Salary slip/ITR', 'Two witnesses'],
    guidelinesHi: ['आधार कार्ड', 'राशन कार्ड', 'वेतन पर्ची/आईटीआर', 'दो गवाह'],
    searchQuery: 'Income certificate application form Rajasthan e-Mitra pdf',
    guide: {
      purpose: {
        en: 'To certify family income for scholarships, fee concessions, and eligibility for various welfare schemes.',
        hi: 'छात्रवृत्ति, शुल्क रियायत और विभिन्न कल्याणकारी योजनाओं के लिए पात्रता के लिए पारिवारिक आय प्रमाणित करना।'
      },
      eligibility: {
        en: 'Any resident of Rajasthan requiring income proof for government purposes.',
        hi: 'राजस्थान का कोई भी निवासी जिसे सरकारी उद्देश्यों के लिए आय प्रमाण की आवश्यकता है।'
      },
      documents: {
        en: ['Aadhaar Card', 'Jan Aadhaar Card', 'Ration Card', 'Salary Slip (if employed)', 'ITR (if applicable)', 'Affidavit on Non-Judicial Stamp Paper', 'Verification by two Gazetted Officers'],
        hi: ['आधार कार्ड', 'जन आधार कार्ड', 'राशन कार्ड', 'वेतन पर्ची (यदि कार्यरत है)', 'आईटीआर (यदि लागू हो)', 'गैर-न्यायिक स्टाम्प पेपर पर हलफनामा', 'दो राजपत्रित अधिकारियों द्वारा सत्यापन']
      },
      process: {
        en: '1. Obtain the form from e-Mitra. 2. Fill details and get it verified by two witnesses/officers. 3. Submit at e-Mitra with Jan Aadhaar. 4. Tehsildar approval. 5. Certificate issued.',
        hi: '1. ई-मित्र से फॉर्म प्राप्त करें। 2. विवरण भरें और इसे दो गवाहों/अधिकारियों द्वारा सत्यापित करवाएं। 3. जन आधार के साथ ई-मित्र पर जमा करें। 4. तहसीलदार की मंजूरी। 5. प्रमाण पत्र जारी।'
      },
      tips: {
        en: 'Income certificates are usually valid for 6 months to 1 year depending on the purpose.',
        hi: 'आय प्रमाण पत्र आमतौर पर उद्देश्य के आधार पर 6 महीने से 1 वर्ष के लिए मान्य होते हैं।'
      }
    }
  },
  {
    id: 'domicile-certificate-rajasthan',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Domicile (Bonafide)',
    serviceNameHi: 'मूल निवास (बोनाफाइड)',
    formName: 'Bonafide Resident Certificate Form',
    formNameHi: 'मूल निवास प्रमाण पत्र फॉर्म',
    description: 'Proof of permanent residence in Rajasthan.',
    descriptionHi: 'राजस्थान में स्थायी निवास का प्रमाण।',
    icon: Home,
    guidelines: ['Aadhaar card', 'Ration card', '10 years residence proof', 'Voter list'],
    guidelinesHi: ['आधार कार्ड', 'राशन कार्ड', '10 साल का निवास प्रमाण', 'वोटर लिस्ट'],
    searchQuery: 'Bonafide resident certificate application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To prove that a person is a permanent resident of Rajasthan for education and employment benefits.',
        hi: 'यह साबित करने के लिए कि कोई व्यक्ति शिक्षा और रोजगार लाभ के लिए राजस्थान का स्थायी निवासी है।'
      },
      eligibility: {
        en: 'Persons living in Rajasthan for at least 10 years or born in Rajasthan.',
        hi: 'कम से कम 10 वर्षों से राजस्थान में रहने वाले या राजस्थान में पैदा हुए व्यक्ति।'
      },
      documents: {
        en: ['Aadhaar Card', 'Jan Aadhaar Card', 'Ration Card', 'Voter ID', 'Proof of 10 years stay (Electricity bills/School certificates)', 'Self-Declaration'],
        hi: ['आधार कार्ड', 'जन आधार कार्ड', 'राशन कार्ड', 'वोटर आईडी', '10 साल के प्रवास का प्रमाण (बिजली बिल/स्कूल प्रमाण पत्र)', 'स्व-घोषणा']
      },
      process: {
        en: '1. Apply at e-Mitra center. 2. Provide Jan Aadhaar for data fetching. 3. Upload residence proofs. 4. Verification by Patwari and Tehsildar. 5. Digital certificate issued.',
        hi: '1. ई-मित्र केंद्र पर आवेदन करें। 2. डेटा प्राप्त करने के लिए जन आधार प्रदान करें। 3. निवास प्रमाण अपलोड करें। 4. पटवारी और तहसीलदार द्वारा सत्यापन। 5. डिजिटल प्रमाण पत्र जारी।'
      },
      tips: {
        en: 'A Domicile certificate once issued is generally valid for a lifetime unless there is a change in permanent residence.',
        hi: 'एक बार जारी होने के बाद मूल निवास प्रमाण पत्र आम तौर पर जीवन भर के लिए मान्य होता है जब तक कि स्थायी निवास में बदलाव न हो।'
      }
    }
  },
  {
    id: 'minority-certificate-rajasthan',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Minority Certificate',
    serviceNameHi: 'अल्पसंख्यक प्रमाण पत्र',
    formName: 'Minority Community Certificate Form',
    formNameHi: 'अल्पसंख्यक समुदाय प्रमाण पत्र फॉर्म',
    description: 'Proof of belonging to a religious minority community.',
    descriptionHi: 'धार्मिक अल्पसंख्यक समुदाय से संबंधित होने का प्रमाण।',
    icon: Users,
    guidelines: ['Aadhaar card', 'Self-declaration', 'Community proof'],
    guidelinesHi: ['आधार कार्ड', 'स्व-घोषणा', 'समुदाय प्रमाण'],
    searchQuery: 'Minority certificate application form Rajasthan e-Mitra pdf',
    guide: {
      purpose: {
        en: 'To certify that a person belongs to a religious minority (Muslim, Christian, Sikh, Buddhist, Jain, Parsi) for scholarships and schemes.',
        hi: 'यह प्रमाणित करने के लिए कि कोई व्यक्ति छात्रवृत्ति और योजनाओं के लिए धार्मिक अल्पसंख्यक (मुस्लिम, ईसाई, सिख, बौद्ध, जैन, पारसी) से संबंधित है।'
      },
      eligibility: {
        en: 'Residents of Rajasthan belonging to notified minority communities.',
        hi: 'अधिसूचित अल्पसंख्यक समुदायों से संबंधित राजस्थान के निवासी।'
      },
      documents: {
        en: ['Aadhaar Card', 'Jan Aadhaar Card', 'Self-Declaration of Religion', 'Educational Certificates', 'Ration Card'],
        hi: ['आधार कार्ड', 'जन आधार कार्ड', 'धर्म की स्व-घोषणा', 'शैक्षिक प्रमाण पत्र', 'राशन कार्ड']
      },
      process: {
        en: '1. Apply via e-Mitra. 2. Provide self-declaration of religion. 3. Verification by local authorities. 4. Certificate issued.',
        hi: '1. ई-मित्र के माध्यम से आवेदन करें। 2. धर्म की स्व-घोषणा प्रदान करें। 3. स्थानीय अधिकारियों द्वारा सत्यापन। 4. प्रमाण पत्र जारी।'
      },
      tips: {
        en: 'Often, a self-declaration is sufficient for many scholarship applications, but a formal certificate is better for permanent records.',
        hi: 'अक्सर, कई छात्रवृत्ति आवेदनों के लिए स्व-घोषणा पर्याप्त होती है, लेकिन स्थायी रिकॉर्ड के लिए औपचारिक प्रमाण पत्र बेहतर होता है।'
      }
    }
  },
  {
    id: 'marriage-certificate-rajasthan',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Marriage Certificate',
    serviceNameHi: 'विवाह प्रमाण पत्र',
    formName: 'Marriage Registration Form',
    formNameHi: 'विवाह पंजीकरण फॉर्म',
    description: 'Legal proof of marriage registered in Rajasthan.',
    descriptionHi: 'राजस्थान में पंजीकृत विवाह का कानूनी प्रमाण।',
    icon: Heart,
    guidelines: ['Wedding card', 'Joint photo', 'Witnesses IDs', 'Age proof'],
    guidelinesHi: ['शादी का कार्ड', 'संयुक्त फोटो', 'गवाहों की आईडी', 'आयु प्रमाण'],
    searchQuery: 'Marriage registration form Rajasthan Pehchan portal pdf',
    guide: {
      purpose: {
        en: 'To legally register a marriage and obtain a certificate for passport, visa, and joint bank accounts.',
        hi: 'विवाह को कानूनी रूप से पंजीकृत करने और पासपोर्ट, वीजा और संयुक्त बैंक खातों के लिए प्रमाण पत्र प्राप्त करने के लिए।'
      },
      eligibility: {
        en: 'Groom (21+ years) and Bride (18+ years). Marriage must have occurred in Rajasthan or one party resides in Rajasthan.',
        hi: 'दूल्हा (21+ वर्ष) और दुल्हन (18+ वर्ष)। विवाह राजस्थान में हुआ होना चाहिए या एक पक्ष राजस्थान में रहता हो।'
      },
      documents: {
        en: ['Wedding Invitation Card', 'Joint Wedding Photograph', 'Aadhaar Card of Bride and Groom', 'Age Proof (10th Marksheet/Birth Certificate)', 'Identity Proof of two Witnesses', 'Affidavit'],
        hi: ['शादी का निमंत्रण कार्ड', 'शादी की संयुक्त तस्वीर', 'दुल्हन और दूल्हे का आधार कार्ड', 'आयु प्रमाण (10वीं की मार्कशीट/जन्म प्रमाण पत्र)', 'दो गवाहों का पहचान प्रमाण', 'हलफनामा']
      },
      process: {
        en: '1. Register on Pehchan portal. 2. Fill details of bride, groom, and witnesses. 3. Upload photos and documents. 4. Visit the Registrar office if required or get it digitally signed. 5. Download certificate.',
        hi: '1. पहचान पोर्टल पर पंजीकरण करें। 2. दुल्हन, दूल्हे और गवाहों का विवरण भरें। 3. फोटो और दस्तावेज अपलोड करें। 4. यदि आवश्यक हो तो रजिस्ट्रार कार्यालय जाएं या इसे डिजिटल रूप से हस्ताक्षरित करवाएं। 5. प्रमाण पत्र डाउनलोड करें।'
      },
      tips: {
        en: 'Compulsory registration of marriage is now mandatory in Rajasthan.',
        hi: 'राजस्थान में अब विवाह का अनिवार्य पंजीकरण अनिवार्य है।'
      }
    }
  },
  {
    id: 'senior-citizen-id-rajasthan',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'Senior Citizen Card',
    serviceNameHi: 'वरिष्ठ नागरिक कार्ड',
    formName: 'Senior Citizen Identity Card Form',
    formNameHi: 'वरिष्ठ नागरिक पहचान पत्र फॉर्म',
    description: 'Identity card for citizens aged 60 and above for various benefits.',
    descriptionHi: 'विभिन्न लाभों के लिए 60 वर्ष और उससे अधिक आयु के नागरिकों के लिए पहचान पत्र।',
    icon: UserCheck,
    guidelines: ['Age proof', 'Aadhaar card', 'Blood group', 'Photos'],
    guidelinesHi: ['आयु प्रमाण', 'आधार कार्ड', 'रक्त समूह', 'फोटो'],
    searchQuery: 'Senior citizen identity card application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To provide a dedicated ID card for senior citizens to avail concessions in travel, healthcare, and other services.',
        hi: 'वरिष्ठ नागरिकों को यात्रा, स्वास्थ्य देखभाल और अन्य सेवाओं में रियायतें प्राप्त करने के लिए एक समर्पित आईडी कार्ड प्रदान करना।'
      },
      eligibility: {
        en: 'Any resident of Rajasthan aged 60 years or above.',
        hi: '60 वर्ष या उससे अधिक आयु का राजस्थान का कोई भी निवासी।'
      },
      documents: {
        en: ['Age Proof (Aadhaar/Voter ID/Birth Certificate)', 'Address Proof', 'Two Passport size Photographs', 'Blood Group Report'],
        hi: ['आयु प्रमाण (आधार/वोटर आईडी/जन्म प्रमाण पत्र)', 'पते का प्रमाण', 'दो पासपोर्ट साइज फोटो', 'ब्लड ग्रुप रिपोर्ट']
      },
      process: {
        en: '1. Apply online via Social Justice and Empowerment Department portal or e-Mitra. 2. Submit age and residence proof. 3. Verification by department. 4. Card issued.',
        hi: '1. सामाजिक न्याय और अधिकारिता विभाग के पोर्टल या ई-मित्र के माध्यम से ऑनलाइन आवेदन करें। 2. आयु और निवास प्रमाण जमा करें। 3. विभाग द्वारा सत्यापन। 4. कार्ड जारी।'
      },
      tips: {
        en: 'This card is useful for priority service in banks and hospitals and discounts in Rajasthan Roadways.',
        hi: 'यह कार्ड बैंकों और अस्पतालों में प्राथमिकता सेवा और राजस्थान रोडवेज में छूट के लिए उपयोगी है।'
      }
    }
  },
  {
    id: 'ews-certificate-rajasthan',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'EWS Certificate',
    serviceNameHi: 'ईडब्ल्यूएस प्रमाण पत्र',
    formName: 'Economically Weaker Section Certificate Form',
    formNameHi: 'आर्थिक रूप से कमजोर वर्ग प्रमाण पत्र फॉर्म',
    description: 'Certificate for 10% reservation for General category candidates.',
    descriptionHi: 'सामान्य श्रेणी के उम्मीदवारों के लिए 10% आरक्षण के लिए प्रमाण पत्र।',
    icon: Landmark,
    guidelines: ['Income proof', 'Asset details', 'Caste declaration', 'Aadhaar'],
    guidelinesHi: ['आय प्रमाण', 'संपत्ति विवरण', 'जाति घोषणा', 'आधार'],
    searchQuery: 'EWS certificate application form Rajasthan e-Mitra pdf',
    guide: {
      purpose: {
        en: 'To provide 10% reservation in government jobs and educational institutions for candidates from economically weaker sections of the General category.',
        hi: 'सामान्य श्रेणी के आर्थिक रूप से कमजोर वर्गों के उम्मीदवारों के लिए सरकारी नौकरियों और शैक्षणिक संस्थानों में 10% आरक्षण प्रदान करना।'
      },
      eligibility: {
        en: 'General category candidates with family income below Rs. 8 Lakh per annum and meeting specific land/property criteria.',
        hi: '8 लाख रुपये प्रति वर्ष से कम पारिवारिक आय वाले सामान्य श्रेणी के उम्मीदवार और विशिष्ट भूमि/संपत्ति मानदंडों को पूरा करने वाले।'
      },
      documents: {
        en: ['Aadhaar Card', 'Jan Aadhaar Card', 'Income Certificate', 'Property Documents', 'Affidavit', 'Caste Self-Declaration'],
        hi: ['आधार कार्ड', 'जन आधार कार्ड', 'आय प्रमाण पत्र', 'संपत्ति के दस्तावेज', 'हलफनामा', 'जाति स्व-घोषणा']
      },
      process: {
        en: '1. Apply at e-Mitra center. 2. Submit income and asset proofs. 3. Verification by Patwari and Tehsildar. 4. Certificate issued.',
        hi: '1. ई-मित्र केंद्र पर आवेदन करें। 2. आय और संपत्ति के प्रमाण जमा करें। 3. पटवारी और तहसीलदार द्वारा सत्यापन। 4. प्रमाण पत्र जारी।'
      },
      tips: {
        en: 'EWS certificates are valid for one financial year. Ensure you renew it every year.',
        hi: 'ईडब्ल्यूएस प्रमाण पत्र एक वित्तीय वर्ष के लिए मान्य होते हैं। सुनिश्चित करें कि आप इसे हर साल नवीनीकृत करते हैं।'
      }
    }
  },
  {
    id: 'pm-kisan-registration',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'PM-KISAN',
    serviceNameHi: 'पीएम-किसान',
    formName: 'Farmer Registration Form',
    formNameHi: 'किसान पंजीकरण फॉर्म',
    description: 'Income support of Rs. 6,000 per year for small and marginal farmers.',
    descriptionHi: 'छोटे और सीमांत किसानों के लिए प्रति वर्ष 6,000 रुपये की आय सहायता।',
    icon: Sprout,
    guidelines: ['Land records', 'Aadhaar card', 'Bank account', 'Mobile number'],
    guidelinesHi: ['भूमि रिकॉर्ड', 'आधार कार्ड', 'बैंक खाता', 'मोबाइल नंबर'],
    searchQuery: 'PM Kisan Samman Nidhi registration form online pdf',
    guide: {
      purpose: {
        en: 'To provide financial assistance to all landholding farmer families across the country.',
        hi: 'देश भर के सभी भूमिधारक किसान परिवारों को वित्तीय सहायता प्रदान करना।'
      },
      eligibility: {
        en: 'All landholding farmer families (subject to certain exclusion criteria like taxpayers, professionals).',
        hi: 'सभी भूमिधारक किसान परिवार (करदाताओं, पेशेवरों जैसे कुछ बहिष्करण मानदंडों के अधीन)।'
      },
      documents: {
        en: ['Aadhaar Card', 'Land Ownership Documents (Jamabandi)', 'Bank Passbook Details', 'Mobile Number linked with Aadhaar'],
        hi: ['आधार कार्ड', 'भूमि स्वामित्व दस्तावेज (जमाबंदी)', 'बैंक पासबुक विवरण', 'आधार से जुड़ा मोबाइल नंबर']
      },
      process: {
        en: '1. Register on PM-KISAN portal or via e-Mitra/CSC. 2. Enter personal and land details. 3. Aadhaar authentication. 4. Verification by State Nodal Officer. 5. Direct Benefit Transfer to bank account.',
        hi: '1. पीएम-किसान पोर्टल पर या ई-मित्र/सीएससी के माध्यम से पंजीकरण करें। 2. व्यक्तिगत और भूमि विवरण दर्ज करें। 3. आधार प्रमाणीकरण। 4. राज्य नोडल अधिकारी द्वारा सत्यापन। 5. बैंक खाते में प्रत्यक्ष लाभ हस्तांतरण।'
      },
      tips: {
        en: 'Ensure your Aadhaar is linked with your bank account and land records for seamless payments.',
        hi: 'निर्बाध भुगतान के लिए सुनिश्चित करें कि आपका आधार आपके बैंक खाते और भूमि रिकॉर्ड से जुड़ा हुआ है।'
      }
    }
  },
  {
    id: 'ayushman-bharat-pmjay',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'PM-JAY',
    serviceNameHi: 'पीएम-जेएवाई',
    formName: 'Ayushman Card Application',
    formNameHi: 'आयुष्मान कार्ड आवेदन',
    description: 'Health insurance cover of Rs. 5 Lakh per family per year.',
    descriptionHi: 'प्रति परिवार प्रति वर्ष 5 लाख रुपये का स्वास्थ्य बीमा कवर।',
    icon: HeartPulse,
    guidelines: ['Aadhaar card', 'Ration card', 'Mobile number'],
    guidelinesHi: ['आधार कार्ड', 'राशन कार्ड', 'मोबाइल नंबर'],
    searchQuery: 'Ayushman Bharat PMJAY card application form online pdf',
    guide: {
      purpose: {
        en: 'To provide health insurance coverage for secondary and tertiary care hospitalization to poor and vulnerable families.',
        hi: 'गरीब और कमजोर परिवारों को माध्यमिक और तृतीयक देखभाल अस्पताल में भर्ती के लिए स्वास्थ्य बीमा कवरेज प्रदान करना।'
      },
      eligibility: {
        en: 'Families listed in SECC 2011 database or NFSA beneficiaries.',
        hi: 'SECC 2011 डेटाबेस या NFSA लाभार्थियों में सूचीबद्ध परिवार।'
      },
      documents: {
        en: ['Aadhaar Card', 'Ration Card', 'Mobile Number', 'Identity Proof'],
        hi: ['आधार कार्ड', 'राशन कार्ड', 'मोबाइल नंबर', 'पहचान प्रमाण']
      },
      process: {
        en: '1. Check eligibility on PM-JAY portal. 2. Visit nearest CSC or empanelled hospital. 3. Provide Aadhaar and Ration card for e-KYC. 4. Ayushman Card generated and issued.',
        hi: '1. पीएम-जेएवाई पोर्टल पर पात्रता की जांच करें। 2. निकटतम सीएससी या सूचीबद्ध अस्पताल पर जाएं। 3. ई-केवाईसी के लिए आधार और राशन कार्ड प्रदान करें। 4. आयुष्मान कार्ड तैयार और जारी किया गया।'
      },
      tips: {
        en: 'The Ayushman Card allows cashless treatment in all empanelled public and private hospitals across India.',
        hi: 'आयुष्मान कार्ड भारत भर के सभी सूचीबद्ध सरकारी और निजी अस्पतालों में कैशलेस उपचार की अनुमति देता है।'
      }
    }
  },
  {
    id: 'jan-aadhaar-rajasthan',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'Jan Aadhaar',
    serviceNameHi: 'जन आधार',
    formName: 'Jan Aadhaar Enrollment Form',
    formNameHi: 'जन आधार नामांकन फॉर्म',
    description: 'One Number, One Identity, One Card for Rajasthan residents.',
    descriptionHi: 'राजस्थान के निवासियों के लिए एक नंबर, एक पहचान, एक कार्ड।',
    icon: CreditCard,
    guidelines: ['Family Aadhaar', 'Bank details', 'Address proof', 'Photos'],
    guidelinesHi: ['परिवार का आधार', 'बैंक विवरण', 'पते का प्रमाण', 'फोटो'],
    searchQuery: 'Jan Aadhaar card enrollment form Rajasthan e-Mitra pdf',
    guide: {
      purpose: {
        en: 'To provide a unified identity for families in Rajasthan to access various government benefits and services.',
        hi: 'विभिन्न सरकारी लाभों और सेवाओं तक पहुँचने के लिए राजस्थान में परिवारों को एक एकीकृत पहचान प्रदान करना।'
      },
      eligibility: {
        en: 'Every resident family in Rajasthan.',
        hi: 'राजस्थान में प्रत्येक निवासी परिवार।'
      },
      documents: {
        en: ['Aadhaar Cards of all family members', 'Bank Account Details of Female Head of Family', 'Mobile Number', 'Address Proof', 'Photographs of all members'],
        hi: ['परिवार के सभी सदस्यों के आधार कार्ड', 'परिवार की महिला मुखिया के बैंक खाते का विवरण', 'मोबाइल नंबर', 'पते का प्रमाण', 'सभी सदस्यों की तस्वीरें']
      },
      process: {
        en: '1. Visit e-Mitra center. 2. Provide family details and Aadhaar numbers. 3. Designate the eldest female (18+) as head of family. 4. Biometric/OTP verification. 5. Jan Aadhaar ID issued.',
        hi: '1. ई-मित्र केंद्र पर जाएं। 2. परिवार का विवरण और आधार नंबर प्रदान करें। 3. सबसे बड़ी महिला (18+) को परिवार की मुखिया के रूप में नामित करें। 4. बायोमेट्रिक/ओटीपी सत्यापन। 5. जन आधार आईडी जारी।'
      },
      tips: {
        en: 'Jan Aadhaar is mandatory for most Rajasthan state government schemes like Chiranjeevi Health Insurance and NFSA.',
        hi: 'चिरंजीवी स्वास्थ्य बीमा और एनएफएसए जैसी अधिकांश राजस्थान राज्य सरकार की योजनाओं के लिए जन आधार अनिवार्य है।'
      }
    }
  },
  {
    id: 'ration-card-rajasthan',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'Ration Card',
    serviceNameHi: 'राशन कार्ड',
    formName: 'New Ration Card Application Form',
    formNameHi: 'नया राशन कार्ड आवेदन फॉर्म',
    description: 'Application for new or modified ration card in Rajasthan.',
    descriptionHi: 'राजस्थान में नए या संशोधित राशन कार्ड के लिए आवेदन।',
    icon: ShoppingBag,
    guidelines: ['Jan Aadhaar', 'Address proof', 'Income proof', 'Photos'],
    guidelinesHi: ['जन आधार', 'पते का प्रमाण', 'आय प्रमाण', 'फोटो'],
    searchQuery: 'New ration card application form Rajasthan Food portal pdf',
    guide: {
      purpose: {
        en: 'To obtain a ration card for purchasing subsidized food grains and as a proof of identity/residence.',
        hi: 'रियायती खाद्यान्न खरीदने के लिए और पहचान/निवास के प्रमाण के रूप में राशन कार्ड प्राप्त करने के लिए।'
      },
      eligibility: {
        en: 'Resident families of Rajasthan not already possessing a ration card.',
        hi: 'राजस्थान के निवासी परिवार जिनके पास पहले से राशन कार्ड नहीं है।'
      },
      documents: {
        en: ['Jan Aadhaar Card', 'Aadhaar Cards of all members', 'Proof of Residence (Electricity/Water Bill)', 'Passport size Photographs of Head of Family', 'Surrender Certificate (if moving from another place)'],
        hi: ['जन आधार कार्ड', 'सभी सदस्यों के आधार कार्ड', 'निवास का प्रमाण (बिजली/पानी का बिल)', 'परिवार के मुखिया की पासपोर्ट साइज फोटो', 'समर्पण प्रमाण पत्र (यदि दूसरी जगह से आ रहे हैं)']
      },
      process: {
        en: '1. Apply via e-Mitra. 2. Fill the application form with family details. 3. Upload required documents. 4. Verification by Food and Civil Supplies Department. 5. Ration card issued.',
        hi: '1. ई-मित्र के माध्यम से आवेदन करें। 2. परिवार के विवरण के साथ आवेदन फॉर्म भरें। 3. आवश्यक दस्तावेज अपलोड करें। 4. खाद्य और नागरिक आपूर्ति विभाग द्वारा सत्यापन। 5. राशन कार्ड जारी।'
      },
      tips: {
        en: 'Keep your Jan Aadhaar updated as it is the primary source for ration card data in Rajasthan.',
        hi: 'अपने जन आधार को अपडेट रखें क्योंकि यह राजस्थान में राशन कार्ड डेटा का प्राथमिक स्रोत है।'
      }
    }
  },
  {
    id: 'driving-license-learner',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Driving License',
    serviceNameHi: 'ड्राइविंग लाइसेंस',
    formName: 'Learner License Application (Form 2)',
    formNameHi: 'लर्नर लाइसेंस आवेदन (फॉर्म 2)',
    description: 'Application for obtaining a learner\'s driving license.',
    descriptionHi: 'लर्नर ड्राइविंग लाइसेंस प्राप्त करने के लिए आवेदन।',
    icon: ListOrdered,
    guidelines: ['Age proof', 'Address proof', 'Medical certificate', 'Photos'],
    guidelinesHi: ['आयु प्रमाण', 'पते का प्रमाण', 'चिकित्सा प्रमाण पत्र', 'फोटो'],
    searchQuery: 'Learner driving license application form 2 Sarathi Parivahan pdf',
    guide: {
      purpose: {
        en: 'To obtain a temporary license that allows you to learn driving on public roads with a supervisor.',
        hi: 'एक अस्थायी लाइसेंस प्राप्त करने के लिए जो आपको पर्यवेक्षक के साथ सार्वजनिक सड़कों पर ड्राइविंग सीखने की अनुमति देता है।'
      },
      eligibility: {
        en: 'Age 16+ for gearless motorcycles (below 50cc), 18+ for light motor vehicles, 20+ for transport vehicles.',
        hi: 'बिना गियर वाले मोटरसाइकिल (50cc से नीचे) के लिए 18+ वर्ष, हल्के मोटर वाहनों के लिए 18+ वर्ष, परिवहन वाहनों के लिए 20+ वर्ष।'
      },
      documents: {
        en: ['Age Proof (Aadhaar/10th Certificate)', 'Address Proof (Voter ID/Passport)', 'Medical Certificate (Form 1 & 1A)', 'Passport size Photographs'],
        hi: ['आयु प्रमाण (आधार/10वीं का प्रमाण पत्र)', 'पते का प्रमाण (वोटर आईडी/पासपोर्ट)', 'चिकित्सा प्रमाण पत्र (फॉर्म 1 और 1ए)', 'पासपोर्ट साइज फोटो']
      },
      process: {
        en: '1. Apply online on Sarathi Parivahan portal. 2. Upload documents and pay fees. 3. Book a slot for the LL test. 4. Pass the computer-based test on traffic rules. 5. Download Learner License.',
        hi: '1. सारथी परिवहन पोर्टल पर ऑनलाइन आवेदन करें। 2. दस्तावेज अपलोड करें और शुल्क का भुगतान करें। 3. एलएल टेस्ट के लिए स्लॉट बुक करें। 4. यातायात नियमों पर कंप्यूटर आधारित परीक्षा पास करें। 5. लर्नर लाइसेंस डाउनलोड करें।'
      },
      tips: {
        en: 'Study the traffic signs and rules thoroughly before taking the computer test.',
        hi: 'कंप्यूटर टेस्ट देने से पहले यातायात संकेतों और नियमों का अच्छी तरह से अध्ययन करें।'
      }
    }
  },
  {
    id: 'vehicle-transfer-form-29-30',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Vehicle Transfer',
    serviceNameHi: 'वाहन हस्तांतरण',
    formName: 'Transfer of Ownership (Form 29 & 30)',
    formNameHi: 'स्वामित्व का हस्तांतरण (फॉर्म 29 और 30)',
    description: 'Forms for transferring vehicle ownership to a new buyer.',
    descriptionHi: 'वाहन के स्वामित्व को नए खरीदार को हस्तांतरित करने के लिए फॉर्म।',
    icon: ArrowLeftRight,
    guidelines: ['RC original', 'Insurance', 'PUC', 'Chassis imprint'],
    guidelinesHi: ['आरसी मूल', 'बीमा', 'पीयूसी', 'चेसिस छाप'],
    searchQuery: 'Vehicle ownership transfer form 29 30 Parivahan pdf',
    guide: {
      purpose: {
        en: 'To legally transfer the ownership of a motor vehicle from the seller to the buyer.',
        hi: 'मोटर वाहन के स्वामित्व को कानूनी रूप से विक्रेता से खरीदार को हस्तांतरित करने के लिए।'
      },
      eligibility: {
        en: 'Owner of the vehicle and the intended buyer.',
        hi: 'वाहन का मालिक और इच्छित खरीदार।'
      },
      documents: {
        en: ['Form 29 (Notice of transfer)', 'Form 30 (Report of transfer)', 'Original Registration Certificate (RC)', 'Valid Insurance Certificate', 'Valid PUC Certificate', 'Address Proof of Buyer', 'Chassis Pencil Print'],
        hi: ['फॉर्म 29 (हस्तांतरण की सूचना)', 'फॉर्म 30 (हस्तांतरण की रिपोर्ट)', 'मूल पंजीकरण प्रमाण पत्र (आरसी)', 'वैध बीमा प्रमाण पत्र', 'वैध पीयूसी प्रमाण पत्र', 'खरीदार का पते का प्रमाण', 'चेसिस पेंसिल प्रिंट']
      },
      process: {
        en: '1. Fill Forms 29 and 30. 2. Submit application on Vahan Parivahan portal. 3. Pay transfer fees. 4. Submit physical documents at RTO. 5. New RC issued in buyer\'s name.',
        hi: '1. फॉर्म 29 और 30 भरें। 2. वाहन परिवहन पोर्टल पर आवेदन जमा करें। 3. हस्तांतरण शुल्क का भुगतान करें। 4. आरटीओ में भौतिक दस्तावेज जमा करें। 5. खरीदार के नाम पर नई आरसी जारी।'
      },
      tips: {
        en: 'Ensure there is no pending loan (Hypothecation) on the vehicle before transfer. If yes, get an NOC from the bank.',
        hi: 'हस्तांतरण से पहले सुनिश्चित करें कि वाहन पर कोई लंबित ऋण (हाइपोथेकेशन) नहीं है। यदि हाँ, तो बैंक से एनओसी प्राप्त करें।'
      }
    }
  },
  {
    id: 'passport-application-india',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'Passport',
    serviceNameHi: 'पासपोर्ट',
    formName: 'Fresh Passport Application',
    formNameHi: 'नया पासपोर्ट आवेदन',
    description: 'Application for obtaining a new Indian passport.',
    descriptionHi: 'नया भारतीय पासपोर्ट प्राप्त करने के लिए आवेदन।',
    icon: Globe,
    guidelines: ['Aadhaar card', 'Address proof', 'Birth proof', 'Photos'],
    guidelinesHi: ['आधार कार्ड', 'पते का प्रमाण', 'जन्म प्रमाण', 'फोटो'],
    searchQuery: 'Fresh passport application form online India Passport Seva pdf',
    guide: {
      purpose: {
        en: 'To obtain a travel document issued by the government for traveling abroad and as a strong proof of identity and citizenship.',
        hi: 'विदेश यात्रा के लिए सरकार द्वारा जारी यात्रा दस्तावेज प्राप्त करने के लिए और पहचान और नागरिकता के एक मजबूत प्रमाण के रूप में।'
      },
      eligibility: {
        en: 'Any Indian citizen.',
        hi: 'कोई भी भारतीय नागरिक।'
      },
      documents: {
        en: ['Aadhaar Card', 'Voter ID', 'Electricity/Water Bill', 'Birth Certificate/10th Certificate', 'Bank Passbook with Photo'],
        hi: ['आधार कार्ड', 'वोटर आईडी', 'बिजली/पानी का बिल', 'जन्म प्रमाण पत्र/10वीं का प्रमाण पत्र', 'फोटो के साथ बैंक पासबुक']
      },
      process: {
        en: '1. Register on Passport Seva portal. 2. Fill application form online. 3. Pay fees and book appointment at PSK/POPSK. 4. Visit PSK for document verification and biometrics. 5. Police verification. 6. Passport sent by post.',
        hi: '1. पासपोर्ट सेवा पोर्टल पर पंजीकरण करें। 2. ऑनलाइन आवेदन फॉर्म भरें। 3. शुल्क का भुगतान करें और पीएसके/पीओपीएसके में अपॉइंटमेंट बुक करें। 4. दस्तावेज सत्यापन और बायोमेट्रिक्स के लिए पीएसके पर जाएं। 5. पुलिस सत्यापन। 6. पासपोर्ट डाक द्वारा भेजा गया।'
      },
      tips: {
        en: 'Ensure all details in your documents match exactly with the application to avoid delays or rejection.',
        hi: 'देरी या अस्वीकृति से बचने के लिए सुनिश्चित करें कि आपके दस्तावेजों के सभी विवरण आवेदन के साथ बिल्कुल मेल खाते हैं।'
      }
    }
  },
  {
    id: 'pan-card-form-49a',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'PAN Card',
    serviceNameHi: 'पैन कार्ड',
    formName: 'PAN Application (Form 49A)',
    formNameHi: 'पैन आवेदन (फॉर्म 49ए)',
    description: 'Application for Permanent Account Number (PAN) for Indian citizens.',
    descriptionHi: 'भारतीय नागरिकों के लिए स्थायी खाता संख्या (पैन) के लिए आवेदन।',
    icon: CreditCard,
    guidelines: ['Aadhaar card', 'Photos', 'Signature'],
    guidelinesHi: ['आधार कार्ड', 'फोटो', 'हस्ताक्षर'],
    searchQuery: 'PAN card application form 49A NSDL UTIITSL pdf',
    guide: {
      purpose: {
        en: 'To obtain a unique 10-digit alphanumeric identifier for financial transactions and income tax purposes.',
        hi: 'वित्तीय लेनदेन और आयकर उद्देश्यों के लिए एक अद्वितीय 10-अंकीय अल्फ़ान्यूमेरिक पहचानकर्ता प्राप्त करने के लिए।'
      },
      eligibility: {
        en: 'Any Indian citizen, including minors and students.',
        hi: 'नाबालिगों और छात्रों सहित कोई भी भारतीय नागरिक।'
      },
      documents: {
        en: ['Aadhaar Card (as proof of identity, address, and DOB)', 'Two Passport size Photographs', 'Signature/Thumb Impression'],
        hi: ['आधार कार्ड (पहचान, पते और जन्मतिथि के प्रमाण के रूप में)', 'दो पासपोर्ट साइज फोटो', 'हस्ताक्षर/अंगूठे का निशान']
      },
      process: {
        en: '1. Apply online via NSDL or UTIITSL portal. 2. Fill Form 49A. 3. Authenticate via Aadhaar e-KYC (paperless) or send physical documents. 4. Pay application fee. 5. PAN card sent to address.',
        hi: '1. एनएसडीएल या यूटीआईआईटीएसएल पोर्टल के माध्यम से ऑनलाइन आवेदन करें। 2. फॉर्म 49ए भरें। 3. आधार ई-केवाईसी (पेपरलेस) के माध्यम से प्रमाणित करें या भौतिक दस्तावेज भेजें। 4. आवेदन शुल्क का भुगतान करें। 5. पैन कार्ड पते पर भेजा गया।'
      },
      tips: {
        en: 'Aadhaar-based e-PAN is the fastest way to get a PAN card (usually within a few hours).',
        hi: 'आधार-आधारित ई-पैन पैन कार्ड प्राप्त करने का सबसे तेज़ तरीका है (आमतौर पर कुछ घंटों के भीतर)।'
      }
    }
  },
  {
    id: 'aadhaar-enrollment-form',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'Aadhaar',
    serviceNameHi: 'आधार',
    formName: 'Enrollment/Update Form',
    formNameHi: 'नामांकन/अपडेट फॉर्म',
    description: 'Form for new Aadhaar enrollment or updating existing details.',
    descriptionHi: 'नए आधार नामांकन या मौजूदा विवरण अपडेट करने के लिए फॉर्म।',
    icon: Fingerprint,
    guidelines: ['Identity proof', 'Address proof', 'DOB proof'],
    guidelinesHi: ['पहचान प्रमाण', 'पते का प्रमाण', 'जन्मतिथि प्रमाण'],
    searchQuery: 'Aadhaar enrollment update form UIDAI pdf',
    guide: {
      purpose: {
        en: 'To enroll for a unique 12-digit Aadhaar number or update demographic/biometric details.',
        hi: 'एक अद्वितीय 12-अंकीय आधार संख्या के लिए नामांकन करने या जनसांख्यिकीय/बायोमेट्रिक विवरण अपडेट करने के लिए।'
      },
      eligibility: {
        en: 'Any resident of India.',
        hi: 'भारत का कोई भी निवासी।'
      },
      documents: {
        en: ['Proof of Identity (Voter ID/Passport/PAN)', 'Proof of Address (Electricity Bill/Bank Statement)', 'Proof of Date of Birth (Birth Certificate/10th Certificate)'],
        hi: ['पहचान का प्रमाण (वोटर आईडी/पासपोर्ट/पैन)', 'पते का प्रमाण (बिजली बिल/बैंक स्टेटमेंट)', 'जन्मतिथि का प्रमाण (जन्म प्रमाण पत्र/10वीं का प्रमाण पत्र)']
      },
      process: {
        en: '1. Download form or get it at Aadhaar center. 2. Fill details. 3. Visit Aadhaar Enrollment Center with documents. 4. Provide biometrics (fingerprints, iris scan, photo). 5. Receive acknowledgment slip. 6. Aadhaar generated and sent.',
        hi: '1. फॉर्म डाउनलोड करें या आधार केंद्र पर प्राप्त करें। 2. विवरण भरें। 3. दस्तावेजों के साथ आधार नामांकन केंद्र पर जाएं। 4. बायोमेट्रिक्स (फिंगरप्रिंट, आईरिस स्कैन, फोटो) प्रदान करें। 5. पावती पर्ची प्राप्त करें। 6. आधार तैयार और भेजा गया।'
      },
      tips: {
        en: 'You can update your address online on the UIDAI portal if your mobile number is linked with Aadhaar.',
        hi: 'यदि आपका मोबाइल नंबर आधार से जुड़ा है तो आप यूआईडीएआई पोर्टल पर अपना पता ऑनलाइन अपडेट कर सकते हैं।'
      }
    }
  },
  {
    id: 'pcc-rajasthan-police',
    category: 'Police Verification Forms',
    categoryHi: 'पुलिस सत्यापन फॉर्म',
    serviceName: 'PCC',
    serviceNameHi: 'पीसीसी',
    formName: 'Police Clearance Certificate Form',
    formNameHi: 'पुलिस क्लीयरेंस सर्टिफिकेट फॉर्म',
    description: 'Certificate certifying no criminal record for jobs or visa.',
    descriptionHi: 'नौकरियों या वीजा के लिए कोई आपराधिक रिकॉर्ड नहीं होने का प्रमाण पत्र।',
    icon: Shield,
    guidelines: ['Aadhaar card', 'Purpose proof', 'Address proof'],
    guidelinesHi: ['आधार कार्ड', 'उद्देश्य प्रमाण', 'पते का प्रमाण'],
    searchQuery: 'Police clearance certificate application form Rajasthan Police pdf',
    guide: {
      purpose: {
        en: 'To certify that an individual has no criminal record, required for employment, passport, or immigration.',
        hi: 'यह प्रमाणित करने के लिए कि किसी व्यक्ति का कोई आपराधिक रिकॉर्ड नहीं है, रोजगार, पासपोर्ट या आव्रजन के लिए आवश्यक है।'
      },
      eligibility: {
        en: 'Any resident of Rajasthan.',
        hi: 'राजस्थान का कोई भी निवासी।'
      },
      documents: {
        en: ['Aadhaar Card', 'Voter ID', 'Passport size Photograph', 'Proof of current address', 'Letter from employer/agency requesting PCC'],
        hi: ['आधार कार्ड', 'वोटर आईडी', 'पासपोर्ट साइज फोटो', 'वर्तमान पते का प्रमाण', 'पीसीसी का अनुरोध करने वाले नियोक्ता/एजेंसी का पत्र']
      },
      process: {
        en: '1. Apply online via Rajasthan Police portal or e-Mitra. 2. Pay application fee. 3. Police station verification (physical visit may be required). 4. SP office approval. 5. Certificate issued online.',
        hi: '1. राजस्थान पुलिस पोर्टल या ई-मित्र के माध्यम से ऑनलाइन आवेदन करें। 2. आवेदन शुल्क का भुगतान करें। 3. पुलिस स्टेशन सत्यापन (भौतिक यात्रा की आवश्यकता हो सकती है)। 4. एसपी कार्यालय की मंजूरी। 5. प्रमाण पत्र ऑनलाइन जारी किया गया।'
      },
      tips: {
        en: 'PCC is usually valid for 6 months. Ensure you apply close to your requirement date.',
        hi: 'पीसीसी आमतौर पर 6 महीने के लिए मान्य होती है। सुनिश्चित करें कि आप अपनी आवश्यकता की तारीख के करीब आवेदन करें।'
      }
    }
  },
  {
    id: 'tenant-verification-rajasthan',
    category: 'Police Verification Forms',
    categoryHi: 'पुलिस सत्यापन फॉर्म',
    serviceName: 'Tenant Verification',
    serviceNameHi: 'किरायेदार सत्यापन',
    formName: 'Tenant Information Form',
    formNameHi: 'किरायेदार सूचना फॉर्म',
    description: 'Mandatory police verification for tenants in Rajasthan.',
    descriptionHi: 'राजस्थान में किरायेदारों के लिए अनिवार्य पुलिस सत्यापन।',
    icon: UserPlus,
    guidelines: ['Tenant ID proof', 'Tenant photo', 'Owner ID proof'],
    guidelinesHi: ['किरायेदार आईडी प्रमाण', 'किरायेदार की फोटो', 'मालिक की आईडी प्रमाण'],
    searchQuery: 'Tenant verification form Rajasthan Police online pdf',
    guide: {
      purpose: {
        en: 'To inform the police about a new tenant for security purposes and to prevent criminal activities.',
        hi: 'सुरक्षा उद्देश्यों के लिए और आपराधिक गतिविधियों को रोकने के लिए पुलिस को एक नए किरायेदार के बारे में सूचित करना।'
      },
      eligibility: {
        en: 'Property owners in Rajasthan renting out their premises.',
        hi: 'राजस्थान में संपत्ति के मालिक जो अपने परिसर किराए पर दे रहे हैं।'
      },
      documents: {
        en: ['Aadhaar Card of Tenant', 'Photograph of Tenant', 'Aadhaar Card of Owner', 'Rent Agreement (if available)'],
        hi: ['किरायेदार का आधार कार्ड', 'किरायेदार की तस्वीर', 'मालिक का आधार कार्ड', 'किराया समझौता (यदि उपलब्ध हो)']
      },
      process: {
        en: '1. Download form from Rajasthan Police website or use the RajCop app. 2. Fill details of owner and tenant. 3. Submit at the local police station or online. 4. Police acknowledgment received.',
        hi: '1. राजस्थान पुलिस की वेबसाइट से फॉर्म डाउनलोड करें या RajCop ऐप का उपयोग करें। 2. मालिक और किरायेदार का विवरण भरें। 3. स्थानीय पुलिस स्टेशन में या ऑनलाइन जमा करें। 4. पुलिस पावती प्राप्त हुई।'
      },
      tips: {
        en: 'Tenant verification is a legal requirement in many cities and helps in ensuring the safety of the neighborhood.',
        hi: 'कई शहरों में किरायेदार सत्यापन एक कानूनी आवश्यकता है और पड़ोस की सुरक्षा सुनिश्चित करने में मदद करता है।'
      }
    }
  },
  {
    id: 'domestic-help-verification-rajasthan',
    category: 'Police Verification Forms',
    categoryHi: 'पुलिस सत्यापन फॉर्म',
    serviceName: 'Domestic Help Verification',
    serviceNameHi: 'घरेलू सहायक सत्यापन',
    formName: 'Servant Verification Form',
    formNameHi: 'नौकर सत्यापन फॉर्म',
    description: 'Police verification for domestic help, drivers, and cooks.',
    descriptionHi: 'घरेलू सहायकों, ड्राइवरों और रसोइयों के लिए पुलिस सत्यापन।',
    icon: UserSearch,
    guidelines: ['Helper ID proof', 'Helper photo', 'Owner ID proof'],
    guidelinesHi: ['सहायक आईडी प्रमाण', 'सहायक की फोटो', 'मालिक की आईडी प्रमाण'],
    searchQuery: 'Domestic help servant verification form Rajasthan Police pdf',
    guide: {
      purpose: {
        en: 'To verify the background of domestic help for the safety of the household.',
        hi: 'घर की सुरक्षा के लिए घरेलू सहायकों की पृष्ठभूमि को सत्यापित करने के लिए।'
      },
      eligibility: {
        en: 'Employers in Rajasthan hiring domestic staff.',
        hi: 'राजस्थान में घरेलू कर्मचारियों को काम पर रखने वाले नियोक्ता।'
      },
      documents: {
        en: ['Aadhaar Card of Helper', 'Photograph of Helper', 'Aadhaar Card of Employer', 'Previous Employment Details (if any)'],
        hi: ['सहायक का आधार कार्ड', 'सहायक की तस्वीर', 'नियोक्ता का आधार कार्ड', 'पिछले रोजगार का विवरण (यदि कोई हो)']
      },
      process: {
        en: '1. Fill the servant verification form. 2. Attach helper\'s photo and ID. 3. Submit at the local police station. 4. Police checks for any criminal record.',
        hi: '1. नौकर सत्यापन फॉर्म भरें। 2. सहायक की फोटो और आईडी संलग्न करें। 3. स्थानीय पुलिस स्टेशन में जमा करें। 4. पुलिस किसी भी आपराधिक रिकॉर्ड की जांच करती है।'
      },
      tips: {
        en: 'Always keep a copy of the helper\'s ID and the police acknowledgment for your records.',
        hi: 'हमेशा सहायक की आईडी की एक प्रति और अपने रिकॉर्ड के लिए पुलिस पावती रखें।'
      }
    }
  },
  {
    id: 'rti-application-form',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'RTI',
    serviceNameHi: 'आरटीआई',
    formName: 'Right to Information Application',
    formNameHi: 'सूचना का अधिकार आवेदन',
    description: 'Application to seek information from government departments.',
    descriptionHi: 'सरकारी विभागों से जानकारी प्राप्त करने के लिए आवेदन।',
    icon: Info,
    guidelines: ['Application fee', 'Clear questions', 'Department name'],
    guidelinesHi: ['आवेदन शुल्क', 'स्पष्ट प्रश्न', 'विभाग का नाम'],
    searchQuery: 'RTI application form format Rajasthan India pdf',
    guide: {
      purpose: {
        en: 'To empower citizens to request information from public authorities, ensuring transparency and accountability.',
        hi: 'नागरिकों को सार्वजनिक अधिकारियों से जानकारी का अनुरोध करने के लिए सशक्त बनाना, पारदर्शिता और जवाबदेही सुनिश्चित करना।'
      },
      eligibility: {
        en: 'Any citizen of India.',
        hi: 'भारत का कोई भी नागरिक।'
      },
      documents: {
        en: ['Application on plain paper or prescribed format', 'Proof of payment of RTI fee (IPO/Demand Draft/e-Mitra receipt)', 'BPL Certificate (if seeking fee exemption)'],
        hi: ['सादे कागज या निर्धारित प्रारूप पर आवेदन', 'आरटीआई शुल्क के भुगतान का प्रमाण (आईपीओ/डिमांड ड्राफ्ट/ई-मित्र रसीद)', 'बीपीएल प्रमाण पत्र (यदि शुल्क छूट की मांग कर रहे हैं)']
      },
      process: {
        en: '1. Identify the department and Public Information Officer (PIO). 2. Write your questions clearly. 3. Pay the Rs. 10 fee. 4. Submit the application. 5. Receive information within 30 days.',
        hi: '1. विभाग और लोक सूचना अधिकारी (पीआईओ) की पहचान करें। 2. अपने प्रश्न स्पष्ट रूप से लिखें। 3. 10 रुपये शुल्क का भुगतान करें। 4. आवेदन जमा करें। 5. 30 दिनों के भीतर जानकारी प्राप्त करें।'
      },
      tips: {
        en: 'Be specific in your questions to get precise answers. Avoid asking for opinions or reasons.',
        hi: 'सटीक उत्तर पाने के लिए अपने प्रश्नों में विशिष्ट रहें। राय या कारण पूछने से बचें।'
      }
    }
  },
  {
    id: 'consumer-complaint-form',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'Consumer Forum',
    serviceNameHi: 'उपभोक्ता फोरम',
    formName: 'Consumer Complaint Application',
    formNameHi: 'उपभोक्ता शिकायत आवेदन',
    description: 'Complaint against defective goods or deficient services.',
    descriptionHi: 'दोषपूर्ण वस्तुओं या कमी वाली सेवाओं के खिलाफ शिकायत।',
    icon: MessageSquare,
    guidelines: ['Purchase proof', 'Notice to seller', 'Complaint details'],
    guidelinesHi: ['खरीद का प्रमाण', 'विक्रेता को नोटिस', 'शिकायत विवरण'],
    searchQuery: 'Consumer court complaint form format Rajasthan India pdf',
    guide: {
      purpose: {
        en: 'To seek redressal for grievances related to consumer rights, such as overcharging, poor quality, or fraud.',
        hi: 'उपभोक्ता अधिकारों से संबंधित शिकायतों, जैसे अधिक शुल्क लेना, खराब गुणवत्ता या धोखाधड़ी के लिए निवारण प्राप्त करना।'
      },
      eligibility: {
        en: 'Any consumer who has purchased goods or services for a consideration.',
        hi: 'कोई भी उपभोक्ता जिसने प्रतिफल के लिए सामान या सेवाएं खरीदी हैं।'
      },
      documents: {
        en: ['Invoice/Bill of purchase', 'Warranty/Guarantee card', 'Copy of written complaint sent to the seller', 'Affidavit', 'Supporting evidence (photos/videos)'],
        hi: ['खरीद का चालान/बिल', 'वारंटी/गारंटी कार्ड', 'विक्रेता को भेजी गई लिखित शिकायत की प्रति', 'हलफनामा', 'सहायक साक्ष्य (फोटो/वीडियो)']
      },
      process: {
        en: '1. Send a formal notice to the seller. 2. If no response, file a complaint in the District Consumer Commission. 3. Pay the required court fee. 4. Attend hearings. 5. Receive judgment/compensation.',
        hi: '1. विक्रेता को औपचारिक नोटिस भेजें। 2. यदि कोई प्रतिक्रिया नहीं मिलती है, तो जिला उपभोक्ता आयोग में शिकायत दर्ज करें। 3. आवश्यक कोर्ट शुल्क का भुगतान करें। 4. सुनवाई में शामिल हों। 5. निर्णय/मुआवजा प्राप्त करें।'
      },
      tips: {
        en: 'You don\'t necessarily need a lawyer to file a complaint in the consumer court; you can represent yourself.',
        hi: 'उपभोक्ता अदालत में शिकायत दर्ज करने के लिए आपको जरूरी नहीं कि वकील की जरूरत हो; आप अपना प्रतिनिधित्व खुद कर सकते हैं।'
      }
    }
  },
  {
    id: 'old-age-pension-rajasthan',
    category: 'Pension Forms',
    categoryHi: 'पेंशन फॉर्म',
    serviceName: 'Old Age Pension',
    serviceNameHi: 'वृद्धावस्था पेंशन',
    formName: 'Social Security Pension Form',
    formNameHi: 'सामाजिक सुरक्षा पेंशन फॉर्म',
    description: 'Monthly financial assistance for senior citizens in Rajasthan.',
    descriptionHi: 'राजस्थान में वरिष्ठ नागरिकों के लिए मासिक वित्तीय सहायता।',
    icon: Heart,
    guidelines: ['Jan Aadhaar', 'Age proof', 'Income proof', 'Bank details'],
    guidelinesHi: ['जन आधार', 'आयु प्रमाण', 'आय प्रमाण', 'बैंक विवरण'],
    searchQuery: 'Rajasthan old age pension application form e-Mitra SSP portal pdf',
    guide: {
      purpose: {
        en: 'To provide social security and financial support to elderly citizens who lack a regular source of income.',
        hi: 'उन बुजुर्ग नागरिकों को सामाजिक सुरक्षा और वित्तीय सहायता प्रदान करना जिनके पास आय का नियमित स्रोत नहीं है।'
      },
      eligibility: {
        en: 'Males aged 58+ and Females aged 55+. Family income must be below Rs. 48,000 per annum.',
        hi: '58+ वर्ष के पुरुष और 55+ वर्ष की महिलाएं। पारिवारिक आय 48,000 रुपये प्रति वर्ष से कम होनी चाहिए।'
      },
      documents: {
        en: ['Jan Aadhaar Card', 'Aadhaar Card', 'Bank Passbook', 'Income Certificate', 'Age Proof'],
        hi: ['जन आधार कार्ड', 'आधार कार्ड', 'बैंक पासबुक', 'आय प्रमाण पत्र', 'आयु प्रमाण']
      },
      process: {
        en: '1. Apply online via SSP portal or e-Mitra. 2. Provide Jan Aadhaar for automatic data fetching. 3. Verification by SDO/BDO. 4. Monthly pension credited to bank account.',
        hi: '1. एसएसपी पोर्टल या ई-मित्र के माध्यम से ऑनलाइन आवेदन करें। 2. स्वचालित डेटा प्राप्त करने के लिए जन आधार प्रदान करें। 3. एसडीओ/बीडीओ द्वारा सत्यापन। 4. मासिक पेंशन बैंक खाते में जमा।'
      },
      tips: {
        en: 'Annual verification (Varshik Satyapan) is mandatory to continue receiving the pension.',
        hi: 'पेंशन प्राप्त करना जारी रखने के लिए वार्षिक सत्यापन (वार्षिक सत्यापन) अनिवार्य है।'
      }
    }
  },
  {
    id: 'widow-pension-rajasthan',
    category: 'Pension Forms',
    categoryHi: 'पेंशन फॉर्म',
    serviceName: 'Widow Pension',
    serviceNameHi: 'विधवा पेंशन',
    formName: 'Ekal Nari Pension Form',
    formNameHi: 'एकल नारी पेंशन फॉर्म',
    description: 'Financial support for widows and single women in Rajasthan.',
    descriptionHi: 'राजस्थान में विधवाओं और एकल महिलाओं के लिए वित्तीय सहायता।',
    icon: User,
    guidelines: ['Death certificate of husband', 'Jan Aadhaar', 'Income proof'],
    guidelinesHi: ['पति का मृत्यु प्रमाण पत्र', 'जन आधार', 'आय प्रमाण'],
    searchQuery: 'Rajasthan widow pension application form SSP portal pdf',
    guide: {
      purpose: {
        en: 'To provide financial assistance to widows, divorced, or abandoned women for their livelihood.',
        hi: 'विधवाओं, तलाकशुदा या परित्यक्त महिलाओं को उनकी आजीविका के लिए वित्तीय सहायता प्रदान करना।'
      },
      eligibility: {
        en: 'Widows/Single women aged 18+. Family income must be below Rs. 48,000 per annum.',
        hi: '18+ वर्ष की विधवाएं/एकल महिलाएं। पारिवारिक आय 48,000 रुपये प्रति वर्ष से कम होनी चाहिए।'
      },
      documents: {
        en: ['Jan Aadhaar Card', 'Aadhaar Card', 'Death Certificate of Husband (for widows)', 'Divorce Decree (for divorcees)', 'Bank Passbook', 'Income Certificate'],
        hi: ['जन आधार कार्ड', 'आधार कार्ड', 'पति का मृत्यु प्रमाण पत्र (विधवाओं के लिए)', 'तलाक की डिक्री (तलाकशुदा लोगों के लिए)', 'बैंक पासबुक', 'आय प्रमाण पत्र']
      },
      process: {
        en: '1. Apply via e-Mitra or SSP portal. 2. Submit Jan Aadhaar and required certificates. 3. Verification by local authorities. 4. Pension approval and disbursement.',
        hi: '1. ई-मित्र या एसएसपी पोर्टल के माध्यम से आवेदन करें। 2. जन आधार और आवश्यक प्रमाण पत्र जमा करें। 3. स्थानीय अधिकारियों द्वारा सत्यापन। 4. पेंशन की मंजूरी और वितरण।'
      },
      tips: {
        en: 'The pension amount increases as the recipient reaches higher age brackets (60, 75 years).',
        hi: 'प्राप्तकर्ता के उच्च आयु वर्ग (60, 75 वर्ष) तक पहुँचने पर पेंशन राशि बढ़ जाती है।'
      }
    }
  },
  {
    id: 'cm-rajshree-yojana-rajasthan',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'Rajshree Yojana',
    serviceNameHi: 'राजश्री योजना',
    formName: 'Girl Child Support Form',
    formNameHi: 'बालिका सहायता फॉर्म',
    description: 'Financial assistance up to Rs. 50,000 for girl children in Rajasthan.',
    descriptionHi: 'राजस्थान में बालिकाओं के लिए 50,000 रुपये तक की वित्तीय सहायता।',
    icon: GraduationCap,
    guidelines: ['Jan Aadhaar', 'Birth certificate', 'School admission proof'],
    guidelinesHi: ['जन आधार', 'जन्म प्रमाण पत्र', 'स्कूल प्रवेश प्रमाण'],
    searchQuery: 'CM Rajshree Yojana application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To promote the birth of girl children, their education, and health by providing financial aid in 6 installments.',
        hi: '6 किस्तों में वित्तीय सहायता प्रदान करके बालिकाओं के जन्म, उनकी शिक्षा और स्वास्थ्य को बढ़ावा देना।'
      },
      eligibility: {
        en: 'Girl children born in government or accredited private hospitals in Rajasthan after June 1, 2016.',
        hi: '1 जून, 2016 के बाद राजस्थान के सरकारी या मान्यता प्राप्त निजी अस्पतालों में पैदा हुई बालिकाएं।'
      },
      documents: {
        en: ['Jan Aadhaar Card', 'Aadhaar Card of Parents', 'Birth Certificate of Girl', 'Maternal Health Card (Mamta Card)', 'School Admission Certificate (for later installments)'],
        hi: ['जन आधार कार्ड', 'माता-पिता का आधार कार्ड', 'लड़की का जन्म प्रमाण पत्र', 'मातृ स्वास्थ्य कार्ड (ममता कार्ड)', 'स्कूल प्रवेश प्रमाण पत्र (बाद की किस्तों के लिए)']
      },
      process: {
        en: '1. First two installments are given at birth and immunization. 3. Apply for subsequent installments via school or e-Mitra. 4. Verification of school attendance. 5. Funds transferred to Jan Aadhaar linked account.',
        hi: '1. पहली दो किस्तें जन्म और टीकाकरण के समय दी जाती हैं। 3. स्कूल या ई-मित्र के माध्यम से बाद की किस्तों के लिए आवेदन करें। 4. स्कूल उपस्थिति का सत्यापन। 5. जन आधार से जुड़े खाते में फंड ट्रांसफर।'
      },
      tips: {
        en: 'The scheme provides a total of Rs. 50,000 till the girl completes Class 12.',
        hi: 'यह योजना लड़की के कक्षा 12 पूरा करने तक कुल 50,000 रुपये प्रदान करती है।'
      }
    }
  },
  {
    id: 'gargi-puraskar-rajasthan',
    category: 'Scholarship Forms',
    categoryHi: 'छात्रवृत्ति फॉर्म',
    serviceName: 'Gargi Puraskar',
    serviceNameHi: 'गार्गी पुरस्कार',
    formName: 'Merit Scholarship Form',
    formNameHi: 'मेरिट छात्रवृत्ति फॉर्म',
    description: 'Award for meritorious girl students scoring 75% or above in Class 10/12.',
    descriptionHi: 'कक्षा 10/12 में 75% या उससे अधिक अंक प्राप्त करने वाली मेधावी छात्राओं के लिए पुरस्कार।',
    icon: Award,
    guidelines: ['Marksheet', 'Jan Aadhaar', 'Bank details', 'School certificate'],
    guidelinesHi: ['मार्कशीट', 'जन आधार', 'बैंक विवरण', 'स्कूल प्रमाण पत्र'],
    searchQuery: 'Gargi Puraskar application form online Rajasthan Shala Darpan pdf',
    guide: {
      purpose: {
        en: 'To encourage girl education by rewarding meritorious students with financial awards.',
        hi: 'मेधावी छात्राओं को वित्तीय पुरस्कारों से पुरस्कृत करके बालिका शिक्षा को प्रोत्साहित करना।'
      },
      eligibility: {
        en: 'Girl students of Rajasthan who scored 75% or more in Class 10 or Class 12 board exams.',
        hi: 'राजस्थान की छात्राएं जिन्होंने कक्षा 10 या कक्षा 12 की बोर्ड परीक्षाओं में 75% या उससे अधिक अंक प्राप्त किए हैं।'
      },
      documents: {
        en: ['Class 10/12 Marksheet', 'Jan Aadhaar Card', 'Bank Passbook', 'Current School/College Study Certificate'],
        hi: ['कक्षा 10/12 की मार्कशीट', 'जन आधार कार्ड', 'बैंक पासबुक', 'वर्तमान स्कूल/कॉलेज अध्ययन प्रमाण पत्र']
      },
      process: {
        en: '1. Apply online on Shala Darpan portal during the application window (usually around Basant Panchami). 2. Fill marks and personal details. 3. Upload marksheet and bank details. 4. Verification by school/department. 5. Award amount credited.',
        hi: '1. आवेदन विंडो के दौरान शाला दर्पण पोर्टल पर ऑनलाइन आवेदन करें (आमतौर पर बसंत पंचमी के आसपास)। 2. अंक और व्यक्तिगत विवरण भरें। 3. मार्कशीट और बैंक विवरण अपलोड करें। 4. स्कूल/विभाग द्वारा सत्यापन। 5. पुरस्कार राशि जमा।'
      },
      tips: {
        en: 'The award is given in two installments for Class 10 students and one installment for Class 12 students.',
        hi: 'कक्षा 10 की छात्राओं के लिए पुरस्कार दो किस्तों में और कक्षा 12 की छात्राओं के लिए एक किस्त में दिया जाता है।'
      }
    }
  },
  {
    id: 'jamabandi-nakal-rajasthan',
    category: 'Land & Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Land Record',
    serviceNameHi: 'भूमि रिकॉर्ड',
    formName: 'Jamabandi (RoR) Nakal Application',
    formNameHi: 'जमाबंदी (आरओआर) नकल आवेदन',
    description: 'Application to obtain a copy of land records (Jamabandi) in Rajasthan.',
    descriptionHi: 'राजस्थान में भूमि रिकॉर्ड (जमाबंदी) की प्रति प्राप्त करने के लिए आवेदन।',
    icon: Map,
    guidelines: ['Khasra number', 'Village name', 'Jan Aadhaar'],
    guidelinesHi: ['खसरा नंबर', 'गांव का नाम', 'जन आधार'],
    searchQuery: 'Jamabandi nakal online Rajasthan Apna Khata portal pdf',
    guide: {
      purpose: {
        en: 'To obtain an official copy of the Record of Rights (RoR) for land ownership verification and bank loans.',
        hi: 'भूमि स्वामित्व सत्यापन और बैंक ऋण के लिए अधिकारों के रिकॉर्ड (आरओआर) की एक आधिकारिक प्रति प्राप्त करने के लिए।'
      },
      eligibility: {
        en: 'Landowners or interested parties in Rajasthan.',
        hi: 'राजस्थान में भूमि मालिक या इच्छुक पार्टियां।'
      },
      documents: {
        en: ['Khasra Number or Khewat Number', 'Jan Aadhaar Card', 'Identity Proof'],
        hi: ['खसरा नंबर या खेवट नंबर', 'जन आधार कार्ड', 'पहचान प्रमाण']
      },
      process: {
        en: '1. Visit Apna Khata portal. 2. Select District, Tehsil, and Village. 3. Search by Name, Khasra, or Account number. 4. View and download the Jamabandi Nakal. 5. For certified copy, apply via e-Mitra.',
        hi: '1. अपना खाता पोर्टल पर जाएं। 2. जिला, तहसील और गांव का चयन करें। 3. नाम, खसरा या खाता संख्या के आधार पर खोजें। 4. जमाबंदी नकल देखें और डाउनलोड करें। 5. प्रमाणित प्रति के लिए, ई-मित्र के माध्यम से आवेदन करें।'
      },
      tips: {
        en: 'Online copies are for information only. For legal purposes, a digitally signed copy from e-Mitra or a certified copy from the Tehsil is required.',
        hi: 'ऑनलाइन प्रतियां केवल सूचना के लिए हैं। कानूनी उद्देश्यों के लिए, ई-मित्र से डिजिटल रूप से हस्ताक्षरित प्रति या तहसील से प्रमाणित प्रति आवश्यक है।'
      }
    }
  },
  {
    id: 'mutation-namantaran-rajasthan',
    category: 'Land & Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Mutation',
    serviceNameHi: 'नामांतरण',
    formName: 'Mutation Application Form',
    formNameHi: 'नामांतरण आवेदन फॉर्म',
    description: 'Application for changing land ownership records after sale or inheritance.',
    descriptionHi: 'बिक्री या विरासत के बाद भूमि स्वामित्व रिकॉर्ड बदलने के लिए आवेदन।',
    icon: FileEdit,
    guidelines: ['Registry copy', 'Death certificate (if inheritance)', 'Jan Aadhaar'],
    guidelinesHi: ['रजिस्ट्री कॉपी', 'मृत्यु प्रमाण पत्र (यदि विरासत है)', 'जन आधार'],
    searchQuery: 'Land mutation namantaran application form Rajasthan Apna Khata pdf',
    guide: {
      purpose: {
        en: 'To update the government land records with the name of the new owner after a property transaction or death of the previous owner.',
        hi: 'संपत्ति के लेनदेन या पिछले मालिक की मृत्यु के बाद नए मालिक के नाम के साथ सरकारी भूमि रिकॉर्ड को अपडेट करने के लिए।'
      },
      eligibility: {
        en: 'New buyers of land or legal heirs of a deceased landowner in Rajasthan.',
        hi: 'राजस्थान में भूमि के नए खरीदार या मृतक भूमि मालिक के कानूनी उत्तराधिकारी।'
      },
      documents: {
        en: ['Registered Sale Deed (Registry)', 'Death Certificate (for inheritance)', 'Legal Heir Certificate (for inheritance)', 'Jan Aadhaar Card', 'Old Jamabandi Copy'],
        hi: ['पंजीकृत बिक्री विलेख (रजिस्ट्री)', 'मृत्यु प्रमाण पत्र (विरासत के लिए)', 'कानूनी उत्तराधिकारी प्रमाण पत्र (विरासत के लिए)', 'जन आधार कार्ड', 'पुरानी जमाबंदी प्रति']
      },
      process: {
        en: '1. Apply online via Apna Khata portal or e-Mitra. 2. Upload the registry or death certificate. 3. Patwari verification and report. 4. Tehsildar approval. 5. Name updated in Jamabandi.',
        hi: '1. अपना खाता पोर्टल या ई-मित्र के माध्यम से ऑनलाइन आवेदन करें। 2. रजिस्ट्री या मृत्यु प्रमाण पत्र अपलोड करें। 3. पटवारी सत्यापन और रिपोर्ट। 4. तहसीलदार की मंजूरी। 5. जमाबंदी में नाम अपडेट।'
      },
      tips: {
        en: 'Mutation is a critical step after property registration to ensure you are recognized as the owner in revenue records.',
        hi: 'राजस्व रिकॉर्ड में मालिक के रूप में पहचाने जाने को सुनिश्चित करने के लिए संपत्ति पंजीकरण के बाद नामांतरण एक महत्वपूर्ण कदम है।'
      }
    }
  },
  {
    id: 'kcc-loan-form',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'KCC',
    serviceNameHi: 'केसीसी',
    formName: 'Kisan Credit Card Application',
    formNameHi: 'किसान क्रेडिट कार्ड आवेदन',
    description: 'Credit facility for farmers to meet their cultivation and other needs.',
    descriptionHi: 'किसानों के लिए उनकी खेती और अन्य जरूरतों को पूरा करने के लिए ऋण सुविधा।',
    icon: CreditCard,
    guidelines: ['Land records', 'Aadhaar card', 'Bank account', 'No-dues certificate'],
    guidelinesHi: ['भूमि रिकॉर्ड', 'आधार कार्ड', 'बैंक खाता', 'नो-ड्यूज सर्टिफिकेट'],
    searchQuery: 'Kisan Credit Card KCC application form SBI PNB Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To provide timely and adequate credit support to farmers for their cultivation and other needs (seeds, fertilizers, pesticides).',
        hi: 'किसानों को उनकी खेती और अन्य जरूरतों (बीज, उर्वरक, कीटनाशक) के लिए समय पर और पर्याप्त ऋण सहायता प्रदान करना।'
      },
      eligibility: {
        en: 'All farmers - individuals/joint borrowers who are owner cultivators, tenant farmers, or sharecroppers.',
        hi: 'सभी किसान - व्यक्ति/संयुक्त उधारकर्ता जो मालिक कृषक, किरायेदार किसान या बटाईदार हैं।'
      },
      documents: {
        en: ['Aadhaar Card', 'Land Record (Jamabandi)', 'Voter ID/PAN Card', 'Passport size Photograph', 'No-Dues Certificate from other banks in the area'],
        hi: ['आधार कार्ड', 'भूमि रिकॉर्ड (जमाबंदी)', 'वोटर आईडी/पैन कार्ड', 'पासपोर्ट साइज फोटो', 'क्षेत्र के अन्य बैंकों से नो-ड्यूज सर्टिफिकेट']
      },
      process: {
        en: '1. Visit your nearest bank branch. 2. Fill the KCC application form. 3. Submit land records and identity proofs. 4. Bank verification and land inspection. 5. Loan sanctioned and KCC card issued.',
        hi: '1. अपनी निकटतम बैंक शाखा पर जाएं। 2. केसीसी आवेदन फॉर्म भरें। 3. भूमि रिकॉर्ड और पहचान प्रमाण जमा करें। 4. बैंक सत्यापन और भूमि निरीक्षण। 5. ऋण स्वीकृत और केसीसी कार्ड जारी।'
      },
      tips: {
        en: 'KCC comes with low interest rates and includes crop insurance coverage under PMFBY.',
        hi: 'केसीसी कम ब्याज दरों के साथ आता है और इसमें पीएमएफबीवाई के तहत फसल बीमा कवरेज शामिल है।'
      }
    }
  },
  {
    id: 'palanhar-yojana-rajasthan',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'Palanhar Yojana',
    serviceNameHi: 'पालनहार योजना',
    formName: 'Palanhar Support Application',
    formNameHi: 'पालनहार सहायता आवेदन',
    description: 'Financial aid for the care and education of orphan children in Rajasthan.',
    descriptionHi: 'राजस्थान में अनाथ बच्चों की देखभाल और शिक्षा के लिए वित्तीय सहायता।',
    icon: Users,
    guidelines: ['Jan Aadhaar', 'Orphan certificate', 'School certificate', 'Income proof'],
    guidelinesHi: ['जन आधार', 'अनाथ प्रमाण पत्र', 'स्कूल प्रमाण पत्र', 'आय प्रमाण'],
    searchQuery: 'Rajasthan Palanhar Yojana application form online e-Mitra pdf',
    guide: {
      purpose: {
        en: 'To provide financial assistance to the caretakers (Palanhar) of orphan children for their upbringing, education, and health.',
        hi: 'अनाथ बच्चों के पालन-पोषण, शिक्षा और स्वास्थ्य के लिए उनके देखभाल करने वालों (पालनहार) को वित्तीय सहायता प्रदान करना।'
      },
      eligibility: {
        en: 'Orphan children, children of parents with life imprisonment/death penalty, or children of widows/divorcees. Caretaker must be a resident of Rajasthan.',
        hi: 'अनाथ बच्चे, आजीवन कारावास/मृत्युदंड वाले माता-पिता के बच्चे, या विधवाओं/तलाकशुदा महिलाओं के बच्चे। देखभाल करने वाला राजस्थान का निवासी होना चाहिए।'
      },
      documents: {
        en: ['Jan Aadhaar Card', 'Aadhaar Card of Child and Palanhar', 'Death Certificate of Parents (if applicable)', 'Income Certificate', 'School Study Certificate'],
        hi: ['जन आधार कार्ड', 'बच्चे और पालनहार का आधार कार्ड', 'माता-पिता का मृत्यु प्रमाण पत्र (यदि लागू हो)', 'आय प्रमाण पत्र', 'स्कूल अध्ययन प्रमाण पत्र']
      },
      process: {
        en: '1. Apply online via e-Mitra or SJE portal. 2. Register the Palanhar and the child. 3. Upload required certificates. 4. Verification by Social Justice and Empowerment Department. 5. Monthly allowance credited to bank account.',
        hi: '1. ई-मित्र या एसजेई पोर्टल के माध्यम से ऑनलाइन आवेदन करें। 2. पालनहार और बच्चे का पंजीकरण करें। 3. आवश्यक प्रमाण पत्र अपलोड करें। 4. सामाजिक न्याय और अधिकारिता विभाग द्वारा सत्यापन। 5. मासिक भत्ता बैंक खाते में जमा।'
      },
      tips: {
        en: 'Annual physical verification of the child and Palanhar is required to continue the benefits.',
        hi: 'लाभ जारी रखने के लिए बच्चे और पालनहार का वार्षिक भौतिक सत्यापन आवश्यक है।'
      }
    }
  },
  {
    id: 'disability-pension-rajasthan',
    category: 'Pension Forms',
    categoryHi: 'पेंशन फॉर्म',
    serviceName: 'Disability Pension',
    serviceNameHi: 'विकलांगता पेंशन',
    formName: 'Vishesh Yogyajan Pension Form',
    formNameHi: 'विशेष योग्यजन पेंशन फॉर्म',
    description: 'Monthly pension for persons with disabilities in Rajasthan.',
    descriptionHi: 'राजस्थान में विकलांग व्यक्तियों के लिए मासिक पेंशन।',
    icon: Accessibility,
    guidelines: ['Disability certificate', 'Jan Aadhaar', 'Income proof'],
    guidelinesHi: ['विकलांगता प्रमाण पत्र', 'जन आधार', 'आय प्रमाण'],
    searchQuery: 'Rajasthan disability pension application form SSP portal e-Mitra pdf',
    guide: {
      purpose: {
        en: 'To provide financial security and support to persons with 40% or more disability.',
        hi: '40% या उससे अधिक विकलांगता वाले व्यक्तियों को वित्तीय सुरक्षा और सहायता प्रदान करना।'
      },
      eligibility: {
        en: 'Persons with 40% or more disability. Family income must be below Rs. 60,000 per annum (no limit for some categories).',
        hi: '40% या उससे अधिक विकलांगता वाले व्यक्ति। पारिवारिक आय 60,000 रुपये प्रति वर्ष से कम होनी चाहिए (कुछ श्रेणियों के लिए कोई सीमा नहीं)।'
      },
      documents: {
        en: ['Disability Certificate (UDID Card)', 'Jan Aadhaar Card', 'Aadhaar Card', 'Bank Passbook', 'Income Certificate'],
        hi: ['विकलांगता प्रमाण पत्र (UDID कार्ड)', 'जन आधार कार्ड', 'आधार कार्ड', 'बैंक पासबुक', 'आय प्रमाण पत्र']
      },
      process: {
        en: '1. Apply online via SSP portal or e-Mitra. 2. Provide UDID details for automatic verification. 3. Verification by local BDO/SDO. 4. Pension approval and monthly disbursement.',
        hi: '1. एसएसपी पोर्टल या ई-मित्र के माध्यम से ऑनलाइन आवेदन करें। 2. स्वचालित सत्यापन के लिए यूडीआईडी विवरण प्रदान करें। 3. स्थानीय बीडीओ/एसडीओ द्वारा सत्यापन। 4. पेंशन की मंजूरी और मासिक वितरण।'
      },
      tips: {
        en: 'Ensure your UDID card is linked with Jan Aadhaar for a smoother application process.',
        hi: 'सुचारू आवेदन प्रक्रिया के लिए सुनिश्चित करें कि आपका यूडीआईडी कार्ड जन आधार से जुड़ा हुआ है।'
      }
    }
  },
  {
    id: 'employment-registration-rajasthan',
    category: 'Employment Services',
    categoryHi: 'रोजगार सेवाएं',
    serviceName: 'Employment Exchange',
    serviceNameHi: 'रोजगार कार्यालय',
    formName: 'Unemployed Registration Form',
    formNameHi: 'बेरोजगार पंजीकरण फॉर्म',
    description: 'Registration for job seekers to get employment assistance and unemployment allowance.',
    descriptionHi: 'रोजगार सहायता और बेरोजगारी भत्ता प्राप्त करने के लिए नौकरी चाहने वालों के लिए पंजीकरण।',
    icon: Briefcase,
    guidelines: ['Educational certificates', 'Domicile certificate', 'Caste certificate'],
    guidelinesHi: ['शैक्षिक प्रमाण पत्र', 'मूल निवास प्रमाण पत्र', 'जाति प्रमाण पत्र'],
    searchQuery: 'Rajasthan employment exchange registration online Berojgari Bhatta form pdf',
    guide: {
      purpose: {
        en: 'To register unemployed youth in the state database for job notifications and eligibility for the Mukhyamantri Yuva Sambal Yojana (Unemployment Allowance).',
        hi: 'नौकरी की सूचनाओं और मुख्यमंत्री युवा संबल योजना (बेरोजगारी भत्ता) के लिए पात्रता के लिए राज्य डेटाबेस में बेरोजगार युवाओं को पंजीकृत करना।'
      },
      eligibility: {
        en: 'Unemployed residents of Rajasthan with minimum educational qualification (usually Graduation for allowance).',
        hi: 'न्यूनतम शैक्षिक योग्यता वाले राजस्थान के बेरोजगार निवासी (आमतौर पर भत्ते के लिए स्नातक)।'
      },
      documents: {
        en: ['10th, 12th, and Degree Marksheets', 'Domicile Certificate (Mool Niwas)', 'Caste Certificate', 'Aadhaar Card', 'Jan Aadhaar Card'],
        hi: ['10वीं, 12वीं और डिग्री की मार्कशीट', 'मूल निवास प्रमाण पत्र', 'जाति प्रमाण पत्र', 'आधार कार्ड', 'जन आधार कार्ड']
      },
      process: {
        en: '1. Visit the Rajasthan Employment portal. 2. Register using SSO ID. 3. Fill personal and educational details. 4. Upload documents. 5. Receive registration number and card.',
        hi: '1. राजस्थान रोजगार पोर्टल पर जाएं। 2. एसएसओ आईडी का उपयोग करके पंजीकरण करें। 3. व्यक्तिगत और शैक्षिक विवरण भरें। 4. दस्तावेज अपलोड करें। 5. पंजीकरण संख्या और कार्ड प्राप्त करें।'
      },
      tips: {
        en: 'Registration must be renewed every 3 years to remain active in the exchange database.',
        hi: 'एक्सचेंज डेटाबेस में सक्रिय रहने के लिए हर 3 साल में पंजीकरण का नवीनीकरण किया जाना चाहिए।'
      }
    }
  },
  {
    id: 'voter-id-new-form-6',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'Voter ID',
    serviceNameHi: 'वोटर आईडी',
    formName: 'Form 6 - New Voter Registration',
    formNameHi: 'फॉर्म 6 - नया मतदाता पंजीकरण',
    description: 'Application for inclusion of name in the Electoral Roll for the first time.',
    descriptionHi: 'पहली बार मतदाता सूची में नाम शामिल करने के लिए आवेदन।',
    icon: UserCircle,
    guidelines: ['Age proof (18+)', 'Address proof', 'Photograph'],
    guidelinesHi: ['आयु प्रमाण (18+)', 'पते का प्रमाण', 'फोटो'],
    searchQuery: 'Voter ID card online application form 6 NVSP portal pdf',
    guide: {
      purpose: {
        en: 'To register as a voter and obtain a Voter ID card (EPIC) for participating in elections.',
        hi: 'चुनावों में भाग लेने के लिए मतदाता के रूप में पंजीकरण करना और वोटर आईडी कार्ड (EPIC) प्राप्त करना।'
      },
      eligibility: {
        en: 'Indian citizens who have attained the age of 18 years on the qualifying date.',
        hi: 'भारतीय नागरिक जिन्होंने योग्यता तिथि पर 18 वर्ष की आयु प्राप्त कर ली है।'
      },
      documents: {
        en: ['Passport size Photograph', 'Age Proof (Birth Certificate/10th Marksheet/Aadhaar)', 'Address Proof (Electricity Bill/Ration Card/Aadhaar)'],
        hi: ['पासपोर्ट साइज फोटो', 'आयु प्रमाण (जन्म प्रमाण पत्र/10वीं की मार्कशीट/आधार)', 'पते का प्रमाण (बिजली बिल/राशन कार्ड/आधार)']
      },
      process: {
        en: '1. Visit NVSP portal or use Voter Helpline App. 2. Select Form 6. 3. Fill personal details and address. 4. Upload photo and documents. 5. Field verification by BLO. 6. Voter ID card sent by post.',
        hi: '1. NVSP पोर्टल पर जाएं या वोटर हेल्पलाइन ऐप का उपयोग करें। 2. फॉर्म 6 चुनें। 3. व्यक्तिगत विवरण और पता भरें। 4. फोटो और दस्तावेज अपलोड करें। 5. बीएलओ द्वारा फील्ड सत्यापन। 6. डाक द्वारा भेजा गया वोटर आईडी कार्ड।'
      },
      tips: {
        en: 'You can track your application status online using the reference number provided after submission.',
        hi: 'आप सबमिशन के बाद दिए गए संदर्भ संख्या का उपयोग करके अपने आवेदन की स्थिति ऑनलाइन ट्रैक कर सकते हैं।'
      }
    }
  },
  {
    id: 'trade-license-rajasthan',
    category: 'Municipal Services',
    categoryHi: 'नगर पालिका सेवाएं',
    serviceName: 'Trade License',
    serviceNameHi: 'व्यापार लाइसेंस',
    formName: 'Business License Application',
    formNameHi: 'व्यापार लाइसेंस आवेदन',
    description: 'Permission to carry out specific trade or business within municipal limits.',
    descriptionHi: 'नगर पालिका सीमा के भीतर विशिष्ट व्यापार या व्यवसाय करने की अनुमति।',
    icon: Building,
    guidelines: ['Property documents', 'ID proof', 'NOC from Fire/Pollution (if applicable)'],
    guidelinesHi: ['संपत्ति के दस्तावेज', 'आईडी प्रमाण', 'अग्नि/प्रदूषण से एनओसी (यदि लागू हो)'],
    searchQuery: 'Trade license application form Rajasthan Municipal Corporation online pdf',
    guide: {
      purpose: {
        en: 'To ensure that businesses operate in compliance with safety and health regulations of the local municipality.',
        hi: 'यह सुनिश्चित करने के लिए कि व्यवसाय स्थानीय नगर पालिका के सुरक्षा और स्वास्थ्य नियमों के अनुपालन में संचालित हों।'
      },
      eligibility: {
        en: 'Any person or entity intending to start a business within the limits of a Municipal Corporation/Council.',
        hi: 'नगर निगम/परिषद की सीमा के भीतर व्यवसाय शुरू करने का इरादा रखने वाला कोई भी व्यक्ति या संस्था।'
      },
      documents: {
        en: ['Property Ownership Proof or Rent Agreement', 'Site Plan of the business premises', 'Aadhaar/PAN of the owner', 'Fire NOC (for specific trades)', 'Pollution NOC (for industrial trades)'],
        hi: ['संपत्ति के स्वामित्व का प्रमाण या किराया समझौता', 'व्यवसाय परिसर का साइट प्लान', 'मालिक का आधार/पैन', 'फायर एनओसी (विशिष्ट ट्रेडों के लिए)', 'प्रदूषण एनओसी (औद्योगिक ट्रेडों के लिए)']
      },
      process: {
        en: '1. Apply online via the local Municipal portal or LSG Rajasthan website. 2. Fill business details and category. 3. Upload documents. 4. Pay the license fee. 5. Inspection by municipal officers. 6. License issued.',
        hi: '1. स्थानीय नगर पालिका पोर्टल या एलएसजी राजस्थान की वेबसाइट के माध्यम से ऑनलाइन आवेदन करें। 2. व्यवसाय विवरण और श्रेणी भरें। 3. दस्तावेज अपलोड करें। 4. लाइसेंस शुल्क का भुगतान करें। 5. नगर पालिका अधिकारियों द्वारा निरीक्षण। 6. लाइसेंस जारी।'
      },
      tips: {
        en: 'Trade licenses must be renewed annually before the expiry date to avoid penalties.',
        hi: 'जुर्माने से बचने के लिए समाप्ति तिथि से पहले व्यापार लाइसेंस का प्रतिवर्ष नवीनीकरण किया जाना चाहिए।'
      }
    }
  },
  {
    id: 'water-connection-rajasthan',
    category: 'Municipal Services',
    categoryHi: 'नगर पालिका सेवाएं',
    serviceName: 'Water Connection',
    serviceNameHi: 'पानी का कनेक्शन',
    formName: 'New Water Connection Form',
    formNameHi: 'नया पानी कनेक्शन फॉर्म',
    description: 'Application for a new domestic or commercial water connection in Rajasthan.',
    descriptionHi: 'राजस्थान में नए घरेलू या व्यावसायिक पानी के कनेक्शन के लिए आवेदन।',
    icon: Droplets,
    guidelines: ['Property ownership proof', 'ID proof', 'Plumber report'],
    guidelinesHi: ['संपत्ति के स्वामित्व का प्रमाण', 'आईडी प्रमाण', 'प्लंबर रिपोर्ट'],
    searchQuery: 'PHED Rajasthan new water connection application form online pdf',
    guide: {
      purpose: {
        en: 'To obtain a legal water supply connection from the Public Health Engineering Department (PHED) or local municipality.',
        hi: 'लोक स्वास्थ्य अभियांत्रिकी विभाग (PHED) या स्थानीय नगर पालिका से कानूनी जल आपूर्ति कनेक्शन प्राप्त करना।'
      },
      eligibility: {
        en: 'Owners or legal occupants of a property in Rajasthan.',
        hi: 'राजस्थान में किसी संपत्ति के मालिक या कानूनी निवासी।'
      },
      documents: {
        en: ['Proof of Ownership (Registry/Patta)', 'Aadhaar Card', 'Recent Photograph', 'Site Map of the building'],
        hi: ['स्वामित्व का प्रमाण (रजिस्ट्री/पट्टा)', 'आधार कार्ड', 'हालिया तस्वीर', 'भवन का साइट मैप']
      },
      process: {
        en: '1. Apply online via PHED Rajasthan portal or e-Mitra. 2. Fill the application form with property details. 3. Upload documents. 4. Site inspection by Junior Engineer (JEN). 5. Pay the connection charges. 6. Connection installed.',
        hi: '1. PHED राजस्थान पोर्टल या ई-मित्र के माध्यम से ऑनलाइन आवेदन करें। 2. संपत्ति के विवरण के साथ आवेदन फॉर्म भरें। 3. दस्तावेज अपलोड करें। 4. कनिष्ठ अभियंता (JEN) द्वारा साइट निरीक्षण। 5. कनेक्शन शुल्क का भुगतान करें। 6. कनेक्शन स्थापित।'
      },
      tips: {
        en: 'Ensure there are no pending dues on the property if it\'s an old building before applying for a new connection.',
        hi: 'नया कनेक्शन आवेदन करने से पहले सुनिश्चित करें कि यदि यह पुरानी इमारत है तो संपत्ति पर कोई बकाया नहीं है।'
      }
    }
  },
  {
    id: 'electricity-connection-rajasthan',
    category: 'Municipal Services',
    categoryHi: 'नगर पालिका सेवाएं',
    serviceName: 'Electricity Connection',
    serviceNameHi: 'बिजली कनेक्शन',
    formName: 'New Service Connection (NSC) Form',
    formNameHi: 'नया सर्विस कनेक्शन (NSC) फॉर्म',
    description: 'Application for a new electricity connection from Discoms (JVVNL/AVVNL/JDVVNL).',
    descriptionHi: 'डिस्कॉम (JVVNL/AVVNL/JDVVNL) से नए बिजली कनेक्शन के लिए आवेदन।',
    icon: Zap,
    guidelines: ['Ownership proof', 'ID proof', 'Load requirement'],
    guidelinesHi: ['स्वामित्व का प्रमाण', 'आईडी प्रमाण', 'लोड आवश्यकता'],
    searchQuery: 'JVVNL AVVNL JDVVNL new electricity connection application form online pdf',
    guide: {
      purpose: {
        en: 'To get a new electrical supply for residential, commercial, or industrial use.',
        hi: 'आवासीय, व्यावसायिक या औद्योगिक उपयोग के लिए नई विद्युत आपूर्ति प्राप्त करना।'
      },
      eligibility: {
        en: 'Any person who is the owner or lawful occupier of the premises.',
        hi: 'कोई भी व्यक्ति जो परिसर का मालिक या कानूनी कब्जाधारी है।'
      },
      documents: {
        en: ['Proof of Ownership (Sale Deed/Allotment Letter)', 'Identity Proof (Aadhaar/Voter ID)', 'Passport size Photo', 'Indemnity Bond (if applicable)'],
        hi: ['स्वामित्व का प्रमाण (बिक्री विलेख/आवंटन पत्र)', 'पहचान प्रमाण (आधार/वोटर आईडी)', 'पासपोर्ट साइज फोटो', 'क्षतिपूर्ति बांड (यदि लागू हो)']
      },
      process: {
        en: '1. Apply online on the respective Discom portal (e.g., JVVNL). 2. Fill NSC form and specify load. 3. Upload documents. 4. Technical feasibility check by Discom staff. 5. Demand note का भुगतान करें। 6. Meter installation.',
        hi: '1. संबंधित डिस्कॉम पोर्टल (जैसे, JVVNL) पर ऑनलाइन आवेदन करें। 2. NSC फॉर्म भरें और लोड निर्दिष्ट करें। 3. दस्तावेज अपलोड करें। 4. डिस्कॉम कर्मचारियों द्वारा तकनीकी व्यवहार्यता जांच। 5. डिमांड नोट का भुगतान करें। 6. मीटर स्थापना।'
      },
      tips: {
        en: 'Choose the correct category (Domestic/Non-Domestic) as tariffs vary significantly.',
        hi: 'सही श्रेणी (घरेलू/गैर-घरेलू) चुनें क्योंकि टैरिफ काफी भिन्न होते हैं।'
      }
    }
  },
  {
    id: 'mudra-loan-application',
    category: 'Banking and Financial Forms',
    categoryHi: 'बैंकिंग और वित्तीय फॉर्म',
    serviceName: 'Mudra Loan',
    serviceNameHi: 'मुद्रा ऋण',
    formName: 'PMMY Loan Application Form',
    formNameHi: 'पीएमएमवाई ऋण आवेदन फॉर्म',
    description: 'Loan up to Rs. 10 Lakh for non-corporate, non-farm small/micro enterprises.',
    descriptionHi: 'गैर-कॉर्पोरेट, गैर-कृषि लघु/सूक्ष्म उद्यमों के लिए 10 लाख रुपये तक का ऋण।',
    icon: Banknote,
    guidelines: ['Business plan', 'ID proof', 'Address proof', 'Caste certificate (if applicable)'],
    guidelinesHi: ['बिजनेस प्लान', 'आईडी प्रमाण', 'पते का प्रमाण', 'जाति प्रमाण पत्र (यदि लागू हो)'],
    searchQuery: 'Pradhan Mantri Mudra Yojana PMMY loan application form Shishu Kishor Tarun pdf',
    guide: {
      purpose: {
        en: 'To provide funding to small business owners for starting or expanding their micro-enterprises.',
        hi: 'छोटे व्यवसाय मालिकों को उनके सूक्ष्म उद्यमों को शुरू करने या विस्तारित करने के लिए धन प्रदान करना।'
      },
      eligibility: {
        en: 'Any Indian citizen who has a business plan for a non-farm sector income generating activity.',
        hi: 'कोई भी भारतीय नागरिक जिसके पास गैर-कृषि क्षेत्र की आय सृजन गतिविधि के लिए बिजनेस प्लान है।'
      },
      documents: {
        en: ['Identity Proof (Aadhaar/Voter ID/PAN)', 'Address Proof', 'Business Address Proof', 'Project Report/Business Plan', 'Quotations for machinery/items to be purchased'],
        hi: ['पहचान प्रमाण (आधार/वोटर आईडी/पैन)', 'पते का प्रमाण', 'व्यवसाय के पते का प्रमाण', 'प्रोजेक्ट रिपोर्ट/बिजनेस प्लान', 'खरीदी जाने वाली मशीनरी/वस्तुओं के लिए कोटेशन']
      },
      process: {
        en: '1. Choose the category: Shishu (up to 50k), Kishor (50k-5L), or Tarun (5L-10L). 2. Approach a commercial bank, RRB, or MFI. 3. Submit the PMMY application form with documents. 4. Bank evaluates the proposal. 5. Loan disbursed.',
        hi: '1. श्रेणी चुनें: शिशु (50 हजार तक), किशोर (50 हजार-5 लाख), या तरुण (5 लाख-10 लाख)। 2. किसी वाणिज्यिक बैंक, आरआरबी, या एमएफआई से संपर्क करें। 3. दस्तावेजों के साथ पीएमएमवाई आवेदन फॉर्म जमा करें। 4. बैंक प्रस्ताव का मूल्यांकन करता है। 5. ऋण वितरित।'
      },
      tips: {
        en: 'Mudra loans do not require any collateral or third-party guarantee.',
        hi: 'मुद्रा ऋण के लिए किसी संपार्श्विक या तीसरे पक्ष की गारंटी की आवश्यकता नहीं होती है।'
      }
    }
  },
  {
    id: 'solvency-certificate-rajasthan',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Solvency Certificate',
    serviceNameHi: 'सॉल्वेंसी सर्टिफिकेट',
    formName: 'Financial Soundness Certificate Form',
    formNameHi: 'वित्तीय सुदृढ़ता प्रमाण पत्र फॉर्म',
    description: 'Certificate proving the financial stability of an individual or entity.',
    descriptionHi: 'किसी व्यक्ति या संस्था की वित्तीय स्थिरता को साबित करने वाला प्रमाण पत्र।',
    icon: FileSignature,
    guidelines: ['Property valuation', 'Bank statement', 'Income tax returns'],
    guidelinesHi: ['संपत्ति का मूल्यांकन', 'बैंक स्टेटमेंट', 'आयकर रिटर्न'],
    searchQuery: 'Solvency certificate application form Rajasthan Revenue Department pdf',
    guide: {
      purpose: {
        en: 'Required for government tenders, court matters, or as proof of financial standing for business purposes.',
        hi: 'सरकारी निविदाओं, अदालती मामलों, या व्यावसायिक उद्देश्यों के लिए वित्तीय स्थिति के प्रमाण के रूप में आवश्यक।'
      },
      eligibility: {
        en: 'Residents of Rajasthan who own property or have significant bank balances.',
        hi: 'राजस्थान के निवासी जिनके पास संपत्ति है या महत्वपूर्ण बैंक बैलेंस है।'
      },
      documents: {
        en: ['Land/Property Documents', 'Valuation Report by an approved valuer', 'Bank Statements/Fixed Deposit receipts', 'Income Tax Returns (last 3 years)', 'Aadhaar Card'],
        hi: ['भूमि/संपत्ति के दस्तावेज', 'अनुमोदित मूल्यांकनकर्ता द्वारा मूल्यांकन रिपोर्ट', 'बैंक स्टेटमेंट/फिक्स्ड डिपॉजिट रसीदें', 'आयकर रिटर्न (पिछले 3 वर्ष)', 'आधार कार्ड']
      },
      process: {
        en: '1. Apply online via e-Mitra or Revenue portal. 2. Submit property and bank details. 3. Tehsildar/SDM conducts an inquiry. 4. Patwari report on property value. 5. Certificate issued by the competent authority.',
        hi: '1. ई-मित्र या राजस्व पोर्टल के माध्यम से ऑनलाइन आवेदन करें। 2. संपत्ति और बैंक विवरण जमा करें। 3. तहसीलदार/एसडीएम जांच करते हैं। 4. संपत्ति मूल्य पर पटवारी की रिपोर्ट। 5. सक्षम प्राधिकारी द्वारा प्रमाण पत्र जारी।'
      },
      tips: {
        en: 'The certificate is usually valid for one year from the date of issue.',
        hi: 'प्रमाण पत्र आमतौर पर जारी होने की तारीख से एक वर्ष के लिए वैध होता है।'
      }
    }
  },
  {
    id: 'character-certificate-police-rajasthan',
    category: 'Police Verification Forms',
    categoryHi: 'पुलिस सत्यापन फॉर्म',
    serviceName: 'Character Certificate',
    serviceNameHi: 'चरित्र प्रमाण पत्र',
    formName: 'Police Character Verification Form',
    formNameHi: 'पुलिस चरित्र सत्यापन फॉर्म',
    description: 'Verification of a person\'s criminal record by the police.',
    descriptionHi: 'पुलिस द्वारा किसी व्यक्ति के आपराधिक रिकॉर्ड का सत्यापन।',
    icon: ShieldCheck,
    guidelines: ['ID proof', 'Address proof', 'Purpose of certificate'],
    guidelinesHi: ['आईडी प्रमाण', 'पते का प्रमाण', 'प्रमाण पत्र का उद्देश्य'],
    searchQuery: 'Police character certificate online application Rajasthan Police e-Mitra pdf',
    guide: {
      purpose: {
        en: 'Required for government jobs, private employment, or visa applications to prove no criminal background.',
        hi: 'सरकारी नौकरियों, निजी रोजगार, या वीजा आवेदनों के लिए यह साबित करने के लिए आवश्यक है कि कोई आपराधिक पृष्ठभूमि नहीं है।'
      },
      eligibility: {
        en: 'Any resident of Rajasthan.',
        hi: 'राजस्थान का कोई भी निवासी।'
      },
      documents: {
        en: ['Aadhaar Card', 'Voter ID/Passport', 'Passport size Photograph', 'Address Proof'],
        hi: ['आधार कार्ड', 'वोटर आईडी/पासपोर्ट', 'पासपोर्ट साइज फोटो', 'पते का प्रमाण']
      },
      process: {
        en: '1. Apply online via Rajasthan Police portal or e-Mitra. 2. Fill personal details and address history. 3. Pay the processing fee. 4. Local police station verification. 5. SP office issues the certificate online.',
        hi: '1. राजस्थान पुलिस पोर्टल या ई-मित्र के माध्यम से ऑनलाइन आवेदन करें। 2. व्यक्तिगत विवरण और पते का इतिहास भरें। 3. प्रसंस्करण शुल्क का भुगतान करें। 4. स्थानीय पुलिस स्टेशन सत्यापन। 5. एसपी कार्यालय ऑनलाइन प्रमाण पत्र जारी करता है।'
      },
      tips: {
        en: 'You can download the digitally signed certificate from the portal once approved.',
        hi: 'अनुमोदित होने के बाद आप पोर्टल से डिजिटल रूप से हस्ताक्षरित प्रमाण पत्र डाउनलोड कर सकते हैं।'
      }
    }
  },
  {
    id: 'pm-awas-yojana-urban',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'PM Awas Yojana',
    serviceNameHi: 'पीएम आवास योजना',
    formName: 'PMAY Urban Application Form',
    formNameHi: 'पीएमएवाई शहरी आवेदन फॉर्म',
    description: 'Housing for all in urban areas with interest subsidy or financial aid.',
    descriptionHi: 'ब्याज सब्सिडी या वित्तीय सहायता के साथ शहरी क्षेत्रों में सभी के लिए आवास।',
    icon: Home,
    guidelines: ['Aadhaar card', 'Income proof', 'Property details', 'Bank account'],
    guidelinesHi: ['आधार कार्ड', 'आय प्रमाण', 'संपत्ति विवरण', 'बैंक खाता'],
    searchQuery: 'PMAY Urban online application form PMAY-U portal Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To provide affordable housing to the urban poor, including EWS, LIG, and MIG categories.',
        hi: 'ईडब्ल्यूएस, एलआईजी और एमआईजी श्रेणियों सहित शहरी गरीबों को किफायती आवास प्रदान करना।'
      },
      eligibility: {
        en: 'Families with no pucca house in India. Income limits vary by category (EWS up to 3L, LIG 3-6L, MIG 6-18L).',
        hi: 'भारत में बिना पक्के घर वाले परिवार। आय सीमा श्रेणी के अनुसार भिन्न होती है (EWS 3L तक, LIG 3-6L, MIG 6-18L)।'
      },
      documents: {
        en: ['Aadhaar Card', 'Voter ID', 'Income Certificate', 'Bank Passbook', 'Affidavit stating no pucca house'],
        hi: ['आधार कार्ड', 'वोटर आईडी', 'आय प्रमाण पत्र', 'बैंक पासबुक', 'पक्का घर न होने का हलफनामा']
      },
      process: {
        en: '1. Apply online via PMAY-U portal or at Common Service Centers (CSC). 2. Select the component (e.g., Credit Linked Subsidy). 3. Fill details and upload Aadhaar. 4. Verification by local urban body. 5. Approval and fund disbursement.',
        hi: '1. PMAY-U पोर्टल के माध्यम से या कॉमन सर्विस सेंटर (CSC) पर ऑनलाइन आवेदन करें। 2. घटक चुनें (जैसे, क्रेडिट लिंक्ड सब्सिडी)। 3. विवरण भरें और आधार अपलोड करें। 4. स्थानीय शहरी निकाय द्वारा सत्यापन। 5. अनुमोदन और निधि संवितरण।'
      },
      tips: {
        en: 'The house must be in the name of the female head of the household or in joint name.',
        hi: 'घर घर की महिला मुखिया के नाम पर या संयुक्त नाम पर होना चाहिए।'
      }
    }
  },
  {
    id: 'pm-ujjwala-yojana-form',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'Ujjwala Yojana',
    serviceNameHi: 'उज्ज्वला योजना',
    formName: 'PMUY New Connection Form',
    formNameHi: 'पीएमयूवाई नया कनेक्शन फॉर्म',
    description: 'Free LPG connection for women from BPL households.',
    descriptionHi: 'बीपीएल परिवारों की महिलाओं के लिए मुफ्त एलपीजी कनेक्शन।',
    icon: Flame,
    guidelines: ['BPL Ration card', 'Aadhaar card', 'Bank account', 'Photo'],
    guidelinesHi: ['बीपीएल राशन कार्ड', 'आधार कार्ड', 'बैंक खाता', 'फोटो'],
    searchQuery: 'Pradhan Mantri Ujjwala Yojana PMUY application form online pdf',
    guide: {
      purpose: {
        en: 'To provide clean cooking fuel (LPG) to women from underprivileged households to improve their health and environment.',
        hi: 'वंचित परिवारों की महिलाओं को उनके स्वास्थ्य और पर्यावरण में सुधार के लिए स्वच्छ खाना पकाने का ईंधन (एलपीजी) प्रदान करना।'
      },
      eligibility: {
        en: 'Adult woman belonging to a poor household (BPL/SECC) not having an LPG connection in her name.',
        hi: 'एक गरीब परिवार (बीपीएल/एसईसीसी) से संबंधित वयस्क महिला जिसके नाम पर एलपीजी कनेक्शन नहीं है।'
      },
      documents: {
        en: ['BPL Ration Card', 'Aadhaar Card of all family members', 'Bank Passbook', 'Passport size Photograph', 'KYC Form'],
        hi: ['बीपीएल राशन कार्ड', 'परिवार के सभी सदस्यों का आधार कार्ड', 'बैंक पासबुक', 'पासपोर्ट साइज फोटो', 'केवाईसी फॉर्म']
      },
      process: {
        en: '1. Visit the nearest LPG distributor (Indane, Bharat, HP). 2. Submit the PMUY application form. 3. Verification of BPL status and Aadhaar. 4. Connection issued with stove and first cylinder.',
        hi: '1. निकटतम एलपीजी वितरक (इंडेन, भारत, एचपी) पर जाएं। 2. पीएमयूवाई आवेदन फॉर्म जमा करें। 3. बीपीएल स्थिति और आधार का सत्यापन। 4. चूल्हे और पहले सिलेंडर के साथ कनेक्शन जारी।'
      },
      tips: {
        en: 'The scheme provides a subsidy for the first refill and stove, which can be repaid through EMIs from subsequent subsidies.',
        hi: 'यह योजना पहले रिफिल और चूल्हे के लिए सब्सिडी प्रदान करती है, जिसे बाद की सब्सिडी से ईएमआई के माध्यम से चुकाया जा सकता है।'
      }
    }
  },
  {
    id: 'sukanya-samriddhi-yojana-form',
    category: 'Banking and Financial Forms',
    categoryHi: 'बैंकिंग और वित्तीय फॉर्म',
    serviceName: 'Sukanya Samriddhi',
    serviceNameHi: 'सुकन्या समृद्धि',
    formName: 'SSY Account Opening Form',
    formNameHi: 'एसएसवाई खाता खोलने का फॉर्म',
    description: 'Small deposit scheme for the girl child to meet her future education and marriage expenses.',
    descriptionHi: 'बालिका के भविष्य की शिक्षा और विवाह के खर्चों को पूरा करने के लिए छोटी बचत योजना।',
    icon: Coins,
    guidelines: ['Birth certificate of girl', 'ID proof of parent', 'Address proof', 'Photo'],
    guidelinesHi: ['लड़की का जन्म प्रमाण पत्र', 'माता-पिता का आईडी प्रमाण', 'पते का प्रमाण', 'फोटो'],
    searchQuery: 'Sukanya Samriddhi Yojana SSY account opening form post office bank pdf',
    guide: {
      purpose: {
        en: 'To encourage parents to build a fund for the future education and marriage of their girl child with high interest rates and tax benefits.',
        hi: 'उच्च ब्याज दरों और कर लाभों के साथ अपनी बालिका की भविष्य की शिक्षा और विवाह के लिए एक फंड बनाने के लिए माता-पिता को प्रोत्साहित करना।'
      },
      eligibility: {
        en: 'Parents or legal guardians of a girl child aged below 10 years. Maximum 2 accounts per family.',
        hi: '10 वर्ष से कम आयु की बालिका के माता-पिता या कानूनी अभिभावक। प्रति परिवार अधिकतम 2 खाते।'
      },
      documents: {
        en: ['Birth Certificate of the Girl Child', 'Identity Proof of Parent/Guardian (Aadhaar/PAN)', 'Address Proof', 'Photographs'],
        hi: ['बालिका का जन्म प्रमाण पत्र', 'माता-पिता/अभिभावक का पहचान प्रमाण (आधार/पैन)', 'पते का प्रमाण', 'फोटो']
      },
      process: {
        en: '1. Visit any Post Office or authorized commercial bank. 2. Fill the SSY account opening form. 3. Submit documents and initial deposit (min Rs. 250). 4. Passbook issued for the account.',
        hi: '1. किसी भी डाकघर या अधिकृत वाणिज्यिक बैंक में जाएं। 2. एसएसवाई खाता खोलने का फॉर्म भरें। 3. दस्तावेज और प्रारंभिक जमा (न्यूनतम 250 रुपये) जमा करें। 4. खाते के लिए पासबुक जारी।'
      },
      tips: {
        en: 'The account matures after 21 years or at the time of the girl\'s marriage after she attains 18 years.',
        hi: 'खाता 21 साल बाद या लड़की के 18 साल की होने के बाद उसकी शादी के समय परिपक्व होता है।'
      }
    }
  },
  {
    id: 'nps-registration-form',
    category: 'Pension Forms',
    categoryHi: 'पेंशन फॉर्म',
    serviceName: 'NPS',
    serviceNameHi: 'एनपीएस',
    formName: 'National Pension System Registration',
    formNameHi: 'राष्ट्रीय पेंशन प्रणाली पंजीकरण',
    description: 'Voluntary, defined contribution retirement savings scheme.',
    descriptionHi: 'स्वैच्छिक, परिभाषित अंशदान सेवानिवृत्ति बचत योजना।',
    icon: Landmark,
    guidelines: ['Aadhaar/PAN', 'Bank details', 'Nominee details'],
    guidelinesHi: ['आधार/पैन', 'बैंक विवरण', 'नामांकित व्यक्ति का विवरण'],
    searchQuery: 'NPS registration form Tier 1 Tier 2 online NSDL Karvy pdf',
    guide: {
      purpose: {
        en: 'To provide old age income security and long-term market-linked returns for retirement planning.',
        hi: 'सेवानिवृत्ति योजना के लिए वृद्धावस्था आय सुरक्षा और दीर्घकालिक बाजार-लिंक्ड रिटर्न प्रदान करना।'
      },
      eligibility: {
        en: 'Any Indian citizen (resident or non-resident) aged between 18 and 70 years.',
        hi: '18 से 70 वर्ष की आयु के बीच का कोई भी भारतीय नागरिक (निवासी या अनिवासी)।'
      },
      documents: {
        en: ['Aadhaar Card', 'PAN Card', 'Cancelled Cheque/Bank Passbook', 'Passport size Photo', 'Signature scan'],
        hi: ['आधार कार्ड', 'पैन कार्ड', 'कैंसिल चेक/बैंक पासबुक', 'पासपोर्ट साइज फोटो', 'हस्ताक्षर स्कैन']
      },
      process: {
        en: '1. Register online via eNPS portal or visit a Point of Presence (POP) bank. 2. Choose between Tier I (pension) and Tier II (savings) accounts. 3. Fill personal and nomination details. 4. Make initial contribution. 5. PRAN (Permanent Retirement Account Number) generated.',
        hi: '1. eNPS पोर्टल के माध्यम से ऑनलाइन पंजीकरण करें या पॉइंट ऑफ प्रेजेंस (POP) बैंक पर जाएं। 2. टियर I (पेंशन) और टियर II (बचत) खातों के बीच चयन करें। 3. व्यक्तिगत और नामांकन विवरण भरें। 4. प्रारंभिक योगदान दें। 5. PRAN (स्थायी सेवानिवृत्ति खाता संख्या) उत्पन्न।'
      },
      tips: {
        en: 'NPS offers additional tax benefits under Section 80CCD(1B) up to Rs. 50,000.',
        hi: 'एनपीएस धारा 80CCD(1B) के तहत 50,000 रुपये तक के अतिरिक्त कर लाभ प्रदान करता है।'
      }
    }
  },
  {
    id: 'pm-matru-vandana-yojana-form',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'PMMVY',
    serviceNameHi: 'पीएमएमवीवाई',
    formName: 'Maternity Benefit Application',
    formNameHi: 'मातृत्व लाभ आवेदन',
    description: 'Financial assistance of Rs. 5,000 for pregnant and lactating mothers for the first living child.',
    descriptionHi: 'पहले जीवित बच्चे के लिए गर्भवती और स्तनपान कराने वाली माताओं के लिए 5,000 रुपये की वित्तीय सहायता।',
    icon: Baby,
    guidelines: ['MCP card', 'Aadhaar card', 'Bank account', 'Husband\'s Aadhaar'],
    guidelinesHi: ['एमसीपी कार्ड', 'आधार कार्ड', 'बैंक खाता', 'पति का आधार'],
    searchQuery: 'Pradhan Mantri Matru Vandana Yojana PMMVY application form 1A 1B 1C pdf',
    guide: {
      purpose: {
        en: 'To provide partial compensation for wage loss during pregnancy and to ensure safe delivery and good nutrition.',
        hi: 'गर्भावस्था के दौरान मजदूरी के नुकसान के लिए आंशिक मुआवजा प्रदान करना और सुरक्षित प्रसव और अच्छा पोषण सुनिश्चित करना।'
      },
      eligibility: {
        en: 'Pregnant Women and Lactating Mothers (PW&LM) for the first child in the family.',
        hi: 'परिवार के पहले बच्चे के लिए गर्भवती महिलाएं और स्तनपान कराने वाली माताएं (PW&LM)।'
      },
      documents: {
        en: ['Aadhaar Card of Mother and Husband', 'Bank Passbook', 'MCP Card (Mamta Card)', 'Birth Certificate of Child (for 3rd installment)'],
        hi: ['माता और पति का आधार कार्ड', 'बैंक पासबुक', 'एमसीपी कार्ड (ममता कार्ड)', 'बच्चे का जन्म प्रमाण पत्र (तीसरी किस्त के लिए)']
      },
      process: {
        en: '1. Register at the nearest Anganwadi Center or ASHA worker. 2. Fill Form 1A (registration), 1B (after 6 months), and 1C (after birth). 3. Verification of health checkups and immunization. 4. Cash incentive transferred to bank account.',
        hi: '1. निकटतम आंगनवाड़ी केंद्र या आशा कार्यकर्ता के पास पंजीकरण करें। 2. फॉर्म 1A (पंजीकरण), 1B (6 महीने बाद), और 1C (जन्म के बाद) भरें। 3. स्वास्थ्य जांच और टीकाकरण का सत्यापन। 4. नकद प्रोत्साहन बैंक खाते में स्थानांतरित।'
      },
      tips: {
        en: 'The benefit is paid in three installments linked to health milestones.',
        hi: 'स्वास्थ्य मील के पत्थर से जुड़ी तीन किस्तों में लाभ का भुगतान किया जाता है।'
      }
    }
  },
  {
    id: 'gst-registration-new',
    category: 'Banking and Financial Forms',
    categoryHi: 'बैंकिंग और वित्तीय फॉर्म',
    serviceName: 'GST Registration',
    serviceNameHi: 'जीएसटी पंजीकरण',
    formName: 'GST REG-01',
    formNameHi: 'जीएसटी REG-01',
    description: 'New registration for Goods and Services Tax (GST).',
    descriptionHi: 'वस्तु एवं सेवा कर (जीएसटी) के लिए नया पंजीकरण।',
    icon: Wallet,
    guidelines: ['PAN card', 'Aadhaar card', 'Business address proof', 'Bank details'],
    guidelinesHi: ['पैन कार्ड', 'आधार कार्ड', 'व्यवसाय के पते का प्रमाण', 'बैंक विवरण'],
    searchQuery: 'GST registration form REG-01 online pdf',
    guide: {
      purpose: {
        en: 'To legally register a business under the GST regime to collect and remit taxes to the government.',
        hi: 'सरकार को कर एकत्र करने और भेजने के लिए जीएसटी शासन के तहत व्यवसाय को कानूनी रूप से पंजीकृत करना।'
      },
      eligibility: {
        en: 'Businesses with turnover exceeding threshold limits (Rs. 20L/40L), inter-state suppliers, e-commerce operators.',
        hi: 'सीमा सीमा (20L/40L रुपये) से अधिक टर्नओवर वाले व्यवसाय, अंतर-राज्यीय आपूर्तिकर्ता, ई-कॉमर्स ऑपरेटर।'
      },
      documents: {
        en: ['PAN Card of Business/Owner', 'Aadhaar Card', 'Proof of Business Premises (Rent Agreement/Electricity Bill)', 'Bank Account Statement/Cancelled Cheque', 'Digital Signature (for companies)'],
        hi: ['व्यवसाय/मालिक का पैन कार्ड', 'आधार कार्ड', 'व्यवसाय परिसर का प्रमाण (किराया समझौता/बिजली बिल)', 'बैंक खाता विवरण/कैंसिल चेक', 'डिजिटल हस्ताक्षर (कंपनियों के लिए)']
      },
      process: {
        en: '1. Register on GST portal. 2. Fill Part A (PAN, Mobile, Email). 3. Fill Part B with business details and upload documents. 4. Verification by GST officer. 5. GSTIN and Registration Certificate issued.',
        hi: '1. जीएसटी पोर्टल पर पंजीकरण करें। 2. भाग ए (पैन, मोबाइल, ईमेल) भरें। 3. व्यावसायिक विवरण के साथ भाग बी भरें और दस्तावेज अपलोड करें। 4. जीएसटी अधिकारी द्वारा सत्यापन। 5. जीएसटीआईएन और पंजीकरण प्रमाण पत्र जारी।'
      },
      tips: {
        en: 'Ensure the business address proof matches the address in the application exactly.',
        hi: 'सुनिश्चित करें कि व्यवसाय के पते का प्रमाण आवेदन में दिए गए पते से बिल्कुल मेल खाता हो।'
      }
    }
  },
  {
    id: 'gst-cancellation-form',
    category: 'Banking and Financial Forms',
    categoryHi: 'बैंकिंग और वित्तीय फॉर्म',
    serviceName: 'GST Cancellation',
    serviceNameHi: 'जीएसटी रद्दीकरण',
    formName: 'GST REG-16',
    formNameHi: 'जीएसटी REG-16',
    description: 'Application for cancellation of GST registration.',
    descriptionHi: 'जीएसटी पंजीकरण रद्द करने के लिए आवेदन।',
    icon: UserMinus,
    guidelines: ['Reason for cancellation', 'Final return details', 'Stock details'],
    guidelinesHi: ['रद्दीकरण का कारण', 'अंतिम रिटर्न विवरण', 'स्टॉक विवरण'],
    searchQuery: 'GST registration cancellation form REG-16 pdf',
    guide: {
      purpose: {
        en: 'To surrender or cancel GST registration when the business is closed or no longer liable for GST.',
        hi: 'व्यवसाय बंद होने या जीएसटी के लिए उत्तरदायी नहीं होने पर जीएसटी पंजीकरण सरेंडर या रद्द करना।'
      },
      eligibility: {
        en: 'Registered taxpayers who have closed their business, changed constitution, or fallen below threshold.',
        hi: 'पंजीकृत करदाता जिन्होंने अपना व्यवसाय बंद कर दिया है, संविधान बदल दिया है, या सीमा से नीचे गिर गए हैं।'
      },
      documents: {
        en: ['GSTIN Details', 'Details of Stock held', 'Final Return (GSTR-10) details', 'Reason for Cancellation proof'],
        hi: ['जीएसटीआईएन विवरण', 'धारित स्टॉक का विवरण', 'अंतिम रिटर्न (GSTR-10) विवरण', 'रद्दीकरण के कारण का प्रमाण']
      },
      process: {
        en: '1. Login to GST portal. 2. Navigate to Services > Registration > Application for Cancellation of Registration. 3. Fill details and reason. 4. Submit via DSC or EVC. 5. Order for cancellation issued by officer.',
        hi: '1. जीएसटी पोर्टल पर लॉगिन करें। 2. सेवा > पंजीकरण > पंजीकरण रद्द करने के लिए आवेदन पर जाएं। 3. विवरण और कारण भरें। 4. डीएससी या ईवीसी के माध्यम से जमा करें। 5. अधिकारी द्वारा रद्दीकरण का आदेश जारी।'
      },
      tips: {
        en: 'All pending tax liabilities must be cleared before applying for cancellation.',
        hi: 'रद्दीकरण के लिए आवेदन करने से पहले सभी लंबित कर देनदारियों को स्पष्ट किया जाना चाहिए।'
      }
    }
  },
  {
    id: 'fssai-registration-form',
    category: 'Municipal Services',
    categoryHi: 'नगरपालिका सेवाएं',
    serviceName: 'FSSAI License',
    serviceNameHi: 'FSSAI लाइसेंस',
    formName: 'Food License Form A/B',
    formNameHi: 'फूड लाइसेंस फॉर्म A/B',
    description: 'Registration or license for food business operators.',
    descriptionHi: 'खाद्य व्यवसाय ऑपरेटरों के लिए पंजीकरण या लाइसेंस।',
    icon: CookingPot,
    guidelines: ['Photo', 'ID proof', 'Address proof', 'Food category details'],
    guidelinesHi: ['फोटो', 'आईडी प्रमाण', 'पते का प्रमाण', 'खाद्य श्रेणी विवरण'],
    searchQuery: 'FSSAI food license registration form A B online pdf',
    guide: {
      purpose: {
        en: 'To ensure food safety and quality standards are met by food businesses.',
        hi: 'खाद्य व्यवसायों द्वारा खाद्य सुरक्षा और गुणवत्ता मानकों को पूरा करना सुनिश्चित करना।'
      },
      eligibility: {
        en: 'Petty food manufacturers, retailers, distributors, and restaurants based on turnover.',
        hi: 'टर्नओवर के आधार पर छोटे खाद्य निर्माता, खुदरा विक्रेता, वितरक और रेस्तरां।'
      },
      documents: {
        en: ['Photo of Applicant', 'Identity Proof (Aadhaar/Voter ID)', 'Proof of Premises', 'List of Food Categories', 'Blue Print of Unit (for license)'],
        hi: ['आवेदक की फोटो', 'पहचान प्रमाण (आधार/वोटर आईडी)', 'परिसर का प्रमाण', 'खाद्य श्रेणियों की सूची', 'यूनिट का ब्लू प्रिंट (लाइसेंस के लिए)']
      },
      process: {
        en: '1. Apply on FoSCoS portal. 2. Select the type of business and turnover. 3. Fill the form and upload documents. 4. Pay the fee. 5. Inspection (if required) and issuance of certificate.',
        hi: '1. FoSCoS पोर्टल पर आवेदन करें। 2. व्यवसाय का प्रकार और टर्नओवर चुनें। 3. फॉर्म भरें और दस्तावेज अपलोड करें। 4. शुल्क का भुगतान करें। 5. निरीक्षण (यदि आवश्यक हो) और प्रमाण पत्र जारी।'
      },
      tips: {
        en: 'Display the FSSAI logo and license number prominently at your business premises.',
        hi: 'अपने व्यावसायिक परिसर में प्रमुखता से FSSAI लोगो और लाइसेंस नंबर प्रदर्शित करें।'
      }
    }
  },
  {
    id: 'udyam-registration-form',
    category: 'Employment Services',
    categoryHi: 'रोजगार सेवाएं',
    serviceName: 'Udyam',
    serviceNameHi: 'उद्यम',
    formName: 'MSME Registration',
    formNameHi: 'एमएसएमई पंजीकरण',
    description: 'Registration for Micro, Small, and Medium Enterprises (MSME).',
    descriptionHi: 'सूक्ष्म, लघु और मध्यम उद्यमों (एमएसएमई) के लिए पंजीकरण।',
    icon: Building,
    guidelines: ['Aadhaar card', 'PAN card', 'Bank details', 'Investment details'],
    guidelinesHi: ['आधार कार्ड', 'पैन कार्ड', 'बैंक विवरण', 'निवेश विवरण'],
    searchQuery: 'Udyam MSME registration form online free pdf',
    guide: {
      purpose: {
        en: 'To provide a unique identity to MSMEs and enable them to avail government benefits and subsidies.',
        hi: 'एमएसएमई को एक विशिष्ट पहचान प्रदान करना और उन्हें सरकारी लाभों और सब्सिडी का लाभ उठाने में सक्षम बनाना।'
      },
      eligibility: {
        en: 'Any person who intends to establish a micro, small, or medium enterprise.',
        hi: 'कोई भी व्यक्ति जो सूक्ष्म, लघु या मध्यम उद्यम स्थापित करने का इरादा रखता है।'
      },
      documents: {
        en: ['Aadhaar Card of Owner/Partner', 'PAN Card', 'GSTIN (if applicable)', 'Bank Account Details', 'Investment and Turnover details'],
        hi: ['मालिक/साझेदार का आधार कार्ड', 'पैन कार्ड', 'जीएसटीआईएन (यदि लागू हो)', 'बैंक खाता विवरण', 'निवेश और टर्नओवर विवरण']
      },
      process: {
        en: '1. Visit Udyam Registration portal. 2. Enter Aadhaar and validate with OTP. 3. Fill personal and business details. 4. Enter investment and turnover data. 5. Submit and get Udyam Certificate.',
        hi: '1. उद्यम पंजीकरण पोर्टल पर जाएं। 2. आधार दर्ज करें और ओटीपी के साथ मान्य करें। 3. व्यक्तिगत और व्यावसायिक विवरण भरें। 4. निवेश और टर्नओवर डेटा दर्ज करें। 5. जमा करें और उद्यम प्रमाण पत्र प्राप्त करें।'
      },
      tips: {
        en: 'Udyam registration is free of cost. Beware of fraudulent websites charging fees.',
        hi: 'उद्यम पंजीकरण निःशुल्क है। शुल्क वसूलने वाली धोखाधड़ी वाली वेबसाइटों से सावधान रहें।'
      }
    }
  },
  {
    id: 'soil-health-card-form',
    category: 'Government Scheme Forms',
    categoryHi: 'सरकारी योजना फॉर्म',
    serviceName: 'Soil Health',
    serviceNameHi: 'मृदा स्वास्थ्य',
    formName: 'Soil Sample Form',
    formNameHi: 'मिट्टी का नमूना फॉर्म',
    description: 'Testing soil quality and getting recommendations for fertilizers.',
    descriptionHi: 'मिट्टी की गुणवत्ता का परीक्षण और उर्वरकों के लिए सिफारिशें प्राप्त करना।',
    icon: Sprout,
    guidelines: ['Soil sample', 'Land details', 'Aadhaar card'],
    guidelinesHi: ['मिट्टी का नमूना', 'भूमि विवरण', 'आधार कार्ड'],
    searchQuery: 'Soil Health Card SHC application form sample collection pdf',
    guide: {
      purpose: {
        en: 'To inform farmers about the nutrient status of their soil and recommend appropriate dosage of fertilizers.',
        hi: 'किसानों को उनकी मिट्टी की पोषक स्थिति के बारे में सूचित करना और उर्वरकों की उचित खुराक की सिफारिश करना।'
      },
      eligibility: {
        en: 'All farmers owning agricultural land in India.',
        hi: 'भारत में कृषि भूमि के मालिक सभी किसान।'
      },
      documents: {
        en: ['Aadhaar Card', 'Land Ownership Proof (Jamabandi)', 'Soil Sample from the field'],
        hi: ['आधार कार्ड', 'भूमि स्वामित्व प्रमाण (जमाबंदी)', 'खेत से मिट्टी का नमूना']
      },
      process: {
        en: '1. Collect soil sample as per guidelines. 2. Submit sample at local soil testing lab or via Agriculture Supervisor. 3. Lab tests the sample for 12 parameters. 4. Soil Health Card issued with recommendations.',
        hi: '1. दिशानिर्देशों के अनुसार मिट्टी का नमूना एकत्र करें। 2. स्थानीय मृदा परीक्षण प्रयोगशाला में या कृषि पर्यवेक्षक के माध्यम से नमूना जमा करें। 3. लैब 12 मापदंडों के लिए नमूने का परीक्षण करती है। 4. सिफारिशों के साथ मृदा स्वास्थ्य कार्ड जारी।'
      },
      tips: {
        en: 'Collect samples from multiple spots in the field and mix them for a representative sample.',
        hi: 'खेत में कई स्थानों से नमूने एकत्र करें और एक प्रतिनिधि नमूने के लिए उन्हें मिलाएं।'
      }
    }
  },
  {
    id: 'irgy-urban-registration-form',
    category: 'Employment Services',
    categoryHi: 'रोजगार सेवाएं',
    serviceName: 'IRGY-Urban',
    serviceNameHi: 'आईआरजीवाई-शहरी',
    formName: 'Urban Job Card',
    formNameHi: 'शहरी जॉब कार्ड',
    description: 'Employment guarantee scheme for urban areas in Rajasthan.',
    descriptionHi: 'राजस्थान में शहरी क्षेत्रों के लिए रोजगार गारंटी योजना।',
    icon: HardHat,
    guidelines: ['Jan Aadhaar card', 'Resident of urban area', 'Age 18-60'],
    guidelinesHi: ['जन आधार कार्ड', 'शहरी क्षेत्र का निवासी', 'आयु 18-60'],
    searchQuery: 'Indira Gandhi Urban Employment Guarantee Scheme IRGY job card form pdf',
    guide: {
      purpose: {
        en: 'To provide 100 days of guaranteed wage employment to every household in urban areas of Rajasthan.',
        hi: 'राजस्थान के शहरी क्षेत्रों में प्रत्येक परिवार को 100 दिनों का गारंटीकृत मजदूरी रोजगार प्रदान करना।'
      },
      eligibility: {
        en: 'Residents of urban local bodies in Rajasthan aged between 18 and 60 years.',
        hi: '18 से 60 वर्ष की आयु के बीच राजस्थान के शहरी स्थानीय निकायों के निवासी।'
      },
      documents: {
        en: ['Jan Aadhaar Card (Mandatory)', 'Aadhaar Card', 'Passport size Photo', 'Bank Passbook'],
        hi: ['जन आधार कार्ड (अनिवार्य)', 'आधार कार्ड', 'पासपोर्ट साइज फोटो', 'बैंक पासबुक']
      },
      process: {
        en: '1. Apply online via IRGY portal or at E-Mitra. 2. Register using Jan Aadhaar. 3. Job card issued by the local urban body. 4. Demand work through the portal or office.',
        hi: '1. IRGY पोर्टल के माध्यम से या ई-मित्र पर ऑनलाइन आवेदन करें। 2. जन आधार का उपयोग करके पंजीकरण करें। 3. स्थानीय शहरी निकाय द्वारा जॉब कार्ड जारी। 4. पोर्टल या कार्यालय के माध्यम से काम की मांग करें।'
      },
      tips: {
        en: 'Ensure your bank account is linked with Jan Aadhaar for direct payment of wages.',
        hi: 'मजदूरी के सीधे भुगतान के लिए सुनिश्चित करें कि आपका बैंक खाता जन आधार से लिंक है।'
      }
    }
  },
  {
    id: 'pm-sym-pension-form',
    category: 'Pension Forms',
    categoryHi: 'पेंशन फॉर्म',
    serviceName: 'PM-SYM',
    serviceNameHi: 'पीएम-एसवाईएम',
    formName: 'Shram Yogi Maandhan',
    formNameHi: 'श्रम योगी मानधन',
    description: 'Pension scheme for unorganized workers like street vendors, rickshaw pullers.',
    descriptionHi: 'रेहड़ी-पटरी वालों, रिक्शा चालकों जैसे असंगठित श्रमिकों के लिए पेंशन योजना।',
    icon: Landmark,
    guidelines: ['Aadhaar card', 'Bank account', 'Age 18-40', 'Income < 15k'],
    guidelinesHi: ['आधार कार्ड', 'बैंक खाता', 'आयु 18-40', 'आय < 15k'],
    searchQuery: 'Pradhan Mantri Shram Yogi Maan-dhan PM-SYM registration form pdf',
    guide: {
      purpose: {
        en: 'To provide a monthly pension of Rs. 3,000 to unorganized workers after the age of 60.',
        hi: '60 वर्ष की आयु के बाद असंगठित श्रमिकों को 3,000 रुपये की मासिक पेंशन प्रदान करना।'
      },
      eligibility: {
        en: 'Unorganized workers aged 18-40 years with monthly income less than Rs. 15,000.',
        hi: '18-40 वर्ष की आयु के असंगठित श्रमिक जिनकी मासिक आय 15,000 रुपये से कम है।'
      },
      documents: {
        en: ['Aadhaar Card', 'Savings Bank Account / Jan Dhan Account with IFSC', 'Mobile Number'],
        hi: ['आधार कार्ड', 'आईएफएससी के साथ बचत बैंक खाता / जन धन खाता', 'मोबाइल नंबर']
      },
      process: {
        en: '1. Visit nearest Common Service Center (CSC). 2. Provide Aadhaar and bank details. 3. Pay initial contribution in cash. 4. Auto-debit set up for future contributions. 5. Shram Yogi Card issued.',
        hi: '1. निकटतम कॉमन सर्विस सेंटर (CSC) पर जाएं। 2. आधार और बैंक विवरण प्रदान करें। 3. नकद में प्रारंभिक योगदान दें। 4. भविष्य के योगदान के लिए ऑटो-डेबिट सेट अप। 5. श्रम योगी कार्ड जारी।'
      },
      tips: {
        en: 'The government makes an equal matching contribution to the worker\'s pension account.',
        hi: 'सरकार कार्यकर्ता के पेंशन खाते में समान मिलान योगदान देती है।'
      }
    }
  },
  {
    id: 'dsc-application-form',
    category: 'Identity Forms',
    categoryHi: 'पहचान फॉर्म',
    serviceName: 'Digital Signature',
    serviceNameHi: 'डिजिटल हस्ताक्षर',
    formName: 'DSC Class 3 Form',
    formNameHi: 'डीएससी क्लास 3 फॉर्म',
    description: 'Secure digital key for signing electronic documents.',
    descriptionHi: 'इलेक्ट्रॉनिक दस्तावेजों पर हस्ताक्षर करने के लिए सुरक्षित डिजिटल कुंजी।',
    icon: Fingerprint,
    guidelines: ['Aadhaar card', 'PAN card', 'Photo', 'Video verification'],
    guidelinesHi: ['आधार कार्ड', 'पैन कार्ड', 'फोटो', 'वीडियो सत्यापन'],
    searchQuery: 'DSC Class 3 application form digital signature certificate pdf',
    guide: {
      purpose: {
        en: 'To provide a secure way to sign digital documents for GST, Income Tax, and Tenders.',
        hi: 'जीएसटी, आयकर और निविदाओं के लिए डिजिटल दस्तावेजों पर हस्ताक्षर करने का एक सुरक्षित तरीका प्रदान करना।'
      },
      eligibility: {
        en: 'Individuals, organizations, and foreign nationals needing to sign documents electronically.',
        hi: 'दस्तावेजों पर इलेक्ट्रॉनिक रूप से हस्ताक्षर करने की आवश्यकता वाले व्यक्ति, संगठन और विदेशी नागरिक।'
      },
      documents: {
        en: ['Aadhaar Card', 'PAN Card', 'Passport size Photo', 'Mobile Number', 'Email ID'],
        hi: ['आधार कार्ड', 'पैन कार्ड', 'पासपोर्ट साइज फोटो', 'मोबाइल नंबर', 'ईमेल आईडी']
      },
      process: {
        en: '1. Apply via a Certifying Authority (CA) like eMudhra or Capricorn. 2. Fill the online form and upload documents. 3. Complete video and mobile verification. 4. DSC is downloaded into a USB token.',
        hi: '1. eMudhra या Capricorn जैसे प्रमाणित प्राधिकरण (CA) के माध्यम से आवेदन करें। 2. ऑनलाइन फॉर्म भरें और दस्तावेज अपलोड करें। 3. वीडियो और मोबाइल सत्यापन पूरा करें। 4. डीएससी को यूएसबी टोकन में डाउनलोड किया जाता है।'
      },
      tips: {
        en: 'Class 3 DSC is the most secure and is now mandatory for most government portals.',
        hi: 'क्लास 3 डीएससी सबसे सुरक्षित है और अब अधिकांश सरकारी पोर्टलों के लिए अनिवार्य है।'
      }
    }
  },
  {
    id: 'iec-registration-form',
    category: 'Banking and Financial Forms',
    categoryHi: 'बैंकिंग और वित्तीय फॉर्म',
    serviceName: 'Import Export Code',
    serviceNameHi: 'आयात निर्यात कोड',
    formName: 'IEC Application ANF-2A',
    formNameHi: 'आईईसी आवेदन ANF-2A',
    description: 'Mandatory code for businesses importing or exporting goods from India.',
    descriptionHi: 'भारत से माल आयात या निर्यात करने वाले व्यवसायों के लिए अनिवार्य कोड।',
    icon: Globe,
    guidelines: ['PAN card', 'Bank details', 'Business address proof'],
    guidelinesHi: ['पैन कार्ड', 'बैंक विवरण', 'व्यवसाय के पते का प्रमाण'],
    searchQuery: 'IEC import export code application form ANF-2A online pdf',
    guide: {
      purpose: {
        en: 'To allow businesses to engage in international trade (import and export) from India.',
        hi: 'व्यवसायों को भारत से अंतर्राष्ट्रीय व्यापार (आयात और निर्यात) में संलग्न होने की अनुमति देना।'
      },
      eligibility: {
        en: 'Any individual or entity intending to import or export goods/services.',
        hi: 'माल/सेवाओं के आयात या निर्यात का इरादा रखने वाला कोई भी व्यक्ति या संस्था।'
      },
      documents: {
        en: ['PAN Card of Entity', 'Cancelled Cheque from Current Account', 'Address Proof of Business', 'Digital Signature (optional for individuals)'],
        hi: ['संस्था का पैन कार्ड', 'चालू खाते से कैंसिल चेक', 'व्यवसाय के पते का प्रमाण', 'डिजिटल हस्ताक्षर (व्यक्तियों के लिए वैकल्पिक)']
      },
      process: {
        en: '1. Apply on DGFT portal. 2. Login using PAN and OTP. 3. Fill the e-IEC application. 4. Upload documents and pay the fee. 5. IEC is generated automatically in most cases.',
        hi: '1. DGFT पोर्टल पर आवेदन करें। 2. पैन और ओटीपी का उपयोग करके लॉगिन करें। 3. ई-आईईसी आवेदन भरें। 4. दस्तावेज अपलोड करें और शुल्क का भुगतान करें। 5. आईईसी ज्यादातर मामलों में स्वचालित रूप से उत्पन्न होता है।'
      },
      tips: {
        en: 'IEC is valid for a lifetime but must be updated annually on the DGFT portal.',
        hi: 'आईईसी जीवन भर के लिए मान्य है लेकिन इसे डीजीएफटी पोर्टल पर सालाना अपडेट किया जाना चाहिए।'
      }
    }
  },
  {
    id: 'drug-license-form',
    category: 'Municipal Services',
    categoryHi: 'नगरपालिका सेवाएं',
    serviceName: 'Drug License',
    serviceNameHi: 'ड्रग लाइसेंस',
    formName: 'Pharmacy License Form 19',
    formNameHi: 'फार्मेसी लाइसेंस फॉर्म 19',
    description: 'License for retail or wholesale of drugs and medicines.',
    descriptionHi: 'दवाओं और औषधियों की खुदरा या थोक बिक्री के लिए लाइसेंस।',
    icon: Stethoscope,
    guidelines: ['Pharmacist degree', 'Shop plan', 'Storage details', 'ID proof'],
    guidelinesHi: ['फार्मासिस्ट की डिग्री', 'दुकान का नक्शा', 'भंडारण विवरण', 'आईडी प्रमाण'],
    searchQuery: 'Drug license application form 19 20 21 Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To regulate the sale and distribution of medicines to ensure public health safety.',
        hi: 'सार्वजनिक स्वास्थ्य सुरक्षा सुनिश्चित करने के लिए दवाओं की बिक्री और वितरण को विनियमित करना।'
      },
      eligibility: {
        en: 'Individuals with a pharmacy degree (B.Pharm/D.Pharm) or experienced persons in the field.',
        hi: 'फार्मेसी डिग्री (बी.फार्मा/डी.फार्मा) वाले व्यक्ति या क्षेत्र में अनुभवी व्यक्ति।'
      },
      documents: {
        en: ['Pharmacist Registration Certificate', 'Affidavit of Pharmacist', 'Blue Print of Premises', 'Ownership/Rent Proof of Shop', 'Refrigerator Invoice'],
        hi: ['फार्मासिस्ट पंजीकरण प्रमाण पत्र', 'फार्मासिस्ट का हलफनामा', 'परिसर का ब्लू प्रिंट', 'दुकान का स्वामित्व/किराया प्रमाण', 'रेफ्रिजरेटर चालान']
      },
      process: {
        en: '1. Apply online via the State Drug Control portal. 2. Upload documents and site plan. 3. Inspection by Drug Inspector. 4. Approval and issuance of license (Form 20/21).',
        hi: '1. राज्य औषधि नियंत्रण पोर्टल के माध्यम से ऑनलाइन आवेदन करें। 2. दस्तावेज और साइट योजना अपलोड करें। 3. औषधि निरीक्षक द्वारा निरीक्षण। 4. लाइसेंस (फॉर्म 20/21) का अनुमोदन और जारी करना।'
      },
      tips: {
        en: 'Ensure the shop has a minimum area of 10-15 square meters as per regulations.',
        hi: 'सुनिश्चित करें कि नियमों के अनुसार दुकान का न्यूनतम क्षेत्रफल 10-15 वर्ग मीटर हो।'
      }
    }
  },
  {
    id: 'fire-safety-noc-form',
    category: 'Municipal Services',
    categoryHi: 'नगरपालिका सेवाएं',
    serviceName: 'Fire NOC',
    serviceNameHi: 'फायर एनओसी',
    formName: 'Fire Safety Certificate',
    formNameHi: 'अग्नि सुरक्षा प्रमाण पत्र',
    description: 'No Objection Certificate for fire safety in buildings.',
    descriptionHi: 'भवनों में अग्नि सुरक्षा के लिए अनापत्ति प्रमाण पत्र।',
    icon: Flame,
    guidelines: ['Building plan', 'Fire equipment details', 'ID proof'],
    guidelinesHi: ['भवन का नक्शा', 'अग्नि उपकरण विवरण', 'आईडी प्रमाण'],
    searchQuery: 'Fire safety NOC application form Rajasthan Municipal pdf',
    guide: {
      purpose: {
        en: 'To certify that a building has adequate fire safety measures and equipment installed.',
        hi: 'यह प्रमाणित करना कि एक इमारत में पर्याप्त अग्नि सुरक्षा उपाय और उपकरण स्थापित हैं।'
      },
      eligibility: {
        en: 'Owners of high-rise buildings, commercial complexes, schools, and hospitals.',
        hi: 'बहुमंजिला इमारतों, वाणिज्यिक परिसरों, स्कूलों और अस्पतालों के मालिक।'
      },
      documents: {
        en: ['Approved Building Plan', 'Fire Safety Audit Report', 'List of Fire Fighting Equipment', 'Photographs of Installed Systems'],
        hi: ['अनुमोदित भवन योजना', 'अग्नि सुरक्षा ऑडिट रिपोर्ट', 'अग्नि शमन उपकरणों की सूची', 'स्थापित प्रणालियों की तस्वीरें']
      },
      process: {
        en: '1. Apply to the local Fire Department or via Single Window System. 2. Submit building plans and fire safety details. 3. Inspection by Fire Officer. 4. Issuance of Provisional/Final NOC.',
        hi: '1. स्थानीय अग्निशमन विभाग को या सिंगल विंडो सिस्टम के माध्यम से आवेदन करें। 2. भवन योजना और अग्नि सुरक्षा विवरण जमा करें। 3. अग्नि अधिकारी द्वारा निरीक्षण। 4. अनंतिम/अंतिम एनओसी जारी।'
      },
      tips: {
        en: 'Regularly maintain fire extinguishers and conduct mock drills to keep the NOC valid.',
        hi: 'एनओसी को मान्य रखने के लिए नियमित रूप से अग्निशामकों का रखरखाव करें और मॉक ड्रिल आयोजित करें।'
      }
    }
  },
  {
    id: 'building-plan-approval-form',
    category: 'Municipal Services',
    categoryHi: 'नगरपालिका सेवाएं',
    serviceName: 'Building Plan',
    serviceNameHi: 'भवन योजना',
    formName: 'Construction Permit',
    formNameHi: 'निर्माण अनुमति',
    description: 'Approval for building construction from local authorities.',
    descriptionHi: 'स्थानीय अधिकारियों से भवन निर्माण के लिए अनुमोदन।',
    icon: Layout,
    guidelines: ['Land registry', 'Architectural plan', 'ID proof'],
    guidelinesHi: ['भूमि रजिस्ट्री', 'वास्तुकला योजना', 'आईडी प्रमाण'],
    searchQuery: 'Building plan approval application form BPAS Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To ensure that the proposed construction adheres to local building bylaws and safety standards.',
        hi: 'यह सुनिश्चित करना कि प्रस्तावित निर्माण स्थानीय भवन उपनियमों और सुरक्षा मानकों का पालन करता है।'
      },
      eligibility: {
        en: 'Property owners intending to construct or modify a building.',
        hi: 'भवन निर्माण या संशोधन का इरादा रखने वाले संपत्ति के मालिक।'
      },
      documents: {
        en: ['Land Ownership Documents (Registry/Patta)', 'Architectural Drawings (Site Plan, Floor Plan)', 'Structural Stability Certificate', 'NOC from relevant departments'],
        hi: ['भूमि स्वामित्व दस्तावेज (रजिस्ट्री/पट्टा)', 'वास्तुकला चित्र (साइट योजना, फ्लोर प्लान)', 'संरचनात्मक स्थिरता प्रमाण पत्र', 'संबंधित विभागों से एनओसी']
      },
      process: {
        en: '1. Submit application via BPAS portal or local municipality. 2. Upload drawings signed by a registered architect. 3. Scrutiny of plans and site visit. 4. Payment of development charges. 5. Approval granted.',
        hi: '1. बीपीएएस पोर्टल या स्थानीय नगरपालिका के माध्यम से आवेदन जमा करें। 2. पंजीकृत वास्तुकार द्वारा हस्ताक्षरित चित्र अपलोड करें। 3. योजनाओं की जांच और साइट का दौरा। 4. विकास शुल्क का भुगतान। 5. अनुमोदन प्रदान किया गया।'
      },
      tips: {
        en: 'Consult a registered architect to ensure your plans comply with setbacks and FAR rules.',
        hi: 'यह सुनिश्चित करने के लिए कि आपकी योजनाएं सेटबैक और एफएआर नियमों का पालन करती हैं, एक पंजीकृत वास्तुकार से परामर्श करें।'
      }
    }
  },
  {
    id: 'encumbrance-certificate-form',
    category: 'Land and Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Encumbrance Cert',
    serviceNameHi: 'भार प्रमाण पत्र',
    formName: 'EC Application Form',
    formNameHi: 'ईसी आवेदन फॉर्म',
    description: 'Certificate showing property is free from legal liabilities or loans.',
    descriptionHi: 'प्रमाण पत्र जो दर्शाता है कि संपत्ति कानूनी देनदारियों या ऋणों से मुक्त है।',
    icon: FileSearch,
    guidelines: ['Property details', 'Period of search', 'ID proof'],
    guidelinesHi: ['संपत्ति विवरण', 'खोज की अवधि', 'आईडी प्रमाण'],
    searchQuery: 'Encumbrance certificate EC application form property search pdf',
    guide: {
      purpose: {
        en: 'To verify if a property has any registered encumbrances like mortgages or legal disputes.',
        hi: 'यह सत्यापित करना कि क्या किसी संपत्ति पर बंधक या कानूनी विवाद जैसे कोई पंजीकृत भार है।'
      },
      eligibility: {
        en: 'Anyone interested in buying or verifying a property.',
        hi: 'संपत्ति खरीदने या सत्यापित करने में रुचि रखने वाला कोई भी व्यक्ति।'
      },
      documents: {
        en: ['Property Address and Survey Number', 'Copy of Sale Deed', 'Identity Proof of Applicant', 'Period for which EC is required'],
        hi: ['संपत्ति का पता और सर्वेक्षण संख्या', 'बिक्री विलेख की प्रति', 'आवेदक का पहचान प्रमाण', 'वह अवधि जिसके लिए ईसी की आवश्यकता है']
      },
      process: {
        en: '1. Apply at the Sub-Registrar\'s office or online portal (IGRS). 2. Provide property details and search period. 3. Pay the search fee. 4. Verification of records by the department. 5. EC issued.',
        hi: '1. उप-पंजीयक कार्यालय या ऑनलाइन पोर्टल (IGRS) पर आवेदन करें। 2. संपत्ति विवरण और खोज अवधि प्रदान करें। 3. खोज शुल्क का भुगतान करें। 4. विभाग द्वारा रिकॉर्ड का सत्यापन। 5. ईसी जारी।'
      },
      tips: {
        en: 'It is advisable to get an EC for at least the last 15-30 years before buying property.',
        hi: 'संपत्ति खरीदने से पहले कम से कम पिछले 15-30 वर्षों के लिए ईसी प्राप्त करने की सलाह दी जाती है।'
      }
    }
  },
  {
    id: 'possession-certificate-form',
    category: 'Land and Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Possession Cert',
    serviceNameHi: 'कब्जा प्रमाण पत्र',
    formName: 'Land Possession Form',
    formNameHi: 'भूमि कब्जा फॉर्म',
    description: 'Certificate confirming physical possession of land/property.',
    descriptionHi: 'भूमि/संपत्ति के भौतिक कब्जे की पुष्टि करने वाला प्रमाण पत्र।',
    icon: FileCheck,
    guidelines: ['Land details', 'Ownership proof', 'Site inspection'],
    guidelinesHi: ['भूमि विवरण', 'स्वामित्व प्रमाण', 'साइट निरीक्षण'],
    searchQuery: 'Land possession certificate application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To legally certify that a person is in physical possession of a specific piece of land or property.',
        hi: 'कानूनी रूप से यह प्रमाणित करना कि कोई व्यक्ति भूमि या संपत्ति के एक विशिष्ट टुकड़े के भौतिक कब्जे में है।'
      },
      eligibility: {
        en: 'Landowners or allottees who have taken physical possession of the property.',
        hi: 'भूमि मालिक या आवंटी जिन्होंने संपत्ति का भौतिक कब्जा ले लिया है।'
      },
      documents: {
        en: ['Allotment Letter / Sale Deed', 'Aadhaar Card', 'Latest Land Tax Receipt', 'Photographs of the Property'],
        hi: ['आवंटन पत्र / बिक्री विलेख', 'आधार कार्ड', 'नवीनतम भूमि कर रसीद', 'संपत्ति की तस्वीरें']
      },
      process: {
        en: '1. Apply to the local Tehsildar or Revenue Officer. 2. Submit ownership documents and property details. 3. Field visit and verification by Patwari. 4. Issuance of Possession Certificate.',
        hi: '1. स्थानीय तहसीलदार या राजस्व अधिकारी को आवेदन करें। 2. स्वामित्व दस्तावेज और संपत्ति विवरण जमा करें। 3. पटवारी द्वारा फील्ड विजिट और सत्यापन। 4. कब्जा प्रमाण पत्र जारी।'
      },
      tips: {
        en: 'Possession certificate is often required for obtaining home loans and electricity connections.',
        hi: 'होम लोन और बिजली कनेक्शन प्राप्त करने के लिए अक्सर कब्जा प्रमाण पत्र की आवश्यकता होती है।'
      }
    }
  },
  {
    id: 'patta-application-form',
    category: 'Land and Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Patta Application',
    serviceNameHi: 'पट्टा आवेदन',
    formName: 'Land Allotment Form',
    formNameHi: 'भूमि आवंटन फॉर्म',
    description: 'Application for allotment of land or getting a Patta (title deed).',
    descriptionHi: 'भूमि आवंटन या पट्टा (शीर्षक विलेख) प्राप्त करने के लिए आवेदन।',
    icon: MapPin,
    guidelines: ['Possession proof', 'ID proof', 'Neighbor\'s NOC', 'Affidavit'],
    guidelinesHi: ['कब्जे का प्रमाण', 'आईडी प्रमाण', 'पड़ोसी की एनओसी', 'हलफनामा'],
    searchQuery: 'Rajasthan urban rural land patta application form pdf',
    guide: {
      purpose: {
        en: 'To obtain a legal title deed (Patta) for land occupied or allotted by the government/local body.',
        hi: 'सरकार/स्थानीय निकाय द्वारा कब्जा की गई या आवंटित भूमि के लिए कानूनी शीर्षक विलेख (पट्टा) प्राप्त करना।'
      },
      eligibility: {
        en: 'Residents occupying land for a long period or those allotted land under government schemes.',
        hi: 'लंबे समय से भूमि पर कब्जा करने वाले निवासी या सरकारी योजनाओं के तहत आवंटित भूमि।'
      },
      documents: {
        en: ['Proof of Possession (Old bills/receipts)', 'Aadhaar Card', 'Jan Aadhaar Card', 'Affidavit of No Dispute', 'Site Map'],
        hi: ['कब्जे का प्रमाण (पुराने बिल/रसीदें)', 'आधार कार्ड', 'जन आधार कार्ड', 'कोई विवाद न होने का हलफनामा', 'साइट मैप']
      },
      process: {
        en: '1. Apply during "Prashasan Shehar/Gaon ke Sang" campaigns or at the local body office. 2. Submit the application with possession proof. 3. Public notice and invitation for objections. 4. Site inspection and measurement. 5. Payment of lease money and issuance of Patta.',
        hi: '1. "प्रशासन शहरों/गांवों के संग" अभियानों के दौरान या स्थानीय निकाय कार्यालय में आवेदन करें। 2. कब्जे के प्रमाण के साथ आवेदन जमा करें। 3. सार्वजनिक सूचना और आपत्तियों के लिए निमंत्रण। 4. साइट निरीक्षण और माप। 5. लीज मनी का भुगतान और पट्टा जारी।'
      },
      tips: {
        en: 'Ensure there are no legal disputes or encroachments on the land before applying for a Patta.',
        hi: 'पट्टा के लिए आवेदन करने से पहले सुनिश्चित करें कि भूमि पर कोई कानूनी विवाद या अतिक्रमण नहीं है।'
      }
    }
  },
  {
    id: 'dl-renewal-form',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Driving License',
    serviceNameHi: 'ड्राइविंग लाइसेंस',
    formName: 'DL Renewal Form (Form 9)',
    formNameHi: 'डीएल नवीनीकरण फॉर्म (फॉर्म 9)',
    description: 'Renewal of driving license before or after expiry.',
    descriptionHi: 'समाप्ति से पहले या बाद में ड्राइविंग लाइसेंस का नवीनीकरण।',
    icon: Repeat,
    guidelines: ['Expired DL', 'Medical certificate (Form 1A)', 'ID proof'],
    guidelinesHi: ['समाप्त डीएल', 'मेडिकल प्रमाण पत्र (फॉर्म 1ए)', 'आईडी प्रमाण'],
    searchQuery: 'Driving license renewal application form 9 Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To renew a driving license that has expired or is about to expire.',
        hi: 'उस ड्राइविंग लाइसेंस को नवीनीकृत करना जो समाप्त हो गया है या समाप्त होने वाला है।'
      },
      eligibility: {
        en: 'Holders of a valid driving license nearing expiry or expired within the last year.',
        hi: 'वैध ड्राइविंग लाइसेंस के धारक जो समाप्ति के करीब हैं या पिछले वर्ष के भीतर समाप्त हो गए हैं।'
      },
      documents: {
        en: ['Original Driving License', 'Medical Certificate in Form 1A (if age > 40)', 'Address Proof', 'Passport Size Photographs'],
        hi: ['मूल ड्राइविंग लाइसेंस', 'फॉर्म 1ए में मेडिकल प्रमाण पत्र (यदि आयु > 40)', 'पते का प्रमाण', 'पासपोर्ट आकार के फोटो']
      },
      process: {
        en: '1. Apply online on Sarathi Parivahan portal. 2. Upload documents and Form 1A. 3. Pay renewal fee. 4. Visit RTO if required for biometrics. 5. Renewed DL sent by post.',
        hi: '1. सारथी परिवहन पोर्टल पर ऑनलाइन आवेदन करें। 2. दस्तावेज और फॉर्म 1ए अपलोड करें। 3. नवीनीकरण शुल्क का भुगतान करें। 4. बायोमेट्रिक्स के लिए आवश्यक होने पर आरटीओ पर जाएं। 5. नवीनीकृत डीएल डाक द्वारा भेजा गया।'
      },
      tips: {
        en: 'Renew your license within 30 days of expiry to avoid additional penalties.',
        hi: 'अतिरिक्त जुर्माने से बचने के लिए समाप्ति के 30 दिनों के भीतर अपने लाइसेंस का नवीनीकरण करें।'
      }
    }
  },
  {
    id: 'duplicate-dl-form',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Driving License',
    serviceNameHi: 'ड्राइविंग लाइसेंस',
    formName: 'Duplicate DL Form (Form LLD)',
    formNameHi: 'डुप्लिकेट डीएल फॉर्म (फॉर्म एलएलडी)',
    description: 'Apply for a duplicate license if lost, stolen or damaged.',
    descriptionHi: 'खो जाने, चोरी हो जाने या क्षतिग्रस्त होने पर डुप्लिकेट लाइसेंस के लिए आवेदन करें।',
    icon: FileSearch,
    guidelines: ['FIR copy (if lost)', 'Damaged DL (if available)', 'ID proof'],
    guidelinesHi: ['प्राथमिकी की प्रति (यदि खो गया है)', 'क्षतिग्रस्त डीएल (यदि उपलब्ध हो)', 'आईडी प्रमाण'],
    searchQuery: 'Duplicate driving license application form LLD Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To obtain a duplicate driving license in case the original is lost, stolen, or mutilated.',
        hi: 'मूल लाइसेंस खो जाने, चोरी हो जाने या खराब हो जाने की स्थिति में डुप्लिकेट ड्राइविंग लाइसेंस प्राप्त करना।'
      },
      eligibility: {
        en: 'Any person whose original driving license is lost, stolen, or damaged.',
        hi: 'कोई भी व्यक्ति जिसका मूल ड्राइविंग लाइसेंस खो गया है, चोरी हो गया है या क्षतिग्रस्त हो गया है।'
      },
      documents: {
        en: ['Application in Form LLD', 'Copy of FIR/NCR (if lost)', 'Damaged DL (if mutilated)', 'Aadhaar Card', 'Passport Size Photos'],
        hi: ['फॉर्म एलएलडी में आवेदन', 'एफआईआर/एनसीआर की प्रति (यदि खो गया है)', 'क्षतिग्रस्त डीएल (यदि खराब हो गया है)', 'आधार कार्ड', 'पासपोर्ट आकार के फोटो']
      },
      process: {
        en: '1. File an FIR/NCR for lost DL. 2. Apply online on Parivahan portal. 3. Upload documents and pay fee. 4. Visit RTO for verification. 5. Duplicate DL issued.',
        hi: '1. खोए हुए डीएल के लिए एफआईआर/एनसीआर दर्ज करें। 2. परिवहन पोर्टल पर ऑनलाइन आवेदन करें। 3. दस्तावेज अपलोड करें और शुल्क का भुगतान करें। 4. सत्यापन के लिए आरटीओ पर जाएं। 5. डुप्लिकेट डीएल जारी।'
      },
      tips: {
        en: 'Keep a digital copy of your DL on mParivahan or DigiLocker to avoid inconvenience if the physical card is lost.',
        hi: 'भौतिक कार्ड खो जाने पर असुविधा से बचने के लिए अपने डीएल की एक डिजिटल प्रति एमपरिवहन या डिजिलॉकर पर रखें।'
      }
    }
  },
  {
    id: 'dl-address-change-form',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Driving License',
    serviceNameHi: 'ड्राइविंग लाइसेंस',
    formName: 'Change of Address in DL',
    formNameHi: 'डीएल में पता परिवर्तन',
    description: 'Update your residential address in your driving license.',
    descriptionHi: 'अपने ड्राइविंग लाइसेंस में अपना आवासीय पता अपडेट करें।',
    icon: MapPin,
    guidelines: ['New address proof', 'Original DL', 'ID proof'],
    guidelinesHi: ['नया पता प्रमाण', 'मूल डीएल', 'आईडी प्रमाण'],
    searchQuery: 'Change of address in driving license application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To update the residential address in the driving license records.',
        hi: 'ड्राइविंग लाइसेंस रिकॉर्ड में आवासीय पता अपडेट करना।'
      },
      eligibility: {
        en: 'Holders of a valid driving license who have moved to a new address.',
        hi: 'वैध ड्राइविंग लाइसेंस के धारक जो नए पते पर चले गए हैं।'
      },
      documents: {
        en: ['Original Driving License', 'New Address Proof (Aadhaar/Voter ID/Electricity Bill)', 'Passport Size Photographs'],
        hi: ['मूल ड्राइविंग लाइसेंस', 'नया पता प्रमाण (आधार/वोटर आईडी/बिजली बिल)', 'पासपोर्ट आकार के फोटो']
      },
      process: {
        en: '1. Apply online on Sarathi Parivahan portal. 2. Select "Change of Address" service. 3. Upload new address proof. 4. Pay the required fee. 5. Updated DL sent to new address.',
        hi: '1. सारथी परिवहन पोर्टल पर ऑनलाइन आवेदन करें। 2. "पता परिवर्तन" सेवा चुनें। 3. नया पता प्रमाण अपलोड करें। 4. आवश्यक शुल्क का भुगतान करें। 5. अपडेटेड डीएल नए पते पर भेजा गया।'
      },
      tips: {
        en: 'Ensure your Aadhaar address is updated first, as it is the most accepted address proof.',
        hi: 'सुनिश्चित करें कि आपका आधार पता पहले अपडेट किया गया है, क्योंकि यह सबसे अधिक स्वीकृत पता प्रमाण है।'
      }
    }
  },
  {
    id: 'rc-address-change-form',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Vehicle Registration',
    serviceNameHi: 'वाहन पंजीकरण',
    formName: 'Change of Address in RC (Form 33)',
    formNameHi: 'आरसी में पता परिवर्तन (फॉर्म 33)',
    description: 'Update address in vehicle registration certificate.',
    descriptionHi: 'वाहन पंजीकरण प्रमाण पत्र में पता अपडेट करें।',
    icon: MapPin,
    guidelines: ['New address proof', 'Original RC', 'Insurance & PUC'],
    guidelinesHi: ['नया पता प्रमाण', 'मूल आरसी', 'बीमा और पीयूसी'],
    searchQuery: 'Change of address in vehicle RC application form 33 Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To record the change of address of the vehicle owner in the registration certificate.',
        hi: 'पंजीकरण प्रमाण पत्र में वाहन मालिक के पते के परिवर्तन को दर्ज करना।'
      },
      eligibility: {
        en: 'Vehicle owners who have changed their place of residence.',
        hi: 'वाहन मालिक जिन्होंने अपना निवास स्थान बदल लिया है।'
      },
      documents: {
        en: ['Application in Form 33', 'Original Registration Certificate (RC)', 'New Address Proof', 'Valid Insurance Certificate', 'Pollution Under Control (PUC) Certificate'],
        hi: ['फॉर्म 33 में आवेदन', 'मूल पंजीकरण प्रमाण पत्र (आरसी)', 'नया पता प्रमाण', 'वैध बीमा प्रमाण पत्र', 'प्रदूषण नियंत्रण (पीयूसी) प्रमाण पत्र']
      },
      process: {
        en: '1. Apply online on Vahan Parivahan portal. 2. Upload Form 33 and address proof. 3. Pay the fee. 4. Submit documents to RTO if required. 5. New RC issued with updated address.',
        hi: '1. वाहन परिवहन पोर्टल पर ऑनलाइन आवेदन करें। 2. फॉर्म 33 और पता प्रमाण अपलोड करें। 3. शुल्क का भुगतान करें। 4. यदि आवश्यक हो तो आरटीओ को दस्तावेज जमा करें। 5. अपडेटेड पते के साथ नई आरसी जारी।'
      },
      tips: {
        en: 'Address change must be reported to the RTO within 30 days of moving.',
        hi: 'स्थानांतरण के 30 दिनों के भीतर आरटीओ को पता परिवर्तन की सूचना दी जानी चाहिए।'
      }
    }
  },
  {
    id: 'hypothecation-termination-form',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Hypothecation',
    serviceNameHi: 'हाइपोथेकेशन',
    formName: 'Hypothecation Termination (Form 35)',
    formNameHi: 'हाइपोथेकेशन समाप्ति (फॉर्म 35)',
    description: 'Remove bank loan entry from vehicle RC after loan closure.',
    descriptionHi: 'ऋण बंद होने के बाद वाहन आरसी से बैंक ऋण प्रविष्टि हटाएं।',
    icon: FileCheck,
    guidelines: ['Bank NOC', 'Original RC', 'Insurance & PUC'],
    guidelinesHi: ['बैंक एनओसी', 'मूल आरसी', 'बीमा और पीयूसी'],
    searchQuery: 'Hypothecation termination form 35 vehicle RC Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To remove the hypothecation (loan) entry from the vehicle\'s registration certificate after the loan is fully repaid.',
        hi: 'ऋण पूरी तरह से चुकाए जाने के बाद वाहन के पंजीकरण प्रमाण पत्र से हाइपोथेकेशन (ऋण) प्रविष्टि को हटाना।'
      },
      eligibility: {
        en: 'Vehicle owners who have cleared their vehicle loan and obtained an NOC from the bank.',
        hi: 'वाहन मालिक जिन्होंने अपना वाहन ऋण चुका दिया है और बैंक से एनओसी प्राप्त कर ली है।'
      },
      documents: {
        en: ['Application in Form 35 (in duplicate)', 'NOC from the Bank', 'Original Registration Certificate (RC)', 'Valid Insurance Copy', 'PUC Certificate'],
        hi: ['फॉर्म 35 में आवेदन (दो प्रतियों में)', 'बैंक से एनओसी', 'मूल पंजीकरण प्रमाण पत्र (आरसी)', 'वैध बीमा प्रति', 'पीयूसी प्रमाण पत्र']
      },
      process: {
        en: '1. Obtain NOC and signed Form 35 from the bank. 2. Apply online on Vahan Parivahan portal. 3. Upload documents and pay fee. 4. Submit physical documents to RTO. 5. New RC issued without hypothecation.',
        hi: '1. बैंक से एनओसी और हस्ताक्षरित फॉर्म 35 प्राप्त करें। 2. वाहन परिवहन पोर्टल पर ऑनलाइन आवेदन करें। 3. दस्तावेज अपलोड करें और शुल्क का भुगतान करें। 4. आरटीओ को भौतिक दस्तावेज जमा करें। 5. हाइपोथेकेशन के बिना नई आरसी जारी।'
      },
      tips: {
        en: 'Check that the bank NOC is valid (usually 3 months) before applying at the RTO.',
        hi: 'आरटीओ में आवेदन करने से पहले जांच लें कि बैंक एनओसी मान्य है (आमतौर पर 3 महीने)।'
      }
    }
  },
  {
    id: 'nmms-scholarship-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'NMMS Scholarship',
    serviceNameHi: 'एनएमएमएस छात्रवृत्ति',
    formName: 'NMMS Application Form',
    formNameHi: 'एनएमएमएस आवेदन फॉर्म',
    description: 'National Means-cum-Merit Scholarship for class 8 students.',
    descriptionHi: 'कक्षा 8 के छात्रों के लिए नेशनल मीन्स-कम-मेरिट छात्रवृत्ति।',
    icon: GraduationCap,
    guidelines: ['Class 8 student', 'Income < 3.5 Lakh', 'Marks > 55%'],
    guidelinesHi: ['कक्षा 8 का छात्र', 'आय < 3.5 लाख', 'अंक > 55%'],
    searchQuery: 'NMMS scholarship application form Rajasthan Shala Darpan pdf',
    guide: {
      purpose: {
        en: 'To provide financial assistance to meritorious students of economically weaker sections to prevent dropouts.',
        hi: 'आर्थिक रूप से कमजोर वर्गों के मेधावी छात्रों को पढ़ाई छोड़ने से रोकने के लिए वित्तीय सहायता प्रदान करना।'
      },
      eligibility: {
        en: 'Students of class 8 in government/aided schools with family income below 3.5 Lakh per annum.',
        hi: 'सरकारी/सहायता प्राप्त स्कूलों में कक्षा 8 के छात्र जिनकी पारिवारिक आय 3.5 लाख प्रति वर्ष से कम है।'
      },
      documents: {
        en: ['Class 7 Marksheet', 'Income Certificate', 'Caste Certificate (if applicable)', 'Aadhaar Card', 'Bank Passbook'],
        hi: ['कक्षा 7 की मार्कशीट', 'आय प्रमाण पत्र', 'जाति प्रमाण पत्र (यदि लागू हो)', 'आधार कार्ड', 'बैंक पासबुक']
      },
      process: {
        en: '1. Apply online via Shala Darpan (for Rajasthan) or NSP portal. 2. Appear for the NMMS selection test. 3. Selected students get scholarship from class 9 to 12.',
        hi: '1. शाला दर्पण (राजस्थान के लिए) या एनएसपी पोर्टल के माध्यम से ऑनलाइन आवेदन करें। 2. एनएमएमएस चयन परीक्षा के लिए उपस्थित हों। 3. चयनित छात्रों को कक्षा 9 से 12 तक छात्रवृत्ति मिलती है।'
      },
      tips: {
        en: 'Prepare well for the Mental Ability Test (MAT) and Scholastic Aptitude Test (SAT) parts of the exam.',
        hi: 'परीक्षा के मानसिक क्षमता परीक्षण (MAT) और शैक्षिक योग्यता परीक्षण (SAT) भागों के लिए अच्छी तैयारी करें।'
      }
    }
  },
  {
    id: 'tenant-verification-form',
    category: 'Police Verification Forms',
    categoryHi: 'पुलिस सत्यापन फॉर्म',
    serviceName: 'Tenant Verification',
    serviceNameHi: 'किरायेदार सत्यापन',
    formName: 'Tenant Info Form',
    formNameHi: 'किरायेदार सूचना फॉर्म',
    description: 'Mandatory police verification for tenants and domestic help.',
    descriptionHi: 'किरायेदारों और घरेलू सहायकों के लिए अनिवार्य पुलिस सत्यापन।',
    icon: Police,
    guidelines: ['Tenant ID proof', 'Owner ID proof', 'Rent agreement'],
    guidelinesHi: ['किरायेदार आईडी प्रमाण', 'मालिक आईडी प्रमाण', 'किराया विलेख'],
    searchQuery: 'Tenant verification application form Rajasthan Police pdf',
    guide: {
      purpose: {
        en: 'To maintain a record of tenants for security purposes and prevent criminal activities.',
        hi: 'सुरक्षा उद्देश्यों के लिए किरायेदारों का रिकॉर्ड रखना और आपराधिक गतिविधियों को रोकना।'
      },
      eligibility: {
        en: 'Property owners who are renting out their premises to new tenants.',
        hi: 'संपत्ति के मालिक जो अपने परिसर को नए किरायेदारों को किराए पर दे रहे हैं।'
      },
      documents: {
        en: ['Tenant\'s Aadhaar/Voter ID', 'Tenant\'s Passport Size Photo', 'Owner\'s ID Proof', 'Copy of Rent Agreement'],
        hi: ['किरायेदार का आधार/वोटर आईडी', 'किरायेदार का पासपोर्ट आकार का फोटो', 'मालिक का आईडी प्रमाण', 'किराया विलेख की प्रति']
      },
      process: {
        en: '1. Download form from Rajasthan Police website or visit local Thana. 2. Fill details of tenant and owner. 3. Submit at the police station or via online portal. 4. Police verification of tenant\'s background.',
        hi: '1. राजस्थान पुलिस की वेबसाइट से फॉर्म डाउनलोड करें या स्थानीय थाने पर जाएं। 2. किरायेदार और मालिक का विवरण भरें। 3. पुलिस स्टेशन में या ऑनलाइन पोर्टल के माध्यम से जमा करें। 4. किरायेदार की पृष्ठभूमि का पुलिस सत्यापन।'
      },
      tips: {
        en: 'Tenant verification is legally mandatory in many cities; failure to do so can lead to penalties for the owner.',
        hi: 'कई शहरों में किरायेदार सत्यापन कानूनी रूप से अनिवार्य है; ऐसा न करने पर मालिक पर जुर्माना लगाया जा सकता है।'
      }
    }
  },
  {
    id: 'domestic-help-verification-form',
    category: 'Police Verification Forms',
    categoryHi: 'पुलिस सत्यापन फॉर्म',
    serviceName: 'Servant Verification',
    serviceNameHi: 'नौकर सत्यापन',
    formName: 'Domestic Help Form',
    formNameHi: 'घरेलू सहायक फॉर्म',
    description: 'Police verification for domestic servants, drivers, and guards.',
    descriptionHi: 'घरेलू नौकरों, ड्राइवरों और गार्डों के लिए पुलिस सत्यापन।',
    icon: Police,
    guidelines: ['Servant ID proof', 'Photo', 'Employer details'],
    guidelinesHi: ['नौकर आईडी प्रमाण', 'फोटो', 'नियोक्ता विवरण'],
    searchQuery: 'Domestic help servant verification form Rajasthan Police pdf',
    guide: {
      purpose: {
        en: 'To verify the identity and background of domestic help for the safety of the employer\'s family.',
        hi: 'नियोक्ता के परिवार की सुरक्षा के लिए घरेलू सहायकों की पहचान और पृष्ठभूमि का सत्यापन करना।'
      },
      eligibility: {
        en: 'Employers hiring domestic help, drivers, or security guards.',
        hi: 'घरेलू सहायक, ड्राइवर या सुरक्षा गार्ड रखने वाले नियोक्ता।'
      },
      documents: {
        en: ['Help\'s Aadhaar/ID Proof', 'Help\'s Recent Photograph', 'Employer\'s ID Proof', 'Permanent Address of the Help'],
        hi: ['सहायक का आधार/आईडी प्रमाण', 'सहायक की हालिया तस्वीर', 'नियोक्ता का आईडी प्रमाण', 'सहायक का स्थायी पता']
      },
      process: {
        en: '1. Fill the servant verification form. 2. Attach photographs and ID proofs. 3. Submit to the local police station. 4. Police checks for any criminal records in the help\'s home district.',
        hi: '1. नौकर सत्यापन फॉर्म भरें। 2. फोटो और आईडी प्रमाण संलग्न करें। 3. स्थानीय पुलिस स्टेशन में जमा करें। 4. पुलिस सहायक के गृह जिले में किसी भी आपराधिक रिकॉर्ड की जांच करती है।'
      },
      tips: {
        en: 'Always keep a copy of the servant\'s ID and a clear photograph before they start working.',
        hi: 'काम शुरू करने से पहले हमेशा नौकर की आईडी की एक प्रति और एक स्पष्ट तस्वीर अपने पास रखें।'
      }
    }
  },
  {
    id: 'lease-deed-registration-form',
    category: 'Land and Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Lease Deed',
    serviceNameHi: 'लीज डीड',
    formName: 'Lease Registration Form',
    formNameHi: 'लीज पंजीकरण फॉर्म',
    description: 'Registration of long-term lease agreements for land/property.',
    descriptionHi: 'भूमि/संपत्ति के लिए दीर्घकालिक लीज समझौतों का पंजीकरण।',
    icon: Landmark,
    guidelines: ['Lease agreement', 'ID proof', 'Witnesses', 'Stamp duty'],
    guidelinesHi: ['लीज समझौता', 'आईडी प्रमाण', 'गवाह', 'स्टाम्प शुल्क'],
    searchQuery: 'Lease deed registration application form Rajasthan IGRS pdf',
    guide: {
      purpose: {
        en: 'To legally register a lease agreement between a lessor and a lessee for a specified period.',
        hi: 'एक निर्दिष्ट अवधि के लिए पट्टादाता और पट्टेदार के बीच लीज समझौते को कानूनी रूप से पंजीकृत करना।'
      },
      eligibility: {
        en: 'Lessors and lessees entering into a property lease agreement.',
        hi: 'संपत्ति लीज समझौते में प्रवेश करने वाले पट्टादाता और पट्टेदार।'
      },
      documents: {
        en: ['Draft Lease Deed', 'Ownership Proof of Property', 'ID Proof of both parties', 'Two Witnesses with ID Proof', 'Stamp Duty Receipt'],
        hi: ['ड्राफ्ट लीज डीड', 'संपत्ति का स्वामित्व प्रमाण', 'दोनों पक्षों का आईडी प्रमाण', 'आईडी प्रमाण के साथ दो गवाह', 'स्टाम्प शुल्क रसीद']
      },
      process: {
        en: '1. Prepare the lease deed on stamp paper. 2. Book an appointment on IGRS portal. 3. Visit Sub-Registrar office with witnesses. 4. Biometric verification and signing. 5. Registered lease deed issued.',
        hi: '1. स्टाम्प पेपर पर लीज डीड तैयार करें। 2. IGRS पोर्टल पर अपॉइंटमेंट बुक करें। 3. गवाहों के साथ उप-पंजीयक कार्यालय जाएं। 4. बायोमेट्रिक सत्यापन और हस्ताक्षर। 5. पंजीकृत लीज डीड जारी।'
      },
      tips: {
        en: 'Leases for more than 11 months must be registered to be legally valid in court.',
        hi: 'अदालत में कानूनी रूप से मान्य होने के लिए 11 महीने से अधिक के लीज को पंजीकृत होना चाहिए।'
      }
    }
  },
  {
    id: 'gift-deed-registration-form',
    category: 'Land and Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Gift Deed',
    serviceNameHi: 'उपहार विलेख',
    formName: 'Gift Registration Form',
    formNameHi: 'उपहार पंजीकरण फॉर्म',
    description: 'Legal transfer of property as a gift to a family member or others.',
    descriptionHi: 'परिवार के सदस्य या अन्य लोगों को उपहार के रूप में संपत्ति का कानूनी हस्तांतरण।',
    icon: Heart,
    guidelines: ['Gift deed draft', 'ID proof', 'Witnesses', 'Property docs'],
    guidelinesHi: ['उपहार विलेख ड्राफ्ट', 'आईडी प्रमाण', 'गवाह', 'संपत्ति दस्तावेज'],
    searchQuery: 'Gift deed registration application form Rajasthan IGRS pdf',
    guide: {
      purpose: {
        en: 'To legally transfer ownership of a property from a donor to a donee without any monetary exchange.',
        hi: 'बिना किसी मौद्रिक विनिमय के दाता से प्राप्तकर्ता को संपत्ति का स्वामित्व कानूनी रूप से हस्तांतरित करना।'
      },
      eligibility: {
        en: 'Property owners wishing to gift their property to relatives or others.',
        hi: 'संपत्ति के मालिक जो अपनी संपत्ति रिश्तेदारों या अन्य को उपहार में देना चाहते हैं।'
      },
      documents: {
        en: ['Draft Gift Deed', 'Original Property Documents', 'ID Proof of Donor and Donee', 'Two Witnesses', 'Stamp Duty Payment Proof'],
        hi: ['ड्राफ्ट उपहार विलेख', 'मूल संपत्ति दस्तावेज', 'दाता और प्राप्तकर्ता का आईडी प्रमाण', 'दो गवाह', 'स्टाम्प शुल्क भुगतान प्रमाण']
      },
      process: {
        en: '1. Draft the gift deed. 2. Pay the applicable stamp duty (usually lower for blood relatives). 3. Register at the Sub-Registrar office. 4. Mutation of property in revenue records.',
        hi: '1. उपहार विलेख का मसौदा तैयार करें। 2. लागू स्टाम्प शुल्क का भुगतान करें (आमतौर पर रक्त संबंधियों के लिए कम)। 3. उप-पंजीयक कार्यालय में पंजीकरण करें। 4. राजस्व रिकॉर्ड में संपत्ति का उत्परिवर्तन।'
      },
      tips: {
        en: 'A gift deed once registered is difficult to revoke, so ensure it is a voluntary decision.',
        hi: 'एक बार पंजीकृत होने के बाद उपहार विलेख को रद्द करना मुश्किल होता है, इसलिए सुनिश्चित करें कि यह एक स्वैच्छिक निर्णय है।'
      }
    }
  },
  {
    id: 'rajshri-yojana-form',
    category: 'Social Welfare Schemes',
    categoryHi: 'समाज कल्याण योजनाएं',
    serviceName: 'Rajshri Yojana',
    serviceNameHi: 'राजश्री योजना',
    formName: 'Mukhyamantri Rajshri Form',
    formNameHi: 'मुख्यमंत्री राजश्री फॉर्म',
    description: 'Financial assistance for girl child from birth to class 12.',
    descriptionHi: 'जन्म से कक्षा 12 तक बालिकाओं के लिए वित्तीय सहायता।',
    icon: Heart,
    guidelines: ['Girl child born in Rajasthan', 'Institutional delivery', 'Jan Aadhaar card'],
    guidelinesHi: ['राजस्थान में जन्मी बालिका', 'संस्थागत प्रसव', 'जन आधार कार्ड'],
    searchQuery: 'Mukhyamantri Rajshri Yojana application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To promote girl child education and health by providing financial aid at various stages of her life.',
        hi: 'बालिका के जीवन के विभिन्न चरणों में वित्तीय सहायता प्रदान करके बालिका शिक्षा और स्वास्थ्य को बढ़ावा देना।'
      },
      eligibility: {
        en: 'Girl children born in government or accredited private hospitals in Rajasthan after June 1, 2016.',
        hi: '1 जून, 2016 के बाद राजस्थान के सरकारी या मान्यता प्राप्त निजी अस्पतालों में जन्मी बालिकाएं।'
      },
      documents: {
        en: ['Birth Certificate', 'Jan Aadhaar Card', 'Mother\'s Aadhaar Card', 'Hospital Discharge Summary', 'School Admission Proof (for later stages)'],
        hi: ['जन्म प्रमाण पत्र', 'जन आधार कार्ड', 'माता का आधार कार्ड', 'अस्पताल डिस्चार्ज सारांश', 'स्कूल प्रवेश प्रमाण (बाद के चरणों के लिए)']
      },
      process: {
        en: '1. First two installments are given at the hospital. 2. For later installments, apply via e-Mitra or school. 3. Amount is credited directly to the mother\'s bank account.',
        hi: '1. पहली दो किस्तें अस्पताल में दी जाती हैं। 2. बाद की किस्तों के लिए ई-मित्र या स्कूल के माध्यम से आवेदन करें। 3. राशि सीधे माता के बैंक खाते में जमा की जाती है।'
      },
      tips: {
        en: 'Ensure the Jan Aadhaar card is updated with the girl child\'s name to receive installments smoothly.',
        hi: 'किस्तें सुचारू रूप से प्राप्त करने के लिए सुनिश्चित करें कि जन आधार कार्ड बालिका के नाम के साथ अपडेट है।'
      }
    }
  },
  {
    id: 'matritva-poshan-form',
    category: 'Social Welfare Schemes',
    categoryHi: 'समाज कल्याण योजनाएं',
    serviceName: 'Matritva Poshan',
    serviceNameHi: 'मातृत्व पोषण',
    formName: 'Indira Gandhi Matritva Form',
    formNameHi: 'इंदिरा गांधी मातृत्व फॉर्म',
    description: 'Financial aid for pregnant women for second child nutrition.',
    descriptionHi: 'दूसरी संतान के पोषण के लिए गर्भवती महिलाओं को वित्तीय सहायता।',
    icon: Baby,
    guidelines: ['Second pregnancy', 'Rajasthan resident', 'BCT/ANC registration'],
    guidelinesHi: ['दूसरी गर्भावस्था', 'राजस्थान निवासी', 'बीसीटी/एएनसी पंजीकरण'],
    searchQuery: 'Indira Gandhi Matritva Poshan Yojana application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To provide financial support to pregnant women for their second child to improve nutritional status.',
        hi: 'पोषण की स्थिति में सुधार के लिए गर्भवती महिलाओं को उनकी दूसरी संतान के लिए वित्तीय सहायता प्रदान करना।'
      },
      eligibility: {
        en: 'Pregnant women in Rajasthan expecting their second child.',
        hi: 'राजस्थान में गर्भवती महिलाएं जो अपनी दूसरी संतान की उम्मीद कर रही हैं।'
      },
      documents: {
        en: ['Jan Aadhaar Card', 'Aadhaar Card', 'ANC Card (Mamta Card)', 'Bank Passbook', 'Birth Certificate of first child'],
        hi: ['जन आधार कार्ड', 'आधार कार्ड', 'एएनसी कार्ड (ममता कार्ड)', 'बैंक पासबुक', 'पहली संतान का जन्म प्रमाण पत्र']
      },
      process: {
        en: '1. Register at the local Anganwadi center. 2. Installments are given at various stages: registration, ANC checkup, delivery, and vaccination. 3. Direct Benefit Transfer (DBT) to bank account.',
        hi: '1. स्थानीय आंगनवाड़ी केंद्र में पंजीकरण करें। 2. विभिन्न चरणों में किस्तें दी जाती हैं: पंजीकरण, एएनसी चेकअप, प्रसव और टीकाकरण। 3. बैंक खाते में प्रत्यक्ष लाभ हस्तांतरण (DBT)।'
      },
      tips: {
        en: 'Regularly visit the Anganwadi and keep the Mamta card updated to ensure all installments are received.',
        hi: 'नियमित रूप से आंगनवाड़ी जाएं और सभी किस्तें प्राप्त करना सुनिश्चित करने के लिए ममता कार्ड को अपडेट रखें।'
      }
    }
  },
  {
    id: 'surya-ghar-yojana-form',
    category: 'Social Welfare Schemes',
    categoryHi: 'समाज कल्याण योजनाएं',
    serviceName: 'PM Surya Ghar',
    serviceNameHi: 'पीएम सूर्य घर',
    formName: 'Solar Rooftop Application',
    formNameHi: 'सोलर रूफटॉप आवेदन',
    description: 'Subsidy for solar rooftop installation to get free electricity.',
    descriptionHi: 'मुफ्त बिजली पाने के लिए सोलर रूफटॉप स्थापना के लिए सब्सिडी।',
    icon: Zap,
    guidelines: ['Residential house', 'Electricity connection', 'Own roof space'],
    guidelinesHi: ['आवासीय घर', 'बिजली कनेक्शन', 'स्वयं की छत का स्थान'],
    searchQuery: 'PM Surya Ghar Muft Bijli Yojana application form online pdf',
    guide: {
      purpose: {
        en: 'To provide free electricity up to 300 units per month to households through solar rooftop systems.',
        hi: 'सोलर रूफटॉप सिस्टम के माध्यम से घरों को प्रति माह 300 यूनिट तक मुफ्त बिजली प्रदान करना।'
      },
      eligibility: {
        en: 'All Indian households with a valid electricity connection and suitable roof space.',
        hi: 'वैध बिजली कनेक्शन और उपयुक्त छत स्थान वाले सभी भारतीय घर।'
      },
      documents: {
        en: ['Latest Electricity Bill', 'Aadhaar Card', 'Bank Passbook', 'Property Ownership Proof', 'Photograph of the Rooftop'],
        hi: ['नवीनतम बिजली बिल', 'आधार कार्ड', 'बैंक पासबुक', 'संपत्ति स्वामित्व प्रमाण', 'छत की तस्वीर']
      },
      process: {
        en: '1. Register on the PM Surya Ghar portal. 2. Apply for rooftop solar. 3. Feasibility approval from DISCOM. 4. Installation by registered vendor. 5. Inspection and net-metering. 6. Subsidy claim.',
        hi: '1. पीएम सूर्य घर पोर्टल पर पंजीकरण करें। 2. रूफटॉप सोलर के लिए आवेदन करें। 3. डिस्कॉम से व्यवहार्यता अनुमोदन। 4. पंजीकृत विक्रेता द्वारा स्थापना। 5. निरीक्षण और नेट-मीटरिंग। 6. सब्सिडी का दावा।'
      },
      tips: {
        en: 'Choose a vendor registered with the national portal to ensure you receive the government subsidy.',
        hi: 'यह सुनिश्चित करने के लिए कि आपको सरकारी सब्सिडी मिले, राष्ट्रीय पोर्टल पर पंजीकृत विक्रेता का चयन करें।'
      }
    }
  },
  {
    id: 'pm-kmy-pension-form',
    category: 'Pension Services',
    categoryHi: 'पेंशन सेवाएं',
    serviceName: 'PM-KMY',
    serviceNameHi: 'पीएम-केएमवाई',
    formName: 'Kisan Maan-dhan Form',
    formNameHi: 'किसान मान-धन फॉर्म',
    description: 'Pension scheme for small and marginal farmers (Rs. 3000/month).',
    descriptionHi: 'छोटे और सीमांत किसानों के लिए पेंशन योजना (3000 रुपये/माह)।',
    icon: Coins,
    guidelines: ['Age 18-40 years', 'Land < 2 hectares', 'Monthly contribution'],
    guidelinesHi: ['आयु 18-40 वर्ष', 'भूमि < 2 हेक्टेयर', 'मासिक योगदान'],
    searchQuery: 'Pradhan Mantri Kisan Maan-dhan Yojana PM-KMY registration form pdf',
    guide: {
      purpose: {
        en: 'To provide social security to small and marginal farmers in their old age through a monthly pension.',
        hi: 'मासिक पेंशन के माध्यम से छोटे और सीमांत किसानों को उनके बुढ़ापे में सामाजिक सुरक्षा प्रदान करना।'
      },
      eligibility: {
        en: 'Small and marginal farmers aged between 18 and 40 years with cultivable land up to 2 hectares.',
        hi: '18 से 40 वर्ष की आयु के छोटे और सीमांत किसान जिनके पास 2 हेक्टेयर तक कृषि योग्य भूमि है।'
      },
      documents: {
        en: ['Aadhaar Card', 'Bank Passbook (linked with Aadhaar)', 'Land Records (Khasra/Khatauni)', 'Jan Aadhaar Card'],
        hi: ['आधार कार्ड', 'बैंक पासबुक (आधार से लिंक)', 'भूमि रिकॉर्ड (खसरा/खतौनी)', 'जन आधार कार्ड']
      },
      process: {
        en: '1. Visit nearest CSC or e-Mitra center. 2. Enroll using Aadhaar and bank details. 3. Pay the first installment of contribution. 4. Receive PM-KMY card.',
        hi: '1. निकटतम सीएससी या ई-मित्र केंद्र पर जाएं। 2. आधार और बैंक विवरण का उपयोग करके नामांकन करें। 3. योगदान की पहली किस्त का भुगतान करें। 4. पीएम-केएमवाई कार्ड प्राप्त करें।'
      },
      tips: {
        en: 'The government contributes an equal amount to your pension fund every month.',
        hi: 'सरकार हर महीने आपके पेंशन फंड में समान राशि का योगदान देती है।'
      }
    }
  },
  {
    id: 'pm-vby-pension-form',
    category: 'Pension Services',
    categoryHi: 'पेंशन सेवाएं',
    serviceName: 'PM-VBY',
    serviceNameHi: 'पीएम-वीबीवाई',
    formName: 'Vyapari Maan-dhan Form',
    formNameHi: 'व्यापारी मान-धन फॉर्म',
    description: 'Pension scheme for small shopkeepers and traders.',
    descriptionHi: 'छोटे दुकानदारों और व्यापारियों के लिए पेंशन योजना।',
    icon: Coins,
    guidelines: ['Age 18-40 years', 'Turnover < 1.5 Cr', 'Not in EPFO/ESIC'],
    guidelinesHi: ['आयु 18-40 वर्ष', 'टर्नओवर < 1.5 करोड़', 'EPFO/ESIC में नहीं'],
    searchQuery: 'Pradhan Mantri Laghu Vyapari Maan-dhan Yojana PM-VBY registration form pdf',
    guide: {
      purpose: {
        en: 'To provide a monthly pension of Rs. 3000 to small traders and shopkeepers after the age of 60.',
        hi: '60 वर्ष की आयु के बाद छोटे व्यापारियों और दुकानदारों को 3000 रुपये की मासिक पेंशन प्रदान करना।'
      },
      eligibility: {
        en: 'Self-employed shopkeepers, retail traders, and rice mill owners aged 18-40 with annual turnover not exceeding 1.5 Crore.',
        hi: '18-40 वर्ष की आयु के स्व-नियोजित दुकानदार, खुदरा व्यापारी और चावल मिल मालिक जिनका वार्षिक टर्नओवर 1.5 करोड़ से अधिक नहीं है।'
      },
      documents: {
        en: ['Aadhaar Card', 'Bank Passbook', 'GSTIN (if applicable)', 'Self-declaration of turnover'],
        hi: ['आधार कार्ड', 'बैंक पासबुक', 'GSTIN (यदि लागू हो)', 'टर्नओवर की स्व-घोषणा']
      },
      process: {
        en: '1. Apply at any Common Service Center (CSC). 2. Provide Aadhaar and bank details for auto-debit of contribution. 3. Enrollment is free of cost.',
        hi: '1. किसी भी सामान्य सेवा केंद्र (CSC) पर आवेदन करें। 2. योगदान के ऑटो-डेबिट के लिए आधार और बैंक विवरण प्रदान करें। 3. नामांकन निःशुल्क है।'
      },
      tips: {
        en: 'Ensure your bank account has sufficient balance for the monthly auto-debit of the premium.',
        hi: 'सुनिश्चित करें कि आपके बैंक खाते में प्रीमियम के मासिक ऑटो-डेबिट के लिए पर्याप्त शेष राशि है।'
      }
    }
  },
  {
    id: 'trade-certificate-form',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Trade Certificate',
    serviceNameHi: 'व्यापार प्रमाण पत्र',
    formName: 'Trade Certificate Form (Form 16)',
    formNameHi: 'व्यापार प्रमाण पत्र फॉर्म (फॉर्म 16)',
    description: 'For vehicle dealers and manufacturers to move unregistered vehicles.',
    descriptionHi: 'वाहन डीलरों और निर्माताओं के लिए अपंजीकृत वाहनों को स्थानांतरित करने के लिए।',
    icon: Building,
    guidelines: ['Dealer license', 'Address proof', 'Fee receipt'],
    guidelinesHi: ['डीलर लाइसेंस', 'पता प्रमाण', 'शुल्क रसीद'],
    searchQuery: 'Trade certificate application form 16 Rajasthan RTO pdf',
    guide: {
      purpose: {
        en: 'To allow dealers and manufacturers to operate unregistered vehicles for testing or delivery purposes.',
        hi: 'डीलरों और निर्माताओं को परीक्षण या वितरण उद्देश्यों के लिए अपंजीकृत वाहनों को संचालित करने की अनुमति देना।'
      },
      eligibility: {
        en: 'Authorized vehicle dealers, manufacturers, or repairers.',
        hi: 'अधिकृत वाहन डीलर, निर्माता या मरम्मत करने वाले।'
      },
      documents: {
        en: ['Application in Form 16', 'Trade License', 'Proof of Business Address', 'Passport Size Photos of the Applicant'],
        hi: ['फॉर्म 16 में आवेदन', 'व्यापार लाइसेंस', 'व्यावसायिक पते का प्रमाण', 'आवेदक के पासपोर्ट आकार के फोटो']
      },
      process: {
        en: '1. Apply online on Vahan portal. 2. Submit Form 16 and business proofs. 3. Pay the trade certificate fee. 4. RTO verification of premises. 5. Certificate issued for a specific period.',
        hi: '1. वाहन पोर्टल पर ऑनलाइन आवेदन करें। 2. फॉर्म 16 और व्यावसायिक प्रमाण जमा करें। 3. व्यापार प्रमाण पत्र शुल्क का भुगतान करें। 4. परिसर का आरटीओ सत्यापन। 5. एक विशिष्ट अवधि के लिए जारी प्रमाण पत्र।'
      },
      tips: {
        en: 'Trade certificates must be renewed annually to continue business operations.',
        hi: 'व्यावसायिक संचालन जारी रखने के लिए व्यापार प्रमाण पत्रों को सालाना नवीनीकृत किया जाना चाहिए।'
      }
    }
  },
  {
    id: 'goods-permit-form',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Vehicle Permit',
    serviceNameHi: 'वाहन परमिट',
    formName: 'Goods Carriage Permit (Form 48)',
    formNameHi: 'माल ढुलाई परमिट (फॉर्म 48)',
    description: 'Permit for commercial vehicles to carry goods within or outside the state.',
    descriptionHi: 'राज्य के भीतर या बाहर माल ले जाने के लिए वाणिज्यिक वाहनों के लिए परमिट।',
    icon: Truck,
    guidelines: ['Vehicle RC', 'Insurance', 'Fitness certificate'],
    guidelinesHi: ['वाहन आरसी', 'बीमा', 'फिटनेस प्रमाण पत्र'],
    searchQuery: 'Goods carriage permit application form 48 Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To obtain legal authorization for a commercial vehicle to transport goods.',
        hi: 'माल परिवहन के लिए वाणिज्यिक वाहन के लिए कानूनी प्राधिकरण प्राप्त करना।'
      },
      eligibility: {
        en: 'Owners of commercial goods vehicles with valid RC and fitness.',
        hi: 'वैध आरसी और फिटनेस वाले वाणिज्यिक माल वाहनों के मालिक।'
      },
      documents: {
        en: ['Application in Form 48', 'Registration Certificate (RC)', 'Valid Insurance', 'Fitness Certificate', 'Tax Payment Proof'],
        hi: ['फॉर्म 48 में आवेदन', 'पंजीकरण प्रमाण पत्र (आरसी)', 'वैध बीमा', 'फिटनेस प्रमाण पत्र', 'कर भुगतान प्रमाण']
      },
      process: {
        en: '1. Apply online on Vahan portal. 2. Select the type of permit (State/National). 3. Upload documents and pay permit fee. 4. Permit issued after RTO approval.',
        hi: '1. वाहन पोर्टल पर ऑनलाइन आवेदन करें। 2. परमिट का प्रकार चुनें (राज्य/राष्ट्रीय)। 3. दस्तावेज अपलोड करें और परमिट शुल्क का भुगतान करें। 4. आरटीओ अनुमोदन के बाद जारी परमिट।'
      },
      tips: {
        en: 'Ensure all taxes (Road Tax, Green Tax) are paid before applying for a permit.',
        hi: 'परमिट के लिए आवेदन करने से पहले सुनिश्चित करें कि सभी कर (रोड टैक्स, ग्रीन टैक्स) का भुगतान कर दिया गया है।'
      }
    }
  },
  {
    id: 'national-permit-form',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Vehicle Permit',
    serviceNameHi: 'वाहन परमिट',
    formName: 'National Permit (Form 46)',
    formNameHi: 'राष्ट्रीय परमिट (फॉर्म 46)',
    description: 'Authorization for goods vehicles to operate across India.',
    descriptionHi: 'पूरे भारत में संचालित होने वाले माल वाहनों के लिए प्राधिकरण।',
    icon: Globe,
    guidelines: ['Vehicle RC', 'Fitness certificate', 'National permit fee'],
    guidelinesHi: ['वाहन आरसी', 'फिटनेस प्रमाण पत्र', 'राष्ट्रीय परमिट शुल्क'],
    searchQuery: 'National permit for goods vehicle application form 46 Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To allow commercial goods vehicles to travel and operate in multiple states across India.',
        hi: 'वाणिज्यिक माल वाहनों को पूरे भारत के कई राज्यों में यात्रा करने और संचालित करने की अनुमति देना।'
      },
      eligibility: {
        en: 'Commercial vehicle owners whose vehicles meet the age and fitness criteria for national permit.',
        hi: 'वाणिज्यिक वाहन मालिक जिनके वाहन राष्ट्रीय परमिट के लिए आयु और फिटनेस मानदंडों को पूरा करते हैं।'
      },
      documents: {
        en: ['Application in Form 46', 'Registration Certificate', 'Fitness Certificate', 'Insurance Policy', 'National Permit Fee Receipt'],
        hi: ['फॉर्म 46 में आवेदन', 'पंजीकरण प्रमाण पत्र', 'फिटनेस प्रमाण पत्र', 'बीमा पॉलिसी', 'राष्ट्रीय परमिट शुल्क रसीद']
      },
      process: {
        en: '1. Apply online on Vahan portal. 2. Pay the consolidated fee for national permit. 3. Upload required documents. 4. Permit is issued digitally after verification.',
        hi: '1. वाहन पोर्टल पर ऑनलाइन आवेदन करें। 2. राष्ट्रीय परमिट के लिए समेकित शुल्क का भुगतान करें। 3. आवश्यक दस्तावेज अपलोड करें। 4. सत्यापन के बाद परमिट डिजिटल रूप से जारी किया जाता है।'
      },
      tips: {
        en: 'National permits are usually issued for a period of 1 year and need timely renewal.',
        hi: 'राष्ट्रीय परमिट आमतौर पर 1 वर्ष की अवधि के लिए जारी किए जाते हैं और समय पर नवीनीकरण की आवश्यकता होती है।'
      }
    }
  },
  {
    id: 'temporary-permit-form',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Vehicle Permit',
    serviceNameHi: 'वाहन परमिट',
    formName: 'Temporary Permit (Form 45)',
    formNameHi: 'अस्थायी परमिट (फॉर्म 45)',
    description: 'Short-term permit for vehicles to travel outside their home state.',
    descriptionHi: 'वाहनों के लिए उनके गृह राज्य से बाहर यात्रा करने के लिए अल्पकालिक परमिट।',
    icon: Clock,
    guidelines: ['Vehicle RC', 'Insurance', 'Travel dates'],
    guidelinesHi: ['वाहन आरसी', 'बीमा', 'यात्रा की तारीखें'],
    searchQuery: 'Temporary permit for vehicle application form 45 Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To obtain a short-term permit (usually 1 week to 1 month) for a vehicle to travel to another state.',
        hi: 'किसी वाहन के दूसरे राज्य में जाने के लिए अल्पकालिक परमिट (आमतौर पर 1 सप्ताह से 1 महीने) प्राप्त करना।'
      },
      eligibility: {
        en: 'Vehicle owners needing to take their vehicle outside the registered state for a short duration.',
        hi: 'वाहन मालिक जिन्हें थोड़े समय के लिए अपने वाहन को पंजीकृत राज्य से बाहर ले जाने की आवश्यकता है।'
      },
      documents: {
        en: ['Application in Form 45', 'Registration Certificate (RC)', 'Valid Insurance', 'Fitness Certificate (for commercial)'],
        hi: ['फॉर्म 45 में आवेदन', 'पंजीकरण प्रमाण पत्र (आरसी)', 'वैध बीमा', 'फिटनेस प्रमाण पत्र (वाणिज्यिक के लिए)']
      },
      process: {
        en: '1. Apply online on Vahan portal. 2. Select "Temporary Permit" service. 3. Enter travel details and duration. 4. Pay the temporary permit fee. 5. Download the permit instantly.',
        hi: '1. वाहन पोर्टल पर ऑनलाइन आवेदन करें। 2. "अस्थायी परमिट" सेवा चुनें। 3. यात्रा विवरण और अवधि दर्ज करें। 4. अस्थायी परमिट शुल्क का भुगतान करें। 5. परमिट तुरंत डाउनलोड करें।'
      },
      tips: {
        en: 'Temporary permits are ideal for one-time trips or seasonal transport needs.',
        hi: 'अस्थायी परमिट एक बार की यात्रा या मौसमी परिवहन आवश्यकताओं के लिए आदर्श हैं।'
      }
    }
  },
  {
    id: 'vehicle-fitness-new-form',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Vehicle Fitness',
    serviceNameHi: 'वाहन फिटनेस',
    formName: 'Fitness Certificate (Form 22)',
    formNameHi: 'फिटनेस प्रमाण पत्र (फॉर्म 22)',
    description: 'Initial fitness certificate issued by the manufacturer for new vehicles.',
    descriptionHi: 'नए वाहनों के लिए निर्माता द्वारा जारी प्रारंभिक फिटनेस प्रमाण पत्र।',
    icon: ShieldCheck,
    guidelines: ['New vehicle', 'Manufacturer certificate', 'Invoice'],
    guidelinesHi: ['नया वाहन', 'निर्माता प्रमाण पत्र', 'चालान'],
    searchQuery: 'Vehicle fitness certificate form 22 Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To certify that a new vehicle is roadworthy and meets all safety and emission standards.',
        hi: 'यह प्रमाणित करना कि एक नया वाहन सड़क पर चलने योग्य है और सभी सुरक्षा और उत्सर्जन मानकों को पूरा करता है।'
      },
      eligibility: {
        en: 'New vehicle owners at the time of registration.',
        hi: 'पंजीकरण के समय नए वाहन मालिक।'
      },
      documents: {
        en: ['Form 22 issued by the manufacturer', 'Vehicle Invoice', 'Insurance Policy', 'Temporary Registration (if any)'],
        hi: ['निर्माता द्वारा जारी फॉर्म 22', 'वाहन चालान', 'बीमा पॉलिसी', 'अस्थायी पंजीकरण (यदि कोई हो)']
      },
      process: {
        en: '1. Form 22 is usually provided by the dealer at the time of purchase. 2. It is submitted to the RTO along with the registration application. 3. RTO verifies the details before issuing the RC.',
        hi: '1. फॉर्म 22 आमतौर पर खरीद के समय डीलर द्वारा प्रदान किया जाता है। 2. इसे पंजीकरण आवेदन के साथ आरटीओ में जमा किया जाता है। 3. आरटीओ आरसी जारी करने से पहले विवरणों को सत्यापित करता है।'
      },
      tips: {
        en: 'Ensure the chassis and engine numbers on Form 22 match the physical vehicle.',
        hi: 'सुनिश्चित करें कि फॉर्म 22 पर चेसिस और इंजन नंबर भौतिक वाहन से मेल खाते हैं।'
      }
    }
  },
  {
    id: 'vehicle-alteration-form',
    category: 'Transport Forms',
    categoryHi: 'परिवहन फॉर्म',
    serviceName: 'Vehicle Alteration',
    serviceNameHi: 'वाहन परिवर्तन',
    formName: 'Alteration of Vehicle (Form 30)',
    formNameHi: 'वाहन का परिवर्तन (फॉर्म 30)',
    description: 'Permission to change vehicle color, engine, or body type.',
    descriptionHi: 'वाहन का रंग, इंजन या बॉडी टाइप बदलने की अनुमति।',
    icon: FileEdit,
    guidelines: ['RTO permission', 'Original RC', 'Alteration details'],
    guidelinesHi: ['आरटीओ अनुमति', 'मूल आरसी', 'परिवर्तन विवरण'],
    searchQuery: 'Application for alteration of vehicle form 30 Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To obtain legal permission from the RTO for making significant changes to the vehicle\'s structure or appearance.',
        hi: 'वाहन की संरचना या उपस्थिति में महत्वपूर्ण बदलाव करने के लिए आरटीओ से कानूनी अनुमति प्राप्त करना।'
      },
      eligibility: {
        en: 'Vehicle owners wishing to change the engine, fuel type (e.g., Petrol to CNG), or body color.',
        hi: 'वाहन मालिक जो इंजन, ईंधन प्रकार (जैसे, पेट्रोल से सीएनजी), या बॉडी का रंग बदलना चाहते हैं।'
      },
      documents: {
        en: ['Application in Form 30', 'Original Registration Certificate', 'Insurance Copy', 'Bill of the new parts/engine', 'Pollution Certificate'],
        hi: ['फॉर्म 30 में आवेदन', 'मूल पंजीकरण प्रमाण पत्र', 'बीमा प्रति', 'नए पुर्जों/इंजन का बिल', 'प्रदूषण प्रमाण पत्र']
      },
      process: {
        en: '1. Apply for permission at the RTO before making changes. 2. Perform the alteration at an authorized workshop. 3. Bring the vehicle to RTO for inspection. 4. Update the RC with new details.',
        hi: '1. बदलाव करने से पहले आरटीओ में अनुमति के लिए आवेदन करें। 2. अधिकृत वर्कशॉप में परिवर्तन करें। 3. निरीक्षण के लिए वाहन को आरटीओ लाएं। 4. नए विवरण के साथ आरसी अपडेट करें।'
      },
      tips: {
        en: 'Unauthorized alterations can lead to the cancellation of your vehicle registration and insurance.',
        hi: 'अनधिकृत परिवर्तन आपके वाहन पंजीकरण और बीमा को रद्द करने का कारण बन सकते हैं।'
      }
    }
  },
  {
    id: 'inspire-award-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Inspire Award',
    serviceNameHi: 'इंस्पायर अवार्ड',
    formName: 'Inspire MANAK Form',
    formNameHi: 'इंस्पायर मानक फॉर्म',
    description: 'Award for innovative science projects by school students.',
    descriptionHi: 'स्कूली छात्रों द्वारा नवीन विज्ञान परियोजनाओं के लिए पुरस्कार।',
    icon: Award,
    guidelines: ['Class 6-10 student', 'Innovative idea', 'School nomination'],
    guidelinesHi: ['कक्षा 6-10 का छात्र', 'नवाचारी विचार', 'स्कूल नामांकन'],
    searchQuery: 'Inspire Award MANAK registration form online Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To foster a culture of innovation and creative thinking among school students in science and technology.',
        hi: 'विज्ञान और प्रौद्योगिकी में स्कूली छात्रों के बीच नवाचार और रचनात्मक सोच की संस्कृति को बढ़ावा देना।'
      },
      eligibility: {
        en: 'Students of classes 6 to 10 in any recognized school across India.',
        hi: 'भारत भर के किसी भी मान्यता प्राप्त स्कूल में कक्षा 6 से 10 के छात्र।'
      },
      documents: {
        en: ['Aadhaar Card', 'Bank Account Details', 'Passport Size Photo', 'Brief Write-up of the Innovation Idea'],
        hi: ['आधार कार्ड', 'बैंक खाते का विवरण', 'पासपोर्ट आकार का फोटो', 'नवाचार विचार का संक्षिप्त विवरण']
      },
      process: {
        en: '1. Schools nominate students with innovative ideas on the E-MISE portal. 2. Selected students receive Rs. 10,000 to develop their prototype. 3. Participation in District, State, and National level exhibitions.',
        hi: '1. स्कूल ई-एमआईएसई पोर्टल पर नवीन विचारों वाले छात्रों को नामांकित करते हैं। 2. चयनित छात्रों को अपना प्रोटोटाइप विकसित करने के लिए 10,000 रुपये मिलते हैं। 3. जिला, राज्य और राष्ट्रीय स्तर की प्रदर्शनियों में भागीदारी।'
      },
      tips: {
        en: 'Focus on solving a real-world problem with a simple and cost-effective scientific solution.',
        hi: 'एक सरल और लागत प्रभावी वैज्ञानिक समाधान के साथ वास्तविक दुनिया की समस्या को हल करने पर ध्यान केंद्रित करें।'
      }
    }
  },
  {
    id: 'pre-matric-scholarship-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Pre-Matric Scholarship',
    serviceNameHi: 'प्री-मैट्रिक छात्रवृत्ति',
    formName: 'Pre-Matric Application Form',
    formNameHi: 'प्री-मैट्रिक आवेदन फॉर्म',
    description: 'Scholarship for SC/ST/OBC students studying in classes 1 to 10.',
    descriptionHi: 'कक्षा 1 से 10 में पढ़ने वाले एससी/एसटी/ओबीसी छात्रों के लिए छात्रवृत्ति।',
    icon: GraduationCap,
    guidelines: ['SC/ST/OBC category', 'Income criteria', 'Regular student'],
    guidelinesHi: ['एससी/एसटी/ओबीसी श्रेणी', 'आय मानदंड', 'नियमित छात्र'],
    searchQuery: 'Pre-matric scholarship application form Rajasthan SJMS pdf',
    guide: {
      purpose: {
        en: 'To support the education of students from marginalized communities at the school level.',
        hi: 'स्कूल स्तर पर हाशिए के समुदायों के छात्रों की शिक्षा का समर्थन करना।'
      },
      eligibility: {
        en: 'Students belonging to SC, ST, OBC, or Minority categories with family income below the specified limit.',
        hi: 'एससी, एसटी, ओबीसी या अल्पसंख्यक श्रेणियों से संबंधित छात्र जिनकी पारिवारिक आय निर्दिष्ट सीमा से कम है।'
      },
      documents: {
        en: ['Caste Certificate', 'Income Certificate', 'Previous Class Marksheet', 'Aadhaar Card', 'Bank Passbook'],
        hi: ['जाति प्रमाण पत्र', 'आय प्रमाण पत्र', 'पिछली कक्षा की मार्कशीट', 'आधार कार्ड', 'बैंक पासबुक']
      },
      process: {
        en: '1. Apply online via the Social Justice and Empowerment Department (SJMS) portal or NSP. 2. Verification by the school head. 3. Approval by the District Officer. 4. Scholarship credited to bank account.',
        hi: '1. सामाजिक न्याय और अधिकारिता विभाग (SJMS) पोर्टल या NSP के माध्यम से ऑनलाइन आवेदन करें। 2. स्कूल प्रमुख द्वारा सत्यापन। 3. जिला अधिकारी द्वारा अनुमोदन। 4. बैंक खाते में जमा छात्रवृत्ति।'
      },
      tips: {
        en: 'Ensure your caste and income certificates are valid and updated before the application deadline.',
        hi: 'सुनिश्चित करें कि आपके जाति और आय प्रमाण पत्र आवेदन की समय सीमा से पहले मान्य और अपडेट हैं।'
      }
    }
  },
  {
    id: 'post-matric-scholarship-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Post-Matric Scholarship',
    serviceNameHi: 'पोस्ट-मैट्रिक छात्रवृत्ति',
    formName: 'Post-Matric Application Form',
    formNameHi: 'पोस्ट-मैट्रिक आवेदन फॉर्म',
    description: 'Scholarship for SC/ST/OBC students for higher education (Class 11 to PhD).',
    descriptionHi: 'उच्च शिक्षा (कक्षा 11 से पीएचडी) के लिए एससी/एसटी/ओबीसी छात्रों के लिए छात्रवृत्ति।',
    icon: School,
    guidelines: ['SC/ST/OBC category', 'Income < 2.5 Lakh', 'Higher education'],
    guidelinesHi: ['एससी/एसटी/ओबीसी श्रेणी', 'आय < 2.5 लाख', 'उच्च शिक्षा'],
    searchQuery: 'Post-matric scholarship application form Rajasthan SJMS pdf',
    guide: {
      purpose: {
        en: 'To provide financial assistance to students from disadvantaged backgrounds for pursuing higher education.',
        hi: 'वंचित पृष्ठभूमि के छात्रों को उच्च शिक्षा प्राप्त करने के लिए वित्तीय सहायता प्रदान करना।'
      },
      eligibility: {
        en: 'Students belonging to SC, ST, or OBC categories enrolled in recognized colleges or universities.',
        hi: 'एससी, एसटी या ओबीसी श्रेणियों से संबंधित छात्र जो मान्यता प्राप्त कॉलेजों या विश्वविद्यालयों में नामांकित हैं।'
      },
      documents: {
        en: ['Caste Certificate', 'Income Certificate', 'Last Exam Marksheet', 'Fee Receipt of current year', 'Aadhaar Card', 'Bank Passbook'],
        hi: ['जाति प्रमाण पत्र', 'आय प्रमाण पत्र', 'अंतिम परीक्षा की मार्कशीट', 'चालू वर्ष की शुल्क रसीद', 'आधार कार्ड', 'बैंक पासबुक']
      },
      process: {
        en: '1. Register on the SJMS portal or NSP. 2. Fill the scholarship application and upload documents. 3. Verification by the Institute. 4. Final approval and disbursement.',
        hi: '1. SJMS पोर्टल या NSP पर पंजीकरण करें। 2. छात्रवृत्ति आवेदन भरें और दस्तावेज अपलोड करें। 3. संस्थान द्वारा सत्यापन। 4. अंतिम अनुमोदन और संवितरण।'
      },
      tips: {
        en: 'Apply as soon as the portal opens to avoid last-minute technical issues and ensure early disbursement.',
        hi: 'अंतिम समय की तकनीकी समस्याओं से बचने और जल्दी संवितरण सुनिश्चित करने के लिए पोर्टल खुलते ही आवेदन करें।'
      }
    }
  },
  {
    id: 'cm-higher-education-scholarship-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'CM Scholarship',
    serviceNameHi: 'सीएम छात्रवृत्ति',
    formName: 'Higher Education Form',
    formNameHi: 'उच्च शिक्षा फॉर्म',
    description: 'Scholarship for meritorious students of Rajasthan for higher studies.',
    descriptionHi: 'उच्च शिक्षा के लिए राजस्थान के मेधावी छात्रों के लिए छात्रवृत्ति।',
    icon: Award,
    guidelines: ['Rajasthan domicile', 'Top 1 lakh in merit', 'Income < 2.5 Lakh'],
    guidelinesHi: ['राजस्थान अधिवास', 'मेरिट में शीर्ष 1 लाख', 'आय < 2.5 लाख'],
    searchQuery: 'Chief Minister Higher Education Scholarship form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To encourage meritorious students from low-income families to continue their higher education.',
        hi: 'कम आय वाले परिवारों के मेधावी छात्रों को अपनी उच्च शिक्षा जारी रखने के लिए प्रोत्साहित करना।'
      },
      eligibility: {
        en: 'Students who have passed class 12 from RBSE with at least 60% marks and are in the top 1 lakh merit list.',
        hi: 'वे छात्र जिन्होंने आरबीएसई से कम से कम 60% अंकों के साथ कक्षा 12 उत्तीर्ण की है और शीर्ष 1 लाख मेरिट सूची में हैं।'
      },
      documents: {
        en: ['Class 12 Marksheet', 'Domicile Certificate', 'Income Certificate', 'Jan Aadhaar Card', 'College Admission Proof'],
        hi: ['कक्षा 12 की मार्कशीट', 'मूल निवास प्रमाण पत्र', 'आय प्रमाण पत्र', 'जन आधार कार्ड', 'कॉलेज प्रवेश प्रमाण']
      },
      process: {
        en: '1. Apply online on the Higher Education Department portal (HTE). 2. Submit the application through the college. 3. Verification by the department. 4. Scholarship amount credited to bank account.',
        hi: '1. उच्च शिक्षा विभाग पोर्टल (HTE) पर ऑनलाइन आवेदन करें। 2. कॉलेज के माध्यम से आवेदन जमा करें। 3. विभाग द्वारा सत्यापन। 4. बैंक खाते में जमा छात्रवृत्ति राशि।'
      },
      tips: {
        en: 'Keep your Jan Aadhaar and bank account linked to receive the scholarship without any delay.',
        hi: 'बिना किसी देरी के छात्रवृत्ति प्राप्त करने के लिए अपने जन आधार और बैंक खाते को लिंक रखें।'
      }
    }
  },
  {
    id: 'partition-deed-registration-form',
    category: 'Land and Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Partition Deed',
    serviceNameHi: 'विभाजन विलेख',
    formName: 'Partition Registration Form',
    formNameHi: 'विभाजन पंजीकरण फॉर्म',
    description: 'Legal division of jointly owned property among co-owners.',
    descriptionHi: 'सह-मालिकों के बीच संयुक्त रूप से स्वामित्व वाली संपत्ति का कानूनी विभाजन।',
    icon: Scale,
    guidelines: ['Property docs', 'Co-owners ID', 'Witnesses', 'Map of division'],
    guidelinesHi: ['संपत्ति दस्तावेज', 'सह-मालिकों की आईडी', 'गवाह', 'विभाजन का नक्शा'],
    searchQuery: 'Partition deed registration application form Rajasthan IGRS pdf',
    guide: {
      purpose: {
        en: 'To legally divide a joint property into individual shares among the co-owners.',
        hi: 'सह-मालिकों के बीच एक संयुक्त संपत्ति को व्यक्तिगत शेयरों में कानूनी रूप से विभाजित करना।'
      },
      eligibility: {
        en: 'Co-owners of a property who have mutually agreed to divide the property.',
        hi: 'एक संपत्ति के सह-मालिक जो संपत्ति को विभाजित करने के लिए पारस्परिक रूप से सहमत हुए हैं।'
      },
      documents: {
        en: ['Draft Partition Deed', 'Original Property Documents', 'ID Proof of all co-owners', 'Site Plan showing the division', 'Witnesses'],
        hi: ['ड्राफ्ट विभाजन विलेख', 'मूल संपत्ति दस्तावेज', 'सभी सह-मालिकों का आईडी प्रमाण', 'विभाजन दिखाने वाला साइट प्लान', 'गवाह']
      },
      process: {
        en: '1. Draft the partition deed on stamp paper. 2. Pay the registration fee and stamp duty. 3. Register the deed at the Sub-Registrar office. 4. Update the revenue records (Mutation).',
        hi: '1. स्टाम्प पेपर पर विभाजन विलेख का मसौदा तैयार करें। 2. पंजीकरण शुल्क और स्टाम्प शुल्क का भुगतान करें। 3. उप-पंजीयक कार्यालय में विलेख पंजीकृत करें। 4. राजस्व रिकॉर्ड अपडेट करें (उत्परिवर्तन)।'
      },
      tips: {
        en: 'A registered partition deed is essential to establish clear individual ownership and avoid future disputes.',
        hi: 'स्पष्ट व्यक्तिगत स्वामित्व स्थापित करने और भविष्य के विवादों से बचने के लिए एक पंजीकृत विभाजन विलेख आवश्यक है।'
      }
    }
  },
  {
    id: 'poa-registration-form',
    category: 'Land and Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Power of Attorney',
    serviceNameHi: 'मुख्तारनामा',
    formName: 'PoA Registration Form',
    formNameHi: 'मुख्तारनामा पंजीकरण फॉर्म',
    description: 'Authorize another person to act on your behalf for legal/property matters.',
    descriptionHi: 'कानूनी/संपत्ति मामलों के लिए अपनी ओर से कार्य करने के लिए किसी अन्य व्यक्ति को अधिकृत करें।',
    icon: FileSignature,
    guidelines: ['PoA draft', 'ID proof of both', 'Witnesses', 'Photo'],
    guidelinesHi: ['पीओए ड्राफ्ट', 'दोनों का आईडी प्रमाण', 'गवाह', 'फोटो'],
    searchQuery: 'Power of attorney registration application form Rajasthan IGRS pdf',
    guide: {
      purpose: {
        en: 'To grant legal authority to another person (agent) to handle property, financial, or legal affairs on behalf of the principal.',
        hi: 'प्रिंसिपल की ओर से संपत्ति, वित्तीय या कानूनी मामलों को संभालने के लिए किसी अन्य व्यक्ति (एजेंट) को कानूनी अधिकार प्रदान करना।'
      },
      eligibility: {
        en: 'Any person of sound mind who wants to delegate their authority to someone else.',
        hi: 'कोई भी स्वस्थ दिमाग वाला व्यक्ति जो अपना अधिकार किसी और को सौंपना चाहता है।'
      },
      documents: {
        en: ['Draft Power of Attorney', 'ID Proof of Principal and Agent', 'Passport Size Photos', 'Two Witnesses with ID Proof'],
        hi: ['ड्राफ्ट पावर ऑफ अटॉर्नी', 'प्रिंसिपल और एजेंट का आईडी प्रमाण', 'पासपोर्ट आकार के फोटो', 'आईडी प्रमाण के साथ दो गवाह']
      },
      process: {
        en: '1. Prepare the PoA document. 2. Pay the stamp duty. 3. Visit the Sub-Registrar office for registration. 4. Biometric verification of the principal.',
        hi: '1. पीओए दस्तावेज तैयार करें। 2. स्टाम्प शुल्क का भुगतान करें। 3. पंजीकरण के लिए उप-पंजीयक कार्यालय जाएं। 4. प्रिंसिपल का बायोमेट्रिक सत्यापन।'
      },
      tips: {
        en: 'Be specific about the powers being granted in the PoA to prevent misuse.',
        hi: 'दुरुपयोग को रोकने के लिए पीओए में दिए जा रहे अधिकारों के बारे में विशिष्ट रहें।'
      }
    }
  },
  {
    id: 'release-deed-registration-form',
    category: 'Land and Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Release Deed',
    serviceNameHi: 'रिलीज डीड',
    formName: 'Release Registration Form',
    formNameHi: 'रिलीज पंजीकरण फॉर्म',
    description: 'Renounce one\'s right or claim in a property in favor of another co-owner.',
    descriptionHi: 'किसी अन्य सह-मालिक के पक्ष में संपत्ति में अपने अधिकार या दावे को त्यागना।',
    icon: FileOutput,
    guidelines: ['Release deed draft', 'Property docs', 'ID proof', 'Witnesses'],
    guidelinesHi: ['रिलीज डीड ड्राफ्ट', 'संपत्ति दस्तावेज', 'आईडी प्रमाण', 'गवाह'],
    searchQuery: 'Release deed registration application form Rajasthan IGRS pdf',
    guide: {
      purpose: {
        en: 'To legally surrender one\'s share in a jointly owned property to another co-owner, often among family members.',
        hi: 'संयुक्त रूप से स्वामित्व वाली संपत्ति में अपने हिस्से को कानूनी रूप से दूसरे सह-मालिक को सौंपना, अक्सर परिवार के सदस्यों के बीच।'
      },
      eligibility: {
        en: 'Co-owners of a property who wish to give up their share to another owner.',
        hi: 'एक संपत्ति के सह-मालिक जो अपना हिस्सा दूसरे मालिक को छोड़ना चाहते हैं।'
      },
      documents: {
        en: ['Draft Release Deed', 'Original Property Documents', 'ID Proof of all parties', 'Witnesses', 'Stamp Duty Receipt'],
        hi: ['ड्राफ्ट रिलीज डीड', 'मूल संपत्ति दस्तावेज', 'सभी पक्षों का आईडी प्रमाण', 'गवाह', 'स्टाम्प शुल्क रसीद']
      },
      process: {
        en: '1. Draft the release deed. 2. Pay the registration fee and stamp duty. 3. Register the deed at the Sub-Registrar office. 4. Update revenue records.',
        hi: '1. रिलीज डीड का मसौदा तैयार करें। 2. पंजीकरण शुल्क और स्टाम्प शुल्क का भुगतान करें। 3. उप-पंजीयक कार्यालय में विलेख पंजीकृत करें। 4. राजस्व रिकॉर्ड अपडेट करें।'
      },
      tips: {
        en: 'Release deeds are commonly used in inheritance cases where one heir gives up their share to another.',
        hi: 'रिलीज डीड का उपयोग आमतौर पर विरासत के मामलों में किया जाता है जहां एक वारिस अपना हिस्सा दूसरे को छोड़ देता है।'
      }
    }
  },
  {
    id: 'exchange-deed-registration-form',
    category: 'Land and Property Forms',
    categoryHi: 'भूमि और संपत्ति फॉर्म',
    serviceName: 'Exchange Deed',
    serviceNameHi: 'विनिमय विलेख',
    formName: 'Exchange Registration Form',
    formNameHi: 'विनिमय पंजीकरण फॉर्म',
    description: 'Mutual transfer of ownership of two properties between two parties.',
    descriptionHi: 'दो पक्षों के बीच दो संपत्तियों के स्वामित्व का पारस्परिक हस्तांतरण।',
    icon: Repeat,
    guidelines: ['Exchange deed draft', 'Docs of both properties', 'ID proof', 'Witnesses'],
    guidelinesHi: ['विनिमय विलेख ड्राफ्ट', 'दोनों संपत्तियों के दस्तावेज', 'आईडी प्रमाण', 'गवाह'],
    searchQuery: 'Exchange deed registration application form Rajasthan IGRS pdf',
    guide: {
      purpose: {
        en: 'To legally exchange ownership of one property for another between two owners.',
        hi: 'दो मालिकों के बीच एक संपत्ति के स्वामित्व को दूसरे के लिए कानूनी रूप से विनिमय करना।'
      },
      eligibility: {
        en: 'Property owners who agree to swap their properties with each other.',
        hi: 'संपत्ति के मालिक जो एक-दूसरे के साथ अपनी संपत्तियों की अदला-बदली करने के लिए सहमत हैं।'
      },
      documents: {
        en: ['Draft Exchange Deed', 'Original Documents of both properties', 'ID Proof of both parties', 'Witnesses', 'Stamp Duty Receipt'],
        hi: ['ड्राफ्ट विनिमय विलेख', 'दोनों संपत्तियों के मूल दस्तावेज', 'दोनों पक्षों का आईडी प्रमाण', 'गवाह', 'स्टाम्प शुल्क रसीद']
      },
      process: {
        en: '1. Draft the exchange deed. 2. Pay stamp duty based on the property with higher value. 3. Register at the Sub-Registrar office. 4. Mutation of both properties.',
        hi: '1. विनिमय विलेख का मसौदा तैयार करें। 2. उच्च मूल्य वाली संपत्ति के आधार पर स्टाम्प शुल्क का भुगतान करें। 3. उप-पंजीयक कार्यालय में पंजीकरण करें। 4. दोनों संपत्तियों का उत्परिवर्तन।'
      },
      tips: {
        en: 'Ensure both properties have clear titles and no encumbrances before the exchange.',
        hi: 'विनिमय से पहले सुनिश्चित करें कि दोनों संपत्तियों के शीर्षक स्पष्ट हैं और कोई भार नहीं है।'
      }
    }
  },
  {
    id: 'ayushman-jivan-rakshak-form',
    category: 'Social Welfare Schemes',
    categoryHi: 'समाज कल्याण योजनाएं',
    serviceName: 'Jivan Rakshak',
    serviceNameHi: 'जीवन रक्षक',
    formName: 'Ayushman Jivan Rakshak Form',
    formNameHi: 'आयुष्मान जीवन रक्षक फॉर्म',
    description: 'Reward for people who help accident victims reach the hospital.',
    descriptionHi: 'अस्पताल पहुंचने में दुर्घटना पीड़ितों की मदद करने वाले लोगों के लिए इनाम।',
    icon: HeartPulse,
    guidelines: ['Help accident victim', 'Reach hospital in golden hour', 'ID proof'],
    guidelinesHi: ['दुर्घटना पीड़ित की मदद करें', 'गोल्डन ऑवर में अस्पताल पहुंचें', 'आईडी प्रमाण'],
    searchQuery: 'Mukhyamantri Ayushman Jivan Rakshak Yojana application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To encourage people to help road accident victims by providing a cash reward and a citation.',
        hi: 'नकद इनाम और प्रशस्ति पत्र प्रदान करके सड़क दुर्घटना पीड़ितों की मदद करने के लिए लोगों को प्रोत्साहित करना।'
      },
      eligibility: {
        en: 'Any person who takes a road accident victim to a hospital within the "Golden Hour".',
        hi: 'कोई भी व्यक्ति जो सड़क दुर्घटना पीड़ित को "गोल्डन ऑवर" के भीतर अस्पताल ले जाता है।'
      },
      documents: {
        en: ['Aadhaar Card', 'Bank Account Details', 'Incident Details from the Hospital'],
        hi: ['आधार कार्ड', 'बैंक खाते का विवरण', 'अस्पताल से घटना का विवरण']
      },
      process: {
        en: '1. Take the victim to the nearest hospital. 2. Hospital staff records the helper\'s details. 3. Verification by the Medical Officer. 4. Reward amount (Rs. 5000) credited to the helper\'s account.',
        hi: '1. पीड़ित को निकटतम अस्पताल ले जाएं। 2. अस्पताल के कर्मचारी सहायक का विवरण दर्ज करते हैं। 3. चिकित्सा अधिकारी द्वारा सत्यापन। 4. इनाम राशि (5000 रुपये) सहायक के खाते में जमा की जाती है।'
      },
      tips: {
        en: 'The "Good Samaritan" law protects you from any legal or police harassment for helping accident victims.',
        hi: '"गुड सेमेरिटन" कानून आपको दुर्घटना पीड़ितों की मदद करने के लिए किसी भी कानूनी या पुलिस उत्पीड़न से बचाता है।'
      }
    }
  },
  {
    id: 'pm-fasal-bima-form',
    category: 'Social Welfare Schemes',
    categoryHi: 'समाज कल्याण योजनाएं',
    serviceName: 'PM-FBY',
    serviceNameHi: 'पीएम-एफबीवाई',
    formName: 'Fasal Bima Application',
    formNameHi: 'फसल बीमा आवेदन',
    description: 'Crop insurance scheme to protect farmers against natural calamities.',
    descriptionHi: 'प्राकृतिक आपदाओं के खिलाफ किसानों की रक्षा के लिए फसल बीमा योजना।',
    icon: Sprout,
    guidelines: ['Farmer details', 'Land records', 'Sowing certificate'],
    guidelinesHi: ['किसान विवरण', 'भूमि रिकॉर्ड', 'बुवाई प्रमाण पत्र'],
    searchQuery: 'Pradhan Mantri Fasal Bima Yojana application form online Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To provide insurance coverage and financial support to farmers in the event of failure of any of the notified crops as a result of natural calamities, pests & diseases.',
        hi: 'प्राकृतिक आपदाओं, कीटों और रोगों के परिणामस्वरूप किसी भी अधिसूचित फसल के विफल होने की स्थिति में किसानों को बीमा कवरेज और वित्तीय सहायता प्रदान करना।'
      },
      eligibility: {
        en: 'All farmers including sharecroppers and tenant farmers growing notified crops in notified areas.',
        hi: 'अधिसूचित क्षेत्रों में अधिसूचित फसलें उगाने वाले बटाईदार और किरायेदार किसानों सहित सभी किसान।'
      },
      documents: {
        en: ['Aadhaar Card', 'Land Records (Jamabandi/Khasra)', 'Sowing Certificate', 'Bank Passbook', 'Jan Aadhaar Card'],
        hi: ['आधार कार्ड', 'भूमि रिकॉर्ड (खसरा/खतौनी)', 'बुवाई प्रमाण पत्र', 'बैंक पासबुक', 'जन आधार कार्ड']
      },
      process: {
        en: '1. Apply online via PMFBY portal or visit e-Mitra/Bank. 2. Pay the nominal premium. 3. In case of crop loss, report to the insurance company within 72 hours. 4. Claim settlement after survey.',
        hi: '1. PMFBY पोर्टल के माध्यम से ऑनलाइन आवेदन करें या ई-मित्र/बैंक पर जाएं। 2. मामूली प्रीमियम का भुगतान करें। 3. फसल नुकसान के मामले में, 72 घंटों के भीतर बीमा कंपनी को सूचित करें। 4. सर्वेक्षण के बाद दावा निपटान।'
      },
      tips: {
        en: 'Ensure your mobile number is linked with your bank account to receive claim notifications and payments.',
        hi: 'दावा सूचनाएं और भुगतान प्राप्त करने के लिए सुनिश्चित करें कि आपका मोबाइल नंबर आपके बैंक खाते से जुड़ा हुआ है।'
      }
    }
  },
  {
    id: 'pm-jan-dhan-form',
    category: 'Banking Services',
    categoryHi: 'बैंकिंग सेवाएं',
    serviceName: 'PM-JDY',
    serviceNameHi: 'पीएम-जेडीवाई',
    formName: 'Jan Dhan Account Form',
    formNameHi: 'जन धन खाता फॉर्म',
    description: 'Zero balance savings account with insurance and overdraft facility.',
    descriptionHi: 'बीमा और ओवरड्राफ्ट सुविधा के साथ शून्य शेष बचत खाता।',
    icon: Landmark,
    guidelines: ['No existing account', 'Aadhaar card', 'Photo'],
    guidelinesHi: ['कोई मौजूदा खाता नहीं', 'आधार कार्ड', 'फोटो'],
    searchQuery: 'Pradhan Mantri Jan Dhan Yojana account opening form pdf',
    guide: {
      purpose: {
        en: 'To ensure access to financial services, namely, banking/savings & deposit accounts, remittance, credit, insurance, pension in an affordable manner.',
        hi: 'किफायती तरीके से वित्तीय सेवाओं, जैसे बैंकिंग/बचत और जमा खाते, प्रेषण, ऋण, बीमा, पेंशन तक पहुंच सुनिश्चित करना।'
      },
      eligibility: {
        en: 'Any Indian citizen who does not have a bank account.',
        hi: 'कोई भी भारतीय नागरिक जिसके पास बैंक खाता नहीं है।'
      },
      documents: {
        en: ['Aadhaar Card (Mandatory)', 'Voter ID / PAN Card (if Aadhaar not available)', 'Two Passport Size Photographs'],
        hi: ['आधार कार्ड (अनिवार्य)', 'वोटर आईडी / पैन कार्ड (यदि आधार उपलब्ध नहीं है)', 'दो पासपोर्ट आकार के फोटो']
      },
      process: {
        en: '1. Visit any bank branch or Bank Mitra. 2. Fill the PMJDY account opening form. 3. Submit Aadhaar and photos. 4. Account is opened with zero balance and RuPay card is issued.',
        hi: '1. किसी भी बैंक शाखा या बैंक मित्र पर जाएं। 2. PMJDY खाता खोलने का फॉर्म भरें। 3. आधार और फोटो जमा करें। 4. खाता शून्य शेष के साथ खोला जाता है और रुपे कार्ड जारी किया जाता है।'
      },
      tips: {
        en: 'Keep your RuPay card active by using it at least once in 90 days to stay eligible for accidental insurance coverage.',
        hi: 'दुर्घटना बीमा कवरेज के लिए पात्र बने रहने के लिए 90 दिनों में कम से कम एक बार अपने रुपे कार्ड का उपयोग करके उसे सक्रिय रखें।'
      }
    }
  },
  {
    id: 'pm-jjby-insurance-form',
    category: 'Banking Services',
    categoryHi: 'बैंकिंग सेवाएं',
    serviceName: 'PM-JJBY',
    serviceNameHi: 'पीएम-जेजेबीवाई',
    formName: 'Jeevan Jyoti Bima Form',
    formNameHi: 'जीवन ज्योति बीमा फॉर्म',
    description: 'Life insurance cover of Rs. 2 Lakh at a low premium.',
    descriptionHi: 'कम प्रीमियम पर 2 लाख रुपये का जीवन बीमा कवर।',
    icon: Shield,
    guidelines: ['Age 18-50 years', 'Bank account', 'Consent for auto-debit'],
    guidelinesHi: ['आयु 18-50 वर्ष', 'बैंक खाता', 'ऑटो-डेबिट के लिए सहमति'],
    searchQuery: 'Pradhan Mantri Jeevan Jyoti Bima Yojana enrollment form pdf',
    guide: {
      purpose: {
        en: 'To provide affordable life insurance coverage to people, especially the poor and underprivileged.',
        hi: 'लोगों को, विशेष रूप से गरीबों और वंचितों को सस्ती जीवन बीमा कवरेज प्रदान करना।'
      },
      eligibility: {
        en: 'Bank account holders aged between 18 and 50 years.',
        hi: '18 से 50 वर्ष की आयु के बैंक खाताधारक।'
      },
      documents: {
        en: ['Aadhaar Card', 'Bank Passbook', 'Consent Form for Auto-debit of Premium'],
        hi: ['आधार कार्ड', 'बैंक पासबुक', 'प्रीमियम के ऑटो-डेबिट के लिए सहमति फॉर्म']
      },
      process: {
        en: '1. Visit your bank or apply via net banking. 2. Fill the enrollment form and provide nominee details. 3. Premium is auto-debited from the account annually in May/June.',
        hi: '1. अपने बैंक पर जाएं या नेट बैंकिंग के माध्यम से आवेदन करें। 2. नामांकन फॉर्म भरें और नामांकित व्यक्ति का विवरण प्रदान करें। 3. प्रीमियम हर साल मई/जून में खाते से ऑटो-डेबिट किया जाता है।'
      },
      tips: {
        en: 'The insurance cover is for 1 year (June 1 to May 31) and must be renewed every year.',
        hi: 'बीमा कवर 1 वर्ष (1 जून से 31 मई) के लिए है और इसे हर साल नवीनीकृत किया जाना चाहिए।'
      }
    }
  },
  {
    id: 'pm-sby-insurance-form',
    category: 'Banking Services',
    categoryHi: 'बैंकिंग सेवाएं',
    serviceName: 'PM-SBY',
    serviceNameHi: 'पीएम-एसबीवाई',
    formName: 'Suraksha Bima Form',
    formNameHi: 'सुरक्षा बीमा फॉर्म',
    description: 'Accidental insurance cover of Rs. 2 Lakh at Rs. 20/year.',
    descriptionHi: '20 रुपये/वर्ष पर 2 लाख रुपये का दुर्घटना बीमा कवर।',
    icon: Shield,
    guidelines: ['Age 18-70 years', 'Bank account', 'Consent for auto-debit'],
    guidelinesHi: ['आयु 18-70 वर्ष', 'बैंक खाता', 'ऑटो-डेबिट के लिए सहमति'],
    searchQuery: 'Pradhan Mantri Suraksha Bima Yojana enrollment form pdf',
    guide: {
      purpose: {
        en: 'To provide very low-cost accidental death and disability insurance to the masses.',
        hi: 'जनता को बहुत कम लागत वाली दुर्घटना मृत्यु और विकलांगता बीमा प्रदान करना।'
      },
      eligibility: {
        en: 'Bank account holders aged between 18 and 70 years.',
        hi: '18 से 70 वर्ष की आयु के बैंक खाताधारक।'
      },
      documents: {
        en: ['Aadhaar Card', 'Bank Passbook', 'Enrollment Form with Nominee Details'],
        hi: ['आधार कार्ड', 'बैंक पासबुक', 'नामांकित विवरण के साथ नामांकन फॉर्म']
      },
      process: {
        en: '1. Apply at your bank branch or via mobile/net banking. 2. Sign the auto-debit mandate. 3. Rs. 20 is debited annually from your account.',
        hi: '1. अपनी बैंक शाखा में या मोबाइल/नेट बैंकिंग के माध्यम से आवेदन करें। 2. ऑटो-डेबिट जनादेश पर हस्ताक्षर करें। 3. आपके खाते से सालाना 20 रुपये काटे जाते हैं।'
      },
      tips: {
        en: 'This is the cheapest accidental insurance in India; ensure all family members are enrolled.',
        hi: 'यह भारत में सबसे सस्ता दुर्घटना बीमा है; सुनिश्चित करें कि परिवार के सभी सदस्य नामांकित हैं।'
      }
    }
  },
  {
    id: 'pm-kusum-yojana-form',
    category: 'Social Welfare Schemes',
    categoryHi: 'समाज कल्याण योजनाएं',
    serviceName: 'PM-KUSUM',
    serviceNameHi: 'पीएम-कुसुम',
    formName: 'Solar Pump Application',
    formNameHi: 'सोलर पंप आवेदन',
    description: 'Subsidy for installing solar water pumps for irrigation.',
    descriptionHi: 'सिंचाई के लिए सोलर वाटर पंप लगाने के लिए सब्सिडी।',
    icon: Sprout,
    guidelines: ['Farmer/Group of farmers', 'Land ownership', 'Water source'],
    guidelinesHi: ['किसान/किसानों का समूह', 'भूमि स्वामित्व', 'जल स्रोत'],
    searchQuery: 'PM KUSUM yojana application form Rajasthan solar pump pdf',
    guide: {
      purpose: {
        en: 'To provide energy security to farmers and promote the use of solar energy for irrigation.',
        hi: 'किसानों को ऊर्जा सुरक्षा प्रदान करना और सिंचाई के लिए सौर ऊर्जा के उपयोग को बढ़ावा देना।'
      },
      eligibility: {
        en: 'Individual farmers, groups of farmers, cooperatives, and panchayats.',
        hi: 'व्यक्तिगत किसान, किसानों के समूह, सहकारी समितियां और पंचायतें।'
      },
      documents: {
        en: ['Aadhaar Card', 'Jan Aadhaar Card', 'Land Records (Jamabandi)', 'Bank Passbook', 'Passport Size Photograph'],
        hi: ['आधार कार्ड', 'जन आधार कार्ड', 'भूमि रिकॉर्ड (जमाबंदी)', 'बैंक पासबुक', 'पासपोर्ट आकार का फोटो']
      },
      process: {
        en: '1. Apply online on the RajKisan portal or PM-KUSUM portal. 2. Select the type of solar pump (Surface/Submersible). 3. Pay the farmer\'s share of the cost. 4. Installation by the department/vendor.',
        hi: '1. राजकिसान पोर्टल या पीएम-कुसुम पोर्टल पर ऑनलाइन आवेदन करें। 2. सोलर पंप का प्रकार चुनें (सतह/सबमर्सिबल)। 3. लागत के किसान के हिस्से का भुगतान करें। 4. विभाग/विक्रेता द्वारा स्थापना।'
      },
      tips: {
        en: 'Solar pumps reduce dependency on diesel and electricity, saving significant costs for farmers.',
        hi: 'सोलर पंप डीजल और बिजली पर निर्भरता कम करते हैं, जिससे किसानों की महत्वपूर्ण लागत बचती है।'
      }
    }
  },
  {
    id: 'startup-india-form',
    category: 'Business Forms',
    categoryHi: 'व्यावसायिक फॉर्म',
    serviceName: 'Startup India',
    serviceNameHi: 'स्टार्टअप इंडिया',
    formName: 'Startup Recognition Form',
    formNameHi: 'स्टार्टअप मान्यता फॉर्म',
    description: 'Recognition for new businesses to avail tax benefits and incentives.',
    descriptionHi: 'कर लाभ और प्रोत्साहन प्राप्त करने के लिए नए व्यवसायों के लिए मान्यता।',
    icon: Rocket,
    guidelines: ['Incorporated < 10 years', 'Turnover < 100 Cr', 'Innovative idea'],
    guidelinesHi: ['निगमन < 10 वर्ष', 'टर्नओवर < 100 करोड़', 'नवाचारी विचार'],
    searchQuery: 'Startup India recognition application form DPIIT online pdf',
    guide: {
      purpose: {
        en: 'To get recognized as a "Startup" by the DPIIT to avail various benefits under the Startup India initiative.',
        hi: 'स्टार्टअप इंडिया पहल के तहत विभिन्न लाभ प्राप्त करने के लिए DPIIT द्वारा "स्टार्टअप" के रूप में मान्यता प्राप्त करना।'
      },
      eligibility: {
        en: 'Private Limited Company, Partnership Firm, or LLP incorporated in India not more than 10 years ago.',
        hi: 'भारत में 10 साल से अधिक समय पहले निगमित प्राइवेट लिमिटेड कंपनी, पार्टनरशिप फर्म या एलएलपी।'
      },
      documents: {
        en: ['Certificate of Incorporation/Registration', 'Write-up on the innovative nature of the business', 'Proof of funding (if any)', 'Awards/Recognition (if any)'],
        hi: ['निगमन/पंजीकरण का प्रमाण पत्र', 'व्यवसाय की नवीन प्रकृति पर संक्षिप्त विवरण', 'फंडिंग का प्रमाण (यदि कोई हो)', 'पुरस्कार/मान्यता (यदि कोई हो)']
      },
      process: {
        en: '1. Register on the Startup India portal. 2. Apply for DPIIT recognition. 3. Fill the form and upload the write-up. 4. Verification by the Inter-Ministerial Board. 5. Recognition certificate issued.',
        hi: '1. स्टार्टअप इंडिया पोर्टल पर पंजीकरण करें। 2. DPIIT मान्यता के लिए आवेदन करें। 3. फॉर्म भरें और संक्षिप्त विवरण अपलोड करें। 4. अंतर-मंत्रालयी बोर्ड द्वारा सत्यापन। 5. मान्यता प्रमाण पत्र जारी।'
      },
      tips: {
        en: 'Focus on how your startup is working towards innovation, development, or improvement of products or services.',
        hi: 'इस बात पर ध्यान केंद्रित करें कि आपका स्टार्टअप उत्पादों या सेवाओं के नवाचार, विकास या सुधार की दिशा में कैसे काम कर रहा है।'
      }
    }
  },
  {
    id: 'gem-portal-seller-form',
    category: 'Business Forms',
    categoryHi: 'व्यावसायिक फॉर्म',
    serviceName: 'GeM Portal',
    serviceNameHi: 'जीईएम पोर्टल',
    formName: 'Seller Registration Form',
    formNameHi: 'विक्रेता पंजीकरण फॉर्म',
    description: 'Registration for businesses to sell products/services to government departments.',
    descriptionHi: 'सरकारी विभागों को उत्पाद/सेवाएं बेचने के लिए व्यवसायों के लिए पंजीकरण।',
    icon: ShoppingBag,
    guidelines: ['Aadhaar/PAN', 'Bank details', 'Business address'],
    guidelinesHi: ['आधार/पैन', 'बैंक विवरण', 'व्यावसायिक पता'],
    searchQuery: 'GeM portal seller registration form online guide pdf',
    guide: {
      purpose: {
        en: 'To register as a seller on the Government e-Marketplace (GeM) to participate in government tenders and direct purchases.',
        hi: 'सरकारी निविदाओं और सीधी खरीद में भाग लेने के लिए गवर्नमेंट ई-मार्केटप्लेस (GeM) पर एक विक्रेता के रूप में पंजीकरण करना।'
      },
      eligibility: {
        en: 'Proprietors, Partnerships, Companies, and MSMEs selling goods or services.',
        hi: 'माल या सेवाएं बेचने वाले प्रोपराइटर, पार्टनरशिप, कंपनियां और एमएसएमई।'
      },
      documents: {
        en: ['PAN Card', 'Aadhaar Card of Authorized Person', 'GSTIN (if applicable)', 'Bank Account Details', 'Udyam Registration (for MSMEs)'],
        hi: ['पैन कार्ड', 'अधिकृत व्यक्ति का आधार कार्ड', 'जीएसटीआईएन (यदि लागू हो)', 'बैंक खाते का विवरण', 'उद्यम पंजीकरण (एमएसएमई के लिए)']
      },
      process: {
        en: '1. Visit GeM portal and select "Seller Registration". 2. Verify Aadhaar/PAN. 3. Fill business details and office locations. 4. Complete e-KYC. 5. List products/services in the marketplace.',
        hi: '1. GeM पोर्टल पर जाएं और "विक्रेता पंजीकरण" चुनें। 2. आधार/पैन सत्यापित करें। 3. व्यावसायिक विवरण और कार्यालय स्थान भरें। 4. ई-केवाईसी पूरा करें। 5. मार्केटप्लेस में उत्पादों/सेवाओं को सूचीबद्ध करें।'
      },
      tips: {
        en: 'GeM registration is free. Keep your profile updated to receive notifications for relevant tenders.',
        hi: 'GeM पंजीकरण मुफ्त है। प्रासंगिक निविदाओं के लिए सूचनाएं प्राप्त करने के लिए अपनी प्रोफ़ाइल अपडेट रखें।'
      }
    }
  },
  {
    id: 'iec-code-form',
    category: 'Business Forms',
    categoryHi: 'व्यावसायिक फॉर्म',
    serviceName: 'Import Export Code',
    serviceNameHi: 'आयात निर्यात कोड',
    formName: 'IEC Application Form',
    formNameHi: 'आईईसी आवेदन फॉर्म',
    description: 'Mandatory code for businesses involved in import or export of goods/services.',
    descriptionHi: 'माल/सेवाओं के आयात या निर्यात में शामिल व्यवसायों के लिए अनिवार्य कोड।',
    icon: Ship,
    guidelines: ['PAN card', 'Bank account', 'Digital signature'],
    guidelinesHi: ['पैन कार्ड', 'बैंक खाता', 'डिजिटल हस्ताक्षर'],
    searchQuery: 'Import Export Code IEC application form online DGFT pdf',
    guide: {
      purpose: {
        en: 'To obtain a 10-digit code required for importing or exporting goods and services from/to India.',
        hi: 'भारत से/को माल और सेवाओं के आयात या निर्यात के लिए आवश्यक 10-अंकीय कोड प्राप्त करना।'
      },
      eligibility: {
        en: 'Any person or business entity intending to engage in international trade.',
        hi: 'अंतरराष्ट्रीय व्यापार में शामिल होने का इरादा रखने वाला कोई भी व्यक्ति या व्यावसायिक इकाई।'
      },
      documents: {
        en: ['PAN Card of the entity', 'Cancelled Cheque of the bank account', 'Address Proof of the business', 'Digital Signature Certificate (DSC)'],
        hi: ['इकाई का पैन कार्ड', 'बैंक खाते का रद्द चेक', 'व्यवसाय का पता प्रमाण', 'डिजिटल हस्ताक्षर प्रमाण पत्र (DSC)']
      },
      process: {
        en: '1. Apply online on the DGFT portal. 2. Fill the ANF-2A form. 3. Upload documents and pay the application fee. 4. IEC is issued instantly in most cases.',
        hi: '1. DGFT पोर्टल पर ऑनलाइन आवेदन करें। 2. ANF-2A फॉर्म भरें। 3. दस्तावेज अपलोड करें और आवेदन शुल्क का भुगतान करें। 4. अधिकांश मामलों में आईईसी तुरंत जारी किया जाता है।'
      },
      tips: {
        en: 'IEC is valid for a lifetime and does not require renewal, but must be updated annually on the portal.',
        hi: 'आईईसी जीवन भर के लिए मान्य है और इसके नवीनीकरण की आवश्यकता नहीं है, लेकिन पोर्टल पर सालाना अपडेट किया जाना चाहिए।'
      }
    }
  },
  {
    id: 'trademark-registration-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Trademark',
    serviceNameHi: 'ट्रेडमार्क',
    formName: 'Trademark Application (Form TM-A)',
    formNameHi: 'ट्रेडमार्क आवेदन (फॉर्म TM-A)',
    description: 'Protect your brand name, logo, or slogan from unauthorized use.',
    descriptionHi: 'अपने ब्रांड नाम, लोगो या स्लोगन को अनधिकृत उपयोग से सुरक्षित रखें।',
    icon: ShieldCheck,
    guidelines: ['Unique brand name', 'Logo design', 'Class of goods/services'],
    guidelinesHi: ['अद्वितीय ब्रांड नाम', 'लोगो डिजाइन', 'माल/सेवाओं की श्रेणी'],
    searchQuery: 'Trademark registration application form TM-A online India pdf',
    guide: {
      purpose: {
        en: 'To legally register a brand name, logo, or slogan to prevent others from using it for similar goods or services.',
        hi: 'समान माल या सेवाओं के लिए दूसरों को इसका उपयोग करने से रोकने के लिए कानूनी रूप से ब्रांड नाम, लोगो या स्लोगन पंजीकृत करना।'
      },
      eligibility: {
        en: 'Individuals, companies, or organizations using or intending to use a unique mark.',
        hi: 'अद्वितीय चिह्न का उपयोग करने वाले या उपयोग करने का इरादा रखने वाले व्यक्ति, कंपनियां या संगठन।'
      },
      documents: {
        en: ['Logo/Mark image', 'ID Proof of the applicant', 'Power of Attorney (if filed by agent)', 'User Affidavit (if mark is already in use)'],
        hi: ['लोगो/चिह्न छवि', 'आवेदक का आईडी प्रमाण', 'पावर ऑफ अटॉर्नी (यदि एजेंट द्वारा दायर किया गया है)', 'उपयोगकर्ता हलफनामा (यदि चिह्न पहले से ही उपयोग में है)']
      },
      process: {
        en: '1. Conduct a trademark search. 2. File Form TM-A online on the IP India portal. 3. Examination by the Registrar. 4. Publication in the Trademark Journal. 5. Registration certificate issued if no opposition.',
        hi: '1. ट्रेडमार्क खोज करें। 2. IP इंडिया पोर्टल पर ऑनलाइन फॉर्म TM-A भरें। 3. रजिस्ट्रार द्वारा जांच। 4. ट्रेडमार्क जर्नल में प्रकाशन। 5. कोई विरोध न होने पर पंजीकरण प्रमाण पत्र जारी।'
      },
      tips: {
        en: 'You can start using the ™ symbol as soon as you file the application. Use ® only after registration.',
        hi: 'आवेदन दाखिल करते ही आप ™ प्रतीक का उपयोग शुरू कर सकते हैं। पंजीकरण के बाद ही ® का उपयोग करें।'
      }
    }
  },
  {
    id: 'copyright-registration-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Copyright',
    serviceNameHi: 'कॉपीराइट',
    formName: 'Copyright Application (Form XIV)',
    formNameHi: 'कॉपीराइट आवेदन (फॉर्म XIV)',
    description: 'Protect original literary, artistic, or musical works.',
    descriptionHi: 'मूल साहित्यिक, कलात्मक या संगीत कार्यों को सुरक्षित रखें।',
    icon: Copyright,
    guidelines: ['Original work', 'Author details', 'Work category'],
    guidelinesHi: ['मूल कार्य', 'लेखक विवरण', 'कार्य श्रेणी'],
    searchQuery: 'Copyright registration application form XIV online India pdf',
    guide: {
      purpose: {
        en: 'To obtain legal protection for original creative works like books, music, paintings, and software.',
        hi: 'किताबों, संगीत, पेंटिंग और सॉफ्टवेयर जैसे मूल रचनात्मक कार्यों के लिए कानूनी सुरक्षा प्राप्त करना।'
      },
      eligibility: {
        en: 'Authors, creators, or owners of original artistic, literary, musical, or cinematographic works.',
        hi: 'मूल कलात्मक, साहित्यिक, संगीत या सिनेमाई कार्यों के लेखक, निर्माता या मालिक।'
      },
      documents: {
        en: ['Three copies of the work', 'ID Proof of the applicant', 'No Objection Certificate (NOC) from author (if different from applicant)', 'Power of Attorney (if applicable)'],
        hi: ['कार्य की तीन प्रतियां', 'आवेदक का आईडी प्रमाण', 'लेखक से अनापत्ति प्रमाण पत्र (NOC) (यदि आवेदक से भिन्न हो)', 'पावर ऑफ अटॉर्नी (यदि लागू हो)']
      },
      process: {
        en: '1. Apply online on the Copyright Office portal. 2. Fill Form XIV and pay the fee. 3. Send physical copies of the work to the office. 4. Mandatory 30-day waiting period for objections. 5. Registration granted after examination.',
        hi: '1. कॉपीराइट कार्यालय पोर्टल पर ऑनलाइन आवेदन करें। 2. फॉर्म XIV भरें और शुल्क का भुगतान करें। 3. कार्य की भौतिक प्रतियां कार्यालय भेजें। 4. आपत्तियों के लिए अनिवार्य 30-दिन की प्रतीक्षा अवधि। 5. जांच के बाद पंजीकरण प्रदान किया गया।'
      },
      tips: {
        en: 'Copyright protection is automatic upon creation, but registration provides strong evidence in case of legal disputes.',
        hi: 'कॉपीराइट सुरक्षा निर्माण पर स्वचालित होती है, लेकिन पंजीकरण कानूनी विवादों के मामले में मजबूत सबूत प्रदान करता है।'
      }
    }
  },
  {
    id: 'patent-registration-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Patent',
    serviceNameHi: 'पेटेंट',
    formName: 'Patent Application (Form 1)',
    formNameHi: 'पेटेंट आवेदन (फॉर्म 1)',
    description: 'Protect new inventions and technical processes.',
    descriptionHi: 'नए आविष्कारों और तकनीकी प्रक्रियाओं को सुरक्षित रखें।',
    icon: Lightbulb,
    guidelines: ['Novelty', 'Inventive step', 'Industrial application'],
    guidelinesHi: ['नवीनता', 'नवाचारी कदम', 'औद्योगिक अनुप्रयोग'],
    searchQuery: 'Patent registration application form 1 online India pdf',
    guide: {
      purpose: {
        en: 'To grant exclusive rights to an inventor for a new and useful invention for a period of 20 years.',
        hi: 'एक आविष्कारक को 20 वर्ष की अवधि के लिए एक नए और उपयोगी आविष्कार के लिए विशेष अधिकार प्रदान करना।'
      },
      eligibility: {
        en: 'Any person claiming to be the true and first inventor of an invention.',
        hi: 'कोई भी व्यक्ति जो किसी आविष्कार का सच्चा और पहला आविष्कारक होने का दावा करता है।'
      },
      documents: {
        en: ['Form 1 (Application)', 'Form 2 (Provisional or Complete Specification)', 'Form 3 (Statement & Undertaking)', 'Drawings of the invention', 'Abstract of the invention'],
        hi: ['फॉर्म 1 (आवेदन)', 'फॉर्म 2 (अनंतिम या पूर्ण विनिर्देश)', 'फॉर्म 3 (कथन और उपक्रम)', 'आविष्कार के चित्र', 'आविष्कार का सार']
      },
      process: {
        en: '1. File a patent application (Form 1). 2. Publication of the application (after 18 months). 3. Request for examination (Form 18). 4. Response to examination report. 5. Grant of patent.',
        hi: '1. पेटेंट आवेदन (फॉर्म 1) दाखिल करें। 2. आवेदन का प्रकाशन (18 महीने बाद)। 3. जांच के लिए अनुरोध (फॉर्म 18)। 4. जांच रिपोर्ट का जवाब। 5. पेटेंट का अनुदान।'
      },
      tips: {
        en: 'Do not disclose your invention in public before filing a patent application to maintain "novelty".',
        hi: '"नवीनता" बनाए रखने के लिए पेटेंट आवेदन दाखिल करने से पहले अपने आविष्कार का सार्वजनिक रूप से खुलासा न करें।'
      }
    }
  },
  {
    id: 'shop-establishment-form',
    category: 'Business Forms',
    categoryHi: 'व्यावसायिक फॉर्म',
    serviceName: 'Shop Registration',
    serviceNameHi: 'दुकान पंजीकरण',
    formName: 'Gumasta / Shop Act Form',
    formNameHi: 'गुमास्ता / शॉप एक्ट फॉर्म',
    description: 'Mandatory registration for shops and commercial establishments.',
    descriptionHi: 'दुकानों और व्यावसायिक प्रतिष्ठानों के लिए अनिवार्य पंजीकरण।',
    icon: Store,
    guidelines: ['Business address', 'Owner ID', 'Employee details'],
    guidelinesHi: ['व्यावसायिक पता', 'मालिक की आईडी', 'कर्मचारी विवरण'],
    searchQuery: 'Shop and establishment act registration form Rajasthan online pdf',
    guide: {
      purpose: {
        en: 'To regulate the working conditions, hours, and rights of employees in shops and commercial establishments.',
        hi: 'दुकानों और व्यावसायिक प्रतिष्ठानों में काम करने की स्थिति, घंटे और कर्मचारियों के अधिकारों को विनियमित करना।'
      },
      eligibility: {
        en: 'Every shop, restaurant, hotel, theater, or commercial establishment within municipal limits.',
        hi: 'नगरपालिका सीमा के भीतर प्रत्येक दुकान, रेस्तरां, होटल, थिएटर या व्यावसायिक प्रतिष्ठान।'
      },
      documents: {
        en: ['PAN Card of Owner', 'Aadhaar Card', 'Photo of the Shop with Name Board', 'Rent Agreement / Ownership Proof', 'List of Employees'],
        hi: ['मालिक का पैन कार्ड', 'आधार कार्ड', 'नाम बोर्ड के साथ दुकान की फोटो', 'किराया समझौता / स्वामित्व प्रमाण', 'कर्मचारियों की सूची']
      },
      process: {
        en: '1. Apply online on the state labor department portal. 2. Fill the registration form and upload photos. 3. Pay the registration fee based on the number of employees. 4. Certificate is issued digitally.',
        hi: '1. राज्य श्रम विभाग पोर्टल पर ऑनलाइन आवेदन करें। 2. पंजीकरण फॉर्म भरें और फोटो अपलोड करें। 3. कर्मचारियों की संख्या के आधार पर पंजीकरण शुल्क का भुगतान करें। 4. प्रमाण पत्र डिजिटल रूप से जारी किया जाता है।'
      },
      tips: {
        en: 'The registration certificate must be displayed prominently in the shop.',
        hi: 'पंजीकरण प्रमाण पत्र दुकान में प्रमुखता से प्रदर्शित किया जाना चाहिए।'
      }
    }
  },
  {
    id: 'professional-tax-form',
    category: 'Business Forms',
    categoryHi: 'व्यावसायिक फॉर्म',
    serviceName: 'Professional Tax',
    serviceNameHi: 'पेशेवर कर',
    formName: 'PT Registration Form',
    formNameHi: 'पीटी पंजीकरण फॉर्म',
    description: 'Tax levied by state governments on salaried individuals and professionals.',
    descriptionHi: 'राज्य सरकारों द्वारा वेतनभोगी व्यक्तियों और पेशेवरों पर लगाया जाने वाला कर।',
    icon: Briefcase,
    guidelines: ['Business registration', 'Employee list', 'Salary details'],
    guidelinesHi: ['व्यावसायिक पंजीकरण', 'कर्मचारी सूची', 'वेतन विवरण'],
    searchQuery: 'Professional tax registration form online Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To register an employer or a self-employed professional for the payment of professional tax to the state government.',
        hi: 'राज्य सरकार को पेशेवर कर के भुगतान के लिए एक नियोक्ता या स्व-नियोजित पेशेवर को पंजीकृत करना।'
      },
      eligibility: {
        en: 'Employers with one or more employees, and professionals like doctors, lawyers, and CAs.',
        hi: 'एक या अधिक कर्मचारियों वाले नियोक्ता, और डॉक्टर, वकील और सीए जैसे पेशेवर।'
      },
      documents: {
        en: ['PAN Card', 'Aadhaar Card', 'Shop Act / Incorporation Certificate', 'Bank Account Details', 'Salary Register'],
        hi: ['पैन कार्ड', 'आधार कार्ड', 'शॉप एक्ट / निगमन प्रमाण पत्र', 'बैंक खाते का विवरण', 'वेतन रजिस्टर']
      },
      process: {
        en: '1. Apply online on the state commercial tax department portal. 2. Obtain PTRC (for employees) and PTEC (for the entity). 3. Pay the tax monthly or annually based on state rules.',
        hi: '1. राज्य वाणिज्यिक कर विभाग पोर्टल पर ऑनलाइन आवेदन करें। 2. PTRC (कर्मचारियों के लिए) और PTEC (इकाई के लिए) प्राप्त करें। 3. राज्य के नियमों के आधार पर मासिक या वार्षिक कर का भुगतान करें।'
      },
      tips: {
        en: 'Professional tax is a deductible expense for businesses under the Income Tax Act.',
        hi: 'पेशेवर कर आयकर अधिनियम के तहत व्यवसायों के लिए एक कटौती योग्य खर्च है।'
      }
    }
  },
  {
    id: 'esic-registration-form',
    category: 'Business Forms',
    categoryHi: 'व्यावसायिक फॉर्म',
    serviceName: 'ESIC',
    serviceNameHi: 'ईएसआईसी',
    formName: 'ESIC Registration (Form 1)',
    formNameHi: 'ईएसआईसी पंजीकरण (फॉर्म 1)',
    description: 'Social security and health insurance for employees.',
    descriptionHi: 'कर्मचारियों के लिए सामाजिक सुरक्षा और स्वास्थ्य बीमा।',
    icon: HeartPulse,
    guidelines: ['10+ employees', 'Salary < 21k', 'Business details'],
    guidelinesHi: ['10+ कर्मचारी', 'वेतन < 21 हजार', 'व्यावसायिक विवरण'],
    searchQuery: 'ESIC employer registration form 1 online pdf',
    guide: {
      purpose: {
        en: 'To provide medical and cash benefits to employees in case of sickness, maternity, or injury.',
        hi: 'बीमारी, मातृत्व या चोट के मामले में कर्मचारियों को चिकित्सा और नकद लाभ प्रदान करना।'
      },
      eligibility: {
        en: 'Establishments with 10 or more employees (in some states 20) earning up to Rs. 21,000 per month.',
        hi: '10 या अधिक कर्मचारियों वाले प्रतिष्ठान (कुछ राज्यों में 20) जो प्रति माह 21,000 रुपये तक कमाते हैं।'
      },
      documents: {
        en: ['Registration Certificate of the entity', 'PAN Card', 'Bank Account Details', 'List of Employees with Aadhaar', 'Address Proof'],
        hi: ['इकाई का पंजीकरण प्रमाण पत्र', 'पैन कार्ड', 'बैंक खाते का विवरण', 'आधार के साथ कर्मचारियों की सूची', 'पता प्रमाण']
      },
      process: {
        en: '1. Register on the ESIC portal. 2. Fill the employer registration form. 3. Upload documents and employee details. 4. Obtain the 17-digit ESIC code.',
        hi: '1. ईएसआईसी पोर्टल पर पंजीकरण करें। 2. नियोक्ता पंजीकरण फॉर्म भरें। 3. दस्तावेज और कर्मचारी विवरण अपलोड करें। 4. 17-अंकीय ईएसआईसी कोड प्राप्त करें।'
      },
      tips: {
        en: 'Employers must contribute 3.25% and employees 0.75% of the gross salary towards ESIC.',
        hi: 'नियोक्ताओं को ईएसआईसी के लिए सकल वेतन का 3.25% और कर्मचारियों को 0.75% योगदान देना होगा।'
      }
    }
  },
  {
    id: 'epf-registration-form',
    category: 'Business Forms',
    categoryHi: 'व्यावसायिक फॉर्म',
    serviceName: 'EPF',
    serviceNameHi: 'ईपीएफ',
    formName: 'EPF Registration Form',
    formNameHi: 'ईपीएफ पंजीकरण फॉर्म',
    description: 'Retirement benefit scheme for employees.',
    descriptionHi: 'कर्मचारियों के लिए सेवानिवृत्ति लाभ योजना।',
    icon: PiggyBank,
    guidelines: ['20+ employees', 'Salary details', 'Bank details'],
    guidelinesHi: ['20+ कर्मचारी', 'वेतन विवरण', 'बैंक विवरण'],
    searchQuery: 'EPF employer registration form online EPFO portal pdf',
    guide: {
      purpose: {
        en: 'To provide a provident fund, pension, and insurance benefit to employees after retirement or in case of death.',
        hi: 'सेवानिवृत्ति के बाद या मृत्यु के मामले में कर्मचारियों को भविष्य निधि, पेंशन और बीमा लाभ प्रदान करना।'
      },
      eligibility: {
        en: 'Establishments with 20 or more employees are mandatory to register. Smaller units can register voluntarily.',
        hi: '20 या अधिक कर्मचारियों वाले प्रतिष्ठानों के लिए पंजीकरण अनिवार्य है। छोटी इकाइयां स्वेच्छा से पंजीकरण कर सकती हैं।'
      },
      documents: {
        en: ['PAN Card of the entity', 'Incorporation Certificate', 'Bank Account Details', 'Address Proof', 'List of Employees'],
        hi: ['इकाई का पैन कार्ड', 'निगमन प्रमाण पत्र', 'बैंक खाते का विवरण', 'पता प्रमाण', 'कर्मचारियों की सूची']
      },
      process: {
        en: '1. Register on the EPFO Unified Portal. 2. Fill the employer registration form (OLRE). 3. Digitally sign the application using DSC. 4. EPF code is issued after verification.',
        hi: '1. ईपीएफओ यूनिफाइड पोर्टल पर पंजीकरण करें। 2. नियोक्ता पंजीकरण फॉर्म (OLRE) भरें। 3. DSC का उपयोग करके आवेदन पर डिजिटल रूप से हस्ताक्षर करें। 4. सत्यापन के बाद ईपीएफ कोड जारी किया जाता है।'
      },
      tips: {
        en: 'Both employer and employee contribute 12% of the basic salary towards EPF.',
        hi: 'नियोक्ता और कर्मचारी दोनों ईपीएफ के लिए मूल वेतन का 12% योगदान करते हैं।'
      }
    }
  },
  {
    id: 'factory-license-form',
    category: 'Business Forms',
    categoryHi: 'व्यावसायिक फॉर्म',
    serviceName: 'Factory License',
    serviceNameHi: 'फैक्ट्री लाइसेंस',
    formName: 'Factory Registration Form',
    formNameHi: 'फैक्ट्री पंजीकरण फॉर्म',
    description: 'Mandatory license for manufacturing units using power or manpower.',
    descriptionHi: 'बिजली या जनशक्ति का उपयोग करने वाली विनिर्माण इकाइयों के लिए अनिवार्य लाइसेंस।',
    icon: Factory,
    guidelines: ['Site plan', 'Process flow', 'Safety measures'],
    guidelinesHi: ['साइट प्लान', 'प्रक्रिया प्रवाह', 'सुरक्षा उपाय'],
    searchQuery: 'Factory license application form Rajasthan labor department pdf',
    guide: {
      purpose: {
        en: 'To ensure the health, safety, and welfare of workers in factories as per the Factories Act, 1948.',
        hi: 'फैक्ट्री अधिनियम, 1948 के अनुसार कारखानों में श्रमिकों के स्वास्थ्य, सुरक्षा और कल्याण को सुनिश्चित करना।'
      },
      eligibility: {
        en: 'Manufacturing units with 10+ workers (using power) or 20+ workers (without power).',
        hi: '10+ श्रमिकों (बिजली का उपयोग करने वाले) या 20+ श्रमिकों (बिना बिजली के) वाली विनिर्माण इकाइयां।'
      },
      documents: {
        en: ['Site Plan and Building Plan', 'Process Flow Chart', 'List of Machinery', 'List of Raw Materials', 'Safety Policy'],
        hi: ['साइट प्लान और बिल्डिंग प्लान', 'प्रक्रिया प्रवाह चार्ट', 'मशीनरी की सूची', 'कच्चे माल की सूची', 'सुरक्षा नीति']
      },
      process: {
        en: '1. Obtain site plan approval from the Factory Inspectorate. 2. Apply for registration and license online. 3. Inspection of the premises by the department. 4. License issued for a specific period.',
        hi: '1. फैक्ट्री निरीक्षणालय से साइट प्लान अनुमोदन प्राप्त करें। 2. पंजीकरण और लाइसेंस के लिए ऑनलाइन आवेदन करें। 3. विभाग द्वारा परिसर का निरीक्षण। 4. एक विशिष्ट अवधि के लिए जारी लाइसेंस।'
      },
      tips: {
        en: 'Maintain all safety equipment and registers as per the act to avoid heavy penalties during inspections.',
        hi: 'निरीक्षण के दौरान भारी जुर्माने से बचने के लिए अधिनियम के अनुसार सभी सुरक्षा उपकरण और रजिस्टर बनाए रखें।'
      }
    }
  },
  {
    id: 'fire-noc-form',
    category: 'Business Forms',
    categoryHi: 'व्यावसायिक फॉर्म',
    serviceName: 'Fire NOC',
    serviceNameHi: 'फायर एनओसी',
    formName: 'Fire Safety Certificate Form',
    formNameHi: 'फायर सेफ्टी सर्टिफिकेट फॉर्म',
    description: 'No Objection Certificate from the Fire Department for building safety.',
    descriptionHi: 'भवन सुरक्षा के लिए अग्निशमन विभाग से अनापत्ति प्रमाण पत्र।',
    icon: Flame,
    guidelines: ['Building plan', 'Fire equipment list', 'Inspection'],
    guidelinesHi: ['भवन योजना', 'अग्नि उपकरण सूची', 'निरीक्षण'],
    searchQuery: 'Fire NOC application form Rajasthan municipal corporation pdf',
    guide: {
      purpose: {
        en: 'To certify that a building or establishment has adequate fire safety measures and equipment installed.',
        hi: 'यह प्रमाणित करना कि किसी भवन या प्रतिष्ठान में पर्याप्त अग्नि सुरक्षा उपाय और उपकरण स्थापित हैं।'
      },
      eligibility: {
        en: 'High-rise buildings, commercial complexes, hotels, hospitals, and factories.',
        hi: 'बहुमंजिला इमारतें, वाणिज्यिक परिसर, होटल, अस्पताल और कारखाने।'
      },
      documents: {
        en: ['Building Plan approved by local body', 'Fire Safety Audit Report', 'List of Fire Fighting Equipment installed', 'Site Photograph'],
        hi: ['स्थानीय निकाय द्वारा अनुमोदित भवन योजना', 'अग्नि सुरक्षा ऑडिट रिपोर्ट', 'स्थापित अग्निशमन उपकरणों की सूची', 'साइट फोटो']
      },
      process: {
        en: '1. Apply online to the Chief Fire Officer (CFO). 2. Submit the building plan and safety details. 3. Site inspection by fire department officials. 4. NOC issued if safety standards are met.',
        hi: '1. मुख्य अग्निशमन अधिकारी (CFO) को ऑनलाइन आवेदन करें। 2. भवन योजना और सुरक्षा विवरण जमा करें। 3. अग्निशमन विभाग के अधिकारियों द्वारा साइट निरीक्षण। 4. सुरक्षा मानकों को पूरा करने पर एनओसी जारी।'
      },
      tips: {
        en: 'Fire NOC must be renewed periodically (usually every 1-3 years) depending on the building type.',
        hi: 'भवन के प्रकार के आधार पर फायर एनओसी को समय-समय पर (आमतौर पर हर 1-3 साल में) नवीनीकृत किया जाना चाहिए।'
      }
    }
  },
  {
    id: 'pollution-consent-form',
    category: 'Business Forms',
    categoryHi: 'व्यावसायिक फॉर्म',
    serviceName: 'Pollution Consent',
    serviceNameHi: 'प्रदूषण सहमति',
    formName: 'CTE / CTO Form',
    formNameHi: 'सीटीई / सीटीओ फॉर्म',
    description: 'Consent to Establish (CTE) and Consent to Operate (CTO) from the Pollution Control Board.',
    descriptionHi: 'प्रदूषण नियंत्रण बोर्ड से स्थापना की सहमति (सीटीई) और संचालन की सहमति (सीटीओ)।',
    icon: Wind,
    guidelines: ['Industry category', 'Waste management', 'Pollution control devices'],
    guidelinesHi: ['उद्योग श्रेणी', 'अपशिष्ट प्रबंधन', 'प्रदूषण नियंत्रण उपकरण'],
    searchQuery: 'Pollution control board CTE CTO application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To ensure that industrial activities do not cause environmental pollution beyond permissible limits.',
        hi: 'यह सुनिश्चित करना कि औद्योगिक गतिविधियाँ अनुमेय सीमा से अधिक पर्यावरण प्रदूषण का कारण न बनें।'
      },
      eligibility: {
        en: 'All industries categorized as Red, Orange, or Green based on their pollution potential.',
        hi: 'उनकी प्रदूषण क्षमता के आधार पर लाल, नारंगी या हरे रंग के रूप में वर्गीकृत सभी उद्योग।'
      },
      documents: {
        en: ['Project Report', 'Site Plan', 'Details of Effluent Treatment Plant (ETP)', 'Air Pollution Control Devices details', 'Water consumption details'],
        hi: ['परियोजना रिपोर्ट', 'साइट प्लान', 'एफ्लुएंट ट्रीटमेंट प्लांट (ETP) का विवरण', 'वायु प्रदूषण नियंत्रण उपकरणों का विवरण', 'पानी की खपत का विवरण']
      },
      process: {
        en: '1. Apply for CTE before starting construction. 2. Apply for CTO before starting production. 3. Online application on the SPCB portal. 4. Inspection and monitoring by board officials.',
        hi: '1. निर्माण शुरू करने से पहले सीटीई के लिए आवेदन करें। 2. उत्पादन शुरू करने से पहले सीटीओ के लिए आवेदन करें। 3. एसपीसीबी पोर्टल पर ऑनलाइन आवेदन। 4. बोर्ड अधिकारियों द्वारा निरीक्षण और निगरानी।'
      },
      tips: {
        en: 'White category industries are usually exempt from consent but must notify the board.',
        hi: 'सफेद श्रेणी के उद्योगों को आमतौर पर सहमति से छूट दी जाती है लेकिन बोर्ड को सूचित करना चाहिए।'
      }
    }
  },
  {
    id: 'drug-license-form',
    category: 'Business Forms',
    categoryHi: 'व्यावसायिक फॉर्म',
    serviceName: 'Drug License',
    serviceNameHi: 'ड्रग लाइसेंस',
    formName: 'Retail / Wholesale License (Form 19)',
    formNameHi: 'रिटेल / होलसेल लाइसेंस (फॉर्म 19)',
    description: 'Mandatory license for selling medicines and medical devices.',
    descriptionHi: 'दवाओं और चिकित्सा उपकरणों को बेचने के लिए अनिवार्य लाइसेंस।',
    icon: Pill,
    guidelines: ['Pharmacist degree', 'Premises area', 'Storage (Fridge)'],
    guidelinesHi: ['फार्मासिस्ट की डिग्री', 'परिसर क्षेत्र', 'भंडारण (फ्रिज)'],
    searchQuery: 'Drug license application form 19 Rajasthan drug control organization pdf',
    guide: {
      purpose: {
        en: 'To regulate the sale and distribution of drugs and cosmetics to ensure public health safety.',
        hi: 'सार्वजनिक स्वास्थ्य सुरक्षा सुनिश्चित करने के लिए दवाओं और सौंदर्य प्रसाधनों की बिक्री और वितरण को विनियमित करना।'
      },
      eligibility: {
        en: 'Pharmacists or individuals employing a registered pharmacist with a valid premises.',
        hi: 'फार्मासिस्ट या वैध परिसर वाले पंजीकृत फार्मासिस्ट को नियोजित करने वाले व्यक्ति।'
      },
      documents: {
        en: ['Form 19 (Application)', 'Pharmacist Registration Certificate', 'Premises Ownership/Rent Proof', 'Site Plan', 'Refrigerator Purchase Bill'],
        hi: ['फॉर्म 19 (आवेदन)', 'फार्मासिस्ट पंजीकरण प्रमाण पत्र', 'परिसर स्वामित्व/किराया प्रमाण', 'साइट प्लान', 'रेफ्रिजरेटर खरीद बिल']
      },
      process: {
        en: '1. Apply online on the state drug control department portal. 2. Upload documents and pay the fee. 3. Inspection of the premises by the Drug Inspector. 4. License issued after approval.',
        hi: '1. राज्य औषधि नियंत्रण विभाग पोर्टल पर ऑनलाइन आवेदन करें। 2. दस्तावेज अपलोड करें और शुल्क का भुगतान करें। 3. औषधि निरीक्षक द्वारा परिसर का निरीक्षण। 4. अनुमोदन के बाद जारी लाइसेंस।'
      },
      tips: {
        en: 'A minimum area of 10-15 sq. meters is required for a retail/wholesale pharmacy.',
        hi: 'रिटेल/होलसेल फार्मेसी के लिए न्यूनतम 10-15 वर्ग मीटर क्षेत्र की आवश्यकता होती है।'
      }
    }
  },
  {
    id: 'trade-license-municipal-form',
    category: 'Business Forms',
    categoryHi: 'व्यावसायिक फॉर्म',
    serviceName: 'Trade License',
    serviceNameHi: 'व्यापार लाइसेंस',
    formName: 'Municipal Trade License Form',
    formNameHi: 'नगरपालिका व्यापार लाइसेंस फॉर्म',
    description: 'License from the local municipal body to carry out specific trades.',
    descriptionHi: 'विशिष्ट व्यापार करने के लिए स्थानीय नगरपालिका निकाय से लाइसेंस।',
    icon: Building,
    guidelines: ['Property tax receipt', 'Owner ID', 'Business type'],
    guidelinesHi: ['संपत्ति कर रसीद', 'मालिक की आईडी', 'व्यवसाय का प्रकार'],
    searchQuery: 'Municipal corporation trade license application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To ensure that a business is operating in compliance with local safety and health regulations.',
        hi: 'यह सुनिश्चित करना कि कोई व्यवसाय स्थानीय सुरक्षा और स्वास्थ्य नियमों के अनुपालन में काम कर रहा है।'
      },
      eligibility: {
        en: 'Any person or entity starting a business within the municipal limits.',
        hi: 'नगरपालिका सीमा के भीतर व्यवसाय शुरू करने वाला कोई भी व्यक्ति या इकाई।'
      },
      documents: {
        en: ['Property Tax Receipt', 'Rent Agreement / Sale Deed', 'ID Proof of Owner', 'NOC from neighbors (for some trades)', 'Site Plan'],
        hi: ['संपत्ति कर रसीद', 'किराया समझौता / बिक्री विलेख', 'मालिक का आईडी प्रमाण', 'पड़ोसियों से एनओसी (कुछ ट्रेडों के लिए)', 'साइट प्लान']
      },
      process: {
        en: '1. Apply online on the municipal corporation portal. 2. Fill the application and upload documents. 3. Pay the license fee. 4. Inspection by municipal officials. 5. License issued digitally.',
        hi: '1. नगर निगम पोर्टल पर ऑनलाइन आवेदन करें। 2. आवेदन भरें और दस्तावेज अपलोड करें। 3. लाइसेंस शुल्क का भुगतान करें। 4. नगरपालिका अधिकारियों द्वारा निरीक्षण। 5. लाइसेंस डिजिटल रूप से जारी किया गया।'
      },
      tips: {
        en: 'Trade licenses must be renewed annually before March 31 to avoid penalties.',
        hi: 'जुर्माने से बचने के लिए व्यापार लाइसेंस को 31 मार्च से पहले सालाना नवीनीकृत किया जाना चाहिए।'
      }
    }
  },
  {
    id: 'health-trade-license-form',
    category: 'Business Forms',
    categoryHi: 'व्यावसायिक फॉर्म',
    serviceName: 'Health License',
    serviceNameHi: 'स्वास्थ्य लाइसेंस',
    formName: 'Health Trade License Form',
    formNameHi: 'स्वास्थ्य व्यापार लाइसेंस फॉर्म',
    description: 'License for businesses that impact public health (e.g., gyms, salons, hotels).',
    descriptionHi: 'सार्वजनिक स्वास्थ्य को प्रभावित करने वाले व्यवसायों के लिए लाइसेंस (जैसे, जिम, सैलून, होटल)।',
    icon: HeartPulse,
    guidelines: ['Sanitation standards', 'Water quality', 'Medical fitness of staff'],
    guidelinesHi: ['स्वच्छता मानक', 'पानी की गुणवत्ता', 'कर्मचारियों की चिकित्सा फिटनेस'],
    searchQuery: 'Health trade license application form municipal corporation Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To regulate businesses that have a direct impact on the health and hygiene of the public.',
        hi: 'उन व्यवसायों को विनियमित करना जिनका जनता के स्वास्थ्य और स्वच्छता पर सीधा प्रभाव पड़ता है।'
      },
      eligibility: {
        en: 'Owners of restaurants, hotels, gyms, beauty parlors, and slaughterhouses.',
        hi: 'रेस्तरां, होटल, जिम, ब्यूटी पार्लर और बूचड़खानों के मालिक।'
      },
      documents: {
        en: ['Identity Proof', 'Premises Proof', 'Water Analysis Report', 'Medical Certificates of Employees', 'Pest Control Certificate'],
        hi: ['पहचान प्रमाण', 'परिसर प्रमाण', 'जल विश्लेषण रिपोर्ट', 'कर्मचारियों के चिकित्सा प्रमाण पत्र', 'कीट नियंत्रण प्रमाण पत्र']
      },
      process: {
        en: '1. Apply online on the local body portal. 2. Submit health and hygiene details. 3. Inspection by the Health Officer. 4. License issued after ensuring compliance.',
        hi: '1. स्थानीय निकाय पोर्टल पर ऑनलाइन आवेदन करें। 2. स्वास्थ्य और स्वच्छता विवरण जमा करें। 3. स्वास्थ्य अधिकारी द्वारा निरीक्षण। 4. अनुपालन सुनिश्चित करने के बाद जारी लाइसेंस।'
      },
      tips: {
        en: 'Maintain high standards of cleanliness as surprise inspections are common for health licenses.',
        hi: 'स्वच्छता के उच्च मानक बनाए रखें क्योंकि स्वास्थ्य लाइसेंस के लिए औचक निरीक्षण आम हैं।'
      }
    }
  },
  {
    id: 'eating-house-license-form',
    category: 'Business Forms',
    categoryHi: 'व्यावसायिक फॉर्म',
    serviceName: 'Eating House',
    serviceNameHi: 'ईटिंग हाउस',
    formName: 'Eating House License Form',
    formNameHi: 'ईटिंग हाउस लाइसेंस फॉर्म',
    description: 'Mandatory license from the Police Department for places where food/drinks are served.',
    descriptionHi: 'उन स्थानों के लिए पुलिस विभाग से अनिवार्य लाइसेंस जहां भोजन/पेय परोसा जाता है।',
    icon: Utensils,
    guidelines: ['FSSAI license', 'Fire NOC', 'Police verification'],
    guidelinesHi: ['FSSAI लाइसेंस', 'फायर एनओसी', 'पुलिस सत्यापन'],
    searchQuery: 'Eating house license application form Rajasthan police pdf',
    guide: {
      purpose: {
        en: 'To ensure public safety and security in establishments where the public gathers to eat or drink.',
        hi: 'उन प्रतिष्ठानों में सार्वजनिक सुरक्षा और सुरक्षा सुनिश्चित करना जहाँ जनता खाने या पीने के लिए इकट्ठा होती है।'
      },
      eligibility: {
        en: 'Owners of restaurants, cafes, and any public eating place.',
        hi: 'रेस्तरां, कैफे और किसी भी सार्वजनिक खाने के स्थान के मालिक।'
      },
      documents: {
        en: ['FSSAI License', 'Fire NOC', 'Trade License', 'Site Plan', 'Police Clearance Certificate (PCC) of the owner'],
        hi: ['FSSAI लाइसेंस', 'फायर एनओसी', 'व्यापार लाइसेंस', 'साइट प्लान', 'मालिक का पुलिस क्लीयरेंस सर्टिफिकेट (PCC)']
      },
      process: {
        en: '1. Register on the Licensing Unit portal of the state police. 2. Fill the application and upload all other business licenses. 3. Police verification of the premises. 4. License issued by the DCP/Licensing authority.',
        hi: '1. राज्य पुलिस के लाइसेंसिंग यूनिट पोर्टल पर पंजीकरण करें। 2. आवेदन भरें और अन्य सभी व्यावसायिक लाइसेंस अपलोड करें। 3. परिसर का पुलिस सत्यापन। 4. डीसीपी/लाइसेंसिंग प्राधिकरण द्वारा जारी लाइसेंस।'
      },
      tips: {
        en: 'Ensure your CCTV cameras are functional and meet the specifications required by the police.',
        hi: 'सुनिश्चित करें कि आपके सीसीटीवी कैमरे कार्यात्मक हैं और पुलिस द्वारा आवश्यक विशिष्टताओं को पूरा करते हैं।'
      }
    }
  },
  {
    id: 'psara-license-form',
    category: 'Business Forms',
    categoryHi: 'व्यावसायिक फॉर्म',
    serviceName: 'PSARA',
    serviceNameHi: 'पसारा',
    formName: 'Private Security Agency License',
    formNameHi: 'निजी सुरक्षा एजेंसी लाइसेंस',
    description: 'Mandatory license for starting a private security agency.',
    descriptionHi: 'निजी सुरक्षा एजेंसी शुरू करने के लिए अनिवार्य लाइसेंस।',
    icon: Shield,
    guidelines: ['Police verification', 'Training certificate', 'Uniform design'],
    guidelinesHi: ['पुलिस सत्यापन', 'प्रशिक्षण प्रमाण पत्र', 'यूनिफॉर्म डिजाइन'],
    searchQuery: 'PSARA license application form Rajasthan police online pdf',
    guide: {
      purpose: {
        en: 'To regulate the operation of private security agencies and ensure they employ trained and verified personnel.',
        hi: 'निजी सुरक्षा एजेंसियों के संचालन को विनियमित करना और यह सुनिश्चित करना कि वे प्रशिक्षित और सत्यापित कर्मियों को नियोजित करें।'
      },
      eligibility: {
        en: 'Indian citizens or companies with no criminal record and adequate training infrastructure.',
        hi: 'बिना किसी आपराधिक रिकॉर्ड और पर्याप्त प्रशिक्षण बुनियादी ढांचे वाले भारतीय नागरिक या कंपनियां।'
      },
      documents: {
        en: ['PAN Card', 'GSTIN', 'ESIC & EPF Registration', 'MOU with a training institute', 'Affidavit of character and antecedents'],
        hi: ['पैन कार्ड', 'जीएसटीआईएन', 'ईएसआईसी और ईपीएफ पंजीकरण', 'एक प्रशिक्षण संस्थान के साथ समझौता ज्ञापन', 'चरित्र और पूर्ववृत्त का हलफनामा']
      },
      process: {
        en: '1. Apply online on the PSARA portal of the state police. 2. Submit the MOU and agency details. 3. Police verification of the directors and the office. 4. Grant of license for 1 or 5 years.',
        hi: '1. राज्य पुलिस के पसारा पोर्टल पर ऑनलाइन आवेदन करें। 2. समझौता ज्ञापन और एजेंसी विवरण जमा करें। 3. निदेशकों और कार्यालय का पुलिस सत्यापन। 4. 1 या 5 साल के लिए लाइसेंस का अनुदान।'
      },
      tips: {
        en: 'PSARA license is state-specific; you need a separate license for each state you operate in.',
        hi: 'पसारा लाइसेंस राज्य-विशिष्ट है; आपको प्रत्येक राज्य के लिए एक अलग लाइसेंस की आवश्यकता है जिसमें आप काम करते हैं।'
      }
    }
  },
  {
    id: 'vidya-lakshmi-loan-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Education Loan',
    serviceNameHi: 'शिक्षा ऋण',
    formName: 'Vidya Lakshmi Application',
    formNameHi: 'विद्या लक्ष्मी आवेदन',
    description: 'Single portal for students to apply for education loans from multiple banks.',
    descriptionHi: 'छात्रों के लिए कई बैंकों से शिक्षा ऋण के लिए आवेदन करने के लिए एकल पोर्टल।',
    icon: GraduationCap,
    guidelines: ['Admission proof', 'Income proof', 'Academic record'],
    guidelinesHi: ['प्रवेश प्रमाण', 'आय प्रमाण', 'शैक्षणिक रिकॉर्ड'],
    searchQuery: 'Vidya Lakshmi education loan application form online NSDL pdf',
    guide: {
      purpose: {
        en: 'To provide a transparent and easy way for students to apply for education loans and scholarships from various banks.',
        hi: 'छात्रों को विभिन्न बैंकों से शिक्षा ऋण और छात्रवृत्ति के लिए आवेदन करने का एक पारदर्शी और आसान तरीका प्रदान करना।'
      },
      eligibility: {
        en: 'Indian students who have secured admission to higher education in India or abroad.',
        hi: 'भारतीय छात्र जिन्होंने भारत या विदेश में उच्च शिक्षा के लिए प्रवेश प्राप्त किया है।'
      },
      documents: {
        en: ['Admission Letter from Institute', 'Fee Structure', 'Academic Marksheets (10th, 12th, Graduation)', 'Income Proof of Parents/Guardian', 'ID and Address Proof'],
        hi: ['संस्थान से प्रवेश पत्र', 'शुल्क संरचना', 'शैक्षणिक मार्कशीट (10वीं, 12वीं, स्नातक)', 'माता-पिता/अभिभावक का आय प्रमाण', 'आईडी और पता प्रमाण']
      },
      process: {
        en: '1. Register on the Vidya Lakshmi portal. 2. Fill the Common Education Loan Application Form (CELAF). 3. Search and apply for loans from listed banks. 4. Track application status on the portal.',
        hi: '1. विद्या लक्ष्मी पोर्टल पर पंजीकरण करें। 2. कॉमन एजुकेशन लोन एप्लीकेशन फॉर्म (CELAF) भरें। 3. सूचीबद्ध बैंकों से ऋण खोजें और आवेदन करें। 4. पोर्टल पर आवेदन की स्थिति को ट्रैक करें।'
      },
      tips: {
        en: 'Compare interest rates and repayment terms of different banks before applying.',
        hi: 'आवेदन करने से पहले विभिन्न बैंकों की ब्याज दरों और पुनर्भुगतान शर्तों की तुलना करें।'
      }
    }
  },
  {
    id: 'school-college-admission-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Admission',
    serviceNameHi: 'प्रवेश',
    formName: 'Admission Application Form',
    formNameHi: 'प्रवेश आवेदन फॉर्म',
    description: 'Standard application form for admission to schools or colleges.',
    descriptionHi: 'स्कूलों या कॉलेजों में प्रवेश के लिए मानक आवेदन फॉर्म।',
    icon: School,
    guidelines: ['Previous marksheet', 'Transfer certificate', 'Photos'],
    guidelinesHi: ['पिछली मार्कशीट', 'स्थानांतरण प्रमाण पत्र', 'फोटो'],
    searchQuery: 'School college admission application form template pdf',
    guide: {
      purpose: {
        en: 'To apply for enrollment in an educational institution for a specific course or grade.',
        hi: 'किसी विशिष्ट पाठ्यक्रम या ग्रेड के लिए एक शैक्षणिक संस्थान में नामांकन के लिए आवेदन करना।'
      },
      eligibility: {
        en: 'Students meeting the age and academic criteria set by the institution.',
        hi: 'संस्थान द्वारा निर्धारित आयु और शैक्षणिक मानदंडों को पूरा करने वाले छात्र।'
      },
      documents: {
        en: ['Previous Class Marksheet', 'Transfer Certificate (TC)', 'Character Certificate', 'Birth Certificate (for schools)', 'Passport size Photographs', 'Caste Certificate (if applicable)'],
        hi: ['पिछली कक्षा की मार्कशीट', 'स्थानांतरण प्रमाण पत्र (TC)', 'चरित्र प्रमाण पत्र', 'जन्म प्रमाण पत्र (स्कूलों के लिए)', 'पासपोर्ट साइज फोटो', 'जाति प्रमाण पत्र (यदि लागू हो)']
      },
      process: {
        en: '1. Obtain the form from the institution or website. 2. Fill personal and academic details. 3. Attach required documents. 4. Submit the form and pay the admission fee. 5. Participate in the interview/test if required.',
        hi: '1. संस्थान या वेबसाइट से फॉर्म प्राप्त करें। 2. व्यक्तिगत और शैक्षणिक विवरण भरें। 3. आवश्यक दस्तावेज संलग्न करें। 4. फॉर्म जमा करें और प्रवेश शुल्क का भुगतान करें। 5. यदि आवश्यक हो तो साक्षात्कार/परीक्षा में भाग लें।'
      },
      tips: {
        en: 'Keep multiple copies of your documents ready and check the last date for submission carefully.',
        hi: 'अपने दस्तावेजों की कई प्रतियां तैयार रखें और जमा करने की अंतिम तिथि को ध्यान से जांचें।'
      }
    }
  },
  {
    id: 'exam-registration-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Exam Registration',
    serviceNameHi: 'परीक्षा पंजीकरण',
    formName: 'Board / University Exam Form',
    formNameHi: 'बोर्ड / विश्वविद्यालय परीक्षा फॉर्म',
    description: 'Registration for appearing in board or university examinations.',
    descriptionHi: 'बोर्ड या विश्वविद्यालय परीक्षाओं में बैठने के लिए पंजीकरण।',
    icon: FileText,
    guidelines: ['Enrollment number', 'Subject selection', 'Exam fee'],
    guidelinesHi: ['नामांकन संख्या', 'विषय चयन', 'परीक्षा शुल्क'],
    searchQuery: 'Board university exam registration form online Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To register a student for the final or semester examinations conducted by a board or university.',
        hi: 'बोर्ड या विश्वविद्यालय द्वारा आयोजित अंतिम या सेमेस्टर परीक्षाओं के लिए एक छात्र को पंजीकृत करना।'
      },
      eligibility: {
        en: 'Regular or private students enrolled in the respective board or university.',
        hi: 'संबंधित बोर्ड या विश्वविद्यालय में नामांकित नियमित या निजी छात्र।'
      },
      documents: {
        en: ['Enrollment Card', 'Previous Exam Marksheet', 'Identity Proof', 'Passport size Photograph', 'Fee Payment Receipt'],
        hi: ['नामांकन कार्ड', 'पिछली परीक्षा की मार्कशीट', 'पहचान प्रमाण', 'पासपोर्ट साइज फोटो', 'शुल्क भुगतान रसीद']
      },
      process: {
        en: '1. Login to the student portal of the board/university. 2. Select the "Exam Form" option. 3. Verify details and select subjects. 4. Pay the exam fee online. 5. Download the submitted form for records.',
        hi: '1. बोर्ड/विश्वविद्यालय के छात्र पोर्टल पर लॉगिन करें। 2. "परीक्षा फॉर्म" विकल्प चुनें। 3. विवरण सत्यापित करें और विषयों का चयन करें। 4. परीक्षा शुल्क का ऑनलाइन भुगतान करें। 5. रिकॉर्ड के लिए जमा किया गया फॉर्म डाउनलोड करें।'
      },
      tips: {
        en: 'Double-check the subject codes and your personal details before final submission.',
        hi: 'अंतिम जमा करने से पहले विषय कोड और अपने व्यक्तिगत विवरण की दोबारा जांच करें।'
      }
    }
  },
  {
    id: 'degree-diploma-certificate-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Degree Certificate',
    serviceNameHi: 'डिग्री प्रमाण पत्र',
    formName: 'Degree / Diploma Application',
    formNameHi: 'डिग्री / डिप्लोमा आवेदन',
    description: 'Application for obtaining the final degree or diploma certificate after graduation.',
    descriptionHi: 'स्नातक स्तर की पढ़ाई के बाद अंतिम डिग्री या डिप्लोमा प्रमाण पत्र प्राप्त करने के लिए आवेदन।',
    icon: Award,
    guidelines: ['Final marksheet', 'Convocation fee', 'No dues'],
    guidelinesHi: ['अंतिम मार्कशीट', 'दीक्षांत समारोह शुल्क', 'कोई बकाया नहीं'],
    searchQuery: 'University degree diploma certificate application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To request the issuance of the original degree or diploma certificate from the university after successful completion of the course.',
        hi: 'पाठ्यक्रम के सफल समापन के बाद विश्वविद्यालय से मूल डिग्री या डिप्लोमा प्रमाण पत्र जारी करने का अनुरोध करना।'
      },
      eligibility: {
        en: 'Students who have passed all semesters/years and have no pending dues.',
        hi: 'वे छात्र जिन्होंने सभी सेमेस्टर/वर्ष पास कर लिए हैं और जिनका कोई बकाया नहीं है।'
      },
      documents: {
        en: ['Final Year Marksheet', 'Provisional Certificate', 'Identity Proof', 'Convocation Fee Receipt', 'No Dues Certificate from College'],
        hi: ['अंतिम वर्ष की मार्कशीट', 'अनंतिम प्रमाण पत्र', 'पहचान प्रमाण', 'दीक्षांत समारोह शुल्क रसीद', 'कॉलेज से कोई बकाया नहीं प्रमाण पत्र']
      },
      process: {
        en: '1. Apply online or offline at the university registrar office. 2. Fill the degree application form. 3. Pay the required fee. 4. Choose to receive the degree in person (Convocation) or by post.',
        hi: '1. विश्वविद्यालय रजिस्ट्रार कार्यालय में ऑनलाइन या ऑफलाइन आवेदन करें। 2. डिग्री आवेदन फॉर्म भरें। 3. आवश्यक शुल्क का भुगतान करें। 4. व्यक्तिगत रूप से (दीक्षांत समारोह) या डाक द्वारा डिग्री प्राप्त करना चुनें।'
      },
      tips: {
        en: 'Apply for a Provisional Certificate immediately after results to use for jobs/further studies while waiting for the original degree.',
        hi: 'मूल डिग्री की प्रतीक्षा करते समय नौकरियों/आगे की पढ़ाई के लिए उपयोग करने के लिए परिणामों के तुरंत बाद अनंतिम प्रमाण पत्र के लिए आवेदन करें।'
      }
    }
  },
  {
    id: 'migration-certificate-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Migration Certificate',
    serviceNameHi: 'माइग्रेशन सर्टिफिकेट',
    formName: 'Migration Application Form',
    formNameHi: 'माइग्रेशन आवेदन फॉर्म',
    description: 'Required for students moving from one university/board to another.',
    descriptionHi: 'एक विश्वविद्यालय/बोर्ड से दूसरे में जाने वाले छात्रों के लिए आवश्यक।',
    icon: MoveRight,
    guidelines: ['Last marksheet', 'Transfer certificate', 'Fee'],
    guidelinesHi: ['अंतिम मार्कशीट', 'स्थानांतरण प्रमाण पत्र', 'शुल्क'],
    searchQuery: 'University migration certificate application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To obtain a certificate that allows a student to leave one educational board or university to join another.',
        hi: 'एक प्रमाण पत्र प्राप्त करना जो एक छात्र को दूसरे में शामिल होने के लिए एक शैक्षणिक बोर्ड या विश्वविद्यालय छोड़ने की अनुमति देता है।'
      },
      eligibility: {
        en: 'Students who have completed their course or are leaving the institution mid-way.',
        hi: 'वे छात्र जिन्होंने अपना पाठ्यक्रम पूरा कर लिया है या बीच में संस्थान छोड़ रहे हैं।'
      },
      documents: {
        en: ['Original Marksheet of the last exam', 'Transfer Certificate (TC)', 'Identity Proof', 'Fee Payment Receipt'],
        hi: ['अंतिम परीक्षा की मूल मार्कशीट', 'स्थानांतरण प्रमाण पत्र (TC)', 'पहचान प्रमाण', 'शुल्क भुगतान रसीद']
      },
      process: {
        en: '1. Apply on the university/board portal or office. 2. Fill the migration form. 3. Pay the migration fee. 4. The certificate is usually issued within 7-15 days.',
        hi: '1. विश्वविद्यालय/बोर्ड पोर्टल या कार्यालय पर आवेदन करें। 2. माइग्रेशन फॉर्म भरें। 3. माइग्रेशन शुल्क का भुगतान करें। 4. प्रमाण पत्र आमतौर पर 7-15 दिनों के भीतर जारी किया जाता है।'
      },
      tips: {
        en: 'Ensure you have the original TC from your college before applying for migration from the university.',
        hi: 'विश्वविद्यालय से माइग्रेशन के लिए आवेदन करने से पहले सुनिश्चित करें कि आपके पास अपने कॉलेज से मूल टीसी है।'
      }
    }
  },
  {
    id: 'character-certificate-student-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Character Certificate',
    serviceNameHi: 'चरित्र प्रमाण पत्र',
    formName: 'Student Character Form',
    formNameHi: 'छात्र चरित्र फॉर्म',
    description: 'Certificate issued by the head of the institution regarding the student\'s conduct.',
    descriptionHi: 'छात्र के आचरण के संबंध में संस्थान के प्रमुख द्वारा जारी प्रमाण पत्र।',
    icon: UserCheck,
    guidelines: ['Enrollment details', 'No disciplinary action', 'Photos'],
    guidelinesHi: ['नामांकन विवरण', 'कोई अनुशासनात्मक कार्रवाई नहीं', 'फोटो'],
    searchQuery: 'School college character certificate application form template pdf',
    guide: {
      purpose: {
        en: 'To certify the good conduct and behavior of a student during their tenure at the institution.',
        hi: 'संस्थान में उनके कार्यकाल के दौरान एक छात्र के अच्छे आचरण और व्यवहार को प्रमाणित करना।'
      },
      eligibility: {
        en: 'Students who are currently studying or have recently passed out from the institution.',
        hi: 'वे छात्र जो वर्तमान में पढ़ रहे हैं या हाल ही में संस्थान से पास हुए हैं।'
      },
      documents: {
        en: ['Identity Card', 'Last Marksheet', 'Passport size Photograph'],
        hi: ['पहचान पत्र', 'अंतिम मार्कशीट', 'पासपोर्ट साइज फोटो']
      },
      process: {
        en: '1. Submit a written application to the Principal/Dean. 2. Attach a copy of the last marksheet. 3. The office verifies the records for any disciplinary issues. 4. Certificate is signed and issued.',
        hi: '1. प्रधानाचार्य/डीन को एक लिखित आवेदन जमा करें। 2. अंतिम मार्कशीट की एक प्रति संलग्न करें। 3. कार्यालय किसी भी अनुशासनात्मक मुद्दों के लिए रिकॉर्ड की पुष्टि करता है। 4. प्रमाण पत्र हस्ताक्षरित और जारी किया जाता है।'
      },
      tips: {
        en: 'This certificate is often required for admissions to other institutions and for government jobs.',
        hi: 'यह प्रमाण पत्र अक्सर अन्य संस्थानों में प्रवेश और सरकारी नौकरियों के लिए आवश्यक होता है।'
      }
    }
  },
  {
    id: 'bonafide-certificate-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Bonafide Certificate',
    serviceNameHi: 'बोनाफाइड सर्टिफिकेट',
    formName: 'Bonafide Application Form',
    formNameHi: 'बोनाफाइड आवेदन फॉर्म',
    description: 'Proof that the student is a regular student of the institution.',
    descriptionHi: 'प्रमाण है कि छात्र संस्थान का नियमित छात्र है।',
    icon: BadgeCheck,
    guidelines: ['Current ID card', 'Purpose of certificate', 'Enrollment number'],
    guidelinesHi: ['वर्तमान आईडी कार्ड', 'प्रमाण पत्र का उद्देश्य', 'नामांकन संख्या'],
    searchQuery: 'School college bonafide certificate application form template pdf',
    guide: {
      purpose: {
        en: 'To prove that a student is currently enrolled in a specific course and year at the institution.',
        hi: 'यह साबित करने के लिए कि एक छात्र वर्तमान में संस्थान में एक विशिष्ट पाठ्यक्रम और वर्ष में नामांकित है।'
      },
      eligibility: {
        en: 'Any regular student currently enrolled in the institution.',
        hi: 'संस्थान में वर्तमान में नामांकित कोई भी नियमित छात्र।'
      },
      documents: {
        en: ['College/School ID Card', 'Fee Receipt of the current year', 'Passport size Photograph'],
        hi: ['कॉलेज/स्कूल आईडी कार्ड', 'वर्तमान वर्ष की शुल्क रसीद', 'पासपोर्ट साइज फोटो']
      },
      process: {
        en: '1. Fill the bonafide request form at the college office. 2. State the purpose (e.g., for bus pass, passport, bank account). 3. Verification by the clerk. 4. Signed by the Principal/Head.',
        hi: '1. कॉलेज कार्यालय में बोनाफाइड अनुरोध फॉर्म भरें। 2. उद्देश्य बताएं (जैसे, बस पास, पासपोर्ट, बैंक खाते के लिए)। 3. क्लर्क द्वारा सत्यापन। 4. प्रधानाचार्य/प्रमुख द्वारा हस्ताक्षरित।'
      },
      tips: {
        en: 'Bonafide certificates are usually valid for a limited period (e.g., 3-6 months).',
        hi: 'बोनाफाइड प्रमाण पत्र आमतौर पर एक सीमित अवधि (जैसे, 3-6 महीने) के लिए मान्य होते हैं।'
      }
    }
  },
  {
    id: 'transfer-certificate-tc-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Transfer Certificate',
    serviceNameHi: 'स्थानांतरण प्रमाण पत्र',
    formName: 'TC Application Form',
    formNameHi: 'टीसी आवेदन फॉर्म',
    description: 'Mandatory document for leaving a school or college to join another.',
    descriptionHi: 'एक स्कूल या कॉलेज छोड़कर दूसरे में शामिल होने के लिए अनिवार्य दस्तावेज।',
    icon: LogOut,
    guidelines: ['No dues certificate', 'Reason for leaving', 'Parent signature'],
    guidelinesHi: ['कोई बकाया नहीं प्रमाण पत्र', 'छोड़ने का कारण', 'माता-पिता के हस्ताक्षर'],
    searchQuery: 'School college transfer certificate TC application form template pdf',
    guide: {
      purpose: {
        en: 'To officially release a student from an institution so they can enroll in another.',
        hi: 'किसी छात्र को आधिकारिक तौर पर एक संस्थान से मुक्त करना ताकि वे दूसरे में नामांकन कर सकें।'
      },
      eligibility: {
        en: 'Students who have completed their studies or wish to withdraw from the institution.',
        hi: 'वे छात्र जिन्होंने अपनी पढ़ाई पूरी कर ली है या संस्थान से हटना चाहते हैं।'
      },
      documents: {
        en: ['No Dues Certificate from all departments (Library, Lab, Sports, Accounts)', 'Identity Card', 'Application signed by parents (for minors)'],
        hi: ['सभी विभागों (पुस्तकालय, लैब, खेल, लेखा) से कोई बकाया नहीं प्रमाण पत्र', 'पहचान पत्र', 'माता-पिता द्वारा हस्ताक्षरित आवेदन (नाबालिगों के लिए)']
      },
      process: {
        en: '1. Obtain the "No Dues" form and get it signed by all departments. 2. Submit the TC application form along with the No Dues form. 3. Pay the TC fee if applicable. 4. Collect the TC after 2-3 days.',
        hi: '1. "कोई बकाया नहीं" फॉर्म प्राप्त करें और इसे सभी विभागों से हस्ताक्षरित करवाएं। 2. कोई बकाया नहीं फॉर्म के साथ टीसी आवेदन फॉर्म जमा करें। 3. यदि लागू हो तो टीसी शुल्क का भुगतान करें। 4. 2-3 दिनों के बाद टीसी प्राप्त करें।'
      },
      tips: {
        en: 'Always keep a photocopy of your TC before submitting the original to a new institution.',
        hi: 'किसी नए संस्थान में मूल टीसी जमा करने से पहले हमेशा उसकी एक फोटोकॉपी अपने पास रखें।'
      }
    }
  },
  {
    id: 'duplicate-marksheet-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Duplicate Marksheet',
    serviceNameHi: 'डुप्लीकेट मार्कशीट',
    formName: 'Duplicate Marksheet Application',
    formNameHi: 'डुप्लीकेट मार्कशीट आवेदन',
    description: 'Application for obtaining a new marksheet if the original is lost or damaged.',
    descriptionHi: 'मूल मार्कशीट खो जाने या खराब हो जाने पर नई मार्कशीट प्राप्त करने के लिए आवेदन।',
    icon: Copy,
    guidelines: ['FIR copy', 'Affidavit', 'Exam details'],
    guidelinesHi: ['एफआईआर की प्रति', 'हलफनामा', 'परीक्षा विवरण'],
    searchQuery: 'Board university duplicate marksheet application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To request a replacement marksheet from the board or university in case of loss, theft, or damage.',
        hi: 'नुकसान, चोरी या क्षति के मामले में बोर्ड या विश्वविद्यालय से प्रतिस्थापन मार्कशीट का अनुरोध करना।'
      },
      eligibility: {
        en: 'Any student who has lost their original marksheet.',
        hi: 'कोई भी छात्र जिसने अपनी मूल मार्कशीट खो दी है।'
      },
      documents: {
        en: ['Copy of FIR (for lost marksheets)', 'Affidavit on non-judicial stamp paper', 'Newspaper Advertisement (in some cases)', 'Photocopy of the marksheet (if available)', 'Identity Proof'],
        hi: ['एफआईआर की प्रति (खोई हुई मार्कशीट के लिए)', 'गैर-न्यायिक स्टाम्प पेपर पर हलफनामा', 'समाचार पत्र विज्ञापन (कुछ मामलों में)', 'मार्कशीट की फोटोकॉपी (यदि उपलब्ध हो)', 'पहचान प्रमाण']
      },
      process: {
        en: '1. File an FIR at the local police station. 2. Prepare an affidavit. 3. Apply online or offline at the board/university. 4. Pay the duplicate marksheet fee. 5. Marksheet is sent by post or collected in person.',
        hi: '1. स्थानीय पुलिस स्टेशन में प्राथमिकी दर्ज करें। 2. एक हलफनामा तैयार करें। 3. बोर्ड/विश्वविद्यालय में ऑनलाइन या ऑफलाइन आवेदन करें। 4. डुप्लीकेट मार्कशीट शुल्क का भुगतान करें। 5. मार्कशीट डाक द्वारा भेजी जाती है या व्यक्तिगत रूप से प्राप्त की जाती है।'
      },
      tips: {
        en: 'The duplicate marksheet will have "DUPLICATE" stamped on it.',
        hi: 'डुप्लीकेट मार्कशीट पर "DUPLICATE" की मुहर होगी।'
      }
    }
  },
  {
    id: 'marksheet-correction-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Marksheet Correction',
    serviceNameHi: 'मार्कशीट सुधार',
    formName: 'Correction Application Form',
    formNameHi: 'सुधार आवेदन फॉर्म',
    description: 'Application for correcting errors in name, date of birth, or marks in the marksheet.',
    descriptionHi: 'मार्कशीट में नाम, जन्म तिथि या अंकों में त्रुटियों को सुधारने के लिए आवेदन।',
    icon: Edit,
    guidelines: ['Original marksheet', 'Proof of correct details', 'Fee'],
    guidelinesHi: ['मूल मार्कशीट', 'सही विवरण का प्रमाण', 'शुल्क'],
    searchQuery: 'Board university marksheet name correction application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To rectify clerical or factual errors in the marksheet issued by the board or university.',
        hi: 'बोर्ड या विश्वविद्यालय द्वारा जारी मार्कशीट में लिपिकीय या तथ्यात्मक त्रुटियों को सुधारना।'
      },
      eligibility: {
        en: 'Students with incorrect details on their official marksheet.',
        hi: 'आधिकारिक मार्कशीट पर गलत विवरण वाले छात्र।'
      },
      documents: {
        en: ['Original Marksheet with error', 'Supporting Document (Birth Certificate/Aadhaar/Previous Marksheet)', 'Application through the Principal of the school/college', 'Correction Fee Receipt'],
        hi: ['त्रुटि वाली मूल मार्कशीट', 'सहायक दस्तावेज (जन्म प्रमाण पत्र/आधार/पिछली मार्कशीट)', 'स्कूल/कॉलेज के प्रधानाचार्य के माध्यम से आवेदन', 'सुधार शुल्क रसीद']
      },
      process: {
        en: '1. Submit the application to your school/college. 2. The institution forwards it to the board/university. 3. Pay the correction fee. 4. Receive the corrected marksheet after verification.',
        hi: '1. अपने स्कूल/कॉलेज में आवेदन जमा करें। 2. संस्थान इसे बोर्ड/विश्वविद्यालय को भेजता है। 3. सुधार शुल्क का भुगतान करें। 4. सत्यापन के बाद संशोधित मार्कशीट प्राप्त करें।'
      },
      tips: {
        en: 'Apply for corrections as soon as you receive the marksheet to avoid future complications.',
        hi: 'भविष्य की जटिलताओं से बचने के लिए मार्कशीट प्राप्त होते ही सुधार के लिए आवेदन करें।'
      }
    }
  },
  {
    id: 'revaluation-rechecking-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Revaluation',
    serviceNameHi: 'पुनर्मूल्यांकन',
    formName: 'Re-evaluation / Re-checking Form',
    formNameHi: 'पुनर्मूल्यांकन / री-चेकिंग फॉर्म',
    description: 'Application for re-evaluating or re-checking exam answer sheets.',
    descriptionHi: 'परीक्षा उत्तर पुस्तिकाओं के पुनर्मूल्यांकन या री-चेकिंग के लिए आवेदन।',
    icon: Search,
    guidelines: ['Time limit (usually 15 days)', 'Fee per subject', 'Marksheet copy'],
    guidelinesHi: ['समय सीमा (आमतौर पर 15 दिन)', 'प्रति विषय शुल्क', 'मार्कशीट की प्रति'],
    searchQuery: 'Board university exam revaluation rechecking form online Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To request a recount of marks or a fresh evaluation of the answer script if the student is unsatisfied with the results.',
        hi: 'यदि छात्र परिणामों से असंतुष्ट है तो अंकों की पुनर्गणना या उत्तर पुस्तिका के नए मूल्यांकन का अनुरोध करना।'
      },
      eligibility: {
        en: 'Students who have appeared for the exam and wish to challenge their marks.',
        hi: 'वे छात्र जो परीक्षा में शामिल हुए हैं और अपने अंकों को चुनौती देना चाहते हैं।'
      },
      documents: {
        en: ['Copy of Marksheet', 'Admit Card', 'Fee Payment Receipt'],
        hi: ['मार्कशीट की प्रति', 'प्रवेश पत्र', 'शुल्क भुगतान रसीद']
      },
      process: {
        en: '1. Apply online on the board/university portal within the stipulated time. 2. Select the subjects for revaluation. 3. Pay the fee per subject. 4. Wait for the revised results.',
        hi: '1. निर्धारित समय के भीतर बोर्ड/विश्वविद्यालय पोर्टल पर ऑनलाइन आवेदन करें। 2. पुनर्मूल्यांकन के लिए विषयों का चयन करें। 3. प्रति विषय शुल्क का भुगतान करें। 4. संशोधित परिणामों की प्रतीक्षा करें।'
      },
      tips: {
        en: 'Note that marks can also decrease after revaluation in some boards.',
        hi: 'ध्यान दें कि कुछ बोर्डों में पुनर्मूल्यांकन के बाद अंक कम भी हो सकते हैं।'
      }
    }
  },
  {
    id: 'hostel-admission-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Hostel Admission',
    serviceNameHi: 'छात्रावास प्रवेश',
    formName: 'Hostel Enrollment Form',
    formNameHi: 'छात्रावास नामांकन फॉर्म',
    description: 'Application for securing accommodation in school or college hostels.',
    descriptionHi: 'स्कूल या कॉलेज के छात्रावासों में आवास सुरक्षित करने के लिए आवेदन।',
    icon: Home,
    guidelines: ['Admission proof', 'Distance proof', 'Medical certificate'],
    guidelinesHi: ['प्रवेश प्रमाण', 'दूरी का प्रमाण', 'चिकित्सा प्रमाण पत्र'],
    searchQuery: 'School college hostel admission application form template pdf',
    guide: {
      purpose: {
        en: 'To apply for a room in the institution\'s hostel facility.',
        hi: 'संस्थान की छात्रावास सुविधा में कमरे के लिए आवेदन करना।'
      },
      eligibility: {
        en: 'Regular students of the institution, often prioritizing those from distant locations.',
        hi: 'संस्थान के नियमित छात्र, अक्सर दूर के स्थानों के छात्रों को प्राथमिकता देते हैं।'
      },
      documents: {
        en: ['College Admission Receipt', 'Address Proof (Aadhaar/Ration Card)', 'Medical Fitness Certificate', 'Passport size Photographs', 'Local Guardian details'],
        hi: ['कॉलेज प्रवेश रसीद', 'पता प्रमाण (आधार/राशन कार्ड)', 'मेडिकल फिटनेस सर्टिफिकेट', 'पासपोर्ट साइज फोटो', 'स्थानीय अभिभावक विवरण']
      },
      process: {
        en: '1. Obtain the hostel form from the warden\'s office or website. 2. Fill personal and guardian details. 3. Attach medical and admission proof. 4. Submit and pay the hostel fees. 5. Room allocation based on merit or first-come-first-served.',
        hi: '1. वार्डन के कार्यालय या वेबसाइट से छात्रावास फॉर्म प्राप्त करें। 2. व्यक्तिगत और अभिभावक विवरण भरें। 3. चिकित्सा और प्रवेश प्रमाण संलग्न करें। 4. जमा करें और छात्रावास शुल्क का भुगतान करें। 5. योग्यता या पहले आओ-पहले पाओ के आधार पर कमरा आवंटन।'
      },
      tips: {
        en: 'Apply as early as possible as hostel seats are usually limited.',
        hi: 'जितनी जल्दी हो सके आवेदन करें क्योंकि छात्रावास की सीटें आमतौर पर सीमित होती हैं।'
      }
    }
  },
  {
    id: 'library-membership-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Library Card',
    serviceNameHi: 'लाइब्रेरी कार्ड',
    formName: 'Library Membership Form',
    formNameHi: 'लाइब्रेरी सदस्यता फॉर्म',
    description: 'Application for obtaining a library card to borrow books.',
    descriptionHi: 'किताबें उधार लेने के लिए लाइब्रेरी कार्ड प्राप्त करने के लिए आवेदन।',
    icon: Library,
    guidelines: ['Student ID', 'Photos', 'Library rules agreement'],
    guidelinesHi: ['छात्र आईडी', 'फोटो', 'लाइब्रेरी नियमों का समझौता'],
    searchQuery: 'School college library membership application form template pdf',
    guide: {
      purpose: {
        en: 'To register as a member of the institution\'s library to access books and journals.',
        hi: 'पुस्तकों और पत्रिकाओं तक पहुँचने के लिए संस्थान की लाइब्रेरी के सदस्य के रूप में पंजीकरण करना।'
      },
      eligibility: {
        en: 'All regular students and staff of the institution.',
        hi: 'संस्थान के सभी नियमित छात्र और कर्मचारी।'
      },
      documents: {
        en: ['Identity Card', 'Passport size Photographs', 'Fee Receipt'],
        hi: ['पहचान पत्र', 'पासपोर्ट साइज फोटो', 'शुल्क रसीद']
      },
      process: {
        en: '1. Collect the membership form from the library counter. 2. Fill details and attach photos. 3. Get it verified by the department head. 4. Submit to the librarian and collect your library card.',
        hi: '1. लाइब्रेरी काउंटर से सदस्यता फॉर्म प्राप्त करें। 2. विवरण भरें और फोटो संलग्न करें। 3. विभाग प्रमुख द्वारा इसे सत्यापित करवाएं। 4. लाइब्रेरियन को जमा करें और अपना लाइब्रेरी कार्ड प्राप्त करें।'
      },
      tips: {
        en: 'Always carry your library card to the library and return books on time to avoid fines.',
        hi: 'हमेशा अपना लाइब्रेरी कार्ड लाइब्रेरी में ले जाएं और जुर्माने से बचने के लिए समय पर किताबें लौटाएं।'
      }
    }
  },
  {
    id: 'student-bus-pass-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Bus Pass',
    serviceNameHi: 'बस पास',
    formName: 'Student Bus Pass Application',
    formNameHi: 'छात्र बस पास आवेदन',
    description: 'Application for discounted bus travel for students.',
    descriptionHi: 'छात्रों के लिए रियायती बस यात्रा के लिए आवेदन।',
    icon: Bus,
    guidelines: ['Bonafide certificate', 'Photos', 'Route details'],
    guidelinesHi: ['बोनाफाइड सर्टिफिकेट', 'फोटो', 'रूट विवरण'],
    searchQuery: 'Student bus pass application form Rajasthan roadways RSRTC pdf',
    guide: {
      purpose: {
        en: 'To obtain a pass for subsidized travel in state transport buses from home to the educational institution.',
        hi: 'घर से शैक्षणिक संस्थान तक राज्य परिवहन की बसों में रियायती यात्रा के लिए पास प्राप्त करना।'
      },
      eligibility: {
        en: 'Regular students of recognized schools and colleges.',
        hi: 'मान्यता प्राप्त स्कूलों और कॉलेजों के नियमित छात्र।'
      },
      documents: {
        en: ['Bonafide Certificate from School/College', 'Identity Card', 'Passport size Photographs', 'Address Proof'],
        hi: ['स्कूल/कॉलेज से बोनाफाइड सर्टिफिकेट', 'पहचान पत्र', 'पासपोर्ट साइज फोटो', 'पता प्रमाण']
      },
      process: {
        en: '1. Obtain the form from the bus depot or online. 2. Get the form attested by the Principal. 3. Submit the form at the bus depot counter. 4. Pay the nominal pass fee and collect the pass.',
        hi: '1. बस डिपो या ऑनलाइन से फॉर्म प्राप्त करें। 2. प्रधानाचार्य द्वारा फॉर्म प्रमाणित करवाएं। 3. बस डिपो काउंटर पर फॉर्म जमा करें। 4. मामूली पास शुल्क का भुगतान करें और पास प्राप्त करें।'
      },
      tips: {
        en: 'Bus passes are usually issued for a month, quarter, or a full academic session.',
        hi: 'बस पास आमतौर पर एक महीने, तिमाही या पूरे शैक्षणिक सत्र के लिए जारी किए जाते हैं।'
      }
    }
  },
  {
    id: 'internship-application-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Internship',
    serviceNameHi: 'इंटर्नशिप',
    formName: 'Internship Application Form',
    formNameHi: 'इंटर्नशिप आवेदन फॉर्म',
    description: 'Application for students to apply for internships in companies or government departments.',
    descriptionHi: 'छात्रों के लिए कंपनियों या सरकारी विभागों में इंटर्नशिप के लिए आवेदन करने के लिए आवेदन।',
    icon: Briefcase,
    guidelines: ['Resume', 'College NOC', 'Academic record'],
    guidelinesHi: ['रिज्यूमे', 'कॉलेज एनओसी', 'शैक्षणिक रिकॉर्ड'],
    searchQuery: 'Internship application form template for students pdf',
    guide: {
      purpose: {
        en: 'To apply for a temporary work experience position to gain practical skills in a specific field.',
        hi: 'किसी विशिष्ट क्षेत्र में व्यावहारिक कौशल प्राप्त करने के लिए अस्थायी कार्य अनुभव स्थिति के लिए आवेदन करना।'
      },
      eligibility: {
        en: 'Students currently pursuing a degree or recent graduates.',
        hi: 'वर्तमान में डिग्री प्राप्त कर रहे छात्र या हाल के स्नातक।'
      },
      documents: {
        en: ['Resume/CV', 'Cover Letter', 'No Objection Certificate (NOC) from College', 'Last Semester Marksheet', 'Identity Proof'],
        hi: ['रिज्यूमे/सीवी', 'कवर लेटर', 'कॉलेज से अनापत्ति प्रमाण पत्र (NOC)', 'पिछले सेमेस्टर की मार्कशीट', 'पहचान प्रमाण']
      },
      process: {
        en: '1. Identify the company/department and their internship portal. 2. Fill the application form and upload your resume. 3. Attach the NOC from your college. 4. Participate in the selection process (Interview/Test).',
        hi: '1. कंपनी/विभाग और उनके इंटर्नशिप पोर्टल की पहचान करें। 2. आवेदन फॉर्म भरें और अपना रिज्यूमे अपलोड करें। 3. अपने कॉलेज से एनओसी संलग्न करें। 4. चयन प्रक्रिया (साक्षात्कार/परीक्षा) में भाग लें।'
      },
      tips: {
        en: 'Tailor your resume and cover letter to the specific internship role you are applying for.',
        hi: 'अपने रिज्यूमे और कवर लेटर को उस विशिष्ट इंटर्नशिप भूमिका के अनुसार तैयार करें जिसके लिए आप आवेदन कर रहे हैं।'
      }
    }
  },
  {
    id: 'apprenticeship-registration-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Apprenticeship',
    serviceNameHi: 'शिक्षुता',
    formName: 'NATS / NAPS Registration',
    formNameHi: 'NATS / NAPS पंजीकरण',
    description: 'Registration for technical graduates and diploma holders for apprenticeship training.',
    descriptionHi: 'शिक्षुता प्रशिक्षण के लिए तकनीकी स्नातकों और डिप्लोमा धारकों के लिए पंजीकरण।',
    icon: Settings,
    guidelines: ['Degree/Diploma certificate', 'Aadhaar card', 'Bank details'],
    guidelinesHi: ['डिग्री/डिप्लोमा प्रमाण पत्र', 'आधार कार्ड', 'बैंक विवरण'],
    searchQuery: 'NATS NAPS apprenticeship registration form online portal pdf',
    guide: {
      purpose: {
        en: 'To register on the national portals to find and apply for apprenticeship opportunities in various industries.',
        hi: 'विभिन्न उद्योगों में शिक्षुता के अवसरों को खोजने और आवेदन करने के लिए राष्ट्रीय पोर्टलों पर पंजीकरण करना।'
      },
      eligibility: {
        en: 'Engineering graduates, diploma holders, and ITI passed candidates.',
        hi: 'इंजीनियरिंग स्नातक, डिप्लोमा धारक और आईटीआई पास उम्मीदवार।'
      },
      documents: {
        en: ['Aadhaar Card', 'Degree/Diploma/ITI Certificate', 'Final Year Marksheet', 'Bank Passbook', 'Passport size Photograph'],
        hi: ['आधार कार्ड', 'डिग्री/डिप्लोमा/आईटीआई प्रमाण पत्र', 'अंतिम वर्ष की मार्कशीट', 'बैंक पासबुक', 'पासपोर्ट साइज फोटो']
      },
      process: {
        en: '1. Visit NATS (for graduates/diploma) or NAPS (for ITI) portal. 2. Click on "Enroll" or "Register". 3. Fill personal, academic, and bank details. 4. Upload documents. 5. Receive the enrollment ID after verification.',
        hi: '1. NATS (स्नातक/डिप्लोमा के लिए) या NAPS (ITI के लिए) पोर्टल पर जाएं। 2. "नामांकन" या "पंजीकरण" पर क्लिक करें। 3. व्यक्तिगत, शैक्षणिक और बैंक विवरण भरें। 4. दस्तावेज अपलोड करें। 5. सत्यापन के बाद नामांकन आईडी प्राप्त करें।'
      },
      tips: {
        en: 'Apprenticeship provides a monthly stipend and a certificate of experience which is valuable for future jobs.',
        hi: 'शिक्षुता एक मासिक वजीफा और अनुभव का प्रमाण पत्र प्रदान करती है जो भविष्य की नौकरियों के लिए मूल्यवान है।'
      }
    }
  },
  {
    id: 'pmkvy-training-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Skill Training',
    serviceNameHi: 'कौशल प्रशिक्षण',
    formName: 'PMKVY Enrollment Form',
    formNameHi: 'PMKVY नामांकन फॉर्म',
    description: 'Enrollment for free skill development training under Pradhan Mantri Kaushal Vikas Yojana.',
    descriptionHi: 'प्रधानमंत्री कौशल विकास योजना के तहत मुफ्त कौशल विकास प्रशिक्षण के लिए नामांकन।',
    icon: Zap,
    guidelines: ['Aadhaar card', 'Educational proof', 'Unemployed status'],
    guidelinesHi: ['आधार कार्ड', 'शैक्षणिक प्रमाण', 'बेरोजगार स्थिति'],
    searchQuery: 'PMKVY skill training enrollment form online registration pdf',
    guide: {
      purpose: {
        en: 'To provide industry-relevant skill training to youth to help them in securing a better livelihood.',
        hi: 'युवाओं को बेहतर आजीविका सुरक्षित करने में मदद करने के लिए उद्योग-प्रासंगिक कौशल प्रशिक्षण प्रदान करना।'
      },
      eligibility: {
        en: 'Unemployed youth or school/college dropouts with a verifiable identity proof.',
        hi: 'सत्यापन योग्य पहचान प्रमाण के साथ बेरोजगार युवा या स्कूल/कॉलेज छोड़ने वाले।'
      },
      documents: {
        en: ['Aadhaar Card', 'Bank Account Details', 'Educational Certificates', 'Passport size Photographs'],
        hi: ['आधार कार्ड', 'बैंक खाते का विवरण', 'शैक्षणिक प्रमाण पत्र', 'पासपोर्ट साइज फोटो']
      },
      process: {
        en: '1. Visit the PMKVY official website or a nearby training center. 2. Find a training partner and course. 3. Register online or at the center. 4. Complete the training and assessment. 5. Receive a certificate and monetary reward.',
        hi: '1. PMKVY की आधिकारिक वेबसाइट या नजदीकी प्रशिक्षण केंद्र पर जाएं। 2. एक प्रशिक्षण भागीदार और पाठ्यक्रम खोजें। 3. ऑनलाइन या केंद्र पर पंजीकरण करें। 4. प्रशिक्षण और मूल्यांकन पूरा करें। 5. एक प्रमाण पत्र और मौद्रिक इनाम प्राप्त करें।'
      },
      tips: {
        en: 'Choose a course that aligns with your interest and the job demand in your area.',
        hi: 'ऐसा कोर्स चुनें जो आपकी रुचि और आपके क्षेत्र में नौकरी की मांग के अनुरूप हो।'
      }
    }
  },
  {
    id: 'free-coaching-scheme-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Free Coaching',
    serviceNameHi: 'मुफ्त कोचिंग',
    formName: 'Anuprati / Abhyudaya Form',
    formNameHi: 'अनुप्रति / अभ्युदय फॉर्म',
    description: 'Application for free coaching for competitive exams like UPSC, JEE, NEET.',
    descriptionHi: 'UPSC, JEE, NEET जैसी प्रतियोगी परीक्षाओं के लिए मुफ्त कोचिंग के लिए आवेदन।',
    icon: BookOpen,
    guidelines: ['Income limit', 'Academic merit', 'Caste certificate'],
    guidelinesHi: ['आय सीमा', 'शैक्षणिक योग्यता', 'जाति प्रमाण पत्र'],
    searchQuery: 'Mukhyamantri Anuprati coaching scheme application form Rajasthan online pdf',
    guide: {
      purpose: {
        en: 'To provide financial assistance or free coaching to meritorious students from underprivileged backgrounds for competitive exams.',
        hi: 'प्रतियोगी परीक्षाओं के लिए वंचित पृष्ठभूमि के मेधावी छात्रों को वित्तीय सहायता या मुफ्त कोचिंग प्रदान करना।'
      },
      eligibility: {
        en: 'Students from SC/ST/OBC/EWS categories with family income below a certain limit (usually 8 Lakhs).',
        hi: 'SC/ST/OBC/EWS श्रेणियों के छात्र जिनकी पारिवारिक आय एक निश्चित सीमा (आमतौर पर 8 लाख) से कम है।'
      },
      documents: {
        en: ['Caste Certificate', 'Income Certificate', 'Marksheets of 10th and 12th', 'Aadhaar Card', 'Jan Aadhaar Card (for Rajasthan)'],
        hi: ['जाति प्रमाण पत्र', 'आय प्रमाण पत्र', '10वीं और 12वीं की मार्कशीट', 'आधार कार्ड', 'जन आधार कार्ड (राजस्थान के लिए)']
      },
      process: {
        en: '1. Apply online on the SJMS portal (for Rajasthan) or respective state portal. 2. Select the "Anuprati Coaching" scheme. 3. Upload documents and select the coaching institute. 4. Merit list is prepared based on marks.',
        hi: '1. SJMS पोर्टल (राजस्थान के लिए) या संबंधित राज्य पोर्टल पर ऑनलाइन आवेदन करें। 2. "अनुप्रति कोचिंग" योजना चुनें। 3. दस्तावेज अपलोड करें और कोचिंग संस्थान का चयन करें। 4. अंकों के आधार पर मेरिट सूची तैयार की जाती है।'
      },
      tips: {
        en: 'Ensure your income and caste certificates are updated and valid.',
        hi: 'सुनिश्चित करें कि आपके आय और जाति प्रमाण पत्र अपडेट और मान्य हैं।'
      }
    }
  },
  {
    id: 'laptop-tablet-distribution-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Free Laptop',
    serviceNameHi: 'मुफ्त लैपटॉप',
    formName: 'Student Device Scheme Form',
    formNameHi: 'छात्र डिवाइस योजना फॉर्म',
    description: 'Application for free laptops or tablets distributed by the state government to meritorious students.',
    descriptionHi: 'मेधावी छात्रों को राज्य सरकार द्वारा वितरित मुफ्त लैपटॉप या टैबलेट के लिए आवेदन।',
    icon: Laptop,
    guidelines: ['Merit list', 'School/College enrollment', 'Income proof'],
    guidelinesHi: ['मेरिट सूची', 'स्कूल/कॉलेज नामांकन', 'आय प्रमाण'],
    searchQuery: 'Free laptop tablet distribution scheme application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To provide digital devices to students to support their education and digital literacy.',
        hi: 'छात्रों को उनकी शिक्षा और डिजिटल साक्षरता का समर्थन करने के लिए डिजिटल डिवाइस प्रदान करना।'
      },
      eligibility: {
        en: 'Students who have scored above a certain percentage in 10th or 12th board exams.',
        hi: 'वे छात्र जिन्होंने 10वीं या 12वीं की बोर्ड परीक्षाओं में एक निश्चित प्रतिशत से अधिक अंक प्राप्त किए हैं।'
      },
      documents: {
        en: ['Board Exam Marksheet', 'Identity Proof (Aadhaar)', 'Bonafide Certificate from School', 'Income Certificate'],
        hi: ['बोर्ड परीक्षा की मार्कशीट', 'पहचान प्रमाण (आधार)', 'स्कूल से बोनाफाइड सर्टिफिकेट', 'आय प्रमाण पत्र']
      },
      process: {
        en: '1. The merit list is usually prepared by the education department automatically. 2. Students may need to verify their details through their school/college. 3. Distribution happens at district or block level events.',
        hi: '1. मेरिट सूची आमतौर पर शिक्षा विभाग द्वारा स्वचालित रूप से तैयार की जाती है। 2. छात्रों को अपने स्कूल/कॉलेज के माध्यम से अपने विवरणों को सत्यापित करने की आवश्यकता हो सकती है। 3. वितरण जिला या ब्लॉक स्तर के कार्यक्रमों में होता है।'
      },
      tips: {
        en: 'Check the official education department website for the merit list and distribution schedule.',
        hi: 'मेरिट सूची और वितरण कार्यक्रम के लिए आधिकारिक शिक्षा विभाग की वेबसाइट देखें।'
      }
    }
  },
  {
    id: 'cycle-distribution-scheme-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Free Cycle',
    serviceNameHi: 'मुफ्त साइकिल',
    formName: 'Student Cycle Scheme Form',
    formNameHi: 'छात्र साइकिल योजना फॉर्म',
    description: 'Application for free cycles for students (especially girls) to commute to school.',
    descriptionHi: 'स्कूल जाने के लिए छात्रों (विशेषकर लड़कियों) के लिए मुफ्त साइकिल के लिए आवेदन।',
    icon: Bike,
    guidelines: ['Distance from school', 'Class 9th enrollment', 'Caste/Income criteria'],
    guidelinesHi: ['स्कूल से दूरी', 'कक्षा 9वीं में नामांकन', 'जाति/आय मानदंड'],
    searchQuery: 'Free cycle distribution scheme application form Rajasthan school pdf',
    guide: {
      purpose: {
        en: 'To encourage students, especially girls from rural areas, to continue their education by providing a means of transport.',
        hi: 'छात्रों, विशेष रूप से ग्रामीण क्षेत्रों की लड़कियों को परिवहन का साधन प्रदान करके अपनी शिक्षा जारी रखने के लिए प्रोत्साहित करना।'
      },
      eligibility: {
        en: 'Girls studying in class 9 in government schools who live more than 2-5 km away from school.',
        hi: 'सरकारी स्कूलों में कक्षा 9 में पढ़ने वाली लड़कियां जो स्कूल से 2-5 किमी से अधिक दूर रहती हैं।'
      },
      documents: {
        en: ['Aadhaar Card', 'Jan Aadhaar Card', 'School Admission Proof', 'Distance Certificate (from school head)'],
        hi: ['आधार कार्ड', 'जन आधार कार्ड', 'स्कूल प्रवेश प्रमाण', 'दूरी प्रमाण पत्र (स्कूल प्रमुख से)']
      },
      process: {
        en: '1. The school identifies eligible students based on enrollment and distance. 2. Parents fill a simple consent/application form. 3. Cycles are distributed at the school premises.',
        hi: '1. स्कूल नामांकन और दूरी के आधार पर पात्र छात्रों की पहचान करता है। 2. माता-पिता एक साधारण सहमति/आवेदन फॉर्म भरते हैं। 3. साइकिल स्कूल परिसर में वितरित की जाती हैं।'
      },
      tips: {
        en: 'Ensure your address in the school records is accurate to qualify for the distance criteria.',
        hi: 'दूरी के मानदंडों के लिए अर्हता प्राप्त करने के लिए सुनिश्चित करें कि स्कूल रिकॉर्ड में आपका पता सटीक है।'
      }
    }
  },
  {
    id: 'voter-id-deletion-form-7',
    category: 'Voter ID Forms',
    categoryHi: 'वोटर आईडी फॉर्म',
    serviceName: 'Voter ID',
    serviceNameHi: 'वोटर आईडी',
    formName: 'Voter ID Form 7 (Deletion)',
    formNameHi: 'वोटर आईडी फॉर्म 7 (हटाना)',
    description: 'Application for objecting to inclusion or seeking deletion of a name from the electoral roll.',
    descriptionHi: 'निर्वाचक नामावली में नाम शामिल करने पर आपत्ति करने या नाम हटाने के लिए आवेदन।',
    icon: UserMinus,
    guidelines: ['Voter ID of deceased/shifted', 'Death certificate', 'Applicant details'],
    guidelinesHi: ['मृतक/स्थानांतरित का वोटर आईडी', 'मृत्यु प्रमाण पत्र', 'आवेदक का विवरण'],
    searchQuery: 'Voter ID form 7 deletion application pdf online NVSP',
    guide: {
      purpose: {
        en: 'To delete a name from the voter list due to death, shifting, or duplicate entry.',
        hi: 'मृत्यु, स्थानांतरण या डुप्लीकेट प्रविष्टि के कारण मतदाता सूची से नाम हटाने के लिए।'
      },
      eligibility: {
        en: 'Any person already registered in the electoral roll of the same constituency.',
        hi: 'उसी निर्वाचन क्षेत्र की निर्वाचक नामावली में पहले से पंजीकृत कोई भी व्यक्ति।'
      },
      documents: {
        en: ['Voter ID of the person to be deleted', 'Death Certificate (in case of death)', 'Proof of shifting (in case of shifted voter)', 'Applicant\'s Voter ID'],
        hi: ['हटाए जाने वाले व्यक्ति का वोटर आईडी', 'मृत्यु प्रमाण पत्र (मृत्यु के मामले में)', 'स्थानांतरण का प्रमाण (स्थानांतरित मतदाता के मामले में)', 'आवेदक का वोटर आईडी']
      },
      process: {
        en: '1. Visit NVSP portal or use Voter Helpline App. 2. Select Form 7. 3. Provide details of the person whose name is to be deleted. 4. State the reason (Death/Shifted/Duplicate). 5. Submit and track status.',
        hi: '1. NVSP पोर्टल पर जाएं या वोटर हेल्पलाइन ऐप का उपयोग करें। 2. फॉर्म 7 चुनें। 3. उस व्यक्ति का विवरण प्रदान करें जिसका नाम हटाया जाना है। 4. कारण बताएं (मृत्यु/स्थानांतरित/डुप्लीकेट)। 5. जमा करें और स्थिति को ट्रैक करें।'
      },
      tips: {
        en: 'Form 7 is crucial for maintaining an accurate and clean voter list.',
        hi: 'सटीक और स्वच्छ मतदाता सूची बनाए रखने के लिए फॉर्म 7 महत्वपूर्ण है।'
      }
    }
  },
  {
    id: 'voter-id-transposition-form-8a',
    category: 'Voter ID Forms',
    categoryHi: 'वोटर आईडी फॉर्म',
    serviceName: 'Voter ID',
    serviceNameHi: 'वोटर आईडी',
    formName: 'Voter ID Form 8A (Transposition)',
    formNameHi: 'वोटर आईडी फॉर्म 8A (स्थानांतरण)',
    description: 'Application for transposition of entry in the electoral roll (shifting within the same constituency).',
    descriptionHi: 'निर्वाचक नामावली में प्रविष्टि के स्थानांतरण के लिए आवेदन (उसी निर्वाचन क्षेत्र के भीतर स्थानांतरण)।',
    icon: MapPin,
    guidelines: ['Same constituency', 'New address proof', 'Existing Voter ID'],
    guidelinesHi: ['वही निर्वाचन क्षेत्र', 'नया पता प्रमाण', 'मौजूदा वोटर आईडी'],
    searchQuery: 'Voter ID form 8A transposition shifting within constituency pdf',
    guide: {
      purpose: {
        en: 'To change the address in the voter list when a voter shifts from one place to another within the same assembly constituency.',
        hi: 'जब कोई मतदाता उसी विधानसभा क्षेत्र के भीतर एक स्थान से दूसरे स्थान पर स्थानांतरित होता है, तो मतदाता सूची में पता बदलने के लिए।'
      },
      eligibility: {
        en: 'Registered voters who have moved to a new address in the same constituency.',
        hi: 'पंजीकृत मतदाता जो उसी निर्वाचन क्षेत्र में नए पते पर चले गए हैं।'
      },
      documents: {
        en: ['Existing Voter ID Card', 'Proof of New Address (Electricity Bill/Rent Agreement/Aadhaar)', 'Passport size Photograph'],
        hi: ['मौजूदा वोटर आईडी कार्ड', 'नए पते का प्रमाण (बिजली बिल/किराया समझौता/आधार)', 'पासपोर्ट साइज फोटो']
      },
      process: {
        en: '1. Login to NVSP or Voter Helpline. 2. Select Form 8A. 3. Fill current and new address details. 4. Upload address proof. 5. Submit the application.',
        hi: '1. NVSP या वोटर हेल्पलाइन पर लॉगिन करें। 2. फॉर्म 8A चुनें। 3. वर्तमान और नए पते का विवरण भरें। 4. पता प्रमाण अपलोड करें। 5. आवेदन जमा करें।'
      },
      tips: {
        en: 'If shifting to a different constituency, use Form 6 instead of Form 8A.',
        hi: 'यदि किसी अलग निर्वाचन क्षेत्र में स्थानांतरित हो रहे हैं, तो फॉर्म 8A के बजाय फॉर्म 6 का उपयोग करें।'
      }
    }
  },
  {
    id: 'voter-id-replacement-form-001',
    category: 'Voter ID Forms',
    categoryHi: 'वोटर आईडी फॉर्म',
    serviceName: 'Voter ID',
    serviceNameHi: 'वोटर आईडी',
    formName: 'Voter ID Replacement (Form 001)',
    formNameHi: 'वोटर आईडी रिप्लेसमेंट (फॉर्म 001)',
    description: 'Application for issuance of a replacement Voter ID card (EPIC) in case of loss or damage.',
    descriptionHi: 'नुकसान या क्षति के मामले में प्रतिस्थापन वोटर आईडी कार्ड (EPIC) जारी करने के लिए आवेदन।',
    icon: RefreshCw,
    guidelines: ['FIR for lost card', 'Fee payment', 'Photo'],
    guidelinesHi: ['खोए हुए कार्ड के लिए एफआईआर', 'शुल्क भुगतान', 'फोटो'],
    searchQuery: 'Voter ID replacement form 001 download pdf online',
    guide: {
      purpose: {
        en: 'To get a new physical Voter ID card if the old one is lost, stolen, or mutilated.',
        hi: 'यदि पुराना वोटर आईडी कार्ड खो गया है, चोरी हो गया है या खराब हो गया है तो नया भौतिक कार्ड प्राप्त करने के लिए।'
      },
      eligibility: {
        en: 'Any registered voter whose card is no longer usable or available.',
        hi: 'कोई भी पंजीकृत मतदाता जिसका कार्ड अब उपयोग योग्य या उपलब्ध नहीं है।'
      },
      documents: {
        en: ['Copy of FIR (if lost)', 'Damaged card (if available)', 'Identity Proof', 'Passport size Photograph'],
        hi: ['एफआईआर की प्रति (यदि खो गया है)', 'क्षतिग्रस्त कार्ड (यदि उपलब्ध हो)', 'पहचान प्रमाण', 'पासपोर्ट साइज फोटो']
      },
      process: {
        en: '1. Apply through the NVSP portal or at the local ERO/VRE office. 2. Fill Form 001. 3. Pay the replacement fee (usually ₹25-30). 4. The new card is sent by post or can be collected.',
        hi: '1. NVSP पोर्टल के माध्यम से या स्थानीय ERO/VRE कार्यालय में आवेदन करें। 2. फॉर्म 001 भरें। 3. प्रतिस्थापन शुल्क का भुगतान करें (आमतौर पर ₹25-30)। 4. नया कार्ड डाक द्वारा भेजा जाता है या प्राप्त किया जा सकता है।'
      },
      tips: {
        en: 'You can also download a digital version (e-EPIC) from the NVSP portal for free.',
        hi: 'आप NVSP पोर्टल से मुफ्त में डिजिटल संस्करण (e-EPIC) भी डाउनलोड कर सकते हैं।'
      }
    }
  },
  {
    id: 'police-pcc-passport-form',
    category: 'Police Services',
    categoryHi: 'पुलिस सेवाएं',
    serviceName: 'PCC',
    serviceNameHi: 'पीसीसी',
    formName: 'Police Clearance Certificate (PCC)',
    formNameHi: 'पुलिस क्लीयरेंस सर्टिफिकेट (पीसीसी)',
    description: 'Certificate required for passport, visa, or employment purposes.',
    descriptionHi: 'पासपोर्ट, वीजा या रोजगार के उद्देश्यों के लिए आवश्यक प्रमाण पत्र।',
    icon: ShieldCheck,
    guidelines: ['Passport details', 'Address proof', 'Purpose of PCC'],
    guidelinesHi: ['पासपोर्ट विवरण', 'पता प्रमाण', 'पीसीसी का उद्देश्य'],
    searchQuery: 'Police clearance certificate PCC application form online Passport Seva pdf',
    guide: {
      purpose: {
        en: 'To certify that the applicant has no criminal record and is cleared by the police for travel or work.',
        hi: 'यह प्रमाणित करने के लिए कि आवेदक का कोई आपराधिक रिकॉर्ड नहीं है और पुलिस द्वारा यात्रा या काम के लिए मंजूरी दे दी गई है।'
      },
      eligibility: {
        en: 'Indian citizens applying for long-term visas, emigration, or specific jobs.',
        hi: 'दीर्घकालिक वीजा, उत्प्रवास या विशिष्ट नौकरियों के लिए आवेदन करने वाले भारतीय नागरिक।'
      },
      documents: {
        en: ['Original Passport and Photocopy', 'Address Proof (Aadhaar/Voter ID/Electricity Bill)', 'Letter from the agency requesting PCC', 'Passport size Photographs'],
        hi: ['मूल पासपोर्ट और फोटोकॉपी', 'पता प्रमाण (आधार/वोटर आईडी/बिजली बिल)', 'पीसीसी का अनुरोध करने वाली एजेंसी का पत्र', 'पासपोर्ट साइज फोटो']
      },
      process: {
        en: '1. Register on the Passport Seva portal. 2. Fill the PCC application form. 3. Pay the fee and book an appointment at PSK/POPSK. 4. Visit for document verification. 5. Police verification at your local station. 6. PCC issued after clear report.',
        hi: '1. पासपोर्ट सेवा पोर्टल पर पंजीकरण करें। 2. पीसीसी आवेदन फॉर्म भरें। 3. शुल्क का भुगतान करें और PSK/POPSK में अपॉइंटमेंट बुक करें। 4. दस्तावेज़ सत्यापन के लिए जाएँ। 5. आपके स्थानीय स्टेशन पर पुलिस सत्यापन। 6. स्पष्ट रिपोर्ट के बाद पीसीसी जारी।'
      },
      tips: {
        en: 'Ensure your current address matches the address in your passport to avoid delays.',
        hi: 'देरी से बचने के लिए सुनिश्चित करें कि आपका वर्तमान पता आपके पासपोर्ट के पते से मेल खाता है।'
      }
    }
  },
  {
    id: 'tenant-verification-form',
    category: 'Police Services',
    categoryHi: 'पुलिस सेवाएं',
    serviceName: 'Verification',
    serviceNameHi: 'सत्यापन',
    formName: 'Tenant Verification Form',
    formNameHi: 'किरायेदार सत्यापन फॉर्म',
    description: 'Mandatory verification of tenants by the property owner at the local police station.',
    descriptionHi: 'स्थानीय पुलिस स्टेशन में संपत्ति के मालिक द्वारा किरायेदारों का अनिवार्य सत्यापन।',
    icon: Home,
    guidelines: ['Tenant ID proof', 'Owner details', 'Rent agreement'],
    guidelinesHi: ['किरायेदार का आईडी प्रमाण', 'मालिक का विवरण', 'किराया समझौता'],
    searchQuery: 'Tenant verification form police department Rajasthan pdf download',
    guide: {
      purpose: {
        en: 'To ensure the safety and security of the neighborhood by verifying the background of individuals renting a property.',
        hi: 'संपत्ति किराए पर लेने वाले व्यक्तियों की पृष्ठभूमि का सत्यापन करके पड़ोस की सुरक्षा सुनिश्चित करना।'
      },
      eligibility: {
        en: 'Property owners who are renting out their premises to new tenants.',
        hi: 'संपत्ति के मालिक जो अपने परिसर को नए किरायेदारों को किराए पर दे रहे हैं।'
      },
      documents: {
        en: ['Tenant\'s Aadhaar Card/Voter ID', 'Tenant\'s Passport size Photograph', 'Owner\'s Identity Proof', 'Copy of Rent Agreement', 'Tenant\'s Permanent Address Proof'],
        hi: ['किरायेदार का आधार कार्ड/वोटर आईडी', 'किरायेदार का पासपोर्ट साइज फोटो', 'मालिक का पहचान प्रमाण', 'किराया समझौते की प्रति', 'किरायेदार का स्थायी पता प्रमाण']
      },
      process: {
        en: '1. Download the tenant verification form from the state police website. 2. Fill details of the owner and the tenant. 3. Attach photos and ID proofs. 4. Submit the form at the local police station. 5. Obtain a receipt/acknowledgment.',
        hi: '1. राज्य पुलिस की वेबसाइट से किरायेदार सत्यापन फॉर्म डाउनलोड करें। 2. मालिक और किरायेदार का विवरण भरें। 3. फोटो और आईडी प्रमाण संलग्न करें। 4. स्थानीय पुलिस स्टेशन में फॉर्म जमा करें। 5. रसीद/पावती प्राप्त करें।'
      },
      tips: {
        en: 'Many cities now offer online tenant verification through their police portals or apps.',
        hi: 'कई शहर अब अपने पुलिस पोर्टल या ऐप के माध्यम से ऑनलाइन किरायेदार सत्यापन की पेशकश करते हैं।'
      }
    }
  },
  {
    id: 'domestic-help-verification-form',
    category: 'Police Services',
    categoryHi: 'पुलिस सेवाएं',
    serviceName: 'Verification',
    serviceNameHi: 'सत्यापन',
    formName: 'Domestic Help Verification',
    formNameHi: 'घरेलू सहायक सत्यापन',
    description: 'Verification of domestic workers, drivers, or security guards by the employer.',
    descriptionHi: 'नियोक्ता द्वारा घरेलू कामगारों, ड्राइवरों या सुरक्षा गार्डों का सत्यापन।',
    icon: UserCheck,
    guidelines: ['Employee ID proof', 'Permanent address', 'Employer details'],
    guidelinesHi: ['कर्मचारी का आईडी प्रमाण', 'स्थायी पता', 'नियोक्ता का विवरण'],
    searchQuery: 'Domestic help verification form police department Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To verify the identity and background of domestic help for the safety of the household.',
        hi: 'घर की सुरक्षा के लिए घरेलू सहायकों की पहचान और पृष्ठभूमि का सत्यापन करना।'
      },
      eligibility: {
        en: 'Individuals or families hiring domestic workers, cooks, or drivers.',
        hi: 'घरेलू कामगारों, रसोइयों या ड्राइवरों को काम पर रखने वाले व्यक्ति या परिवार।'
      },
      documents: {
        en: ['Worker\'s Aadhaar Card/Voter ID', 'Worker\'s Passport size Photograph', 'Employer\'s ID Proof', 'Worker\'s Permanent Address Proof (Native place)'],
        hi: ['कामगार का आधार कार्ड/वोटर आईडी', 'कामगार का पासपोर्ट साइज फोटो', 'नियोक्ता का आईडी प्रमाण', 'कामगार का स्थायी पता प्रमाण (मूल स्थान)']
      },
      process: {
        en: '1. Fill the domestic help verification form. 2. Provide details of the worker\'s previous employer if any. 3. Submit the form at the local police station. 4. Police will verify the details with the worker\'s native police station.',
        hi: '1. घरेलू सहायक सत्यापन फॉर्म भरें। 2. यदि कोई हो तो कामगार के पिछले नियोक्ता का विवरण प्रदान करें। 3. स्थानीय पुलिस स्टेशन में फॉर्म जमा करें। 4. पुलिस कामगार के मूल पुलिस स्टेशन के साथ विवरणों को सत्यापित करेगी।'
      },
      tips: {
        en: 'Always keep a copy of the worker\'s ID and a recent photograph before they start working.',
        hi: 'काम शुरू करने से पहले हमेशा कामगार की आईडी की एक प्रति और एक हालिया फोटो अपने पास रखें।'
      }
    }
  },
  {
    id: 'lost-article-report-form',
    category: 'Police Services',
    categoryHi: 'पुलिस सेवाएं',
    serviceName: 'Lost Report',
    serviceNameHi: 'खोई हुई रिपोर्ट',
    formName: 'Lost Article Report (LDR)',
    formNameHi: 'खोई हुई वस्तु की रिपोर्ट (LDR)',
    description: 'Online report for lost items like mobile, wallet, or documents (not for theft/crime).',
    descriptionHi: 'मोबाइल, वॉलेट या दस्तावेजों जैसी खोई हुई वस्तुओं के लिए ऑनलाइन रिपोर्ट (चोरी/अपराध के लिए नहीं)।',
    icon: Search,
    guidelines: ['Item details', 'Place of loss', 'Identity proof'],
    guidelinesHi: ['वस्तु का विवरण', 'खोने का स्थान', 'पहचान प्रमाण'],
    searchQuery: 'Online lost article report Rajasthan police LDR pdf',
    guide: {
      purpose: {
        en: 'To register a report for lost items which is required for obtaining duplicate documents (SIM, License, etc.).',
        hi: 'खोई हुई वस्तुओं के लिए एक रिपोर्ट दर्ज करना जो डुप्लीकेट दस्तावेज (सिम, लाइसेंस, आदि) प्राप्त करने के लिए आवश्यक है।'
      },
      eligibility: {
        en: 'Anyone who has lost an item in a public place without any criminal act involved.',
        hi: 'कोई भी जिसने बिना किसी आपराधिक कृत्य के सार्वजनिक स्थान पर कोई वस्तु खो दी है।'
      },
      documents: {
        en: ['Identity Proof of the applicant', 'Details of the lost item (IMEI for mobile, Card number for ID)', 'Approximate date and time of loss'],
        hi: ['आवेदक का पहचान प्रमाण', 'खोई हुई वस्तु का विवरण (मोबाइल के लिए IMEI, आईडी के लिए कार्ड नंबर)', 'खोने की अनुमानित तिथि और समय']
      },
      process: {
        en: '1. Visit the state police website or app. 2. Select "Lost Article Report". 3. Fill the details of the item and the incident. 4. Submit the report. 5. Download the digitally signed LDR immediately.',
        hi: '1. राज्य पुलिस की वेबसाइट या ऐप पर जाएं। 2. "खोई हुई वस्तु की रिपोर्ट" चुनें। 3. वस्तु और घटना का विवरण भरें। 4. रिपोर्ट जमा करें। 5. डिजिटल रूप से हस्ताक्षरित एलडीआर तुरंत डाउनलोड करें।'
      },
      tips: {
        en: 'LDR is a civil report and cannot be used for insurance claims in case of theft (which requires an FIR).',
        hi: 'एलडीआर एक नागरिक रिपोर्ट है और चोरी के मामले में बीमा दावों के लिए उपयोग नहीं की जा सकती (जिसके लिए प्राथमिकी की आवश्यकता होती है)।'
      }
    }
  },
  {
    id: 'loudspeaker-permission-form',
    category: 'Police Services',
    categoryHi: 'पुलिस सेवाएं',
    serviceName: 'Permission',
    serviceNameHi: 'अनुमति',
    formName: 'Loudspeaker / Event Permission',
    formNameHi: 'लाउडस्पीकर / कार्यक्रम अनुमति',
    description: 'Permission for using loudspeakers or organizing public events.',
    descriptionHi: 'लाउडस्पीकर का उपयोग करने या सार्वजनिक कार्यक्रमों के आयोजन के लिए अनुमति।',
    icon: Volume2,
    guidelines: ['Event details', 'Time limits', 'Venue permission'],
    guidelinesHi: ['कार्यक्रम का विवरण', 'समय सीमा', 'स्थान की अनुमति'],
    searchQuery: 'Police permission for loudspeaker and public event application form pdf',
    guide: {
      purpose: {
        en: 'To obtain legal authorization for using sound systems or holding a gathering to ensure noise control and public order.',
        hi: 'शोर नियंत्रण और सार्वजनिक व्यवस्था सुनिश्चित करने के लिए ध्वनि प्रणालियों का उपयोग करने या सभा आयोजित करने के लिए कानूनी प्राधिकरण प्राप्त करना।'
      },
      eligibility: {
        en: 'Individuals, NGOs, or organizations planning a public event.',
        hi: 'सार्वजनिक कार्यक्रम की योजना बनाने वाले व्यक्ति, एनजीओ या संगठन।'
      },
      documents: {
        en: ['Application stating the reason and duration', 'Identity Proof of the organizer', 'Permission from the venue owner', 'Affidavit to follow noise pollution rules'],
        hi: ['कारण और अवधि बताते हुए आवेदन', 'आयोजक का पहचान प्रमाण', 'स्थान के मालिक से अनुमति', 'ध्वनि प्रदूषण नियमों का पालन करने के लिए हलफनामा']
      },
      process: {
        en: '1. Submit the application at the local police station or SDM office. 2. Provide details of the sound system and timings. 3. Police verify the location and potential disturbance. 4. Permission is granted with specific conditions.',
        hi: '1. स्थानीय पुलिस स्टेशन या एसडीएम कार्यालय में आवेदन जमा करें। 2. ध्वनि प्रणाली और समय का विवरण प्रदान करें। 3. पुलिस स्थान और संभावित गड़बड़ी की पुष्टि करती है। 4. विशिष्ट शर्तों के साथ अनुमति दी जाती है।'
      },
      tips: {
        en: 'Apply at least 7 days in advance. Loudspeakers are generally not allowed after 10 PM.',
        hi: 'कम से कम 7 दिन पहले आवेदन करें। लाउडस्पीकर आमतौर पर रात 10 बजे के बाद अनुमति नहीं दी जाती है।'
      }
    }
  },
  {
    id: 'arms-license-application-form',
    category: 'Police Services',
    categoryHi: 'पुलिस सेवाएं',
    serviceName: 'Arms License',
    serviceNameHi: 'हथियार लाइसेंस',
    formName: 'New Arms License Application',
    formNameHi: 'नया हथियार लाइसेंस आवेदन',
    description: 'Application for obtaining a license to possess a firearm for self-defense.',
    descriptionHi: 'आत्मरक्षा के लिए आग्नेयास्त्र रखने के लिए लाइसेंस प्राप्त करने के लिए आवेदन।',
    icon: Crosshair,
    guidelines: ['Reason for license', 'Medical fitness', 'Training certificate'],
    guidelinesHi: ['लाइसेंस का कारण', 'चिकित्सा फिटनेस', 'प्रशिक्षण प्रमाण पत्र'],
    searchQuery: 'Arms license application form A Rajasthan police pdf',
    guide: {
      purpose: {
        en: 'To legally own a firearm for personal protection, sports, or crop protection.',
        hi: 'व्यक्तिगत सुरक्षा, खेल या फसल सुरक्षा के लिए कानूनी रूप से आग्नेयास्त्र रखना।'
      },
      eligibility: {
        en: 'Indian citizens aged 21 or above with a genuine threat to life or specific need.',
        hi: '21 वर्ष या उससे अधिक आयु के भारतीय नागरिक जिनके जीवन को वास्तविक खतरा या विशिष्ट आवश्यकता है।'
      },
      documents: {
        en: ['Form A Application', 'Identity and Address Proof', 'Age Proof', 'Medical Fitness Certificate (Form S-3)', 'Safe Custody Declaration', 'Police Verification Report', 'Training Certificate'],
        hi: ['फॉर्म ए आवेदन', 'पहचान और पता प्रमाण', 'आयु प्रमाण', 'मेडिकल फिटनेस सर्टिफिकेट (फॉर्म एस-3)', 'सुरक्षित अभिरक्षा घोषणा', 'पुलिस सत्यापन रिपोर्ट', 'प्रशिक्षण प्रमाण पत्र']
      },
      process: {
        en: '1. Submit Form A to the District Magistrate (DM) office. 2. Police verification and background check. 3. Interview with the licensing authority. 4. Grant of license if satisfied. 5. Purchase weapon and get it endorsed on the license.',
        hi: '1. जिला मजिस्ट्रेट (डीएम) कार्यालय में फॉर्म ए जमा करें। 2. पुलिस सत्यापन और पृष्ठभूमि की जांच। 3. लाइसेंसिंग प्राधिकरण के साथ साक्षात्कार। 4. संतुष्ट होने पर लाइसेंस प्रदान करना। 5. हथियार खरीदें और इसे लाइसेंस पर पृष्ठांकित करवाएं।'
      },
      tips: {
        en: 'Arms licenses are highly regulated and granted only after strict scrutiny.',
        hi: 'हथियार लाइसेंस अत्यधिक विनियमित होते हैं और सख्त जांच के बाद ही दिए जाते हैं।'
      }
    }
  },
  {
    id: 'arms-license-renewal-form',
    category: 'Police Services',
    categoryHi: 'पुलिस सेवाएं',
    serviceName: 'Arms License',
    serviceNameHi: 'हथियार लाइसेंस',
    formName: 'Arms License Renewal',
    formNameHi: 'हथियार लाइसेंस नवीनीकरण',
    description: 'Application for renewing an existing arms license before expiry.',
    descriptionHi: 'समाप्ति से पहले मौजूदा हथियार लाइसेंस के नवीनीकरण के लिए आवेदन।',
    icon: RotateCw,
    guidelines: ['Existing license', 'Weapon inspection', 'Renewal fee'],
    guidelinesHi: ['मौजूदा लाइसेंस', 'हथियार निरीक्षण', 'नवीनीकरण शुल्क'],
    searchQuery: 'Arms license renewal application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To extend the validity of an arms license, usually every 3 or 5 years.',
        hi: 'हथियार लाइसेंस की वैधता बढ़ाने के लिए, आमतौर पर हर 3 या 5 साल में।'
      },
      eligibility: {
        en: 'Existing arms license holders.',
        hi: 'मौजूदा हथियार लाइसेंस धारक।'
      },
      documents: {
        en: ['Original Arms License', 'Renewal Application Form', 'Weapon for inspection', 'Identity Proof', 'Renewal Fee Receipt'],
        hi: ['मूल हथियार लाइसेंस', 'नवीनीकरण आवेदन फॉर्म', 'निरीक्षण के लिए हथियार', 'पहचान प्रमाण', 'नवीनीकरण शुल्क रसीद']
      },
      process: {
        en: '1. Apply at least 30 days before the expiry date. 2. Submit the license and weapon for inspection at the local police station. 3. Submit the application at the DM office. 4. License is renewed after verification.',
        hi: '1. समाप्ति तिथि से कम से कम 30 दिन पहले आवेदन करें। 2. स्थानीय पुलिस स्टेशन में निरीक्षण के लिए लाइसेंस और हथियार जमा करें। 3. डीएम कार्यालय में आवेदन जमा करें। 4. सत्यापन के बाद लाइसेंस का नवीनीकरण किया जाता है।'
      },
      tips: {
        en: 'Carrying a weapon with an expired license is a criminal offense.',
        hi: 'समाप्त हो चुके लाइसेंस के साथ हथियार ले जाना एक आपराधिक अपराध है।'
      }
    }
  },
  {
    id: 'solvency-certificate-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Solvency',
    serviceNameHi: 'सॉल्वेंसी',
    formName: 'Solvency Certificate Application',
    formNameHi: 'सॉल्वेंसी सर्टिफिकेट आवेदन',
    description: 'Certificate proving the financial stability of an individual or firm.',
    descriptionHi: 'किसी व्यक्ति या फर्म की वित्तीय स्थिरता साबित करने वाला प्रमाण पत्र।',
    icon: Landmark,
    guidelines: ['Property details', 'Bank balance', 'Valuation report'],
    guidelinesHi: ['संपत्ति का विवरण', 'बैंक बैलेंस', 'मूल्यांकन रिपोर्ट'],
    searchQuery: 'Solvency certificate application form Rajasthan e-Mitra pdf',
    guide: {
      purpose: {
        en: 'To certify that a person or firm is financially capable of meeting their liabilities, often required for government tenders or bank guarantees.',
        hi: 'यह प्रमाणित करने के लिए कि कोई व्यक्ति या फर्म अपनी देनदारियों को पूरा करने के लिए आर्थिक रूप से सक्षम है, अक्सर सरकारी निविदाओं या बैंक गारंटी के लिए आवश्यक होता है।'
      },
      eligibility: {
        en: 'Individuals or business owners owning property or having significant bank balance.',
        hi: 'संपत्ति के मालिक या महत्वपूर्ण बैंक बैलेंस रखने वाले व्यक्ति या व्यवसाय के मालिक।'
      },
      documents: {
        en: ['Property Valuation Report by an approved valuer', 'Bank Statement/FD copies', 'Income Tax Returns (last 3 years)', 'Identity and Address Proof', 'Affidavit of assets and liabilities'],
        hi: ['अनुमोदित मूल्यांकक द्वारा संपत्ति मूल्यांकन रिपोर्ट', 'बैंक स्टेटमेंट/एफडी प्रतियां', 'आयकर रिटर्न (पिछले 3 वर्ष)', 'पहचान और पता प्रमाण', 'संपत्ति और देनदारियों का हलफनामा']
      },
      process: {
        en: '1. Apply online through e-Mitra or at the Tehsildar office. 2. Provide details of all assets. 3. Revenue officer (Patwari/Tehsildar) verifies the property. 4. Certificate is issued based on the net worth.',
        hi: '1. ई-मित्र के माध्यम से या तहसीलदार कार्यालय में ऑनलाइन आवेदन करें। 2. सभी संपत्तियों का विवरण प्रदान करें। 3. राजस्व अधिकारी (पटवारी/तहसीलदार) संपत्ति की पुष्टि करता है। 4. नेटवर्थ के आधार पर प्रमाण पत्र जारी किया जाता है।'
      },
      tips: {
        en: 'The certificate is usually issued for a specific amount and is valid for one financial year.',
        hi: 'प्रमाण पत्र आमतौर पर एक विशिष्ट राशि के लिए जारी किया जाता है और एक वित्तीय वर्ष के लिए मान्य होता।'
      }
    }
  },
  {
    id: 'succession-certificate-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Succession',
    serviceNameHi: 'उत्तराधिकार',
    formName: 'Succession Certificate Application',
    formNameHi: 'उत्तराधिकार प्रमाण पत्र आवेदन',
    description: 'Legal document for inheriting movable assets like bank accounts and shares of a deceased person.',
    descriptionHi: 'मृतक व्यक्ति के बैंक खातों और शेयरों जैसी चल संपत्ति विरासत में मिलने के लिए कानूनी दस्तावेज।',
    icon: Scale,
    guidelines: ['Death certificate', 'List of assets', 'Legal heirs details'],
    guidelinesHi: ['मृत्यु प्रमाण पत्र', 'संपत्तियों की सूची', 'कानूनी वारिसों का विवरण'],
    searchQuery: 'Succession certificate application form format India court pdf',
    guide: {
      purpose: {
        en: 'To establish the legal heirs of a deceased person for the purpose of claiming debts and securities (movable property).',
        hi: 'ऋण और प्रतिभूतियों (चल संपत्ति) का दावा करने के उद्देश्य से एक मृतक व्यक्ति के कानूनी वारिसों को स्थापित करना।'
      },
      eligibility: {
        en: 'Legal heirs of the deceased person.',
        hi: 'मृतक व्यक्ति के कानूनी वारिस।'
      },
      documents: {
        en: ['Death Certificate of the deceased', 'Identity Proof of all legal heirs', 'List of all movable assets (Bank accounts, FDs, Shares)', 'No Objection Certificate (NOC) from other heirs'],
        hi: ['मृतक का मृत्यु प्रमाण पत्र', 'सभी कानूनी वारिसों का पहचान प्रमाण', 'सभी चल संपत्तियों की सूची (बैंक खाते, एफडी, शेयर)', 'अन्य वारिसों से अनापत्ति प्रमाण पत्र (NOC)']
      },
      process: {
        en: '1. File a petition in the District Court. 2. A public notice is issued in newspapers. 3. If no objections are received within the stipulated time, the court conducts a hearing. 4. The court issues the certificate after payment of court fees.',
        hi: '1. जिला न्यायालय में एक याचिका दायर करें। 2. समाचार पत्रों में एक सार्वजनिक सूचना जारी की जाती है। 3. यदि निर्धारित समय के भीतर कोई आपत्ति प्राप्त नहीं होती है, तो अदालत सुनवाई करती है। 4. अदालत शुल्क के भुगतान के बाद अदालत प्रमाण पत्र जारी करती है।'
      },
      tips: {
        en: 'For immovable property (land/house), a "Letter of Administration" or "Probate" may be required instead.',
        hi: 'अचल संपत्ति (भूमि/मकान) के लिए, इसके बजाय "प्रशासन पत्र" या "प्रोबेट" की आवश्यकता हो सकती है।'
      }
    }
  },
  {
    id: 'surviving-member-certificate-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Certificate',
    serviceNameHi: 'प्रमाण पत्र',
    formName: 'Surviving Member Certificate',
    formNameHi: 'जीवित सदस्य प्रमाण पत्र',
    description: 'Certificate listing all surviving family members of a deceased person.',
    descriptionHi: 'मृतक व्यक्ति के सभी जीवित परिवार के सदस्यों को सूचीबद्ध करने वाला प्रमाण पत्र।',
    icon: Users,
    guidelines: ['Death certificate', 'Ration card', 'Family details'],
    guidelinesHi: ['मृत्यु प्रमाण पत्र', 'राशन कार्ड', 'परिवार का विवरण'],
    searchQuery: 'Surviving member certificate application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To officially identify the surviving members of a family after the death of the head of the family, often used for pension or insurance claims.',
        hi: 'परिवार के मुखिया की मृत्यु के बाद परिवार के जीवित सदस्यों की आधिकारिक रूप से पहचान करना, अक्सर पेंशन या बीमा दावों के लिए उपयोग किया जाता है।'
      },
      eligibility: {
        en: 'Immediate family members (Spouse, Children, Parents) of the deceased.',
        hi: 'मृतक के तत्काल परिवार के सदस्य (पति/पत्नी, बच्चे, माता-पिता)।'
      },
      documents: {
        en: ['Death Certificate', 'Ration Card/Jan Aadhaar', 'Identity Proof of all members', 'Affidavit by the applicant'],
        hi: ['मृत्यु प्रमाण पत्र', 'राशन कार्ड/जन आधार', 'सभी सदस्यों का पहचान प्रमाण', 'आवेदक द्वारा हलफनामा']
      },
      process: {
        en: '1. Apply at the SDM or Tehsildar office. 2. Provide details of all family members. 3. Field verification by the revenue officer. 4. Certificate is issued listing all surviving members.',
        hi: '1. एसडीएम या तहसीलदार कार्यालय में आवेदन करें। 2. परिवार के सभी सदस्यों का विवरण प्रदान करें। 3. राजस्व अधिकारी द्वारा क्षेत्र सत्यापन। 4. सभी जीवित सदस्यों को सूचीबद्ध करते हुए प्रमाण पत्र जारी किया जाता है।'
      },
      tips: {
        en: 'This is similar to a Legal Heir certificate but is often issued faster for specific administrative purposes.',
        hi: 'यह कानूनी वारिस प्रमाण पत्र के समान है लेकिन अक्सर विशिष्ट प्रशासनिक उद्देश्यों के लिए तेजी से जारी किया जाता है।'
      }
    }
  },
  {
    id: 'dependency-certificate-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Certificate',
    serviceNameHi: 'प्रमाण पत्र',
    formName: 'Dependency Certificate',
    formNameHi: 'निर्भरता प्रमाण पत्र',
    description: 'Certificate proving that an individual is financially dependent on another person.',
    descriptionHi: 'प्रमाण पत्र जो साबित करता है कि एक व्यक्ति दूसरे व्यक्ति पर आर्थिक रूप से निर्भर है।',
    icon: HeartHandshake,
    guidelines: ['Income proof', 'Relationship proof', 'Affidavit'],
    guidelinesHi: ['आय प्रमाण', 'संबंध प्रमाण', 'हलफनामा'],
    searchQuery: 'Dependency certificate application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To certify that a person (usually parents or siblings) is dependent on a government employee or a deceased person for their livelihood.',
        hi: 'यह प्रमाणित करने के लिए कि एक व्यक्ति (आमतौर पर माता-पिता या भाई-बहन) अपनी आजीविका के लिए सरकारी कर्मचारी या मृतक व्यक्ति पर निर्भर है।'
      },
      eligibility: {
        en: 'Family members with no independent source of income.',
        hi: 'आय के किसी स्वतंत्र स्रोत के बिना परिवार के सदस्य।'
      },
      documents: {
        en: ['Income Certificate of the dependent', 'Identity Proof', 'Relationship Proof (Ration Card/Birth Cert)', 'Affidavit stating dependency'],
        hi: ['निर्भर का आय प्रमाण पत्र', 'पहचान प्रमाण', 'संबंध प्रमाण (राशन कार्ड/जन्म प्रमाण पत्र)', 'निर्भरता बताते हुए हलफनामा']
      },
      process: {
        en: '1. Apply at the Tehsildar office. 2. Submit income and relationship proofs. 3. Verification by the local revenue officer. 4. Certificate issued after confirming the low income of the dependent.',
        hi: '1. तहसीलदार कार्यालय में आवेदन करें। 2. आय और संबंध प्रमाण जमा करें। 3. स्थानीय राजस्व अधिकारी द्वारा सत्यापन। 4. निर्भर की कम आय की पुष्टि के बाद प्रमाण पत्र जारी।'
      },
      tips: {
        en: 'Required for claiming medical benefits, LTC, or compassionate appointments in government service.',
        hi: 'सरकारी सेवा में चिकित्सा लाभ, एलटीसी या अनुकंपा नियुक्तियों का दावा करने के लिए आवश्यक।'
      }
    }
  },
  {
    id: 'minority-certificate-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Certificate',
    serviceNameHi: 'प्रमाण पत्र',
    formName: 'Minority Certificate Application',
    formNameHi: 'अल्पसंख्यक प्रमाण पत्र आवेदन',
    description: 'Certificate for individuals belonging to religious minority communities (Muslim, Christian, Sikh, Buddhist, Jain, Parsi).',
    descriptionHi: 'धार्मिक अल्पसंख्यक समुदायों (मुस्लिम, ईसाई, सिख, बौद्ध, जैन, पारसी) से संबंधित व्यक्तियों के लिए प्रमाण पत्र।',
    icon: Users,
    guidelines: ['Religion proof', 'Aadhaar card', 'Self-declaration'],
    guidelinesHi: ['धर्म का प्रमाण', 'आधार कार्ड', 'स्व-घोषणा'],
    searchQuery: 'Minority certificate application form Rajasthan pdf online',
    guide: {
      purpose: {
        en: 'To avail benefits under various government schemes and scholarships meant for minority communities.',
        hi: 'अल्पसंख्यक समुदायों के लिए विभिन्न सरकारी योजनाओं और छात्रवृत्तियों के तहत लाभ प्राप्त करना।'
      },
      eligibility: {
        en: 'Persons belonging to notified minority religions.',
        hi: 'अधिसूचित अल्पसंख्यक धर्मों से संबंधित व्यक्ति।'
      },
      documents: {
        en: ['Self-Declaration of Religion', 'Aadhaar Card', 'School Certificate mentioning religion', 'Jan Aadhaar Card'],
        hi: ['धर्म की स्व-घोषणा', 'आधार कार्ड', 'धर्म का उल्लेख करने वाला स्कूल प्रमाण पत्र', 'जन आधार कार्ड']
      },
      process: {
        en: '1. Apply online through e-Mitra or state portal. 2. Upload self-declaration and identity proof. 3. Verification by the department. 4. Certificate is issued digitally.',
        hi: '1. ई-मित्र या राज्य पोर्टल के माध्यम से ऑनलाइन आवेदन करें। 2. स्व-घोषणा और पहचान प्रमाण अपलोड करें। 3. विभाग द्वारा सत्यापन। 4. प्रमाण पत्र डिजिटल रूप से जारी किया जाता है।'
      },
      tips: {
        en: 'A self-declaration is often sufficient, but some states may require a certificate from a religious head.',
        hi: 'एक स्व-घोषणा अक्सर पर्याप्त होती है, लेकिन कुछ राज्यों को धार्मिक प्रमुख से प्रमाण पत्र की आवश्यकता हो सकती है।'
      }
    }
  },
  {
    id: 'special-marriage-registration-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Marriage',
    serviceNameHi: 'विवाह',
    formName: 'Special Marriage Act Registration',
    formNameHi: 'विशेष विवाह अधिनियम पंजीकरण',
    description: 'Registration of marriage between people of different religions or those who don\'t want a religious ceremony.',
    descriptionHi: 'विभिन्न धर्मों के लोगों या धार्मिक समारोह नहीं चाहने वालों के बीच विवाह का पंजीकरण।',
    icon: Heart,
    guidelines: ['30 days notice', 'Age proof', '3 witnesses'],
    guidelinesHi: ['30 दिन का नोटिस', 'आयु प्रमाण', '3 गवाह'],
    searchQuery: 'Special Marriage Act registration application form notice pdf',
    guide: {
      purpose: {
        en: 'To provide a legal framework for marriage between two individuals irrespective of their religion or faith.',
        hi: 'दो व्यक्तियों के बीच उनके धर्म या विश्वास के बावजूद विवाह के लिए एक कानूनी ढांचा प्रदान करना।'
      },
      eligibility: {
        en: 'Male (21+ years), Female (18+ years), not within prohibited degrees of relationship.',
        hi: 'पुरुष (21+ वर्ष), महिला (18+ वर्ष), रिश्ते की निषिद्ध श्रेणियों के भीतर नहीं।'
      },
      documents: {
        en: ['Notice of Intended Marriage', 'Age and Address Proof of both parties', 'Passport size Photographs', 'Affidavit regarding marital status', 'Identity Proof of 3 witnesses'],
        hi: ['इरादा विवाह का नोटिस', 'दोनों पक्षों का आयु और पता प्रमाण', 'पासपोर्ट साइज फोटो', 'वैवाहिक स्थिति के संबंध में हलफनामा', '3 गवाहों का पहचान प्रमाण']
      },
      process: {
        en: '1. Give 30 days notice to the Marriage Officer of the district. 2. Notice is displayed on the office board for objections. 3. If no objections, marriage is solemnized after 30 days. 4. Marriage is registered in the presence of 3 witnesses.',
        hi: '1. जिले के विवाह अधिकारी को 30 दिन का नोटिस दें। 2. आपत्तियों के लिए कार्यालय बोर्ड पर नोटिस प्रदर्शित किया जाता है। 3. यदि कोई आपत्ति नहीं है, तो 30 दिनों के बाद विवाह संपन्न होता है। 4. 30 गवाहों की उपस्थिति में विवाह पंजीकृत किया जाता है।'
      },
      tips: {
        en: 'The 30-day notice period is mandatory and cannot be waived.',
        hi: '30 दिन की नोटिस अवधि अनिवार्य है और इसे माफ नहीं किया जा सकता है।'
      }
    }
  },
  {
    id: 'divorce-certificate-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Divorce',
    serviceNameHi: 'तलाक',
    formName: 'Divorce Registration / Certificate',
    formNameHi: 'तलाक पंजीकरण / प्रमाण पत्र',
    description: 'Application for obtaining an official divorce certificate after a court decree.',
    descriptionHi: 'अदालती डिक्री के बाद आधिकारिक तलाक प्रमाण पत्र प्राप्त करने के लिए आवेदन।',
    icon: UserX,
    guidelines: ['Court decree copy', 'Marriage certificate', 'Identity proof'],
    guidelinesHi: ['कोर्ट डिक्री की प्रति', 'विवाह प्रमाण पत्र', 'पहचान प्रमाण'],
    searchQuery: 'Divorce certificate application form Rajasthan registrar pdf',
    guide: {
      purpose: {
        en: 'To officially record the dissolution of marriage in the registrar\'s records and obtain a certificate.',
        hi: 'रजिस्ट्रार के रिकॉर्ड में विवाह के विघटन को आधिकारिक रूप से रिकॉर्ड करना और प्रमाण पत्र प्राप्त करना।'
      },
      eligibility: {
        en: 'Persons who have obtained a final decree of divorce from a competent court.',
        hi: 'वे व्यक्ति जिन्होंने सक्षम न्यायालय से तलाक की अंतिम डिक्री प्राप्त की है।'
      },
      documents: {
        en: ['Certified copy of the Court Decree', 'Original Marriage Certificate', 'Identity Proof of both parties', 'Passport size Photographs'],
        hi: ['कोर्ट डिक्री की प्रमाणित प्रति', 'मूल विवाह प्रमाण पत्र', 'दोनों पक्षों का पहचान प्रमाण', 'पासपोर्ट साइज फोटो']
      },
      process: {
        en: '1. Apply at the office where the marriage was originally registered. 2. Submit the court decree and application form. 3. The registrar updates the marriage register. 4. Divorce certificate is issued.',
        hi: '1. उस कार्यालय में आवेदन करें जहाँ विवाह मूल रूप से पंजीकृत किया गया था। 2. कोर्ट डिक्री और आवेदन फॉर्म जमा करें। 3. रजिस्ट्रार विवाह रजिस्टर को अपडेट करता है। 4. तलाक प्रमाण पत्र जारी किया जाता है।'
      },
      tips: {
        en: 'The court decree itself is the primary legal proof, but a registrar\'s certificate is often easier to use for administrative purposes.',
        hi: 'अदालती डिक्री ही प्राथमिक कानूनी प्रमाण है, लेकिन रजिस्ट्रार का प्रमाण पत्र अक्सर प्रशासनिक उद्देश्यों के लिए उपयोग करना आसान होता है।'
      }
    }
  },
  {
    id: 'adoption-registration-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Adoption',
    serviceNameHi: 'गोद लेना',
    formName: 'Adoption Registration Form',
    formNameHi: 'गोद लेने का पंजीकरण फॉर्म',
    description: 'Legal registration of child adoption under HAMA or JJ Act.',
    descriptionHi: 'HAMA या JJ एक्ट के तहत बच्चे को गोद लेने का कानूनी पंजीकरण।',
    icon: Baby,
    guidelines: ['Adoption deed', 'Court order', 'Parent details'],
    guidelinesHi: ['गोद लेने का विलेख', 'अदालती आदेश', 'माता-पिता का विवरण'],
    searchQuery: 'Child adoption registration form CARINGS portal India pdf',
    guide: {
      purpose: {
        en: 'To legally establish the parent-child relationship between the adoptive parents and the child.',
        hi: 'दत्तक माता-पिता और बच्चे के बीच कानूनी रूप से माता-पिता-बच्चे के संबंध स्थापित करना।'
      },
      eligibility: {
        en: 'Prospective adoptive parents meeting the criteria set by CARA (Central Adoption Resource Authority).',
        hi: 'CARA (केंद्रीय दत्तक ग्रहण संसाधन प्राधिकरण) द्वारा निर्धारित मानदंडों को पूरा करने वाले संभावित दत्तक माता-पिता।'
      },
      documents: {
        en: ['Adoption Deed (for HAMA)', 'Court Order (for JJ Act)', 'Identity and Address Proof of parents', 'Child\'s Birth Certificate', 'Home Study Report'],
        hi: ['गोद लेने का विलेख (HAMA के लिए)', 'अदालती आदेश (JJ एक्ट के लिए)', 'माता-पिता का पहचान और पता प्रमाण', 'बच्चे का जन्म प्रमाण पत्र', 'होम स्टडी रिपोर्ट']
      },
      process: {
        en: '1. Register on the CARINGS portal. 2. Complete the home study process. 3. Referral and matching with a child. 4. Obtain a court order for adoption. 5. Register the adoption deed/order with the local sub-registrar.',
        hi: '1. CARINGS पोर्टल पर पंजीकरण करें। 2. होम स्टडी प्रक्रिया पूरी करें। 3. बच्चे के साथ रेफरल और मिलान। 4. गोद लेने के लिए अदालती आदेश प्राप्त करें। 5. स्थानीय उप-रजिस्ट्रार के पास गोद लेने के विलेख/आदेश को पंजीकृत करें।'
      },
      tips: {
        en: 'Legal adoption is a complex process; always follow the guidelines of CARA to ensure the adoption is valid.',
        hi: 'कानूनी रूप से गोद लेना एक जटिल प्रक्रिया है; गोद लेने की वैधता सुनिश्चित करने के लिए हमेशा CARA के दिशानिर्देशों का पालन करें।'
      }
    }
  },
  {
    id: 'guardianship-certificate-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Guardianship',
    serviceNameHi: 'अभिभावकत्व',
    formName: 'Guardianship Application Form',
    formNameHi: 'अभिभावकत्व आवेदन फॉर्म',
    description: 'Application for legal guardianship of a minor or a person with disability.',
    descriptionHi: 'एक नाबालिग या विकलांग व्यक्ति के कानूनी अभिभावकत्व के लिए आवेदन।',
    icon: UserPlus,
    guidelines: ['Minor/Disabled details', 'Reason for guardianship', 'Court petition'],
    guidelinesHi: ['नाबालिग/विकलांग का विवरण', 'अभिभावकत्व का कारण', 'अदालती याचिका'],
    searchQuery: 'Legal guardianship certificate application form India court pdf',
    guide: {
      purpose: {
        en: 'To appoint a legal guardian to take care of the person and property of a minor or an adult with intellectual disabilities.',
        hi: 'एक नाबालिग या बौद्धिक विकलांगता वाले वयस्क के व्यक्ति और संपत्ति की देखभाल के लिए एक कानूनी अभिभावक नियुक्त करना।'
      },
      eligibility: {
        en: 'Close relatives or fit persons as determined by the court.',
        hi: 'अदालत द्वारा निर्धारित निकट संबंधी या उपयुक्त व्यक्ति।'
      },
      documents: {
        en: ['Petition to the District Court', 'Birth Certificate of the minor', 'Disability Certificate (if applicable)', 'Identity Proof of the proposed guardian', 'Consent from other relatives'],
        hi: ['जिला न्यायालय में याचिका', 'नाबालिग का जन्म प्रमाण पत्र', 'विकलांगता प्रमाण पत्र (यदि लागू हो)', 'प्रस्तावित अभिभावक का पहचान प्रमाण', 'अन्य रिश्तेदारों से सहमति']
      },
      process: {
        en: '1. File a petition under the Guardians and Wards Act or National Trust Act. 2. Court issues notice to relatives and public. 3. Inquiry by the court regarding the welfare of the ward. 4. Court issues the guardianship certificate.',
        hi: '1. गार्जियन एंड वार्ड्स एक्ट या नेशनल ट्रस्ट एक्ट के तहत याचिका दायर करें। 2. अदालत रिश्तेदारों और जनता को नोटिस जारी करती है। 3. वार्ड के कल्याण के संबंध में अदालत द्वारा जांच। 4. अदालत अभिभावकत्व प्रमाण पत्र जारी करती है।'
      },
      tips: {
        en: 'The court always prioritizes the "best interest of the child/ward" while appointing a guardian.',
        hi: 'अभिभावक नियुक्त करते समय अदालत हमेशा "बच्चे/वार्ड के सर्वोत्तम हित" को प्राथमिकता देती है।'
      }
    }
  },
  {
    id: 'birth-death-correction-form',
    category: 'Certificate Forms',
    categoryHi: 'प्रमाण पत्र फॉर्म',
    serviceName: 'Correction',
    serviceNameHi: 'सुधार',
    formName: 'Birth / Death Correction Form',
    formNameHi: 'जन्म / मृत्यु सुधार फॉर्म',
    description: 'Application for correcting errors in name, date, or address in birth or death certificates.',
    descriptionHi: 'जन्म या मृत्यु प्रमाण पत्र में नाम, तिथि या पते में त्रुटियों को सुधारने के लिए आवेदन।',
    icon: Edit3,
    guidelines: ['Original certificate', 'Proof of correct details', 'Affidavit'],
    guidelinesHi: ['मूल प्रमाण पत्र', 'सही विवरण का प्रमाण', 'हलफनामा'],
    searchQuery: 'Birth death certificate correction application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To rectify mistakes made during the initial registration of birth or death.',
        hi: 'जन्म या मृत्यु के प्रारंभिक पंजीकरण के दौरान हुई गलतियों को सुधारना।'
      },
      eligibility: {
        en: 'Immediate family members or the person themselves (for birth certificate).',
        hi: 'तत्काल परिवार के सदस्य या स्वयं व्यक्ति (जन्म प्रमाण पत्र के लिए)।'
      },
      documents: {
        en: ['Original Certificate with error', 'Affidavit on non-judicial stamp paper', 'Supporting Proof (Hospital records, Aadhaar, School marksheet)', 'Identity Proof of applicant'],
        hi: ['त्रुटि वाला मूल प्रमाण पत्र', 'गैर-न्यायिक स्टाम्प पेपर पर हलफनामा', 'सहायक प्रमाण (अस्पताल रिकॉर्ड, आधार, स्कूल मार्कशीट)', 'आवेदक का पहचान प्रमाण']
      },
      process: {
        en: '1. Apply at the office of the Registrar of Births and Deaths (Municipal Corp/Gram Panchayat). 2. Submit the correction form and affidavit. 3. Registrar verifies the hospital/original records. 4. Corrected certificate is issued.',
        hi: '1. जन्म और मृत्यु रजिस्ट्रार (नगर निगम/ग्राम पंचायत) के कार्यालय में आवेदन करें। 2. सुधार फॉर्म और हलफनामा जमा करें। 3. रजिस्ट्रार अस्पताल/मूल रिकॉर्ड की पुष्टि करता है। 4. संशोधित प्रमाण पत्र जारी किया जाता है।'
      },
      tips: {
        en: 'Major changes (like full name change) may require a court order or gazette notification.',
        hi: 'बड़े बदलावों (जैसे पूरा नाम बदलना) के लिए अदालती आदेश या राजपत्र अधिसूचना की आवश्यकता हो सकती है।'
      }
    }
  },
  {
    id: 'gargi-puraskar-form',
    category: 'Scholarship Forms',
    categoryHi: 'छात्रवृत्ति फॉर्म',
    serviceName: 'Gargi Puraskar',
    serviceNameHi: 'गार्गी पुरस्कार',
    formName: 'Gargi Puraskar Application',
    formNameHi: 'गार्गी पुरस्कार आवेदन',
    description: 'Award for meritorious girl students who secured 75% or above in 10th and 12th board exams.',
    descriptionHi: '10वीं और 12वीं बोर्ड परीक्षाओं में 75% या उससे अधिक अंक प्राप्त करने वाली मेधावी छात्राओं के लिए पुरस्कार।',
    icon: Award,
    guidelines: ['75% in 10th/12th', 'Rajasthan resident', 'Bank account'],
    guidelinesHi: ['10वीं/12वीं में 75%', 'राजस्थान निवासी', 'बैंक खाता'],
    searchQuery: 'Gargi Puraskar application form Rajasthan Shala Darpan pdf',
    guide: {
      purpose: {
        en: 'To encourage girl education by providing financial assistance to meritorious students.',
        hi: 'मेधावी छात्राओं को वित्तीय सहायता प्रदान करके बालिका शिक्षा को प्रोत्साहित करना।'
      },
      eligibility: {
        en: 'Girl students of Rajasthan who secured 75% or more in 10th or 12th board exams and are continuing their studies.',
        hi: 'राजस्थान की छात्राएं जिन्होंने 10वीं या 12वीं बोर्ड परीक्षा में 75% या उससे अधिक अंक प्राप्त किए हैं और अपनी पढ़ाई जारी रख रही हैं।'
      },
      documents: {
        en: ['Board Marksheet (10th/12th)', 'Jan Aadhaar Card', 'Bank Passbook copy', 'School Certificate of current study', 'Passport size Photograph'],
        hi: ['बोर्ड मार्कशीट (10वीं/12वीं)', 'जन आधार कार्ड', 'बैंक पासबुक की प्रति', 'वर्तमान अध्ययन का स्कूल प्रमाण पत्र', 'पासपोर्ट साइज फोटो']
      },
      process: {
        en: '1. Apply online through the Shala Darpan portal. 2. Fill the application form with marksheet and bank details. 3. Verification by the school/college. 4. Award amount is credited to the bank account.',
        hi: '1. शाला दर्पण पोर्टल के माध्यम से ऑनलाइन आवेदन करें। 2. मार्कशीट और बैंक विवरण के साथ आवेदन फॉर्म भरें। 3. स्कूल/कॉलेज द्वारा सत्यापन। 4. पुरस्कार राशि बैंक खाते में जमा की जाती है।'
      },
      tips: {
        en: 'The award is usually given in two installments for 10th class students (in 11th and 12th).',
        hi: '10वीं कक्षा की छात्राओं को पुरस्कार आमतौर पर दो किस्तों में (11वीं और 12वीं में) दिया जाता है।'
      }
    }
  },
  {
    id: 'balika-shiksha-foundation-scholarship',
    category: 'Scholarship Forms',
    categoryHi: 'छात्रवृत्ति फॉर्म',
    serviceName: 'Scholarship',
    serviceNameHi: 'छात्रवृत्ति',
    formName: 'Balika Shiksha Foundation Scholarship',
    formNameHi: 'बालिका शिक्षा फाउंडेशन छात्रवृत्ति',
    description: 'Scholarship for girl students belonging to economically weaker sections.',
    descriptionHi: 'आर्थिक रूप से कमजोर वर्गों से संबंधित छात्राओं के लिए छात्रवृत्ति।',
    icon: GraduationCap,
    guidelines: ['Income limit', 'Merit based', 'School certificate'],
    guidelinesHi: ['आय सीमा', 'योग्यता आधारित', 'स्कूल प्रमाण पत्र'],
    searchQuery: 'Balika Shiksha Foundation Rajasthan scholarship form pdf',
    guide: {
      purpose: {
        en: 'To support the education of girls from low-income families through various scholarship schemes.',
        hi: 'विभिन्न छात्रवृत्ति योजनाओं के माध्यम से कम आय वाले परिवारों की लड़कियों की शिक्षा का समर्थन करना।'
      },
      eligibility: {
        en: 'Girl students studying in government schools with family income below the specified limit.',
        hi: 'निर्धारित सीमा से कम पारिवारिक आय वाले सरकारी स्कूलों में पढ़ने वाली छात्राएं।'
      },
      documents: {
        en: ['Income Certificate', 'Aadhaar Card', 'Previous year Marksheet', 'Jan Aadhaar Card', 'Bank Details'],
        hi: ['आय प्रमाण पत्र', 'आधार कार्ड', 'पिछले वर्ष की मार्कशीट', 'जन आधार कार्ड', 'बैंक विवरण']
      },
      process: {
        en: '1. Apply through the school head or online portal. 2. Submit income and merit proofs. 3. Verification by the foundation. 4. Scholarship credited to the student\'s account.',
        hi: '1. स्कूल प्रमुख या ऑनलाइन पोर्टल के माध्यम से आवेदन करें। 2. आय और योग्यता प्रमाण जमा करें। 3. फाउंडेशन द्वारा सत्यापन। 4. छात्रवृत्ति छात्र के खाते में जमा।'
      },
      tips: {
        en: 'Check the specific eligibility for different schemes under the foundation (e.g., Aapki Beti Yojana).',
        hi: 'फाउंडेशन के तहत विभिन्न योजनाओं (जैसे, आपकी बेटी योजना) के लिए विशिष्ट पात्रता की जांच करें।'
      }
    }
  },
  {
    id: 'devnarayan-gurukul-yojana-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Gurukul Yojana',
    serviceNameHi: 'गुरुकुल योजना',
    formName: 'Devnarayan Gurukul Yojana Admission',
    formNameHi: 'देवनारायण गुरुकुल योजना प्रवेश',
    description: 'Admission to reputed residential schools for students of MBC (Most Backward Classes).',
    descriptionHi: 'MBC (अति पिछड़ा वर्ग) के छात्रों के लिए प्रतिष्ठित आवासीय स्कूलों में प्रवेश।',
    icon: School,
    guidelines: ['MBC category', 'Entrance exam', 'Income limit'],
    guidelinesHi: ['MBC श्रेणी', 'प्रवेश परीक्षा', 'आय सीमा'],
    searchQuery: 'Devnarayan Gurukul Yojana admission form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To provide high-quality education in private residential schools to talented students from MBC communities.',
        hi: 'MBC समुदायों के प्रतिभाशाली छात्रों को निजी आवासीय स्कूलों में उच्च गुणवत्ता वाली शिक्षा प्रदान करना।'
      },
      eligibility: {
        en: 'Students from MBC category (Gurjar, Raika, etc.) studying in class 6 or 9.',
        hi: 'कक्षा 6 या 9 में पढ़ने वाले MBC श्रेणी (गुर्जर, रायका, आदि) के छात्र।'
      },
      documents: {
        en: ['MBC Caste Certificate', 'Income Certificate', 'Previous class Marksheet', 'Jan Aadhaar Card', 'Domicile Certificate'],
        hi: ['MBC जाति प्रमाण पत्र', 'आय प्रमाण पत्र', 'पिछली कक्षा की मार्कशीट', 'जन आधार कार्ड', 'मूल निवास प्रमाण पत्र']
      },
      process: {
        en: '1. Apply online or through the District Social Justice office. 2. Appear for the entrance examination. 3. Selection based on merit and category. 4. Admission to designated residential schools.',
        hi: '1. ऑनलाइन या जिला समाज न्याय कार्यालय के माध्यम से आवेदन करें। 2. प्रवेश परीक्षा में शामिल हों। 3. योग्यता और श्रेणी के आधार पर चयन। 4. नामित आवासीय स्कूलों में प्रवेश।'
      },
      tips: {
        en: 'The scheme covers full tuition and residential fees in top-tier private schools.',
        hi: 'यह योजना शीर्ष स्तर के निजी स्कूलों में पूरी ट्यूशन और आवासीय फीस को कवर करती है।'
      }
    }
  },
  {
    id: 'anuprati-coaching-yojana-form',
    category: 'Scholarship Forms',
    categoryHi: 'छात्रवृत्ति फॉर्म',
    serviceName: 'Coaching',
    serviceNameHi: 'कोचिंग',
    formName: 'Mukhyamantri Anuprati Coaching Yojana',
    formNameHi: 'मुख्यमंत्री अनुप्रति कोचिंग योजना',
    description: 'Free coaching for competitive exams like IAS, RAS, NEET, JEE for underprivileged students.',
    descriptionHi: 'वंचित छात्रों के लिए आईएएस, आरएएस, नीट, जेईई जैसी प्रतियोगी परीक्षाओं के लिए मुफ्त कोचिंग।',
    icon: BookOpen,
    guidelines: ['Income < 8 Lakh', 'Merit based', 'Caste certificate'],
    guidelinesHi: ['आय < 8 लाख', 'योग्यता आधारित', 'जाति प्रमाण पत्र'],
    searchQuery: 'Mukhyamantri Anuprati Coaching Yojana application form online Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To provide free coaching from reputed institutes to meritorious students from SC, ST, OBC, MBC, EWS, and Minority categories.',
        hi: 'एससी, एसटी, ओबीसी, एमबीसी, ईडब्ल्यूएस और अल्पसंख्यक श्रेणियों के मेधावी छात्रों को प्रतिष्ठित संस्थानों से मुफ्त कोचिंग प्रदान करना।'
      },
      eligibility: {
        en: 'Students with family income below ₹8 Lakh per annum and meeting academic criteria for specific exams.',
        hi: '₹8 लाख प्रति वर्ष से कम पारिवारिक आय वाले और विशिष्ट परीक्षाओं के लिए शैक्षणिक मानदंडों को पूरा करने वाले छात्र।'
      },
      documents: {
        en: ['Caste Certificate', 'Income Certificate', '10th/12th Marksheet', 'Jan Aadhaar Card', 'Domicile Certificate'],
        hi: ['जाति प्रमाण पत्र', 'आय प्रमाण पत्र', '10वीं/12वीं मार्कशीट', 'जन आधार कार्ड', 'मूल निवास प्रमाण पत्र']
      },
      process: {
        en: '1. Apply online on the SJMS portal during the application window. 2. Select the exam and the coaching institute. 3. Merit list is prepared based on marks. 4. Selected students join the institute for free coaching.',
        hi: '1. आवेदन विंडो के दौरान SJMS पोर्टल पर ऑनलाइन आवेदन करें। 2. परीक्षा और कोचिंग संस्थान का चयन करें। 3. अंकों के आधार पर मेरिट सूची तैयार की जाती है। 4. चयनित छात्र मुफ्त कोचिंग के लिए संस्थान में शामिल होते हैं।'
      },
      tips: {
        en: 'Students also get a monthly stipend for accommodation if the coaching is in a different city.',
        hi: 'यदि कोचिंग किसी अलग शहर में है तो छात्रों को आवास के लिए मासिक वजीफा भी मिलता है।'
      }
    }
  },
  {
    id: 'scooty-distribution-scheme-form',
    category: 'Welfare Schemes',
    categoryHi: 'कल्याणकारी योजनाएं',
    serviceName: 'Scooty Scheme',
    serviceNameHi: 'स्कूटी योजना',
    formName: 'Kalibai Bheel / Devnarayan Scooty Scheme',
    formNameHi: 'कालीबाई भील / देवनारायण स्कूटी योजना',
    description: 'Free scooty distribution for meritorious girl students of SC/ST/OBC/MBC/Minority categories.',
    descriptionHi: 'एससी/एसटी/ओबीसी/एमबीसी/अल्पसंख्यक श्रेणियों की मेधावी छात्राओं के लिए मुफ्त स्कूटी वितरण।',
    icon: Bike,
    guidelines: ['75% in 12th', 'Rajasthan resident', 'Income limit'],
    guidelinesHi: ['12वीं में 75%', 'राजस्थान निवासी', 'आय सीमा'],
    searchQuery: 'Kalibai Bheel scooty scheme application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To empower girl students and facilitate their transport for higher education.',
        hi: 'छात्राओं को सशक्त बनाना और उच्च शिक्षा के लिए उनके परिवहन की सुविधा प्रदान करना।'
      },
      eligibility: {
        en: 'Girl students who secured high marks in 12th board exams and are enrolled in regular college courses.',
        hi: 'छात्राएं जिन्होंने 12वीं बोर्ड परीक्षा में उच्च अंक प्राप्त किए हैं और नियमित कॉलेज पाठ्यक्रमों में नामांकित हैं।'
      },
      documents: {
        en: ['12th Marksheet', 'Jan Aadhaar Card', 'Caste Certificate', 'Income Certificate', 'College Admission Proof', 'Driving License (required after selection)'],
        hi: ['12वीं मार्कशीट', 'जन आधार कार्ड', 'जाति प्रमाण पत्र', 'आय प्रमाण पत्र', 'कॉलेज प्रवेश प्रमाण', 'ड्राइविंग लाइसेंस (चयन के बाद आवश्यक)']
      },
      process: {
        en: '1. Apply online on the HTE (Higher Technical Education) portal. 2. Submit college and marks details. 3. Verification by the college and department. 4. Merit list is published. 5. Scooty distributed to selected students.',
        hi: '1. HTE (उच्च तकनीकी शिक्षा) पोर्टल पर ऑनलाइन आवेदन करें। 2. कॉलेज और अंकों का विवरण जमा करें। 3. कॉलेज और विभाग द्वारा सत्यापन। 4. मेरिट सूची प्रकाशित की जाती है। 5. चयनित छात्राओं को स्कूटी वितरित।'
      },
      tips: {
        en: 'Ensure your Jan Aadhaar is updated with correct category and income details.',
        hi: 'सुनिश्चित करें कि आपका जन आधार सही श्रेणी और आय विवरण के साथ अपडेट है।'
      }
    }
  },
  {
    id: 'laptop-distribution-merit-form',
    category: 'Welfare Schemes',
    categoryHi: 'कल्याणकारी योजनाएं',
    serviceName: 'Laptop Scheme',
    serviceNameHi: 'लैपटॉप योजना',
    formName: 'Free Laptop Distribution for Merit Students',
    formNameHi: 'मेधावी छात्रों के लिए मुफ्त लैपटॉप वितरण',
    description: 'Distribution of free laptops to top-ranking students in 8th, 10th, and 12th board exams.',
    descriptionHi: '8वीं, 10वीं और 12वीं बोर्ड परीक्षाओं में शीर्ष रैंक वाले छात्रों को मुफ्त लैपटॉप का वितरण।',
    icon: Laptop,
    guidelines: ['Board merit list', 'Government school', 'Jan Aadhaar'],
    guidelinesHi: ['बोर्ड मेरिट सूची', 'सरकारी स्कूल', 'जन आधार'],
    searchQuery: 'Rajasthan free laptop distribution scheme merit list application pdf',
    guide: {
      purpose: {
        en: 'To promote digital literacy and reward academic excellence among students of government schools.',
        hi: 'डिजिटल साक्षरता को बढ़ावा देना और सरकारी स्कूलों के छात्रों के बीच शैक्षणिक उत्कृष्टता को पुरस्कृत करना।'
      },
      eligibility: {
        en: 'Students of government schools who appear in the state-level merit list of board exams.',
        hi: 'सरकारी स्कूलों के छात्र जो बोर्ड परीक्षाओं की राज्य स्तरीय मेरिट सूची में आते हैं।'
      },
      documents: {
        en: ['Board Marksheet', 'School Certificate', 'Jan Aadhaar Card', 'Aadhaar Card', 'Passport size Photograph'],
        hi: ['बोर्ड मार्कशीट', 'स्कूल प्रमाण पत्र', 'जन आधार कार्ड', 'आधार कार्ड', 'पासपोर्ट साइज फोटो']
      },
      process: {
        en: '1. The merit list is automatically prepared by the Education Board. 2. Eligible students are notified through their schools. 3. Verification of documents at the school level. 4. Laptops are distributed at district-level functions.',
        hi: '1. मेरिट सूची शिक्षा बोर्ड द्वारा स्वचालित रूप से तैयार की जाती है। 2. पात्र छात्रों को उनके स्कूलों के माध्यम से सूचित किया जाता है। 3. स्कूल स्तर पर दस्तावेजों का सत्यापन। 4. जिला स्तरीय समारोहों में लैपटॉप वितरित किए जाते हैं।'
      },
      tips: {
        en: 'Keep your contact details updated in the school records to receive notifications.',
        hi: 'सूचनाएं प्राप्त करने के लिए स्कूल रिकॉर्ड में अपना संपर्क विवरण अपडेट रखें।'
      }
    }
  },
  {
    id: 'transport-voucher-scheme-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Transport Voucher',
    serviceNameHi: 'परिवहन वाउचर',
    formName: 'Student Transport Voucher Scheme',
    formNameHi: 'छात्र परिवहन वाउचर योजना',
    description: 'Financial assistance for students traveling long distances to reach school.',
    descriptionHi: 'स्कूल पहुँचने के लिए लंबी दूरी तय करने वाले छात्रों के लिए वित्तीय सहायता।',
    icon: Bus,
    guidelines: ['Distance > 2km', 'Government school', 'Attendance proof'],
    guidelinesHi: ['दूरी > 2 किमी', 'सरकारी स्कूल', 'उपस्थिति प्रमाण'],
    searchQuery: 'Student transport voucher scheme Rajasthan application form pdf',
    guide: {
      purpose: {
        en: 'To reduce dropout rates by compensating the travel cost for students who live far from their schools.',
        hi: 'स्कूलों से दूर रहने वाले छात्रों के लिए यात्रा लागत की भरपाई करके ड्रॉपआउट दर को कम करना।'
      },
      eligibility: {
        en: 'Students of classes 1 to 12 in government schools living beyond a specified distance (usually 2km for primary, 5km for secondary).',
        hi: 'सरकारी स्कूलों में कक्षा 1 से 12 तक के छात्र जो एक निर्दिष्ट दूरी (आमतौर पर प्राथमिक के लिए 2 किमी, माध्यमिक के लिए 5 किमी) से आगे रहते हैं।'
      },
      documents: {
        en: ['Distance Certificate (from Sarpanch/Patwari)', 'School Attendance Record', 'Bank Account Details', 'Jan Aadhaar Card'],
        hi: ['दूरी प्रमाण पत्र (सरपंच/पटवारी से)', 'स्कूल उपस्थिति रिकॉर्ड', 'बैंक खाता विवरण', 'जन आधार कार्ड']
      },
      process: {
        en: '1. Apply through the school head. 2. School verifies the distance and attendance. 3. Application is forwarded to the block education office. 4. Voucher amount is credited to the bank account.',
        hi: '1. स्कूल प्रमुख के माध्यम से आवेदन करें। 2. स्कूल दूरी और उपस्थिति की पुष्टि करता है। 3. आवेदन ब्लॉक शिक्षा कार्यालय को भेजा जाता है। 4. वाउचर राशि बैंक खाते में जमा की जाती है।'
      },
      tips: {
        en: 'The amount is calculated based on the number of days the student attended school.',
        hi: 'राशि की गणना छात्र द्वारा स्कूल जाने के दिनों की संख्या के आधार पर की जाती है।'
      }
    }
  },
  {
    id: 'mid-day-meal-enrollment-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Mid-Day Meal',
    serviceNameHi: 'मिड-डे मील',
    formName: 'Mid-Day Meal Scheme Enrollment',
    formNameHi: 'मिड-डे मील योजना नामांकन',
    description: 'Provision of free cooked meals to students in government and government-aided schools.',
    descriptionHi: 'सरकारी और सरकारी सहायता प्राप्त स्कूलों में छात्रों को मुफ्त पका हुआ भोजन प्रदान करना।',
    icon: Utensils,
    guidelines: ['Class 1-8', 'Government school', 'Automatic enrollment'],
    guidelinesHi: ['कक्षा 1-8', 'सरकारी स्कूल', 'स्वचालित नामांकन'],
    searchQuery: 'Mid day meal scheme Rajasthan guidelines and enrollment form pdf',
    guide: {
      purpose: {
        en: 'To improve the nutritional status of children and encourage school attendance.',
        hi: 'बच्चों के पोषण स्तर में सुधार करना और स्कूल उपस्थिति को प्रोत्साहित करना।'
      },
      eligibility: {
        en: 'All students studying in classes 1 to 8 in government and aided schools.',
        hi: 'सरकारी और सहायता प्राप्त स्कूलों में कक्षा 1 से 8 तक पढ़ने वाले सभी छात्र।'
      },
      documents: {
        en: ['School Admission Record', 'Aadhaar Card (for tracking)'],
        hi: ['स्कूल प्रवेश रिकॉर्ड', 'आधार कार्ड (ट्रैकिंग के लिए)']
      },
      process: {
        en: '1. Enrollment is automatic upon admission to the school. 2. Daily attendance is recorded. 3. Meals are served during the school break.',
        hi: '1. स्कूल में प्रवेश पर नामांकन स्वचालित है। 2. दैनिक उपस्थिति दर्ज की जाती है। 3. स्कूल ब्रेक के दौरान भोजन परोसा जाता है।'
      },
      tips: {
        en: 'Parents can participate in the School Management Committee (SMC) to monitor the quality of meals.',
        hi: 'अभिभावक भोजन की गुणवत्ता की निगरानी के लिए स्कूल प्रबंधन समिति (SMC) में भाग ले सकते हैं।'
      }
    }
  },
  {
    id: 'free-uniform-distribution-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Free Uniform',
    serviceNameHi: 'मुफ्त यूनिफॉर्म',
    formName: 'Free Uniform Distribution Scheme',
    formNameHi: 'मुफ्त यूनिफॉर्म वितरण योजना',
    description: 'Provision of free school uniforms to students of government schools.',
    descriptionHi: 'सरकारी स्कूलों के छात्रों को मुफ्त स्कूल यूनिफॉर्म प्रदान करना।',
    icon: Shirt,
    guidelines: ['Class 1-8', 'Government school', 'Jan Aadhaar linked'],
    guidelinesHi: ['कक्षा 1-8', 'सरकारी स्कूल', 'जन आधार लिंक'],
    searchQuery: 'Free school uniform distribution scheme Rajasthan application pdf',
    guide: {
      purpose: {
        en: 'To provide school uniforms to students from underprivileged backgrounds to ensure equality and attendance.',
        hi: 'समानता और उपस्थिति सुनिश्चित करने के लिए वंचित पृष्ठभूमि के छात्रों को स्कूल यूनिफॉर्म प्रदान करना।'
      },
      eligibility: {
        en: 'Students of classes 1 to 8 in government schools.',
        hi: 'सरकारी स्कूलों में कक्षा 1 से 8 तक के छात्र।'
      },
      documents: {
        en: ['School Enrollment Proof', 'Jan Aadhaar Card', 'Bank Account details (for stitching charges)'],
        hi: ['स्कूल नामांकन प्रमाण', 'जन आधार कार्ड', 'बैंक खाता विवरण (सिलाई शुल्क के लिए)']
      },
      process: {
        en: '1. Uniform cloth is distributed by the school. 2. Stitching charges are credited to the bank account linked with Jan Aadhaar. 3. Students get two sets of uniforms per year.',
        hi: '1. स्कूल द्वारा यूनिफॉर्म का कपड़ा वितरित किया जाता है। 2. सिलाई शुल्क जन आधार से जुड़े बैंक खाते में जमा किया जाता है। 3. छात्रों को प्रति वर्ष यूनिफॉर्म के दो सेट मिलते हैं।'
      },
      tips: {
        en: 'Ensure your bank account is active and linked to Jan Aadhaar to receive stitching charges.',
        hi: 'सिलाई शुल्क प्राप्त करने के लिए सुनिश्चित करें कि आपका बैंक खाता सक्रिय है और जन आधार से जुड़ा है।'
      }
    }
  },
  {
    id: 'free-textbook-distribution-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Free Textbooks',
    serviceNameHi: 'मुफ्त पाठ्यपुस्तकें',
    formName: 'Free Textbook Distribution Scheme',
    formNameHi: 'मुफ्त पाठ्यपुस्तक वितरण योजना',
    description: 'Provision of free textbooks to all students in government schools.',
    descriptionHi: 'सरकारी स्कूलों के सभी छात्रों को मुफ्त पाठ्यपुस्तकें प्रदान करना।',
    icon: Book,
    guidelines: ['Class 1-12', 'Government school', 'Automatic distribution'],
    guidelinesHi: ['कक्षा 1-12', 'सरकारी स्कूल', 'स्वचालित वितरण'],
    searchQuery: 'Free textbook distribution scheme Rajasthan education department pdf',
    guide: {
      purpose: {
        en: 'To ensure that every student has access to the required study material regardless of their financial status.',
        hi: 'यह सुनिश्चित करना कि प्रत्येक छात्र की वित्तीय स्थिति की परवाह किए बिना आवश्यक अध्ययन सामग्री तक पहुंच हो।'
      },
      eligibility: {
        en: 'All students studying in government schools from class 1 to 12.',
        hi: 'कक्षा 1 से 12 तक सरकारी स्कूलों में पढ़ने वाले सभी छात्र।'
      },
      documents: {
        en: ['School Admission Record'],
        hi: ['स्कूल प्रवेश रिकॉर्ड']
      },
      process: {
        en: '1. Textbooks are supplied to schools by the Rajasthan State Textbook Board. 2. Distributed to students at the beginning of the academic session. 3. Students are expected to return books at the end of the year (for higher classes).',
        hi: '1. राजस्थान राज्य पाठ्यपुस्तक मंडल द्वारा स्कूलों को पाठ्यपुस्तकों की आपूर्ति की जाती है। 2. शैक्षणिक सत्र की शुरुआत में छात्रों को वितरित। 3. छात्रों से वर्ष के अंत में किताबें वापस करने की अपेक्षा की जाती है (उच्च कक्षाओं के लिए)।'
      },
      tips: {
        en: 'Maintain the books in good condition so they can be reused by other students next year.',
        hi: 'किताबों को अच्छी स्थिति में रखें ताकि अगले साल अन्य छात्र उनका पुन: उपयोग कर सकें।'
      }
    }
  },
  {
    id: 'hostel-admission-sje-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Hostel Admission',
    serviceNameHi: 'छात्रावास प्रवेश',
    formName: 'SJE Hostel Admission Form',
    formNameHi: 'SJE छात्रावास प्रवेश फॉर्म',
    description: 'Admission to government hostels run by the Social Justice and Empowerment Department.',
    descriptionHi: 'सामाजिक न्याय और अधिकारिता विभाग द्वारा संचालित सरकारी छात्रावासों में प्रवेश।',
    icon: Building,
    guidelines: ['SC/ST/OBC/MBC', 'Income limit', 'Distance from home'],
    guidelinesHi: ['SC/ST/OBC/MBC', 'आय सीमा', 'घर से दूरी'],
    searchQuery: 'SJE Rajasthan hostel admission application form online pdf',
    guide: {
      purpose: {
        en: 'To provide free lodging and boarding facilities to students from reserved categories studying away from home.',
        hi: 'घर से दूर पढ़ने वाले आरक्षित श्रेणियों के छात्रों को मुफ्त आवास और भोजन की सुविधा प्रदान करना।'
      },
      eligibility: {
        en: 'Students from SC, ST, OBC, MBC, or EWS categories with family income below ₹8 Lakh.',
        hi: 'एससी, एसटी, ओबीसी, एमबीसी या ईडब्ल्यूएस श्रेणियों के छात्र जिनकी पारिवारिक आय ₹8 लाख से कम है।'
      },
      documents: {
        en: ['Caste Certificate', 'Income Certificate', 'Previous Class Marksheet', 'Jan Aadhaar Card', 'Domicile Certificate', 'School/College Admission Proof'],
        hi: ['जाति प्रमाण पत्र', 'आय प्रमाण पत्र', 'पिछली कक्षा की मार्कशीट', 'जन आधार कार्ड', 'मूल निवास प्रमाण पत्र', 'स्कूल/कॉलेज प्रवेश प्रमाण']
      },
      process: {
        en: '1. Apply online on the SJMS portal. 2. Select the preferred hostel. 3. Merit list is prepared based on marks and category. 4. Selected students report to the hostel warden.',
        hi: '1. SJMS पोर्टल पर ऑनलाइन आवेदन करें। 2. पसंदीदा छात्रावास का चयन करें। 3. अंकों और श्रेणी के आधार पर मेरिट सूची तैयार की जाती है। 4. चयनित छात्र छात्रावास वार्डन को रिपोर्ट करते हैं।'
      },
      tips: {
        en: 'Apply as soon as the admission window opens, as seats are limited.',
        hi: 'जैसे ही प्रवेश विंडो खुलती है, आवेदन करें, क्योंकि सीटें सीमित हैं।'
      }
    }
  },
  {
    id: 'eklavya-model-school-admission',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'School Admission',
    serviceNameHi: 'स्कूल प्रवेश',
    formName: 'Eklavya Model Residential School (EMRS) Admission',
    formNameHi: 'एकलव्य मॉडल आवासीय विद्यालय (EMRS) प्रवेश',
    description: 'Admission to specialized residential schools for ST students.',
    descriptionHi: 'एसटी छात्रों के लिए विशेष आवासीय स्कूलों में प्रवेश।',
    icon: GraduationCap,
    guidelines: ['ST category only', 'Entrance exam', 'Class 6 admission'],
    guidelinesHi: ['केवल एसटी श्रेणी', 'प्रवेश परीक्षा', 'कक्षा 6 प्रवेश'],
    searchQuery: 'Eklavya model residential school EMRS admission form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To provide quality middle and high-level education to Scheduled Tribe (ST) students in remote areas.',
        hi: 'दूरदराज के क्षेत्रों में अनुसूचित जनजाति (एसटी) के छात्रों को गुणवत्तापूर्ण मध्यम और उच्च स्तरीय शिक्षा प्रदान करना।'
      },
      eligibility: {
        en: 'Students belonging to the Scheduled Tribe (ST) category, usually for admission to class 6.',
        hi: 'अनुसूचित जनजाति (एसटी) श्रेणी से संबंधित छात्र, आमतौर पर कक्षा 6 में प्रवेश के लिए।'
      },
      documents: {
        en: ['ST Caste Certificate', 'Birth Certificate', 'Previous Class Marksheet', 'Domicile Certificate', 'Jan Aadhaar Card'],
        hi: ['एसटी जाति प्रमाण पत्र', 'जन्म प्रमाण पत्र', 'पिछली कक्षा की मार्कशीट', 'मूल निवास प्रमाण पत्र', 'जन आधार कार्ड']
      },
      process: {
        en: '1. Fill the application form online or at the EMRS school. 2. Appear for the EMRS Entrance Test (EET). 3. Selection based on merit in the entrance exam. 4. Document verification and admission.',
        hi: '1. ऑनलाइन या EMRS स्कूल में आवेदन फॉर्म भरें। 2. EMRS प्रवेश परीक्षा (EET) में शामिल हों। 3. प्रवेश परीक्षा में योग्यता के आधार पर चयन। 4. दस्तावेज़ सत्यापन और प्रवेश।'
      },
      tips: {
        en: 'EMRS schools provide free education, uniforms, books, and boarding to all selected students.',
        hi: 'EMRS स्कूल सभी चयनित छात्रों को मुफ्त शिक्षा, यूनिफॉर्म, किताबें और भोजन प्रदान करते हैं।'
      }
    }
  },
  {
    id: 'rsldc-skill-training-form',
    category: 'Welfare Schemes',
    categoryHi: 'कल्याणकारी योजनाएं',
    serviceName: 'Skill Training',
    serviceNameHi: 'कौशल प्रशिक्षण',
    formName: 'RSLDC Skill Development Training',
    formNameHi: 'RSLDC कौशल विकास प्रशिक्षण',
    description: 'Free skill training and placement support for unemployed youth.',
    descriptionHi: 'बेरोजगार युवाओं के लिए मुफ्त कौशल प्रशिक्षण और प्लेसमेंट सहायता।',
    icon: Briefcase,
    guidelines: ['Age 15-35 years', 'Unemployed', 'Aadhaar card'],
    guidelinesHi: ['आयु 15-35 वर्ष', 'बेरोजगार', 'आधार कार्ड'],
    searchQuery: 'RSLDC skill development training application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To provide vocational training in various sectors (IT, Hospitality, Healthcare, etc.) to make youth employable.',
        hi: 'युवाओं को रोजगार योग्य बनाने के लिए विभिन्न क्षेत्रों (आईटी, आतिथ्य, स्वास्थ्य सेवा, आदि) में व्यावसायिक प्रशिक्षण प्रदान करना।'
      },
      eligibility: {
        en: 'Unemployed youth of Rajasthan, usually aged between 15 and 35 years.',
        hi: 'राजस्थान के बेरोजगार युवा, आमतौर पर 15 से 35 वर्ष की आयु के बीच।'
      },
      documents: {
        en: ['Aadhaar Card', 'Educational Certificates', 'Jan Aadhaar Card', 'Caste Certificate (if applicable)', 'Passport size Photograph'],
        hi: ['आधार कार्ड', 'शैक्षणिक प्रमाण पत्र', 'जन आधार कार्ड', 'जाति प्रमाण पत्र (यदि लागू हो)', 'पासपोर्ट साइज फोटो']
      },
      process: {
        en: '1. Register on the RSLDC portal or visit a nearby training center. 2. Choose a training course. 3. Counseling and batch allocation. 4. Complete the training and assessment. 5. Receive certificate and placement assistance.',
        hi: '1. RSLDC पोर्टल पर पंजीकरण करें या पास के प्रशिक्षण केंद्र पर जाएं। 2. प्रशिक्षण पाठ्यक्रम चुनें। 3. परामर्श और बैच आवंटन। 4. प्रशिक्षण और मूल्यांकन पूरा करें। 5. प्रमाण पत्र और प्लेसमेंट सहायता प्राप्त करें।'
      },
      tips: {
        en: 'Training is free of cost and often includes a basic stipend or travel allowance.',
        hi: 'प्रशिक्षण मुफ्त है और इसमें अक्सर बुनियादी वजीफा या यात्रा भत्ता शामिल होता है।'
      }
    }
  },
  {
    id: 'mudra-loan-application-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Loan',
    serviceNameHi: 'ऋण',
    formName: 'Pradhan Mantri MUDRA Yojana (PMMY)',
    formNameHi: 'प्रधानमंत्री मुद्रा योजना (PMMY)',
    description: 'Loan for small businesses up to ₹10 Lakh without collateral.',
    descriptionHi: 'बिना किसी गारंटी के ₹10 लाख तक के छोटे व्यवसायों के लिए ऋण।',
    icon: DollarSign,
    guidelines: ['Business plan', 'Identity proof', 'No defaults'],
    guidelinesHi: ['बिजनेस प्लान', 'पहचान प्रमाण', 'कोई डिफॉल्ट नहीं'],
    searchQuery: 'PMMY Mudra loan application form Shishu Kishor Tarun pdf',
    guide: {
      purpose: {
        en: 'To provide funding to non-corporate, non-farm small/micro enterprises.',
        hi: 'गैर-कॉर्पोरेट, गैर-कृषि लघु/सूक्ष्म उद्यमों को धन प्रदान करना।'
      },
      eligibility: {
        en: 'Any Indian citizen who has a business plan for a non-farm income-generating activity.',
        hi: 'कोई भी भारतीय नागरिक जिसके पास गैर-कृषि आय-सृजन गतिविधि के लिए बिजनेस प्लान है।'
      },
      documents: {
        en: ['Identity and Address Proof', 'Business Address Proof', 'Project Report/Business Plan', 'Passport size Photographs', 'Quotation for machinery/items to be purchased'],
        hi: ['पहचान और पता प्रमाण', 'व्यवसाय का पता प्रमाण', 'परियोजना रिपोर्ट/बिजली प्लान', 'पासपोर्ट साइज फोटो', 'खरीदी जाने वाली मशीनरी/वस्तुओं के लिए कोटेशन']
      },
      process: {
        en: '1. Approach a bank, MFI, or NBFC. 2. Fill the MUDRA application form (Shishu, Kishor, or Tarun). 3. Submit the business plan and documents. 4. Bank processes and sanctions the loan. 5. Receive MUDRA Card for credit.',
        hi: '1. बैंक, एमएफआई या एनबीएफसी से संपर्क करें। 2. मुद्रा आवेदन फॉर्म (शिशु, किशोर या तरुण) भरें। 3. बिजनेस प्लान और दस्तावेज जमा करें। 4. बैंक ऋण को प्रोसेस और स्वीकृत करता है। 5. क्रेडिट के लिए मुद्रा कार्ड प्राप्त करें।'
      },
      tips: {
        en: 'Shishu (up to ₹50k), Kishor (₹50k to ₹5L), Tarun (₹5L to ₹10L). Choose based on your requirement.',
        hi: 'शिशु (₹50k तक), किशोर (₹50k से ₹5L), तरुण (₹5L से ₹10L)। अपनी आवश्यकता के आधार पर चुनें।'
      }
    }
  },
  {
    id: 'startup-rajasthan-registration',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Startup',
    serviceNameHi: 'स्टार्टअप',
    formName: 'Startup Rajasthan Registration',
    formNameHi: 'स्टार्टअप राजस्थान पंजीकरण',
    description: 'Registration for startups to avail incentives, grants, and mentorship from the state government.',
    descriptionHi: 'राज्य सरकार से प्रोत्साहन, अनुदान और परामर्श प्राप्त करने के लिए स्टार्टअप्स का पंजीकरण।',
    icon: Rocket,
    guidelines: ['Innovative idea', 'Entity registration', 'Pitch deck'],
    guidelinesHi: ['अभिनव विचार', 'इकाई पंजीकरण', 'पिच डेक'],
    searchQuery: 'Startup Rajasthan registration application form iStart portal pdf',
    guide: {
      purpose: {
        en: 'To foster innovation and support the startup ecosystem in Rajasthan through the iStart portal.',
        hi: 'iStart पोर्टल के माध्यम से राजस्थान में नवाचार को बढ़ावा देना और स्टार्टअप पारिस्थितिकी तंत्र का समर्थन करना।'
      },
      eligibility: {
        en: 'Startups registered as Private Limited, LLP, or Partnership firms in Rajasthan.',
        hi: 'राजस्थान में प्राइवेट लिमिटेड, एलएलपी या पार्टनरशिप फर्म के रूप में पंजीकृत स्टार्टअप।'
      },
      documents: {
        en: ['Certificate of Incorporation', 'PAN Card of the entity', 'Pitch Deck/Business Model', 'Founder details', 'Aadhaar Card of founders'],
        hi: ['निगमन का प्रमाण पत्र', 'इकाई का पैन कार्ड', 'पिच डेक/बिजनेस मॉडल', 'संस्थापक विवरण', 'संस्थापकों का आधार कार्ड']
      },
      process: {
        en: '1. Register on the iStart Rajasthan portal. 2. Fill the startup profile and upload documents. 3. Evaluation by the iStart team. 4. Recognition and Q-Rate ranking. 5. Apply for various grants and benefits.',
        hi: '1. iStart राजस्थान पोर्टल पर पंजीकरण करें। 2. स्टार्टअप प्रोफाइल भरें और दस्तावेज अपलोड करें। 3. iStart टीम द्वारा मूल्यांकन। 4. मान्यता और Q-Rate रैंकिंग। 5. विभिन्न अनुदानों और लाभों के लिए आवेदन करें।'
      },
      tips: {
        en: 'iStart provides incubation space, marketing support, and direct funding to high-potential startups.',
        hi: 'iStart उच्च क्षमता वाले स्टार्टअप्स को इनक्यूबेशन स्पेस, मार्केटिंग सपोर्ट और डायरेक्ट फंडिंग प्रदान करता है।'
      }
    }
  },
  {
    id: 'riico-plot-allotment-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Industrial Plot',
    serviceNameHi: 'औद्योगिक भूखंड',
    formName: 'RIICO Industrial Plot Allotment',
    formNameHi: 'RIICO औद्योगिक भूखंड आवंटन',
    description: 'Application for allotment of land in industrial areas developed by RIICO.',
    descriptionHi: 'RIICO द्वारा विकसित औद्योगिक क्षेत्रों में भूमि आवंटन के लिए आवेदन।',
    icon: Map,
    guidelines: ['Project report', 'Financial capacity', 'Online auction'],
    guidelinesHi: ['परियोजना रिपोर्ट', 'वित्तीय क्षमता', 'ऑनलाइन नीलामी'],
    searchQuery: 'RIICO industrial plot allotment application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To obtain land for setting up industrial units in designated industrial zones of Rajasthan.',
        hi: 'राजस्थान के नामित औद्योगिक क्षेत्रों में औद्योगिक इकाइयां स्थापित करने के लिए भूमि प्राप्त करना।'
      },
      eligibility: {
        en: 'Entrepreneurs or companies planning to set up an industrial unit.',
        hi: 'औद्योगिक इकाई स्थापित करने की योजना बनाने वाले उद्यमी या कंपनियां।'
      },
      documents: {
        en: ['Detailed Project Report (DPR)', 'Constitution of the firm (MOA/AOA/Partnership Deed)', 'Identity and Address Proof', 'Financial Statements', 'Affidavit regarding non-pollution'],
        hi: ['विस्तृत परियोजना रिपोर्ट (DPR)', 'फर्म का संविधान (MOA/AOA/पार्टनरशिप डीड)', 'पहचान और पता प्रमाण', 'वित्तीय विवरण', 'गैर-प्रदूषण के संबंध में हलफनामा']
      },
      process: {
        en: '1. Check available plots on the RIICO GIS portal. 2. Apply online during the allotment/auction window. 3. Pay the EMD (Earnest Money Deposit). 4. Participate in the e-auction or selection process. 5. Allotment letter issued after successful bid.',
        hi: '1. RIICO GIS पोर्टल पर उपलब्ध भूखंडों की जांच करें। 2. आवंटन/नीलामी विंडो के दौरान ऑनलाइन आवेदन करें। 3. ईएमडी (बयाना राशि) का भुगतान करें। 4. ई-नीलामी या चयन प्रक्रिया में भाग लें। 5. सफल बोली के बाद आवंटन पत्र जारी।'
      },
      tips: {
        en: 'RIICO also offers plots on a "first-come-first-serve" basis in some areas.',
        hi: 'RIICO कुछ क्षेत्रों में "पहले आओ-पहले पाओ" के आधार पर भी भूखंड प्रदान करता है।'
      }
    }
  },
  {
    id: 'single-window-clearance-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Investment',
    serviceNameHi: 'निवेश',
    formName: 'Single Window Clearance System (SWCS)',
    formNameHi: 'सिंगल विंडो क्लीयरेंस सिस्टम (SWCS)',
    description: 'One-stop portal for all industrial approvals and clearances in Rajasthan.',
    descriptionHi: 'राजस्थान में सभी औद्योगिक अनुमोदनों और मंजूरी के लिए वन-स्टॉप पोर्टल।',
    icon: CheckCircle,
    guidelines: ['Composite application', 'Time-bound approvals', 'Online tracking'],
    guidelinesHi: ['समग्र आवेदन', 'समयबद्ध अनुमोदन', 'ऑनलाइन ट्रैकिंग'],
    searchQuery: 'Rajasthan single window clearance system application form pdf',
    guide: {
      purpose: {
        en: 'To simplify the process of obtaining multiple clearances (Pollution, Fire, Power, etc.) for new investments.',
        hi: 'नए निवेशों के लिए कई मंजूरी (प्रदूषण, अग्नि, बिजली, आदि) प्राप्त करने की प्रक्रिया को सरल बनाना।'
      },
      eligibility: {
        en: 'New or existing industrial units seeking multiple government approvals.',
        hi: 'कई सरकारी अनुमोदन चाहने वाली नई या मौजूदा औद्योगिक इकाइयां।'
      },
      documents: {
        en: ['Common Application Form (CAF)', 'Project Report', 'Land Documents', 'Identity Proof of Promoter', 'Site Plan'],
        hi: ['सामान्य आवेदन फॉर्म (CAF)', 'परियोजना रिपोर्ट', 'भूमि दस्तावेज', 'प्रवर्तक का पहचान प्रमाण', 'साइट प्लान']
      },
      process: {
        en: '1. Register on the Single Window portal. 2. Fill the Common Application Form. 3. Upload required documents for all departments. 4. Pay the consolidated fee. 5. Track status and receive approvals digitally.',
        hi: '1. सिंगल विंडो पोर्टल पर पंजीकरण करें। 2. सामान्य आवेदन फॉर्म भरें। 3. सभी विभागों के लिए आवश्यक दस्तावेज अपलोड करें। 4. समेकित शुल्क का भुगतान करें। 5. स्थिति को ट्रैक करें और डिजिटल रूप से अनुमोदन प्राप्त करें।'
      },
      tips: {
        en: 'The system ensures time-bound delivery of services under the Rajasthan Enterprises Single Window Enabling and Clearance Act.',
        hi: 'यह प्रणाली राजस्थान उद्यम सिंगल विंडो इनेबलिंग एंड क्लीयरेंस एक्ट के तहत सेवाओं की समयबद्ध डिलीवरी सुनिश्चित करती है।'
      }
    }
  },
  {
    id: 'export-promotion-registration-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Export',
    serviceNameHi: 'निर्यात',
    formName: 'Export Promotion Council Registration (RCMC)',
    formNameHi: 'निर्यात संवर्धन परिषद पंजीकरण (RCMC)',
    description: 'Registration with Export Promotion Councils to avail benefits under the Foreign Trade Policy.',
    descriptionHi: 'विदेश व्यापार नीति के तहत लाभ प्राप्त करने के लिए निर्यात संवर्धन परिषदों के साथ पंजीकरण।',
    icon: Globe,
    guidelines: ['IEC code', 'Business details', 'Membership fee'],
    guidelinesHi: ['IEC कोड', 'व्यवसाय का विवरण', 'सदस्यता शुल्क'],
    searchQuery: 'Export promotion council RCMC registration form online India pdf',
    guide: {
      purpose: {
        en: 'To obtain the Registration-cum-Membership Certificate (RCMC) which is mandatory for claiming export incentives.',
        hi: 'पंजीकरण-सह-सदस्यता प्रमाण पत्र (RCMC) प्राप्त करना जो निर्यात प्रोत्साहन का दावा करने के लिए अनिवार्य है।'
      },
      eligibility: {
        en: 'Exporters of goods or services from India.',
        hi: 'भारत से वस्तुओं या सेवाओं के निर्यातक।'
      },
      documents: {
        en: ['Import Export Code (IEC) Certificate', 'PAN Card', 'Identity and Address Proof of partners/directors', 'Board Resolution/Partnership Deed', 'MSME Registration (if applicable)'],
        hi: ['आयात निर्यात कोड (IEC) प्रमाण पत्र', 'पैन कार्ड', 'साझेदारों/निदेशकों का पहचान और पता प्रमाण', 'बोर्ड प्रस्ताव/पार्टनरशिप डीड', 'एमएसएमई पंजीकरण (यदि लागू हो)']
      },
      process: {
        en: '1. Choose the relevant EPC based on your product (e.g., EEPC for engineering, AEPC for apparel). 2. Apply online on the EPC portal. 3. Upload documents and pay membership fee. 4. RCMC is issued after verification.',
        hi: '1. अपने उत्पाद के आधार पर प्रासंगिक ईपीसी चुनें (जैसे, इंजीनियरिंग के लिए ईईपीसी, परिधान के लिए एईपीसी)। 2. ईपीसी पोर्टल पर ऑनलाइन आवेदन करें। 3. दस्तावेज अपलोड करें और सदस्यता शुल्क का भुगतान करें। 4. सत्यापन के बाद आरसीएमसी जारी किया जाता है।'
      },
      tips: {
        en: 'RCMC is usually valid for 5 years and needs to be renewed.',
        hi: 'RCMC आमतौर पर 5 साल के लिए मान्य होता है और इसे नवीनीकृत करने की आवश्यकता होती है।'
      }
    }
  },
  {
    id: 'import-export-code-iec-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Export',
    serviceNameHi: 'निर्यात',
    formName: 'Import Export Code (IEC) Registration',
    formNameHi: 'आयात निर्यात कोड (IEC) पंजीकरण',
    description: 'Mandatory 10-digit code for any person or entity importing or exporting goods/services from India.',
    descriptionHi: 'भारत से वस्तुओं/सेवाओं का आयात या निर्यात करने वाले किसी भी व्यक्ति या इकाई के लिए अनिवार्य 10-अंकीय कोड।',
    icon: Truck,
    guidelines: ['PAN card', 'Bank account', 'Online application'],
    guidelinesHi: ['पैन कार्ड', 'बैंक खाता', 'ऑनलाइन आवेदन'],
    searchQuery: 'Import Export Code IEC application form DGFT online pdf',
    guide: {
      purpose: {
        en: 'To obtain a unique identification number required for international trade transactions.',
        hi: 'अंतरराष्ट्रीय व्यापार लेनदेन के लिए आवश्यक एक अद्वितीय पहचान संख्या प्राप्त करना।'
      },
      eligibility: {
        en: 'Any individual or firm intending to start import/export business.',
        hi: 'आयात/निर्यात व्यवसाय शुरू करने का इरादा रखने वाला कोई भी व्यक्ति या फर्म।'
      },
      documents: {
        en: ['PAN Card', 'Cancelled Cheque/Bank Certificate', 'Address Proof of the firm', 'Identity Proof of the applicant'],
        hi: ['पैन कार्ड', 'रद्द चेक/बैंक प्रमाण पत्र', 'फर्म का पता प्रमाण', 'आवेदक का पहचान प्रमाण']
      },
      process: {
        en: '1. Visit the DGFT (Directorate General of Foreign Trade) portal. 2. Register and login. 3. Fill the online IEC application. 4. Pay the application fee (₹500). 5. IEC is generated automatically after successful payment.',
        hi: '1. DGFT (विदेश व्यापार महानिदेशालय) पोर्टल पर जाएं। 2. पंजीकरण और लॉगिन करें। 3. ऑनलाइन IEC आवेदन भरें। 4. आवेदन शुल्क (₹500) का भुगतान करें। 5. सफल भुगतान के बाद IEC स्वचालित रूप से उत्पन्न होता है।'
      },
      tips: {
        en: 'IEC is now same as the PAN of the entity. Annual updating of IEC is mandatory between April and June.',
        hi: 'IEC अब इकाई के पैन के समान है। अप्रैल और जून के बीच IEC का वार्षिक अपडेट अनिवार्य है।'
      }
    }
  },
  {
    id: 'shops-establishment-registration-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Business Registration',
    serviceNameHi: 'व्यवसाय पंजीकरण',
    formName: 'Shops and Establishment Act Registration',
    formNameHi: 'दुकान और स्थापना अधिनियम पंजीकरण',
    description: 'Mandatory registration for any commercial establishment or shop operating within municipal limits.',
    descriptionHi: 'नगरपालिका सीमा के भीतर संचालित किसी भी वाणिज्यिक प्रतिष्ठान या दुकान के लिए अनिवार्य पंजीकरण।',
    icon: ShoppingBag,
    guidelines: ['Business address', 'Owner details', 'Employee count'],
    guidelinesHi: ['व्यवसाय का पता', 'मालिक का विवरण', 'कर्मचारियों की संख्या'],
    searchQuery: 'Shops and establishment act registration form Rajasthan labor department pdf',
    guide: {
      purpose: {
        en: 'To regulate the working conditions, hours, and rights of employees in the unorganized sector.',
        hi: 'असंगठित क्षेत्र में कर्मचारियों की काम करने की स्थिति, घंटों और अधिकारों को विनियमित करना।'
      },
      eligibility: {
        en: 'Every shop or commercial establishment (offices, restaurants, hotels) must register within 30 days of commencement.',
        hi: 'प्रत्येक दुकान या वाणिज्यिक प्रतिष्ठान (कार्यालय, रेस्तरां, होटल) को शुरू होने के 30 दिनों के भीतर पंजीकरण करना होगा।'
      },
      documents: {
        en: ['Identity and Address Proof of the employer', 'Address Proof of the establishment (Rent agreement/Registry)', 'Photo of the shop with the signboard', 'List of employees'],
        hi: ['नियोक्ता का पहचान और पता प्रमाण', 'प्रतिष्ठान का पता प्रमाण (किराया समझौता/रजिस्ट्री)', 'साइनबोर्ड के साथ दुकान का फोटो', 'कर्मचारियों की सूची']
      },
      process: {
        en: '1. Apply online on the state labor department portal (LDMS). 2. Fill details of the business and employees. 3. Upload documents and photos. 4. Pay the registration fee based on the number of employees. 5. Certificate is issued digitally.',
        hi: '1. राज्य श्रम विभाग पोर्टल (LDMS) पर ऑनलाइन आवेदन करें। 2. व्यवसाय और कर्मचारियों का विवरण भरें। 3. दस्तावेज और फोटो अपलोड करें। 4. कर्मचारियों की संख्या के आधार पर पंजीकरण शुल्क का भुगतान करें। 5. प्रमाण पत्र डिजिटल रूप से जारी किया जाता है।'
      },
      tips: {
        en: 'The registration needs to be renewed periodically as per state rules.',
        hi: 'राज्य के नियमों के अनुसार पंजीकरण को समय-समय पर नवीनीकृत करने की आवश्यकता होती है।'
      }
    }
  },
  {
    id: 'tourist-guide-license-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Tourism',
    serviceNameHi: 'पर्यटन',
    formName: 'Tourist Guide License Application',
    formNameHi: 'पर्यटक गाइड लाइसेंस आवेदन',
    description: 'Application for obtaining a license to work as a professional tourist guide in Rajasthan.',
    descriptionHi: 'राजस्थान में एक पेशेवर पर्यटक गाइड के रूप में काम करने के लिए लाइसेंस प्राप्त करने के लिए आवेदन।',
    icon: MapPin,
    guidelines: ['Educational qualification', 'Training course', 'Police clearance'],
    guidelinesHi: ['शैक्षणिक योग्यता', 'प्रशिक्षण पाठ्यक्रम', 'पुलिस क्लीयरेंस'],
    searchQuery: 'Rajasthan tourism department tourist guide license application form pdf',
    guide: {
      purpose: {
        en: 'To regulate the tourism industry and ensure that tourists receive accurate information from certified guides.',
        hi: 'पर्यटन उद्योग को विनियमित करना और यह सुनिश्चित करना कि पर्यटकों को प्रमाणित गाइडों से सटीक जानकारी मिले।'
      },
      eligibility: {
        en: 'Individuals with a degree in history/culture/tourism and who have passed the guide training course conducted by the department.',
        hi: 'इतिहास/संस्कृति/पर्यटन में डिग्री रखने वाले व्यक्ति और जिन्होंने विभाग द्वारा आयोजित गाइड प्रशिक्षण पाठ्यक्रम उत्तीर्ण किया है।'
      },
      documents: {
        en: ['Educational Certificates', 'Training Completion Certificate', 'Police Verification Report', 'Identity and Address Proof', 'Passport size Photographs'],
        hi: ['शैक्षणिक प्रमाण पत्र', 'प्रशिक्षण पूर्ण होने का प्रमाण पत्र', 'पुलिस सत्यापन रिपोर्ट', 'पहचान और पता प्रमाण', 'पासपोर्ट साइज फोटो']
      },
      process: {
        en: '1. Apply online on the Rajasthan Tourism portal. 2. Submit educational and training proofs. 3. Appear for an interview/exam if required. 4. Pay the license fee. 5. Receive the Tourist Guide ID and License.',
        hi: '1. राजस्थान पर्यटन पोर्टल पर ऑनलाइन आवेदन करें। 2. शैक्षणिक और प्रशिक्षण प्रमाण जमा करें। 3. यदि आवश्यक हो तो साक्षात्कार/परीक्षा में शामिल हों। 4. लाइसेंस शुल्क का भुगतान करें। 5. पर्यटक गाइड आईडी और लाइसेंस प्राप्त करें।'
      },
      tips: {
        en: 'Licenses are issued for specific categories like Local, State, or Regional guides.',
        hi: 'लाइसेंस स्थानीय, राज्य या क्षेत्रीय गाइड जैसी विशिष्ट श्रेणियों के लिए जारी किए जाते हैं।'
      }
    }
  },
  {
    id: 'hotel-registration-tourism-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Tourism',
    serviceNameHi: 'पर्यटन',
    formName: 'Hotel/Guest House Registration',
    formNameHi: 'होटल/गेस्ट हाउस पंजीकरण',
    description: 'Mandatory registration for hotels, guest houses, and resorts with the Department of Tourism.',
    descriptionHi: 'पर्यटन विभाग के साथ होटल, गेस्ट हाउस और रिसॉर्ट्स के लिए अनिवार्य पंजीकरण।',
    icon: Hotel,
    guidelines: ['Building approval', 'Fire NOC', 'Health certificate'],
    guidelinesHi: ['भवन अनुमोदन', 'फायर एनओसी', 'स्वास्थ्य प्रमाण पत्र'],
    searchQuery: 'Rajasthan tourism department hotel registration form online pdf',
    guide: {
      purpose: {
        en: 'To ensure quality standards and safety in the hospitality sector of Rajasthan.',
        hi: 'राजस्थान के आतिथ्य क्षेत्र में गुणवत्ता मानकों और सुरक्षा को सुनिश्चित करना।'
      },
      eligibility: {
        en: 'Any person or entity operating a commercial lodging facility.',
        hi: 'वाणिज्यिक आवास सुविधा संचालित करने वाला कोई भी व्यक्ति या इकाई।'
      },
      documents: {
        en: ['Ownership/Lease Documents of the building', 'Approved Building Plan', 'Fire Safety NOC', 'Health and Sanitation Certificate', 'Identity Proof of the owner', 'Police Clearance'],
        hi: ['भवन के स्वामित्व/पट्टे के दस्तावेज', 'अनुमोदित भवन योजना', 'अग्नि सुरक्षा एनओसी', 'स्वास्थ्य और स्वच्छता प्रमाण पत्र', 'मालिक का पहचान प्रमाण', 'पुलिस क्लीयरेंस']
      },
      process: {
        en: '1. Apply online on the Rajasthan Tourism portal. 2. Fill the establishment details and upload documents. 3. Inspection by the tourism department officials. 4. Pay the registration fee. 5. Receive the Registration Certificate.',
        hi: '1. राजस्थान पर्यटन पोर्टल पर ऑनलाइन आवेदन करें। 2. प्रतिष्ठान का विवरण भरें और दस्तावेज अपलोड करें। 3. पर्यटन विभाग के अधिकारियों द्वारा निरीक्षण। 4. पंजीकरण शुल्क का भुगतान करें। 5. पंजीकरण प्रमाण पत्र प्राप्त करें।'
      },
      tips: {
        en: 'Registration is required for star classification and to avail tourism-related incentives.',
        hi: 'स्टार वर्गीकरण और पर्यटन से संबंधित प्रोत्साहन प्राप्त करने के लिए पंजीकरण आवश्यक है।'
      }
    }
  },
  {
    id: 'travel-agency-registration-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Tourism',
    serviceNameHi: 'पर्यटन',
    formName: 'Travel Agency/Tour Operator Registration',
    formNameHi: 'ट्रैवल एजेंसी/टूर ऑपरेटर पंजीकरण',
    description: 'Registration for travel agencies and tour operators to be recognized by the state government.',
    descriptionHi: 'राज्य सरकार द्वारा मान्यता प्राप्त करने के लिए ट्रैवल एजेंसियों और टूर ऑपरेटरों के लिए पंजीकरण।',
    icon: Plane,
    guidelines: ['Office space', 'Qualified staff', 'Financial stability'],
    guidelinesHi: ['कार्यालय स्थान', 'योग्य कर्मचारी', 'वित्तीय स्थिरता'],
    searchQuery: 'Rajasthan tourism department travel agency registration form pdf',
    guide: {
      purpose: {
        en: 'To provide official recognition to travel service providers and ensure professional standards.',
        hi: 'यात्रा सेवा प्रदाताओं को आधिकारिक मान्यता प्रदान करना और पेशेवर मानकों को सुनिश्चित करना।'
      },
      eligibility: {
        en: 'Firms or individuals operating as travel agents or tour operators with a physical office in Rajasthan.',
        hi: 'राजस्थान में भौतिक कार्यालय के साथ ट्रैवल एजेंट या टूर ऑपरेटर के रूप में काम करने वाली फर्में या व्यक्ति।'
      },
      documents: {
        en: ['Business Registration Certificate', 'Office Address Proof', 'Staff Qualification Proofs', 'Bank Solvency Certificate', 'Identity Proof of partners/directors'],
        hi: ['व्यवसाय पंजीकरण प्रमाण पत्र', 'कार्यालय का पता प्रमाण', 'कर्मचारी योग्यता प्रमाण', 'बैंक सॉल्वेंसी सर्टिफिकेट', 'साझेदारों/निदेशकों का पहचान प्रमाण']
      },
      process: {
        en: '1. Apply online on the Department of Tourism portal. 2. Submit business and staff details. 3. Verification of office premises. 4. Pay the recognition fee. 5. Receive the Recognition Certificate.',
        hi: '1. पर्यटन विभाग के पोर्टल पर ऑनलाइन आवेदन करें। 2. व्यवसाय और कर्मचारियों का विवरण जमा करें। 3. कार्यालय परिसर का सत्यापन। 4. मान्यता शुल्क का भुगतान करें। 5. मान्यता प्रमाण पत्र प्राप्त करें।'
      },
      tips: {
        en: 'Recognized agencies are often listed on the official tourism website, providing better visibility.',
        hi: 'मान्यता प्राप्त एजेंसियों को अक्सर आधिकारिक पर्यटन वेबसाइट पर सूचीबद्ध किया जाता है, जिससे बेहतर दृश्यता मिलती है।'
      }
    }
  },
  {
    id: 'adventure-tourism-permission-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Tourism',
    serviceNameHi: 'पर्यटन',
    formName: 'Adventure Tourism Activity Permission',
    formNameHi: 'साहसिक पर्यटन गतिविधि अनुमति',
    description: 'Permission for conducting adventure activities like trekking, paragliding, or water sports.',
    descriptionHi: 'ट्रेकिंग, पैराग्लाइडिंग या वाटर स्पोर्ट्स जैसी साहसिक गतिविधियों के संचालन के लिए अनुमति।',
    icon: Mountain,
    guidelines: ['Safety equipment', 'Certified instructors', 'Insurance'],
    guidelinesHi: ['सुरक्षा उपकरण', 'प्रमाणित प्रशिक्षक', 'बीमा'],
    searchQuery: 'Adventure tourism activity permission form Rajasthan guidelines pdf',
    guide: {
      purpose: {
        en: 'To ensure the safety of tourists participating in high-risk adventure activities.',
        hi: 'उच्च जोखिम वाली साहसिक गतिविधियों में भाग लेने वाले पर्यटकों की सुरक्षा सुनिश्चित करना।'
      },
      eligibility: {
        en: 'Operators with certified equipment and trained personnel for specific adventure sports.',
        hi: 'विशिष्ट साहसिक खेलों के लिए प्रमाणित उपकरण और प्रशिक्षित कर्मियों वाले ऑपरेटर।'
      },
      documents: {
        en: ['Equipment Safety Certificate', 'Instructor Certifications', 'Liability Insurance Policy', 'Emergency Response Plan', 'Activity Site Permission'],
        hi: ['उपकरण सुरक्षा प्रमाण पत्र', 'प्रशिक्षक प्रमाणन', 'देयता बीमा पॉलिसी', 'आपातकालीन प्रतिक्रिया योजना', 'गतिविधि स्थल अनुमति']
      },
      process: {
        en: '1. Apply to the local tourism office or online portal. 2. Submit safety and technical details of the activity. 3. Inspection of equipment and site. 4. Grant of temporary or permanent permission.',
        hi: '1. स्थानीय पर्यटन कार्यालय या ऑनलाइन पोर्टल पर आवेदन करें। 2. गतिविधि की सुरक्षा और तकनीकी विवरण जमा करें। 3. उपकरण और साइट का निरीक्षण। 4. अस्थायी या स्थायी अनुमति प्रदान करना।'
      },
      tips: {
        en: 'Strict adherence to safety guidelines is mandatory to avoid cancellation of permission.',
        hi: 'अनुमति रद्द होने से बचने के लिए सुरक्षा दिशानिर्देशों का कड़ाई से पालन अनिवार्य है।'
      }
    }
  },
  {
    id: 'paying-guest-scheme-registration',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Tourism',
    serviceNameHi: 'पर्यटन',
    formName: 'Paying Guest (PG) Scheme Registration',
    formNameHi: 'पेइंग गेस्ट (PG) योजना पंजीकरण',
    description: 'Registration for homeowners to offer rooms to tourists under the state PG scheme.',
    descriptionHi: 'राज्य पीजी योजना के तहत पर्यटकों को कमरे देने के लिए घर मालिकों के लिए पंजीकरण।',
    icon: Home,
    guidelines: ['Residential house', 'Basic amenities', 'Police verification'],
    guidelinesHi: ['आवासीय घर', 'बुनियादी सुविधाएं', 'पुलिस सत्यापन'],
    searchQuery: 'Rajasthan tourism paying guest scheme registration form pdf',
    guide: {
      purpose: {
        en: 'To provide authentic local stay experiences to tourists and generate income for homeowners.',
        hi: 'पर्यटकों को प्रामाणिक स्थानीय प्रवास का अनुभव प्रदान करना और घर मालिकों के लिए आय उत्पन्न करना।'
      },
      eligibility: {
        en: 'Homeowners residing in the same house with at least one spare room for guests.',
        hi: 'उसी घर में रहने वाले घर के मालिक जिनके पास मेहमानों के लिए कम से कम एक अतिरिक्त कमरा हो।'
      },
      documents: {
        en: ['Ownership Proof of the house', 'Identity Proof of the owner', 'Police Verification of the family', 'House Map/Photos', 'Undertaking for safety and hygiene'],
        hi: ['घर के स्वामित्व का प्रमाण', 'मालिक का पहचान प्रमाण', 'परिवार का पुलिस सत्यापन', 'घर का नक्शा/फोटो', 'सुरक्षा और स्वच्छता के लिए वचनबद्धता']
      },
      process: {
        en: '1. Apply online on the Rajasthan Tourism portal. 2. Submit house and family details. 3. Inspection by the department. 4. Registration certificate issued. 5. House listed as a PG facility.',
        hi: '1. राजस्थान पर्यटन पोर्टल पर ऑनलाइन आवेदन करें। 2. घर और परिवार का विवरण जमा करें। 3. विभाग द्वारा निरीक्षण। 4. पंजीकरण प्रमाण पत्र जारी। 5. घर को पीजी सुविधा के रूप में सूचीबद्ध किया गया।'
      },
      tips: {
        en: 'PG owners are exempt from commercial taxes like electricity and water in many cases.',
        hi: 'पीजी मालिकों को कई मामलों में बिजली और पानी जैसे वाणिज्यिक करों से छूट दी जाती है।'
      }
    }
  },
  {
    id: 'heritage-property-certification-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Tourism',
    serviceNameHi: 'पर्यटन',
    formName: 'Heritage Property Certification',
    formNameHi: 'विरासत संपत्ति प्रमाणन',
    description: 'Certification for old buildings, havelis, or forts as heritage properties for tourism purposes.',
    descriptionHi: 'पर्यटन उद्देश्यों के लिए पुरानी इमारतों, हवेलियों या किलों को विरासत संपत्ति के रूप में प्रमाणित करना।',
    icon: Landmark,
    guidelines: ['Age > 50 years', 'Architectural value', 'Conservation plan'],
    guidelinesHi: ['आयु > 50 वर्ष', 'वास्तुशिल्प मूल्य', 'संरक्षण योजना'],
    searchQuery: 'Rajasthan heritage property certification application form pdf',
    guide: {
      purpose: {
        en: 'To identify and preserve historical structures and promote heritage tourism.',
        hi: 'ऐतिहासिक संरचनाओं की पहचान करना और उन्हें संरक्षित करना और विरासत पर्यटन को बढ़ावा देना।'
      },
      eligibility: {
        en: 'Owners of properties that are at least 50 years old and possess historical or architectural significance.',
        hi: 'उन संपत्तियों के मालिक जो कम से कम 50 वर्ष पुरानी हैं और ऐतिहासिक या वास्तुशिल्प महत्व रखती हैं।'
      },
      documents: {
        en: ['Proof of Age of the building', 'Historical Background/Documentation', 'Photographs of the property', 'Conservation and Maintenance Plan', 'Ownership Documents'],
        hi: ['भवन की आयु का प्रमाण', 'ऐतिहासिक पृष्ठभूमि/दस्तावेज', 'संपत्ति के फोटो', 'संरक्षण और रखरखाव योजना', 'स्वामित्व दस्तावेज']
      },
      process: {
        en: '1. Apply to the Department of Tourism. 2. Evaluation by a committee of experts. 3. Site visit and documentation review. 4. Issuance of Heritage Certificate.',
        hi: '1. पर्यटन विभाग में आवेदन करें। 2. विशेषज्ञों की एक समिति द्वारा मूल्यांकन। 3. साइट का दौरा और दस्तावेज़ समीक्षा। 4. विरासत प्रमाण पत्र जारी करना।'
      },
      tips: {
        en: 'Certified heritage properties may be eligible for special grants or tax concessions for restoration.',
        hi: 'प्रमाणित विरासत संपत्तियां बहाली के लिए विशेष अनुदान या कर रियायतों के लिए पात्र हो सकती हैं।'
      }
    }
  },
  {
    id: 'cultural-event-permission-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Culture',
    serviceNameHi: 'संस्कृति',
    formName: 'Cultural Event Permission',
    formNameHi: 'सांस्कृतिक कार्यक्रम अनुमति',
    description: 'Permission for organizing cultural programs, festivals, or exhibitions in public spaces.',
    descriptionHi: 'सार्वजनिक स्थानों पर सांस्कृतिक कार्यक्रमों, त्योहारों या प्रदर्शनियों के आयोजन के लिए अनुमति।',
    icon: Music,
    guidelines: ['Event details', 'Sound limit', 'Security plan'],
    guidelinesHi: ['कार्यक्रम का विवरण', 'ध्वनि सीमा', 'सुरक्षा योजना'],
    searchQuery: 'Permission for cultural event in Rajasthan application form pdf',
    guide: {
      purpose: {
        en: 'To ensure that public events are organized safely and without causing public nuisance.',
        hi: 'यह सुनिश्चित करना कि सार्वजनिक कार्यक्रम सुरक्षित रूप से और सार्वजनिक उपद्रव पैदा किए बिना आयोजित किए जाएं।'
      },
      eligibility: {
        en: 'Individuals, NGOs, or organizations planning a cultural event.',
        hi: 'सांस्कृतिक कार्यक्रम की योजना बनाने वाले व्यक्ति, एनजीओ या संगठन।'
      },
      documents: {
        en: ['Event Proposal', 'Venue Booking Proof', 'Fire NOC', 'Police Permission', 'Identity Proof of the organizer'],
        hi: ['कार्यक्रम का प्रस्ताव', 'स्थान बुकिंग प्रमाण', 'फायर एनओसी', 'पुलिस अनुमति', 'आयोजक का पहचान प्रमाण']
      },
      process: {
        en: '1. Apply to the local District Collector or Municipal office. 2. Submit the event plan and required NOCs. 3. Verification by local authorities. 4. Grant of permission with specific conditions.',
        hi: '1. स्थानीय जिला कलेक्टर या नगर पालिका कार्यालय में आवेदन करें। 2. कार्यक्रम योजना और आवश्यक एनओसी जमा करें। 3. स्थानीय अधिकारियों द्वारा सत्यापन। 4. विशिष्ट शर्तों के साथ अनुमति प्रदान करना।'
      },
      tips: {
        en: 'Apply at least 15 days in advance to allow for processing and security checks.',
        hi: 'प्रसंस्करण और सुरक्षा जांच के लिए कम से कम 15 दिन पहले आवेदन करें।'
      }
    }
  },
  {
    id: 'film-shooting-permission-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Tourism',
    serviceNameHi: 'पर्यटन',
    formName: 'Film Shooting Permission',
    formNameHi: 'फिल्म शूटिंग अनुमति',
    description: 'Permission for shooting films, documentaries, or commercials at various locations in Rajasthan.',
    descriptionHi: 'राजस्थान में विभिन्न स्थानों पर फिल्मों, वृत्तचित्रों या विज्ञापनों की शूटिंग के लिए अनुमति।',
    icon: Video,
    guidelines: ['Script summary', 'Location list', 'Security deposit'],
    guidelinesHi: ['स्क्रिप्ट सारांश', 'स्थान सूची', 'सुरक्षा जमा'],
    searchQuery: 'Rajasthan film shooting permission application form online pdf',
    guide: {
      purpose: {
        en: 'To facilitate film production in the state and promote Rajasthan as a filming destination.',
        hi: 'राज्य में फिल्म निर्माण की सुविधा प्रदान करना और राजस्थान को फिल्म गंतव्य के रूप में बढ़ावा देना।'
      },
      eligibility: {
        en: 'Production houses or filmmakers intending to shoot in Rajasthan.',
        hi: 'राजस्थान में शूटिंग करने का इरादा रखने वाले प्रोडक्शन हाउस या फिल्म निर्माता।'
      },
      documents: {
        en: ['Application in prescribed format', 'Brief Script/Synopsis', 'List of Locations', 'Identity Proof of the applicant', 'Company Registration Proof'],
        hi: ['निर्धारित प्रारूप में आवेदन', 'संक्षिप्त स्क्रिप्ट/सारांश', 'स्थानों की सूची', 'आवेदक का पहचान प्रमाण', 'कंपनी पंजीकरण प्रमाण']
      },
      process: {
        en: '1. Apply online on the Rajasthan Film Tourism portal. 2. Select locations and dates. 3. Pay the processing fee and security deposit. 4. Clearance from relevant departments (Forest, Archaeology, etc.). 5. Single Window clearance issued.',
        hi: '1. राजस्थान फिल्म पर्यटन पोर्टल पर ऑनलाइन आवेदन करें। 2. स्थानों और तारीखों का चयन करें। 3. प्रसंस्करण शुल्क और सुरक्षा जमा का भुगतान करें। 4. संबंधित विभागों (वन, पुरातत्व, आदि) से मंजूरी। 5. सिंगल विंडो क्लीयरेंस जारी।'
      },
      tips: {
        en: 'Rajasthan offers subsidies for films shot in the state under the Film Promotion Policy.',
        hi: 'राजस्थान फिल्म प्रोत्साहन नीति के तहत राज्य में शूट की गई फिल्मों के लिए सब्सिडी प्रदान करता है।'
      }
    }
  },
  {
    id: 'artist-registration-form',
    category: 'Welfare Schemes',
    categoryHi: 'कल्याणकारी योजनाएं',
    serviceName: 'Culture',
    serviceNameHi: 'संस्कृति',
    formName: 'Artist Registration (Art & Culture Dept)',
    formNameHi: 'कलाकार पंजीकरण (कला और संस्कृति विभाग)',
    description: 'Registration for folk artists, musicians, and performers to receive government support and performance opportunities.',
    descriptionHi: 'सरकारी सहायता और प्रदर्शन के अवसर प्राप्त करने के लिए लोक कलाकारों, संगीतकारों और प्रदर्शन करने वालों के लिए पंजीकरण।',
    icon: Users,
    guidelines: ['Art form proof', 'Rajasthan resident', 'Jan Aadhaar'],
    guidelinesHi: ['कला रूप प्रमाण', 'राजस्थान निवासी', 'जन आधार'],
    searchQuery: 'Rajasthan art and culture department artist registration form pdf',
    guide: {
      purpose: {
        en: 'To create a database of artists for providing financial aid, insurance, and opportunities in government festivals.',
        hi: 'सरकारी उत्सवों में वित्तीय सहायता, बीमा और अवसर प्रदान करने के लिए कलाकारों का एक डेटाबेस बनाना।'
      },
      eligibility: {
        en: 'Practicing artists in various fields like folk dance, music, painting, or theater residing in Rajasthan.',
        hi: 'राजस्थान में रहने वाले लोक नृत्य, संगीत, चित्रकला या रंगमंच जैसे विभिन्न क्षेत्रों में अभ्यास करने वाले कलाकार।'
      },
      documents: {
        en: ['Jan Aadhaar Card', 'Identity Proof', 'Photographs of performances/artworks', 'Bank Account details', 'Recommendation from a recognized artist or organization'],
        hi: ['जन आधार कार्ड', 'पहचान प्रमाण', 'प्रदर्शन/कलाकृतियों के फोटो', 'बैंक खाता विवरण', 'किसी मान्यता प्राप्त कलाकार या संगठन से सिफारिश']
      },
      process: {
        en: '1. Apply online or at the District Art and Culture office. 2. Submit details of the art form and experience. 3. Verification by the department. 4. Issuance of Artist ID Card.',
        hi: '1. ऑनलाइन या जिला कला और संस्कृति कार्यालय में आवेदन करें। 2. कला रूप और अनुभव का विवरण जमा करें। 3. विभाग द्वारा सत्यापन। 4. कलाकार आईडी कार्ड जारी करना।'
      },
      tips: {
        en: 'Registered artists are eligible for the Mukhyamantri Lok Kalakar Protsahan Yojana.',
        hi: 'पंजीकृत कलाकार मुख्यमंत्री लोक कलाकार प्रोत्साहन योजना के लिए पात्र हैं।'
      }
    }
  },
  {
    id: 'library-membership-form',
    category: 'Education Forms',
    categoryHi: 'शिक्षा फॉर्म',
    serviceName: 'Library',
    serviceNameHi: 'पुस्तकालय',
    formName: 'State Library Membership Form',
    formNameHi: 'राज्य पुस्तकालय सदस्यता फॉर्म',
    description: 'Application for obtaining membership of government-run public libraries.',
    descriptionHi: 'सरकारी सार्वजनिक पुस्तकालयों की सदस्यता प्राप्त करने के लिए आवेदन।',
    icon: BookOpen,
    guidelines: ['Identity proof', 'Address proof', 'Membership fee'],
    guidelinesHi: ['पहचान प्रमाण', 'पता प्रमाण', 'सदस्यता शुल्क'],
    searchQuery: 'Rajasthan state public library membership application form pdf',
    guide: {
      purpose: {
        en: 'To allow citizens to borrow books and access reading room facilities in public libraries.',
        hi: 'नागरिकों को सार्वजनिक पुस्तकालयों में किताबें उधार लेने और वाचनालय सुविधाओं का उपयोग करने की अनुमति देना।'
      },
      eligibility: {
        en: 'Any resident of the city/district where the library is located.',
        hi: 'उस शहर/जिले का कोई भी निवासी जहाँ पुस्तकालय स्थित है।'
      },
      documents: {
        en: ['Aadhaar Card', 'Address Proof', 'Two Passport size Photographs', 'Student ID (for student concession)'],
        hi: ['आधार कार्ड', 'पता प्रमाण', 'दो पासपोर्ट साइज फोटो', 'छात्र आईडी (छात्र छूट के लिए)']
      },
      process: {
        en: '1. Visit the library and collect the membership form. 2. Fill the form and get it attested if required. 3. Pay the security deposit and annual fee. 4. Receive the Library Membership Card.',
        hi: '1. पुस्तकालय जाएं और सदस्यता फॉर्म प्राप्त करें। 2. फॉर्म भरें और यदि आवश्यक हो तो इसे सत्यापित करवाएं। 3. सुरक्षा जमा और वार्षिक शुल्क का भुगतान करें। 4. पुस्तकालय सदस्यता कार्ड प्राप्त करें।'
      },
      tips: {
        en: 'Check for digital library access options if available at your branch.',
        hi: 'यदि आपकी शाखा में उपलब्ध हो तो डिजिटल लाइब्रेरी एक्सेस विकल्पों की जांच करें।'
      }
    }
  },
  {
    id: 'museum-photography-permission-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'Culture',
    serviceNameHi: 'संस्कृति',
    formName: 'Museum Entry/Photography Permission',
    formNameHi: 'संग्रहालय प्रवेश/फोटोग्राफी अनुमति',
    description: 'Permission for professional photography or videography inside state museums.',
    descriptionHi: 'राज्य के संग्रहालयों के भीतर पेशेवर फोटोग्राफी या वीडियोग्राफी के लिए अनुमति।',
    icon: Camera,
    guidelines: ['Purpose of shoot', 'Equipment list', 'Fee payment'],
    guidelinesHi: ['शूट का उद्देश्य', 'उपकरण सूची', 'शुल्क भुगतान'],
    searchQuery: 'Rajasthan state museum photography permission form pdf',
    guide: {
      purpose: {
        en: 'To regulate the use of cameras and ensure that historical artifacts are not damaged.',
        hi: 'कैमरों के उपयोग को विनियमित करना और यह सुनिश्चित करना कि ऐतिहासिक कलाकृतियों को नुकसान न पहुंचे।'
      },
      eligibility: {
        en: 'Individuals or organizations seeking professional photography/videography.',
        hi: 'पेशेवर फोटोग्राफी/वीडियोग्राफी चाहने वाले व्यक्ति या संगठन।'
      },
      documents: {
        en: ['Application Letter', 'Identity Proof', 'List of Equipment', 'Company/Project Profile'],
        hi: ['आवेदन पत्र', 'पहचान प्रमाण', 'उपकरणों की सूची', 'कंपनी/परियोजना प्रोफाइल']
      },
      process: {
        en: '1. Apply to the Curator of the museum or the Archaeology Department. 2. Specify the date and time of the shoot. 3. Pay the prescribed photography/videography fee. 4. Receive the written permission/permit.',
        hi: '1. संग्रहालय के क्यूरेटर या पुरातत्व विभाग को आवेदन करें। 2. शूट की तारीख और समय निर्दिष्ट करें। 3. निर्धारित फोटोग्राफी/वीडियोग्राफी शुल्क का भुगतान करें। 4. लिखित अनुमति/परमिट प्राप्त करें।'
      },
      tips: {
        en: 'Flash photography is usually prohibited for sensitive artifacts.',
        hi: 'संवेदनशील कलाकृतियों के लिए फ्लैश फोटोग्राफी आमतौर पर प्रतिबंधित है।'
      }
    }
  },
  {
    id: 'rti-application-form-general',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'RTI',
    serviceNameHi: 'आरटीआई',
    formName: 'Right to Information (RTI) Application',
    formNameHi: 'सूचना का अधिकार (आरटीआई) आवेदन',
    description: 'Application to seek information from any public authority under the RTI Act 2005.',
    descriptionHi: 'आरटीआई अधिनियम 2005 के तहत किसी भी सार्वजनिक प्राधिकरण से सूचना प्राप्त करने के लिए आवेदन।',
    icon: FileText,
    guidelines: ['Specific questions', 'Application fee (₹10)', 'Identity proof'],
    guidelinesHi: ['विशिष्ट प्रश्न', 'आवेदन शुल्क (₹10)', 'पहचान प्रमाण'],
    searchQuery: 'RTI application form format Rajasthan pdf download',
    guide: {
      purpose: {
        en: 'To promote transparency and accountability in the working of every public authority.',
        hi: 'प्रत्येक सार्वजनिक प्राधिकरण के कामकाज में पारदर्शिता और जवाबदेही को बढ़ावा देना।'
      },
      eligibility: {
        en: 'Any citizen of India.',
        hi: 'भारत का कोई भी नागरिक।'
      },
      documents: {
        en: ['Application on plain paper or prescribed format', 'IPO (Indian Postal Order) or Court Fee Stamp of ₹10', 'BPL Certificate (for fee exemption)'],
        hi: ['सादे कागज या निर्धारित प्रारूप पर आवेदन', '₹10 का आईपीओ (भारतीय डाक आदेश) या कोर्ट फीस स्टैम्प', 'बीपीएल प्रमाण पत्र (शुल्क छूट के लिए)']
      },
      process: {
        en: '1. Address the application to the Public Information Officer (PIO) of the relevant department. 2. State the information required clearly. 3. Attach the fee (₹10). 4. Send by registered post or submit in person. 5. Receive information within 30 days.',
        hi: '1. संबंधित विभाग के लोक सूचना अधिकारी (PIO) को आवेदन संबोधित करें। 2. आवश्यक सूचना स्पष्ट रूप से लिखें। 3. शुल्क (₹10) संलग्न करें। 4. पंजीकृत डाक से भेजें या व्यक्तिगत रूप से जमा करें। 5. 30 दिनों के भीतर सूचना प्राप्त करें।'
      },
      tips: {
        en: 'Be specific and concise in your questions to get accurate information.',
        hi: 'सटीक जानकारी प्राप्त करने के लिए अपने प्रश्नों में विशिष्ट और संक्षिप्त रहें।'
      }
    }
  },
  {
    id: 'rti-first-appeal-form',
    category: 'Legal Forms',
    categoryHi: 'कानूनी फॉर्म',
    serviceName: 'RTI',
    serviceNameHi: 'आरटीआई',
    formName: 'First Appeal under RTI',
    formNameHi: 'आरटीआई के तहत प्रथम अपील',
    description: 'Appeal filed when the PIO fails to provide information or provides unsatisfactory information.',
    descriptionHi: 'अपील तब दायर की जाती है जब पीआईओ सूचना प्रदान करने में विफल रहता है या असंतोषजनक सूचना प्रदान करता है।',
    icon: ArrowUpCircle,
    guidelines: ['File within 30 days', 'Reference of original RTI', 'No fee'],
    guidelinesHi: ['30 दिनों के भीतर फाइल करें', 'मूल आरटीआई का संदर्भ', 'कोई शुल्क नहीं'],
    searchQuery: 'RTI first appeal form format Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To seek a review of the PIO\'s decision by a senior officer.',
        hi: 'एक वरिष्ठ अधिकारी द्वारा पीआईओ के निर्णय की समीक्षा करना।'
      },
      eligibility: {
        en: 'Any person who has filed an RTI and is not satisfied with the response or did not receive a response.',
        hi: 'कोई भी व्यक्ति जिसने आरटीआई दायर की है और प्रतिक्रिया से संतुष्ट नहीं है या प्रतिक्रिया प्राप्त नहीं हुई है।'
      },
      documents: {
        en: ['Copy of the original RTI application', 'Copy of the PIO\'s response (if any)', 'Grounds for appeal'],
        hi: ['मूल आरटीआई आवेदन की प्रति', 'पीआईओ की प्रतिक्रिया की प्रति (यदि कोई हो)', 'अपील के आधार']
      },
      process: {
        en: '1. Address the appeal to the First Appellate Authority (FAA) of the department. 2. Mention the RTI reference number and date. 3. Explain why the response was unsatisfactory. 4. Submit within 30 days of the PIO\'s response.',
        hi: '1. विभाग के प्रथम अपीलीय अधिकारी (FAA) को अपील संबोधित करें। 2. आरटीआई संदर्भ संख्या और तारीख का उल्लेख करें। 3. बताएं कि प्रतिक्रिया असंतोषजनक क्यों थी। 4. पीआईओ की प्रतिक्रिया के 30 दिनों के भीतर जमा करें।'
      },
      tips: {
        en: 'The First Appellate Authority must decide on the appeal within 30 to 45 days.',
        hi: 'प्रथम अपीलीय अधिकारी को 30 से 45 दिनों के भीतर अपील पर निर्णय लेना चाहिए।'
      }
    }
  },
  {
    id: 'senior-citizen-card-form',
    category: 'Welfare Schemes',
    categoryHi: 'कल्याणकारी योजनाएं',
    serviceName: 'Identity Card',
    serviceNameHi: 'पहचान पत्र',
    formName: 'Senior Citizen Identity Card',
    formNameHi: 'वरिष्ठ नागरिक पहचान पत्र',
    description: 'Identity card for citizens aged 60 and above to avail various government benefits and concessions.',
    descriptionHi: '60 वर्ष और उससे अधिक आयु के नागरिकों के लिए विभिन्न सरकारी लाभों और रियायतों का लाभ उठाने के लिए पहचान पत्र।',
    icon: UserCheck,
    guidelines: ['Age 60+ years', 'Address proof', 'Blood group'],
    guidelinesHi: ['आयु 60+ वर्ष', 'पता प्रमाण', 'रक्त समूह'],
    searchQuery: 'Senior citizen identity card application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To provide a valid proof of age for senior citizens to claim travel concessions, healthcare benefits, and priority services.',
        hi: 'वरिष्ठ नागरिकों के लिए यात्रा रियायतें, स्वास्थ्य लाभ और प्राथमिकता सेवाओं का दावा करने के लिए आयु का एक वैध प्रमाण प्रदान करना।'
      },
      eligibility: {
        en: 'Any resident of Rajasthan aged 60 years or above.',
        hi: 'राजस्थान का कोई भी निवासी जिसकी आयु 60 वर्ष या उससे अधिक हो।'
      },
      documents: {
        en: ['Age Proof (Aadhaar/Voter ID/Birth Certificate)', 'Address Proof', 'Blood Group Report', 'Two Passport size Photographs'],
        hi: ['आयु प्रमाण (आधार/वोटर आईडी/जन्म प्रमाण पत्र)', 'पता प्रमाण', 'रक्त समूह रिपोर्ट', 'दो पासपोर्ट साइज फोटो']
      },
      process: {
        en: '1. Apply online on the SJMS portal or at the District Social Justice office. 2. Fill the personal and health details. 3. Upload documents and photos. 4. Verification by the department. 5. Receive the Senior Citizen Card.',
        hi: '1. SJMS पोर्टल पर या जिला समाज न्याय कार्यालय में ऑनलाइन आवेदन करें। 2. व्यक्तिगत और स्वास्थ्य विवरण भरें। 3. दस्तावेज और फोटो अपलोड करें। 4. विभाग द्वारा सत्यापन। 5. वरिष्ठ नागरिक कार्ड प्राप्त करें।'
      },
      tips: {
        en: 'The card is useful for getting discounts in Rajasthan Roadways buses and priority in government hospitals.',
        hi: 'यह कार्ड राजस्थान रोडवेज की बसों में छूट और सरकारी अस्पतालों में प्राथमिकता प्राप्त करने के लिए उपयोगी है।'
      }
    }
  },
  {
    id: 'transgender-id-card-form',
    category: 'Welfare Schemes',
    categoryHi: 'कल्याणकारी योजनाएं',
    serviceName: 'Identity Card',
    serviceNameHi: 'पहचान पत्र',
    formName: 'Transgender Identity Card',
    formNameHi: 'ट्रांसजेंडर पहचान पत्र',
    description: 'Official identity card and certificate for transgender persons under the Transgender Persons Act.',
    descriptionHi: 'ट्रांसजेंडर व्यक्ति अधिनियम के तहत ट्रांसजेंडर व्यक्तियों के लिए आधिकारिक पहचान पत्र और प्रमाण पत्र।',
    icon: User,
    guidelines: ['Self-identification', 'Online application', 'No medical exam'],
    guidelinesHi: ['स्व-पहचान', 'ऑनलाइन आवेदन', 'कोई चिकित्सा परीक्षा नहीं'],
    searchQuery: 'Transgender identity card application form national portal pdf',
    guide: {
      purpose: {
        en: 'To provide legal recognition to transgender persons and enable them to access welfare schemes.',
        hi: 'ट्रांसजेंडर व्यक्तियों को कानूनी मान्यता प्रदान करना और उन्हें कल्याणकारी योजनाओं तक पहुँचने में सक्षम बनाना।'
      },
      eligibility: {
        en: 'Any transgender person residing in Rajasthan.',
        hi: 'राजस्थान में रहने वाला कोई भी ट्रांसजेंडर व्यक्ति।'
      },
      documents: {
        en: ['Aadhaar Card', 'Photograph', 'Self-Declaration of gender identity'],
        hi: ['आधार कार्ड', 'फोटो', 'लिंग पहचान की स्व-घोषणा']
      },
      process: {
        en: '1. Apply online on the National Portal for Transgender Persons. 2. Fill the application and upload the self-declaration. 3. Application is processed by the District Magistrate. 4. Identity Card and Certificate are issued digitally.',
        hi: '1. ट्रांसजेंडर व्यक्तियों के लिए राष्ट्रीय पोर्टल पर ऑनलाइन आवेदन करें। 2. आवेदन भरें और स्व-घोषणा अपलोड करें। 3. जिला मजिस्ट्रेट द्वारा आवेदन प्रोसेस किया जाता है। 4. पहचान पत्र और प्रमाण पत्र डिजिटल रूप से जारी किए जाते हैं।'
      },
      tips: {
        en: 'No physical examination is required for the issuance of the identity card.',
        hi: 'पहचान पत्र जारी करने के लिए किसी शारीरिक परीक्षा की आवश्यकता नहीं है।'
      }
    }
  },
  {
    id: 'ex-servicemen-id-card-form',
    category: 'Welfare Schemes',
    categoryHi: 'कल्याणकारी योजनाएं',
    serviceName: 'Identity Card',
    serviceNameHi: 'पहचान पत्र',
    formName: 'Ex-Servicemen Identity Card',
    formNameHi: 'पूर्व सैनिक पहचान पत्र',
    description: 'Identity card for retired personnel of the Armed Forces to avail various welfare benefits.',
    descriptionHi: 'विभिन्न कल्याणकारी लाभों का लाभ उठाने के लिए सशस्त्र बलों के सेवानिवृत्त कर्मियों के लिए पहचान पत्र।',
    icon: Shield,
    guidelines: ['Discharge book', 'PPO copy', 'Zila Sainik Board'],
    guidelinesHi: ['डिस्चार्ज बुक', 'पीपीओ कॉपी', 'जिला सैनिक बोर्ड'],
    searchQuery: 'Ex-servicemen identity card application form Rajasthan Zila Sainik Board pdf',
    guide: {
      purpose: {
        en: 'To identify retired defense personnel for providing medical, financial, and employment benefits.',
        hi: 'चिकित्सा, वित्तीय और रोजगार लाभ प्रदान करने के लिए सेवानिवृत्त रक्षा कर्मियों की पहचान करना।'
      },
      eligibility: {
        en: 'Retired personnel of the Indian Army, Navy, or Air Force.',
        hi: 'भारतीय सेना, नौसेना या वायु सेना के सेवानिवृत्त कर्मी।'
      },
      documents: {
        en: ['Discharge Book/Certificate', 'Pension Payment Order (PPO)', 'Identity Proof', 'Address Proof', 'Passport size Photographs in uniform (if applicable)'],
        hi: ['डिस्चार्ज बुक/प्रमाण पत्र', 'पेंशन भुगतान आदेश (PPO)', 'पहचान प्रमाण', 'पता प्रमाण', 'यूनिफॉर्म में पासपोर्ट साइज फोटो (यदि लागू हो)']
      },
      process: {
        en: '1. Visit the Zila Sainik Board (ZSB) office in your district. 2. Fill the registration form and submit documents. 3. Verification of service records. 4. Issuance of the Ex-Servicemen Identity Card.',
        hi: '1. अपने जिले के जिला सैनिक बोर्ड (ZSB) कार्यालय में जाएँ। 2. पंजीकरण फॉर्म भरें और दस्तावेज जमा करें। 3. सेवा रिकॉर्ड का सत्यापन। 4. पूर्व सैनिक पहचान पत्र जारी करना।'
      },
      tips: {
        en: 'The card is essential for accessing CSD canteen facilities and ECHS medical services.',
        hi: 'सीएसडी कैंटीन सुविधाओं और ईसीएचएस चिकित्सा सेवाओं तक पहुँचने के लिए यह कार्ड आवश्यक है।'
      }
    }
  },
  {
    id: 'war-widow-benefits-form',
    category: 'Welfare Schemes',
    categoryHi: 'कल्याणकारी योजनाएं',
    serviceName: 'Pension',
    serviceNameHi: 'पेंशन',
    formName: 'War Widow Benefits/Pension Application',
    formNameHi: 'युद्ध विधवा लाभ/पेंशन आवेदन',
    description: 'Special pension and welfare benefits for widows of personnel killed in action.',
    descriptionHi: 'कार्रवाई में मारे गए कर्मियों की विधवाओं के लिए विशेष पेंशन और कल्याणकारी लाभ।',
    icon: Heart,
    guidelines: ['Death certificate (In-action)', 'Service records', 'No remarriage'],
    guidelinesHi: ['मृत्यु प्रमाण पत्र (कार्रवाई में)', 'सेवा रिकॉर्ड', 'पुनर्विवाह नहीं'],
    searchQuery: 'War widow pension and benefits application form Rajasthan pdf',
    guide: {
      purpose: {
        en: 'To provide financial security and support to the families of martyrs.',
        hi: 'शहीदों के परिवारों को वित्तीय सुरक्षा और सहायता प्रदान करना।'
      },
      eligibility: {
        en: 'Widows of Armed Forces personnel who died in war or war-like operations.',
        hi: 'सशस्त्र बलों के कर्मियों की विधवाएं जिनकी मृत्यु युद्ध या युद्ध जैसी कार्रवाइयों में हुई हो।'
      },
      documents: {
        en: ['Death Certificate from Defense authorities', 'Service Records of the deceased', 'Identity Proof of the widow', 'Bank Account details', 'Non-remarriage certificate'],
        hi: ['रक्षा अधिकारियों से मृत्यु प्रमाण पत्र', 'मृतक के सेवा रिकॉर्ड', 'विधवा का पहचान प्रमाण', 'बैंक खाता विवरण', 'पुनर्विवाह न करने का प्रमाण पत्र']
      },
      process: {
        en: '1. Apply through the Zila Sainik Board. 2. Submit the claim for family pension and other state-specific benefits. 3. Verification by the defense and state authorities. 4. Sanction of pension and other grants.',
        hi: '1. जिला सैनिक बोर्ड के माध्यम से आवेदन करें। 2. पारिवारिक पेंशन और अन्य राज्य-विशिष्ट लाभों के लिए दावा प्रस्तुत करें। 3. रक्षा और राज्य अधिकारियों द्वारा सत्यापन। 4. पेंशन और अन्य अनुदानों की स्वीकृति।'
      },
      tips: {
        en: 'War widows are also eligible for priority in land allotment and employment for their children in Rajasthan.',
        hi: 'युद्ध विधवाएं राजस्थान में अपने बच्चों के लिए भूमि आवंटन और रोजगार में प्राथमिकता के लिए भी पात्र हैं।'
      }
    }
  },
  {
    id: 'freedom-fighter-pension-form',
    category: 'Welfare Schemes',
    categoryHi: 'कल्याणकारी योजनाएं',
    serviceName: 'Pension',
    serviceNameHi: 'पेंशन',
    formName: 'Freedom Fighter Pension Application',
    formNameHi: 'स्वतंत्रता सेनानी पेंशन आवेदन',
    description: 'Pension and medical benefits for recognized freedom fighters and their dependents.',
    descriptionHi: 'मान्यता प्राप्त स्वतंत्रता सेनानियों और उनके आश्रितों के लिए पेंशन और चिकित्सा लाभ।',
    icon: Star,
    guidelines: ['Recognition certificate', 'Identity proof', 'Domicile'],
    guidelinesHi: ['मान्यता प्रमाण पत्र', 'पहचान प्रमाण', 'मूल निवास'],
    searchQuery: 'Rajasthan freedom fighter pension application form pdf',
    guide: {
      purpose: {
        en: 'To honor and support those who participated in the Indian independence movement.',
        hi: 'भारतीय स्वतंत्रता आंदोलन में भाग लेने वालों को सम्मानित करना और उनका समर्थन करना।'
      },
      eligibility: {
        en: 'Recognized freedom fighters or their eligible dependents (widows/unmarried daughters).',
        hi: 'मान्यता प्राप्त स्वतंत्रता सेनानी या उनके पात्र आश्रित (विधवाएं/अविवाहित बेटियां)।'
      },
      documents: {
        en: ['Freedom Fighter Recognition Certificate', 'Identity Proof', 'Address Proof', 'Bank Account details', 'Affidavit of dependency (for dependents)'],
        hi: ['स्वतंत्रता सेनानी मान्यता प्रमाण पत्र', 'पहचान प्रमाण', 'पता प्रमाण', 'बैंक खाता विवरण', 'आश्रित होने का हलफनामा (आश्रितों के लिए)']
      },
      process: {
        en: '1. Apply to the District Collector or the General Administration Department. 2. Submit the recognition proofs and identity documents. 3. Verification of records. 4. Sanction of pension by the state government.',
        hi: '1. जिला कलेक्टर या सामान्य प्रशासन विभाग को आवेदन करें। 2. मान्यता प्रमाण और पहचान दस्तावेज जमा करें। 3. रिकॉर्ड का सत्यापन। 4. राज्य सरकार द्वारा पेंशन की स्वीकृति।'
      },
      tips: {
        en: 'Freedom fighters also receive free travel in state roadways buses and medical facilities.',
        hi: 'स्वतंत्रता सेनानियों को राज्य रोडवेज की बसों में मुफ्त यात्रा और चिकित्सा सुविधाएं भी मिलती हैं।'
      }
    }
  },
  {
    id: 'pilgrimage-scheme-devasthan-form',
    category: 'Welfare Schemes',
    categoryHi: 'कल्याणकारी योजनाएं',
    serviceName: 'Pilgrimage',
    serviceNameHi: 'तीर्थयात्रा',
    formName: 'Senior Citizen Pilgrimage Scheme (Devasthan)',
    formNameHi: 'वरिष्ठ नागरिक तीर्थयात्रा योजना (देवस्थान)',
    description: 'Free pilgrimage to various religious sites for senior citizens of Rajasthan.',
    descriptionHi: 'राजस्थान के वरिष्ठ नागरिकों के लिए विभिन्न धार्मिक स्थलों की मुफ्त तीर्थयात्रा।',
    icon: Map,
    guidelines: ['Age 60+ years', 'Income limit', 'Medical fitness'],
    guidelinesHi: ['आयु 60+ वर्ष', 'आय सीमा', 'मेडिकल फिटनेस'],
    searchQuery: 'Rajasthan senior citizen pilgrimage scheme application form online pdf',
    guide: {
      purpose: {
        en: 'To provide an opportunity for senior citizens to visit major religious sites across India for free.',
        hi: 'वरिष्ठ नागरिकों को पूरे भारत में प्रमुख धार्मिक स्थलों की मुफ्त यात्रा करने का अवसर प्रदान करना।'
      },
      eligibility: {
        en: 'Residents of Rajasthan aged 60 years or above (65+ for air travel) who are not income tax payers.',
        hi: 'राजस्थान के निवासी जिनकी आयु 60 वर्ष या उससे अधिक (हवाई यात्रा के लिए 65+) है और जो आयकर दाता नहीं हैं।'
      },
      documents: {
        en: ['Jan Aadhaar Card', 'Aadhaar Card', 'Medical Fitness Certificate', 'Passport size Photograph', 'Identity Proof of the companion (if applicable)'],
        hi: ['जन आधार कार्ड', 'आधार कार्ड', 'मेडिकल फिटनेस सर्टिफिकेट', 'पासपोर्ट साइज फोटो', 'साथी का पहचान प्रमाण (यदि लागू हो)']
      },
      process: {
        en: '1. Apply online on the Devasthan Department portal during the application window. 2. Select the preferred pilgrimage site and mode of travel (Train/Air). 3. Selection is done through a computerized lottery (draw of lots). 4. Selected pilgrims are notified and provided with travel details.',
        hi: '1. आवेदन विंडो के दौरान देवस्थान विभाग के पोर्टल पर ऑनलाइन आवेदन करें। 2. पसंदीदा तीर्थ स्थल और यात्रा के साधन (ट्रेन/हवाई) का चयन करें। 3. चयन कम्प्यूटरीकृत लॉटरी (ड्रॉ) के माध्यम से किया जाता है। 4. चयनित तीर्थयात्रियों को सूचित किया जाता है और यात्रा विवरण प्रदान किया जाता है।'
      },
      tips: {
        en: 'Senior citizens above 70 years can take one companion with them for assistance.',
        hi: '70 वर्ष से अधिक आयु के वरिष्ठ नागरिक सहायता के लिए अपने साथ एक साथी ले जा सकते हैं।'
      }
    }
  }
];
