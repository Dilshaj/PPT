import { motion } from 'motion/react';
import {
  MessageCircle,
  Phone,
  Video,
  Heart,
  Share,
  ThumbsUp,
  MessageSquare,
  Zap,
  Award,
  Users,
  Layers,
  Network,
  Briefcase,
  Newspaper,
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
  Target,
  Shield,
  Cpu,
  HardDrive,
  Globe,
  ChartBar,
  Activity
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Slide 12 - Communication Features
export function Slide12() {
  return (
    <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cyan-100 px-4 py-1.5 rounded-full mb-3 border border-cyan-200">
            <ImageWithFallback src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
            <span className="text-sm font-semibold text-cyan-700" style={{ fontFamily: 'Inter, sans-serif' }}>COMMUNICATION</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Seamless Communication</h2>
          <p className="text-lg text-gray-600">Chat, voice, and video - all integrated</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-8">
          {[
            { icon: MessageCircle, title: 'Instant Chat', desc: 'Text messaging with media sharing', features: ['Group Chats', 'File Sharing', 'History'], color: 'from-blue-500 to-cyan-400', image: 'https://images.unsplash.com/photo-1530811761207-8d9d22f0a141?auto=format&fit=crop&q=80&w=1080', delay: 0.2 },
            { icon: Phone, title: 'Voice Calls', desc: 'Crystal-clear audio calls', features: ['HD Audio', 'Conferencing', 'Recording'], color: 'from-purple-500 to-pink-400', image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1080', delay: 0.4 },
            { icon: Video, title: 'Video Calls', desc: 'Face-to-face communication', features: ['HD Video', 'Screen Share', 'Virtual BG'], color: 'from-orange-500 to-red-400', image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=1080', delay: 0.6 }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: feature.delay }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-60 mix-blend-multiply`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/40 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{feature.title}</h3>
                <p className="text-gray-600 mb-6 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{feature.desc}</p>
                <div className="space-y-2">
                  {feature.features.map((item, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 justify-center text-gray-700 text-sm font-medium">
                      <CheckCircle className="w-4 h-4 text-cyan-600" />
                      <span>{item}</span>
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

// Slide 13 - Engagement System
export function Slide13() {
  return (
    <div className="w-full h-full bg-white p-6 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-1.5 rounded-full mb-3">
            <ImageWithFallback src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
            <span className="text-sm font-semibold text-pink-600" style={{ fontFamily: 'Inter, sans-serif' }}>ENGAGEMENT</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Stay Active, Stay Motivated</h2>
          <p className="text-lg text-gray-600">Gamified learning experience with rewards and recognition</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-8">
          {[
            { icon: FileText, label: 'Posts Created', count: '15.2K', growth: '+24%', color: 'from-blue-500 to-cyan-400', delay: 0.1 },
            { icon: ThumbsUp, label: 'Likes Given', count: '48.5K', growth: '+18%', color: 'from-purple-500 to-pink-400', delay: 0.2 },
            { icon: MessageSquare, label: 'Comments', count: '22.8K', growth: '+32%', color: 'from-orange-500 to-red-400', delay: 0.3 },
            { icon: Share, label: 'Shares', count: '12.4K', growth: '+15%', color: 'from-green-500 to-emerald-400', delay: 0.4 },
            { icon: Zap, label: 'Daily Streaks', count: '890', growth: '+45%', color: 'from-yellow-500 to-orange-400', delay: 0.5 },
            { icon: Award, label: 'Achievements', count: '3.2K', growth: '+28%', color: 'from-indigo-500 to-purple-400', delay: 0.6 }
          ].map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: metric.delay }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all flex flex-col items-center justify-center min-h-[200px]"
            >
              <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center shadow-lg`}>
                <metric.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{metric.count}</div>
                <div className="text-sm font-bold text-gray-700 mb-2">{metric.label}</div>
                <div className="inline-flex items-center gap-1 bg-green-100 px-3 py-1 rounded-full">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-bold text-green-600">{metric.growth}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Slide 14 - Communities & Channels
export function Slide14() {
  return (
    <div className="w-full h-full bg-white p-6 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-1.5 rounded-full mb-3 border border-indigo-200">
            <ImageWithFallback src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
            <span className="text-sm font-semibold text-indigo-600" style={{ fontFamily: 'Inter, sans-serif' }}>COMMUNITY</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Join Your Tribe</h2>
          <p className="text-lg text-gray-600">500+ active communities across all tech domains</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-12">
          {[
            {
              icon: Users,
              title: 'Topic-Based Groups',
              desc: 'Join groups focused on specific technologies',
              stats: '250+ Groups',
              members: '45K Members',
              color: 'from-blue-500 to-cyan-400',
              image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080',
              delay: 0.2
            },
            {
              icon: Layers,
              title: 'Expert Channels',
              desc: 'Follow industry experts and thought leaders',
              stats: '100+ Channels',
              members: '30K Followers',
              color: 'from-purple-500 to-pink-400',
              image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1080',
              delay: 0.4
            }
          ].map((community, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: community.delay }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={community.image}
                  alt={community.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${community.color} opacity-80 mix-blend-multiply`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/40 shadow-lg">
                    <community.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>{community.title}</h3>
                <p className="text-gray-600 mb-6 text-base" style={{ fontFamily: 'Inter, sans-serif' }}>{community.desc}</p>
                <div className="flex items-center gap-8">
                  <div>
                    <div className="text-2xl font-black text-gray-900">{community.stats}</div>
                    <div className="text-sm font-semibold text-gray-500">Active</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900">{community.members}</div>
                    <div className="text-sm font-semibold text-gray-500">Total</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Slide 15 - Jobs & Announcements
export function Slide15() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-1.5 rounded-full mb-3">
            <ImageWithFallback src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
            <span className="text-sm font-semibold text-green-600" style={{ fontFamily: 'Inter, sans-serif' }}>JOB BOARD</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Career Opportunities</h2>
          <p className="text-base text-gray-600">Connect with top companies hiring now</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            {[
              { company: 'TechCorp Inc.', role: 'Senior Frontend Developer', location: 'Remote', salary: '$120K', type: 'Full-time', logo: '💼' },
              { company: 'StartupXYZ', role: 'Full Stack Engineer', location: 'San Fran', salary: '$100K+', type: 'Full-time', logo: '🚀' },
              { company: 'DesignHub', role: 'UI/UX Designer', location: 'New York', salary: '$90K', type: 'Contract', logo: '🎨' },
              { company: 'AI Solutions', role: 'ML Engineer', location: 'Remote', salary: '$140K', type: 'Full-time', logo: '🤖' }
            ].map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-all border-l-4 border-green-600 group cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{job.logo}</div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-900 mb-0.5" style={{ fontFamily: 'Poppins, sans-serif' }}>{job.role}</h3>
                    <div className="text-xs font-semibold text-gray-700 mb-1">{job.company}</div>
                    <div className="flex flex-wrap gap-1 mb-1">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-semibold">{job.type}</span>
                      <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-[10px] font-semibold">{job.location}</span>
                    </div>
                    <div className="text-sm font-bold text-green-600">{job.salary}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-4 text-white"
            >
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>📢 Featured</h3>
              <div className="space-y-2">
                {[
                  { title: 'Hiring Drive: 50+ Companies', date: 'Dec 28', tag: 'Mega Event' },
                  { title: 'Resume Building Workshop', date: 'Dec 22', tag: 'Free' },
                  { title: 'Interview Prep Bootcamp', date: 'Jan 5', tag: 'Premium' }
                ].map((announcement, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-bold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>{announcement.title}</h4>
                      <span className="bg-yellow-400 text-yellow-900 px-1.5 py-0.5 rounded-full text-[10px] font-bold">{announcement.tag}</span>
                    </div>
                    <p className="text-[10px] text-white/80">{announcement.date}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-4 shadow-xl"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Job Stats</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: '500+', label: 'Active Jobs' },
                  { value: '200+', label: 'Companies' },
                  { value: '95%', label: 'Response Rate' },
                  { value: '$125K', label: 'Avg Salary' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-black text-gray-900 mb-0.5" style={{ fontFamily: 'Poppins, sans-serif' }}>{stat.value}</div>
                    <div className="text-[10px] text-gray-600">{stat.label}</div>
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

// Continue with slides 16-25... (truncated for space, but following the same pattern)
