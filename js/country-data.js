/* ============================================
   COUNTRY DATA CONFIGURATION
   Complete data for all countries
   ============================================ */

const COUNTRY_DATA = {
  russia: {
    name: "Russia",
    flag: "assets/images/flags/russia.png",
    heroTitle: "MBBS in Russia",
    heroDescription: "Your Gateway to Quality Medical Education with Affordable Fees and Global Recognition",
    
    backgroundImage: "assets/images/monuments/russia.jpg",
    backgroundTitle: "Experience Excellence in Russia",
    backgroundDescription:
      "Study in world-renowned medical universities with state-of-the-art facilities and comprehensive clinical training",

    benefits: [
      {
        icon: "🎓",
        title: "World-Class Education",
        description:
          "Top-ranked medical universities recognized by WHO, MCI, and ECFMG with experienced faculty and modern curriculum"
      },
      {
        icon: "💰",
        title: "Affordable Fees",
        description:
          "Complete MBBS degree at just 15-25 Lakhs INR for the entire course, much lower than private Indian colleges"
      },
      
      
    ],

    universities: [
       {
    id: "uni-nosma",
    name: "North Ossetian State Medical Academy",
    logo: "assets/images/colleges/nosma-russia.webp",
    location: "Vladikavkaz, North Ossetia–Alania, Russia",
    fees: "Not specified",
    duration: "6 Years",
    recognition: "Listed in WHO World Directory of Medical Schools",
    about: "North Ossetian State Medical Academy (NOSMA), established in 1939, is a public medical institution located in Vladikavkaz, Russia. It is one of the leading higher education institutions in the North Caucasus and has been training international students since 1991. Graduates successfully work across Russia and many other countries including India, Egypt, Morocco, Syria, Lebanon, Sudan, Zimbabwe, Greece, and the USA.",
    faculty: "More than 999 academic staff including Doctors and Professors of Medical Sciences. The academy offers education through 6 major medical faculties and provides instruction across 51 clinical specialties with annual specialization and advanced training in about 25 disciplines.",
    campus: "NOSMA has its own clinic and stomatological polyclinic, access to over 6300 hospital beds, modern laboratories, biomedical research centers, a large library with nearly half a million books, electronic reading rooms, simulation labs with phantoms and clinical equipment, hostels within walking distance, cafeteria, sports complexes, fitness centers, museums, and secure campus facilities.",
    studentLife: "Students enjoy a vibrant campus life with sports clubs, fitness centers, shooting gallery, cultural programs, scientific societies, conferences, workshops, and international exchange opportunities. Accommodation is available in international hostels, and students participate in extracurricular, research, and cultural activities.",
    website: "http://sogma.ru",
    brochure: "assets/brochures/nosma-russia.pdf"
  },
       {
    id: "uni-kbsu",
    name: "Kabardino-Balkarian State University",
    logo: "assets/images/colleges/kbsu-russia.jpeg",
    location: "Nalchik, Kabardino-Balkarian Republic, Russia",
    fees: "Approx. 14,95,200 RUB (total 6 years)",
    duration: "6 Years",
    recognition: "Ministry of Health of Russian Federation, WHO listed",
    about: "Kabardino-Balkarian State University (KBSU), established in 1957, is a leading scientific, educational, informational, social, and cultural university located in Nalchik, Russia. The university has trained over 14,500 students and is recognized for its strong academic foundation, international collaborations, and modern teaching methodologies. KBSU has received multiple awards including recognition among Russia’s top universities and global aggregated rankings.",
    faculty: "KBSU is supported by a highly qualified teaching staff and academic researchers. The university integrates classic and modern teaching methods, with experienced professors across medical and scientific disciplines, ensuring strong theoretical knowledge combined with practical exposure.",
    campus: "The university offers state-of-the-art classrooms, lecture halls, specialized research laboratories, digital libraries, academic databases, computer labs, and language labs. KBSU has 11 dormitories, well-equipped libraries, modern infrastructure, and comprehensive academic facilities designed to support both education and personal growth.",
    studentLife: "Students enjoy vibrant campus life with clubs, organizations, sports facilities, cultural festivals, international food events, leadership programs, and volunteer opportunities. KBSU promotes multicultural exchange and provides strong student support through extracurricular activities and campus-wide events.",
    website: "https://eng.kbsu.ru/",
    brochure: "assets/brochures/kbsu-nalchik-russia.pdf"
  },
      {
    id: "uni-osmu",
    name: "Orenburg State Medical University",
    logo: "assets/images/colleges/osmu-russia.jpeg",
    location: "Orenburg, Russia",
    fees: "Not specified", 
    duration: "6 Years",
    recognition: "WHO, MCI (NMC) approved, recognized in USA and Canada",
    about: "Founded in 1944, Orenburg State Medical University (OrSMU) is one of the oldest and most globally recognized medical universities in Russia[cite: 3, 10]. [cite_start]It is consistently ranked among the top medical universities in Russia, recently securing the 2nd position in a top 100 ranking.",
    faculty: "The university features 47 departments staffed by approximately 300 professors, associate professors, and doctors[cite: 16]. [cite_start]The faculty provides high-quality medical education with a balance of experience and expertise.",
    campus: "The campus offers updated infrastructure and modern equipment, including a Center of Simulation and various teaching hospitals and clinics[cite: 1, 11]. [cite_start]Students are provided with extensive opportunities for practical learning and experiments beyond traditional classrooms.",
    studentLife: "Student life includes a vibrant community with various societies and clubs for sports, culture, languages, dance, music, and photography[cite: 6]. [cite_start]The university also provides a fully equipped gymnasium and celebrates traditional Indian functions like Diwali and Navaratri.",
    website: "https://www.orgma.ru",
    brochure: "assets/brochures/osmu-brochure.pdf"
  },
  {
  id: "uni-isu",
  name: "Ingush State University",
  logo: "assets/images/colleges/isu-russia.png",
  location: "Magas, Republic of Ingushetia, Russia",
  fees: "2.5-5",
  duration: "5.8 Years",
  recognition: "NMC & WHO approved",
  about: "Ingush State University is the first university in the history of Ingushetia, founded in 1994. It is one of the youngest universities in the Russian Federation with 7 faculties including medical, and 26 departments. The university has 5,327 students and 315 teachers including 34 professors and 124 associate professors. The Faculty of Medicine was founded in 1997 and provides training in General Medicine with DOCTOR (M.D PHYSICIAN) qualification.",
  faculty: "Highly qualified teaching staff of 508 teachers serving 8,978 students. Faculty includes renowned scientists like Dr. M.B. Bolgucheva (Head of Human Anatomy), PHD Associate Professor Dr. R.T. DIDIGOVA (Pathological Anatomy), Dr. Z.M. GATAGAZHEVA (Obstetrics and Gynecology), and many other experienced professors. Professional development takes place at the first medical academy named after IM Sechenov, Moscow. Department staff are full-time and freelance chief specialists of the Ministry of Health.",
  campus: "Modern educational infrastructure with laboratory and experimental complexes, editorial and publishing center, and comprehensive library facilities. The main building is located in Magas city. The university has modern educational technologies with Internet center and research facilities. Campus features state-of-the-art medical facilities for practical training and clinical disciplines. Students have access to advanced teaching aids and methodological resources.",
  studentLife: "Ingush residence hall accommodates 1,500 students in shared single-double rooms (2, 3, 4-seater). Facilities include biometric attendance, CCTV surveillance, separate kitchens, washrooms with single cabinet showers, laundry room, reading rooms, TV/DVD room, library, canteen, computer rooms, study rooms with Wi-Fi, guest hotel, gym, and sports complex with swimming, volleyball, basketball, wrestling, taekwondo, martial arts sections. Indian mess facilities and restaurants available within walking distance. Cultural events, festivals, and extracurricular activities organized regularly. Multicultural environment with strong support for international students.",
  website: "https://www.inggu.ru",
  brochure: "assets/brochures/isu-brochure.pdf"
},
 {
  id: "uni-ssmu",
  name: "Samara State Medical University (SamSMU)",
  logo: "assets/images/colleges/ssmu-russia.jpeg",
  location: "Samara, Samara Oblast, Russia",
  fees: "16-22",
  duration: "6 Years",
  recognition: "WHO, NMC approved, IAAR International Accreditation",
  about: "Samara State Medical University has been following an innovative path of development for over 100 years and is currently one of the leading medical universities in Russia. Winner of the federal Priority 2030 competition for strategic academic leadership. The university is ranked in Top-200 universities worldwide by THE, 4th position among medical universities in Russia (RAEX), and Top 10% of best universities in the world. Students from 34 regions of Russian Federation and 32 countries study at the university. General Medicine specialty is taught in English with international accreditation.",
  faculty: "Over 750 highly qualified teachers including 1 Academician of the Russian Academy of Sciences, 1 Corresponding Member of the Russian Academy of Sciences, 1 Professor of the Russian Academy of Sciences, 180 Doctors of Sciences, and 461 Candidates of Sciences. 85% of academic staff have academic degrees. Led by Professor Alexander V. Kolsanov (Rector, Doctor of Medical Sciences) and Academician Gennady P. Kotelnikov (President and Honorary Rector, winner of Russia's State Prize). Century-old teaching traditions with leading scientific-pedagogical schools.",
  campus: "Modern educational complex with 7 academic buildings and 80 departments spread across the campus. State-of-the-art facilities including 24 clinical bases in leading medical institutions of Samara and region. Advanced infrastructure featuring Laboratory for synthesis of metal-organic matrix polymers, Biotech Center, Molecular genetic biology lab, Research Institutes of Cardiology, Neuroscience, Bionics, Hematology. Library with unique collection of specialized medical literature. Sports facilities including sports hall, gym, and two outdoor sports grounds. Own SamSMU Clinics comprising 57 medical units providing care in 50+ specialized areas.",
  studentLife: "Vibrant campus life with over 6,000 students, more than 500 cultural, creative, scientific, sports and social events annually. 4 comfortable dormitories accommodating 2,500 students. 10 athletic societies, 20 creative teams, 9 student societies for extracurricular activities. 'Medic' food hall with dining facilities. Library access, social support services. Volunteering Center 'Medical Volunteers'. More than 60 student scientific societies with 700+ students participating in Olympiads and 800+ publications yearly. Multicultural environment with international students. Student welfare includes comfortable accommodation with all necessary amenities.",
  website: "https://samarastatemeduniversity.com",
  brochure: "assets/brochures/samsmu-brochure.pdf"
},
    ],

    eligibility: [
      "Minimum 50% marks in Physics, Chemistry, and Biology in 12th grade (40% for reserved categories)",
      "NEET qualification is mandatory for Indian students",
      "Age should be 17 years or above as on 31st December of admission year",
      "Valid passport with minimum 18 months validity",
      "No maximum age limit for MBBS admission in Russia"
    ],

    documents: {
      academic: [
        "10th and 12th Mark sheets and Certificates",
        "NEET Scorecard and Admit Card",
        "Medical Fitness Certificate",
        "Birth Certificate"
      ],
      identity: [
        "Valid Passport (minimum 18 months validity)",
        "Passport size photographs (white background)",
        "Aadhar Card copy",
        "PAN Card copy (if available)"
      ],
      additional: [
        "Migration Certificate from School",
        "Transfer Certificate from School",
        "HIV Test Report (negative)",
        "COVID-19 Vaccination Certificate"
      ]
    },

    admissionProcess: [
      {
        step: 1,
        title: "Free Counselling",
        description: "Get expert guidance on university selection, course details, and admission requirements from our experienced counselors"
      },
      {
        step: 2,
        title: "Document Submission",
        description: "Submit all required documents including academic certificates, passport, NEET scorecard, and medical certificates"
      },
      {
        step: 3,
        title: "University Application",
        description: "We process your application to your chosen university and ensure all formalities are completed correctly"
      },
      {
        step: 4,
        title: "Admission Letter",
        description: "Receive official invitation letter from the university within 15-20 days of application submission"
      },
      {
        step: 5,
        title: "Visa Processing",
        description: "Complete visa application with our assistance, embassy appointment, and receive student visa within 30-45 days"
      },
      {
        step: 6,
        title: "Departure & Arrival",
        description: "Pre-departure briefing, flight booking assistance, and airport pickup arrangements in Russia"
      }
    ],

    feeComparison: {
      totalCost: "15-25",
      mediumOfTeaching: "English (fully)",
      practicalTraining: "From Day 1",
      livingCost: "8,000-15,000",
      globalRecognition: "WHO, ECFMG, WDOMS approved",
      hostelMess: "Included, Indian mess available"
    }
  },

  india: {
    name: "India",
    flag: "assets/images/flags/india-flag.png",
    heroTitle: "MBBS in India",
    heroDescription: "Pursue Medical Education in Premier Indian Medical Colleges and AIIMS Institutions",

    backgroundImage: "assets/images/countries/india-bg.jpg",
    backgroundTitle: "Excellence in Indian Medical Education",
    backgroundDescription: "Study at prestigious AIIMS and government medical colleges with world-class faculty and comprehensive training",

    benefits: [
      {
        icon: "🎓",
        title: "Premier Institutions",
        description: "AIIMS, JIPMER, and top government medical colleges with cutting-edge infrastructure and research facilities"
      },
      {
        icon: "💰",
        title: "Subsidized Government Fees",
        description: "Government medical colleges offer affordable education at 50,000-5 Lakhs for the entire course"
      },
      {
        icon: "🌍",
        title: "Recognized Globally",
        description: "MCI/NMC recognized degrees accepted worldwide with opportunities for postgraduate education abroad"
      },
      {
        icon: "🏥",
        title: "Diverse Clinical Cases",
        description: "Exposure to wide variety of medical cases and diseases unique to tropical medicine and Indian healthcare"
      },
      {
        icon: "🍽️",
        title: "Home Country Advantage",
        description: "No language barrier, familiar culture, close to family, and diverse food options across campuses"
      },
      {
        icon: "✈️",
        title: "NEET Based Admission",
        description: "Transparent merit-based admission through NEET examination with counseling process by NMC"
      }
    ],

    universities: [
      {
        id: "uni-1",
        name: "AIIMS Delhi",
        logo: "assets/images/universities/aiims-delhi-logo.png",
        location: "New Delhi, India",
        fees: "1-2",
        duration: "5.5 Years",
        recognition: "MCI/NMC approved",
        about: "All India Institute of Medical Sciences, New Delhi is India's premier medical institution, established in 1956. It's renowned for excellence in medical education, research, and patient care.",
        faculty: "World-renowned faculty members with international recognition, extensive research publications, and expertise across all medical specialties.",
        campus: "State-of-the-art facilities including advanced laboratories, modern operation theaters, comprehensive library, and 2,500+ bed teaching hospital.",
        studentLife: "Vibrant campus life with numerous student societies, sports facilities, cultural events, and excellent hostel accommodation.",
        website: "https://www.aiims.edu",
        brochure: "assets/brochures/aiims-delhi-brochure.pdf"
      },
      {
        id: "uni-2",
        name: "Maulana Azad Medical College",
        logo: "assets/images/universities/mamc-logo.png",
        location: "New Delhi, India",
        fees: "0.5-1",
        duration: "5.5 Years",
        recognition: "MCI/NMC approved",
        about: "Maulana Azad Medical College is one of the most prestigious medical colleges in India, affiliated with University of Delhi and associated with excellent hospitals.",
        faculty: "Experienced faculty with specialization in various medical fields, actively involved in research and publications in national and international journals.",
        campus: "Modern infrastructure with well-equipped departments, advanced diagnostic facilities, and association with multiple super-specialty hospitals.",
        studentLife: "Active student community with cultural festivals, academic competitions, and comprehensive hostel facilities with mess services.",
        website: "https://mamc.ac.in",
        brochure: "assets/brochures/mamc-brochure.pdf"
      },
      {
        id: "uni-3",
        name: "Armed Forces Medical College",
        logo: "assets/images/universities/afmc-logo.png",
        location: "Pune, Maharashtra",
        fees: "0.5-1",
        duration: "5.5 Years",
        recognition: "MCI/NMC approved",
        about: "Armed Forces Medical College is a premier medical institution run by the Indian Armed Forces, offering world-class medical education with military discipline.",
        faculty: "Expert faculty from Armed Forces Medical Services with extensive clinical and teaching experience in various medical specialties.",
        campus: "Excellent infrastructure with modern teaching facilities, well-equipped laboratories, and association with Military Hospital for clinical training.",
        studentLife: "Disciplined environment with focus on leadership development, physical fitness, and character building along with academic excellence.",
        website: "https://afmc.nic.in",
        brochure: "assets/brochures/afmc-brochure.pdf"
      }
    ],

    eligibility: [
      "Minimum 50% marks in Physics, Chemistry, and Biology in 12th grade (40% for reserved categories)",
      "NEET qualification is mandatory with minimum qualifying percentile as per category",
      "Age should be 17 years as on 31st December of admission year",
      "Maximum age limit: 25 years for general category, 30 years for reserved categories",
      "Indian citizen or OCI card holder eligible for state quota counseling"
    ],

    documents: {
      academic: [
        "10th and 12th Mark sheets and Certificates",
        "NEET Scorecard and Admit Card",
        "Provisional Allotment Letter from MCC/State",
        "Character Certificate from School"
      ],
      identity: [
        "Aadhar Card",
        "PAN Card (if available)",
        "Passport size photographs",
        "Caste Certificate (if applicable)"
      ],
      additional: [
        "Domicile Certificate for state quota",
        "Income Certificate (if applicable)",
        "EWS Certificate (if applicable)",
        "Medical Fitness Certificate"
      ]
    },

    admissionProcess: [
      {
        step: 1,
        title: "NEET Examination",
        description: "Appear for NEET-UG examination conducted by NTA. Qualify with minimum percentile as per your category"
      },
      {
        step: 2,
        title: "Counselling Registration",
        description: "Register for MCC counseling (All India Quota) and/or State counseling based on your eligibility and preference"
      },
      {
        step: 3,
        title: "Choice Filling",
        description: "Fill your college and course preferences carefully based on previous year cutoffs and your NEET rank"
      },
      {
        step: 4,
        title: "Seat Allotment",
        description: "Receive seat allotment based on your NEET rank, category, and filled preferences through counseling rounds"
      },
      {
        step: 5,
        title: "Document Verification",
        description: "Complete document verification at allotted college with all original documents and required fees"
      },
      {
        step: 6,
        title: "College Admission",
        description: "Submit fees, complete admission formalities, and join your allotted medical college to begin your MBBS journey"
      }
    ],

    feeComparison: {
      totalCost: "0.5-100",
      mediumOfTeaching: "English + Regional",
      practicalTraining: "From 2nd year onwards",
      livingCost: "10,000-25,000",
      globalRecognition: "MCI/NMC approved, limited international recognition",
      hostelMess: "Varies by college, usually available"
    }
    
  },

  kazakhstan: {
    name: "Kazakhstan",
    flag: "assets/images/flags/kazakhstan-flag.png",
    heroTitle: "MBBS in Kazakhstan",
    heroDescription: "Affordable Medical Education with International Standards and Modern Infrastructure",

    backgroundImage: "assets/images/countries/kazakhstan-bg.jpg",
    backgroundTitle: "Study Medicine in Kazakhstan",
    backgroundDescription: "Experience quality medical education in Central Asia's most developed economy with modern facilities and English medium teaching",

    benefits: [
      {
        icon: "🎓",
        title: "Quality Education",
        description: "WHO and MCI approved universities with international curriculum and experienced faculty members"
      },
      {
        icon: "💰",
        title: "Low Cost Education",
        description: "Complete MBBS at just 12-20 Lakhs INR with affordable living costs and no donation fees"
      },
      {
        icon: "🌍",
        title: "Global Recognition",
        description: "Degrees recognized by WHO, WDOMS, ECFMG, and eligible for FMGE/NMC screening examination"
      },
      {
        icon: "🏥",
        title: "Practical Training",
        description: "Early clinical exposure with modern simulation labs and access to well-equipped teaching hospitals"
      },
      {
        icon: "🍽️",
        title: "Indian Community",
        description: "Large Indian student community with Indian mess facilities and familiar food options available"
      },
      {
        icon: "✈️",
        title: "Simple Admission",
        description: "Direct admission without entrance exam, quick visa processing, and hassle-free documentation"
      }
    ],

    universities: [
      {
        id: "uni-1",
        name: "Al-Farabi Kazakh National University",
        logo: "assets/images/universities/alfarabi-logo.png",
        location: "Almaty, Kazakhstan",
        fees: "15-18",
        duration: "6 Years",
        recognition: "WHO, MCI approved",
        about: "Al-Farabi Kazakh National University is the leading higher education institution in Kazakhstan, offering comprehensive medical programs with modern teaching methodologies.",
        faculty: "Highly qualified international faculty with vast experience in medical education and research, ensuring quality teaching and mentorship.",
        campus: "Modern campus with advanced medical laboratories, digital library, simulation centers, and comfortable hostel facilities with Indian mess options.",
        studentLife: "Multicultural environment with students from over 50 countries, active student clubs, sports facilities, and dedicated support for international students.",
        website: "https://www.kaznu.kz/en",
        brochure: "assets/brochures/alfarabi-brochure.pdf"
      },
      {
        id: "uni-2",
        name: "Kazakh National Medical University",
        logo: "assets/images/universities/knmu-logo.png",
        location: "Almaty, Kazakhstan",
        fees: "14-17",
        duration: "6 Years",
        recognition: "WHO, MCI approved",
        about: "Kazakh National Medical University is one of the oldest and most prestigious medical universities in Central Asia with strong academic reputation.",
        faculty: "Experienced medical professionals and academicians committed to providing quality education through modern teaching techniques and practical training.",
        campus: "Well-equipped campus with modern infrastructure, affiliated teaching hospitals, research laboratories, and student-friendly accommodation facilities.",
        studentLife: "Vibrant campus life with cultural events, academic seminars, sports activities, and strong Indian student association providing home-like environment.",
        website: "https://kaznmu.kz/eng/",
        brochure: "assets/brochures/knmu-brochure.pdf"
      },
      {
        id: "uni-3",
        name: "South Kazakhstan Medical Academy",
        logo: "assets/images/universities/skma-logo.png",
        location: "Shymkent, Kazakhstan",
        fees: "12-15",
        duration: "6 Years",
        recognition: "WHO, MCI approved",
        about: "South Kazakhstan Medical Academy offers quality medical education with emphasis on practical skills and clinical training in a supportive environment.",
        faculty: "Dedicated teaching staff with international qualifications, focused on student success through personalized attention and comprehensive curriculum.",
        campus: "Modern facilities including simulation labs, digital classrooms, well-stocked library, and comfortable hostels with Indian food availability.",
        studentLife: "Friendly atmosphere for international students with cultural exchange programs, extracurricular activities, and excellent support services.",
        website: "https://ukma.edu.kz",
        brochure: "assets/brochures/skma-brochure.pdf"
      }
    ],

    eligibility: [
      "Minimum 50% marks in PCB in 12th grade (40% for reserved categories)",
      "NEET qualification mandatory for Indian students",
      "Age 17 years or above as on 31st December of admission year",
      "Valid passport with minimum 2 years validity",
      "Medically fit as per university requirements"
    ],

    documents: {
      academic: [
        "10th and 12th Mark sheets and Certificates",
        "NEET Scorecard and Admit Card",
        "Medical Fitness Certificate",
        "Birth Certificate (attested)"
      ],
      identity: [
        "Valid Passport (minimum 2 years validity)",
        "Passport size photographs (white background)",
        "Aadhar Card and PAN Card copies",
        "Parents' Passport copies"
      ],
      additional: [
        "Migration Certificate",
        "Transfer Certificate",
        "HIV Negative Certificate",
        "COVID-19 Vaccination Certificate",
        "Bank Statement (for visa)"
      ]
    },

    admissionProcess: [
      {
        step: 1,
        title: "University Selection",
        description: "Choose your preferred university with expert guidance based on budget, location, and academic preferences"
      },
      {
        step: 2,
        title: "Document Preparation",
        description: "Prepare and submit all required documents including academic certificates, passport, and medical reports"
      },
      {
        step: 3,
        title: "Invitation Letter",
        description: "Receive official invitation letter from university within 10-15 days of application submission"
      },
      {
        step: 4,
        title: "Visa Application",
        description: "Apply for student visa at Kazakhstan Embassy with invitation letter and required documents"
      },
      {
        step: 5,
        title: "Visa Approval",
        description: "Receive student visa within 20-30 days, complete pre-departure formalities and travel arrangements"
      },
      {
        step: 6,
        title: "University Enrollment",
        description: "Arrive in Kazakhstan, complete university registration, hostel allocation, and begin your medical studies"
      }
    ],

    feeComparison: {
      totalCost: "12-20",
      mediumOfTeaching: "English (fully)",
      practicalTraining: "From 1st year",
      livingCost: "6,000-12,000",
      globalRecognition: "WHO, ECFMG approved",
      hostelMess: "Included, Indian mess available"
    }
  },

  kyrgyzstan: {
    name: "Kyrgyzstan",
    flag: "assets/images/flags/kyrgyzstan-flag.png",
    heroTitle: "MBBS in Kyrgyzstan",
    heroDescription: "Budget-Friendly Medical Education with WHO Recognition and Quality Infrastructure",

    backgroundImage: "assets/images/countries/kyrgyzstan-bg.jpg",
    backgroundTitle: "Affordable Medical Education in Kyrgyzstan",
    backgroundDescription: "Study MBBS in the heart of Central Asia with low fees, English medium instruction, and beautiful mountain landscapes",

    benefits: [
      {
        icon: "🎓",
        title: "Recognized Universities",
        description: "WHO, MCI, and ECFMG approved medical universities with quality education standards"
      },
      {
        icon: "💰",
        title: "Most Affordable",
        description: "Complete MBBS at just 10-18 Lakhs INR, one of the lowest fees globally for quality medical education"
      },
      {
        icon: "🌍",
        title: "International Recognition",
        description: "Degrees recognized worldwide, eligible for FMGE/NMC screening and USMLE examinations"
      },
      {
        icon: "🏥",
        title: "Hands-on Training",
        description: "Extensive clinical exposure from first year with modern laboratories and affiliated hospitals"
      },
      {
        icon: "🍽️",
        title: "Indian Friendly",
        description: "Large Indian student population, Indian mess facilities, and vegetarian food easily available"
      },
      {
        icon: "✈️",
        title: "Easy Process",
        description: "No entrance exam required, simple admission, quick visa processing, and direct university admission"
      }
    ],

    universities: [
      {
  id: "uni-11",
  name: "International University of Science and Medicine (IUSM)",
  logo: "assets/images/colleges/iusm-uzbek.jpeg",
  location: "Bishkek, Kyrgyzstan",
  fees: "13-16",
  duration: "6 Years (5 Years + 1 Year Internship)",
  recognition: "WHO, WDOMS, FAIMER, WFME, NMC approved, Ministry of Justice of Kyrgyz Republic",
  about: "International University of Science and Medicine (IUSM) was established in 2020 in the capital city Bishkek under the National Development Strategy of the Kyrgyz Republic and UN's Sustainable Development Goals. Despite being a new institution, IUSM has quickly established itself with a mission to reform the Kyrgyz education system and create competitive atmosphere among regional universities. The 5-year English Language MD program (equivalent to MBBS in India) is ranked among the best in the nation. IUSM has already produced 3 graduation batches (Feb 2022, July 2022, Feb 2023) with impressive FMGE results - 6 students qualified out of 40 who appeared in 1st attempt. The university combines innovative teaching approaches with latest technology in medical education.",
  faculty: "Highly qualified academic faculty comprising teachers, scientists, and physicians who are leading experts in their fields. Faculty includes both local and international professors with expertise in various medical disciplines. The teaching staff includes Dr. Alim Khan (Rector), Dr. Saurabh Kumar, Dr. Vivek Kumar Singh, Dr. SM Alam Sarmad, and Dr. Muhammad Zarshad among others. Excellent student-teacher ratio of 1:10 ensuring personalized attention and quality learning. Faculty uses innovative teaching strategies and has scope for incorporating novel educational methodologies. All lectures and practical classes conducted in English language with experienced educators dedicated to producing successful medical professionals.",
  campus: "Modern educational institution with state-of-the-art infrastructure established in 2020. Campus features well-equipped practical center with modern equipment and relevant teaching aids for mastering primary practical skills. Advanced laboratories, lecture halls, and simulation facilities for comprehensive medical training. University has 1,200 bed super specialty hospital equipped with sophisticated medical equipment providing extensive clinical exposure. Total capacity of 650 seats for medical program. Campus designed to provide high-quality training environment with focus on both theoretical and practical applications. Library with comprehensive medical literature and digital resources. All facilities meet international standards for medical education.",
  studentLife: "Vibrant multicultural campus with students from many countries including India, Nepal, Afghanistan, Bangladesh, Vietnam, Moldavia, Belarus, Syria, and others. Comfortable hostel accommodation with separate facilities for boys and girls. Hostel and mess fees: USD 500 and USD 1,200 per year respectively. Vegetarian and non-vegetarian food similar to Indian cuisines available in hostels ensuring easy adaptation. Kyrgyz people are warm, friendly, and hospitable with culture of tolerance and open-mindedness. Affordable cost of living comparable to India. Students encouraged to participate in sports and extracurricular activities ensuring holistic personality development. Opportunities to participate in international conferences and seminars. Safe and secure environment for international students. Academic sessions start in September with fall and winter semester intakes (until October 30 and January 30 respectively).",
  website: "https://www.iusm.edu.kg",
  brochure: "assets/brochures/iusm-brochure.pdf"
},
      {
        id: "uni-2",
        name: "Osh State University",
        logo: "assets/images/universities/osu-logo.png",
        location: "Osh, Kyrgyzstan",
        fees: "11-14",
        duration: "6 Years",
        recognition: "WHO, MCI approved",
        about: "Osh State University Medical Faculty offers quality medical education with focus on practical skills and affordable fees in a safe environment.",
        faculty: "Qualified teaching staff dedicated to student success with emphasis on clinical training and evidence-based medical education.",
        campus: "Well-maintained campus with modern facilities, teaching hospitals for clinical practice, library, and comfortable accommodation.",
        studentLife: "Welcoming environment for international students with active student associations, cultural programs, and recreational facilities.",
        website: "https://oshsu.kg/en",
        brochure: "assets/brochures/osu-brochure.pdf"
      },
      {
        id: "uni-3",
        name: "Asian Medical Institute",
        logo: "assets/images/universities/ami-logo.png",
        location: "Kant, Kyrgyzstan",
        fees: "10-13",
        duration: "6 Years",
        recognition: "WHO, MCI approved",
        about: "Asian Medical Institute is a growing medical university offering modern medical education with international standards at very affordable fees.",
        faculty: "Young and dynamic faculty with modern teaching approaches, committed to providing quality education and mentorship.",
        campus: "New campus with contemporary facilities, advanced laboratories, modern hostels, and Indian food options readily available.",
        studentLife: "Growing Indian student community with supportive environment, cultural activities, and peaceful surroundings for focused studies.",
        website: "https://ami.kg",
        brochure: "assets/brochures/ami-brochure.pdf"
      }
    ],

    eligibility: [
      "Minimum 50% marks in PCB in Class 12th (40% for SC/ST/OBC)",
      "NEET qualification is mandatory for Indian students",
      "Minimum age 17 years as on 31st December of admission year",
      "Valid passport with at least 2 years validity",
      "Physically and mentally fit for medical studies"
    ],

    documents: {
      academic: [
        "10th and 12th Mark sheets (attested)",
        "School Leaving Certificate",
        "NEET Scorecard and Admit Card",
        "Birth Certificate (attested)"
      ],
      identity: [
        "Valid Passport (2+ years validity)",
        "Passport size photos (white background)",
        "Aadhar Card copy",
        "Parents' ID proof copies"
      ],
      additional: [
        "Migration Certificate from school",
        "Medical Fitness Certificate",
        "HIV Test Negative Certificate",
        "COVID-19 Vaccination Certificate",
        "Police Clearance Certificate (if required)"
      ]
    },

    admissionProcess: [
      {
        step: 1,
        title: "Consultation & Selection",
        description: "Get free counseling to select the best university based on your budget and preferences"
      },
      {
        step: 2,
        title: "Application Submission",
        description: "Submit application form with required documents to your chosen university through our assistance"
      },
      {
        step: 3,
        title: "Admission Confirmation",
        description: "Receive admission letter and invitation from university within 7-10 working days"
      },
      {
        step: 4,
        title: "Visa Processing",
        description: "Complete visa formalities with our support, submit documents at embassy and attend interview if required"
      },
      {
        step: 5,
        title: "Travel Arrangements",
        description: "Book flights, complete pre-departure briefing, and prepare for your journey to Kyrgyzstan"
      },
      {
        step: 6,
        title: "Arrival & Settlement",
        description: "Airport pickup, hostel check-in, university registration, and orientation program completion"
      }
    ],

    feeComparison: {
      totalCost: "10-18",
      mediumOfTeaching: "English (fully)",
      practicalTraining: "From 1st year",
      livingCost: "5,000-10,000",
      globalRecognition: "WHO, ECFMG approved",
      hostelMess: "Included, Indian mess available"
    }
  },

  uzbekistan: {
    name: "Uzbekistan",
    flag: "assets/images/flags/uzbekistan.jpg",
    heroTitle: "MBBS in Uzbekistan",
    heroDescription: "Quality Medical Education in Central Asia with Modern Facilities and Affordable Fees",

    backgroundImage: "assets/images/monuments/uzbekistan.jpg",
    backgroundTitle: "Medical Excellence in Uzbekistan",
    backgroundDescription: "Discover affordable MBBS programs in historic Uzbekistan with WHO-approved universities and English medium teaching",

    benefits: [
      {
        icon: "🎓",
        title: "WHO Approved",
        description: "All major medical universities approved by WHO, WDOMS, and recognized for NMC screening test"
      },
      {
        icon: "💰",
        title: "Cost-Effective",
        description: "Complete MBBS degree at 12-22 Lakhs INR with low living costs and no capitation fees"
      }
    ],

    universities: [
      {
  id: "uni-6",
  name: "Tashkent State Medical University",
  logo: "assets/images/colleges/uzbek1.jpeg",
  location: "Tashkent, Uzbekistan",
  fees: "16-20",
  duration: "6 Years",
  recognition: "WFME, FAIMER, ECFMG, General Medical Council approved",
  about: "Tashkent State Medical University was established in 1920 and is formed by merging TMA (Tashkent Medical Academy), TDMI (Tashkent Dental Medical Institute), and TPMI (Tashkent Pediatric Medical Institute). As one of the oldest medical institutions in Central Asia, it offers comprehensive medical education with modern facilities and English medium instruction. The university provides quality medical education with international recognition and has trained thousands of successful medical professionals over the past century.",
  faculty: "Highly qualified teaching staff with extensive experience in medical education and clinical practice. Faculty members include professors, associate professors, and experienced clinicians who provide comprehensive training in all medical disciplines. The university maintains high academic standards with faculty trained from leading medical institutions across the region.",
  campus: "Modern educational infrastructure with well-equipped lecture halls, advanced laboratories, and clinical training facilities. The campus features state-of-the-art medical equipment for practical training and research. University provides comprehensive library facilities with extensive medical literature. Students have access to modern teaching hospitals for clinical exposure and hands-on training in various medical specialties.",
  studentLife: "Separate hostels available for boys and girls within campus premises with Indian mess facilities. Students enjoy comfortable accommodation with all necessary amenities including Wi-Fi, study rooms, and recreational facilities. Active student community with cultural programs and extracurricular activities. International students receive dedicated support services for smooth adaptation. Food expenses approximately USD 1,200 per year with semester-wise payment options available.",
  website: "https://www.tashmedun.uz",
  brochure: "assets/brochures/tsmu-brochure.pdf"
}
,
      {
  id: "uni-7",
  name: "Bukhara State Medical Institute",
  logo: "assets/images/colleges/bukhara-uzbek.jpeg",
  location: "Bukhara, Uzbekistan",
  fees: "14-18",
  duration: "6 Years",
  recognition: "WFME, FAIMER, ECFMG, General Medical Council approved",
  about: "Bukhara State Medical Institute was established in 1990 and is recognized as Uzbekistan's No. 1 Medical University with the highest FMGE passing ratio. In FMGE 2024, the university achieved an impressive 48% passing ratio - the highest among all abroad universities. This outstanding achievement demonstrates the university's commitment to quality medical education and excellent preparation for licensing examinations. The institute provides English medium MBBS education with strong focus on practical clinical training and exam preparation.",
  faculty: "Experienced faculty members dedicated to student success with proven track record in producing high FMGE pass rates. Teaching staff includes qualified professors and clinicians with expertise across all medical disciplines. Faculty provides personalized attention and mentorship to ensure students excel in both academics and clinical practice. Regular workshops and training sessions conducted to keep students updated with latest medical developments.",
  campus: "Well-maintained campus with modern infrastructure including advanced laboratories, simulation centers, and well-equipped classrooms. The institute has tie-ups with leading hospitals providing extensive clinical exposure to students. Library facilities with comprehensive medical literature and digital resources. Campus features comfortable hostel accommodation with separate facilities for boys and girls.",
  studentLife: "Separate hostels for boys and girls within campus with Indian mess facilities. Hostel and mess mandatory for 1st year students with optional arrangements from 2nd year onwards. Food expenses approximately USD 1,200 per year (mandatory 1st year), with self-cooking option available at 50-60 USD per month. Comfortable living conditions with all modern amenities. Strong Indian student community providing home-like environment. Students can focus on studies in peaceful and secure campus atmosphere.",
  website: "https://www.buxdu.uz",
  brochure: "assets/brochures/bsmi-brochure.pdf"
}
,
     {
  id: "uni-8",
  name: "Samarkand State Medical University",
  logo: "assets/images/colleges/samarkand-uzbek.jpeg",
  location: "Samarkand, Uzbekistan",
  fees: "14-18",
  duration: "6 Years",
  recognition: "WFME, FAIMER, ECFMG, General Medical Council approved",
  about: "Samarkand State Medical University was established in 1930, making it one of the oldest and most prestigious medical institutions in Uzbekistan with over 90 years of excellence in medical education. Located in the historic city of Samarkand, the university combines rich educational traditions with modern teaching methodologies. The university offers comprehensive MBBS program in English medium with strong emphasis on clinical training and research. Known for producing competent medical professionals who excel globally.",
  faculty: "Distinguished faculty with extensive academic and clinical experience spanning decades. Teaching staff includes professors, doctors of sciences, and experienced clinicians from various specialties. Faculty members are committed to providing quality education through modern teaching techniques and hands-on training. Regular faculty development programs ensure updated curriculum delivery aligned with international standards.",
  campus: "Historic campus with modern facilities including well-equipped laboratories, digital classrooms, and comprehensive library resources. The university has established clinical training centers and partnerships with leading hospitals in Samarkand region. Advanced medical equipment and simulation labs for practical training. Campus provides excellent infrastructure for both academic and research activities with focus on student learning experience.",
  studentLife: "Comfortable hostel facilities with modern amenities and Indian mess services available. Food expenses approximately USD 1,200 per year with mess charges payable monthly. Safe and peaceful environment ideal for focused studies. Strong support system for international students including Indian student associations. Cultural events and festivals celebrated regularly. Students enjoy the rich historical and cultural heritage of Samarkand city. Medical insurance and contract fees arrangements available as per requirements.",
  website: "https://www.sammi.uz",
  brochure: "assets/brochures/ssmu-uzbekistan-brochure.pdf"
},
{
  id: "uni-9",
  name: "Andijan State Medical Institute",
  logo: "assets/images/colleges/davlat-uzbek.jpeg",
  location: "Andijan, Uzbekistan",
  fees: "12-16",
  duration: "6 Years",
  recognition: "WFME, FAIMER, ECFMG, General Medical Council approved",
  about: "Andijan State Medical Institute was established in 1955 and has over 65 years of experience in providing quality medical education. The institute offers comprehensive MBBS program in English medium with focus on practical clinical training. Known for affordable fee structure and quality education standards. The institute maintains strong academic reputation with emphasis on producing competent doctors who can practice globally.",
  faculty: "Qualified teaching faculty with good academic credentials and clinical experience. Faculty provides comprehensive medical education across all disciplines with emphasis on practical skills development. Teachers are dedicated to student success through personalized attention and mentorship. Regular training programs and workshops conducted for continuous faculty development.",
  campus: "Modern campus infrastructure with well-equipped laboratories, classrooms, and clinical training facilities. The institute provides access to teaching hospitals for hands-on clinical experience. Library with essential medical literature and study resources. Campus features comfortable hostel accommodation with all necessary facilities for students.",
  studentLife: "Separate hostel facilities for boys and girls within campus with Indian mess available. Hostel fee USD 600 per year with activity service fee of USD 350 annually. Mess charges approximately USD 1,200 per year (extra charges). 1st year package includes tuition fee, hostel fee, visa extension, registration, activity service fee, and one-time charges. Supportive environment for international students with focus on academics and cultural activities. Visa extension and government registration fees applicable from 2nd year onwards.",
  website: "https://www.andmi.uz",
  brochure: "assets/brochures/asmi-brochure.pdf"
},
{
  id: "uni-10",
  name: "Fergana Medical Institute of Public Health",
  logo: "assets/images/colleges/frag-uzbek.jpeg",
  location: "Fergana, Uzbekistan",
  fees: "16-20",
  duration: "6 Years",
  recognition: "WFME, FAIMER, ECFMG, General Medical Council, NMC approved",
  about: "Fergana Medical Institute of Public Health offers 6-year MD (General Medicine) program in English medium as per new NMC rules. The institute boasts a combined total of 19 hospitals with over 4,000 beds providing extensive clinical training opportunities. Known for excellent infrastructure and comprehensive medical education. The institute provides fully separate Indian hostel with Indian food facilities and Indian teachers available from 1st year ensuring comfortable learning environment for Indian students.",
  faculty: "Experienced faculty with specialization across medical disciplines. Indian teachers available from 1st year providing additional support and guidance to students. Teaching staff includes qualified professors and clinicians dedicated to quality medical education. Faculty provides comprehensive training through modern teaching methodologies and extensive clinical exposure. Regular NMC NEXT coaching provided to prepare students for licensing examinations.",
  campus: "Extensive clinical infrastructure with 19 associated hospitals totaling over 4,000 beds for hands-on training. Modern campus with well-equipped laboratories, lecture halls, and simulation centers. Comprehensive library facilities with medical literature and digital resources. Advanced medical equipment for practical training in various specialties. Campus designed to provide holistic learning experience for medical students.",
  studentLife: "Fully separate Indian hostel with Indian food facilities ensuring comfortable stay for Indian students. Hostel fee USD 750 for 1st year, optional from 2nd year onwards. Food charges USD 1,200 for 1st year. Medical assistance and administrative support provided. NMC NEXT coaching available at USD 200 per year from 2nd year to help students prepare for licensing exams. Strong Indian student community with cultural programs and festivals. Safe and supportive environment with dedicated student services. Visa extension and police registration fees approximately USD 300 each per year from 2nd year as government fees.",
  website: "https://www.ferganamedical.uz",
  brochure: "assets/brochures/fmiph-brochure.pdf"
},
{
  id: "uni-12",
  name: "Angren University - Faculty of Medicine",
  logo: "assets/images/colleges/angren-uzbek.jpeg",
  location: "Angren City, Tashkent Region, Uzbekistan",
  fees: "12-16",
  duration: "6 Years (5 Years + 1 Year Internship)",
  recognition: "WHO-listed, NMC-approved",
  about: "Angren University is a public institution established in 2021, with the Faculty of Medicine starting in 2023. Despite being one of the newest medical universities in Uzbekistan, it has quickly gained recognition for its commitment to delivering quality education. The university offers a 6-year full-time bachelor's degree program in Medicine (5+1 year internship) taught in English medium, focusing on practical training and research to prepare students for the evolving healthcare landscape. Located in serene Angren City surrounded by scenic mountains with cool, pleasant weather, the university provides an ideal environment for studies. In 2024, Angren University ranked 807th among 1,477 universities globally in UI GreenMetric World University Rankings, improving from 1028th position in 2023.",
  faculty: "Over 90 qualified professors with expertise across medical disciplines. Led by Rector Dr. Mutalov Shukhrat Ahmadjonovich (Doctor of Chemical Sciences, Professor). Faculty is committed to shaping future doctors with global knowledge and strong values. Teaching staff provides expert guidance with emphasis on practical training and research-based learning. Faculty actively participates in international collaborations and student development programs. The university emphasizes holistic approach to education ensuring students are well-equipped to meet professional challenges.",
  campus: "Modern campus infrastructure spread across three buildings with total area of 13,834 sq meters (8,000 + 1,434 + 4,400 sq meters) with capacity for 10,000+ students. Facilities include well-equipped classrooms, advanced laboratories, comprehensive library with 1,220 educational literature, 23 types of newspapers and 16 kinds of magazines. Campus features Angren Medical Center located in front of main administrative building with X-ray and MCT (Multislice Computed Tomography), operating rooms for student practices. Sports facilities include students gym with necessary equipment. Internet room equipped with modern computers. Campus fosters vibrant student life with cultural events, sports competitions, and extracurricular activities promoting inclusive and supportive environment.",
  studentLife: "Comfortable hostel accommodation with 170+ rooms. Well-furnished rooms with centralized heating system, hot and cold water facilities. Each dormitory has own kitchen, restrooms, study rooms and computer rooms. Modern amenities include LCD televisions, washing machines, furniture. Kitchens equipped with gas stoves and refrigerators for self-cooking. Domestic service house with sewing room, barbershop and photographic salon. Reading room available in hostel. Students gym with necessary facilities. Numerous extracurricular activities including Reading Club, Green Ecology Club, Zakovat Intellectual Club, Leaders Academy, Sports Club, Girls Club, Young Doctors Club. Students achieve remarkable success in competitions - 3rd place among 62 universities in DOTA 2 tournament, 1st place in French boxing. International internship opportunities - students began one-year internship at central hospital in Okinawa, Japan (February 2025) as part of partnership with Japanese company Azibiz. Cultural programs and international cooperation events regularly organized.",
  website: "https://www.angrenuniversity.uz",
  brochure: "assets/brochures/angren-brochure.pdf"
},
    ],

    eligibility: [
      "Minimum 50% aggregate in PCB in 12th standard (40% for reserved categories)",
      "NEET qualification is compulsory for Indian students",
      "Age 17 years or more as on 31st December of admission year",
      "Valid passport with minimum 18 months validity at time of application",
      "Medical fitness certificate from registered medical practitioner"
    ],

    documents: {
      academic: [
        "10th and 12th Mark sheets and Certificates (attested)",
        "NEET Scorecard with Admit Card",
        "Birth Certificate (attested by notary)",
        "School Transfer Certificate"
      ],
      identity: [
        "Valid Passport (minimum 18 months validity)",
        "Passport photographs (white background, recent)",
        "Aadhar Card and PAN Card",
        "Parents' Passport copies"
      ],
      additional: [
        "Migration Certificate from previous institution",
        "Medical Fitness Certificate",
        "HIV Negative Test Report",
        "COVID-19 Vaccination Certificate",
        "Equivalence Certificate (issued by university)"
      ]
    },

    admissionProcess: [
      {
        step: 1,
        title: "Free Guidance",
        description: "Receive expert counseling on university options, course structure, fees, and career prospects in Uzbekistan"
      },
      {
        step: 2,
        title: "Documentation",
        description: "Prepare and submit complete documentation package with our assistance for university application"
      },
      {
        step: 3,
        title: "Admission Letter",
        description: "Receive official admission confirmation and invitation letter from university within 15-20 days"
      },
      {
        step: 4,
        title: "Visa Application",
        description: "Apply for student visa with invitation letter, complete embassy formalities with our guidance"
      },
      {
        step: 5,
        title: "Pre-Departure",
        description: "Attend pre-departure orientation, complete travel arrangements, and final document verification"
      },
      {
        step: 6,
        title: "Arrival Support",
        description: "Airport reception, transfer to hostel, university registration, and settling-in assistance provided"
      }
    ],

    feeComparison: {
      totalCost: "12-22",
      mediumOfTeaching: "English (fully)",
      practicalTraining: "From 1st year",
      livingCost: "6,000-12,000",
      globalRecognition: "WHO, WDOMS approved",
      hostelMess: "Available, Indian food options"
    }
  },

  nepal: {
    name: "Nepal",
    flag: "assets/images/flags/nepal-flag.png",
    heroTitle: "MBBS in Nepal",
    heroDescription: "Study Medicine in Your Neighboring Country with Cultural Similarity and Quality Education",

    backgroundImage: "assets/images/countries/nepal-bg.jpg",
    backgroundTitle: "Medical Education in Nepal",
    backgroundDescription: "Experience quality medical education close to home with similar culture, no language barrier, and NMC-approved universities",

    benefits: [
      {
        icon: "🎓",
        title: "NMC Approved",
        description: "Medical universities approved by NMC, WHO, and other international medical councils"
      },
      {
        icon: "💰",
        title: "Reasonable Fees",
        description: "MBBS education at 25-60 Lakhs INR, competitive pricing with quality infrastructure and teaching"
      },
      {
        icon: "🌍",
        title: "Easy Accessibility",
        description: "Close proximity to India, easy travel, no visa hassles for Indians, and similar cultural environment"
      },
      {
        icon: "🏥",
        title: "Quality Training",
        description: "Good clinical exposure with diverse patient cases and modern medical equipment in teaching hospitals"
      },
      {
        icon: "🍽️",
        title: "Similar Culture",
        description: "No cultural shock, similar food habits, Hindi and English widely spoken, comfortable adaptation"
      },
      {
        icon: "✈️",
        title: "Direct Admission",
        description: "Merit-based admission through entrance examination, transparent process, and established medical education system"
      }
    ],

    universities: [
      {
        id: "uni-1",
        name: "Kathmandu Medical College",
        logo: "assets/images/universities/kmc-logo.png",
        location: "Kathmandu, Nepal",
        fees: "45-55",
        duration: "5.5 Years",
        recognition: "NMC, WHO approved",
        about: "Kathmandu Medical College is one of the premier private medical colleges in Nepal with excellent infrastructure and experienced faculty.",
        faculty: "Well-qualified faculty members with specializations in various medical fields, many with international training and experience.",
        campus: "Modern campus with well-equipped laboratories, comprehensive library, teaching hospital with 750+ beds, and comfortable hostel facilities.",
        studentLife: "Active student community with cultural programs, sports activities, and good mix of Nepali and international students.",
        website: "https://www.kmc.edu.np",
        brochure: "assets/brochures/kmc-brochure.pdf"
      },
      {
        id: "uni-2",
        name: "Manipal College of Medical Sciences",
        logo: "assets/images/universities/mcoms-logo.png",
        location: "Pokhara, Nepal",
        fees: "50-60",
        duration: "5.5 Years",
        recognition: "NMC, WHO approved",
        about: "Manipal College of Medical Sciences, Pokhara is a renowned institution under Manipal Group offering world-class medical education.",
        faculty: "Experienced faculty from India and Nepal with excellent academic credentials and commitment to quality medical education.",
        campus: "State-of-the-art infrastructure with modern teaching facilities, well-equipped teaching hospital, and excellent hostel accommodation.",
        studentLife: "Beautiful location in Pokhara, safe environment, good Indian student population, and numerous extracurricular opportunities.",
        website: "https://www.mcoms.edu.np",
        brochure: "assets/brochures/mcoms-brochure.pdf"
      },
      {
        id: "uni-3",
        name: "KIST Medical College",
        logo: "assets/images/universities/kist-logo.png",
        location: "Lalitpur, Nepal",
        fees: "40-50",
        duration: "5.5 Years",
        recognition: "NMC, WHO approved",
        about: "KIST Medical College is a well-established medical institution offering quality medical education with modern facilities and experienced teachers.",
        faculty: "Qualified teaching staff with focus on practical training and clinical skills development for students.",
        campus: "Good infrastructure with modern laboratories, digital library, affiliated teaching hospital, and student-friendly campus environment.",
        studentLife: "Welcoming atmosphere for Indian students, cultural similarity, easy adaptation, and supportive academic environment.",
        website: "https://www.kistmcth.edu.np",
        brochure: "assets/brochures/kist-brochure.pdf"
      }
    ],

    eligibility: [
      "Minimum 50% marks in PCB in Class 12th (40% for SC/ST/OBC categories)",
      "NEET qualification mandatory with valid scorecard",
      "Age 17 years or above as on 31st December of admission year",
      "Must qualify Nepal medical entrance examination or university entrance test",
      "Valid passport or any government ID for admission process"
    ],

    documents: {
      academic: [
        "10th and 12th Mark sheets and Certificates",
        "NEET Scorecard and Admit Card",
        "Migration Certificate",
        "Character Certificate from School"
      ],
      identity: [
        "Passport or Voter ID or Aadhar Card",
        "Passport size photographs",
        "Parents' ID proofs",
        "PAN Card (if available)"
      ],
      additional: [
        "Transfer Certificate from last attended institution",
        "Medical Fitness Certificate",
        "Equivalence Certificate from Nepal Medical Council",
        "COVID-19 Vaccination Certificate"
      ]
    },

    admissionProcess: [
      {
        step: 1,
        title: "Entrance Preparation",
        description: "Prepare for Nepal medical entrance examination or university-specific entrance test along with NEET qualification"
      },
      {
        step: 2,
        title: "Application Submission",
        description: "Submit application to chosen medical college with required documents and entrance examination registration"
      },
      {
        step: 3,
        title: "Entrance Examination",
        description: "Appear for medical entrance exam conducted by university or centralized authority in Nepal"
      },
      {
        step: 4,
        title: "Merit List & Counseling",
        description: "Check merit list based on entrance exam performance and attend counseling for seat allocation"
      },
      {
        step: 5,
        title: "Admission Confirmation",
        description: "Complete admission formalities, pay fees, and submit documents for verification and final admission"
      },
      {
        step: 6,
        title: "Classes Commencement",
        description: "Hostel allocation, orientation program, and commencement of regular medical classes and clinical training"
      }
    ],

    feeComparison: {
      totalCost: "25-60",
      mediumOfTeaching: "English (fully)",
      practicalTraining: "From 2nd year",
      livingCost: "8,000-15,000",
      globalRecognition: "NMC, WHO approved",
      hostelMess: "Available, similar to Indian food"
    }
  },

  bangladesh: {
    name: "Bangladesh",
    flag: "assets/images/flags/bangladesh-flag.png",
    heroTitle: "MBBS in Bangladesh",
    heroDescription: "Pursue Medical Education in Bangladesh with NMC Recognition and Affordable Fees",

    backgroundImage: "assets/images/countries/bangladesh-bg.jpg",
    backgroundTitle: "Quality Medical Education in Bangladesh",
    backgroundDescription: "Study MBBS in neighboring Bangladesh with similar culture, English medium teaching, and NMC-approved medical colleges",

    benefits: [
      {
        icon: "🎓",
        title: "NMC Recognized",
        description: "Medical colleges approved by NMC, WHO, and BM&DC with quality education standards"
      },
      {
        icon: "💰",
        title: "Affordable Education",
        description: "Complete MBBS at 25-50 Lakhs INR in government and private medical colleges"
      },
      {
        icon: "🌍",
        title: "Easy Access",
        description: "Close to India, similar culture, Bengali widely understood, easy visa process for Indians"
      },
      {
        icon: "🏥",
        title: "Clinical Training",
        description: "Good clinical exposure in teaching hospitals with diverse medical cases and experienced faculty"
      },
      {
        icon: "🍽️",
        title: "Cultural Similarity",
        description: "Similar food, culture, and lifestyle to India, easy adaptation for Indian students"
      },
      {
        icon: "✈️",
        title: "Merit-Based Entry",
        description: "Admission based on NEET score and university entrance test, transparent selection process"
      }
    ],

    universities: [
      {
        id: "uni-1",
        name: "Dhaka Medical College",
        logo: "assets/images/universities/dmc-logo.png",
        location: "Dhaka, Bangladesh",
        fees: "25-30",
        duration: "5 Years",
        recognition: "NMC, WHO, BM&DC approved",
        about: "Dhaka Medical College is the oldest and most prestigious medical institution in Bangladesh, established in 1946 with excellent academic reputation.",
        faculty: "Highly experienced faculty members with specializations across medical disciplines and strong clinical expertise.",
        campus: "Well-established campus with comprehensive teaching facilities, large teaching hospital with 2000+ beds, and good hostel facilities.",
        studentLife: "Historic institution with strong academic culture, active student associations, and good infrastructure for international students.",
        website: "https://www.dhakamch.gov.bd",
        brochure: "assets/brochures/dmc-brochure.pdf"
      },
      {
        id: "uni-2",
        name: "Chittagong Medical College",
        logo: "assets/images/universities/cmc-logo.png",
        location: "Chittagong, Bangladesh",
        fees: "25-30",
        duration: "5 Years",
        recognition: "NMC, WHO, BM&DC approved",
        about: "Chittagong Medical College is a premier government medical college known for quality education and excellent clinical training facilities.",
        faculty: "Qualified teaching staff committed to medical education excellence with good student-teacher ratio.",
        campus: "Modern infrastructure with well-equipped laboratories, comprehensive library, and affiliated teaching hospital for practical training.",
        studentLife: "Port city location with pleasant climate, safe environment, and supportive atmosphere for studies.",
        website: "https://cmc.gov.bd",
        brochure: "assets/brochures/cmc-brochure.pdf"
      },
      {
        id: "uni-3",
        name: "Anwer Khan Modern Medical College",
        logo: "assets/images/universities/akmmc-logo.png",
        location: "Dhaka, Bangladesh",
        fees: "40-50",
        duration: "5 Years",
        recognition: "NMC, WHO, BM&DC approved",
        about: "Anwer Khan Modern Medical College is a private medical college offering quality medical education with modern facilities and infrastructure.",
        faculty: "Experienced faculty with good academic credentials providing comprehensive medical education and training.",
        campus: "Modern campus with state-of-the-art facilities, well-equipped laboratories, and associated modern hospital for clinical training.",
        studentLife: "Good environment for international students with necessary support services and comfortable accommodation facilities.",
        website: "https://www.akmc.edu.bd",
        brochure: "assets/brochures/akmmc-brochure.pdf"
      }
    ],

    eligibility: [
      "Minimum 50% marks in PCB in 12th standard (40% for SC/ST/OBC)",
      "NEET qualification is mandatory for Indian students",
      "Age should be 17 years or above as on 31st December",
      "Must qualify Bangladesh Medical Entrance Test or equivalent",
      "Valid passport for admission and visa formalities"
    ],

    documents: {
      academic: [
        "10th and 12th Mark sheets and Passing Certificates",
        "NEET Scorecard and Admit Card",
        "Equivalence Certificate from BM&DC",
        "School Leaving Certificate"
      ],
      identity: [
        "Valid Passport with sufficient validity",
        "Passport size photographs (recent)",
        "Aadhar Card copy",
        "Birth Certificate (attested)"
      ],
      additional: [
        "Migration Certificate",
        "Medical Fitness Certificate",
        "Police Clearance Certificate",
        "COVID-19 Vaccination Certificate",
        "No Objection Certificate (if required)"
      ]
    },

    admissionProcess: [
      {
        step: 1,
        title: "College Selection",
        description: "Choose medical college based on budget, location, and academic reputation with expert guidance"
      },
      {
        step: 2,
        title: "Entrance Test",
        description: "Appear for Bangladesh Medical Entrance Test or university-specific entrance examination"
      },
      {
        step: 3,
        title: "Merit & Admission",
        description: "Seat allotment based on entrance test performance and NEET score, complete admission formalities"
      },
      {
        step: 4,
        title: "Document Verification",
        description: "Submit all required documents for verification including equivalence certificate from BM&DC"
      },
      {
        step: 5,
        title: "Visa Processing",
        description: "Apply for student visa at Bangladesh High Commission with admission letter and required documents"
      },
      {
        step: 6,
        title: "College Joining",
        description: "Travel to Bangladesh, complete final registration, hostel allocation, and begin medical classes"
      }
    ],

    feeComparison: {
      totalCost: "25-50",
      mediumOfTeaching: "English (fully)",
      practicalTraining: "From 2nd year",
      livingCost: "8,000-15,000",
      globalRecognition: "NMC, WHO, BM&DC approved",
      hostelMess: "Available, similar cuisine"
    }
  },

  china: {
    name: "China",
    flag: "assets/images/flags/china-flag.png",
    heroTitle: "MBBS in China",
    heroDescription: "World-Class Medical Education in Asia's Powerhouse with Modern Infrastructure and Global Recognition",

    backgroundImage: "assets/images/countries/china-bg.jpg",
    backgroundTitle: "Study MBBS in China",
    backgroundDescription: "Experience cutting-edge medical education in China with WHO-approved universities, English medium teaching, and international exposure",

    benefits: [
      {
        icon: "🎓",
        title: "Top-Ranked Universities",
        description: "Prestigious universities ranked in top 500 globally, approved by WHO, WDOMS, and ECFMG"
      },
      {
        icon: "💰",
        title: "Competitive Fees",
        description: "Quality education at 20-40 Lakhs INR with excellent infrastructure and teaching facilities"
      },
      {
        icon: "🌍",
        title: "Global Exposure",
        description: "International curriculum, students from 100+ countries, and opportunities for global medical practice"
      },
      {
        icon: "🏥",
        title: "Advanced Training",
        description: "State-of-the-art simulation labs, modern teaching hospitals, and latest medical technology for training"
      },
      {
        icon: "🍽️",
        title: "International Environment",
        description: "Indian and international cuisine available, diverse student community, and comfortable hostel living"
      },
      {
        icon: "✈️",
        title: "Scholarship Opportunities",
        description: "Chinese Government Scholarships available for meritorious students, structured admission process"
      }
    ],

    universities: [
      {
        id: "uni-1",
        name: "Peking University Health Science Center",
        logo: "assets/images/universities/puhsc-logo.png",
        location: "Beijing, China",
        fees: "35-40",
        duration: "6 Years",
        recognition: "WHO, WDOMS, ECFMG approved",
        about: "Peking University Health Science Center is one of China's top medical schools, ranked among best in Asia with world-class facilities and research opportunities.",
        faculty: "Internationally renowned faculty with extensive research publications, clinical expertise, and commitment to excellence in medical education.",
        campus: "Outstanding infrastructure with cutting-edge research laboratories, comprehensive medical libraries, affiliated hospitals, and modern student accommodation.",
        studentLife: "Vibrant international community with students from over 70 countries, cultural activities, sports facilities, and excellent support for international students.",
        website: "https://english.bjmu.edu.cn",
        brochure: "assets/brochures/puhsc-brochure.pdf"
      },
      {
        id: "uni-2",
        name: "Fudan University Shanghai Medical College",
        logo: "assets/images/universities/fudan-logo.png",
        location: "Shanghai, China",
        fees: "32-38",
        duration: "6 Years",
        recognition: "WHO, WDOMS, ECFMG approved",
        about: "Fudan University Shanghai Medical College is a prestigious institution offering comprehensive medical education with focus on research and clinical excellence.",
        faculty: "Distinguished professors and clinicians with international training and recognition, dedicated to producing competent medical professionals.",
        campus: "World-class facilities including advanced simulation centers, modern teaching hospitals, extensive library resources, and comfortable international student dormitories.",
        studentLife: "Dynamic environment in cosmopolitan Shanghai with diverse student body, cultural exchange opportunities, and excellent amenities.",
        website: "https://shmc.fudan.edu.cn/eng",
        brochure: "assets/brochures/fudan-brochure.pdf"
      },
      {
        id: "uni-3",
        name: "China Medical University",
        logo: "assets/images/universities/cmu-logo.png",
        location: "Shenyang, China",
        fees: "25-32",
        duration: "6 Years",
        recognition: "WHO, WDOMS, ECFMG approved",
        about: "China Medical University is a well-established medical university with strong international program and good track record of training international doctors.",
        faculty: "Experienced teaching staff with specialization in various medical fields, committed to quality education through English medium instruction.",
        campus: "Comprehensive medical university with modern facilities, affiliated hospitals for clinical training, well-stocked library, and good hostel facilities.",
        studentLife: "Large international student community with support services, cultural programs, and comfortable living environment conducive to studies.",
        website: "http://www.cmu.edu.cn/en",
        brochure: "assets/brochures/cmu-brochure.pdf"
      }
    ],

    eligibility: [
      "Minimum 50% marks in PCB in Class 12th (40% for reserved categories)",
      "NEET qualification is mandatory for Indian students aspiring to practice in India",
      "Age between 17-25 years as per Chinese government regulations",
      "Valid passport with at least 2 years validity",
      "Good physical and mental health certified by authorized medical practitioner"
    ],

    documents: {
      academic: [
        "10th and 12th Mark sheets and Certificates (notarized)",
        "NEET Scorecard and Admit Card",
        "Recommendation Letters from teachers",
        "Study Plan/Personal Statement"
      ],
      identity: [
        "Valid Passport (minimum 2 years validity)",
        "Passport size photographs (white background)",
        "Birth Certificate (notarized)",
        "Parents' Passport copies"
      ],
      additional: [
        "Foreigner Physical Examination Form (completed in China)",
        "No Criminal Record Certificate",
        "Financial Guarantee/Bank Statement",
        "COVID-19 Vaccination Certificate",
        "Health Insurance coverage document"
      ]
    },

    admissionProcess: [
      {
        step: 1,
        title: "University Research",
        description: "Research and select suitable university based on ranking, location, fees, and program structure with expert guidance"
      },
      {
        step: 2,
        title: "Online Application",
        description: "Complete online application form on university website or through authorized agencies with required documents"
      },
      {
        step: 3,
        title: "Admission Letter",
        description: "Receive Pre-Admission Notice from university, followed by official Admission Letter and JW202 form for visa"
      },
      {
        step: 4,
        title: "Visa Application",
        description: "Apply for X1 student visa at Chinese Embassy/Consulate with admission documents and complete visa formalities"
      },
      {
        step: 5,
        title: "Travel Preparation",
        description: "Book flights, complete pre-departure orientation, prepare necessary items, and final document checks"
      },
      {
        step: 6,
        title: "Arrival & Registration",
        description: "Airport pickup, complete university registration, physical examination, residence permit, and hostel allocation"
      }
    ],

    feeComparison: {
      totalCost: "20-40",
      mediumOfTeaching: "English (fully)",
      practicalTraining: "From 1st year",
      livingCost: "10,000-20,000",
      globalRecognition: "WHO, WDOMS, ECFMG approved",
      hostelMess: "Available, international cuisine"
    }
  }
};

// Make accessible in browser
window.COUNTRY_DATA = COUNTRY_DATA;

