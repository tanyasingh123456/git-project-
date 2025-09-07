import React from 'react';
import navgurukulImage from '../../assets/building.jpg'; 
import learnerImage from '../../assets/Untitled.jpeg'
import kitchen from '../../assets/kitchen.jpeg';
import council from '../../assets/council.jpeg';
const About = () => {
  return (
    <div className="font['segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">
      <div className="relative w-full h-screen overflow:hidden">
        <img src={navgurukulImage} alt="NavGurukul Campus" className='w-full h-screen object-cover block blur-[3px]' />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold bg-black/60 px-6 py-4 rounded-lg text-center max-w-[90%]">
  NavGurukul: Empowering Youth Through Free Tech Education
</div>
      </div>


      <div className="m-width-[1800px] mx-auto my-[60px] p-10 bg-gradient-to-br from-white to -[#f4f6f9] rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition-all-duration-300 ease-in-out hover:-translate-y-1 hover:shadow[0_16px_40px_rgba(0,0,0,15)]">
        <h2 className='text-[36px] text-blue-900 mb-[25px] tracking-[1px] font-bold text-center font-bold uppercase '>About NavGurukul</h2>
        <p className='text-[19px] leading-[1.8] text-[#2e2e2e] text-justify [word-spacing:1.2px] tracking-[0.3px] font-[Segoe_UI,Tahoma,Geneva,Verdana,sans-serif]  '>
          NavGurukul is a non-profit organization that offers a one-year residential course to youth from
          underserved communities, helping them build careers in software engineering. It focuses primarily
          on underprivileged girls and students from rural or economically weaker backgrounds who have limited
          access to quality education. NavGurukul believes that every individual has the potential to succeed
          when provided the right environment and opportunities. <br /><br />
          The curriculum not only focuses on technical skills like coding, web development, and data structures
          but also emphasizes personal growth, English communication, critical thinking, and leadership skills.
          The program is entirely free, including food, accommodation, internet, and mentorship. Many graduates
          secure jobs in reputed tech companies or contribute back to their communities. <br /><br />
          NavGurukul promotes peer learning, transparency, and equality—ensuring students take ownership of their
          education and life. It is transforming lives by bridging the gap between talent and opportunity.
        </p>
      </div>
      <section className="m-width-[1600px] mx-auto my-[60px] p-10 bg-gradient to br-from white to [#f9f9f9] rounded-2xl shadow[0_10px 30px(0,0,0,0.12)] transition-all duartion-300 ease-in-out border-border-[#e2e2e2] ">
      <h2 className='text-[36px] text-[#1a1a1a] text-center mb-[50px] font-[popins,sans-serif] tracking-[1px] relative'>Monthly Schedule</h2>
      <div className="flex align-center justify-space-between mb-[50px] gap-[30px] flex-wrap transition-trasnform duration-300 ease-in-out hover:-transform-translate-y-[5px]">
        <img src={kitchen} alt="Kitchen Duty" className="flex-1 max-w-[400px] w-full rounded-[16px] shadow[0_8px_24px(0,0,0,0.15)] transition-transform duartion-300 ease-in-out hover:scale-[1.03]" />
        <div className="flex-[2] p-10">
          <h3 className='text-[34px] mb-4 text-[#2c3e50] font-[Poppins,sans-serif]' >Kitchen Duty</h3>
          <p className='text-[18px] leading-[1.8] text-[#444] text-justify word-spacing-[1.5px] tracking-[0.4px] font-[Segoe_UI] bg-[#f5f5f5] px-5 py-[15px] rounded-[12px] shadow-[inset_0_0_5px_rgba(0,0,0,0.05)]'>
  At NavGurukul, every learner group is assigned <strong>3 kitchen turns per month</strong>. These kitchen responsibilities are not randomly decided — a <strong>dedicated kitchen duty sheet</strong> is maintained and followed strictly, ensuring equal participation from all groups. This system not only helps in maintaining discipline but also builds a strong foundation of <strong>responsibility, collaboration, and time management</strong> among learners. <br /><br />

  During kitchen turns, learners take charge of meal preparation, cleanliness, and coordination, from chopping vegetables to serving food on time. This isn’t just about cooking — it's a powerful learning experience where students practice <strong>leadership, planning, and communication</strong>. Working together in a high-responsibility setting fosters a sense of ownership and unity, making us more aware of the importance of every role in a community. <br /><br />

</p>

        </div>
      </div>

      {/* Peer Learning Section */}
      <div className="flex flex-row-reverse items-center justify-between mb-[50px] gap-[30px] flex-wrap transition-transform duration-300 ease-in-out hover:-translate-y-[5px]">
      <img src={learnerImage} alt="Peer Learning" className="flex-1 max-w-[450px] w-full rounded-[16px] shadow[0_8px_24px(0,0,0,0.15)] transition-transform duartion-300 ease-in-out hover:scale-[1.03]" />
        <div className="flex-[2] p-10">
          <h3 className='text-[34px] mb-4 text-[#2c3e50] font-[Poppins,sans-serif]'>Peer Learning</h3>
          <p className='text-[18px] leading-[1.8] text-[#444] text-justify word-spacing-[1.5px] tracking-[0.4px] font-[Segoe_UI] bg-[#f5f5f5] px-5 py-[15px] rounded-[12px] shadow-[inset_0_0_5px_rgba(0,0,0,0.05)]'>
  At NavGurukul, we follow a <strong>peer learning model</strong> where learners teach and support each other. This not only helps in understanding concepts better but also builds <strong>confidence, communication, and leadership</strong> skills. <br /><br />

  Whether it's coding, communication, or life skills, learners take turns leading sessions and solving doubts. Teaching others helps us learn deeply, and asking questions becomes easy in a supportive environment. <br /><br />

  Peer learning here means growing together as a <strong>self-driven, collaborative community</strong>.
</p>

        </div>
      </div>

      {/* Council Meetings Section */}
      <div className="flex items-center justify-between mb-[50px] gap-[30px] flex-wrap transition-transform duration-300 ease-in-out">
  {/* Content here */}
        <img src={council} alt="Council Meeting" className="flex-1 max-w-[450px] w-full rounded-[16px] shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-in-out hover:scale-[1.03]" />
        <div className="flex-[2] p -10">
          <h3 className='text-[34px] mb-4 text-[#2c3e50] font-[Poppins,sans-serif]'>Council Meetings</h3>
          <p className="text-[18px] leading-[1.8] text-[#444] text-justify word-spacing-[1.5px] tracking-[0.4px] font-[Segoe_UI] bg-[#f5f5f5] px-5 py-[15px] rounded-[12px] shadow-[inset_0_0_5px_rgba(0,0,0,0.05)]">
  Weekly and monthly <strong>council meetings</strong> are a key part of NavGurukul’s democratic campus life. Learners gather to openly discuss challenges, suggest improvements, and make collective decisions that shape the campus environment. <br /><br />

  These meetings promote <strong>transparency, shared leadership, and accountability</strong>, allowing everyone to have a voice. It's not just about managing tasks — it's about building a culture of trust and responsibility.
</p>
        </div>
      </div>
    </section>
    </div> 
  );
};

export default About;
