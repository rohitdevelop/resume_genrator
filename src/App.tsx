import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Plus, Minus } from 'lucide-react';

interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  gpa?: string;
}

interface Skill {
  id: string;
  name: string;
  level: number;
}

interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  experience: Experience[];
  education: Education[];
  skills: Skill[];
}

export default function ResumeGenerator() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      summary: ''
    },
    experience: [],
    education: [],
    skills: []
  });

  const updatePersonalInfo = (field: keyof ResumeData['personalInfo'], value: string) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      duration: '',
      description: ''
    };
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, newExp]
    }));
  };

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      duration: '',
      gpa: ''
    };
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, newEdu]
    }));
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: '',
      level: 3
    };
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill]
    }));
  };

  const updateSkill = (id: string, field: keyof Skill, value: string | number) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.map(skill =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    }));
  };

  const removeSkill = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id)
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Professional Resume Generator</h1>
          <p className="text-gray-600">Create your perfect resume in minutes</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Input Form */}
          <div className="space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                Personal Information
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={resumeData.personalInfo.fullName}
                  onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={resumeData.personalInfo.email}
                  onChange={(e) => updatePersonalInfo('email', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={resumeData.personalInfo.phone}
                  onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={resumeData.personalInfo.location}
                  onChange={(e) => updatePersonalInfo('location', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <textarea
                  placeholder="Professional Summary"
                  rows={3}
                  value={resumeData.personalInfo.summary}
                  onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-green-600" />
                  Work Experience
                </h2>
                <button
                  onClick={addExperience}
                  className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
              <div className="space-y-4">
                {resumeData.experience.map((exp) => (
                  <div key={exp.id} className="border border-gray-200 rounded-lg p-4 relative">
                    <button
                      onClick={() => removeExperience(exp.id)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                        className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Position"
                        value={exp.position}
                        onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                        className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Duration (e.g., Jan 2020 - Present)"
                      value={exp.duration}
                      onChange={(e) => updateExperience(exp.id, 'duration', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent mb-3 text-sm"
                    />
                    <textarea
                      placeholder="Job Description"
                      rows={2}
                      value={exp.description}
                      onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-sm"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-purple-600" />
                  Education
                </h2>
                <button
                  onClick={addEducation}
                  className="flex items-center gap-1 px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                >
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
              <div className="space-y-4">
                {resumeData.education.map((edu) => (
                  <div key={edu.id} className="border border-gray-200 rounded-lg p-4 relative">
                    <button
                      onClick={() => removeEducation(edu.id)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                      <input
                        type="text"
                        placeholder="Institution Name"
                        value={edu.institution}
                        onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                        className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Degree"
                        value={edu.degree}
                        onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                        className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Duration"
                        value={edu.duration}
                        onChange={(e) => updateEducation(edu.id, 'duration', e.target.value)}
                        className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      />
                      <input
                        type="text"
                        placeholder="GPA (Optional)"
                        value={edu.gpa || ''}
                        onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                        className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-600" />
                  Skills
                </h2>
                <button
                  onClick={addSkill}
                  className="flex items-center gap-1 px-3 py-1 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm"
                >
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
              <div className="space-y-3">
                {resumeData.skills.map((skill) => (
                  <div key={skill.id} className="flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="Skill Name"
                      value={skill.name}
                      onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                      className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    />
                    <select
                      value={skill.level}
                      onChange={(e) => updateSkill(skill.id, 'level', parseInt(e.target.value))}
                      className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    >
                      <option value={1}>Beginner</option>
                      <option value={2}>Basic</option>
                      <option value={3}>Intermediate</option>
                      <option value={4}>Advanced</option>
                      <option value={5}>Expert</option>
                    </select>
                    <button
                      onClick={() => removeSkill(skill.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resume Preview */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                <h1 className="text-2xl font-bold mb-2">
                  {resumeData.personalInfo.fullName || 'Your Name'}
                </h1>
                <div className="flex flex-wrap gap-4 text-sm">
                  {resumeData.personalInfo.email && (
                    <div className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      {resumeData.personalInfo.email}
                    </div>
                  )}
                  {resumeData.personalInfo.phone && (
                    <div className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      {resumeData.personalInfo.phone}
                    </div>
                  )}
                  {resumeData.personalInfo.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {resumeData.personalInfo.location}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 space-y-6">
                {resumeData.personalInfo.summary && (
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2 border-b-2 border-gray-200 pb-1">
                      Professional Summary
                    </h2>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {resumeData.personalInfo.summary}
                    </p>
                  </div>
                )}

                {resumeData.experience.length > 0 && (
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-3 border-b-2 border-gray-200 pb-1">
                      Work Experience
                    </h2>
                    <div className="space-y-4">
                      {resumeData.experience.map((exp) => (
                        <div key={exp.id} className="border-l-4 border-green-500 pl-4">
                          <h3 className="font-semibold text-gray-800">{exp.position}</h3>
                          <p className="text-green-600 font-medium text-sm">{exp.company}</p>
                          <p className="text-gray-500 text-xs mb-2">{exp.duration}</p>
                          {exp.description && (
                            <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {resumeData.education.length > 0 && (
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-3 border-b-2 border-gray-200 pb-1">
                      Education
                    </h2>
                    <div className="space-y-3">
                      {resumeData.education.map((edu) => (
                        <div key={edu.id} className="border-l-4 border-purple-500 pl-4">
                          <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                          <p className="text-purple-600 font-medium text-sm">{edu.institution}</p>
                          <div className="flex justify-between items-center text-xs text-gray-500">
                            <span>{edu.duration}</span>
                            {edu.gpa && <span>GPA: {edu.gpa}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {resumeData.skills.length > 0 && (
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-3 border-b-2 border-gray-200 pb-1">
                      Skills
                    </h2>
                    <div className="space-y-2">
                      {resumeData.skills.map((skill) => (
                        <div key={skill.id} className="flex items-center justify-between">
                          <span className="text-gray-700 text-sm font-medium">{skill.name}</span>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((level) => (
                              <div
                                key={level}
                                className={`w-3 h-3 rounded-full ${
                                  level <= skill.level
                                    ? 'bg-gradient-to-r from-orange-400 to-orange-600'
                                    : 'bg-gray-200'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {!resumeData.personalInfo.fullName && 
                 resumeData.experience.length === 0 && 
                 resumeData.education.length === 0 && 
                 resumeData.skills.length === 0 && (
                  <div className="text-center text-gray-500 py-12">
                    <User className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg mb-2">Start building your resume!</p>
                    <p className="text-sm">Fill in your information on the left to see your professional resume appear here.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}