import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  Users,
  Brain,
  Video,
  Clock,
  Lightbulb,
  FileText,
  Code,
  CheckCircle,
  MessageCircle,
  Phone,
  Heart,
  Share,
  Building,
  Briefcase,
  Mic,
  BookOpen,
  Award,
  Server,
  Database,
  Cloud,
  GitBranch,
  Zap,
  Rocket,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  UserCheck,
  TrendingUp,
  Sparkles,
  Network,
  ThumbsUp,
  MessageSquare,
  Layers,
  Target,
  DollarSign,
  Newspaper,
  PenTool,
  Headphones,
  Type,
  Monitor,
  Settings,
  Radio,
  BarChart3,
  LineChart,
  Activity,
  Cpu,
  HardDrive,
  Shield,
  Lock,
  Globe,
  Send,
  Star,
  Flame,
  Calendar,
  Upload,
  Download,
  Eye,
  Edit,
  Folder,
  Link,
  Maximize,
  ArrowRight,
  CheckCircle2,
  CircleDot,
  UserPlus,
  Users2,
  ChartBar,
  Presentation
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Slide12, Slide13, Slide14, Slide15 } from './components/Slides';
import { Slide16, Slide17, Slide18, Slide19 } from './components/SlidesAI';
import { Slide20, Slide21, Slide22, Slide23, Slide24, Slide25 } from './components/SlidesFinal';

const slides = [
  // Slide 1 - Brand Identity (Hero Slide) - RESPONSIVE
  {
    id: 1,
    component: () => (
      <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 md:w-64 md:h-64 border border-blue-200 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 2 }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mt-4 md:mt-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-4 md:mb-6"
            >
              <div className="inline-flex items-center gap-2 md:gap-3 bg-white/50 backdrop-blur-lg px-4 py-2 md:px-8 md:py-3 rounded-full border border-blue-200 shadow-md">
                <ImageWithFallback src="/logo.png" alt="Logo" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                <span className="text-xs md:text-base text-gray-800 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Next Generation Learning Platform
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-4 md:mb-8"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold bg-clip-text text-transparent mb-2 md:mb-4 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif', backgroundImage: 'linear-gradient(to right, #2563eb, #e01ed6ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                EDUPROVA
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-600 mb-6 md:mb-12 tracking-wide"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Learn • Connect • Build
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto mb-12 md:mb-24"
            >
              {[
                { icon: GraduationCap, label: 'Smart Education', desc: 'AI-Powered Learning', color: 'from-blue-500 to-cyan-400' },
                { icon: Users, label: 'Social Community', desc: 'Collaborative Growth', color: 'from-purple-500 to-pink-400' },
                { icon: Brain, label: 'AI Intelligence', desc: 'Personalized Experience', color: 'from-cyan-500 to-blue-400' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + idx * 0.2 }}
                  className="bg-white rounded-3xl p-4 md:p-6 lg:p-8 border border-blue-100 shadow-xl hover:shadow-2xl transition-all group"
                >
                  <div className={`w-12 h-12 md:w-16 lg:w-20 md:h-16 lg:h-20 mx-auto mb-2 md:mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6 md:w-8 lg:w-10 md:h-8 lg:h-10 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 md:mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {item.label}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>


      </div>
    )
  },

  // Slide 2 - Platform Overview (Three Pillars) - RESPONSIVE
  {
    id: 2,
    component: () => (
      <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8 lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-100 px-6 py-2 rounded-full mb-6">
            <ImageWithFallback src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
            <span className="text-sm font-semibold text-indigo-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              PLATFORM OVERVIEW
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-3 md:mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            One Platform. Three Capabilities.
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
            Unified ecosystem for modern education and professional growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: GraduationCap,
              title: 'Teaching Excellence',
              desc: 'Comprehensive learning management with live classes, AI-powered summaries, and smart assessments',
              color: 'from-blue-600 to-indigo-600',
              features: ['Live Sessions', 'AI Summaries', 'Smart Exams', 'Projects'],
              image: 'https://images.unsplash.com/photo-1758612215020-842383aadb9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb24lMjBzdHVkZW50cyUyMGxhcHRvcHxlbnwxfHx8fDE3NjYyMTMwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
              delay: 0.2
            },
            {
              icon: Users,
              title: 'Social Learning',
              desc: 'Build connections, collaborate with peers, and grow together through community-driven interactions',
              color: 'from-purple-600 to-pink-600',
              features: ['Communities', 'Chat & Calls', 'Job Board', 'Networking'],
              image: 'https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzY2MjAyODY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
              delay: 0.4
            },
            {
              icon: Brain,
              title: 'AI-Powered Tools',
              desc: 'Leverage artificial intelligence for resume building, mock interviews, and personalized learning paths',
              color: 'from-cyan-500 to-blue-500',
              features: ['AI Resume', 'Mock Interviews', 'Grammar Aid', 'Smart Insights'],
              image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjYyMDQxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
              delay: 0.6
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay, duration: 0.6 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="relative h-40 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-60`} />
                <div className="absolute top-4 right-4">
                  <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg`}>
                    <item.icon className="w-8 h-8 text-indigo-600" strokeWidth={2} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {item.desc}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {item.features.map((feature, fIdx) => (
                    <motion.div
                      key={fIdx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: item.delay + 0.2 + fIdx * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  },

  // Slide 3 - Teaching Module Overview - RESPONSIVE
  {
    id: 3,
    component: () => (
      <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-2 rounded-full mb-6 border border-blue-200">
              <ImageWithFallback src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
              <span className="text-sm font-semibold text-blue-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                TEACHING MODULE
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-3 md:mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Complete Learning Ecosystem
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              From live instruction to AI-powered assessments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <div className="space-y-4">
              {[
                {
                  icon: Video,
                  title: 'Live Interactive Classes',
                  desc: 'Real-time video sessions with screen sharing, polls, and Q&A',
                  stats: '1000+ Sessions/Month',
                  color: 'from-blue-500 to-cyan-400',
                  delay: 0.2
                },
                {
                  icon: PlayCircle,
                  title: 'On-Demand Library',
                  desc: 'Access recorded lectures anytime with multi-language support',
                  stats: '5000+ Hours Content',
                  color: 'from-purple-500 to-pink-400',
                  delay: 0.4
                },
                {
                  icon: Sparkles,
                  title: 'AI Video Summaries',
                  desc: 'Get concise AI-generated summaries for quick revision',
                  stats: '10x Faster Learning',
                  color: 'from-cyan-500 to-blue-400',
                  delay: 0.6
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.delay }}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xl hover:shadow-2xl transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <item.icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-cyan-600" />
                        <span className="text-xs font-semibold text-cyan-600">
                          {item.stats}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column - Assessments & Projects */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-8 h-8 text-blue-600" strokeWidth={2} />
                  <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Smart Assessments
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
                    <div className="text-3xl font-bold text-cyan-600 mb-1">2</div>
                    <div className="text-xs text-gray-600">Descriptive</div>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4 text-center border border-purple-100">
                    <div className="text-3xl font-bold text-purple-600 mb-1">15</div>
                    <div className="text-xs text-gray-600">MCQs</div>
                  </div>
                  <div className="bg-pink-50 rounded-xl p-4 text-center border border-pink-100">
                    <div className="text-3xl font-bold text-pink-600 mb-1">3</div>
                    <div className="text-xs text-gray-600">Coding</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Module-wise evaluations with instant AI-powered feedback and detailed performance analytics
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-8 h-8 text-white" strokeWidth={2} />
                  <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Real Projects
                  </h3>
                </div>
                <p className="text-white/90 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Build industry-standard projects with mentor guidance
                </p>
                <div className="space-y-2">
                  {['Mentor Review', 'Code Quality Check', 'Industry Standards'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-white" />
                      <span className="text-sm text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <Presentation className="w-6 h-6 text-indigo-600" strokeWidth={2} />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Industry Webinars
                    </h4>
                    <p className="text-sm text-gray-600">Connect with experts and leaders</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 4 - Live Classes (Enhanced) - RESPONSIVE
  {
    id: 4,
    component: () => (
      <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-red-100 px-6 py-2 rounded-full mb-6">
              <ImageWithFallback src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
              <span className="text-sm font-semibold text-red-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                LIVE STREAMING
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-3 md:mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Interactive Live Classes
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Real-time learning with two-way communication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* Main Video Area */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl"
                style={{ height: '380px' }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1764162051487-1fa0cc2a18c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwdmlkZW8lMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2NjIxMzA0NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Live class"
                  className="w-full h-full object-cover opacity-60"
                />

                {/* Live Indicator */}
                <div className="absolute top-6 left-6">
                  <div className="flex items-center gap-3 bg-red-600 px-4 py-2 rounded-full shadow-lg">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="w-3 h-3 bg-white rounded-full"
                    />
                    <span className="text-white font-bold text-sm">LIVE NOW</span>
                  </div>
                </div>

                {/* Viewer Count */}
                <div className="absolute top-6 right-6">
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full">
                    <Eye className="w-4 h-4 text-white" />
                    <span className="text-white font-semibold text-sm">2,547 watching</span>
                  </div>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/50 backdrop-blur-md rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Advanced Web Development - Session 12
                      </h3>
                      <div className="flex items-center gap-2 bg-green-600 px-3 py-1 rounded-full">
                        <Clock className="w-3 h-3 text-white" />
                        <span className="text-white text-xs font-semibold">45:23</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: '0%' }}
                          animate={{ width: '65%' }}
                          transition={{ duration: 2, delay: 0.5 }}
                          className="h-full bg-cyan-400"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center">
                          <Mic className="w-4 h-4 text-white" />
                        </button>
                        <button className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center">
                          <Video className="w-4 h-4 text-white" />
                        </button>
                        <button className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center">
                          <Maximize className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Calendar,
                  title: 'Scheduled Sessions',
                  desc: 'Pre-planned classes with calendar integration',
                  color: 'from-blue-500 to-cyan-400',
                  delay: 0.4
                },
                {
                  icon: MessageCircle,
                  title: 'Live Chat',
                  desc: 'Ask questions in real-time during class',
                  color: 'from-purple-500 to-pink-400',
                  delay: 0.5
                },
                {
                  icon: Users,
                  title: 'Breakout Rooms',
                  desc: 'Collaborate in small groups instantly',
                  color: 'from-orange-500 to-red-400',
                  delay: 0.6
                },
                {
                  icon: Share,
                  title: 'Screen Share',
                  desc: 'Share code, presentations, and demos',
                  color: 'from-green-500 to-emerald-400',
                  delay: 0.7
                },
                {
                  icon: Download,
                  title: 'Auto Recording',
                  desc: 'Every session saved for later review',
                  color: 'from-indigo-500 to-purple-400',
                  delay: 0.8
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.delay }}
                  className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <item.icon className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 5 - Recorded Sessions Library - RESPONSIVE
  {
    id: 5,
    component: () => (
      <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 px-6 py-2 rounded-full mb-6 border border-purple-200">
              <ImageWithFallback src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
              <span className="text-sm font-semibold text-purple-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                VIDEO LIBRARY
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-2 md:mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              On-Demand Learning Library
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              5000+ hours of recorded content available 24/7
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
            {[
              { title: 'React Advanced Patterns', duration: '2:45:00', views: '12.5K', category: 'Frontend', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800' },
              { title: 'Node.js Microservices', duration: '3:15:00', views: '8.2K', category: 'Backend', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800' },
              { title: 'MongoDB Deep Dive', duration: '2:30:00', views: '15.3K', category: 'Database', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800' },
              { title: 'AWS Cloud Architecture', duration: '4:00:00', views: '9.7K', category: 'DevOps', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800' },
              { title: 'TypeScript Mastery', duration: '2:20:00', views: '11.2K', category: 'Frontend', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800' },
              { title: 'Docker & Kubernetes', duration: '3:45:00', views: '7.8K', category: 'DevOps', image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800' },
              { title: 'REST API Design', duration: '2:10:00', views: '13.6K', category: 'Backend', image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800' },
              { title: 'GraphQL Complete', duration: '2:55:00', views: '6.4K', category: 'Backend', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800' }
            ].map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                  <ImageWithFallback
                    src={video.image}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <PlayCircle className="w-8 h-8 text-indigo-600" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-white font-semibold">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-purple-600 px-2 py-1 rounded text-xs text-white font-semibold">
                    {video.category}
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {video.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>Auto-saved</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </div>
    )
  },

  // Slide 6 - AI Summary Videos - RESPONSIVE
  {
    id: 6,
    component: () => (
      <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 px-4 pt-4 pb-4 md:px-6 md:pt-6 md:pb-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-cyan-100 px-3 py-1 rounded-full mb-1">
              <ImageWithFallback src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
              <span className="text-sm font-semibold text-cyan-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                AI-POWERED SUMMARIES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Learn 10x Faster with AI
            </h2>
            <p className="text-xs md:text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Intelligent video summaries that boost retention and save time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-4 text-white shadow-2xl"
              >
                <Brain className="w-12 h-12 mb-2" strokeWidth={1.5} />
                <h3 className="text-xl font-black mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  AI Processing
                </h3>
                <p className="text-sm text-white/90 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Our advanced AI analyzes 2-hour lectures and creates comprehensive 10-minute summaries
                </p>
                <div className="space-y-4">
                  {[
                    { step: '1', label: 'Content Analysis', icon: Eye },
                    { step: '2', label: 'Key Points Extraction', icon: Target },
                    { step: '3', label: 'Summary Generation', icon: Sparkles },
                    { step: '4', label: 'Video Creation', icon: Video }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20"
                    >
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center font-bold text-sm">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold">{item.label}</span>
                      </div>
                      <item.icon className="w-5 h-5" strokeWidth={2} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-3 gap-4"
              >
                {[
                  { value: '10x', label: 'Faster', color: 'from-cyan-500 to-blue-500' },
                  { value: '95%', label: 'Retention', color: 'from-purple-500 to-pink-500' },
                  { value: '2hrs→10min', label: 'Condensed', color: 'from-orange-500 to-red-500' }
                ].map((stat, idx) => (
                  <div key={idx} className={`bg-gradient-to-br ${stat.color} rounded-xl p-2 text-white text-center shadow-lg transform scale-95`}>
                    <div className="text-lg font-black mb-0" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs opacity-90">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Summary Examples */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl p-3 shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Summary Preview
                  </h3>
                  <div className="bg-green-100 text-green-700 px-3 py-0.5 rounded-full text-xs font-semibold">
                    10 min
                  </div>
                </div>

                {/* Video Preview Cards */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {[
                    { image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800' },
                    { image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800' },
                    { image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800' },
                    { image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800' }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden group cursor-pointer"
                    >
                      <ImageWithFallback
                        src={item.image}
                        alt={`Summary Part ${idx + 1}`}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Sparkles className="w-6 h-6 text-cyan-600" strokeWidth={2} />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-cyan-600 px-2 py-1 rounded text-xs text-white font-semibold">
                        Part {idx + 1}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {[
                    { icon: Zap, label: 'Quick Revision', desc: 'Perfect for exam prep' },
                    { icon: Brain, label: 'Key Concepts', desc: 'Only important topics' },
                    { icon: BookOpen, label: 'Chapter-wise', desc: 'Organized learning' }
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                      className="flex items-center gap-2 bg-gray-50 rounded-xl p-2"
                    >
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-cyan-600" strokeWidth={2} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {feature.label}
                        </h4>
                        <p className="text-xs text-gray-600">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>


            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 7 - Exams & Evaluation (Enhanced) - RESPONSIVE
  {
    id: 7,
    component: () => (
      <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-4"
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-1.5 rounded-full mb-2">
              <ImageWithFallback src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
              <span className="text-sm font-semibold text-orange-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                ASSESSMENT SYSTEM
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Smart Evaluation System
            </h2>
            <p className="text-sm md:text-base text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Comprehensive assessments with instant AI-powered feedback
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-3 md:mb-4">
            {/* Exam Type Cards */}
            {[
              {
                type: 'Descriptive',
                count: '2',
                icon: PenTool,
                image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1080',
                color: 'from-blue-600 to-cyan-600',
                desc: 'Long-form answers with detailed explanations',
                features: ['Deep Understanding', 'Critical Thinking', 'AI Grading'],
                delay: 0.2
              },
              {
                type: 'Multiple Choice',
                count: '15',
                icon: CheckCircle,
                image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=1080',
                color: 'from-purple-600 to-pink-600',
                desc: 'Quick assessment of conceptual knowledge',
                features: ['Instant Results', 'Time Efficient', 'Analytics'],
                delay: 0.4
              },
              {
                type: 'Coding',
                count: '3',
                icon: Code,
                image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1080',
                color: 'from-orange-600 to-red-600',
                desc: 'Practical programming challenges',
                features: ['Auto Testing', 'Code Quality', 'Performance'],
                delay: 0.6
              }
            ].map((exam, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: exam.delay }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
              >
                <div className="relative h-32 p-4 text-white overflow-hidden flex flex-col justify-end">
                  <ImageWithFallback
                    src={exam.image}
                    alt={exam.type}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${exam.color} opacity-90 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-black/10" />

                  <div className="relative z-10 flex items-end justify-between">
                    <div>
                      <exam.icon className="w-8 h-8 mb-2" strokeWidth={2} />
                      <h3 className="text-lg font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {exam.type}
                      </h3>
                    </div>
                    <div className="text-4xl font-black mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {exam.count}
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-gray-600 mb-2 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {exam.desc}
                  </p>
                  <div className="space-y-2">
                    {exam.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
            {/* Performance Analytics */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl relative h-[280px] group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080"
                alt="Analytics"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/70 to-transparent" />

              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <BarChart3 className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Performance Analytics
                  </h3>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Overall Score', value: 85, color: 'bg-green-500' },
                    { label: 'Time Management', value: 92, color: 'bg-blue-500' },
                    { label: 'Accuracy Rate', value: 78, color: 'bg-purple-500' }
                  ].map((metric, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-white/90">{metric.label}</span>
                        <span className="text-xs font-bold text-white">{metric.value}%</span>
                      </div>
                      <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${metric.value}%` }}
                          transition={{ delay: 1 + idx * 0.2, duration: 0.8 }}
                          className={`h-full ${metric.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* AI Feedback */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl relative h-[280px] group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1080"
                alt="AI Robot"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-indigo-900/70 to-transparent" />

              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-cyan-400" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    AI Instant Feedback
                  </h3>
                </div>
                <ul className="space-y-2">
                  {[
                    'Detailed answer analysis',
                    'Personalized improvement tips',
                    'Concept clarification',
                    'Similar practice questions',
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 + idx * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-green-400" strokeWidth={3} />
                      </div>
                      <span className="text-white/90 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Module Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-8 text-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-gray-200"
          >
            <p className="text-gray-700 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
              📊 Module-wise assessments • ⏱️ Timed exams • 🔒 Anti-cheating measures • 📈 Progress tracking
            </p>
          </motion.div>
        </div>
      </div>
    )
  },

  // Slide 8 - Projects & Mentorship (Continue with enhanced versions for remaining slides...) - RESPONSIVE
  {
    id: 8,
    component: () => (
      <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-1.5 rounded-full mb-3 border border-teal-200">
              <ImageWithFallback src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
              <span className="text-sm font-semibold text-teal-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                REAL-WORLD PROJECTS
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Build Industry-Ready Projects
            </h2>
            <p className="text-sm md:text-base text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Hands-on experience with expert mentorship and code reviews
            </p>
          </motion.div>

          {/* Project Workflow */}
          <div className="relative mb-16">
            {/* Connection Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-white/20" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 relative z-10">
              {[
                {
                  icon: Code,
                  title: 'Demo Project',
                  desc: 'Start with guided project setup and requirements',
                  color: 'from-blue-500 to-cyan-400',
                  features: ['Project Template', 'Tech Stack Guide', 'Timeline Planning'],
                  delay: 0.2
                },
                {
                  icon: UserCheck,
                  title: 'Mentor Review',
                  desc: 'Get expert feedback on code quality and architecture',
                  color: 'from-purple-500 to-pink-400',
                  features: ['Code Review', '1-on-1 Sessions', 'Best Practices'],
                  delay: 0.4
                },
                {
                  icon: Award,
                  title: 'Project Approved',
                  desc: 'Portfolio-ready project with certificate',
                  color: 'from-green-500 to-emerald-400',
                  features: ['Certificate', 'Portfolio Add', 'Job Ready'],
                  delay: 0.6
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: step.delay }}
                  className="relative"
                >
                  {/* Circle Node */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl border-4 border-teal-900`}>
                      <step.icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-center text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {step.desc}
                    </p>
                    <div className="space-y-2">
                      {step.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 justify-center">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40">
                    <span className="text-white font-bold">{idx + 1}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Project Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { icon: Users, label: 'Mentor Monitoring', desc: 'Expert guidance' },
              { icon: Building, label: 'Real Industry Standards', desc: 'Production code' },
              { icon: GitBranch, label: 'Version Control', desc: 'Git workflow' },
              { icon: Target, label: 'Goal-Oriented', desc: 'Clear objectives' }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-10 h-10 mx-auto mb-2 bg-blue-50 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-blue-600" strokeWidth={2} />
                </div>
                <h4 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {feature.label}
                </h4>
                <p className="text-xs text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>


        </div>
      </div >
    )
  },

  // I'll continue with the remaining slides in the same enhanced format...
  // For brevity, I'll add a few more key slides and then summarize the pattern

  // Slide 9 - Webinars - RESPONSIVE
  {
    id: 9,
    component: () => (
      <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-1.5 rounded-full mb-3">
              <ImageWithFallback src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
              <span className="text-sm font-semibold text-indigo-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                INDUSTRY WEBINARS
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Learn from Industry Leaders
            </h2>
            <p className="text-sm md:text-base text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Live sessions with experts, founders, and tech leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Live Webinar Preview */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ height: '380px' }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758598306845-8630d064a244?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdlYmluYXIlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzY2MjEzMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Webinar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Live Badge */}
              <div className="absolute top-6 left-6">
                <div className="flex items-center gap-3 bg-red-600 px-5 py-3 rounded-full shadow-2xl">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-3 h-3 bg-white rounded-full"
                  />
                  <span className="text-white font-bold">LIVE WEBINAR</span>
                </div>
              </div>

              {/* Viewer Count */}
              <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-5 py-3 rounded-full border border-white/20">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-white" />
                  <span className="text-white font-bold">3,245 participants</span>
                </div>
              </div>

              {/* Speaker Info */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Building Scalable Startups in 2024
                  </h3>
                  <p className="text-white/80 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    With John Anderson, CTO of TechCorp
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span className="text-white text-sm">1:45:00 elapsed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-cyan-400" />
                      <span className="text-white text-sm">245 questions</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Webinar Features */}
            <div className="space-y-2">
              {[
                {
                  icon: Users2,
                  title: 'Senior Industry Experts',
                  desc: 'CTOs, founders, and tech leaders share real-world insights',
                  color: 'from-blue-500 to-cyan-400',
                  delay: 0.4
                },
                {
                  icon: MessageCircle,
                  title: 'Live Q&A Sessions',
                  desc: 'Ask questions directly and get expert answers in real-time',
                  color: 'from-purple-500 to-pink-400',
                  delay: 0.5
                },
                {
                  icon: Lightbulb,
                  title: 'Startup Discussions',
                  desc: 'Learn about building products, scaling teams, and fundraising',
                  color: 'from-orange-500 to-red-400',
                  delay: 0.6
                },
                {
                  icon: Network,
                  title: 'Networking Opportunities',
                  desc: 'Connect with peers and industry professionals',
                  color: 'from-green-500 to-emerald-400',
                  delay: 0.7
                },
                {
                  icon: Download,
                  title: 'Resources & Materials',
                  desc: 'Access presentation slides, templates, and resources',
                  color: 'from-indigo-500 to-purple-400',
                  delay: 0.8
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: feature.delay }}
                  className="bg-white rounded-2xl p-2 shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="flex items-start gap-2">
                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Upcoming Webinars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-3 text-white"
          >
            <h3 className="text-base font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Upcoming This Month
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
              {[
                { title: 'AI in Modern Development', date: 'Dec 25', speaker: 'Dr. Sarah Chen' },
                { title: 'Cloud Architecture Best Practices', date: 'Dec 28', speaker: 'Mike Johnson' },
                { title: 'Fundraising for Tech Startups', date: 'Dec 30', speaker: 'Emily Rodriguez' }
              ].map((webinar, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
                  <div className="text-xs text-white/60 mb-1">{webinar.date}</div>
                  <h4 className="font-bold mb-1 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {webinar.title}
                  </h4>
                  <p className="text-xs text-white/80">{webinar.speaker}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    )
  },

  // Continuing with remaining slides in similar enhanced format...
  // Due to length constraints, I'll add the remaining slides more concisely

  // Slide 10 - Opportunities Hub - RESPONSIVE
  {
    id: 10,
    component: () => (
      <div className="w-full h-full overflow-y-auto bg-white p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-1.5 rounded-full mb-3">
              <ImageWithFallback src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
              <span className="text-sm font-semibold text-orange-600" style={{ fontFamily: 'Inter, sans-serif' }}>OPPORTUNITIES</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Career & Growth Hub</h2>
            <p className="text-sm md:text-base text-gray-600">Monetize your skills and find your next opportunity</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {[
              { icon: Briefcase, title: 'Freelancing', desc: 'Find paid gigs and client projects', stat: '500+ projects/month', color: 'from-blue-500 to-cyan-400', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1080', delay: 0.1 },
              { icon: Lightbulb, title: 'Idea Selling', desc: 'Pitch and sell your innovative ideas', stat: '$50K avg valuation', color: 'from-purple-500 to-pink-400', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080', delay: 0.2 },
              { icon: DollarSign, title: 'Fundraising', desc: 'Connect with investors for your startup', stat: '100+ investors', color: 'from-green-500 to-emerald-400', image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1080', delay: 0.3 },
              { icon: Clock, title: 'Part-time Jobs', desc: 'Flexible work opportunities for students', stat: '200+ companies hiring', color: 'from-orange-500 to-red-400', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1080', delay: 0.4 },
              { icon: Code, title: 'Student Projects', desc: 'Collaborate on open-source projects', stat: '1000+ active projects', color: 'from-indigo-500 to-purple-400', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080', delay: 0.5 },
              { icon: Target, title: 'Internships', desc: 'Get hands-on industry experience', stat: '95% placement rate', color: 'from-cyan-500 to-blue-400', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1080', delay: 0.6 }
            ].map((opp, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: opp.delay }} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
                <div className="relative h-32 overflow-hidden">
                  <ImageWithFallback
                    src={opp.image}
                    alt={opp.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </div>
                <div className="p-3">
                  <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{opp.title}</h3>
                  <p className="text-gray-600 mb-3 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>{opp.desc}</p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>{opp.stat}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  },

  // Slide 11 - Social Learning - RESPONSIVE
  {
    id: 11,
    component: () => (
      <div className="w-full h-full overflow-y-auto bg-white p-8 md:p-12 lg:p-16">
        <SocialLearningSlide />
      </div>
    )
  },
  // Slide 12 - Communication
  { id: 12, component: () => <Slide12 /> },
  // Slide 13 - Engagement
  { id: 13, component: () => <Slide13 /> },
  // Slide 14 - Communities
  { id: 14, component: () => <Slide14 /> },
  // Slide 15 - Jobs
  { id: 15, component: () => <Slide15 /> },
  // Slide 16 - AI Resume
  { id: 16, component: () => <Slide16 /> },
  // Slide 17 - AI Grammar
  { id: 17, component: () => <Slide17 /> },
  // Slide 18 - AI Interview
  { id: 18, component: () => <Slide18 /> },
  // Slide 19 - Tech Stack
  { id: 19, component: () => <Slide19 /> },
  // Slide 20 - Architecture
  { id: 20, component: () => <Slide20 /> },
  // Slide 21 - AI & Automation
  { id: 21, component: () => <Slide21 /> },
  // Slide 22 - DevOps
  { id: 22, component: () => <Slide22 /> },
  // Slide 23 - Why Best
  { id: 23, component: () => <Slide23 /> },
  // Slide 24 - Impact
  { id: 24, component: () => <Slide24 /> },
  // Slide 25 - Closing
  { id: 25, component: () => <Slide25 /> }
];

// Component for Social Learning slide
function SocialLearningSlide() {
  return (
    <div className="max-w-7xl mx-auto h-full flex flex-col pt-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-1.5 rounded-full mb-3">
          <Network className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-semibold text-purple-600" style={{ fontFamily: 'Inter, sans-serif' }}>SOCIAL LEARNING</span>
        </div>
        <h2 className="text-4xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Community-Driven Growth</h2>
        <p className="text-base text-gray-600">Connect with 50,000+ learners worldwide</p>
      </motion.div>

      <div className="relative py-2 flex items-center justify-center">
        <div className="relative">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxhY2FkZW1pYyUyMGdyb3VwfGVufDF8fHx8MTc2NjEzMDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Social learning community"
              className="w-full max-w-xl rounded-2xl shadow-2xl"
            />
          </motion.div>

          {[...Array(8)].map((_, idx) => {
            const angle = (idx * Math.PI * 2) / 8;
            const radius = 180;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="absolute w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl"
                style={{ left: `calc(50% + ${x}px - 28px)`, top: `calc(50% + ${y}px - 28px)` }}
              >
                <Users className="w-6 h-6 text-white" strokeWidth={2} />
              </motion.div>
            );
          })}
        </div>
      </div>


    </div>
  );
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  return (
    <div className="w-screen h-screen bg-gray-950 overflow-hidden relative" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Main Slide Container */}
      <div className="w-full h-full relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full absolute inset-0"
          >
            {slides[currentSlide].component()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced Navigation Controls - Responsive */}
      <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 flex flex-col items-center gap-3 md:gap-4 z-50">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6 md:w-5 md:h-5 text-gray-900" strokeWidth={2.5} />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-6 h-6 md:w-5 md:h-5 text-gray-900" strokeWidth={2.5} />
        </button>
      </div>

      {/* Enhanced Slide Counter - Responsive */}
      <div className="absolute top-4 right-4 md:top-10 md:right-10 bg-white shadow-2xl px-4 py-2 md:px-8 md:py-4 rounded-full z-50">
        <span className="font-bold text-gray-900 text-sm md:text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>

      {/* Logo Watermark - Responsive */}
      <div className="absolute top-4 left-4 md:top-10 md:left-10">
        <div className="flex items-center gap-2 md:gap-3">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
          <span className="text-lg md:text-2xl font-black bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif', backgroundImage: 'linear-gradient(to right, #2563eb, #e01ed6ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>EDUPROVA</span>
        </div>
      </div>
    </div>
  );
}
