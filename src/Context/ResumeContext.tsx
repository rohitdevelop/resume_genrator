import React, { createContext, useState, useContext } from "react";

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  isCurrentRole: boolean;
  location: string;
  description: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  location: string;
}

interface Skill {
  id: string;
  name: string;
  category: string;
  level: number; // 1–5 scale
}

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  expiryDate?: string;
}

export interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedIn: string;
    portfolio: string;
    summary: string;
  };
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  certifications: Certification[];
}

export interface ResumeContextType {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

// ✅ Export only Context (not hook)
export const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

// ✅ Create a custom hook to use the context
export const useResume = (): ResumeContextType => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
};

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedIn: "",
      portfolio: "",
      summary: "",
    },
    experience: [],
    education: [],
    skills: [],
    certifications: [],
  });

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};