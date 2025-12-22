import { motion } from 'motion/react';
import {
  Mic,
  FileText,
  PenTool,
  Headphones,
  Type,
  BookOpen,
  Brain,
  Code,
  Server,
  Database,
  Cloud,
  GitBranch,
  Settings,
  CheckCircle,
  Monitor,
  Sparkles,
  Rocket,
  TrendingUp,
  Users,
  Award,
  Target,
  Shield,
  Cpu,
  HardDrive,
  Globe,
  Zap,
  Activity,
  BarChart3,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Slide 16 - AI Resume Builder
export function Slide16() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-1.5 rounded-full mb-3 border border-purple-300">
            <ImageWithFallback src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
            <span className="text-sm font-semibold text-purple-600" style={{ fontFamily: 'Inter, sans-serif' }}>AI RESUME BUILDER</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Voice-to-Resume AI</h2>
          <p className="text-base text-gray-600">Create professional resumes in minutes</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full" />
            <div className="relative z-10">
              <Mic className="w-20 h-20 mb-4" strokeWidth={1.5} />
              <h3 className="text-2xl font-black mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Speak Your Story</h3>
              <p className="text-sm text-white/90 mb-4">Just talk about your experience, skills, and achievements</p>
              <div className="space-y-2">
                {[
                  { step: '1', text: 'Start recording' },
                  { step: '2', text: 'Describe experience' },
                  { step: '3', text: 'Add skills' },
                  { step: '4', text: 'AI generates' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-2"
                  >
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center font-bold text-xs">
                      {item.step}
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <div className="bg-white rounded-3xl p-4 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8 text-purple-600" strokeWidth={2} />
                <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Professional Output</h3>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 mb-4 border-2 border-dashed border-gray-300">
                <div className="space-y-2">
                  <div className="h-3 bg-gray-300 rounded w-3/4" />
                  <div className="h-3 bg-gray-300 rounded w-1/2" />
                  <div className="h-2 bg-gray-200 rounded w-full" />
                  <div className="h-2 bg-gray-200 rounded w-5/6" />
                  <div className="h-2 bg-gray-200 rounded w-full" />
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-purple-700 transition-colors">
                  Download PDF
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-300 transition-colors">
                  Edit
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Zap, label: '2 min', desc: 'Avg time' },
                { icon: CheckCircle, label: '98%', desc: 'Accuracy' },
                { icon: Globe, label: '10+', desc: 'Templates' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + idx * 0.1 }}
                  className="bg-white rounded-xl p-3 shadow-lg text-center"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-1 text-purple-600" strokeWidth={2} />
                  <div className="text-lg font-bold text-gray-900 mb-0.5">{stat.label}</div>
                  <div className="text-[10px] text-gray-600">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Slide 17 - AI Grammar Assistant
export function Slide17() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-1.5 rounded-full mb-3 border border-blue-200">
            <ImageWithFallback src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
            <span className="text-sm font-semibold text-blue-600" style={{ fontFamily: 'Inter, sans-serif' }}>AI GRAMMAR ASSISTANT</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Master All 4 Skills</h2>
          <p className="text-base text-gray-600">AI-powered language learning</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 h-[calc(100%-8rem)]">
          {[
            {
              icon: Headphones,
              title: 'Listen',
              desc: 'AI audio lessons',
              color: 'from-blue-500 to-cyan-400',
              features: ['Native Pronunciation', 'Comprehension'],
              image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1080',
              delay: 0.2
            },
            {
              icon: Mic,
              title: 'Speak',
              desc: 'Voice analysis',
              color: 'from-purple-500 to-pink-400',
              features: ['Real-time Feedback', 'Fluency Score'],
              image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1080',
              delay: 0.3
            },
            {
              icon: BookOpen,
              title: 'Read',
              desc: 'Interactive materials',
              color: 'from-orange-500 to-red-400',
              features: ['Adaptive Content', 'Word Dictionary'],
              image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=1080',
              delay: 0.4
            },
            {
              icon: Type,
              title: 'Write',
              desc: 'Grammar & style',
              color: 'from-green-500 to-emerald-400',
              features: ['Grammar Check', 'Style Tips'],
              image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1080',
              delay: 0.5
            }
          ].map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: skill.delay }}
              className="relative overflow-hidden rounded-3xl group shadow-2xl h-full"
            >
              <ImageWithFallback
                src={skill.image}
                alt={skill.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${skill.color} opacity-90 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-80`} />
              <div className="absolute inset-0 bg-black/20" />

              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 mb-4 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg">
                    <skill.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{skill.title}</h3>
                  <p className="text-white/90 text-lg font-medium mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>{skill.desc}</p>
                </div>

                <div className="space-y-2">
                  {skill.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 bg-black/20 backdrop-blur-sm p-2 rounded-lg w-fit">
                      <CheckCircle className="w-4 h-4 text-white" />
                      <span className="text-sm text-white font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </div>
  );
}

// Slide 18 - AI Mock Interview
export function Slide18() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-1.5 rounded-full mb-3">
            <ImageWithFallback src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
            <span className="text-sm font-semibold text-indigo-600" style={{ fontFamily: 'Inter, sans-serif' }}>AI MOCK INTERVIEW</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Practice Like It's Real</h2>
          <p className="text-base text-gray-600">AI interviewer with real-time feedback</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl" style={{ height: '360px' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758520144426-edf40a58f299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBpbnRlcnZpZXclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY2MjEzMDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Interview"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute top-4 left-4 right-4">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-3 border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">AI Interviewer</h4>
                      <p className="text-white/70 text-xs">Senior recruiter</p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2">
                    <p className="text-white text-xs italic">"Tell me about a challenging project..."</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-2 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-white font-semibold text-xs">Recording...</span>
                    </div>
                    <span className="text-white text-xs">05:23</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border-2 border-green-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-8 h-8 text-green-600" strokeWidth={2} />
                <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Performance Score</h3>
              </div>
              <div className="text-center mb-3">
                <div className="text-5xl font-black text-green-600 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>8.5/10</div>
                <p className="text-gray-600 text-sm">Excellent Performance!</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Comm', score: 9.0 },
                  { label: 'Technical', score: 8.5 },
                  { label: 'Problem', score: 8.0 },
                  { label: 'Confidence', score: 8.5 }
                ].map((metric, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-2">
                    <div className="text-xs text-gray-600 mb-1">{metric.label}</div>
                    <div className="text-lg font-bold text-gray-900">{metric.score}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-xl p-4 shadow-xl"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Features</h4>
              <div className="space-y-2">
                {[
                  { icon: Brain, text: 'AI question generation' },
                  { icon: Activity, text: 'Real-time analysis' },
                  { icon: BarChart3, text: 'Performance metrics' },
                  { icon: FileText, text: 'Feedback report' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-indigo-600" strokeWidth={2} />
                    </div>
                    <span className="text-gray-700 text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 19 - Technology Stack
export function Slide19() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-cyan-100 px-6 py-2 rounded-full mb-4 border border-cyan-200">
            <ImageWithFallback src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
            <span className="text-sm font-semibold text-cyan-700" style={{ fontFamily: 'Inter, sans-serif' }}>TECHNOLOGY STACK</span>
          </div>
          <h2 className="text-6xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Built with Best-in-Class Tech</h2>
          <p className="text-xl text-gray-600">Modern, scalable, architecture</p>
        </motion.div>

        <div className="grid grid-cols-5 gap-8 mb-6">
          {[
            { name: 'Next.js', category: 'Frontend', icon: Monitor, color: 'from-black to-gray-800', desc: 'React', delay: 0.1 },
            { name: 'Nest.js', category: 'Backend', icon: Server, color: 'from-red-600 to-pink-600', desc: 'Node.js', delay: 0.2 },
            { name: 'MongoDB', category: 'DB', icon: Database, color: 'from-green-600 to-emerald-600', desc: 'NoSQL', delay: 0.3 },
            { name: 'Cloudinary', category: 'Media', icon: Cloud, color: 'from-blue-600 to-cyan-600', desc: 'SaaS', delay: 0.4 },
            { name: 'AWS', category: 'Cloud', icon: HardDrive, color: 'from-orange-600 to-yellow-600', desc: 'Infra', delay: 0.5 }
          ].map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: tech.delay }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${tech.color} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all group-hover:scale-105`}>
                <tech.icon className="w-16 h-16 text-white mx-auto mb-6" strokeWidth={1.5} />
                <div className="text-center">
                  <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>{tech.name}</h3>
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full inline-block mb-3">
                    <span className="text-xs font-semibold text-white">{tech.category}</span>
                  </div>
                  <p className="text-sm text-white/80">{tech.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Performance Metrics</h3>
          <div className="grid grid-cols-4 gap-8">
            {[
              { value: '<100ms', label: 'Response', icon: Zap },
              { value: '99.9%', label: 'Uptime', icon: Shield },
              { value: '50M+', label: 'Requests', icon: Activity },
              { value: 'A+', label: 'Security', icon: Shield }
            ].map((metric, idx) => (
              <div key={idx} className="text-center">
                <metric.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" strokeWidth={1.5} />
                <div className="text-4xl font-black text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Continuing with remaining slides 20-25...
// (Export functions for Slide20 through Slide25 following similar patterns)
