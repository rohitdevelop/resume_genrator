import React from "react";
import { Mail, Phone, MapPin, User } from "lucide-react";
import { useResume } from "../Context/ResumeContext";

const Review: React.FC = () => {
  const { resumeData } = useResume();

  const { personalInfo, experience, education, skills } = resumeData;

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border">

        {/* HEADER */}
        <div className="p-8 border-b">
          <h1 className="text-3xl font-bold text-gray-900">
            {personalInfo.fullName || "Your Name"}
          </h1>

          <div className="mt-3 flex flex-wrap gap-6 text-sm text-gray-600">
            {personalInfo.email && (
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </span>
            )}
            {personalInfo.phone && (
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {personalInfo.phone}
              </span>
            )}
            {personalInfo.location && (
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {personalInfo.location}
              </span>
            )}
          </div>
        </div>

        {/* BODY */}
        <div className="p-8 space-y-8">

          {/* SUMMARY */}
          {personalInfo.summary && (
            <section>
              <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {personalInfo.summary}
              </p>
            </section>
          )}

          {/* EXPERIENCE */}
          {experience.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Experience
              </h2>

              <div className="space-y-4">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <h3 className="font-semibold text-gray-800">
                      {exp.position}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {exp.company}
                    </p>
                    <p className="mt-1 text-gray-700 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* EDUCATION */}
          {education.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Education
              </h2>

              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-semibold text-gray-800">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {edu.institution}
                    </p>
                    {edu.gpa && (
                      <p className="text-sm text-gray-600">
                        GPA: {edu.gpa}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SKILLS */}
          {skills.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Skills
              </h2>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="px-3 py-1 text-sm border rounded-md text-gray-700"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* EMPTY STATE */}
          {!personalInfo.fullName &&
            experience.length === 0 &&
            education.length === 0 &&
            skills.length === 0 && (
              <div className="text-center text-gray-400 py-16">
                <User className="w-14 h-14 mx-auto mb-4" />
                <p>
                  Start filling your details to preview your resume here.
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Review;
