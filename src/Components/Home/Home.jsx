import React, { useState } from 'react';
import './Home.css';
import riya from '../../assets/riyariys.jpg';
import anjali from '../../assets/aanjali.jpg';

const Home = () => {
  const images = [
    "https://media.discordapp.net/attachments/933001532088152084/1369211686896144434/IMG20250430181028.jpg?ex=6889c740&is=688875c0&hm=37a6ea8c493d7d8cc3df65218f2fd296b1242dcdaa362060eba7309dac7b0c44&=&format=webp&width=1398&height=787",
    "https://media.discordapp.net/attachments/933001532088152084/1335139310592065596/IMG20250201114300.jpg?ex=6889bfe1&is=68886e61&hm=c71dae1331f9927a371ce035f3898072fd426647733ba164513ffc7ea1c7e70b&=&format=webp&width=1049&height=787",
    "https://media.discordapp.net/attachments/933001532088152084/1310506019691954188/IMG_20241125_100421787_HDR.jpg?ex=6889c857&is=688876d7&hm=d71fef16edd3368899450360a827edb17b42eed77fce8cd33ac4edd7c68a6bd7&=&format=webp&width=1702&height=765",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlides = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlides = () => {
    const isLast = currentIndex === images.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden object-cover">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-screen object-cover duration-300 ease-in-out"
        />
        <button
          className="absolute top-1/2 left-[30px] -translate-y-1/2 transform bg-black/40 border-0 text-2xl cursor-pointer p-4 rounded-xl z-10 text-white hover:bg-black/60 transition duration-300"
          onClick={prevSlides}
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 right-[30px] -translate-y-1/2 transform bg-black/40 border-0 text-2xl cursor-pointer p-4 rounded-xl z-10 text-white hover:bg-black/60 transition duration-300"
          onClick={nextSlides}
        >
          ❯
        </button>
      </div>

      <div className="relative overflow-hidden bg-gray-50 py-16 px-6 md:px-20">
        {/* The Problem Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text:color mb-6 text-center">The Problem</h1>
          <p className="text:color text-lg leading-relaxed">
      In India, millions of youth from low-income backgrounds lack access to quality education and employment opportunities. Gender disparities further widen this gap, especially for young women who are often denied the chance to pursue higher education or professional careers due to socio-economic constraints. According to the 2021 National Sample Survey, only about 27% of rural girls aged 18-23 are enrolled in higher education, compared to 37% of boys. Many government schools face teacher shortages and lack digital infrastructure, making it difficult for students to gain essential 21st-century skills. The digital divide is stark: less than 15% of rural households have access to a computer, and only 25% have internet connectivity (NFHS-5, 2019-21). As a result, youth from marginalized communities are underrepresented in the technology sector, which offers some of the fastest-growing and best-paying jobs in India.
          </p>
        </div>

        {/* Our Mission & Vision Section */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text:color mb-6 text-center">Our Mission & Vision</h1>
            <p className="text:color text-lg leading-relaxed mb-4">
        <strong>Mission:</strong> To provide quality education and life skills to underprivileged youth, especially girls, through a free one-year residential program in software engineering. We are committed to nurturing holistic growth by fostering critical thinking, leadership, and digital literacy, enabling our students to become confident, self-reliant, and socially responsible individuals. Our mission extends beyond academics, aiming to create a supportive community that encourages lifelong learning and empowers youth to drive positive change in their families and society.
            </p>
            <p className="text:color text-lg leading-relaxed">
        <strong>Vision:</strong> A world where everyone has the opportunity to learn, grow, and lead—regardless of their background. We envision an inclusive society where education and leadership are accessible to all, empowering individuals to break the cycle of poverty and become changemakers in their communities.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://gc-project-delta.vercel.app/campus.jpg"
              alt="student"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-6 md:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text:color">Get Involved</h2>
         <p className="mt-4 text-lg text-gray-700">
      There are many ways to become a part of the NavGurukul family.<br />
      Your time, skills, and support can make a significant difference in the lives of many.
    </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-orange-50 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 p-8 text-center">
            <h3 className="text-xl font-semibold text:color mb-4">Donate</h3>
            <p className="text:color">
        Help us provide free education and housing to more students by supporting our mission financially.
            </p>
          </div>
          <div className="bg-orange-50 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 p-8 text-center">
            <h3 className="text-xl font-semibold text:color mb-4">Volunteer</h3>
            <p className="text:color">
        Share your time or expertise to mentor students or support operations—it takes a village to raise leaders.
            </p>
          </div>
          <div className="bg-orange-50 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 p-8 text-center">
            <h3 className="text-xl font-semibold text:color mb-4">Partner With Us</h3>
            <p className="text:color">
        Collaborate to scale impact, bring new opportunities, or support with resources and infrastructure.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text:color">Success Stories</h2>
          <p className="mt-4 text-lg text:color">
      Inspiring journeys from our students who transformed their lives through NavGurukul.
          </p>
        </div>

        {/* Story Card 1 */}
        <div className="max-w-7xl mx-auto bg-orange-50 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
          <img src={riya} alt="Riya" className="w-48 h-48 rounded-full object-cover border-4 border-orange-200 shadow-md" />
          <div>
            <h3 className="text-2xl font-semibold text:color">Riya Riya</h3>
            <p className="text-sm text:color mb-4">Backend Developer</p>
            <p className="text:color leading-relaxed">
        Before NavGurukul, I had never touched a computer. With the right guidance and support, I became a backend developer. Today, I support my family with pride and independence. I am very grateful to NavGurukul for this opportunity. The skills I gained have truly transformed my life. It was not easy, but it was worth it.
            </p>
          </div>
        </div>

        {/* Story Card 2 */}
        <div className="max-w-7xl mx-auto bg-orange-50 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8 mt-10">
          <img src={anjali} alt="Aanjali" className="w-48 h-48 rounded-full object-cover border-4 border-orange-200 shadow-md" />
          <div>
            <h3 className="text-2xl font-semibold text:color">Aanjali Singh</h3>
            <p className="text-sm text:color mb-4">Full-stack Developer</p>
            <p className="text:color leading-relaxed">
      I am incredibly grateful to NavGurukul for believing in me. The skills I gained have opened doors I never thought possible. Today, I work as a fullstack developer, and I am proud to contribute to meaningful projects. I look forward to continuing my journey and making a positive impact in the tech industry.      </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <h2 className="text-3xl font-bold text-center text:color mb-2">Our Supporters</h2>
        <div className=" w-32 mx-auto mb-8"></div>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <img src="https://gc-project-delta.vercel.app/accenture1.png" alt="Accenture" className="h-12" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-12" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-12" />
          <img src="https://gc-project-delta.vercel.app/kpmg2.png" alt="KPMG" className="h-12" />
        </div>
      </div>
    </>
  );
};

export default Home;
