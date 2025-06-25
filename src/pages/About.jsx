import { motion } from "framer-motion";
import { Church, Users, BookOpen, Calendar, Cross } from "lucide-react";
import Header from "../components/Header";
import SereneBackground from "../components/SereneBackground";
import FrostedCard from "../components/FrostedCard";
import { images } from "../assets/images";
import { leaders } from "../data/leaders";
import { pastors } from "../data/pastors";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const timelineVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6
    }
  })
};

const pastorVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6
    }
  })
};

const leadershipVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const memberVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

export default function About() {
  const timelineData = [
    { 
      year: "1981", 
      events: [
        "June: Special meetings with Pr. P. N. Zachariah",
        "August: Decision to stand with Br. George Mammen",
        "September 13: Formation of 7-member committee",
        "December 11: Br. George Mammen separated for ministry"
      ]
    },
    { 
      year: "1982", 
      events: [
        "February 2: Official approval from IPC General Secretary",
        "IPC Shalom recognized as second local church in Bahrain"
      ]
    },
    { 
      year: "1991", 
      events: [
        "November: Official approval as Sister Church of IPC, Kumbanad",
        "Church officially named 'IPC Shalom'"
      ]
    }
  ];

  const leadershipTeams = [
    {
      name: "Church Leadership",
      members: Array(9).fill().map((_, i) => ({
        name: `Member ${i+1}`,
        position: i === 0 ? "Pastor" : i < 4 ? "Elder" : "Deacon",
        img: images.logo
      }))
    },
    {
      name: "CBS Leadership",
      members: Array(5).fill().map((_, i) => ({
        name: `Member ${i+1}`,
        position: i === 0 ? "Coordinator" : "Member",
        img: images.logo
      }))
    },
    {
      name: "PYPA Leadership",
      members: Array(6).fill().map((_, i) => ({
        name: `Member ${i+1}`,
        position: i === 0 ? "President" : i < 3 ? "Secretary" : "Member",
        img: images.logo
      }))
    },
    {
      name: "Women's Fellowship",
      members: Array(3).fill().map((_, i) => ({
        name: `Member ${i+1}`,
        position: i === 0 ? "Leader" : "Member",
        img: images.logo
      }))
    }
  ];

  return (
    <div className="relative">
      <Header />
      <SereneBackground />
      
      <div className="relative z-10 pt-24 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-16"
          >
            <FrostedCard>
              <motion.div variants={itemVariants} className="md:flex items-center gap-8">
                <div className="md:w-2/3">
                  <div className="flex justify-center md:justify-start mb-4">
                    <Cross size={48} className="text-red-600" />
                  </div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent mb-4">
                    About IPC Shalom
                  </h1>
                  <motion.div variants={fadeInVariants} className="text-gray-700 text-lg">
                    <p className="mb-4 italic font-medium text-red-700">
                      "I will build my Church". The gates of hell shall not prevail it.
                    </p>
                    <p className="mb-4">
                      IPC Shalom Bahrain stands as a testament to God's faithfulness, growing from humble beginnings to become a vibrant spiritual home for believers in Bahrain.
                    </p>
                    <p>
                      Our community is built on the foundation of Christ's love, with a rich heritage of faith and service that continues to inspire our mission today.
                    </p>
                  </motion.div>
                </div>
                <motion.div 
                  variants={fadeInVariants}
                  className="mt-6 md:mt-0 md:w-1/3"
                >
                  <div className="relative aspect-video md:aspect-square rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={images.community} 
                      alt="IPC Shalom Community"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </motion.div>
              </motion.div>
            </FrostedCard>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={containerVariants}
            className="mb-16"
          >
            <FrostedCard>
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">
                  A Look Into The Past - The Formation
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <motion.div 
                    className="space-y-6"
                    variants={fadeInVariants}
                  >
                    <p>
                      Started as a small gathering with a few brothers under the leadership of Br. George Mammen at his home has now grown up to be one of the main Pentecostal Churches in the island of Bahrain. When we as a Church under the leadership of Br. George Mammen Mavelikara was going forward in a blessed fellowship.
                    </p>
                    <p>
                      In June 1981, Pr. P. N. Zachariah, a minister of Assemblies of God Church visited Bahrain and we arranged some special meetings on behalf of the church. The visiting Pastor P. N. Zachariah understanding that Br. George Mammen who was leading the meeting at the time was of IPC origin and hence tried to remove him from that position and instead appoint Br. P. M. Joy who was then, the Asst. Pastor of Bahrain Pentecostal Assembly and Member of Assemblies of God to that post.
                    </p>
                    <p>
                      In this situation, it was difficult for us to continue with this ideology further more and therefore opposed the move and took a step to stand with the leadership of Br. George Mammen as a free Pentecostal Church from August 1981.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="relative"
                    variants={fadeInVariants}
                  >
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-green-500 rounded-full"></div>
                    
                    <div className="space-y-8 pl-12">
                      {timelineData.map((item, i) => (
                        <motion.div 
                          key={i}
                          custom={i}
                          variants={timelineVariants}
                          className="relative"
                        >
                          <div className="absolute -left-12 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-red-600 to-green-600 border-4 border-white flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <div className="bg-white/50 p-4 rounded-xl shadow-sm">
                            <h3 className="font-bold text-red-700 text-xl mb-2">{item.year}</h3>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                              {item.events.map((event, j) => (
                                <li key={j}>{event}</li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                <motion.div 
                  variants={fadeInVariants}
                  className="mt-8 space-y-4"
                >
                  <p>
                    Further, a General Body of the Church was gathered on 13 September 1981 wherein we discussed and formed a committee of Seven Members for the smooth functioning of the Church. Later, everyone in the Church decided to go along with the Indian Pentecostal Church of God, and on the basis of that purpose, for the clear functioning of this process an ad-hoc committee of 5 members was selected and the available 21 members of the Church jointly signed a memorandum which was sent to Pr. P. M. Philip, IPC Headquarters through Pr. T. T. Joseph, Senior Pastor of IPC Bahrain.
                  </p>
                  <p>
                    On that basis, we received an official letter from Kumbanad on November 1991 officially approving us as a Sister Church of IPC, Kumbanad. On that basis, we decided to name our Church 'IPC Shalom' by which we are known till date. When IPC Kerala State Secretary, Pr. T. S. Abraham, visited us on 11th December 1981, with the help of Pr. T. T. Joseph, Br. Bajid Buttersa, and under the auspicious service of Pr. T. S. Abraham and under the by-laws of IPC, Br. George Mammen was prayed for and separated for the ministry. Later we received a letter from IPC General Secretary on 2nd February 1982 approving IPC Shalom as the Second local Church in Bahrain.
                  </p>
                  <p className="font-medium text-green-700">
                    As we look back, we with all reverence thankfully remember Pr. George Mammen, Late. Pr. S. V. Thomas, Pr. P. C. Chandy, Pr. James Solomon, Br. V. O. Cherian, Br. P. M. Zachariah, Br. C. T. Samuel, Pr. John Zachariah and Br. Jacob Daniel for all their efforts during these times.
                  </p>
                </motion.div>
              </motion.div>
            </FrostedCard>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={containerVariants}
            className="mb-16"
          >
            <FrostedCard>
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-red-700 mb-8 text-center">
                  Our Pastors Through The Years
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pastors.map((pastor, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={pastorVariants}
                      className="bg-white/80 p-6 rounded-xl shadow-sm hover:shadow-md transition"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-500">
                          <img 
                            src={pastor.img} 
                            alt={pastor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-red-700 text-lg">{pastor.name}</h3>
                          <p className="text-green-600 font-medium">{pastor.period}</p>
                        </div>
                      </div>
                      <p className="text-gray-700">{pastor.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </FrostedCard>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={containerVariants}
          >
            <FrostedCard>
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-red-700 mb-8 text-center">
                  Current Leadership
                </h2>
                
                <motion.div
                  variants={leadershipVariants}
                  className="space-y-12"
                >
                  <motion.div 
                    variants={fadeInVariants}
                    className="bg-white/80 p-6 rounded-xl"
                  >
                    <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
                      <Church size={24} />
                      Church Leadership
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                      {leaders.churchLeadership.map((member, j) => (
                        <motion.div
                          key={j}
                          variants={memberVariants}
                          className="flex flex-col items-center text-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-red-500 mb-3">
                            <img 
                              src={member.img} 
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="font-bold text-red-700">{member.name}</h4>
                          <p className="text-green-600 text-sm">{member.position}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={fadeInVariants}
                    className="bg-white/80 p-6 rounded-xl"
                  >
                    <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
                      <BookOpen size={24} />
                      CBS Leadership
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                      {leaders.cbsLeadership.map((member, j) => (
                        <motion.div
                          key={j}
                          variants={memberVariants}
                          className="flex flex-col items-center text-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-red-500 mb-3">
                            <img 
                              src={member.img} 
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="font-bold text-red-700">{member.name}</h4>
                          <p className="text-green-600 text-sm">{member.position}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={fadeInVariants}
                    className="bg-white/80 p-6 rounded-xl"
                  >
                    <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
                      <Users size={24} />
                      PYPA Leadership
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {leaders.pypaLeadership.map((member, j) => (
                        <motion.div
                          key={j}
                          variants={memberVariants}
                          className="flex flex-col items-center text-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-red-500 mb-3">
                            <img 
                              src={member.img} 
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="font-bold text-red-700">{member.name}</h4>
                          <p className="text-green-600 text-sm">{member.position}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={fadeInVariants}
                    className="bg-white/80 p-6 rounded-xl"
                  >
                    <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
                      <Users size={24} />
                      Women's Fellowship
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {leaders.womensFellowship.map((member, j) => (
                        <motion.div
                          key={j}
                          variants={memberVariants}
                          className="flex flex-col items-center text-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-red-500 mb-3">
                            <img 
                              src={member.img} 
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="font-bold text-red-700">{member.name}</h4>
                          <p className="text-green-600 text-sm">{member.position}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </FrostedCard>
          </motion.section>
        </div>
      </div>
    </div>
  );
}