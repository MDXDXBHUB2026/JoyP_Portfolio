import {
  CareerRole,
  EducationItem,
  TrainingItem,
  CapabilityItem,
  ApproachStep,
  EcosystemNode,
  ConstellationNode,
  StoryChapter
} from '../types';

export const PERSONAL_INFO = {
  name: 'JOY L. PEREZ',
  title: 'Special Education Teacher',
  descriptor: 'Special Education | Inclusive Learning | Individualized Education | Student Development',
  location: 'Dubai, United Arab Emirates',
  languages: [
    { name: 'English', proficiency: 'Professional Working Proficiency' },
    { name: 'Tagalog', proficiency: 'Native / Bilingual' }
  ],
  resumeUrl: '/joy-perez-resume.pdf',
  email: 'joy.perez.specialed@gmail.com', // Professional placeholder email
  philosophyStatement: 'Teaching is not about asking every learner to follow the same path. It is about understanding the learner and helping create the path that allows them to progress.',
  whyITeachStatement: 'Creating environments where every learner can participate, develop and belong.'
};

export const STORY_CHAPTERS: StoryChapter[] = [
  { id: 'chapter-1', number: 'CHAPTER 01', title: 'Understanding the Learner', theme: 'Observation & Needs Assessment' },
  { id: 'chapter-2', number: 'CHAPTER 02', title: 'Individualizing the Journey', theme: 'IEPs & Differentiated Instruction' },
  { id: 'chapter-3', number: 'CHAPTER 03', title: 'Building Support Around the Student', theme: 'Multidisciplinary Collaboration' },
  { id: 'chapter-4', number: 'CHAPTER 04', title: 'Measuring Progress', theme: 'Continuous Assessment & Evolution' },
  { id: 'chapter-5', number: 'CHAPTER 05', title: 'Continuing to Learn', theme: 'Lifelong Professional Development' },
];

export const CONSTELLATION_NODES: ConstellationNode[] = [
  {
    id: 'potential',
    title: 'Potential',
    subtitle: 'Unlocking Innate Strengths',
    description: 'Identifying and nurturing the individual strengths and capabilities within each student.',
    color: '#38BDF8', // Cyan
    angle: 0,
    distance: 145
  },
  {
    id: 'communication',
    title: 'Communication',
    subtitle: 'Expressive & Receptive Growth',
    description: 'Fostering language, non-verbal cues, and assistive tools to give every child a voice.',
    color: '#2DD4BF', // Teal
    angle: 60,
    distance: 140
  },
  {
    id: 'independence',
    title: 'Independence',
    subtitle: 'Empowering Daily Autonomy',
    description: 'Building functional life and self-help skills grounded in physical therapy and behavioral support.',
    color: '#E2C37A', // Gold
    angle: 120,
    distance: 145
  },
  {
    id: 'confidence',
    title: 'Confidence',
    subtitle: 'Emotional & Social Security',
    description: 'Creating positive, affirming classroom experiences where students feel secure to explore.',
    color: '#A78BFA', // Violet
    angle: 180,
    distance: 140
  },
  {
    id: 'participation',
    title: 'Participation',
    subtitle: 'Active Inclusive Engagement',
    description: 'Ensuring meaningful involvement in classroom activities through adaptive learning methods.',
    color: '#34D399', // Emerald
    angle: 240,
    distance: 145
  },
  {
    id: 'growth',
    title: 'Growth',
    subtitle: 'Holistic Milestone Evolution',
    description: 'Tracking developmental milestones and evolving individualized goals as children progress.',
    color: '#60A5FA', // Blue
    angle: 300,
    distance: 140
  }
];

export const CAREER_SNAPSHOTS = [
  {
    id: 'special-ed',
    title: 'SPECIAL EDUCATION',
    subtitle: 'Supporting diverse abilities',
    description: '15+ years creating inclusive, supportive, and engaging learning environments for students with diverse cognitive, physical, and behavioral needs.',
    accent: 'teal'
  },
  {
    id: 'individualized',
    title: 'INDIVIDUALIZED LEARNING',
    subtitle: 'IEP-driven development',
    description: 'Tailoring curriculum and pacing through customized Individualized Education Programs that honor each student’s unique developmental profile.',
    accent: 'gold'
  },
  {
    id: 'multidisciplinary',
    title: 'MULTIDISCIPLINARY SUPPORT',
    subtitle: 'Working across specialist teams',
    description: 'Seamlessly aligning pedagogical strategies with speech therapists, occupational therapists, psychologists, and families for holistic student care.',
    accent: 'blue'
  },
  {
    id: 'adaptive',
    title: 'ADAPTIVE LEARNING',
    subtitle: 'Technology & physical therapy synthesis',
    description: 'Integrating assistive technologies, sensory tools, and physical therapy principles to optimize engagement and physical accessibility.',
    accent: 'emerald'
  }
];

export const CORE_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'iep',
    title: 'Individualized Education Programs (IEP)',
    shortDesc: 'Development and implementation of customized IEPs addressing distinct student abilities and developmental requirements.',
    fullDesc: 'Expertise in formulating structured, measurable, and realistic educational goals tailored to each student’s specific disability, cognitive profile, and learning trajectory.',
    practicalApplication: 'Regularly reviews, documents, and updates IEP benchmarks in alignment with multi-specialist evaluations and classroom observations.',
    iconName: 'FileText',
    tag: 'Pedagogical Framework'
  },
  {
    id: 'differentiated-instruction',
    title: 'Differentiated Instruction',
    shortDesc: 'Modifying educational content, activities, and instructional approaches for diverse learning styles and disabilities.',
    fullDesc: 'Adapting lesson structures, sensory modalities (visual, auditory, tactile, kinesthetic), and complexity levels to ensure all learners access curriculum content effectively.',
    practicalApplication: 'Designs multi-tiered classroom tasks allowing students of varying abilities to participate in shared learning themes simultaneously.',
    iconName: 'Layers',
    tag: 'Instructional Design'
  },
  {
    id: 'assistive-tech',
    title: 'Adaptive & Assistive Technology',
    shortDesc: 'Use of adaptive tools and assistive technologies to enhance students’ communication and learning experiences.',
    fullDesc: 'Leveraging assistive communication devices, adaptive keyboards, visual schedules, and specialized software to break accessibility barriers.',
    practicalApplication: 'Integrates digital tablets, tactile communication boards, and sensory-friendly tools into daily classroom routines.',
    iconName: 'Cpu',
    tag: 'Accessibility Tools'
  },
  {
    id: 'assessment',
    title: 'Student Progress Assessment',
    shortDesc: 'Conducting ongoing assessments, monitoring developmental progress, and modifying instructional approaches according to evolving needs.',
    fullDesc: 'Employing continuous formative observation, behavioral recording, and developmental milestone tracking to evaluate the effectiveness of interventions.',
    practicalApplication: 'Maintains systematic assessment portfolios that inform instructional adjustments and parent-specialist progress reviews.',
    iconName: 'TrendingUp',
    tag: 'Progress Evaluation'
  },
  {
    id: 'inclusive-classroom',
    title: 'Inclusive Classroom Development',
    shortDesc: 'Building positive classroom environments supporting inclusion, active participation, and individual growth.',
    fullDesc: 'Structuring classroom layouts, predictable routines, and sensory quiet zones that cultivate safety, dignity, and active belonging for every student.',
    practicalApplication: 'Establishes clear visual cues, structured transitions, and calm spaces that minimize anxiety and promote student self-regulation.',
    iconName: 'LayoutGrid',
    tag: 'Learning Environment'
  },
  {
    id: 'social-skills',
    title: 'Social Skills Development',
    shortDesc: 'Using engaging learning activities to promote peer communication, interaction, and social-emotional development.',
    fullDesc: 'Facilitating structured social play, turn-taking games, guided peer interactions, and emotional recognition exercises.',
    practicalApplication: 'Implements social stories and collaborative group tasks to build peer relationships and community participation.',
    iconName: 'Users',
    tag: 'Social-Emotional'
  },
  {
    id: 'collaboration',
    title: 'Multidisciplinary Collaboration',
    shortDesc: 'Working alongside speech therapists, occupational therapists, psychologists, teachers, and parents for holistic care.',
    fullDesc: 'Uniting insights from clinical and therapeutic disciplines into daily classroom practice to ensure cohesive, reinforced support across all environments.',
    practicalApplication: 'Conducts regular case coordination meetings to align sensory, motor, speech, and behavioral strategies.',
    iconName: 'Network',
    tag: 'Holistic Support'
  },
  {
    id: 'advocacy-communication',
    title: 'Student Advocacy & Communication',
    shortDesc: 'Strong commitment to advocating for student needs while maintaining clear, empathetic communication across stakeholder teams.',
    fullDesc: 'Championing the developmental, physical, and emotional rights of Special Education students while maintaining open, transparent dialogue with families.',
    practicalApplication: 'Partners closely with parents to bridge classroom accommodations with home routines and community participation.',
    iconName: 'HeartHandshake',
    tag: 'Care & Advocacy'
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: '01',
    title: 'Understand',
    summary: 'Observe the learner’s abilities, needs, and learning environment.',
    detail: 'Initial comprehensive observation of the student’s sensory preferences, communicative habits, physical mobility, and behavioral triggers in both structured and unstructured settings.',
    keyActions: [
      'Observational baseline recording',
      'Sensory & motor needs assessment',
      'Review of therapeutic & historical reports'
    ]
  },
  {
    step: '02',
    title: 'Individualize',
    summary: 'Develop appropriate learning goals and individualized educational strategies.',
    detail: 'Formulating customized Individualized Education Programs (IEP) with targeted, achievable, and scaffolded objectives tailored specifically to the child’s unique pace.',
    keyActions: [
      'Customized IEP goal formulation',
      'Scaffolded learning path design',
      'Alignment with developmental milestones'
    ]
  },
  {
    step: '03',
    title: 'Adapt',
    summary: 'Modify learning materials, methods, and assistive tools according to student needs.',
    detail: 'Adapting curricula, creating visual aids, utilizing tactile materials, and introducing appropriate assistive technologies that lower barriers to comprehension.',
    keyActions: [
      'Differentiated instructional materials',
      'Assistive & adaptive technology integration',
      'Sensory-friendly adjustments'
    ]
  },
  {
    step: '04',
    title: 'Collaborate',
    summary: 'Work alongside educators, therapists, psychologists, and families.',
    detail: 'Synchronizing classroom strategies with Speech-Language Pathologists, Occupational Therapists, and families to reinforce therapeutic practices within the educational setting.',
    keyActions: [
      'Multidisciplinary case alignment',
      'Parent-teacher communication channels',
      'Therapeutic exercise reinforcement'
    ]
  },
  {
    step: '05',
    title: 'Assess',
    summary: 'Track student development and identify areas requiring adjustment.',
    detail: 'Conducting ongoing formative evaluation, documenting behavioral progress, and measuring milestone attainment against initial IEP benchmarks.',
    keyActions: [
      'Continuous formative observation',
      'Milestone & behavioral tracking',
      'Periodic progress documentation'
    ]
  },
  {
    step: '06',
    title: 'Evolve',
    summary: 'Continuously refine learning strategies as the student’s needs develop.',
    detail: 'Iteratively updating goals, increasing task independence, and transitioning instructional approaches as the student masters foundational skills.',
    keyActions: [
      'IEP objective advancement',
      'Transition planning & independence scaffolding',
      'Refining accommodations for long-term growth'
    ]
  }
];

export const CAREER_JOURNEY: CareerRole[] = [
  {
    id: 'role-special-ed',
    title: 'Special Education Teacher',
    organization: 'Shaikha Maitha Bint Rashid Al Maktoum Foundation for Special Needs',
    location: 'Dubai, United Arab Emirates',
    period: 'September 2010 – Present',
    startYear: 2010,
    endYear: 'Present',
    category: 'Special Education',
    isFeatured: true,
    summary: 'Leading specialized classroom instruction, designing customized Individualized Education Programs (IEPs), and collaborating with multidisciplinary therapy teams to deliver inclusive, high-quality education for students with diverse disabilities.',
    keyContributions: [
      'Develop and implement customized Individualized Education Programs (IEPs) for students with different disabilities and educational needs.',
      'Apply innovative teaching methodologies appropriate for diverse learning styles and sensory profiles.',
      'Use adaptive technologies and assistive communication tools to support individual learning.',
      'Collaborate with speech therapists, occupational therapists, and psychologists to ensure cohesive intervention.',
      'Conduct ongoing assessment of student development and modify instructional approaches according to student progress.',
      'Support social-skills development through structured and engaging group activities.',
      'Maintain an inclusive, positive, and supportive classroom environment prioritizing student safety and emotional well-being.'
    ],
    capabilities: [
      {
        title: 'IEP Development',
        description: 'Formulating and managing customized Individualized Education Programs tailored to individual developmental requirements.'
      },
      {
        title: 'Adaptive Teaching',
        description: 'Modifying pedagogical strategies, pacing, and sensory engagement for diverse cognitive abilities.'
      },
      {
        title: 'Assistive Learning Technology',
        description: 'Integrating assistive digital tools, communication aids, and tactile resources.'
      },
      {
        title: 'Student Assessment',
        description: 'Conducting continuous developmental evaluations to guide instructional adjustments.'
      },
      {
        title: 'Multidisciplinary Collaboration',
        description: 'Partnering actively with speech therapists, occupational therapists, psychologists, and parents.'
      },
      {
        title: 'Social Development',
        description: 'Fostering peer interactions, emotional expression, and community participation through structured activities.'
      }
    ]
  },
  {
    id: 'role-classroom-assistant',
    title: 'Classroom Assistant',
    organization: 'Shaikha Maitha Bint Rashid Al Maktoum Foundation for Special Needs',
    location: 'Dubai, United Arab Emirates',
    period: 'September 2008 – 2009',
    startYear: 2008,
    endYear: 2009,
    category: 'Classroom Support',
    summary: 'Provided hands-on educational and classroom support, marking an essential and transformative transition from physical rehabilitation into specialized classroom instruction.',
    keyContributions: [
      'Assisted lead educators in managing daily classroom routines and student accommodations.',
      'Supported students with diverse needs during individual and group learning sessions.',
      'Assisted with the preparation of differentiated instructional materials and adaptive aids.',
      'Helped maintain a calm, organized, and supportive learning environment.'
    ]
  },
  {
    id: 'role-physiotherapist-vlcc',
    title: 'Physiotherapist',
    organization: 'VLCC Slimming Center',
    location: 'Dubai, United Arab Emirates',
    period: 'September 2006 – August 2008',
    startYear: 2006,
    endYear: 2008,
    category: 'Healthcare & Rehabilitation',
    summary: 'Delivered professional physiotherapy, posture assessment, and physical rehabilitation in Dubai, deepening practical understanding of biomechanics and physical well-being.',
    keyContributions: [
      'Conducted physical assessments and planned individualized physical therapy regimens.',
      'Guided clients through therapeutic exercises to improve mobility, muscle tone, and posture.',
      'Maintained thorough clinical documentation and tracked client physical progression.'
    ]
  },
  {
    id: 'role-sr-healthcare-assistant',
    title: 'Senior Healthcare Assistant',
    organization: 'Lourdes Hospital',
    location: 'Iriga City, Philippines',
    period: 'May 15, 2003 – June 2006',
    startYear: 2003,
    endYear: 2006,
    category: 'Healthcare & Rehabilitation',
    summary: 'Delivered clinical patient care and patient support services in a respected hospital setting, reinforcing clinical rigor, patience, and empathetic care.',
    keyContributions: [
      'Provided dedicated patient care support and assisted medical staff in hospital wards.',
      'Monitored patient comfort, vital records, and mobility assistance.',
      'Collaborated within hospital care teams to deliver compassionate and safe patient support.'
    ]
  },
  {
    id: 'role-vol-healthcare-assistant',
    title: 'Volunteer Healthcare Assistant',
    organization: 'Lourdes Hospital',
    location: 'Iriga City, Philippines',
    period: 'September 1, 2002 – April 30, 2003',
    startYear: 2002,
    endYear: 2003,
    category: 'Healthcare & Rehabilitation',
    summary: 'Contributed volunteer clinical assistance across hospital departments, supporting patient recovery, physical comfort, and team workflows.',
    keyContributions: [
      'Assisted nursing and medical staff in daily patient care routines.',
      'Supported patient transport, bed-side care, and physical comfort measures.'
    ]
  },
  {
    id: 'role-staff-pt',
    title: 'Staff Physical Therapist',
    organization: 'Camarines Norte Physical Therapy Clinic',
    location: 'Daet, Camarines Norte, Philippines',
    period: 'November 1998 – June 2002',
    startYear: 1998,
    endYear: 2002,
    category: 'Healthcare & Rehabilitation',
    summary: 'Administered clinical physical therapy and rehabilitation programs, assessing musculoskeletal function, therapeutic exercise, and motor development.',
    keyContributions: [
      'Evaluated patient physical mobility, muscle strength, and motor coordination.',
      'Designed and administered therapeutic exercise routines and physical rehabilitation protocols.',
      'Educated patients and family members on home exercises and ergonomics.'
    ]
  }
];

export const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: 'student',
    role: 'Student (At the Center)',
    category: 'center',
    description: 'The core focus of every intervention — honored for their individual dignity, strengths, unique learning pace, and personal growth goals.',
    howJoyCollaborates: 'Centering all classroom goals around student comfort, agency, active participation, and developmental progress.'
  },
  {
    id: 'teacher',
    role: 'Special Education Teacher (Joy L. Perez)',
    category: 'educator',
    description: 'Coordinates classroom instruction, differentiates curricula, designs IEPs, and serves as the primary educational facilitator.',
    howJoyCollaborates: 'Synthesizes clinical and pedagogical insights into engaging daily classroom activities and supportive routines.'
  },
  {
    id: 'family',
    role: 'Family & Parents',
    category: 'family',
    description: 'Essential partners who provide foundational context on the child’s home life, preferences, cultural background, and emotional needs.',
    howJoyCollaborates: 'Maintains open, empathetic communication, shares progress updates, and aligns home routines with classroom strategies.'
  },
  {
    id: 'speech-therapist',
    role: 'Speech-Language Pathologist',
    category: 'therapist',
    description: 'Focuses on receptive and expressive language, articulation, non-verbal communication, and assistive communication devices (AAC).',
    howJoyCollaborates: 'Reinforces speech exercises, vocabulary targets, and communication boards within daily classroom conversations and games.'
  },
  {
    id: 'ot-therapist',
    role: 'Occupational Therapist',
    category: 'therapist',
    description: 'Addresses fine motor skills, sensory integration, hand-eye coordination, and adaptive self-care functioning.',
    howJoyCollaborates: 'Incorporates sensory breaks, adaptive writing utensils, and fine-motor activities directly into lesson planning.'
  },
  {
    id: 'psychologist',
    role: 'Educational / Child Psychologist',
    category: 'psychology',
    description: 'Evaluates cognitive profiles, emotional well-being, and designs behavioral support plans for complex challenges.',
    howJoyCollaborates: 'Implements consistent positive behavior support strategies, structured visual schedules, and emotional regulation techniques.'
  },
  {
    id: 'learning-support',
    role: 'Learning Support Staff & Shadows',
    category: 'educator',
    description: 'Provides dedicated one-on-one and small group scaffolding to facilitate seamless classroom inclusion.',
    howJoyCollaborates: 'Provides instructional guidance, differentiated resources, and feedback to ensure cohesive support throughout the day.'
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'postgrad-sped',
    degree: 'Postgraduate — Special Education',
    institution: 'Postgraduate Program in Special Education',
    graduationDate: 'June 2019',
    highlight: true,
    credentialType: 'Postgraduate',
    details: 'Advanced graduate study focused on specialized pedagogy, Individualized Education Program (IEP) development, assessment of diverse learning needs, and contemporary inclusive education strategies.'
  },
  {
    id: 'methods-teaching',
    degree: 'Methods of Teaching',
    institution: 'Ateneo de Naga University',
    location: 'Naga City, Philippines',
    graduationDate: 'May 2004',
    credentialType: 'Teaching Methods',
    details: 'Comprehensive pedagogical training covering instructional planning, curriculum development, classroom management, and student learning evaluation methods.'
  },
  {
    id: 'bs-pt',
    degree: 'Bachelor of Science in Physical Therapy',
    institution: 'Pines City Educational Center',
    location: 'Baguio City, Philippines',
    graduationDate: 'October 1997',
    credentialType: 'Bachelor of Science',
    details: 'Rigorous 5-year clinical degree program in human anatomy, neurodevelopment, biomechanics, motor rehabilitation, and physical assessment.'
  },
  {
    id: 'ago-medical',
    degree: 'Academic Units in Medical & Health Sciences',
    institution: 'Ago Medical and Educational Center',
    location: 'Legaspi City, Albay, Philippines',
    graduationDate: '1991 – 1994',
    credentialType: 'Academic Units',
    details: 'Foundational academic coursework in health sciences and basic medical sciences.'
  }
];

export const PROFESSIONAL_TRAINING: TrainingItem[] = [
  {
    id: 'training-rbt',
    title: 'Registered Behavior Technician (RBT) Training',
    organization: '40-Hour RBT Training Curriculum',
    year: 'Continuous Learning',
    category: 'Behavior & RBT',
    description: 'Completed the comprehensive 40-hour training course covering the foundational RBT task list requirements outlined by the Behavior Analyst Certification Board (BACB).',
    note: 'Completed full 40-hour curriculum meeting BACB training requirements.'
  },
  {
    id: 'training-autism-symposium',
    title: 'Autism Around the World Symposium',
    organization: 'Zayed University',
    location: 'Dubai, UAE',
    year: 'May 6–8, 2010',
    category: 'Autism & Interventions',
    description: 'Intensive multi-day international symposium featuring specialized workshop tracks on evidence-based autism interventions and inclusive education.',
    workshops: [
      'Applied Behavioral Techniques',
      'Applied Behavioral Analysis in School',
      'Feeding Techniques & Mealtime Routines',
      'Diet, Nutrition and Picky Eaters',
      'Asperger Workshop & Social Nuances',
      'Communication Tools at Home',
      'Bio-Medical Treatment for Autism 101',
      'Role of the School Shadow',
      'Temprana Solutions for Professionals'
    ]
  },
  {
    id: 'training-early-intervention',
    title: 'Framework for Early Intervention',
    organization: 'Dubai Early Childhood Development Centre',
    location: 'Dubai, UAE',
    year: 'September 5–8, 2011',
    category: 'Autism & Interventions',
    description: 'Specialized training program focusing on early identification, developmental screening, and family-centered intervention frameworks for young learners with special needs.'
  },
  {
    id: 'training-princess-haya-2015',
    title: 'Breaking Boundaries, Creating Excellence',
    organization: 'Executive Committee of Princess Haya Award for Special Education',
    location: 'Dubai, UAE',
    year: '2015',
    category: 'Excellence & Awards',
    description: 'Professional development forum exploring international best practices, innovative instructional models, and excellence standards in Special Needs education.'
  },
  {
    id: 'training-princess-haya-2013',
    title: 'Breaking Boundaries, Creating Excellence',
    organization: 'Executive Committee of Princess Haya Award for Special Education',
    location: 'Dubai, UAE',
    year: '2013',
    category: 'Excellence & Awards',
    description: 'Advanced symposium on pedagogical innovation, inclusive school culture, and multidisciplinary coordination in special education.'
  },
  {
    id: 'training-elderly-handicapped',
    title: 'Caring for Elderly and Handicapped',
    organization: 'Louise de Marillac Foundation',
    location: 'Philippines',
    year: 'March 2003',
    category: 'Rehabilitation & Care',
    description: 'Community-based training in compassionate caregiving, mobility assistance, and dignity-centered physical support for individuals with physical limitations.'
  }
];

export const SKILLS_MATRIX = {
  pedagogyAndIEP: [
    'Individualized Education Programs (IEPs)',
    'Differentiated Instruction',
    'Special Education Pedagogy',
    'Student Progress Assessment',
    'Inclusive Classroom Development',
    'Behavior Support Strategies',
    'Early Intervention Frameworks'
  ],
  adaptiveAndAssistive: [
    'Adaptive Learning Tools',
    'Assistive Technology Integration',
    'Visual & Tactile Learning Aids',
    'Sensory Integration Adaptation',
    'Motor Skills & Positioning Support',
    'Social Skills Facilitation'
  ],
  collaborativeAndCare: [
    'Multidisciplinary Team Collaboration',
    'Parent & Family Communication',
    'Speech & OT Therapy Alignment',
    'Student Needs Advocacy',
    'Child Development Support',
    'Physical Therapy Principles in Classroom'
  ],
  digitalTools: [
    { name: 'MS Word', category: 'Documentation & IEP Reports' },
    { name: 'MS Excel', category: 'Student Progress & Data Tracking' },
    { name: 'MS PowerPoint', category: 'Visual Lessons & Presentations' },
    { name: 'MS Access', category: 'Classroom Records & Databases' },
    { name: 'Adobe Photoshop', category: 'Custom Visual Aids & Learning Cards' }
  ],
  personalStrengths: [
    { title: 'Patient', desc: 'Deep calm and steady pacing tailored to each student’s processing speed.' },
    { title: 'Collaborative', desc: 'Proactive in uniting therapists, teachers, and parents around unified goals.' },
    { title: 'Honest', desc: 'Transparent and constructive in student assessments and family dialogues.' },
    { title: 'Hardworking', desc: 'Dedicated to thorough lesson preparation and continuous follow-through.' },
    { title: 'Team-Oriented', desc: 'Valuing shared expertise and interdisciplinary synergy for holistic child progress.' }
  ]
};

export const INTERNATIONAL_CAREER_CONTENT = {
  headline: 'Open to the Next Chapter',
  subheading: 'Experienced Special Education professional bringing over a decade and a half of UAE special education practice, combined with a foundational clinical background in physical therapy, to inclusive learning environments internationally.',
  pillars: [
    {
      title: 'Multicultural Classroom Expertise',
      description: 'Extensive experience in Dubai’s vibrant, international educational landscape, collaborating respectfully with diverse families and multidisciplinary specialists.'
    },
    {
      title: 'Unique Interdisciplinary Synthesis',
      description: 'A distinctive professional bridge linking physical therapy, neurodevelopmental understanding, and specialized classroom teaching.'
    },
    {
      title: 'Differentiated & IEP Specialization',
      description: 'Proven track record of customizing curriculum, sensory environments, and assistive tools for students across diverse ability spectrums.'
    }
  ]
};
