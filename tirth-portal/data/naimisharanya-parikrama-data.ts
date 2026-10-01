import {
  ParikramaDay,
  SacredSiteDetail,
  DashamahavidyaDetail,
  TrishaktiPower,
  SiteCategory,
} from './pilgrimage-types'

export const parikramaDays: ParikramaDay[] = [
  {
    dayNumber: 1,
    slug: 'korona',
    title: {
      en: 'Day 1: Korouna (Korawal) – The Sacred Inception',
      hi: 'प्रथम दिवस: कोरौना (कोरावल) पड़ाव – पावन शुभारंभ',
    },
    stopName: {
      en: 'Korouna / Korawal',
      hi: 'कोरौना (कोरावल)',
    },
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.382, lng: 80.442 },
    startLocation: 'Chakra Tirth, Naimisharanya',
    overnightLocation: 'Korouna Gram (Dwarika Kshetra)',
    distanceFromPreviousKm: 18,
    traditionalSignificance: {
      en: 'The inaugural stop of the sacred 84 Kos Parikrama. Devotees traditionally bathe at Chakra Tirth at dawn, offer laddoos to Lord Ganesha, and commence the parikrama. The region is traditionally revered as Dwarika Kshetra with an ancient Dwarkadhish temple where pilgrims receive divine blessings for an unobstructed yatra.',
      hi: 'चौरासी कोसी परिक्रमा का प्रथम एवं प्रारंभिक पड़ाव। परिक्रमार्थी प्रतिपदा की प्रातः चक्रतीर्थ में स्नान कर श्री गणेश जी के दर्शन करते हैं तथा लड्डू का भोग अर्पित कर परिक्रमा का शुभारंभ करते हैं। यह क्षेत्र दारिका क्षेत्र के रूप में प्रसिद्ध है, जहाँ भगवान दारिकाधीश का विशाल प्राचीन मंदिर स्थित है।',
    },
    ritualsAndDonations: {
      en: [
        'Holy dawn snan (bath) at Chakra Tirth',
        'Traditional Laddoo Bhog offering to Shri Ganesha',
        'Darshan and blessings at Shri Dwarkadhish Temple',
        'Solemn resolution (Sankalpa) for the 11-day pilgrimage',
      ],
      hi: [
        'चक्रतीर्थ में प्रातःकालीन पावन स्नान एवं आचमन',
        'श्री गणेश जी को पारंपरिक लड्डू भोग का अर्पण',
        'श्री दारिकाधीश मंदिर में दर्शन एवं निर्विघ्न यात्रा हेतु प्रार्थना',
        'एकादश दिवसीय परिक्रमा का विधिवत संकल्प',
      ],
    },
    keySacredSites: ['korona', 'chakra-tirth'],
    nextStopSlug: 'hareya',
    prevStopSlug: null,
  },
  {
    dayNumber: 2,
    slug: 'hareya',
    title: {
      en: 'Day 2: Haraiya – Land of Kailash Ashram & Sages',
      hi: 'द्वितीय दिवस: हरैया पड़ाव (जगन्नाथ क्षेत्र) – योग व साधना भूमि',
    },
    stopName: {
      en: 'Haraiya (Jagannath Kshetra)',
      hi: 'हरैया (जगन्नाथ क्षेत्र)',
    },
    district: 'हरदोई (Hardoi)',
    coordinates: { lat: 27.321, lng: 80.385 },
    startLocation: 'Korouna',
    overnightLocation: 'Haraiya Gram, Hardoi',
    distanceFromPreviousKm: 22,
    traditionalSignificance: {
      en: 'On the second day of Phalguna, the parikrama enters the Hardoi district. Pilgrims cross the Kumneshwar, Mansarovar, and Koteshwar Mahadev shrines, seek blessings at Kailash Ashram from Kailashnath Shankar and Baba Khabish, and pay respects at the samadhi of Swami Purnanand.',
      hi: 'फाल्गुन मास की द्वितीया को परिक्रमार्थी कोरौना से प्रस्थान कर हरैया (हरदोई) में प्रवेश करते हैं। मार्ग में कुमनेश्वर, मानसरोवर, कोटेश्वर महादेव के दर्शन होते हैं। श्री कैलाश आश्रम में भगवान कैलाशनाथ व बाबा खबीश का आशीर्वाद प्राप्त होता है, जहाँ ब्रह्मलीन स्वामी पूर्णानंद जी की समाधि है।',
    },
    ritualsAndDonations: {
      en: [
        'Snan at Gomti Ghat and sacred Amar Kantak',
        'Baba Khabish darshan and traditional blessings',
        'Silent contemplation at Swami Purnanand Samadhi',
        'Camp and satsang in Haraiya village',
      ],
      hi: [
        'गोमती घाट एवं अमर कटक में पावन स्नान',
        'बाबा खबीश जी का पारंपरिक दर्शन एवं आशीर्वाद',
        'स्वामी पूर्णानंद जी की समाधि पर मौन ध्यान व नमन',
        'हरैया ग्राम में रात्रि विश्राम एवं सामूहिक कीर्तन',
      ],
    },
    keySacredSites: ['hareya', 'gomti-river'],
    nextStopSlug: 'nagva-kothava',
    prevStopSlug: 'korona',
  },
  {
    dayNumber: 3,
    slug: 'nagva-kothava',
    title: {
      en: 'Day 3: Nagwan–Kothawan & Hatya Haran Tirth',
      hi: 'तृतीय दिवस: नगवाँ–कोथावाँ पड़ाव एवं हत्याहरण तीर्थ',
    },
    stopName: {
      en: 'Nagwan–Kothawan',
      hi: 'नगवाँ–कोथावाँ',
    },
    district: 'हरदोई (Hardoi)',
    coordinates: { lat: 27.285, lng: 80.354 },
    startLocation: 'Haraiya',
    overnightLocation: 'Nagwan–Kothawan, Hardoi',
    distanceFromPreviousKm: 20,
    traditionalSignificance: {
      en: 'Entering on Phalguna Tritiya, this stop is renowned for the purifying Hatya Haran Tirth and Surya Kund, where tradition recounts that inadvertent sins are washed away. The area is also associated with the Nagvanshi kings and the sacred seat of Padnaga, with annual fairs held in Bhadrapada.',
      hi: 'फाल्गुन तृतीया को परिक्रमा नगवाँ–कोथावाँ पहुँचती है। यहाँ का मुख्य आकर्षण हत्याहरण तीर्थ (सूर्य कुंड) है, जहाँ स्नान से अज्ञानवश किए गए पापों के क्षय की पारंपरिक मान्यता है। यह स्थल नागवंशी राजाओं एवं पद्मनाग की तपोभूमि माना जाता है।',
    },
    ritualsAndDonations: {
      en: [
        'Atonement bath at Hatya Haran Tirth (Surya Kund)',
        'Surya Arghya and prayer at dawn',
        'Darshan at Viraja Tirth and Narmadeshwar Tirth',
        'Remembrance of Nagvanshi ascetic tradition',
      ],
      hi: [
        'हत्याहरण तीर्थ (सूर्य कुंड) में प्रायश्चित स्नान',
        'भगवान सूर्य को प्रात:कालीन अर्घ्य एवं स्तुति',
        'विरजा तीर्थ एवं नर्मदेश्वर तीर्थ के दर्शन',
        'नागवंशीय तप परंपरा का स्मरण',
      ],
    },
    keySacredSites: ['nagva-kothava', 'hatya-haran-tirth'],
    nextStopSlug: 'singardhar-pur',
    prevStopSlug: 'hareya',
  },
  {
    dayNumber: 4,
    slug: 'singardhar-pur',
    title: {
      en: 'Day 4: Giridharpur–Umrari & Shran Mochan Tirth',
      hi: 'चतुर्थ दिवस: गिरधरपुर–उमरारी पड़ाव एवं क्षणमोचन तीर्थ',
    },
    stopName: {
      en: 'Giridharpur–Umrari',
      hi: 'गिरधरपुर–उमरारी',
    },
    district: 'हरदोई (Hardoi)',
    coordinates: { lat: 27.241, lng: 80.332 },
    startLocation: 'Nagwan–Kothawan',
    overnightLocation: 'Giridharpur–Umrari, Hardoi',
    distanceFromPreviousKm: 19,
    traditionalSignificance: {
      en: 'Known as a twin stop because Umrari village adjoins Giridharpur. Between Days 3 and 4, pilgrims visit the renowned Shran Mochan Tirth and the ancient Sudarshan Narayan Temple, offering worship for release from worldly anxieties and spiritual liberation.',
      hi: 'गिरधरपुर से उमरारी ग्राम सटा होने से यह संयुक्त पड़ाव कहलाता है। यहाँ मार्ग में स्थित क्षणमोचन तीर्थ तथा सुदर्शन नारायण मंदिर में श्रद्धालु दर्शन-पूजन करते हैं, जहाँ मानसिक संतापों से मुक्ति की प्रार्थना की जाती है।',
    },
    ritualsAndDonations: {
      en: [
        'Sudarshan Narayan Temple Puja with Tulsi leaves',
        'Shran Mochan Tirth holy water sprinkling',
        'Community bhandara and shared prasad',
      ],
      hi: [
        'सुदर्शन नारायण मंदिर में तुलसी दल अर्पण एवं आरती',
        'क्षणमोचन तीर्थ के पावन जल का मार्जन',
        'सामूहिक भंडारा एवं प्रसाद वितरण',
      ],
    },
    keySacredSites: ['singardhar-pur'],
    nextStopSlug: 'sangi-gopalpur',
    prevStopSlug: 'nagva-kothava',
  },
  {
    dayNumber: 5,
    slug: 'sangi-gopalpur',
    title: {
      en: 'Day 5: Sakshi Gopalpur – The Symbolic Tirtha Sanctuary',
      hi: 'पंचम दिवस: साक्षी गोपालपुर पड़ाव – प्रतीकात्मक तीर्थ संगम',
    },
    stopName: {
      en: 'Sakshi Gopalpur',
      hi: 'साक्षी गोपालपुर',
    },
    district: 'हरदोई (Hardoi)',
    coordinates: { lat: 27.215, lng: 80.368 },
    startLocation: 'Giridharpur–Umrari',
    overnightLocation: 'Sakshi Gopalpur Gram',
    distanceFromPreviousKm: 21,
    traditionalSignificance: {
      en: 'On the fifth day of the waxing moon, pilgrims arrive at Sakshi Gopalpur. Traditional lore holds that sacred pilgrimages like Ganga Sagar, Badrinath, and Sheshdhara are symbolically gathered here, granting pilgrims the merit of distant holy journeys within this single spiritual circuit.',
      hi: 'फाल्गुन शुक्ल पंचमी को परिक्रमार्थी साक्षी गोपालपुर पहुँचते हैं। यहाँ मार्ग में गंगा सागर, बद्रीनाथ, शेषधारा आदि तीर्थों के प्रतीकात्मक दर्शन होते हैं, जो परिक्रमार्थियों को दूरस्थ तीर्थों का पुण्य लाभ प्रदान करते हैं।',
    },
    ritualsAndDonations: {
      en: [
        'Symbolic darshan of Ganga Sagar and Badrinath',
        'Gopal ji worship with curd and butter offerings',
        'Rest and scriptural chanting during the evening',
      ],
      hi: [
        'गंगा सागर एवं बद्रीनाथ के प्रतीकात्मक स्वरूपों का नमन',
        'गोपाल जी की माखन-मिश्री से पूजा-अर्चना',
        'संध्याकालीन विश्राम एवं भागवत कथा श्रवण',
      ],
    },
    symbolicTirthas: ['Ganga Sagar', 'Badrinath', 'Sheshdhara'],
    keySacredSites: ['sangi-gopalpur'],
    nextStopSlug: 'devgaon',
    prevStopSlug: 'singardhar-pur',
  },
  {
    dayNumber: 6,
    slug: 'devgaon',
    title: {
      en: 'Day 6: Devgawan (Dronacharya) & Shringi Rishi Ashram',
      hi: 'षष्ठ दिवस: देवगवाँ (द्रोणाचार्य) पड़ाव – गुड़-कटोरा दान परंपरा',
    },
    stopName: {
      en: 'Devgawan (Dronacharya)',
      hi: 'देवगवाँ (द्रोणाचार्य)',
    },
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.254, lng: 80.421 },
    startLocation: 'Sakshi Gopalpur',
    overnightLocation: 'Devgawan Gram, Sitapur',
    distanceFromPreviousKm: 23,
    traditionalSignificance: {
      en: 'On the sixth day, the parikrama leaves Hardoi and re-enters the Sitapur district. The route features Nagalaya, Neelganga, Shringi Rishi Ashram, and Dronacharya Parvat. Devotees participate in the distinctive Gurd-Katora (jaggery bowl) donation tradition.',
      hi: 'षष्ठी को परिक्रमार्थी देवगवाँ पहुँचते हैं, जहाँ से परिक्रमा पुनः सीतापुर जनपद में प्रवेश करती है। मार्ग में नागालय, नीलगंगा, शृंगी ऋषि तथा द्रोणाचार्य पर्वत पड़ते हैं। यहाँ गुड़-कटोरा दान की प्राचीन लोक परंपरा है।',
    },
    ritualsAndDonations: {
      en: [
        'Traditional Gurd-Katora (jaggery in brass/clay bowl) donation',
        'Neelganga sacred snan and riverbank prayer',
        'Tribute to Guru Dronacharya and Shringi Rishi',
      ],
      hi: [
        'पारंपरिक गुड़-कटोरा का विधिवत दान',
        'नीलगंगा में पावन स्नान एवं तर्पण',
        'गुरु द्रोणाचार्य एवं शृंगी ऋषि की तपोभूमि पर नमन',
      ],
    },
    keySacredSites: ['devgaon'],
    nextStopSlug: 'madova',
    prevStopSlug: 'sangi-gopalpur',
  },
  {
    dayNumber: 7,
    slug: 'madova',
    title: {
      en: 'Day 7: Mandwa – Shivganga, Pramadvan & Valmiki Well',
      hi: 'सप्तम दिवस: मड़ोवा पड़ाव – शिवगंगा, प्रमादवन व लोटा-डोर परंपरा',
    },
    stopName: {
      en: 'Mandwa (Madova)',
      hi: 'मड़ोवा (मांडव क्षेत्र)',
    },
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.291, lng: 80.456 },
    startLocation: 'Devgawan',
    overnightLocation: 'Mandwa Gram, Sitapur',
    distanceFromPreviousKm: 20,
    traditionalSignificance: {
      en: 'This revered stop connects Shivganga Tirth, Pramadvan, and Maharshi Valmiki’s historic well, where pilgrims practice the ancient Lota-Dor (rope and pitcher) donation ritual. It is also celebrated as the penance land of sage Mandav Muni, housing temples to Chandranandini and Chandraval Devi.',
      hi: 'यहाँ शिवगंगा तीर्थ, प्रमादवन, तथा महर्षि वाल्मीकि जी का कूप स्थित है जहाँ लोटा-डोर दान की विशेष परंपरा है। यह स्थल मांडव मुनि की तपोभूमि है जहाँ चंद्रनंदिनी एवं चंद्रावली देवी का मंदिर स्थित है।',
    },
    ritualsAndDonations: {
      en: [
        'Lota-Dor (pitcher and rope) ritual donation at Valmiki Koop',
        'Snan and Mahadev worship at Shivganga Tirth',
        'Darshan of Chandranandini and Chandraval Devi',
      ],
      hi: [
        'वाल्मीकि कूप पर लोटा-डोर का पावन दान',
        'शिवगंगा तीर्थ में स्नान एवं महादेव अभिषेक',
        'चंद्रनंदिनी एवं चंद्रावली देवी के मंदिर में दर्शन',
      ],
    },
    keySacredSites: ['madova'],
    nextStopSlug: 'jadargaon',
    prevStopSlug: 'devgaon',
  },
  {
    dayNumber: 8,
    slug: 'jadargaon',
    title: {
      en: 'Day 8: Jarigawan – The Sacred Madhu-Mahua Tree',
      hi: 'अष्टम दिवस: जरीगवाँ पड़ाव – सिद्ध मधु-महुआ वृक्ष एवं सुहाग पर्व',
    },
    stopName: {
      en: 'Jarigawan (Jadargaon)',
      hi: 'जरीगवाँ (जदरगाँव)',
    },
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.324, lng: 80.512 },
    startLocation: 'Mandwa',
    overnightLocation: 'Jarigawan Village, Sitapur',
    distanceFromPreviousKm: 24,
    traditionalSignificance: {
      en: 'On the eighth day, pilgrims experience symbolic darshan of Vishweshwar, Garh Muktishwar, Haridwar, Rupkund, and Kalpeshwar. A revered centerpiece is the Madhu-Mahua tree, where married women traditionally conduct rites, donate suhag pitari (bridal offerings) and vermillion, praying for marital longevity and prosperity.',
      hi: 'फाल्गुन अष्टमी को मड़ोवा से जरीगवाँ पहुँचते हैं। महुआ वन में स्थित मधु-महुआ वृक्ष के नीचे पूजन करने से अखंड सौभाग्य की प्राप्ति की लोकमान्यता है। यहाँ सुहागिन महिलाएँ सुहाग पिटारी तथा सिन्दूर का दान करती हैं।',
    },
    ritualsAndDonations: {
      en: [
        'Parikrama and worship of the divine Madhu-Mahua tree',
        'Suhag Pitari, sindoor, and red cloth donations by married devotees',
        'Symbolic remembrance of Garh Muktishwar and Kalpeshwar',
      ],
      hi: [
        'सिद्ध मधु-महुआ वृक्ष की परिक्रमा एवं पूजन',
        'सुहाग पिटारी, सिन्दूर तथा लाल वस्त्रों का पारंपरिक दान',
        'गढ़ मुक्तेश्वर, रूपकुंड एवं कल्पेश्वर के प्रतीकात्मक स्वरूपों का नमन',
      ],
    },
    symbolicTirthas: ['Vishweshwar', 'Garh Muktishwar', 'Harihar', 'Haridwar', 'Rupkund', 'Kurukshetra', 'Kalpeshwar'],
    keySacredSites: ['jadargaon'],
    nextStopSlug: 'naimisharanya-padav',
    prevStopSlug: 'madova',
  },
  {
    dayNumber: 9,
    slug: 'naimisharanya-padav',
    title: {
      en: 'Day 9: Naimisharanya Dham – The Sacred Heart of Penance',
      hi: 'नवम दिवस: नैमिषारण्य पड़ाव – 88,000 ऋषियों की परम तपोभूमि',
    },
    stopName: {
      en: 'Naimisharanya Padav',
      hi: 'नैमिषारण्य पड़ाव',
    },
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.348, lng: 80.488 },
    startLocation: 'Jarigawan',
    overnightLocation: 'Naimisharanya Dham',
    distanceFromPreviousKm: 18,
    traditionalSignificance: {
      en: 'The grand spiritual apex of the parikrama. On Phalguna Navami, the circuit returns to Naimisharanya Dham. Pilgrims witness the magnificent evening aarti at Chakra Tirth and Lalita Devi temple, pay homage at Vyas Gaddi, Hanuman Garhi, and Kali Peeth, and camp overnight in the holy forest of the 88,000 sages.',
      hi: 'चौरासी कोसी परिक्रमा का केंद्रीय एवं सर्वाधिक महत्वपूर्ण पड़ाव। फाल्गुन शुक्ल नवमी को परिक्रमा पुनः नैमिषारण्य में प्रवेश करती है। सायंकाल माँ ललिता देवी एवं चक्रतीर्थ की भव्य आरती के दर्शन कर परिक्रमार्थी यहाँ रात्रि विश्राम करते हैं।',
    },
    ritualsAndDonations: {
      en: [
        'Grand evening Maha Aarti at Chakra Tirth & Lalita Devi',
        'Exploration of the ancient Shakti Peetha and Vyas Gaddi',
        'Participation in scriptural discourses at Shaunaka Katha Sthal',
        'Offering of lamps (Deepdan) on the holy Gomti ghats',
      ],
      hi: [
        'चक्रतीर्थ एवं माँ ललिता देवी की भव्य महाआरती में सहभागिता',
        'ललिता शक्तिपीठ, व्यास गद्दी व कालीपीठ के दर्शन',
        'शौनक ऋषि कथा स्थल पर पुराण एवं भागवत श्रवण',
        'गोमती के पावन तट पर दीपदान',
      ],
    },
    keySacredSites: [
      'chakra-tirth',
      'lalita-shakti-peeth',
      'vyas-gaddi',
      'hanuman-gadhi',
      'kalipith',
      'baba-bhuteshwar-nath',
      'brahmavart-tirth',
      'trishakti-dham',
      'mata-anandmayi-ashram',
      'gomti-river',
      'suta-gaddi',
      'rudravart-shivasthal',
    ],
    nextStopSlug: 'kolhava-baretha',
    prevStopSlug: 'jadargaon',
  },
  {
    dayNumber: 10,
    slug: 'kolhava-baretha',
    title: {
      en: 'Day 10: Kolahwa–Barethi – The Chitrakoot Encampment',
      hi: 'दशम दिवस: कोलहवा–बरेठी पड़ाव – चित्रकूट धाम पड़ाव',
    },
    stopName: {
      en: 'Kolahwa–Barethi',
      hi: 'कोलहवा–बरेठी',
    },
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.389, lng: 80.521 },
    startLocation: 'Naimisharanya',
    overnightLocation: 'Kolahwa–Barethi (Chitrakoot Kshetra)',
    distanceFromPreviousKm: 22,
    traditionalSignificance: {
      en: 'Departing Naimisharanya on the tenth morning, pilgrims journey toward Kolahwa–Barethi. Along this trail, traditional ritual associations are made with sacred pilgrimage points of Braj, Kedarnath, and Vaidyanath Dham, culminating in an overnight stay in the Chitrakoot Dham sector.',
      hi: 'प्रातः नैमिषारण्य से परिक्रमार्थी कोलहवा–बरेठी के लिए प्रस्थान करते हैं। मार्ग में ब्रजमंडल (गोकुल, मथुरा, वृन्दावन, गोवर्धन), वैद्यनाथ धाम एवं केदारनाथ के प्रतीकात्मक स्मरण का विधान है। यात्री यहाँ पहुँचकर चित्रकूट धाम क्षेत्र में रात्रि विश्राम करते हैं।',
    },
    ritualsAndDonations: {
      en: [
        'Recitation of the sacred names of all-India tirthas',
        'Night stay and preparation for final culmination at Mishrikh',
        'Devotional Bhajan and Kirtan in the camp',
      ],
      hi: [
        'समस्त भारतवर्ष के तीर्थों के पवित्र नामों का सामूहिक संकीर्तन',
        'मिश्रिख तीर्थ में होने वाले समापन हेतु मानसिक तैयारी',
        'पड़ाव स्थल पर भजन संध्या एवं सत्संग',
      ],
    },
    symbolicTirthas: ['Kurukshetra', 'Hanshasini', 'Vaidyanath Dham', 'Govardhan', 'Gokul', 'Mathura', 'Vrindavan', 'Kedarnath'],
    keySacredSites: ['kolhava-baretha'],
    nextStopSlug: 'mishrikh-simfukh',
    prevStopSlug: 'naimisharanya-padav',
  },
  {
    dayNumber: 11,
    slug: 'mishrikh-simfukh',
    title: {
      en: 'Day 11: Mishrit Tirth – Dadhichi Kund & Pilgrimage Completion',
      hi: 'एकादश दिवस: मिश्रिख तीर्थ – महर्षि दधीचि कुंड व परिक्रमा पूर्णाहुति',
    },
    stopName: {
      en: 'Mishrit Tirth (Mishrikh)',
      hi: 'मिश्रिख तीर्थ',
    },
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.426, lng: 80.528 },
    startLocation: 'Kolahwa–Barethi',
    overnightLocation: 'Mishrit Tirth, Sitapur',
    distanceFromPreviousKm: 19,
    traditionalSignificance: {
      en: 'The triumphant culmination of the 84 Kos Parikrama. Entering from Chitrakoot on Phalguna Ekadashi, devotees assemble at the historic Dadhichi Kund where Maharshi Dadhichi sacrificed his sacred bones to forge Indra’s Vajra. Pilgrims engage in daily holy baths, Parikrama Aarti, Panchkosi Parikrama, and stay until Purnima followed by the festive 15-day Holi mela.',
      hi: 'चौरासी कोसी परिक्रमा का पावन समापन स्थल। फाल्गुन शुक्ल एकादशी को दल मिश्रिख तीर्थ में प्रवेश करता है। यहाँ महर्षि दधीचि कुंड में स्नान, परिक्रमा आरती, तथा पंचकोशी परिक्रमा का आयोजन होता है। पूर्णिमा स्नान उपरांत 15 दिवसीय विशाल स्थानीय मेला लगता है।',
    },
    ritualsAndDonations: {
      en: [
        'Sacred snan in Dadhichi Kund where all tirthas mingle',
        'Panchkosi Parikrama of Mishrikh holy perimeter',
        'Final Purnahuti Yajna and Parikrama Aarti',
        'Special Shraddha and charitable donations in memory of Dadhichi',
      ],
      hi: [
        'दधीचि कुंड में समस्त तीर्थों के पावन जल का संगम स्नान',
        'मिश्रिख क्षेत्र की पंचकोशी परिक्रमा',
        'परिक्रमा की पूर्णाहुति आरती एवं महायज्ञ',
        'महर्षि दधीचि की स्मृति में विशेष श्राद्ध, तर्पण एवं दान',
      ],
    },
    keySacredSites: ['mishrikh-simfukh', 'dadhichi-kund'],
    nextStopSlug: null,
    prevStopSlug: 'kolhava-baretha',
  },
]

export const sacredSiteDetails: SacredSiteDetail[] = [
  // --- 11 Padav Sites ---
  {
    id: 'korona',
    slug: 'korona',
    title: {
      en: 'Korouna (Korawal) Parikrama Stop',
      hi: 'कोरौना (कोरावल) पड़ाव – प्रथम दिवस',
    },
    category: 'Ashram',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.382, lng: 80.442 },
    dayNumbers: [1],
    deitiesOrFigures: ['Shri Ganesha', 'Lord Dwarkadhish'],
    spiritualSignificance: {
      en: 'The opening gateway to the 84 Kos Parikrama. Traditionally linked with Dwarka Kshetra, where pilgrims perform Ganesha puja with laddoo offerings to ensure their yatra remains auspicious and obstacle-free.',
      hi: 'चौरासी कोसी परिक्रमा का प्रारंभिक द्वार। दारिका क्षेत्र के रूप में प्रतिष्ठित, जहाँ विघ्नहर्ता गणेश जी को लड्डू अर्पित कर यात्रा का निर्विघ्न संकल्प लिया जाता है।',
    },
    traditionalLore: {
      en: 'According to tradition, bathing at Chakra Tirth and receiving the grace of Dwarkadhish at Korouna equips the pilgrim with spiritual armor for the 252 km circumambulation.',
      hi: 'मान्यता है कि चक्रतीर्थ में स्नान के पश्चात कोरौना में दारिकाधीश के दर्शन से परिक्रमार्थी पर विशेष कृपा होती है और यात्रा निर्विघ्न पूर्ण होती है।',
    },
    ritualsAndObservances: {
      en: ['Laddoo offering to Ganesha', 'Dwarkadhish temple prayers', 'Pilgrimage vow (Sankalpa)'],
      hi: ['गणेश जी को लड्डू भोग', 'दारिकाधीश मंदिर दर्शन', 'परिक्रमा संकल्प ग्रहण'],
    },
    sourceLabels: ['TRADITION', 'LOCAL BELIEF'],
    relatedSiteSlugs: ['chakra-tirth', 'hareya'],
  },
  {
    id: 'hareya',
    slug: 'hareya',
    title: {
      en: 'Haraiya (Jagannath Kshetra)',
      hi: 'हरैया (जगन्नाथ क्षेत्र) – द्वितीय दिवस',
    },
    category: 'Ashram',
    district: 'हरदोई (Hardoi)',
    coordinates: { lat: 27.321, lng: 80.385 },
    dayNumbers: [2],
    deitiesOrFigures: ['Kailashnath Shankar', 'Baba Khabish', 'Swami Purnanand'],
    spiritualSignificance: {
      en: 'A sanctuary of yoga and penance in Hardoi. Houses Kailash Ashram, the sacred shrine of Kailashnath, Baba Khabish, and the samadhi of Swami Purnanand.',
      hi: 'योग एवं साधना की पावन भूमि। यहाँ श्री कैलाश आश्रम में भगवान कैलाशनाथ (शंकर), बाबा खबीश का स्थान तथा स्वामी पूर्णानंद जी की समाधि स्थित है।',
    },
    traditionalLore: {
      en: 'The reference records that devotees seek the benevolent blessings of Baba Khabish and take holy dips in Gomti Ghat and Amar Kantak before their overnight halt.',
      hi: 'संदर्भ के अनुसार यहाँ गोमती घाट एवं अमर कटक में स्नान कर बाबा खबीश का आशीर्वाद प्राप्त किया जाता है।',
    },
    ritualsAndObservances: {
      en: ['Gomti Ghat snan', 'Amar Kantak water offering', 'Evening satsang in Haraiya'],
      hi: ['गोमती घाट स्नान', 'अमर कटक में आचमन', 'हरैया ग्राम में संध्या सत्संग'],
    },
    sourceLabels: ['TRADITION', 'REFERENCE DOCUMENT'],
    relatedSiteSlugs: ['korona', 'nagva-kothava', 'gomti-river'],
  },
  {
    id: 'nagva-kothava',
    slug: 'nagva-kothava',
    title: {
      en: 'Nagwan–Kothawan',
      hi: 'नगवाँ–कोथावाँ पड़ाव – तृतीय दिवस',
    },
    category: 'Mythological',
    district: 'हरदोई (Hardoi)',
    coordinates: { lat: 27.285, lng: 80.354 },
    dayNumbers: [3],
    deitiesOrFigures: ['Surya Dev', 'Padnaga', 'Nagvanshi Kings'],
    spiritualSignificance: {
      en: 'Revered seat of the Nagvanshi kings and Padnaga, hosting Hatya Haran Tirth (Surya Kund), Viraja Tirth, and Narmadeshwar Tirth.',
      hi: 'नागवंशी राजाओं एवं पद्मनाग की तपोभूमि। यहाँ हत्याहरण तीर्थ (सूर्य कुंड), विरजा तीर्थ एवं नर्मदेश्वर तीर्थ स्थित हैं।',
    },
    traditionalLore: {
      en: 'Bhadrapada month hosts an ancient fair commemorating the solar and serpentine traditions of the region.',
      hi: 'भाद्रपद मास में प्रतिवर्ष यहाँ बड़ा मेला लगता है जो सूर्य एवं नाग परंपरा की स्मृति है।',
    },
    ritualsAndObservances: {
      en: ['Surya Kund dawn bath', 'Surya Gayatri recitation', 'Nag Puja rituals'],
      hi: ['सूर्य कुंड में सूर्योदय स्नान', 'सूर्य गायत्री जप', 'नाग पूजन'],
    },
    sourceLabels: ['TRADITION', 'LOCAL BELIEF'],
    relatedSiteSlugs: ['hareya', 'hatya-haran-tirth', 'singardhar-pur'],
  },
  {
    id: 'singardhar-pur',
    slug: 'singardhar-pur',
    title: {
      en: 'Giridharpur–Umrari',
      hi: 'गिरधरपुर–उमरारी पड़ाव – चतुर्थ दिवस',
    },
    category: 'Temple',
    district: 'हरदोई (Hardoi)',
    coordinates: { lat: 27.241, lng: 80.332 },
    dayNumbers: [4],
    deitiesOrFigures: ['Sudarshan Narayan'],
    spiritualSignificance: {
      en: 'Twin village stop housing the historic Shran Mochan Tirth and Sudarshan Narayan Temple, invoking divine release from debts and anxieties.',
      hi: 'क्षणमोचन तीर्थ तथा सुदर्शन नारायण मंदिर का पावन क्षेत्र, जहाँ संतापों और बंधनों से मुक्ति की प्रार्थना की जाती है।',
    },
    traditionalLore: {
      en: 'Pilgrims traditionally pause between Days 3 and 4 to offer prayers at Sudarshan Narayan for protection along the wilderness trail.',
      hi: 'तीसरे और चौथे पड़ाव के मध्य सुदर्शन नारायण भगवान के दर्शन से मार्ग में रक्षा और संबल प्राप्त होता है।',
    },
    ritualsAndObservances: {
      en: ['Sudarshan Chakra worship', 'Shran Mochan water ritual'],
      hi: ['सुदर्शन चक्र पूजन', 'क्षणमोचन जल स्पर्श'],
    },
    sourceLabels: ['TRADITION', 'REFERENCE DOCUMENT'],
    relatedSiteSlugs: ['nagva-kothava', 'sangi-gopalpur'],
  },
  {
    id: 'sangi-gopalpur',
    slug: 'sangi-gopalpur',
    title: {
      en: 'Sakshi Gopalpur',
      hi: 'साक्षी गोपालपुर पड़ाव – पंचम दिवस',
    },
    category: 'Temple',
    district: 'हरदोई (Hardoi)',
    coordinates: { lat: 27.215, lng: 80.368 },
    dayNumbers: [5],
    deitiesOrFigures: ['Sakshi Gopal', 'Lord Badrinath'],
    spiritualSignificance: {
      en: 'A pilgrimage crossroads where Ganga Sagar, Badrinath, and Sheshdhara are symbolically honored, allowing pilgrims to access the fruits of these distant tirthas.',
      hi: 'गंगा सागर, बद्रीनाथ, तथा शेषधारा के प्रतीकात्मक दर्शन का केंद्र, जहाँ दूरस्थ तीर्थों का फल प्राप्त होता है।',
    },
    traditionalLore: {
      en: 'The PDF clarifies that these distant holy names represent symbolic spiritual invocations rather than physical journeys to the Himalayas or Bengal.',
      hi: 'संदर्भ यह स्पष्ट करता है कि ये दूरस्थ तीर्थ नाम प्रतीकात्मक व भाविक उपस्थिति हैं, भौतिक यात्रा नहीं।',
    },
    ritualsAndObservances: {
      en: ['Symbolic tirtha remembrance', 'Gopal darshan with bhog'],
      hi: ['प्रतीकात्मक तीर्थ स्मरण', 'गोपाल जी का भोग अर्पण'],
    },
    sourceLabels: ['TRADITION', 'LOCAL BELIEF'],
    relatedSiteSlugs: ['singardhar-pur', 'devgaon'],
  },
  {
    id: 'devgaon',
    slug: 'devgaon',
    title: {
      en: 'Devgawan (Dronacharya)',
      hi: 'देवगवाँ (द्रोणाचार्य) पड़ाव – षष्ठ दिवस',
    },
    category: 'Rishi',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.254, lng: 80.421 },
    dayNumbers: [6],
    deitiesOrFigures: ['Guru Dronacharya', 'Shringi Rishi'],
    spiritualSignificance: {
      en: 'The site re-enters Sitapur district, sanctified by Dronacharya Parvat, Neelganga, Nagalaya, and Shringi Rishi. Celebrated for the Gurd-Katora donation tradition.',
      hi: 'सीतापुर जनपद में पुनः प्रवेश। द्रोणाचार्य पर्वत, नीलगंगा तथा शृंगी ऋषि से पावन। यहाँ गुड़-कटोरा दान की विशेष परंपरा है।',
    },
    traditionalLore: {
      en: 'Donating a bowl of jaggery here is traditionally believed to sweeten one’s speech and remove karmic bitterness.',
      hi: 'यहाँ गुड़-कटोरा दान करने से वाणी में माधुर्य तथा जीवन में शुभता आने की लोकमान्यता है।',
    },
    ritualsAndObservances: {
      en: ['Gurd-Katora donation', 'Neelganga holy snan', 'Shringi Rishi tribute'],
      hi: ['गुड़-कटोरा दान', 'नीलगंगा में स्नान', 'शृंगी ऋषि को नमन'],
    },
    sourceLabels: ['TRADITION', 'LOCAL BELIEF'],
    relatedSiteSlugs: ['sangi-gopalpur', 'madova'],
  },
  {
    id: 'madova',
    slug: 'madova',
    title: {
      en: 'Mandwa (Madova)',
      hi: 'मड़ोवा पड़ाव – सप्तम दिवस',
    },
    category: 'Rishi',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.291, lng: 80.456 },
    dayNumbers: [7],
    deitiesOrFigures: ['Maharshi Valmiki', 'Mandav Muni', 'Chandraval Devi'],
    spiritualSignificance: {
      en: 'The hermitage of Mandav Muni, Shivganga Tirth, Pramadvan, and Valmiki Rishi’s sacred well, where devotees donate a rope and pitcher (Lota-Dor).',
      hi: 'मांडव मुनि की तपोभूमि, शिवगंगा तीर्थ, प्रमादवन तथा वाल्मीकि कूप जहाँ लोटा-डोर दान की विशिष्ट परंपरा है।',
    },
    traditionalLore: {
      en: 'Donating a lota and dor (rope) symbolizes providing the means to draw nectar-like wisdom from the deep well of spiritual consciousness.',
      hi: 'लोटा-डोर दान जीवन की गहराई से अमृतमय ज्ञान व तृप्ति प्राप्त करने का प्रतीकात्मक विधान माना गया है।',
    },
    ritualsAndObservances: {
      en: ['Lota-Dor donation at Valmiki Koop', 'Shivganga snan', 'Chandraval Devi puja'],
      hi: ['वाल्मीकि कूप पर लोटा-डोर दान', 'शिवगंगा में स्नान', 'चंद्रावली देवी दर्शन'],
    },
    sourceLabels: ['TRADITION', 'LOCAL BELIEF'],
    relatedSiteSlugs: ['devgaon', 'jadargaon'],
  },
  {
    id: 'jadargaon',
    slug: 'jadargaon',
    title: {
      en: 'Jarigawan (Jadargaon)',
      hi: 'जरीगवाँ पड़ाव – अष्टम दिवस',
    },
    category: 'Temple',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.324, lng: 80.512 },
    dayNumbers: [8],
    deitiesOrFigures: ['Vishweshwar', 'Garh Muktishwar'],
    spiritualSignificance: {
      en: 'Famed for its sacred Madhu-Mahua grove where married women gather to conduct rituals for marital blessings, offering suhag pitari and sindoor.',
      hi: 'मधु-महुआ वृक्ष के लिए प्रसिद्ध, जहाँ सुहागिन महिलाएँ अखंड सौभाग्य की कामना से सुहाग पिटारी व सिन्दूर का दान करती हैं।',
    },
    traditionalLore: {
      en: 'The tree is traditionally considered wish-fulfilling for harmony, family well-being, and marital devotion.',
      hi: 'पारंपरिक मान्यता के अनुसार इस वृक्ष की पूजा से दाम्पत्य जीवन में सुख, शांति और अखंड सौभाग्य की प्राप्ति होती है।',
    },
    ritualsAndObservances: {
      en: ['Madhu-Mahua tree worship', 'Suhag Pitari & vermillion offering', 'Women spiritual circle'],
      hi: ['मधु-महुआ वृक्ष पूजन', 'सुहाग पिटारी एवं सिन्दूर दान', 'पारंपरिक मंगल गान'],
    },
    sourceLabels: ['LOCAL BELIEF', 'TRADITION'],
    relatedSiteSlugs: ['madova', 'naimisharanya-padav'],
  },
  {
    id: 'naimisharanya-padav',
    slug: 'naimisharanya-padav',
    title: {
      en: 'Naimisharanya Padav – Day 9 Camp',
      hi: 'नैमिषारण्य पड़ाव – नवम दिवस',
    },
    category: 'Ashram',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.348, lng: 80.488 },
    dayNumbers: [9],
    deitiesOrFigures: ['88,000 Sages', 'Lalita Devi', 'Lord Shiva'],
    spiritualSignificance: {
      en: 'The central hub of the 84 Kos Parikrama where the circuit circles back to the heart of Naimisharanya, welcoming pilgrims with grand evening aartis.',
      hi: 'चौरासी कोसी परिक्रमा का केंद्रीय पड़ाव जहाँ परिक्रमा दल पुनः नैमिषारण्य धाम के मुख्य तीर्थों में प्रवेश कर संध्या आरती में भाग लेता है।',
    },
    traditionalLore: {
      en: 'Scriptures state that resting in Naimisharanya on Navami washes away the fatigue of the journey and prepares the soul for ultimate completion.',
      hi: 'शास्त्रों में वर्णित है कि नवमी को नैमिषारण्य में वास करने से यात्रा की सारी थकावट दूर होकर दिव्य ऊर्जा का संचार होता है।',
    },
    ritualsAndObservances: {
      en: ['Maha Aarti at Chakra Tirth', 'Lalita Devi temple darshan', 'Night camp under sage groves'],
      hi: ['चक्रतीर्थ महाआरती', 'माँ ललिता देवी दर्शन', 'ऋषि वनों के बीच रात्रि विश्राम'],
    },
    sourceLabels: ['TRADITION', 'SCRIPTURAL REFERENCE'],
    relatedSiteSlugs: ['chakra-tirth', 'lalita-shakti-peeth', 'vyas-gaddi', 'kolhava-baretha'],
  },
  {
    id: 'kolhava-baretha',
    slug: 'kolhava-baretha',
    title: {
      en: 'Kolahwa–Barethi (Chitrakoot)',
      hi: 'कोलहवा–बरेठी पड़ाव – दशम दिवस',
    },
    category: 'Mythological',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.389, lng: 80.521 },
    dayNumbers: [10],
    deitiesOrFigures: ['Lord Rama', 'Braj Deities'],
    spiritualSignificance: {
      en: 'Tenth stop situated in the Chitrakoot Kshetra of Naimisharanya, hosting symbolic darshan of holy places of Braj, Govardhan, and Vaidyanath.',
      hi: 'चित्रकूट धाम क्षेत्र में स्थित दशम पड़ाव, जहाँ ब्रजमंडल एवं अन्य पावन तीर्थों का प्रतीकात्मक स्मरण कर रात्रि विश्राम किया जाता है।',
    },
    traditionalLore: {
      en: 'Devotees recite the 108 sacred names of divine circuits before entering the final concluding day at Mishrikh.',
      hi: 'परिक्रमार्थी यहाँ से अगले दिन होने वाले महासमापन हेतु मानसिक एवं आध्यात्मिक रूप से तैयार होते हैं।',
    },
    ritualsAndObservances: {
      en: ['All-India sacred tirtha kirtan', 'Satsang and campfire discourses'],
      hi: ['अखिल भारतीय तीर्थ संकीर्तन', 'पड़ाव स्थल पर सत्संग व भजन'],
    },
    sourceLabels: ['TRADITION', 'LOCAL BELIEF'],
    relatedSiteSlugs: ['naimisharanya-padav', 'mishrikh-simfukh'],
  },
  {
    id: 'mishrikh-simfukh',
    slug: 'mishrikh-simfukh',
    title: {
      en: 'Mishrit Tirth (Mishrikh) – Concluding Stop',
      hi: 'मिश्रिख तीर्थ पड़ाव – एकादश (समापन) दिवस',
    },
    category: 'Kund',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.426, lng: 80.528 },
    dayNumbers: [11],
    deitiesOrFigures: ['Maharshi Dadhichi', 'Lord Indra'],
    spiritualSignificance: {
      en: 'The concluding sanctuary where the 84 Kos Parikrama concludes at Dadhichi Kund. Devotees participate in Panchkosi Parikrama and stay till Purnima.',
      hi: 'चौरासी कोसी परिक्रमा का पावन समापन स्थल, जहाँ दधीचि कुंड में स्नान, पंचकोशी परिक्रमा एवं पूर्णाहुति आरती संपन्न होती है।',
    },
    traditionalLore: {
      en: 'Maharshi Dadhichi sacrificed his life and donated his bones here so the gods could create the Vajra weapon to vanquish demon Vritrasura.',
      hi: 'यहाँ महर्षि दधीचि ने लोक कल्याण हेतु अपनी अस्थियों का दान दिया था जिससे निर्मित वज्र से वृत्रासुर का वध हुआ।',
    },
    ritualsAndObservances: {
      en: ['Dadhichi Kund holy snan', 'Panchkosi Parikrama', 'Parikrama Purnahuti Aarti', 'Charitable donations'],
      hi: ['दधीचि कुंड में स्नान', 'पंचकोशी परिक्रमा', 'पूर्णाहुति आरती', 'विशाल भंडारा व दान'],
    },
    sourceLabels: ['SCRIPTURAL REFERENCE', 'TRADITION'],
    relatedSiteSlugs: ['dadhichi-kund', 'kolhava-baretha', 'chakra-tirth'],
    specialFeature: 'dadhichi',
  },

  // --- Major Shrines, Kunds, Ashrams & Ghats ---
  {
    id: 'chakra-tirth',
    slug: 'chakra-tirth',
    title: {
      en: 'Chakra Tirth – Naimisharanya',
      hi: 'चक्रतीर्थ – नैमिषारण्य',
    },
    category: 'Kund',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.3458, lng: 80.4892 },
    dayNumbers: [1, 9],
    deitiesOrFigures: ['Lord Brahma', 'Lord Vishnu', '88,000 Sages'],
    spiritualSignificance: {
      en: 'The divine vortex and primordial soul of Naimisharanya. Where Lord Brahma released his dazzling sun-like Manoj Chakra to identify the land untainted by Kali Yuga for 88,000 sages to perform eternal yajnas.',
      hi: 'नैमिषारण्य का सर्वाधिक पवित्र कुंड एवं सनातन आत्मा। जहाँ ब्रह्मा जी के छोड़े गए मनोजन्य चक्र की नेमि (पहिया) गिरी, जिससे यह धरा नैमिष-अरण्य कहलाई।',
    },
    traditionalLore: {
      en: 'Traditional belief holds that the water of Chakra Tirth is subterraneanly connected to all holy waters of Bharat, granting instantaneous spiritual purification.',
      hi: 'धार्मिक मान्यता है कि चक्रतीर्थ का जल पाताल गंगा से जुड़ा है और इसमें स्नान-आचमन से सहस्रों तीर्थों का फल प्राप्त होता है।',
    },
    scripturalQuotations: [
      {
        source: 'Mahabharata, Shanti Parva',
        shloka: 'चक्रतीर्थं महापुण्यं सर्वपापप्रणाशनम्।',
        translation: {
          en: 'Chakra Tirth is immensely meritorious and the destroyer of all sins.',
          hi: 'चक्रतीर्थ परम पावन है तथा समस्त पापों का विनाश करने वाला है।',
        },
      },
    ],
    ritualsAndObservances: {
      en: ['Circular Parikrama around the rim', 'Dawn snan and Tarpan', 'Evening lamp offering (Deepdan)'],
      hi: ['कुंड की परिक्रमा', 'प्रातः स्नान एवं तर्पण', 'सायंकालीन दीपदान'],
    },
    sourceLabels: ['SCRIPTURAL REFERENCE', 'TRADITION'],
    relatedSiteSlugs: ['lalita-shakti-peeth', 'baba-bhuteshwar-nath', 'vyas-gaddi'],
    specialFeature: 'chakra',
  },
  {
    id: 'lalita-shakti-peeth',
    slug: 'lalita-shakti-peeth',
    title: {
      en: 'Naimishiya Maa Lalita Shakti Peeth',
      hi: 'नैमिषीय माँ ललिता शक्ति पीठ',
    },
    category: 'Shakti',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.3475, lng: 80.4912 },
    dayNumbers: [9],
    deitiesOrFigures: ['Maa Lalita Devi', 'Lord Shiva (Bhairava)', 'Maa Sati'],
    spiritualSignificance: {
      en: 'One of the venerable 108 Shakti Peethas described in Devi Bhagavata and Shiva Purana. Where the heart (Hridaya) of Devi Sati fell, revered as Hridaya Lalita and celebrated in Tantric traditions as Uddiyana Peeth.',
      hi: 'देवीभागवत एवं शिव पुराण में वर्णित सिद्ध शक्तिपीठ। जहाँ माँ सती का हृदय भाग गिरा था, अतः माता यहाँ "हृदय ललिता" के रूप में पूजित हैं। इसे उड्डीयान पीठ भी कहा जाता है।',
    },
    traditionalLore: {
      en: 'Maa Lalita Devi is revered as the supreme presiding deity of Sri Vidya sadhana, balancing spiritual liberation (Moksha) with worldly fulfillment (Bhoga).',
      hi: 'माँ ललिता त्रिपुर सुंदरी श्रीविद्या साधना की अधिष्ठात्री देवी हैं, जो साधक को भोग और मोक्ष दोनों का संतुलित मार्ग प्रदान करती हैं।',
    },
    scripturalQuotations: [
      {
        source: 'Devi Bhagavata Purana',
        translation: {
          en: 'In Naimisharanya resides Lalita Devi, the auspicious fulfiller of all desires.',
          hi: 'नैमिषारण्य में माता ललिता देवी विराजमान हैं, जो भक्तों के समस्त मनोरथ पूर्ण करती हैं।',
        },
      },
    ],
    ritualsAndObservances: {
      en: ['Kumkum archana', 'Sri Sukta recitation', 'Navratri special abhisheka', 'Chunari offering'],
      hi: ['कुंकुम अर्चन', 'श्रीसूक्त पाठ', 'नवरात्रि महाभिषेक', 'चुनरी व श्रृंगार अर्पण'],
    },
    sourceLabels: ['SCRIPTURAL REFERENCE', 'TRADITION'],
    relatedSiteSlugs: ['kalipith', 'chakra-tirth', 'vyas-gaddi'],
  },
  {
    id: 'vyas-gaddi',
    slug: 'vyas-gaddi',
    title: {
      en: 'Vyas Gaddi – The Ancient Seat of Knowledge',
      hi: 'व्यास गद्दी – वेदों व पुराणों का रचना स्थल',
    },
    category: 'Rishi',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.3468, lng: 80.4925 },
    dayNumbers: [9],
    deitiesOrFigures: ['Maharshi Ved Vyas', 'Shri Shukdev Ji'],
    spiritualSignificance: {
      en: 'Located on the serene banks of the Gomti river. The historic seat where Maharshi Ved Vyas divided the four Vedas, compiled the 18 Mahapuranas, and composed the Brahma Sutras and 6 Shastras.',
      hi: 'गोमती तट पर स्थित वह परम पावन स्थल जहाँ महर्षि वेदव्यास ने चारों वेदों का विभाजन, 18 पुराणों तथा 6 शास्त्रों की रचना की थी।',
    },
    traditionalLore: {
      en: 'Close to Vyas Gaddi lies the seat of his Yogi son Shukdev Ji, who narrated the Srimad Bhagavatam to King Parikshit, instituting the Bhagavata Saptah tradition.',
      hi: 'यहीं निकट शुकदेव जी का स्थान है जिन्होंने राजा परीक्षित को श्रीमद्भागवत का उपदेश देकर भागवत सप्ताह परंपरा का सूत्रपात किया था।',
    },
    ritualsAndObservances: {
      en: ['Parikrama of the ancient banyan tree', 'Bhagavata discourse listening', 'Guru Puja'],
      hi: ['प्राचीन वटवृक्ष की परिक्रमा', 'भागवत कथा श्रवण', 'गुरु वंदना व पूजन'],
    },
    sourceLabels: ['SCRIPTURAL REFERENCE', 'TRADITION'],
    relatedSiteSlugs: ['suta-gaddi', 'mata-anandmayi-ashram', 'gomti-river'],
  },
  {
    id: 'hanuman-gadhi',
    slug: 'hanuman-gadhi',
    title: {
      en: 'Hanuman Garhi – Panch Pandav Quila',
      hi: 'हनुमान गढ़ी – पाँच पांडव किला',
    },
    category: 'Temple',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.349, lng: 80.488 },
    dayNumbers: [9],
    deitiesOrFigures: ['Lord Hanuman (Dakshinamukhi)', 'Makardhwaj', 'Panch Pandavas'],
    spiritualSignificance: {
      en: 'Houses an impressive South-facing idol of Lord Hanuman standing upright. Tradition states this is where Hanuman rested after conquering Ahiravan in the netherworld to liberate Lord Rama and Lakshmana.',
      hi: 'दक्षिणमुखी विशाल हनुमान जी की सिद्ध प्रतिमा। मान्यता है कि अहिरावण का वध कर श्रीराम-लक्ष्मण को पाताल से मुक्त कराने के उपरांत हनुमान जी यहाँ विश्राम हेतु पधारे थे।',
    },
    traditionalLore: {
      en: 'According to tradition, the statue stands approximately 15 feet high, carrying Lord Rama on one shoulder and Lakshmana on the other, flanked by son Makardhwaj.',
      hi: 'परंपरा अनुसार हनुमान जी के एक कंधे पर श्रीराम तथा दूसरे पर लक्ष्मण जी विराजमान हैं तथा समीप ही मकरध्वज का स्थान है।',
    },
    ritualsAndObservances: {
      en: ['Sindoor chola offering', 'Hanuman Chalisa recitation', 'Boondi and laddu prasad'],
      hi: ['सिन्दूर का चोला अर्पण', 'हनुमान चालीसा व सुंदरकांड पाठ', 'बूंदी व लड्डू प्रसाद वितरण'],
    },
    sourceLabels: ['LOCAL BELIEF', 'TRADITION'],
    relatedSiteSlugs: ['chakra-tirth', 'lalita-shakti-peeth'],
  },
  {
    id: 'kalipith',
    slug: 'kalipith',
    title: {
      en: 'Kali Peeth – Mahavidya & Sri Vidya Complex',
      hi: 'कालीपीठ – दशमहाविद्या व श्रीयंत्र साधना धाम',
    },
    category: 'Shakti',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.3482, lng: 80.4905 },
    dayNumbers: [9],
    deitiesOrFigures: ['Maa Dakshineshwar Kali', '10 Mahavidyas', 'Gayatri Mata'],
    spiritualSignificance: {
      en: 'A premier center of Tantric and Vedic Sri Vidya sadhana, featuring an 11-foot South-facing idol of Maa Kali, temples for all 10 Mahavidyas, a daily Gayatri Yajnashala, and Sri Yantra abhishek.',
      hi: 'शक्ति, भक्ति और श्रीविद्या साधना का दिव्य केंद्र। यहाँ 11 फुट ऊँची दक्षिणमुखी माँ काली की प्रतिमा, दशमहाविद्या मंदिर, तथा अनवरत माँ गायत्री यज्ञशाला स्थित है।',
    },
    traditionalLore: {
      en: 'Pilgrims observe the tradition of filling Maa’s khappar (devotional offering bowl) for fulfillment of righteous wishes and fearlessness.',
      hi: 'यहाँ मनोकामना पूर्ति हेतु माँ का खप्पर भरने की प्राचीन लोक परंपरा है।',
    },
    ritualsAndObservances: {
      en: ['Daily Havan in Gayatri Yajnashala', 'Sri Yantra Abhishek', 'Navratri Shat Chandi Mahayajna'],
      hi: ['गायत्री यज्ञशाला में दैनिक हवन', 'श्रीयंत्र का विधिपूर्वक अभिषेक', 'शतचंडी महायज्ञ एवं साधना'],
    },
    sourceLabels: ['TRADITION', 'REFERENCE DOCUMENT'],
    relatedSiteSlugs: ['lalita-shakti-peeth', 'trishakti-dham'],
    specialFeature: 'dashamahavidya',
  },
  {
    id: 'baba-bhuteshwar-nath',
    slug: 'baba-bhuteshwar-nath',
    title: {
      en: 'Baba Bhuteshwar Nath Temple',
      hi: 'बाबा भूतेश्वरनाथ मंदिर – नैमिष के रक्षक देव',
    },
    category: 'Shiva',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.344, lng: 80.487 },
    dayNumbers: [9],
    deitiesOrFigures: ['Baba Bhuteshwar (Shiva)', 'Lord Vishnu'],
    spiritualSignificance: {
      en: 'Situated east of Chakra Tirth, Baba Bhuteshwar is revered as the guardian protector of Naimisharanya. Uniquely, Lord Shiva is enshrined in anthropomorphic form alongside Lord Vishnu, representing Harihara unity.',
      hi: 'चक्रतीर्थ के पूर्व में स्थित। बाबा भूतेश्वर नैमिषारण्य के रक्षक देव माने जाते हैं। यहाँ भगवान शिव साकार मूर्ति रूप में विष्णु जी के साथ प्रतिष्ठित हैं।',
    },
    traditionalLore: {
      en: 'Traditional devotees believe the deity manifests in three daily moods: child-like in the morning, fierce at noon, and calm Bholenath at dusk.',
      hi: 'धार्मिक मान्यता है कि यह मूर्ति दिन में तीन स्वरूप बदलती है: प्रातः बाल रूप, दोपहर रौद्र रूप, और सायंकाल शांत भोलेनाथ स्वरूप।',
    },
    ritualsAndObservances: {
      en: ['Jal abhishek after Chakra Tirth bath', 'Shravan month special bilva offering', 'Bhandara seva'],
      hi: ['चक्रतीर्थ स्नान के उपरांत जलाभिषेक', 'श्रावण मास में विशेष बेलपत्र पूजा', 'शिव भंडारा सेवा'],
    },
    sourceLabels: ['LOCAL BELIEF', 'TRADITION'],
    relatedSiteSlugs: ['chakra-tirth', 'rudravart-shivasthal'],
  },
  {
    id: 'brahmavart-tirth',
    slug: 'brahmavart-tirth',
    title: {
      en: 'Brahmavart Tirth – Primeval Yajna Sthal',
      hi: 'ब्रह्मावर्त तीर्थ – ब्रह्मा जी की तपोस्थली',
    },
    category: 'Mythological',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.345, lng: 80.4855 },
    dayNumbers: [9],
    deitiesOrFigures: ['Lord Brahma', 'Adi Ganga Gomti'],
    spiritualSignificance: {
      en: 'Located near Vyas Gaddi on the Gomti bank. Archaeological remains commemorate the spot where Lord Brahma conducted great primeval yajnas at the inception of creation.',
      hi: 'व्यास गद्दी के समीप गोमती तट पर स्थित। वर्तमान में यहाँ भग्नावशेष उपलब्ध हैं, जहाँ सृष्टि के आरंभ में भगवान ब्रह्मा ने महायज्ञ किया था।',
    },
    traditionalLore: {
      en: 'Scriptures state Naimisharanya’s Brahmavart is swayambhu (self-manifested), signifying the seed of cosmic creation and Vedic sacrificial culture.',
      hi: 'शास्त्रों के अनुसार नैमिषारण्य का ब्रह्मावर्त स्वयंभू तीर्थ है जो सनातन सृष्टि और वैदिक यज्ञ परंपरा का मूल माना गया है।',
    },
    ritualsAndObservances: {
      en: ['Riverbank meditation', 'Gayatri japa', 'Contemplation on cosmic creation'],
      hi: ['तट पर मौन ध्यान', 'गायत्री जप', 'सृष्टि संकल्प का स्मरण'],
    },
    sourceLabels: ['SCRIPTURAL REFERENCE', 'TRADITION'],
    relatedSiteSlugs: ['vyas-gaddi', 'gomti-river'],
  },
  {
    id: 'trishakti-dham',
    slug: 'trishakti-dham',
    title: {
      en: 'Trishakti Dham Temple',
      hi: 'त्रिशक्ति धाम मंदिर – इच्छा, ज्ञान व क्रिया शक्ति',
    },
    category: 'Temple',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.351, lng: 80.493 },
    dayNumbers: [9],
    deitiesOrFigures: ['Lord Ganesha', 'Lord Vishnu', 'Maa Durga'],
    spiritualSignificance: {
      en: 'South Indian temple architecture bringing together the Three Cosmic Powers: Ichha Shakti (Ganesha - will), Jnana Shakti (Vishnu - wisdom), and Kriya Shakti (Durga - action).',
      hi: 'दक्षिण भारतीय स्थापत्य कला से निर्मित भव्य मंदिर जो इच्छा शक्ति (गणेश), ज्ञान शक्ति (विष्णु) और क्रिया शक्ति (दुर्गा) का समन्वित दर्शन प्रस्तुत करता है।',
    },
    traditionalLore: {
      en: 'Built by an Andhra Pradesh devotional trust, bridging South and North Indian bhakti and Agamic temple traditions.',
      hi: 'आंध्र प्रदेश के एक धार्मिक ट्रस्ट द्वारा स्थापित, जो उत्तर और दक्षिण भारत की भक्ति परंपराओं का अनुपम संगम है।',
    },
    ritualsAndObservances: {
      en: ['Threefold deity pradakshina', 'Archana with camphor aarti', 'Sanskrit-Telugu stotra recitations'],
      hi: ['तीनों देव स्वरूपों की प्रदक्षिणा', 'कपूर आरती व विशेष अर्चन', 'स्तोत्र पाठ'],
    },
    sourceLabels: ['REFERENCE DOCUMENT', 'GEOGRAPHICAL INFORMATION'],
    relatedSiteSlugs: ['kalipith', 'lalita-shakti-peeth'],
    specialFeature: 'trishakti',
  },
  {
    id: 'mata-anandmayi-ashram',
    slug: 'mata-anandmayi-ashram',
    title: {
      en: 'Mata Anandamayi Ashram & Purana Temple',
      hi: 'माता आनंदमयी आश्रम एवं पुराण मंदिर',
    },
    category: 'Ashram',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.3525, lng: 80.4915 },
    dayNumbers: [9],
    deitiesOrFigures: ['Mata Anandamayi', 'Purana Purush', 'Swami Naradanand'],
    spiritualSignificance: {
      en: 'A serene sanctuary housing the 18 Puranas, 4 Vedas, and the idol of Purana Purush. Perpetually illuminated by an Akhand Deep that has been burning continuously for decades.',
      hi: 'वेदों और 18 पुराणों का दुर्लभ संग्रह। यहाँ "पुराण पुरुष" की प्रतिमा तथा दशकों से निरंतर प्रज्ज्वलित अखंड दीप ज्ञान की अमर ज्योति का प्रतीक है।',
    },
    traditionalLore: {
      en: 'Mata Anandamayi felt deep spiritual pain seeing that the land of Puranas lacked a physical temple honoring them, inspiring the creation of this Puran Mandir.',
      hi: 'माता आनंदमयी की प्रेरणा से इस पुराण मंदिर की स्थापना हुई ताकि जिस भूमि पर पुराण रचे गए वहाँ उनका प्रत्यक्ष दर्शन सुलभ हो सके।',
    },
    ritualsAndObservances: {
      en: ['Akhand Deep darshan', 'Silent meditation in the prayer hall', 'Purana study'],
      hi: ['अखंड ज्योति दर्शन', 'ध्यान कक्ष में मौन साधना', 'पुराण दर्शन'],
    },
    sourceLabels: ['REFERENCE DOCUMENT', 'TRADITION'],
    relatedSiteSlugs: ['vyas-gaddi', 'hanuman-gadhi'],
    specialFeature: 'purana-mandir',
  },
  {
    id: 'hatya-haran-tirth',
    slug: 'hatya-haran-tirth',
    title: {
      en: 'Hatya Haran Tirth & Surya Kund',
      hi: 'हत्याहरण तीर्थ एवं सूर्य कुंड',
    },
    category: 'Kund',
    district: 'हरदोई (Hardoi)',
    coordinates: { lat: 27.288, lng: 80.358 },
    dayNumbers: [3],
    deitiesOrFigures: ['Lord Rama', 'Surya Dev', 'Lord Shiva'],
    spiritualSignificance: {
      en: 'Ancient purifying water body. Tradition relates that in Satya Yuga, Shiva performed rites here to alleviate the burden of Brahma-hatya, and in Treta Yuga, Lord Rama bathed here after the victory over Ravana.',
      hi: 'अति प्राचीन पावन कुंड। मान्यता है कि सतयुग में शिवजी ने तथा त्रेतायुग में श्रीराम ने रावण वध के पश्चात यहाँ स्नान कर ब्रह्महत्या दोष का निवारण किया था।',
    },
    traditionalLore: {
      en: 'Bathing in Surya Kund on Sundays of Bhadrapada month is traditionally believed to bring deep spiritual peace and wash away lingering guilt.',
      hi: 'भाद्रपद मास के रविवार को इस कुंड में स्नान करने से अज्ञानवश हुए पापों का शमन होने की लोकमान्यता है।',
    },
    ritualsAndObservances: {
      en: ['Sunday dawn snan', 'Surya Kund Arghya', 'Charity to needy pilgrims'],
      hi: ['रविवार प्रातःकाल स्नान', 'सूर्य अर्घ्य', 'अन्न व वस्त्र दान'],
    },
    sourceLabels: ['SCRIPTURAL REFERENCE', 'LOCAL BELIEF'],
    relatedSiteSlugs: ['nagva-kothava', 'chakra-tirth'],
  },
  {
    id: 'dadhichi-kund',
    slug: 'dadhichi-kund',
    title: {
      en: 'Dadhichi Kund – Mishrit',
      hi: 'दधीचि कुंड – मिश्रिख',
    },
    category: 'Kund',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.426, lng: 80.528 },
    dayNumbers: [11],
    deitiesOrFigures: ['Maharshi Dadhichi', 'Lord Indra', 'All Sacred Waters'],
    spiritualSignificance: {
      en: 'The site of supreme self-sacrifice where Maharshi Dadhichi offered his living bones to make the Vajra weapon for the protection of righteousness and eradication of demon Vritrasura.',
      hi: 'परम त्याग की अमर भूमि जहाँ महर्षि दधीचि ने देवराज इंद्र को धर्म की रक्षा एवं वृत्रासुर के वध हेतु अपनी अस्थियाँ दान की थीं।',
    },
    traditionalLore: {
      en: 'Before relinquishing his body, all sacred waters of the world gathered into this single pond to bathe the great sage, giving the place its name Mishrit (mingled waters).',
      hi: 'अस्थि दान से पूर्व संसार के सभी तीर्थों के जल यहाँ मिश्रित हुए थे ताकि महर्षि का अभिषेक हो सके, इसीलिए इसे "मिश्रिख" (मिश्रित तीर्थ) कहा जाता है।',
    },
    ritualsAndObservances: {
      en: ['Panchkosi Parikrama', 'Phalguna Purnima holy dip', 'Selfless service (Seva)'],
      hi: ['पंचकोशी परिक्रमा', 'फाल्गुन पूर्णिमा स्नान', 'श्रद्धांजलि व तर्पण'],
    },
    sourceLabels: ['SCRIPTURAL REFERENCE', 'TRADITION'],
    relatedSiteSlugs: ['mishrikh-simfukh', 'chakra-tirth'],
    specialFeature: 'dadhichi',
  },
  {
    id: 'gomti-river',
    slug: 'gomti-river',
    title: {
      en: 'Holy Gomti River & Dashashwamedh Ghat',
      hi: 'पावन गोमती नदी एवं दशाश्वमेध घाट',
    },
    category: 'Ghat',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.346, lng: 80.494 },
    dayNumbers: [2, 9],
    deitiesOrFigures: ['Gomti Mata (Dhenumati)', 'Lord Rama'],
    spiritualSignificance: {
      en: 'The sacred river flowing through Naimisharanya, also called Adi Ganga and Dhenumati. Features Dashashwamedh Ghat and Rajghat, where Ashwamedha yajnas and sacred ablutions take place.',
      hi: 'नैमिषारण्य से बहने वाली पवित्र नदी जिसे आदि गंगा व धेनुमती भी कहा जाता है। यहाँ दशाश्वमेध घाट एवं राजघाट स्थित हैं।',
    },
    traditionalLore: {
      en: 'Tradition recounts that bathing and offering tarpana on the banks of Gomti bestows the spiritual merit of performing a thousand sacrifices.',
      hi: 'मान्यता है कि गोमती में स्नान व तर्पण करने से सहस्र यज्ञों का पुण्य प्राप्त होता है।',
    },
    ritualsAndObservances: {
      en: ['River snan', 'Evening Ganga-Gomti Aarti', 'Pinda Daan and Ancestor Rites'],
      hi: ['गोमती स्नान', 'संध्या आरती', 'पिंडदान व पितृ तर्पण'],
    },
    sourceLabels: ['TRADITION', 'SCRIPTURAL REFERENCE'],
    relatedSiteSlugs: ['vyas-gaddi', 'rudravart-shivasthal', 'brahmavart-tirth'],
  },
  {
    id: 'suta-gaddi',
    slug: 'suta-gaddi',
    title: {
      en: 'Suta Gaddi – Shaunaka & Suta Katha Sthal',
      hi: 'सूत गद्दी – शौनक ऋषि व सूत जी की कथा स्थली',
    },
    category: 'Rishi',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.3472, lng: 80.4918 },
    dayNumbers: [9],
    deitiesOrFigures: ['Suta Romaharshana / Ugrashrava', 'Shaunaka Rishi', '88,000 Sages'],
    spiritualSignificance: {
      en: 'The legendary amphitheater of divine discourses where 88,000 sages led by Shaunaka Rishi sat to listen to the 18 Puranas narrated by Suta Ji.',
      hi: 'शौनक ऋषि की अध्यक्षता में 88 हजार ऋषियों द्वारा सूत जी से 18 पुराणों एवं महाभारत की पावन कथाओं के श्रवण की अमर स्थली।',
    },
    traditionalLore: {
      en: 'This site established the guru-shishya satsang tradition that preserves oral Vedic knowledge across epochs.',
      hi: 'इस स्थान ने श्रुति व मौखिक ज्ञान परंपरा को युगों-युगों तक अक्षुण्ण बनाए रखने की नींव रखी।',
    },
    ritualsAndObservances: {
      en: ['Pravachan listening', 'Scriptural study', 'Guru vandana'],
      hi: ['प्रवचन व कथा श्रवण', 'पुराण पारायण', 'गुरु वंदना'],
    },
    sourceLabels: ['SCRIPTURAL REFERENCE', 'TRADITION'],
    relatedSiteSlugs: ['vyas-gaddi', 'mata-anandmayi-ashram'],
  },
  {
    id: 'rudravart-shivasthal',
    slug: 'rudravart-shivasthal',
    title: {
      en: 'Rudravart Shivasthal – The Submerged Lingam',
      hi: 'रुद्रावर्त शिवस्थल – जलमग्न शिवलिंग',
    },
    category: 'Shiva',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.3435, lng: 80.4955 },
    dayNumbers: [9],
    deitiesOrFigures: ['Lord Shiva (Rudra)'],
    spiritualSignificance: {
      en: 'A mystical shrine on the Gomti riverbed where the Shiva Lingam rests submerged under the swirling water currents. Offerings placed in the water are traditionally observed to be pulled in by the eddy currents.',
      hi: 'गोमती नदी के प्रवाह में स्थित रहस्यमय शिवस्थल जहाँ शिवलिंग जलमग्न रहता है। भंवर में अर्पित फूल व बेलपत्र जल में समाहित हो जाते हैं।',
    },
    traditionalLore: {
      en: 'Believed to be a live portal of Rudra’s cosmic energy, especially vibrant on Mondays, Pradosha, and Mahashivratri.',
      hi: 'भगवान रुद्र की जागृत ऊर्जा का स्थल, जहाँ सोमवार, प्रदोष एवं महाशिवरात्रि पर विशेष पूजा का विधान है।',
    },
    ritualsAndObservances: {
      en: ['River water abhisheka', 'Floating bilva patra offerings', 'Maha Mrityunjaya japa'],
      hi: ['जलधारा में बेलपत्र अर्पण', 'महामृत्युंजय मंत्र जप', 'रुद्राभिषेक'],
    },
    sourceLabels: ['LOCAL BELIEF', 'TRADITION'],
    relatedSiteSlugs: ['gomti-river', 'baba-bhuteshwar-nath'],
  },

  // --- Day 9 Filterable Sites from Section 20 of PDF ---
  {
    id: 'panch-prayag',
    slug: 'panch-prayag',
    title: {
      en: 'Panch Prayag Kund – Naimisharanya',
      hi: 'पंच प्रयाग कुंड – नैमिषारण्य',
    },
    category: 'Kund',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.3485, lng: 80.4895 },
    dayNumbers: [9],
    deitiesOrFigures: ['Panch Prayag Tirthas'],
    spiritualSignificance: {
      en: 'Sacred water reservoir where the subtle essence of the five holy confluences (Prayag, Devprayag, Rudraprayag, Karnaprayag, Nandprayag) are traditionally worshipped.',
      hi: 'पाँच पावन प्रयागों की आध्यात्मिक ऊर्जा का संगम कुंड।',
    },
    traditionalLore: {
      en: 'Taking holy water here is considered equivalent to visiting the five Himalayan prayags.',
      hi: 'यहाँ जल स्पर्श से पाँचों प्रयागों के दर्शन का पुण्य प्राप्त होता है।',
    },
    ritualsAndObservances: {
      en: ['Tirtha water anointment'],
      hi: ['पवित्र जल मार्जन'],
    },
    sourceLabels: ['TRADITION', 'LOCAL BELIEF'],
    relatedSiteSlugs: ['chakra-tirth'],
  },
  {
    id: 'kshetrikaya-devi',
    slug: 'kshetrikaya-devi',
    title: {
      en: 'Kshetrikaya Devi Temple',
      hi: 'क्षेत्रिकाया देवी मंदिर',
    },
    category: 'Shakti',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.3465, lng: 80.4908 },
    dayNumbers: [9],
    deitiesOrFigures: ['Kshetrikaya Devi'],
    spiritualSignificance: {
      en: 'Guardian deity presiding over the sanctified zone of Naimisharanya.',
      hi: 'नैमिषारण्य क्षेत्र की अधिष्ठात्री रक्षक देवी।',
    },
    traditionalLore: {
      en: 'Pilgrims pay respects to enter and circumambulate the sacred field with safety.',
      hi: 'क्षेत्र में प्रवेश एवं परिक्रमा की रक्षा हेतु देवी का पूजन किया जाता है।',
    },
    ritualsAndObservances: {
      en: ['Deepam offering'],
      hi: ['दीप अर्पण'],
    },
    sourceLabels: ['LOCAL BELIEF'],
    relatedSiteSlugs: ['lalita-shakti-peeth'],
  },
  {
    id: 'govardhan-nath',
    slug: 'govardhan-nath',
    title: {
      en: 'Govardhan Nath Temple',
      hi: 'गोवर्धन नाथ मंदिर',
    },
    category: 'Vishnu',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.3495, lng: 80.4875 },
    dayNumbers: [9],
    deitiesOrFigures: ['Lord Krishna (Giriraj)'],
    spiritualSignificance: {
      en: 'Honoring Lord Krishna’s lifting of Govardhan hill, bridging Braj and Naimish spiritual traditions.',
      hi: 'गोवर्धन धारी श्रीकृष्ण की आराधना का स्थल जो ब्रज और नैमिष परंपरा को जोड़ता है।',
    },
    traditionalLore: {
      en: 'Devotees offer Annakut during Kartik celebrations.',
      hi: 'कार्तिक मास में यहाँ अन्नकूट उत्सव का विशेष आयोजन होता है।',
    },
    ritualsAndObservances: {
      en: ['Govardhan parikrama stotra'],
      hi: ['गोवर्धन स्तोत्र पाठ'],
    },
    sourceLabels: ['TRADITION'],
    relatedSiteSlugs: ['chakra-tirth'],
  },
  {
    id: 'janki-kund',
    slug: 'janki-kund',
    title: {
      en: 'Janki Kund – Naimisharanya',
      hi: 'जानकी कुंड – नैमिषारण्य',
    },
    category: 'Kund',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.3445, lng: 80.492 },
    dayNumbers: [9],
    deitiesOrFigures: ['Maa Sita (Janki)'],
    spiritualSignificance: {
      en: 'Sanctified water pool associated with Mata Sita during her forest dwell period.',
      hi: 'माता सीता की पावन स्मृति से जुड़ा पवित्र कुंड।',
    },
    traditionalLore: {
      en: 'Believed to grant family purity and peace to women pilgrims.',
      hi: 'पारिवारिक सुख व शांति का आशीर्वाद प्रदान करने वाला कुंड।',
    },
    ritualsAndObservances: {
      en: ['Sita Ram japa'],
      hi: ['सीताराम नाम जप'],
    },
    sourceLabels: ['LOCAL BELIEF', 'TRADITION'],
    relatedSiteSlugs: ['gomti-river'],
  },
  {
    id: 'panchmukhi-hanuman',
    slug: 'panchmukhi-hanuman',
    title: {
      en: 'Panchmukhi Hanuman Mandir',
      hi: 'पंचमुखी हनुमान मंदिर',
    },
    category: 'Temple',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.3502, lng: 80.4868 },
    dayNumbers: [9],
    deitiesOrFigures: ['Panchmukhi Hanuman'],
    spiritualSignificance: {
      en: 'Enshrining the five-faced aspect of Hanuman (Hanuman, Narasimha, Garuda, Varaha, Hayagriva).',
      hi: 'हनुमान, नरसिंह, गरुड़, वराह एवं हयग्रीव स्वरूपों का समन्वित विग्रह।',
    },
    traditionalLore: {
      en: 'Invoked for dispelling fear and evil planetary afflictions.',
      hi: 'सर्वबाधा निवारण हेतु सिद्ध पीठ।',
    },
    ritualsAndObservances: {
      en: ['Panchamrit abhisheka'],
      hi: ['पंचामृत अभिषेक'],
    },
    sourceLabels: ['TRADITION'],
    relatedSiteSlugs: ['hanuman-gadhi'],
  },
  {
    id: 'manu-shatarupa-tapasthali',
    slug: 'manu-shatarupa-tapasthali',
    title: {
      en: 'Swayambhu Manu–Shatarupa Tapasthali',
      hi: 'स्वायम्भुव मनु–शतरूपा तपोस्थली',
    },
    category: 'Mythological',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.3478, lng: 80.4938 },
    dayNumbers: [9],
    deitiesOrFigures: ['Swayambhu Manu', 'Queen Shatarupa'],
    spiritualSignificance: {
      en: 'The penance seat where the first progenitors of mankind, Swayambhu Manu and Shatarupa, performed rigorous tapasya for thousands of years to receive the boon of Lord Vishnu taking birth as their son (Sri Rama).',
      hi: 'मानव जाति के आदि पूर्वज स्वायम्भुव मनु एवं शतरूपा की तपोस्थली, जहाँ उन्होंने भगवान विष्णु को पुत्र रूप में पाने हेतु सहस्रों वर्ष तप किया था।',
    },
    traditionalLore: {
      en: 'Tulsidas describes this spot in Ramcharitmanas as the root of the Ramayana incarnation.',
      hi: 'रामचरितमानस में गोस्वामी तुलसीदास जी ने इस तपस्या को रामावतार का मूल कारण बताया है।',
    },
    ritualsAndObservances: {
      en: ['Ramcharitmanas Balkand recitation'],
      hi: ['बालकाण्ड के मनु-तप प्रसंग का पाठ'],
    },
    sourceLabels: ['SCRIPTURAL REFERENCE', 'TRADITION'],
    relatedSiteSlugs: ['tulsidas-tapasthali', 'vyas-gaddi'],
  },
  {
    id: 'tulsidas-tapasthali',
    slug: 'tulsidas-tapasthali',
    title: {
      en: 'Goswami Tulsidas Tapasthali',
      hi: 'गोस्वामी तुलसीदास तपोस्थली',
    },
    category: 'Rishi',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.3488, lng: 80.4928 },
    dayNumbers: [9],
    deitiesOrFigures: ['Goswami Tulsidas'],
    spiritualSignificance: {
      en: 'Spot where the saint-poet Tulsidas resided in contemplative silence during his pilgrimage through Naimisharanya.',
      hi: 'संत कवि गोस्वामी तुलसीदास जी की साधना स्थली जहाँ उन्होंने नैमिषारण्य प्रवास के दौरान तप किया।',
    },
    traditionalLore: {
      en: 'Believed to inspire clarity in devotional composition.',
      hi: 'भक्ति एवं काव्य साधना हेतु प्रेरणादायी स्थल।',
    },
    ritualsAndObservances: {
      en: ['Hanuman Bahuk & Chaupai chanting'],
      hi: ['हनुमान बाहुक एवं चौपाई पाठ'],
    },
    sourceLabels: ['TRADITION'],
    relatedSiteSlugs: ['manu-shatarupa-tapasthali', 'vyas-gaddi'],
  },
  {
    id: 'saptarishi-tila',
    slug: 'saptarishi-tila',
    title: {
      en: 'Saptarishi Tila (The Seven Sages Mound)',
      hi: 'सप्तर्षि टीला',
    },
    category: 'Rishi',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.3515, lng: 80.489 },
    dayNumbers: [9],
    deitiesOrFigures: ['The Saptarishis (Seven Sages)'],
    spiritualSignificance: {
      en: 'Elevated ancient mound where the seven great cosmic sages sat in collective meditation.',
      hi: 'वह पावन टीला जहाँ सप्तर्षियों ने सामूहिक रूप से तप एवं ब्रह्मांडीय ध्यान किया था।',
    },
    traditionalLore: {
      en: 'Sages established energy grids for universal peace and cosmic order.',
      hi: 'विश्व शांति एवं धर्म की रक्षा हेतु स्थापित तपोभूमि।',
    },
    ritualsAndObservances: {
      en: ['Pranayama and quiet meditation'],
      hi: ['मौन प्राणायाम एवं ध्यान'],
    },
    sourceLabels: ['TRADITION'],
    relatedSiteSlugs: ['vyas-gaddi', 'suta-gaddi'],
  },
  {
    id: 'ancient-caves',
    slug: 'ancient-caves',
    title: {
      en: 'Ancient Sages Caves (Guha Sthal)',
      hi: 'प्राचीन ऋषि गुफाएँ',
    },
    category: 'Cave',
    district: 'सीतापुर (Sitapur)',
    coordinates: { lat: 27.342, lng: 80.493 },
    dayNumbers: [9],
    deitiesOrFigures: ['Ancient Hermits'],
    spiritualSignificance: {
      en: 'Natural rock and earth cave recesses along the river bluffs used for silent introspection and winter penance.',
      hi: 'गोमती के ऊँचे कगारों में स्थित प्राकृतिक गुफाएँ जहाँ तपस्वी एकांत साधना करते थे।',
    },
    traditionalLore: {
      en: 'Legends recount underground passages connecting ancient hermitage centers.',
      hi: 'प्राचीन आश्रमों को जोड़ने वाले गुप्त मार्गों की लोकमान्यता।',
    },
    ritualsAndObservances: {
      en: ['Silent walking'],
      hi: ['मौन पदयात्रा'],
    },
    sourceLabels: ['LOCAL BELIEF'],
    relatedSiteSlugs: ['gomti-river'],
  },
]

export const dashamahavidyas: DashamahavidyaDetail[] = [
  {
    number: 1,
    name: { en: 'Maa Kali', hi: 'माँ काली' },
    title: { en: 'The Goddess of Time & Transformation', hi: 'काल एवं संहार की अधिष्ठात्री' },
    iconography: {
      en: 'Dark-complexioned, standing upon Shiva, holding sword and severed head, wearing garland of skulls.',
      hi: 'नील-वर्णा, शिव के वक्ष पर आरूढ़, खड्ग और मुंड धारण किए हुए, मुंडमाला विभूषिता।',
    },
    significance: {
      en: 'Transcends time and eliminates ego, liberating the devotee from fear of death.',
      hi: 'काल की सीमा से परे, अहंकार का नाश करने वाली तथा अभय प्रदान करने वाली पराशक्ति।',
    },
    mantra: 'ॐ क्रीं कालिकायै नमः',
  },
  {
    number: 2,
    name: { en: 'Maa Tara', hi: 'माँ तारा' },
    title: { en: 'The Compassionate Deliverer', hi: 'भवसागर से तारने वाली' },
    iconography: {
      en: 'Blue-hued, standing on Shiva, holding scissor (kartari), sword, and lotus.',
      hi: 'नील-वर्णा, हाथ में कैंची (कर्तरी), खड्ग और कमल धारण किए हुए।',
    },
    significance: {
      en: 'Guides seekers safely across the tempestuous ocean of worldly illusions.',
      hi: 'संसार रूपी विषम भवसागर से पार लगाने वाली करुणामयी शक्ति।',
    },
    mantra: 'ॐ ह्रीं स्त्रीं हुं फट्',
  },
  {
    number: 3,
    name: { en: 'Maa Shodashi (Lalita)', hi: 'माँ षोडशी (ललिता)' },
    title: { en: 'The Radiant Queen of Sri Vidya', hi: 'श्रीविद्या की अधिष्ठात्री त्रिपुरसुंदरी' },
    iconography: {
      en: 'Golden-complexioned sixteen-year-old goddess seated upon lotus on Sadashiva couch, holding bow, arrow, noose, and goad.',
      hi: 'स्वर्णकांति, षोडशवर्षीया, कामेश्वर के अंक में आसीन, धनुष, बाण, पाश और अंकुश धारिणी।',
    },
    significance: {
      en: 'Bestows both spiritual liberation (Moksha) and harmonious cosmic bliss (Bhoga).',
      hi: 'भोग और मोक्ष दोनों का संतुलित समन्वय प्रदान करने वाली परम सुंदरी।',
    },
    mantra: 'ॐ ऐं ह्रीं श्रीं त्रिपुरसुंदर्यै नमः',
  },
  {
    number: 4,
    name: { en: 'Maa Bhuvaneshwari', hi: 'माँ भुवनेश्वरी' },
    title: { en: 'The Sovereign Mother of the Universe', hi: 'समस्त ब्रह्मांडों की स्वामिनी' },
    iconography: {
      en: 'Radiant as the rising sun, adorned with jewels, holding noose, goad, and showing abhaya/varada mudras.',
      hi: 'उदीयमान सूर्य सदृश आभा, पाश, अंकुश, वरद और अभय मुद्रा धारिणी।',
    },
    significance: {
      en: 'Embodies cosmic space, nurturing and sustaining all realms with unconditional grace.',
      hi: 'ब्रह्मांडीय आकाश का स्वरूप, सृष्टि का पालन और पोषण करने वाली जननी।',
    },
    mantra: 'ॐ ह्रीं भुवनेश्वर्यै नमः',
  },
  {
    number: 5,
    name: { en: 'Maa Chhinnamasta', hi: 'माँ छिन्नमस्ता' },
    title: { en: 'The Self-Decapitated Yogini of Kundalini', hi: 'प्रचंड कुंडलिनी शक्ति स्वरूपा' },
    iconography: {
      en: 'Holding her severed head in left hand, drinking from the central stream of nectar alongside attendants Varnini and Dakini.',
      hi: 'अपने हाथ में अपना शीश थामे, त्रिविध अमृतधारा का पान कराती योगिनी।',
    },
    significance: {
      en: 'Symbolizes mastery over mortal senses and supreme awakened kundalini consciousness.',
      hi: 'इंद्रिय संयम, अहंकार के संपूर्ण समर्पण एवं जागृत कुंडलिनी का प्रतीक।',
    },
    mantra: 'ॐ श्रीं ह्रीं क्लीं ऐं वज्र वैरोचनीये हुं हुं फट् स्वाहा',
  },
  {
    number: 6,
    name: { en: 'Maa Bhairavi', hi: 'माँ भैरवी' },
    title: { en: 'The Fierce Aspect of Kundalini Fire', hi: 'तप एवं तेज की ज्वाला' },
    iconography: {
      en: 'Holding book, rosary, displaying varada and abhaya mudras, draped in red silk with crescent moon.',
      hi: 'पुस्तक, जपमाला, वर और अभय मुद्रा धारिणी, बालार्क सदृश तेज।',
    },
    significance: {
      en: 'The purifying fire of tapas that incinerates mental distractions and desires.',
      hi: 'तपस्या की वह अग्नि जो अज्ञान और संशयों को भस्म कर देती है।',
    },
    mantra: 'ॐ ह्रीं भैरवी कलौं ह्रीं स्वाहा',
  },
  {
    number: 7,
    name: { en: 'Maa Dhumavati', hi: 'माँ धूमावती' },
    title: { en: 'The Elder Goddess of Transcendence', hi: 'अलक्ष्मी नाशिनी, वैराग्य प्रदायिनी' },
    iconography: {
      en: 'Tall, pale widow riding a crow or horseless chariot, holding winnowing basket.',
      hi: 'धूम्रवर्णा, वृद्ध स्वरूप, काकध्वज रथ पर आरूढ़, हाथ में सूप धारण किए हुए।',
    },
    significance: {
      en: 'Teaches that beyond sorrow and loss lies the unshakeable truth of non-attachment.',
      hi: 'कष्ट और विपत्ति के परे असीम वैराग्य और परम शांति का साक्षात्कार कराती हैं।',
    },
    mantra: 'ॐ धूं धूं धूमावत्यै फट्',
  },
  {
    number: 8,
    name: { en: 'Maa Bagalamukhi', hi: 'माँ बगलामुखी' },
    title: { en: 'The Paralyzer of Negative Forces (Pitambari)', hi: 'शत्रु नाशिनी पीताम्बरा' },
    iconography: {
      en: 'Golden-hued in yellow garments, pulling the tongue of ignorance with one hand and wielding mace with other.',
      hi: 'पीतवर्णा, पीताम्बर धारिणी, गदा और जिह्वा पकड़ने वाली स्तम्भन शक्ति।',
    },
    significance: {
      en: 'Stills speech, calms turbulent thoughts, and paralyzes external and internal adversaries.',
      hi: 'विवादों को शांत करने वाली तथा मन के नकारात्मक विचारों को स्तम्भित करने वाली।',
    },
    mantra: 'ॐ ह्लीं बगलामुखी सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा',
  },
  {
    number: 9,
    name: { en: 'Maa Matangi', hi: 'माँ मातंगी' },
    title: { en: 'The Goddess of Arts, Music & Speech', hi: 'वाणी, कला और संगीत की देवी' },
    iconography: {
      en: 'Emerald green-complexioned, seated on jewel throne playing the veena, accompanied by a green parrot.',
      hi: 'श्यामवर्णा, वीणा वादिनी, कर में वीणा और तोता लिए हुए सरस्वती स्वरूपा।',
    },
    significance: {
      en: 'Fosters eloquent expression, musical genius, and intuitive knowledge.',
      hi: 'मधुर वाणी, ललित कला और सूक्ष्म अंतर्ज्ञान की दात्री।',
    },
    mantra: 'ॐ ह्रीं क्लीं हूं मातंग्यै फट् स्वाहा',
  },
  {
    number: 10,
    name: { en: 'Maa Kamala', hi: 'माँ कमला' },
    title: { en: 'The Auspicious Lotus Goddess of Abundance', hi: 'महालक्ष्मी स्वरूप, श्री प्रदायिनी' },
    iconography: {
      en: 'Radiant golden mother seated upon golden lotus, being bathed by four celestial white elephants.',
      hi: 'स्वर्ण प्रभा, पद्म पर आसीन, चार दिव्य गजों द्वारा सुवर्ण घटों से अभिषिंचित।',
    },
    significance: {
      en: 'Embodies divine prosperity, auspiciousness, inner peace, and spiritual fulfillment.',
      hi: 'सौभाग्य, समृद्धि, आत्मिक संपन्नता और परमानंद की दात्री।',
    },
    mantra: 'ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद श्रीं ह्रीं श्रीं ॐ महालक्ष्म्यै नमः',
  },
]

export const trishaktiPowers: TrishaktiPower[] = [
  {
    power: 'ichha',
    name: { en: 'Ichha Shakti (Will Power)', hi: 'इच्छा शक्ति (संकल्प)' },
    deity: { en: 'Lord Ganesha', hi: 'श्री गणेश' },
    meaning: {
      en: 'The divine intent and pure will that initiates all sacred endeavors without obstacles.',
      hi: 'दिव्य संकल्प जो समस्त शुभ कर्मों का शुभारंभ निर्विघ्न करता है।',
    },
    symbolism: {
      en: 'Positioned at the entry portal of Trishakti Dham, guiding the pilgrim to begin with auspicious clarity.',
      hi: 'प्रवेश द्वार पर प्रतिष्ठित, जो परिक्रमार्थी को पावन संकल्प के साथ प्रवेश की प्रेरणा देते हैं।',
    },
  },
  {
    power: 'jnana',
    name: { en: 'Jnana Shakti (Wisdom Power)', hi: 'ज्ञान शक्ति (चेतना)' },
    deity: { en: 'Lord Vishnu', hi: 'भगवान विष्णु' },
    meaning: {
      en: 'The sustaining wisdom that protects cosmic balance and illuminates truth.',
      hi: 'पालन और संरक्षण करने वाली वह चेतना जो सत्य और धर्म को स्थिर रखती है।',
    },
    symbolism: {
      en: 'Enshrined as the grand white idol at the central sanctum, radiating peace and equilibrium.',
      hi: 'केंद्र में स्थापित श्वेत मनोहारी विग्रह, जो शांति, संतुलन और संरक्षण का प्रतीक है।',
    },
  },
  {
    power: 'kriya',
    name: { en: 'Kriya Shakti (Action Power)', hi: 'क्रिया शक्ति (गतिशीलता)' },
    deity: { en: 'Maa Durga', hi: 'माँ दुर्गा' },
    meaning: {
      en: 'The dynamic force and divine courage that converts spiritual aspirations into righteous action.',
      hi: 'साहस और पराक्रम की वह ऊर्जा जो संकल्प को कर्म में परिवर्तित करती है।',
    },
    symbolism: {
      en: 'Ascended via twin staircases, commanding strength to overcome inner and outer impediments.',
      hi: 'सीढ़ियों द्वारा माता के मंदिर तक पहुँच, जो जीवन में बाधाओं को लांघकर सिद्धि पाने का मार्ग है।',
    },
  },
]

// Helper Functions
export function getDayByNumber(dayNumber: number): ParikramaDay | undefined {
  return parikramaDays.find((d) => d.dayNumber === dayNumber)
}

export function getSiteBySlug(slug: string): SacredSiteDetail | undefined {
  return sacredSiteDetails.find((s) => s.slug === slug)
}

export function getSitesByDay(dayNumber: number): SacredSiteDetail[] {
  return sacredSiteDetails.filter((s) => s.dayNumbers.includes(dayNumber))
}

export function getSitesByCategory(category: SiteCategory): SacredSiteDetail[] {
  return sacredSiteDetails.filter((s) => s.category === category)
}
