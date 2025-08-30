import React from "react";
import { Mail, Phone, MapPin, User } from "lucide-react";
import { useResume } from "../Context/ResumeContext";

const Review: React.FC = () => {
  const { resumeData } = useResume();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <h1 className="text-3xl font-bold">{resumeData.personalInfo.fullName || "Your Name"}</h1>
          <div className="flex flex-wrap gap-4 text-sm mt-2">
            {resumeData.personalInfo.email && <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> {resumeData.personalInfo.email}</span>}
            {resumeData.personalInfo.phone && <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> {resumeData.personalInfo.phone}</span>}
            {resumeData.personalInfo.location && <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {resumeData.personalInfo.location}</span>}
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Summary */}
          {resumeData.personalInfo.summary && (
            <section>
              <h2 className="text-lg font-semibold border-b mb-2">Summary</h2>
              <p>{resumeData.personalInfo.summary}</p>
            </section>
          )}

          {/* Experience */}
          {resumeData.experience.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold border-b mb-2">Experience</h2>
              {resumeData.experience.map(exp => (
                <div key={exp.id} className="mb-3">
                  <h3 className="font-semibold">{exp.position}</h3>
                  <p className="text-sm text-gray-600">{exp.company}</p>
                  <p className="text-sm">{exp.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Education */}
          {resumeData.education.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold border-b mb-2">Education</h2>
              {resumeData.education.map(edu => (
                <div key={edu.id} className="mb-3">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-gray-600">{edu.institution}</p>
                  {edu.gpa && <p className="text-sm">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </section>
          )}

          {/* Skills */}
          {resumeData.skills.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold border-b mb-2">Skills</h2>
              <ul className="list-disc pl-5">
                {resumeData.skills.map(skill => (
                  <li key={skill.id}>{skill.name} ({["Beginner","Basic","Intermediate","Advanced","Expert"]})</li>
                ))}
              </ul>
            </section>
          )}

          {/* Empty State */}
          {!resumeData.personalInfo.fullName && resumeData.experience.length === 0 &&
           resumeData.education.length === 0 && resumeData.skills.length === 0 && (
            <div className="text-center text-gray-500 py-10">
              <User className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>Fill in your details on the Home page to generate your resume!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
