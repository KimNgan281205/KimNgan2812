/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Github, FileText, ExternalLink, Mail, GraduationCap, ChevronRight, User, Phone, Send } from "lucide-react";

const AVATAR_URL = "https://lh3.googleusercontent.com/d/1THxY4HbRhziAZiGpclVTvFravnsY9meq";
const PROJECT_IMG_URL = "https://lh3.googleusercontent.com/d/1vwTk7EXDIbHKGAnhuRTJ42xzh53qKe-t";
const GITHUB_URL = "https://github.com/KimNgan281205/QLThietBi.git";
const EMAIL = "nganthao281205@gmail.com";
const PHONE = "0898476217";

const EXERCISES = [
  {
    id: 1,
    title: "Bài tập 1",
    desc: "Link bài tập HTML cơ bản",
    url: "https://drive.google.com/file/d/1gxYJSOC1X6fuF_wmEdgu6taYv0KBE99p/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Bài tập 2",
    desc: "Link bài tập tổng hợp",
    url: "https://drive.google.com/file/d/1taKY1aQ3NjCzOSd8-VOsPngXQ5c6KBz5/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Bài tập 3",
    desc: "Link bài tập nâng cao",
    url: "https://drive.google.com/file/d/1xfNKQGG0uV_0DXAlR8r6eBR0kxmXDxHM/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Bài tập 4",
    desc: "Link bài tập cấu trúc dữ liệu",
    url: "https://drive.google.com/file/d/1ZFrmHvbmMWvbiX-v7G2ifMgm3qejW5tX/view?usp=drive_link",
  },
  {
    id: 5,
    title: "Bài tập 5",
    desc: "Link bài tập thiết kế",
    url: "https://drive.google.com/file/d/1hOY_wpYOfYKwK0dKmv-4Df70hQkITVPW/view?usp=drive_link",
  },
  {
    id: 6,
    title: "Bài tập 6",
    desc: "Link bài tập thực hành",
    url: "https://drive.google.com/file/d/1jF9Ll-7Rv4PID-PP_U_UHLYWNjOf8WQG/view?usp=drive_link",
  },
];

const SKILLS = [
  {
    category: "Phát triển Frontend",
    items: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "Vite"],
    color: "indigo"
  },
  {
    category: "Thiết kế UI/UX",
    items: ["Typography", "Color Theory", "Figma", "Responsive Design", "Classic Aesthetics"],
    color: "purple"
  },
  {
    category: "Công cụ & Quy trình",
    items: ["Git & GitHub", "Agile/Scrum", "CI/CD Basics", "SEO Optimization", "Performance Tuning"],
    color: "slate"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans p-4 md:p-8">
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-6 gap-4 min-h-[calc(100vh-4rem)]">
        
        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:col-span-2 md:row-span-3 bg-slate-900 border border-slate-800 rounded-[2rem] p-8 flex flex-col justify-between hover:border-indigo-500/50 transition-colors group"
        >
          <div>
            <div className="w-24 h-24 rounded-3xl overflow-hidden mb-6 border-2 border-indigo-500/20 group-hover:border-indigo-500/50 transition-all">
              <img 
                src={AVATAR_URL} 
                alt="Nguyễn Thị Kim Ngân" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=Nguyen+Thi+Kim+Ngan&background=6366f1&color=fff&size=512`;
                }}
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gradient mb-2">
              Nguyễn Thị Kim Ngân
            </h1>
            <p className="text-slate-400 font-medium uppercase letter-spacing-[2px] text-sm tracking-widest mb-4">
              Sinh viên Công nghệ thông tin
            </p>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Chào mừng đến với danh mục học tập của tôi. Đây là nơi lưu trữ các bài tập thực hành và đồ án chuyên ngành.
            </p>
          </div>
          <div className="flex gap-4 mt-6">
             <a href={`mailto:${EMAIL}`} className="p-3 bg-slate-800 rounded-2xl hover:bg-slate-700 transition-colors">
               <Mail className="w-5 h-5 text-indigo-400" />
             </a>
             <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-2xl hover:bg-slate-700 transition-colors">
               <Github className="w-5 h-5 text-indigo-400" />
             </a>
             <a href={`tel:${PHONE}`} className="p-3 bg-slate-800 rounded-2xl hover:bg-slate-700 transition-colors">
               <Phone className="w-5 h-5 text-indigo-400" />
             </a>
          </div>
        </motion.div>

        {/* Assignments Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-1 md:row-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 flex flex-col hover:border-indigo-500/50 transition-colors"
        >
          <p className="text-[11px] uppercase tracking-widest text-slate-500 font-bold mb-6">Bài tập thực hành</p>
          <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar">
            {EXERCISES.map((ex, idx) => (
              <a 
                key={ex.id}
                href={ex.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-all border border-transparent hover:border-slate-700 group"
              >
                <span className="text-indigo-400 font-bold text-sm">0{idx + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate group-hover:text-indigo-400 transition-colors">{ex.title}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
              </a>
            ))}
          </div>
          <div className="mt-auto pt-6">
            <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
              <p className="text-xs text-indigo-300 font-medium leading-relaxed">
                Các bài tập được cập nhật liên tục theo tiến độ học tập.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats / Status Cards */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-1 md:row-span-1 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 flex flex-col justify-center items-center hover:border-indigo-500/50 transition-colors"
        >
          <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Dự án</p>
          <div className="text-3xl font-bold">12</div>
        </motion.div>

        {/* GitHub Card */}
        <motion.a 
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-1 md:row-span-2 bg-linear-to-br from-slate-800 to-slate-900 border border-slate-800 rounded-[2rem] p-6 flex flex-col justify-between hover:border-indigo-500/50 transition-colors group"
        >
          <div>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Mã nguồn</p>
            <h3 className="text-xl font-bold mb-1">GitHub Repo</h3>
            <p className="text-xs text-slate-500">Quản lý phiên bản và mã nguồn dự án QLThietBi.</p>
          </div>
          <div className="flex items-center text-indigo-400 font-semibold text-sm group-hover:gap-2 transition-all">
            Xem ngay <ChevronRight className="w-4 h-4" />
          </div>
        </motion.a>

        {/* Project Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-2 md:row-span-3 bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden relative group hover:border-indigo-500/50 transition-colors"
        >
          <div className="p-8 pb-0">
            <p className="text-[11px] uppercase tracking-widest text-slate-500 font-bold mb-2">Đồ án tiêu biểu</p>
            <h2 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">Quản Lý Thiết Bị</h2>
            <p className="text-sm text-slate-400 max-w-xs mb-6">
              Hệ thống quản lý tài sản và thiết bị hiện đại cho doanh nghiệp.
            </p>
          </div>
          <div className="absolute bottom-0 right-0 w-[85%] h-[60%] bg-slate-800 rounded-tl-3xl shadow-2xl border-t border-l border-slate-700 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
             <img 
               src={PROJECT_IMG_URL} 
               alt="QLThietBi" 
               className="w-full h-full object-cover"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200";
               }}
               referrerPolicy="no-referrer"
             />
          </div>
        </motion.div>

        {/* More Stats */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-indigo-500/10 border border-indigo-500/20 rounded-[2rem] p-6 flex flex-col justify-center items-center hover:border-indigo-500/50 transition-colors"
        >
          <p className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-1">GPA</p>
          <div className="text-3xl font-bold text-indigo-400">3.8</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="md:col-span-1 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 flex flex-col justify-center items-center hover:border-indigo-500/50 transition-colors"
        >
          <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Trạng thái</p>
          <div className="text-lg font-bold text-green-400">Đang học</div>
        </motion.div>

        {/* Skills Section */}
        <div className="md:col-span-4 mt-8">
           <h2 className="text-2xl font-bold mb-6 text-gradient inline-block">Kỹ năng chuyên môn</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-slate-900 border border-slate-800 rounded-[2rem] p-6 hover:border-indigo-500/30 transition-all group"
                >
                  <p className={`text-[10px] uppercase tracking-widest font-bold mb-4 ${
                    skill.color === 'indigo' ? 'text-indigo-400' : 
                    skill.color === 'purple' ? 'text-purple-400' : 
                    'text-slate-400'
                  }`}>
                    {skill.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map(item => (
                      <span 
                        key={item} 
                        className="px-3 py-1 bg-slate-800 rounded-lg text-xs text-slate-300 border border-slate-700/50 group-hover:border-slate-600 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Contact Section */}
        <div className="md:col-span-4 mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-slate-900 border border-slate-800 rounded-[2rem] p-8 flex flex-col space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-gradient mb-2">Thông tin liên hệ</h2>
              <p className="text-slate-400 text-sm">Liên hệ trực tiếp với tôi qua email hoặc số điện thoại.</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-slate-800 rounded-xl group-hover:text-indigo-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500">Email</p>
                  <a href={`mailto:${EMAIL}`} className="text-sm font-medium hover:text-indigo-400 transition-colors">{EMAIL}</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-slate-800 rounded-xl group-hover:text-indigo-400 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500">Số điện thoại</p>
                  <a href={`tel:${PHONE}`} className="text-sm font-medium hover:text-indigo-400 transition-colors">{PHONE}</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-[2rem] p-8"
          >
            <h2 className="text-2xl font-bold text-gradient mb-6">Gửi lời nhắn</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Họ và tên" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-indigo-500 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-indigo-500 transition-colors"
                />
              </div>
              <textarea 
                placeholder="Lời nhắn của bạn..." 
                rows={4}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-indigo-500 transition-colors resize-none"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                Gửi ngay <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>

      </main>

      <footer className="max-w-7xl mx-auto mt-12 mb-8 text-center text-slate-600 text-xs">
        © {new Date().getFullYear()} Nguyễn Thị Kim Ngân • Portfolio cá nhân
      </footer>
    </div>
  );
}
