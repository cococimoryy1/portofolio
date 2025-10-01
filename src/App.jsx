import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import ChatRoom from "./components/ChatRoom";
import 'aos/dist/aos.css';
// ..
AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section - tambah id="home" kalau belum, tapi body udah ada */}
        <div id="home" className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src="./assets/shely1.png" className="w-10 rounded-md" />
              <q>Avoid or just undertake it</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm Shelyna Riska Amanatullah" disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="A passionate application and web developer dedicated to crafting modern, high-performance digital experiences through innovative and user-friendly solutions."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a 
                href="./assets/CV.pdf" 
                download="Shelyna Riska_CV.pdf" 
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Shelyna Riska A"
              title="IT Programmer"
              handle="shelyynra"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/shely1.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>

        {/* About Section */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <BlurText
                  text="I’m Shelyna Riska Amanatullah, a full-stack developer passionate about building modern, high-performance applications with an intuitive user experience. I enjoy working with the latest technologies like Artificial Intelligence, Machine Learning, and cloud-based development, blending creativity with precision to deliver impactful solutions. With over three years of experience and more than 20 completed projects, I’m committed to helping users and businesses grow in the digital era through functional, aesthetic, and scalable digital products."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      20<span className="text-violet-500">+</span>
                    </h1>
                    <p>Project Finished</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3<span className="text-violet-500">+</span>
                    </h1>
                    <p>Years of Experience</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3.81<span className="text-violet-500">/4.00</span>
                    </h1>
                    <p>GPA</p>
                  </div>
                </div>


                <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>

            {/* Kolom kanan */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>

        </div>

        {/* Tools Section */}
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Tools & Technologies</h1>
          <p className="w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My Profesional Skills</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NEW: Academic Experience Section */}
        <div className="academic mt-32 py-10" id="academic" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Pengalaman Akademik
          </h1>
          <p className="text-base/loose text-center opacity-50 mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            Perjalanan kuliah saya: dari kepanitiaan dan kegiatan hingga tantangan, momen berkesan, dan aspirasi masa depan.
          </p>
          <div className="mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6">
            <div className="space-y-8">
              {/* Kepanitiaan & Organisasi */}
              <div className="flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4">Kepanitiaan & Organisasi</h2>
                  <BlurText
                    text="Selama kuliah saya aktif mengikuti berbagai kepanitiaan, baik internal maupun eksternal. Selain itu, saya juga mengerjakan beberapa proyek kecil dan terus memperdalam pengetahuan di bidang IT. Saya tergabung di UKM Tapak Suci Universitas Airlangga sejak Januari 2024 sebagai staff PSDM, serta aktif di organisasi HIMA D4 Teknik Informatika (HIMTI) sebagai staff ahli internal divisi Perhubungan Internal."
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-base leading-relaxed text-gray-300"
                  />
                </div>
                <div className="md:w-1/3 flex justify-center md:justify-end">
                  <img 
                    src="./assets/akademik.png" 
                    alt="Foto Akademik" 
                    className="w-full max-w-md rounded-xl shadow-lg border border-violet-500/30" 
                  />
                </div>
              </div>

              {/* Kejuaraan & Lomba */}
              <div className="flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4">Kejuaraan & Lomba</h2>
                  <BlurText
                    text="Saya pernah meraih juara di beberapa kejuaraan di Jakarta, Malang, dan Banyuwangi."
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-base leading-relaxed text-gray-300"
                  />
                </div>
                <div className="md:w-1/3 flex justify-center md:justify-end">
                  <img 
                    src="./assets/kejuaraan.png" 
                    alt="Foto Kejuaran" 
                    className="w-full max-w-md rounded-xl shadow-lg border border-violet-500/30" 
                  />
                </div>
              </div>

              {/* Tantangan Terbesar */}
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
                <h2 className="text-2xl font-bold text-white mb-4">Tantangan Terbesar</h2>
                <BlurText
                  text="Tantangan yang sering saya hadapi adalah membagi waktu antara kuliah, organisasi, dan kepanitiaan. Menjaga keseimbangan agar semua bisa berjalan baik menjadi hal yang cukup menantang."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base leading-relaxed text-gray-300"
                />
              </div>

              {/* Momen Berkesan */}
              <div className="flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4">Momen Berkesan</h2>
                  <BlurText
                    text="Banyak momen berkesan selama kuliah, mulai dari mengikuti kepanitiaan yang memperluas relasi, memenangkan kejuaraan di luar kota yang sekaligus menjadi pengalaman traveling, hingga kebersamaan dengan teman-teman sejak masa awal kuliah sampai sekarang."
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-base leading-relaxed text-gray-300"
                  />
                </div>
                <div className="md:w-1/3 flex justify-center md:justify-end">
                  <img 
                    src="./assets/experience.png" 
                    alt="Foto Himpunan" 
                    className="w-full max-w-md rounded-xl shadow-lg border border-violet-500/30" 
                  />
                </div>
              </div>

              {/* Harapan ke Depan */}
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                <h2 className="text-2xl font-bold text-white mb-4">Harapan ke Depan</h2>
                <BlurText
                  text="Ke depan, saya ingin terus mempelajari perkembangan teknologi agar lebih siap bersaing dan berharap bisa bergabung di perusahaan besar. Selain itu, saya juga ingin tetap menjaga hobi traveling ke pantai, gunung, serta mencoba kuliner baru sebagai bagian dari keseimbangan hidup."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base leading-relaxed text-gray-300"
                />
                <ShinyText
                  text="Terus berkembang melalui setiap pengalaman."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400 mt-4"
                />
              </div>
            </div>
          </div>
        </div>
        {/* END Academic Section */}

        {/* Proyek */}
        <div className="proyek mt-32 py-10" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.</p>
        <div className="proyek-box mt-14" >

          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick} // Kirim fungsi untuk handle klik
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
        {/* Proyek */}


        {/* Kontak */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact & Chat
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Get in touch with me or chat in real-time
          </p>

          {/* Container dua kolom */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Chat Room di kiri */}
            <div className="flex-1 bg-zinc-800 p-6 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
              <ChatRoom />
            </div>

            {/* Contact Form di kanan */}
            <div className="flex-1">
              <form
                action="https://formsubmit.co/rissoppa21@gmail.com"
                method="POST"
                className="bg-zinc-800 p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Input Email..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                    >
                      <ShinyText text="Send" disabled={false} speed={3} className="custom-class" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Kontak */}
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App