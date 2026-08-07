export interface CyberType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  examples: string[];
  severity: 'alta' | 'critica' | 'moderada';
  iconName: string;
}

export interface LegalItem {
  law: string;
  year: string;
  title: string;
  description: string;
  penalties?: string;
  impact: string;
}

export interface ActionGuide {
  id: 'victims' | 'parents' | 'schools' | 'witnesses';
  role: string;
  title: string;
  icon: string;
  summary: string;
  steps: {
    title: string;
    description: string;
    importantBadge?: string;
  }[];
  donits: string[];
}

export interface Scenario {
  id: string;
  title: string;
  situation: string;
  immediateActions: string[];
  legalSteps: string[];
  psychologicalAdvice: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    isCyberbullying: boolean;
    explanation: string;
  }[];
}

export interface EmergencyContact {
  name: string;
  phone: string;
  description: string;
  badge: string;
  url?: string;
  is24h: boolean;
}

export interface AcademicProjectInfo {
  university: string;
  course: string;
  discipline: string;
  advisor: string;
  students: string[];
  year: string;
}
