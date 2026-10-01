import { Language } from './translations-data'

export interface MapMarker {
  lat: number
  lng: number
  title: string
  description?: string
}

export interface YatraData {
  id: string
  slug: string
  titleKey: string
  descKey: string
  location: string
  duration: string
  distance: string
  bestTime: string
  difficulty: string
  heroImage: string
  centerCoordinates: { lat: number; lng: number }
  zoom: number
  routeCoordinates: { lat: number; lng: number }[]
  markers: MapMarker[]
  highlights: Record<Language, string[]>
}

export const yatras: Record<string, YatraData> = {
  '84-kos': {
    id: '84-kos',
    slug: '84-kos',
    titleKey: '84kosYatraTitle',
    descKey: '84kosYatraDesc',
    location: 'Mathura & Vrindavan, Uttar Pradesh',
    duration: '7 - 14 Days',
    distance: '252 km (84 Kos)',
    bestTime: 'October - November (Kartik)',
    difficulty: 'Moderate',
    heroImage: '/images/vrindavan-84kos.jpg',
    centerCoordinates: { lat: 27.55, lng: 77.55 },
    zoom: 10,
    routeCoordinates: [
      { lat: 27.583, lng: 77.6964 }, // Vrindavan
      { lat: 27.4922, lng: 77.6737 }, // Mathura
      { lat: 27.5117, lng: 77.6587 }, // Radha Kund
      { lat: 27.4924, lng: 77.5027 }, // Govardhan
      { lat: 27.6447, lng: 77.376 },  // Barsana
      { lat: 27.6577, lng: 77.4875 }, // Nandgaon
      { lat: 27.583, lng: 77.6964 }  // Back to Vrindavan
    ],
    markers: [
      { lat: 27.583, lng: 77.6964, title: 'Vrindavan Dham', description: 'Sacred town of Krishna pastimes, Banke Bihari & Radha Vallabh' },
      { lat: 27.4922, lng: 77.6737, title: 'Mathura (Krishna Janmabhoomi)', description: 'Birthplace of Lord Krishna and sacred Vishram Ghat' },
      { lat: 27.5117, lng: 77.6587, title: 'Radha Kund & Shyam Kund', description: 'Most sacred water bodies of Braj Parikrama' },
      { lat: 27.4924, lng: 77.5027, title: 'Govardhan Hill (Giriraj Ji)', description: 'Lifted by Lord Krishna; sacred 21 km Govardhan Parikrama' },
      { lat: 27.6447, lng: 77.376, title: 'Barsana (Radharani Dham)', description: 'Palace and eternal home of Shri Radharani' },
      { lat: 27.6577, lng: 77.4875, title: 'Nandgaon', description: 'Residence of Nanda Baba, Yashoda Maiya, and child Krishna' }
    ],
    highlights: {
  "en": [
    "Visit 12 sacred forests (Van) of Vrindavan",
    "Darshan at sacred Govardhan Hill & Parikrama",
    "Holy dip in sacred Yamuna River at Vishram Ghat",
    "Visit Radha Kund and Shyam Kund",
    "Experience Nandgaon and Barsana (Radharani Dham)",
    "Explore ancient historical temples of Mathura"
  ],
  "hi": [
    "वृंदावन के 12 पवित्र वनों के दर्शन",
    "पवित्र गोवर्धन पर्वत दर्शन एवं परिक्रमा",
    "विश्राम घाट पर पावन यमुना नदी में स्नान",
    "राधा कुंड और श्याम कुंड के दर्शन",
    "नंदगांव और बरसाना (राधारानी धाम) का अनुभव",
    "मथुरा के प्राचीन ऐतिहासिक मंदिरों के दर्शन"
  ],
  "kn": [
    "ವೃಂದಾವನದ 12 ಪವಿತ್ರ ವನಗಳ ದರ್ಶನ",
    "ಗೋವರ್ಧನ ಬೆಟ್ಟದ ದರ್ಶನ ಮತ್ತು ಪರಿಕ್ರಮ",
    "ಪವಿತ್ರ ಯಮುನಾ ನದಿಯಲ್ಲಿ ಸ್ನಾನ",
    "ರಾಧಾ ಕುಂಡ ಮತ್ತು ಶ್ಯಾಮ ಕುಂಡದ ದರ್ಶನ",
    "ನಂದಗಾಂವ್ ಮತ್ತು ಬರ್ಸಾನಾ ಅನುಭವ",
    "ಮಥುರಾದ ಪ್ರಾಚೀನ ದೇವಾಲಯಗಳ ದರ್ಶನ"
  ],
  "ml": [
    "വൃന്ദാവനിലെ 12 പവിത്ര വനങ്ങളുടെ ദർശനം",
    "ഗോവർദ്ധൻ കുന്നിന്റെ ദർശനവും പരിക്രമയും",
    "പവിത്ര യമുനാ നദിയിൽ സ്നാനം",
    "രാധാ കുണ്ഡ്, ശ്യാമ കുണ്ഡ് ദർശനം",
    "നന്ദ്ഗാവും ബർസാനയും അനുഭവിക്കുക",
    "മഥുരയിലെ പുരാതന ക്ഷേത്രങ്ങളുടെ ദർശനം"
  ],
  "ta": [
    "விருந்தாவனின் 12 புனித வனங்களின் தரிசனம்",
    "கோவர்த்தன் மலையின் தரிசனம் மற்றும் பரிக்ரமா",
    "புனித யமுனை நதியில் நீராடுதல்",
    "ராதா குண்ட் மற்றும் சியாம் குண்ட் தரிசனம்",
    "நந்த்காவ் மற்றும் பர்சானா அனுபவம்",
    "மதுராவின் பண்டைய கோயில்களின் தரிசனம்"
  ],
  "te": [
    "బృందావనం యొక్క 12 పవిత్ర వనాల దర్శనం",
    "గోవర్ధన పర్వత దర్శనం మరియు పరిక్రమ",
    "యమునా నదిలో పవిత్ర స్నానం",
    "రాధా కుండ్ మరియు శ్యామ్ కుండ్ దర్శనం",
    "నందగావ్ మరియు బర్సానా అనుభవం",
    "మథుర పురాతన ఆలయాల దర్శనం"
  ],
  "mr": [
    "वृंदावनातील १२ पवित्र वनांचे दर्शन",
    "गोवर्धन पर्वत दर्शन आणि परिक्रमा",
    "पवित्र यमुना नदीमध्ये स्नान",
    "राधा कुंड आणि श्याम कुंड दर्शन",
    "नंदगाव आणि बरसाना अनुभव",
    "मथुरेच्या प्राचीन मंदिरांचे दर्शन"
  ],
  "as": [
    "বৃন্দাবনৰ ১২ খন পবিত্ৰ বন দৰ্শন",
    "গোবৰ্ধন পৰ্বত দৰ্শন আৰু পৰিক্ৰমা",
    "যমুনা নদীত পবিত্ৰ স্নান",
    "ৰাধা কুণ্ড আৰু শ্যাম কুণ্ড দৰ্শন",
    "নন্দগাঁও আৰু বৰসানাৰ আধ্যাত্মিক অভিজ্ঞতা",
    "মথুৰাৰ প্ৰাচীন মন্দিৰসমূহ দৰ্শন"
  ],
  "pa": [
    "ਵ੍ਰਿੰਦਾਵਨ ਦੇ 12 ਪਵਿੱਤਰ ਜੰਗਲਾਂ ਦੇ ਦਰਸ਼ਨ",
    "ਗੋਵਰਧਨ ਪਰਬਤ ਦਰਸ਼ਨ ਅਤੇ ਪਰਿਕਰਮਾ",
    "ਪਵਿੱਤਰ ਜਮੁਨਾ ਨਦੀ ਵਿੱਚ ਇਸ਼ਨਾਨ",
    "ਰਾਧਾ ਕੁੰਡ ਅਤੇ ਸ਼ਿਆਮ ਕੁੰਡ ਦੇ ਦਰਸ਼ਨ",
    "ਨੰਦਗਾਂਵ ਅਤੇ ਬਰਸਾਨਾ ਦਾ ਅਨੁਭਵ",
    "ਮਥੁਰਾ ਦੇ ਪੁਰਾਤਨ ਮੰਦਰਾਂ ਦੇ ਦਰਸ਼ਨ"
  ],
  "or": [
    "ବୃନ୍ଦାବନର ୧୨ ପବିତ୍ର ବନ ଦର୍ଶନ",
    "ଗୋବର୍ଦ୍ଧନ ପର୍ବତ ଦର୍ଶନ ଏବଂ ପରିକ୍ରମା",
    "ପବିତ୍ର ଯମୁନା ନଦୀରେ ସ୍ନାନ",
    "ରାଧା କୁଣ୍ଡ ଏବଂ ଶ୍ୟାମ କୁଣ୍ଡ ଦର୍ଶନ",
    "ନନ୍ଦଗାଁ ଏବଂ ବରସାନାର ଦିବ୍ୟ ଅନୁଭବ",
    "ମଥୁରାର ପ୍ରାଚୀନ ମନ୍ଦିର ଦର୍ଶନ"
  ],
  "gu": [
    "વૃંદાવનના 12 પવિત્ર વનોના દર્શન",
    "ગોવર્ધન પર્વત દર્શન અને પરિક્રમા",
    "પવિત્ર યમુના નદીમાં સ્નાન",
    "રાધા કુંડ અને શ્યામ કુંડના દર્શન",
    "નંદગાંવ અને બરસાનાનો દિવ્ય અનુભવ",
    "મથુરાના પ્રાચીન મંદિરોના દર્શન"
  ],
  "bn": [
    "বৃন্দাবনের ১২টি পবিত্র বন দর্শন",
    "গোবর্ধন পর্বত দর্শন ও পরিক্রমা",
    "যমুনা নদীতে পবিত্র স্নান",
    "রাধা কুণ্ড ও শ্যাম কুণ্ড দর্শন",
    "নন্দগাঁও ও বারসানার আধ্যাত্মিক অভিজ্ঞতা",
    "মথুরার প্রাচীন মন্দিরসমূহ দর্শন"
  ]
}
  },
  'namisharanya': {
    id: 'namisharanya',
    slug: 'namisharanya',
    titleKey: 'namisharanyaYatraTitle',
    descKey: 'namisharanyaYatraDesc',
    location: 'Sitapur & Hardoi, Uttar Pradesh',
    duration: '11 - 15 Days',
    distance: '252 km (84 Kos)',
    bestTime: 'February - March (Phalgun) / Year Round',
    difficulty: 'Moderate',
    heroImage: '/images/naimisharanya-forest.jpg',
    centerCoordinates: { lat: 27.32, lng: 80.44 },
    zoom: 10,
    routeCoordinates: [
      { lat: 27.3820, lng: 80.4420 }, // Day 1: Korona
      { lat: 27.3210, lng: 80.3850 }, // Day 2: Hareya
      { lat: 27.2850, lng: 80.3540 }, // Day 3: Nagva-Kothava
      { lat: 27.2410, lng: 80.3320 }, // Day 4: Singardharpur-Umrari
      { lat: 27.2150, lng: 80.3680 }, // Day 5: Sakshi Gopalpur
      { lat: 27.2540, lng: 80.4210 }, // Day 6: Devgaon (Dronacharya)
      { lat: 27.2910, lng: 80.4560 }, // Day 7: Madova
      { lat: 27.3240, lng: 80.5120 }, // Day 8: Jarigaon
      { lat: 27.3480, lng: 80.4880 }, // Day 9: Naimisharanya
      { lat: 27.3890, lng: 80.5210 }, // Day 10: Kolhava-Barethi
      { lat: 27.4260, lng: 80.5280 }, // Day 11: Mishrikh (Simfukh Tirth)
      { lat: 27.3820, lng: 80.4420 }  // Back to Korona
    ],
    markers: [
      { lat: 27.3820, lng: 80.4420, title: 'Day 1: कोरौना (कोरावल)', description: 'प्रथम पड़ाव - दारिकाधीश मंदिर व श्री गणेश पूजन' },
      { lat: 27.3210, lng: 80.3850, title: 'Day 2: हरैया (जगन्नाथ क्षेत्र)', description: 'द्वितीय पड़ाव - कैलाश आश्रम व गोमती घाट स्नान' },
      { lat: 27.2850, lng: 80.3540, title: 'Day 3: नगवाँ–कोथावाँ', description: 'तृतीय पड़ाव - हत्याहरण तीर्थ व नागराज स्थान' },
      { lat: 27.2410, lng: 80.3320, title: 'Day 4: गिरधरपुर–उमरारी', description: 'चतुर्थ पड़ाव - क्षणमोचन तीर्थ व सुदर्शन नारायण' },
      { lat: 27.2150, lng: 80.3680, title: 'Day 5: साक्षी गोपालपुर', description: 'पंचम पड़ाव - शेषधारा व साधना विश्राम स्थल' },
      { lat: 27.2540, lng: 80.4210, title: 'Day 6: देवगवाँ (द्रोणाचार्य)', description: 'षष्ठ पड़ाव - द्रोणाचार्य पर्वत व गुड़-कटोरा दान' },
      { lat: 27.2910, lng: 80.4560, title: 'Day 7: मड़ोवा पड़ाव', description: 'सप्तम पड़ाव - मांडव मुनि तपोभूमि व लोटा-डोर दान' },
      { lat: 27.3240, lng: 80.5120, title: 'Day 8: जरीगवाँ पड़ाव', description: 'अष्टम पड़ाव - हरिहर व विशकेश्वर तीर्थ दर्शन' },
      { lat: 27.3480, lng: 80.4880, title: 'Day 9: नैमिषारण्य पड़ाव', description: 'नवम पड़ाव - चक्रतीर्थ व ललिता देवी महादर्शन' },
      { lat: 27.3890, lng: 80.5210, title: 'Day 10: कोलहवा–बरेठी', description: 'दशम पड़ाव - शांति साधना व पड़ाव विश्राम' },
      { lat: 27.4260, lng: 80.5280, title: 'Day 11: मिश्रिख तीर्थ', description: 'एकादश समापन दिवस - महर्षि दधीचि कुंड व परिक्रमा पूर्णता' },
      { lat: 27.3458, lng: 80.4892, title: 'चक्रतीर्थ (Chakra Tirth)', description: 'भगवान ब्रह्मा के चक्र द्वारा निर्मित पावन जल कुंड' },
      { lat: 27.3475, lng: 80.4912, title: 'माँ ललिता शक्ति पीठ', description: '108 शक्तिपीठों में से एक प्रमुख पीठ' },
      { lat: 27.3468, lng: 80.4925, title: 'व्यास गद्दी (Vyas Gaddi)', description: 'जहाँ महर्षि वेदव्यास ने 18 पुराणों की रचना की' },
      { lat: 27.3482, lng: 80.4905, title: 'कालीपीठ (Kalipith)', description: '11 फुट दक्षिणमुखी माँ काली व 10 महाविद्या पीठ' }
    ],
    highlights: {
  "en": [
    "Holy dip at sacred Chakra Tirth",
    "Darshan at Naimishiya Maa Lalita Devi Shakti Peeth",
    "Vyas Gaddi where Maharishi Ved Vyasa compiled the 18 Puranas",
    "Ancient Hanuman Garhi with south-facing Veer Hanuman",
    "Complete 11-Day 84 Kos Parikrama circuit across Sitapur & Hardoi",
    "Visit Dakshinmukhi Kalipith, Brahmavart, and Dadhichi Kund"
  ],
  "hi": [
    "पवित्र चक्रतीर्थ में पावन स्नान एवं दर्शन",
    "नैमिषीय माँ ललिता देवी शक्ति पीठ के दर्शन",
    "व्यास गद्दी जहाँ महर्षि वेदव्यास ने 18 पुराणों की रचना की",
    "प्राचीन हनुमान गढ़ी (वीर हनुमान) के दर्शन",
    "सीतापुर एवं हरदोई जनपदों में 11 दिवसीय 84 कोसी परिक्रमा",
    "दक्षिणमुखी कालीपीठ, ब्रह्मावर्त तीर्थ एवं दधीचि कुंड के दर्शन"
  ],
  "kn": [
    "ಪವಿತ್ರ ಚಕ್ರ ತೀರ್ಥದಲ್ಲಿ ಪವಿತ್ರ ಸ್ನಾನ",
    "ಲಲಿತಾ ದೇವಿ ಶಕ್ತಿ ಪೀಠದ ದರ್ಶನ",
    "ವ್ಯಾಸರು 18 ಪುರಾಣಗಳನ್ನು ರಚಿಸಿದ ವ್ಯಾಸ ಗದ್ದಿ",
    "ಪ್ರಾಚೀನ ಹನುಮಾನ್ ಗರ್ಹಿ ದರ್ಶನ",
    "11 ದಿನಗಳ 84 ಕೋಸ್ ಪರಿಕ್ರಮ ಯಾತ್ರೆ",
    "ದಕ್ಷಿಣಮುಖಿ ಕಾಳಿಪೀಠ ಮತ್ತು ಬ್ರಹ್ಮಾವರ್ತ ತೀರ್ಥ"
  ],
  "ml": [
    "പവിത്ര ചക്ര തീർത്ഥത്തിൽ പുണ്യസ്നാനം",
    "ലലിതാ ദേവി ശക്തി പീഠത്തിന്റെ ദർശനം",
    "വേദവ്യാസൻ 18 പുരാണങ്ങൾ രചിച്ച വ്യാസ ഗദ്ദി",
    "പുരാതന ഹനുമാൻ ഗർഹിയുടെ ദർശനം",
    "11 ദിവസത്തെ 84 കോസ് പരിക്രമ യാത്ര",
    "ദക്ഷിണമുഖി കാളീപീഠം, ബ്രഹ്മാവർത്ത തീർത്ഥം"
  ],
  "ta": [
    "புனித சக்ர தீர்த்தத்தில் நீராடுதல்",
    "லலிதா தேவி சக்தி பீடத்தின் தரிசனம்",
    "வியாசர் 18 புராணங்களை இயற்றிய வியாஸ் கத்தி",
    "பண்டைய ஹனுமான் கர்ஹி தரிசனம்",
    "11 நாள் 84 கோஸ் பரிக்ரமா யாத்திரை",
    "தென்முக காளிபீடம் மற்றும் பிரம்மாவர்த்த தீர்த்தம்"
  ],
  "te": [
    "పవిత్ర చక్ర తీర్థంలో పుణ్య స్నానం",
    "లలితా దేవి శక్తి పీఠం దర్శనం",
    "వేదవ్యాసుడు 18 పురాణాలు రచించిన వ్యాస గద్ది",
    "పురాతన హనుమాన్ గర్హి దర్శనం",
    "11 రోజుల 84 కోస్ పరిక్రమ యాత్ర",
    "దక్షిణముఖ కాళీపీఠం మరియు బ్రహ్మావర్త తీర్థం"
  ],
  "mr": [
    "पवित्र चक्रतीर्थात पावन स्नान",
    "ललिता देवी शक्तीपीठाचे दर्शन",
    "व्यास गद्दी - जेथे महर्षी व्यासांनी १८ पुराणांची रचना केली",
    "प्राचीन हनुमान गढी दर्शन",
    "११ दिवसीय ८४ कोस परिक्रमा प्रवास",
    "दक्षिणमुखी कालीपीठ आणि ब्रह्मावर्त तीर्थ"
  ],
  "as": [
    "পবিত্ৰ চক্ৰতীৰ্থত স্নান আৰু দৰ্শন",
    "ললিতা দেৱী শক্তিপীঠ দৰ্শন",
    "ব্যাস গদ্দী - য'ত বেদব্যাসে ১৮ পুৰাণ ৰচনা কৰিছিল",
    "প্ৰাচীন হনুমান গঢ়ী দৰ্শন",
    "১১ দিনীয়া ৮৪ কোছ পৰিক্ৰমা যাত্ৰা",
    "দক্ষিণমুখী কালীপীঠ আৰু ব্ৰহ্মাবৰ্ত তীৰ্থ"
  ],
  "pa": [
    "ਪਵਿੱਤਰ ਚੱਕਰ ਤੀਰਥ ਵਿੱਚ ਇਸ਼ਨਾਨ",
    "ਲਲਿਤਾ ਦੇਵੀ ਸ਼ਕਤੀ ਪੀਠ ਦੇ ਦਰਸ਼ਨ",
    "ਵਿਆਸ ਗੱਦੀ ਜਿੱਥੇ ਵੇਦ ਵਿਆਸ ਨੇ 18 ਪੁਰਾਣ ਰਚੇ",
    "ਪੁਰਾਤਨ ਹਨੂਮਾਨ ਗੜ੍ਹੀ ਦੇ ਦਰਸ਼ਨ",
    "11 ਦਿਨਾਂ ਦੀ 84 ਕੋਸ ਪਰਿਕਰਮਾ ਯਾਤਰਾ",
    "ਦੱਖਣਮੁਖੀ ਕਾਲੀਪੀਠ ਅਤੇ ਬ੍ਰਹਮਾਵਰਤ ਤੀਰਥ"
  ],
  "or": [
    "ପବିତ୍ର ଚକ୍ରତୀର୍ଥରେ ସ୍ନାନ ଓ ଦର୍ଶନ",
    "ଲଳିତା ଦେବୀ ଶକ୍ତିପୀଠ ଦର୍ଶନ",
    "ବ୍ୟାସ ଗଦ୍ଦି ଯେଉଁଠାରେ ୧୮ ପୁରାଣ ରଚନା ହୋଇଥିଲା",
    "ପ୍ରାଚୀନ ହନୁମାନ ଗଢ଼ି ଦର୍ଶନ",
    "୧୧ ଦିନିଆ ୮୪ କୋସ ପରିକ୍ରମା",
    "ଦକ୍ଷିଣମୁଖୀ କାଳୀପୀଠ ଏବଂ ବ୍ରହ୍ମାବର୍ତ୍ତ ତୀର୍ଥ"
  ],
  "gu": [
    "પવિત્ર ચક્રતીર્થમાં પવિત્ર સ્નાન",
    "લલિતા દેવી શક્તિપીઠના દર્શન",
    "વ્યાસ ગદ્દી જ્યાં મહર્ષિ વ્યાસે 18 પુરાણોની રચના કરી",
    "પ્રાચીન હનુમાન ગઢીના દર્શન",
    "11 દિવસીય 84 કોસ પરિક્રમા યાત્રા",
    "દક્ષિણમુખી કાલીપીઠ અને બ્રહ્માવર્ત તીર્થ"
  ],
  "bn": [
    "পবিত্র চক্রতীর্থে পুণ্যস্নান ও দর্শন",
    "ললিতা দেবী শক্তিপীঠের দর্শন",
    "ব্যাস গদ্দি যেখানে বেদব্যাস ১৮টি পুরাণ রচনা করেছিলেন",
    "প্রাচীন হনুমান গঢ়ীর দর্শন",
    "১১ দিনের ৮৪ কোস পরিক্রমা যাত্রা",
    "দক্ষিণমুখী কালীপীঠ ও ব্রহ্মাবর্ত তীর্থ"
  ]
}
  }
}

export function getYatraBySlug(slug: string): YatraData | undefined {
  return yatras[slug]
}
