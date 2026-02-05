/* ============================================
   COUNTRY DATA CONFIGURATION
   Complete data for all countries
   ============================================ */

const COUNTRY_DATA = {
  russia: {
    name: "Russia",
    flag: "assets/images/flags/russia-flag.png",
    heroTitle: "MBBS in Russia",
    heroDescription: "Your Gateway to Quality Medical Education with Affordable Fees and Global Recognition",

    backgroundImage: "assets/images/countries/russia-bg.jpg",
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
      {
        icon: "🌍",
        title: "Global Recognition",
        description:
          "Degrees recognized worldwide by WHO, WDOMS, ECFMG, and eligible for FMGE/NMC screening test"
      },
      {
        icon: "🏥",
        title: "Clinical Exposure",
        description:
          "Extensive hands-on clinical training from day one with access to advanced medical facilities and hospitals"
      },
      {
        icon: "🍽️",
        title: "Indian Food Available",
        description:
          "Indian mess facilities available in most universities, along with comfortable hostel accommodation"
      },
      {
        icon: "✈️",
        title: "Easy Admission",
        description:
          "No entrance exam required, simple admission process with direct university admission letters"
      }
    ],

    universities: [
      {
        id: "uni-1",
        name: "Kazan Federal University",
        logo: "assets/images/universities/kazan-logo.png",
        location: "Kazan, Russia",
        fees: "18-22",
        duration: "6 Years",
        recognition: "WHO, MCI, ECFMG approved",
        about: "Kazan Federal University is one of the oldest and most prestigious universities in Russia, established in 1804. It offers world-class medical education with modern facilities.",
        faculty: "Highly qualified faculty members with international experience in medical education. Expert educators with specializations across diverse medical fields including clinical medicine, surgery, and specialized disciplines.",
        campus: "State-of-the-art medical facilities with modern laboratories, simulation centers, well-equipped libraries, and teaching hospitals. The campus provides excellent hostel facilities with Indian mess options.",
        studentLife: "Vibrant student community with cultural exchange programs, sports facilities, and extracurricular activities. Strong support system for international students with dedicated coordinators.",
        website: "https://kpfu.ru/eng",
        brochure: "assets/brochures/kazan-brochure.pdf"
      },
      {
        id: "uni-2",
        name: "Bashkir State Medical University",
        logo: "assets/images/universities/bashkir-logo.png",
        location: "Ufa, Russia",
        fees: "16-20",
        duration: "6 Years",
        recognition: "WHO, MCI, ECFMG approved",
        about: "Bashkir State Medical University is a premier medical institution in Russia with over 90 years of excellence in medical education and research.",
        faculty: "Distinguished faculty with international qualifications and research credentials. Regular workshops and seminars conducted by renowned medical professionals.",
        campus: "Modern infrastructure with clinical training departments, patient care facilities, advanced laboratories, and comprehensive library resources. Comfortable accommodation with Indian food options.",
        studentLife: "Inclusive community with strong international student support services. Regular cultural and academic events fostering peer interaction and professional networking.",
        website: "https://bashgmu.ru/english/",
        brochure: "assets/brochures/bashkir-brochure.pdf"
      },
      {
        id: "uni-3",
        name: "Crimea Federal University",
        logo: "assets/images/universities/crimea-logo.png",
        location: "Simferopol, Russia",
        fees: "15-19",
        duration: "6 Years",
        recognition: "WHO, MCI, ECFMG approved",
        about: "Crimea Federal University offers comprehensive medical education in a beautiful coastal setting with excellent academic infrastructure and experienced teaching staff.",
        faculty: "Expert medical professionals with extensive clinical experience and academic credentials. Emphasis on evidence-based teaching methods and continuous curriculum updates.",
        campus: "Advanced medical college with integrated teaching hospitals, modern laboratories, and research facilities. Student-friendly campus with recreational amenities.",
        studentLife: "Active student organizations and professional development opportunities. Beautiful location with pleasant climate and safe environment for international students.",
        website: "https://cfuv.ru/en",
        brochure: "assets/brochures/crimea-brochure.pdf"
      }
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
        id: "uni-1",
        name: "Kyrgyz State Medical Academy",
        logo: "assets/images/universities/ksma-logo.png",
        location: "Bishkek, Kyrgyzstan",
        fees: "13-16",
        duration: "6 Years",
        recognition: "WHO, MCI approved",
        about: "Kyrgyz State Medical Academy is the premier medical institution in Kyrgyzstan with over 1,500 Indian students and excellent academic track record.",
        faculty: "Experienced faculty members with international credentials providing quality education through English medium instruction.",
        campus: "Modern infrastructure with well-equipped laboratories, digital library, simulation centers, and comfortable hostels with Indian mess.",
        studentLife: "Strong Indian student community with cultural events, festivals celebration, sports facilities, and 24/7 student support services.",
        website: "https://kgma.kg/en/",
        brochure: "assets/brochures/ksma-brochure.pdf"
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
    flag: "assets/images/flags/uzbekistan-flag.png",
    heroTitle: "MBBS in Uzbekistan",
    heroDescription: "Quality Medical Education in Central Asia with Modern Facilities and Affordable Fees",

    backgroundImage: "assets/images/countries/uzbekistan-bg.jpg",
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
      },
      {
        icon: "🌍",
        title: "Global Standards",
        description: "International curriculum with degrees recognized globally, eligible for USMLE and PLAB examinations"
      },
      {
        icon: "🏥",
        title: "Clinical Excellence",
        description: "Comprehensive clinical training with modern simulation labs and well-equipped teaching hospitals"
      },
      {
        icon: "🍽️",
        title: "Comfortable Living",
        description: "Indian mess facilities available, safe environment, and affordable accommodation in modern hostels"
      },
      {
        icon: "✈️",
        title: "Smooth Admission",
        description: "Direct admission without donation, simplified visa process, and complete support from application to departure"
      }
    ],

    universities: [
      {
        id: "uni-1",
        name: "Tashkent Medical Academy",
        logo: "assets/images/universities/tma-logo.png",
        location: "Tashkent, Uzbekistan",
        fees: "16-20",
        duration: "6 Years",
        recognition: "WHO, MCI approved",
        about: "Tashkent Medical Academy is the oldest and most prestigious medical institution in Uzbekistan, offering world-class medical education since 1919.",
        faculty: "Highly qualified faculty with international experience, research publications, and expertise in various medical specializations.",
        campus: "State-of-the-art infrastructure with modern laboratories, digital library, simulation centers, and affiliated multi-specialty hospitals.",
        studentLife: "Vibrant student community with cultural diversity, active Indian student association, sports facilities, and comfortable hostel living.",
        website: "https://tma.uz/en",
        brochure: "assets/brochures/tma-brochure.pdf"
      },
      {
        id: "uni-2",
        name: "Samarkand State Medical University",
        logo: "assets/images/universities/ssmu-logo.png",
        location: "Samarkand, Uzbekistan",
        fees: "14-18",
        duration: "6 Years",
        recognition: "WHO, MCI approved",
        about: "Located in the historic city of Samarkand, this university combines traditional values with modern medical education standards.",
        faculty: "Experienced medical educators committed to excellence in teaching with focus on practical skills and clinical competence.",
        campus: "Well-equipped campus with modern teaching facilities, research laboratories, teaching hospitals, and student-friendly accommodation.",
        studentLife: "Safe and peaceful environment ideal for studies, with good Indian student presence and availability of Indian food options.",
        website: "https://sammi.uz/en",
        brochure: "assets/brochures/ssmu-brochure.pdf"
      },
      {
        id: "uni-3",
        name: "Andijan State Medical Institute",
        logo: "assets/images/universities/asmi-logo.png",
        location: "Andijan, Uzbekistan",
        fees: "12-16",
        duration: "6 Years",
        recognition: "WHO, MCI approved",
        about: "Andijan State Medical Institute offers quality medical education with emphasis on clinical training and affordable fees structure.",
        faculty: "Dedicated teaching staff with good academic credentials, providing personalized attention and comprehensive medical training.",
        campus: "Modern facilities with well-maintained laboratories, library resources, clinical training centers, and comfortable hostel facilities.",
        studentLife: "Growing international student community with supportive environment, cultural activities, and focus on academic excellence.",
        website: "https://andmi.uz",
        brochure: "assets/brochures/asmi-brochure.pdf"
      }
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

// Export for use in country.html
if (typeof module !== 'undefined' && module.exports) {
  module.exports = COUNTRY_DATA;
}
