 import { Search, Building2, MousePointerClick } from "lucide-react";
 import type { LucideIcon } from "lucide-react";

// ✅ Type definition for feature items
interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const Home: React.FC = () => {
  const features: Feature[] = [
    {
      icon: Search,
      title: "Smart Search",
      description: "Find jobs quickly using smart filters and recommendations.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Building2,
      title: "Top Companies",
      description: "Work with trusted and verified companies worldwide.",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: MousePointerClick,
      title: "Easy Apply",
      description: "Apply to jobs in just one click with your profile.",
      color: "from-orange-400 to-red-400",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Find Your{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Dream Job
          </span>
          <br /> Faster Than Ever
        </h1>

        <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
          Discover thousands of job opportunities and get hired by top companies worldwide.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">
            Get Started
          </button>

          <button className="px-7 py-3 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition">
            Browse Jobs
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["10K+", "Jobs Posted"],
            ["5K+", "Companies"],
            ["15K+", "Candidates"],
            ["98%", "Success Rate"],
          ].map(([value, label], i) => (
            <div key={i}>
              <h2 className="text-3xl font-bold text-blue-600">{value}</h2>
              <p className="text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* soft gradient glow */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition`}
                />

                <div className="relative">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-cyan-500">
        <h2 className="text-3xl font-bold text-white">Ready to start your career?</h2>
        <p className="mt-4 text-blue-100">Join thousands of professionals today.</p>
        <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:scale-105 transition">
          Join Now
        </button>
      </section>
    </div>
  );
};

export default Home;
