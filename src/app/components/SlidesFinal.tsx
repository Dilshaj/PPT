import { motion } from 'motion/react';
import {
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
  GraduationCap,
  Users,
  Brain,
  Cpu,
  HardDrive,
  Globe,
  Zap,
  Shield,
  CheckCircle2,
  Award,
  Target,
  BarChart3
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Slide 20 - System Architecture - RESPONSIVE
export function Slide20() {
  return (
    <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-4 md:p-6 lg:p-8 pt-6">
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-5 py-2 rounded-full mb-3">
            <ImageWithFallback src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
            <span className="text-sm font-bold text-blue-600" style={{ fontFamily: 'Inter, sans-serif' }}>SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Scalable Architecture Flow</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600">From user request to cloud response</p>
        </motion.div>

        <div className="relative mt-4 mb-8 flex-grow">
          {/* Connection Line */}
          <div className="absolute top-[65px] left-0 right-0 h-2 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6 relative z-10">
            {[
              { icon: Monitor, title: 'Frontend', desc: 'Next.js App', tech: ['TypeScript', 'Tailwind'], color: 'from-blue-600 to-cyan-500', delay: 0.1 },
              { icon: Server, title: 'Backend', desc: 'Nest.js API', tech: ['REST API', 'WebSocket'], color: 'from-indigo-600 to-purple-600', delay: 0.2 },
              { icon: Database, title: 'Database', desc: 'MongoDB Cluster', tech: ['Sharding', 'Replication'], color: 'from-green-600 to-emerald-600', delay: 0.3 },
              { icon: Cloud, title: 'Cloud', desc: 'S3/Cloudinary', tech: ['CDN', 'Optimization'], color: 'from-orange-600 to-red-600', delay: 0.4 },
              { icon: Users, title: 'End Users', desc: '50K+ Active', tech: ['Web', 'Mobile'], color: 'from-purple-600 to-pink-600', delay: 0.5 }
            ].map((component, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: component.delay }}
                className="relative"
              >
                {/* Node Circle */}
                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br ${component.color} flex items-center justify-center shadow-2xl border-4 border-white transform transition-transform hover:scale-110`}>
                    <component.icon className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Info Card */}
                <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all h-[220px] flex flex-col justify-between border border-gray-100">
                  <div className="text-center">
                    <h3 className="text-2xl font-black text-gray-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {component.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 font-medium">{component.desc}</p>
                  </div>
                  <div className="space-y-2">
                    {component.tech.map((tech, tIdx) => (
                      <div key={tIdx} className="bg-gray-50 rounded-xl px-3 py-2 text-center border border-gray-100">
                        <span className="text-[10px] font-black text-gray-800 tracking-wide uppercase">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow Highlight */}
                {idx < 4 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: component.delay + 0.3 }}
                    className="absolute top-14 -right-4 z-20"
                  >
                    <div className="w-5 h-5 bg-indigo-600 rotate-45 transform border-2 border-white" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
            {[
              { icon: Zap, label: 'Microservices', desc: 'Scalable Architecture' },
              { icon: Shield, label: 'Security First', desc: 'End-to-End Encrypted' },
              { icon: Globe, label: 'Global CDN', desc: 'Lightning Fast Delivery' },
              { icon: BarChart3, label: 'High Availability', desc: '99.9% Uptime SLA' }
            ].map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-4 justify-center group bg-white/10 rounded-xl p-3 hover:bg-white/20 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <highlight.icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-sm mb-0.5" style={{ fontFamily: 'Poppins, sans-serif' }}>{highlight.label}</h4>
                  <p className="text-[10px] text-white/80">{highlight.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}


// Slide 21 - AI & Automation - RESPONSIVE
export function Slide21() {
  return (
    <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-6 lg:p-8 pt-10">
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-6">
          <div className="inline-flex items-center gap-3 bg-purple-100 px-6 py-1.5 rounded-full mb-4 border border-purple-200">
            <ImageWithFallback src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
            <span className="text-sm font-semibold text-purple-700" style={{ fontFamily: 'Inter, sans-serif' }}>AI & AUTOMATION</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Powered by Advanced AI</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600">Cutting-edge AI for enhanced learning</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-6 flex-grow">
          {[
            {
              name: 'Gemini API',
              tagline: 'Google\'s Advanced AI',
              features: ['NLP', 'Content Gen', 'Personalization', 'Code Analysis'],
              stats: { accuracy: '99%', speed: '<50ms', capacity: '1M+' },
              color: 'from-blue-600 to-cyan-500',
              delay: 0.2
            },
            {
              name: 'HeyGen',
              tagline: 'AI Video Platform',
              features: ['Video Summaries', 'Text-to-Video', 'Multi-language', '4K Quality'],
              stats: { videos: '10K+', quality: '4K HD', languages: '40+' },
              color: 'from-purple-600 to-pink-500',
              delay: 0.4
            }
          ].map((ai, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: ai.delay }}
              className="group h-full"
            >
              <div className={`bg-gradient-to-br ${ai.color} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all h-full flex flex-col justify-between overflow-hidden relative border border-white/10`}>
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Sparkles className="w-40 h-40 text-white" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-white mb-0.5" style={{ fontFamily: 'Poppins, sans-serif' }}>{ai.name}</h3>
                      <p className="text-white/80 text-base">{ai.tagline}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-3">
                      {ai.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                          <CheckCircle className="w-4 h-4 text-white" />
                          <span className="text-white font-bold text-xs tracking-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mt-auto">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {Object.entries(ai.stats).map(([key, value], sIdx) => (
                        <div key={sIdx}>
                          <div className="text-3xl font-black text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{value}</div>
                          <div className="text-[10px] text-white/70 font-bold uppercase tracking-widest leading-none">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-2xl mt-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 text-center">
            {[
              { value: '10x', label: 'Processing Speed' },
              { value: '95%', label: 'Recognition Accuracy' },
              { value: '24/7', label: 'Uptime Availability' },
              { value: '100K+', label: 'Active Daily Users' }
            ].map((metric, idx) => (
              <div key={idx}>
                <div className="text-4xl font-black text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{metric.value}</div>
                <div className="text-[10px] font-bold text-gray-400 tracking-wide uppercase">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}


// Slide 22 - Deployment & DevOps - RESPONSIVE
export function Slide22() {
  return (
    <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-6 lg:p-8 pt-10">
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-6">
          <div className="inline-flex items-center gap-3 bg-indigo-100 px-6 py-1.5 rounded-full mb-4 border border-indigo-200">
            <ImageWithFallback src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
            <span className="text-sm font-semibold text-indigo-700" style={{ fontFamily: 'Inter, sans-serif' }}>DEVOPS & DEPLOYMENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Enterprise-Grade Infra</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600">Reliable deployment pipeline</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-6 flex-grow">
          {[
            { icon: GitBranch, name: 'Git', desc: 'Control', features: ['Versioning', 'Branching'], color: 'from-orange-600 to-red-600', delay: 0.1 },
            { icon: Cloud, name: 'AWS EC2', desc: 'Hosting', features: ['Scaling', 'Loads'], color: 'from-yellow-600 to-orange-600', delay: 0.2 },
            { icon: Server, name: 'Nginx', desc: 'Server', features: ['Proxy', 'SSL'], color: 'from-green-600 to-emerald-600', delay: 0.3 },
            { icon: Settings, name: 'PM2', desc: 'Process', features: ['Monitor', 'Restart'], color: 'from-blue-600 to-cyan-600', delay: 0.4 }
          ].map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: tool.delay }}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl hover:shadow-2xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <tool.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>{tool.name}</h3>
                <p className="text-gray-600 mb-4 text-center text-xs">{tool.desc}</p>
              </div>
              <div className="space-y-2">
                {tool.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2.5 text-gray-700 text-xs bg-gray-50 rounded-xl p-2 border border-gray-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                    <span className="font-bold">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mt-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-900 rounded-3xl p-6 border border-gray-800 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>📊 Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Deployment', value: '50+/wk' },
                { label: 'Downtime', value: '<5 min' }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-1">{stat.label}</span>
                  <span className="text-white font-black text-2xl">{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl p-6 text-white shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>🔒 Security</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, text: 'SSL/TLS' },
                { icon: Cpu, text: 'DDoS Protect' }
              ].map((security, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <security.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  <span className="font-black text-lg">{security.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Slide 23 - Why Our Tools Are Best - RESPONSIVE
export function Slide23() {
  return (
    <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-8 md:p-12 lg:p-16 xl:p-20">
      <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-emerald-100 px-6 py-2 rounded-full mb-6 shadow-sm">
            <ImageWithFallback src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
            <span className="text-lg font-bold text-emerald-600 uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>ADVANTAGES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Why Choice Us</h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium">Industry-leading technology stack</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full">
          {[
            { tech: 'Next.js', benefit: 'SEO Excellence', icon: Monitor, color: 'from-gray-900 to-gray-700', delay: 0.1 },
            { tech: 'Nest.js', benefit: 'Scalable API', icon: Server, color: 'from-red-600 to-pink-600', delay: 0.2 },
            { tech: 'MongoDB', benefit: 'Fast Data', icon: Database, color: 'from-green-600 to-emerald-600', delay: 0.3 },
            { tech: 'Cloudinary', benefit: 'Media CDN', icon: Cloud, color: 'from-blue-600 to-cyan-600', delay: 0.4 },
            { tech: 'AWS', benefit: 'Reliable Hosting', icon: HardDrive, color: 'from-orange-600 to-yellow-600', delay: 0.5 },
            { tech: 'Gemini', benefit: 'Advanced AI', icon: Sparkles, color: 'from-purple-600 to-pink-600', delay: 0.6 },
            { tech: 'HeyGen', benefit: 'Video Tech', icon: Monitor, color: 'from-indigo-600 to-purple-600', delay: 0.7 }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay }}
              className="bg-white rounded-[40px] overflow-hidden shadow-2xl hover:shadow-3xl transition-all group border border-gray-100/50"
            >
              <div className={`bg-gradient-to-br ${item.color} p-8 h-full flex flex-col justify-center`}>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <item.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.tech}</h3>
                    <p className="text-sm text-white/90 font-bold uppercase tracking-wider">{item.benefit}</p>
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

// Slide 24 - Final Impact - RESPONSIVE
export function Slide24() {
  return (
    <div className="w-full h-full overflow-y-auto relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-blue-200 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: i * 0.05, duration: 1.5 }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="mb-4 flex justify-center">
            <ImageWithFallback src="/logo.png" alt="Logo" className="w-16 h-16 object-contain drop-shadow-lg" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Impact on Education
          </h2>
          <p className="text-base md:text-lg text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
            Transforming lives through innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-6xl">
          {[
            {
              icon: Brain,
              title: 'Learn Smarter',
              desc: 'AI-powered personalized learning paths',
              stats: ['10x Faster', '95% Retention'],
              color: 'from-cyan-400 to-blue-500',
              delay: 0.2
            },
            {
              icon: Rocket,
              title: 'Build Faster',
              desc: 'Industry-ready projects with expert mentorship',
              stats: ['500+ Projects', 'Expert Mentorship'],
              color: 'from-purple-400 to-pink-500',
              delay: 0.4
            },
            {
              icon: TrendingUp,
              title: 'Grow Together',
              desc: 'Collaborative community of learners',
              stats: ['50K+ Community', 'Global Network'],
              color: 'from-orange-400 to-red-500',
              delay: 0.6
            }
          ].map((impact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: impact.delay, duration: 0.8 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${impact.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <impact.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {impact.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {impact.desc}
                </p>
                <div className="space-y-2">
                  {impact.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="bg-gray-50 rounded-xl p-2 border border-gray-100">
                      <span className="text-gray-800 font-semibold text-xs tracking-tight">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-6 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-indigo-600 px-8 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors cursor-pointer text-white">
            <Target className="w-6 h-6" strokeWidth={2} />
            <span className="text-lg font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Join 50,000+ learners transforming their careers
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Slide 25 - Closing Slide - RESPONSIVE
export function Slide25() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
          alt="Team collaboration"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-pink-900/80" />
      </div>
      {/* Dynamic Background Particles */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
              y: [0, -100],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Main Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="mb-12"
          >
          </motion.div>

          {/* High-Impact Thank You Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent leading-none tracking-tight mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              THANK YOU
            </h2>
            <div className="h-2 w-32 md:w-40 lg:w-48 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mt-6 md:mt-8 font-medium italic" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              "Empowering the next generation of tech leaders"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex items-center justify-center gap-6">
              {[
                { icon: Brain, label: 'AI Tech Skill' },
                { icon: Users, label: 'Community' },
                { icon: Rocket, label: 'Career-Focused' }
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 + idx * 0.2 }}
                  className="flex items-center gap-3 bg-white backdrop-blur-3xl px-8 py-4 rounded-3xl border border-gray-200 hover:bg-gray-50 transition-colors group cursor-pointer shadow-lg"
                >
                  <badge.icon className="w-6 h-6 text-cyan-600 group-hover:scale-110 transition-transform" strokeWidth={2} />
                  <span className="text-gray-800 font-bold text-lg tracking-wide">{badge.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Separator Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="flex items-center gap-4 py-8"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="text-center"
            >
              <p className="text-gray-200 text-sm font-medium tracking-[0.2em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                Shaping the Tomorrow of Ed-Tech.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
