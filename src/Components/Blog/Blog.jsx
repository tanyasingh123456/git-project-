import hacthon1 from '../../assets/hacthon1.jpeg';
import hacthon2 from '../../assets/hacthon2.jpeg';
import hacthon3 from '../../assets/hacthon3.jpeg';
import hacthon4 from '../../assets/hacthon4.jpeg';
import hacthon5 from '../../assets/hacthon5.jpeg';
import hacthon6 from '../../assets/hacthon6.jpeg';
import event1 from '../../assets/event1.jpeg';
import event2 from '../../assets/event2.jpeg';
import event3 from '../../assets/event3.jpeg';
import event4 from '../../assets/event4.jpeg';
import event5 from '../../assets/event5.jpeg';
import event6 from '../../assets/event6.jpeg';
import React, { useState } from "react";

const Blog = () => {
  const [filter, setFilter] = useState("All");

  const data = [
    { id: 1, type: "Hackathon", category: "Students designed creative charts to showcase ideas and teamwork during the Hackathon.", img: hacthon1 },
    { id: 2, type: "Hackathon", category: "Students participated in the Communication Hackathon to enhance their speaking, listening, and team coordination skills", img: hacthon2 },
    { id: 3, type: "Hackathon", category: "Students worked in groups to perform tasks like speaking challenges, role plays, and discussions. It helped them practice English confidently and learn together", img: hacthon3 },
    { id: 4, type: "Hackathon", category: "In the Movie Hackathon, students collaborated to create short films and fun videos. It encouraged creativity, storytelling, and teamwork while learning video-making skills.", img: hacthon4 },
    { id: 5, type: "Hackathon", category: "Students showcased their creativity by designing charts that represented ideas, project flows, and teamwork strategies during the Chart-Making Hackathon", img: hacthon5 },
    { id: 6, type: "Hackathon", category: "During the Chart-Making Hackathon, students worked in teams to create visual charts showcasing ideas, responsibilities, and workflows. The activity boosted creativity, coordination, and collaboration.", img:hacthon6 },
    { id: 7, type: "Event", category: "This group photo reflects the heart of NavGurukul — a vibrant community of learners, dreamers, and changemakers. It reminds us that learning becomes more meaningful when we grow together.", img: event1 },
    { id: 8, type: "Event", category: "A beautiful memory of togetherness — this group photo captures the spirit of unity, friendship, and the shared journey of learning at NavGurukul.", img: event2 },
    { id: 9, type: "Event", category: "The Independence Day celebration was filled with patriotism, cultural performances, and student speeches. From flag hoisting to dances and songs, the event reflected unity and pride across the campus.", img: event3 },
    { id: 10, type: "Event", category: "The Miss Culture event highlighted students’ confidence, creativity, and cultural spirit.", img: event4 },
    { id: 11, type: "Event", category: "The Reward Ceremony was a proud and joyful occasion where students were recognized for their hard work, dedication, and achievements. It celebrated excellence and inspired everyone to keep striving for their best.", img: event5 },
    { id: 12, type: "Event", category: "The Reward Celebration honored the winners with certificates and prizes for their exceptional efforts and achievements. It was a proud moment of appreciation, joy, and motivation for all.", img: event6 },
  ];

  const filteredData =
    filter === "All" ? data : data.filter((item) => item.type === filter);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Filter Buttons */}
      <div className="flex gap-3 mb-8 flex-wrap justify-center">
        {["All", "Hackathon", "Event"].map((btn) => (<button key={btn} className={`px-5 py-2 rounded-full font-medium shadow-md transition-all duration-300 mt-30 ${filter === btn ? "bg-blue-600 text-white shadow-lg scale-105" : "bg-gray-100 text-gray-700 hover:bg-blue-100"}`}onClick={() => setFilter(btn)} >
            {btn}
          </button>
        ))}
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <img
              src={item.img}
              alt={item.category}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-800 text-sm font-medium">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
