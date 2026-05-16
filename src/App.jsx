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
              <q>Always learning, always creating.</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm Shelyna Riska Amanatullah" disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="An informatics student and aspiring web & application developer, passionate about learning and creating modern, user-friendly digital solutions."
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
              text="I’m Shelyna Riska Amanatullah, an informatics student and aspiring full-stack developer with a strong passion for learning and creating digital solutions. Since my first semester, I have been exploring projects, coursework, and organizational activities to improve both technical and soft skills. I enjoy working with web development, artificial intelligence, and cloud-based technologies, combining creativity with problem-solving to deliver meaningful results. Currently in my 5th semester with a GPA of 3.71/4.00, I am eager to continue growing, collaborating, and contributing to impactful digital products in the future."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
            />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      10<span className="text-violet-500">+</span>
                    </h1>
                    <p>Project Finished</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      2<span className="text-violet-500">+</span>
                    </h1>
                    <p>Years of Experience</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3.62<span className="text-violet-500">/4.00</span>
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
            Academic Experience
          </h1>
          <p className="text-base/loose text-center opacity-50 mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
              My college journey: from committees and activities to challenges, memorable moments, and future aspirations.
          </p>
          <div className="mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6">
            <div className="space-y-8">
              {/* Kepanitiaan & Organisasi */}
              <div className="flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4">Committees & Organizations</h2>
                  <BlurText
                    text="During my college years, I have been actively involved in various committees both within and outside the campus. I also worked on several small projects to improve my knowledge in the field of IT. Since January 2024, I have been a staff member in the Human Resource Development division of the Tapak Suci Student Activity Unit at Universitas Airlangga. In addition, I am actively involved in the Informatics Engineering Student Association (HIMTI) as an internal expert staff in the Internal Relations division. Through these experiences, I have learned teamwork, communication, and time management skills that are valuable for both academic and professional development."
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
                  <h2 className="text-2xl font-bold text-white mb-4">Championships & Competitions</h2>
                  <BlurText
                    text="I have had the opportunity to compete in several championships and was fortunate to achieve victories in different cities such as Jakarta, Malang, and Banyuwangi. These accomplishments gave me a sense of pride and confidence, while also teaching me discipline, consistency, and the importance of perseverance in reaching goals."
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
              <div className="flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4">Biggest Challenge</h2>
                  <BlurText
                    text="One of the biggest challenges I face during college is balancing time between lectures, organizational activities, and committee responsibilities. Managing these different commitments is not always easy, but it has helped me become more disciplined, responsible, and able to prioritize tasks effectively."
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-base leading-relaxed text-gray-300"
                  />
                </div>
                <div className="md:w-1/3 flex justify-center md:justify-end">
                  <img 
                    src="./assets/challenge.png" 
                    alt="Foto Tantangan" 
                    className="w-full max-w-md rounded-xl shadow-lg border border-violet-500/30" 
                  />
                </div>
              </div>

              {/* Momen Berkesan */}
              <div className="flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4">Memorable Moments</h2>
                  <BlurText
                    text="There are many memorable moments from my college journey. Joining committees has expanded my network and provided valuable experiences. Winning championships in other cities also became not only an academic achievement but also an opportunity for traveling and exploring new places. Moreover, the friendships and bonds I have built with my peers since the beginning of college remain one of the most meaningful parts of this journey."
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
                <h2 className="text-2xl font-bold text-white mb-4">Future Aspirations</h2>
                <BlurText
                  text="Looking ahead, I want to continue learning and keeping up with technological developments so that I am well-prepared to compete in the professional world. My aspiration is to join a reputable company where I can further sharpen my skills, grow professionally, and make meaningful contributions through the expertise I have developed."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base leading-relaxed text-gray-300"
                />
                <ShinyText
                  text="Continuously growing through every experience."
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
            Contact Me
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Let’s connect across different platforms. I’m open for collaboration or discussion!
          </p>

          {/* Grid tombol kontak */}
          <div className="grid md:grid-cols-4 grid-cols-2 gap-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/0859171641242" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-zinc-800 rounded-xl border border-zinc-700 hover:bg-zinc-700 transition-colors text-center"
            >
              <i className="ri-whatsapp-line ri-3x mb-2 text-green-500"></i>
              <p className="text-sm font-medium">WhatsApp</p>
            </a>

            {/* Email */}
            <a 
              href="mailto:shelynariskaamanatullah@gmail.com"
              className="flex flex-col items-center p-6 bg-zinc-800 rounded-xl border border-zinc-700 hover:bg-zinc-700 transition-colors text-center"
            >
              <i className="ri-mail-line ri-3x mb-2 text-red-500"></i>
              <p className="text-sm font-medium">Email</p>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/shelyynra/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-zinc-800 rounded-xl border border-zinc-700 hover:bg-zinc-700 transition-colors text-center"
            >
              <i className="ri-instagram-line ri-3x mb-2 text-pink-500"></i>
              <p className="text-sm font-medium">Instagram</p>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/shelyna-riska-amanatullah-420a5040a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-zinc-800 rounded-xl border border-zinc-700 hover:bg-zinc-700 transition-colors text-center"
            >
              <i className="ri-linkedin-line ri-3x mb-2 text-blue-500"></i>
              <p className="text-sm font-medium">LinkedIn</p>
            </a>
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