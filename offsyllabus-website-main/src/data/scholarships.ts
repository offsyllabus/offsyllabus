export interface Scholarship {
  slug: string
  name: string
  organization: string
  logoText: string
  logoColor: string
  fundingAmount: string
  fundingType: 'Fully Funded' | 'Partially Funded'
  country: string
  studyLevel: 'School' | 'Undergraduate' | 'Postgraduate' | 'PhD'
  category: 'Merit' | 'Need-Based' | 'Sports' | 'STEM' | 'Arts' | 'Entrepreneurship'
  eligibility: string
  shortDescription: string
  fullDescription: string
  tags: string[]
  benefits: string[]
  eligibilityCriteria: string[]
  requiredDocuments: string[]
  applicationProcess: string[]
  importantInfo: string[]
  officialLink: string
  featured: boolean
  recentlyAdded: boolean
}

export const scholarships: Scholarship[] = [
  {
    slug: 'fulbright-scholarship',
    name: 'Fulbright Scholarship',
    organization: 'U.S. Department of State',
    logoText: 'F',
    logoColor: '#7c3aed',
    fundingAmount: 'Full tuition + living stipend',
    fundingType: 'Fully Funded',
    country: 'USA',
    studyLevel: 'Postgraduate',
    category: 'Merit',
    eligibility: 'Indian citizens with a bachelor\'s degree and strong academic record',
    shortDescription:
      'A flagship international exchange program funding graduate study, research, and teaching opportunities in the United States for outstanding students and professionals.',
    fullDescription:
      'The Fulbright Scholarship is one of the most prestigious international exchange programs in the world, sponsored by the U.S. Department of State. It offers Indian students and professionals the opportunity to pursue a master\'s degree, conduct research, or teach in the United States. The program emphasizes cross-cultural understanding alongside academic and professional excellence, and Fulbright alumni go on to become leaders in academia, government, business, and the arts across the globe.',
    tags: ['Any Field', 'Research', 'Global', 'USA'],
    benefits: [
      'Full tuition coverage at a US institution',
      'Monthly living stipend',
      'Round-trip international airfare',
      'Health insurance for the duration of the program',
      'Pre-departure orientation and ongoing support in the US',
    ],
    eligibilityCriteria: [
      'Indian citizen currently residing in India',
      'Bachelor\'s degree with a strong academic record',
      'Minimum 2–3 years of relevant work or research experience (varies by award)',
      'English language proficiency (TOEFL/IELTS as required by host institution)',
      'Demonstrated leadership or community engagement',
    ],
    requiredDocuments: [
      'Completed online application form',
      'Statement of purpose',
      'Academic transcripts',
      'Two to three letters of recommendation',
      'Standardized test scores (GRE/TOEFL/IELTS as applicable)',
      'Valid passport',
    ],
    applicationProcess: [
      'Review eligibility requirements and choose the relevant Fulbright award',
      'Submit the online application with all required documents',
      'Shortlisted candidates attend a personal interview',
      'Final selection by the Fulbright screening committee',
      'Visa processing and pre-departure orientation for selected candidates',
    ],
    importantInfo: [
      'Applications typically open in the second quarter of the year',
      'Selection is highly competitive; apply well ahead of the deadline',
      'Some awards require an affiliated US host institution before applying',
    ],
    officialLink: 'https://www.usief.org.in/Fellowships/Fulbright-Nehru-Fellowships.aspx',
    featured: true,
    recentlyAdded: false,
  },
  {
    slug: 'chevening-scholarship',
    name: 'Chevening Scholarship',
    organization: 'UK Government (FCDO)',
    logoText: 'C',
    logoColor: '#2563eb',
    fundingAmount: 'Full tuition + living costs',
    fundingType: 'Fully Funded',
    country: 'UK',
    studyLevel: 'Postgraduate',
    category: 'Merit',
    eligibility: 'Applicants with at least 2 years of work experience and leadership potential',
    shortDescription:
      'The UK government\'s international scholarship funding one-year master\'s study for future leaders, offering networking, professional development, and full financial support.',
    fullDescription:
      'Chevening is the UK government\'s international awards scheme, funded by the Foreign, Commonwealth & Development Office and partner organizations. It supports outstanding emerging leaders from around the world to pursue a one-year master\'s degree at any UK university, while building a global network of Chevening alumni across business, government, and civil society.',
    tags: ['Leadership', 'Any Field', 'Global'],
    benefits: [
      'Full tuition fees for a one-year master\'s program',
      'Monthly stipend to cover living expenses',
      'Return economy airfare to the UK',
      'Arrival and departure allowances',
      'Access to the global Chevening alumni network',
    ],
    eligibilityCriteria: [
      'Citizen of a Chevening-eligible country',
      'Minimum two years of work experience',
      'Bachelor\'s degree that meets the entry requirements for a UK master\'s program',
      'Return to home country for a minimum of two years after the scholarship',
      'Demonstrated leadership and networking potential',
    ],
    requiredDocuments: [
      'Online application with essay responses',
      'Two references',
      'Proof of work experience',
      'Educational qualifications',
      'Valid passport',
    ],
    applicationProcess: [
      'Complete the online Chevening application',
      'Submit references and required documents',
      'Shortlisted applicants attend an interview',
      'Receive conditional offer pending UK university admission',
      'Confirm university offer and finalize scholarship award',
    ],
    importantInfo: [
      'Applications generally open in August and close in early November',
      'You must apply to your UK university course separately',
      'Highly competitive with tens of thousands of applicants annually',
    ],
    officialLink: 'https://www.chevening.org/',
    featured: true,
    recentlyAdded: false,
  },
  {
    slug: 'rhodes-scholarship',
    name: 'Rhodes Scholarship',
    organization: 'Rhodes Trust, University of Oxford',
    logoText: 'R',
    logoColor: '#dc2626',
    fundingAmount: 'Full tuition + living stipend',
    fundingType: 'Fully Funded',
    country: 'UK',
    studyLevel: 'Postgraduate',
    category: 'Merit',
    eligibility: 'Exceptional final-year undergraduates or recent graduates',
    shortDescription:
      'The world\'s oldest international graduate scholarship, funding postgraduate study at the University of Oxford for students of outstanding intellect and character.',
    fullDescription:
      'Established in 1902, the Rhodes Scholarship is the oldest and among the most prestigious international scholarships in the world. It fully funds postgraduate study at the University of Oxford for young people of outstanding intellectual ability, character, leadership, and commitment to service, selected from across the globe including a dedicated India constituency.',
    tags: ['Leadership', 'Any Field', 'Oxford'],
    benefits: [
      'Full tuition and college fees at Oxford',
      'Generous annual living stipend',
      'Return airfare at the start and end of the scholarship',
      'Access to Rhodes House community and events',
      'Lifelong membership in the global Rhodes alumni network',
    ],
    eligibilityCriteria: [
      'Indian citizen aged between 19 and 25',
      'Outstanding undergraduate academic record',
      'Demonstrated leadership and commitment to service',
      'Strong personal character and integrity',
      'Meets Oxford\'s admission requirements for the chosen course',
    ],
    requiredDocuments: [
      'Personal statement',
      'Academic transcripts',
      'Eight referee reports',
      'Curriculum vitae',
      'Valid passport',
    ],
    applicationProcess: [
      'Submit the online application with personal statement and CV',
      'Referees submit confidential letters of recommendation',
      'Shortlisted candidates are invited for interviews',
      'Final selection committee interview',
      'Selected Scholars apply for admission to Oxford',
    ],
    importantInfo: [
      'India constituency selects a limited number of scholars each year',
      'Applications usually open mid-year with interviews later in the year',
      'One of the most competitive scholarships globally',
    ],
    officialLink: 'https://www.rhodeshouse.ox.ac.uk/',
    featured: true,
    recentlyAdded: false,
  },
  {
    slug: 'erasmus-mundus',
    name: 'Erasmus Mundus Joint Master Scholarship',
    organization: 'European Union',
    logoText: 'E',
    logoColor: '#0ea5e9',
    fundingAmount: 'Full tuition + monthly allowance',
    fundingType: 'Fully Funded',
    country: 'European Union',
    studyLevel: 'Postgraduate',
    category: 'Merit',
    eligibility: 'Bachelor\'s degree holders applying to an Erasmus Mundus joint master program',
    shortDescription:
      'A fully funded scholarship for an integrated master\'s program delivered by a consortium of universities across at least two European countries.',
    fullDescription:
      'Erasmus Mundus Joint Master Degrees are prestigious, integrated study programs delivered by a consortium of higher education institutions across Europe. Scholars study in at least two different countries during the program, gaining a genuinely international academic and cultural experience while earning a joint, double, or multiple degree recognized across the EU.',
    tags: ['STEM', 'Research', 'Europe'],
    benefits: [
      'Full tuition fee waiver',
      'Monthly subsistence allowance',
      'Travel and installation costs',
      'Insurance coverage during the program',
      'Study across multiple European universities',
    ],
    eligibilityCriteria: [
      'Completed bachelor\'s degree in a relevant field',
      'Meets the language requirements of the joint program',
      'Admission to a selected Erasmus Mundus Joint Master program',
      'Open to applicants worldwide, including India',
    ],
    requiredDocuments: [
      'Program-specific application form',
      'Academic transcripts and degree certificates',
      'Statement of purpose',
      'Letters of recommendation',
      'Language proficiency certificates',
    ],
    applicationProcess: [
      'Choose an Erasmus Mundus Joint Master program',
      'Apply directly through the consortium\'s application portal',
      'Submit academic and language documents',
      'Interview (if required by the specific program)',
      'Receive admission and scholarship decision from the consortium',
    ],
    importantInfo: [
      'Each joint program has its own deadlines and requirements',
      'Programs span two academic years across partner universities',
    ],
    officialLink: 'https://education.ec.europa.eu/erasmus-mundus-catalogue',
    featured: true,
    recentlyAdded: false,
  },
  {
    slug: 'daad-scholarship',
    name: 'DAAD Scholarship',
    organization: 'German Academic Exchange Service',
    logoText: 'D',
    logoColor: '#facc15',
    fundingAmount: 'Monthly stipend + tuition support',
    fundingType: 'Fully Funded',
    country: 'Germany',
    studyLevel: 'Postgraduate',
    category: 'STEM',
    eligibility: 'Graduates in engineering, sciences, or related fields with strong academics',
    shortDescription:
      'Funding for postgraduate study and research in Germany across engineering, natural sciences, and humanities, supporting students throughout their academic journey.',
    fullDescription:
      'The German Academic Exchange Service (DAAD) offers a wide range of scholarships for Indian students to pursue master\'s and doctoral study in Germany. Programs span engineering, natural sciences, humanities, and more, with an emphasis on academic excellence, research potential, and cultural exchange between Germany and partner countries.',
    tags: ['STEM', 'Research', 'Engineering'],
    benefits: [
      'Monthly stipend for living expenses',
      'Health, accident, and personal liability insurance',
      'Travel allowance',
      'Support for German language courses',
      'Access to DAAD\'s academic and alumni network',
    ],
    eligibilityCriteria: [
      'Bachelor\'s degree in a relevant field with strong academic performance',
      'Relevant work or research experience (for some programs)',
      'German or English language proficiency depending on the program',
      'Clear motivation for study or research in Germany',
    ],
    requiredDocuments: [
      'Online DAAD application',
      'Letter of motivation',
      'Academic transcripts and certificates',
      'Letters of recommendation',
      'Language certificates',
      'CV in europass format',
    ],
    applicationProcess: [
      'Identify the relevant DAAD scholarship program',
      'Prepare and submit the required documents online',
      'Shortlisted candidates may be interviewed',
      'Selection committee reviews and finalizes awards',
      'Visa and relocation support provided to selected scholars',
    ],
    importantInfo: [
      'Different programs have different intake cycles throughout the year',
      'Some programs require prior admission to a German university',
    ],
    officialLink: 'https://www.daad.de/en/',
    featured: true,
    recentlyAdded: true,
  },
  {
    slug: 'tata-scholarship-cornell',
    name: 'Tata Scholarship for Cornell University',
    organization: 'Tata Education and Development Trust',
    logoText: 'T',
    logoColor: '#f97316',
    fundingAmount: 'Need-based financial aid',
    fundingType: 'Partially Funded',
    country: 'USA',
    studyLevel: 'Undergraduate',
    category: 'Need-Based',
    eligibility: 'Indian undergraduate students admitted to Cornell University',
    shortDescription:
      'Need-based financial aid for Indian citizens pursuing undergraduate study at Cornell University, helping bridge the gap between family contribution and total cost.',
    fullDescription:
      'The Tata Scholarship for Cornell University provides need-based financial aid to Indian undergraduate students admitted to Cornell. Established through a gift from Tata Education and Development Trust, the scholarship aims to make a Cornell education more accessible to talented Indian students regardless of financial background.',
    tags: ['Need-Based', 'India', 'USA'],
    benefits: [
      'Reduces the gap between financial aid and total cost of attendance',
      'Renewable each year based on continued financial need',
      'Access to Cornell\'s full undergraduate financial aid resources',
    ],
    eligibilityCriteria: [
      'Indian citizen admitted to Cornell University as an undergraduate',
      'Demonstrated financial need as assessed by Cornell financial aid office',
      'Maintain satisfactory academic progress to retain the award',
    ],
    requiredDocuments: [
      'Cornell undergraduate admission application',
      'CSS Profile and financial aid documents',
      'Proof of family income and assets',
      'Admission offer letter',
    ],
    applicationProcess: [
      'Apply for undergraduate admission to Cornell University',
      'Submit financial aid application (CSS Profile) alongside admission',
      'Cornell financial aid office assesses need and eligibility',
      'Tata Scholarship is automatically considered for eligible Indian admits',
    ],
    importantInfo: [
      'Awarded automatically as part of Cornell\'s financial aid process',
      'No separate scholarship-specific application required',
    ],
    officialLink: 'https://finaid.cornell.edu/',
    featured: true,
    recentlyAdded: false,
  },
  {
    slug: 'inlaks-scholarship',
    name: 'Inlaks Scholarship',
    organization: 'Inlaks Shivdasani Foundation',
    logoText: 'I',
    logoColor: '#a855f7',
    fundingAmount: 'Up to $100,000 depending on program',
    fundingType: 'Fully Funded',
    country: 'Global',
    studyLevel: 'Postgraduate',
    category: 'Merit',
    eligibility: 'Indian citizens under 30 admitted to a top global graduate program',
    shortDescription:
      'Supports outstanding Indian students pursuing full-time graduate study at top-ranked universities in the US, UK, and Europe across nearly any discipline.',
    fullDescription:
      'The Inlaks Scholarship, awarded by the Inlaks Shivdasani Foundation, supports exceptionally talented young Indians pursuing full-time graduate studies abroad at leading universities. It covers a broad range of disciplines and is intended for students who show outstanding merit and potential for future leadership in their chosen field.',
    tags: ['Any Field', 'India', 'Global'],
    benefits: [
      'Substantial financial award toward tuition and living expenses',
      'One-time travel grant',
      'Access to the Inlaks alumni community',
    ],
    eligibilityCriteria: [
      'Indian citizen, ordinarily resident in India, aged 30 or below',
      'Admission (or pending admission) to a top-ranked international university',
      'Strong academic record and extracurricular achievement',
      'Not concurrently holding another major scholarship',
    ],
    requiredDocuments: [
      'Online application form',
      'Statement of purpose',
      'Academic transcripts',
      'Letters of recommendation',
      'Proof of university admission or application',
    ],
    applicationProcess: [
      'Submit online application with required essays',
      'Shortlisted candidates called for a panel interview in India',
      'Final selection by the Inlaks board',
      'Scholarship disbursed once university admission is confirmed',
    ],
    importantInfo: [
      'Applications typically open at the start of the calendar year',
      'Interviews are usually conducted in Mumbai',
    ],
    officialLink: 'https://www.inlaksfoundation.org/',
    featured: true,
    recentlyAdded: true,
  },
  {
    slug: 'national-scholarship-portal',
    name: 'National Scholarship Portal',
    organization: 'Government of India',
    logoText: 'N',
    logoColor: '#22c55e',
    fundingAmount: 'Varies by scheme',
    fundingType: 'Partially Funded',
    country: 'India',
    studyLevel: 'Undergraduate',
    category: 'Need-Based',
    eligibility: 'Indian students across school and college levels meeting scheme-specific criteria',
    shortDescription:
      'A single-window platform hosting central and state government scholarship schemes for Indian students, covering merit-based and need-based categories.',
    fullDescription:
      'The National Scholarship Portal (NSP) is a one-stop platform developed by the Government of India for the application and disbursement of scholarships to students under various central and state government schemes. It covers pre-matric, post-matric, merit-based, and minority scholarships spanning school and college levels across the country.',
    tags: ['Merit', 'Need-Based', 'India'],
    benefits: [
      'Tuition fee reimbursement or waiver depending on scheme',
      'Maintenance allowance for eligible students',
      'Direct benefit transfer to student bank accounts',
    ],
    eligibilityCriteria: [
      'Indian citizen enrolled in a recognized school or institution',
      'Family income within scheme-specified limits',
      'Meets academic performance criteria of the specific scheme',
      'Valid Aadhaar-linked bank account',
    ],
    requiredDocuments: [
      'Aadhaar card',
      'Income certificate',
      'Previous year mark sheet',
      'Bank account details',
      'Institution verification documents',
    ],
    applicationProcess: [
      'Register on the National Scholarship Portal',
      'Select the relevant scholarship scheme',
      'Fill in academic and personal details',
      'Upload required documents',
      'Institution and state verification before disbursement',
    ],
    importantInfo: [
      'Portal typically opens for fresh and renewal applications each academic year',
      'Verification is done at the institution and state government level',
    ],
    officialLink: 'https://scholarships.gov.in/',
    featured: true,
    recentlyAdded: true,
  },
  {
    slug: 'kvpy-inspire-fellowship',
    name: 'INSPIRE Scholarship',
    organization: 'Department of Science & Technology, India',
    logoText: 'IN',
    logoColor: '#14b8a6',
    fundingAmount: '₹80,000 per year',
    fundingType: 'Partially Funded',
    country: 'India',
    studyLevel: 'Undergraduate',
    category: 'STEM',
    eligibility: 'Top-ranking students pursuing a bachelor\'s or integrated master\'s in natural sciences',
    shortDescription:
      'A government scholarship encouraging talented students to pursue basic and natural sciences at the undergraduate and integrated master\'s level.',
    fullDescription:
      'INSPIRE (Innovation in Science Pursuit for Inspired Research) Scholarship is a scheme by the Department of Science and Technology, Government of India, aimed at attracting talented students to pursue basic and natural sciences at the undergraduate level. It identifies students based on Class 12 board performance or national exam ranks and supports them through their bachelor\'s or integrated master\'s degree.',
    tags: ['STEM', 'Research', 'India'],
    benefits: [
      'Annual scholarship amount for the duration of the degree',
      'Summer research attachment opportunities with mentors',
      'Exposure to India\'s premier research institutions',
    ],
    eligibilityCriteria: [
      'Among top rank holders in Class 12 board exams (state or national)',
      'Enrolled full-time in a natural sciences bachelor\'s or integrated master\'s program',
      'Indian citizen',
    ],
    requiredDocuments: [
      'Class 12 mark sheet',
      'Proof of enrollment in an eligible program',
      'Aadhaar-linked bank account',
      'Passport-size photograph',
    ],
    applicationProcess: [
      'Register on the INSPIRE scholarship portal',
      'Upload board exam results and enrollment proof',
      'State-wise merit verification by the department',
      'Scholarship disbursed directly to verified students',
    ],
    importantInfo: [
      'Renewal each year requires maintaining satisfactory academic performance',
    ],
    officialLink: 'https://online-inspire.gov.in/',
    featured: false,
    recentlyAdded: true,
  },
  {
    slug: 'kishore-vaigyanik-protsahan-yojana',
    name: 'KVPY Fellowship',
    organization: 'Indian Institute of Science',
    logoText: 'K',
    logoColor: '#ec4899',
    fundingAmount: 'Monthly fellowship + annual contingency grant',
    fundingType: 'Partially Funded',
    country: 'India',
    studyLevel: 'Undergraduate',
    category: 'STEM',
    eligibility: 'Students with an aptitude for research in basic sciences',
    shortDescription:
      'A fellowship program encouraging students to take up research careers in basic sciences through a monthly stipend and mentorship during their degree.',
    fullDescription:
      'Kishore Vaigyanik Protsahan Yojana (KVPY) is a fellowship program aimed at attracting exceptionally talented and motivated students to pursue basic science courses and research careers. Selected fellows receive a monthly fellowship along with an annual contingency grant throughout their undergraduate and master\'s studies, along with mentorship from leading scientists.',
    tags: ['STEM', 'Research', 'India'],
    benefits: [
      'Monthly fellowship stipend',
      'Annual contingency grant for books and research material',
      'Summer camps and mentorship at leading research institutes',
    ],
    eligibilityCriteria: [
      'Enrolled in or about to join a basic science undergraduate program',
      'Cleared the relevant national aptitude test',
      'Sustained interest in pursuing a research career',
    ],
    requiredDocuments: [
      'Aptitude test scorecard',
      'Class 12 and enrollment certificates',
      'Bank account and identity proof',
    ],
    applicationProcess: [
      'Register for and appear in the national aptitude test',
      'Qualify the written test and subsequent interview',
      'Enroll in the fellowship upon selection',
      'Attend annual science camps during the fellowship',
    ],
    importantInfo: [
      'Fellowship continues through undergraduate and master\'s study, subject to performance',
    ],
    officialLink: 'https://kvpy.iisc.ac.in/',
    featured: false,
    recentlyAdded: false,
  },
]

export const countries = Array.from(new Set(scholarships.map((s) => s.country))).sort()
export const studyLevels: Scholarship['studyLevel'][] = ['School', 'Undergraduate', 'Postgraduate', 'PhD']
export const categories: Scholarship['category'][] = [
  'Merit',
  'Need-Based',
  'Sports',
  'STEM',
  'Arts',
  'Entrepreneurship',
]
export const fundingTypes: Scholarship['fundingType'][] = ['Fully Funded', 'Partially Funded']
