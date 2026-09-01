export interface CareerRole {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  startYear: number;
  endYear: number | 'Present';
  category: 'Special Education' | 'Classroom Support' | 'Healthcare & Rehabilitation';
  summary: string;
  keyContributions: string[];
  isFeatured?: boolean;
  capabilities?: {
    title: string;
    description: string;
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  graduationDate: string;
  highlight?: boolean;
  details: string;
  credentialType: 'Postgraduate' | 'Teaching Methods' | 'Bachelor of Science' | 'Academic Units';
}

export interface TrainingItem {
  id: string;
  title: string;
  organization: string;
  location?: string;
  year: string;
  category: 'Behavior & RBT' | 'Autism & Interventions' | 'Excellence & Awards' | 'Rehabilitation & Care';
  description: string;
  workshops?: string[];
  note?: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  practicalApplication: string;
  iconName: string;
  tag: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  summary: string;
  detail: string;
  keyActions: string[];
}

export interface EcosystemNode {
  id: string;
  role: string;
  category: 'center' | 'therapist' | 'educator' | 'family' | 'psychology';
  description: string;
  howJoyCollaborates: string;
}

export interface ConstellationNode {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  angle: number; // in degrees for circular layout
  distance: number; // percentage from center
}

export interface StoryChapter {
  id: string;
  number: string;
  title: string;
  theme: string;
}
