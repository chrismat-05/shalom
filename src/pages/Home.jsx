import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Church, Clock, MapPin, Mail, Phone, Calendar, Users, Cross, BookOpen, HeartHandshake } from "lucide-react";
import { Facebook as FacebookIcon, Instagram as InstagramIcon, Youtube as YoutubeIcon } from "lucide-react";

import HeroSlider from "../components/HeroSlider";
import FrostedCard from "../components/FrostedCard";
import OnboardingModal from "../components/OnboardingModal";
import FixedBackgroundSection from "../components/FixBG";
import {images} from "../assets/images";
import SereneBackground from "../components/SereneBackground";

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

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "contact") {
      const section = document.getElementById("contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="relative">
      <section className="hero">
        <HeroSlider />
      </section>
      <FixedBackgroundSection imageUrl={images.bg1}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-24 relative z-10">
          <motion.section 
            className="mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <FrostedCard className="text-center">
              <motion.div variants={itemVariants}>
                <div className="flex justify-center mb-4">
                  <Cross size={48} className="text-red-600" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent mb-3">
                  Welcome to IPC Shalom
                </h2>
                <p className="text-gray-700 mb-6 text-lg">
                  A vibrant community of faith where lives are transformed through the power of Christ's love.
                </p>
                <motion.div className="flex justify-center gap-4">
                  <motion.a
                    href="/about"
                    className="inline-block bg-gradient-to-r from-red-600 to-green-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.a>
                  <button
                    onClick={() => navigate("/", { state: { scrollTo: "contact" } })}
                    className="bg-gradient-to-r from-red-600 to-green-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition-all text-sm font-medium"
                  >
                    Get in Touch
                  </button>
                </motion.div>
              </motion.div>
            </FrostedCard>
          </motion.section>
        </div>
      </FixedBackgroundSection>

      <div className="relative py-16 overflow-hidden bg-gradient-to-b from-red-900/10 via-green-900/10 to-red-900/10">
        <SereneBackground />
        <div className="relative z-10 space-y-24 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-20">
            <motion.section 
              className="grid md:grid-cols-2 gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={images.community}
                    alt="Church Community" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 to-green-600/30"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <HeartHandshake size={32} className="text-red-600" />
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <FrostedCard>
                  <h2 className="text-3xl font-bold text-red-700 mb-4">Our Mission & Vision</h2>
                  <p className="text-gray-600 mb-6">
                    IPC Shalom is a Spirit-filled, Christ-centered church committed to making disciples who love God, serve others, 
                    and share the Gospel. We believe in the transforming power of God's Word and the Holy Spirit to renew minds 
                    and restore lives.
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: <Cross size={24} className="text-red-600" />, text: "Christ-centered worship" },
                      { icon: <BookOpen size={24} className="text-red-600" />, text: "Bible-based teaching" },
                      { icon: <HeartHandshake size={24} className="text-red-600" />, text: "Authentic community" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="bg-red-100 p-2 rounded-lg">{item.icon}</div>
                        <p className="text-gray-700">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </FrostedCard>
              </motion.div>
            </motion.section>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <motion.section 
              id="events"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <FrostedCard>
                  <div className="text-center mb-8">
                    <Clock size={48} className="mx-auto text-red-600 mb-4" />
                    <h2 className="text-3xl font-bold text-red-700 mb-2">Worship Timings</h2>
                    <p className="text-red-600">Join us for our weekly services and gatherings</p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: "Sunday Worship", time: "Sundays @ 7:30 PM", desc: "Our main weekly worship service", icon: <Church /> },
                      { title: "Bible Study", time: "Fridays @ 11:00 AM", desc: "In-depth study of God's Word", icon: <BookOpen /> },
                      { title: "Tamil Service", time: "Fridays @ 5:00 PM", desc: "Worship in Tamil language", icon: <Church /> },
                      { title: "Youth Gathering", time: "Thursdays @ 7:30 PM", desc: "For our young members", icon: <Users /> },
                      { title: "Prayer Meeting", time: "Wednesdays @ 7:30 PM", desc: "Corporate prayer gathering", icon: <Cross /> },
                      { title: "Women's Fellowship", time: "2nd Monday @ 7:30 PM", desc: "Monthly women's gathering", icon: <Users /> }
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        className="bg-white rounded-xl p-6 border border-red-100 hover:border-red-200 transition cursor-pointer group shadow-sm"
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-red-100 p-3 rounded-full mb-4 group-hover:bg-red-200 transition">
                            {item.icon}
                          </div>
                          <h3 className="font-bold text-red-700 text-xl mb-1">{item.title}</h3>
                          <p className="text-red-600 font-medium mb-2">{item.time}</p>
                          <p className="text-red-500 text-sm">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </FrostedCard>
              </motion.div>
            </motion.section>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <FrostedCard>
                <motion.div variants={itemVariants} className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-red-700 mb-2">Our Ministries</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-green-600 mx-auto"></div>
                </motion.div>
                
                <motion.div 
                  className="grid md:grid-cols-3 gap-8"
                  variants={containerVariants}
                >
                  {[
                    { 
                      title: "Children's Ministry", 
                      desc: "Engaging programs for kids to learn about Jesus", 
                      icon: <Users className="text-red-600" />,
                      color: "from-red-100 to-red-200"
                    },
                    { 
                      title: "Youth Ministry", 
                      desc: "Dynamic gatherings for teens and young adults", 
                      icon: <Users className="text-green-600" />,
                      color: "from-green-100 to-green-200"
                    },
                    { 
                      title: "Women's Fellowship", 
                      desc: "Encouragement and growth for women of all ages", 
                      icon: <Users className="text-yellow-600" />,
                      color: "from-yellow-100 to-yellow-200"
                    },
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                    >
                      <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                      <div className="p-6">
                        <div className={`bg-gradient-to-r ${item.color} p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4`}>
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-red-700 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                        <a href="#" className="mt-4 inline-block text-red-600 hover:underline">Learn more →</a>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </FrostedCard>
            </motion.section>
          </div>

          {/* New Section: Upcoming Events */}
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <FrostedCard>
                <motion.div variants={itemVariants} className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-red-700 mb-2">Upcoming Events</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-green-600 mx-auto"></div>
                </motion.div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Annual Prayer Conference",
                      date: "June 15-17, 2023",
                      desc: "Join us for three days of powerful prayer and worship",
                      icon: <Calendar className="text-red-600" />
                    },
                    {
                      title: "Children's Vacation Bible School",
                      date: "July 10-14, 2023",
                      desc: "Fun-filled week of Bible stories, games and activities for kids",
                      icon: <Users className="text-green-600" />
                    },
                    {
                      title: "Mission Sunday",
                      date: "August 6, 2023",
                      desc: "Special service focusing on our mission work",
                      icon: <Cross className="text-red-600" />
                    }
                  ].map((event, idx) => (
                    <motion.div 
                      key={idx}
                      className="bg-white p-6 rounded-xl border border-gray-100 hover:border-red-200 transition shadow-sm"
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-red-100 p-3 rounded-lg">
                          {event.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-red-700 mb-1">{event.title}</h3>
                          <p className="text-green-600 font-medium mb-2">{event.date}</p>
                          <p className="text-gray-600">{event.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FrostedCard>
            </motion.section>
          </div>
        </div>
      </div>

      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-700/70 to-green-700/70"></div>
        <SereneBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 py-16">
          <motion.section 
            id="contact"
            className="grid md:grid-cols-2 gap-12 scroll-m-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "80px 0px 0px 0px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <FrostedCard>
                <h2 className="text-3xl font-bold text-white mb-4">We'd Love to Hear From You</h2>
                <p className="text-red-100 mb-8">
                  Whether you have questions, prayer requests, or just want to say hello, our team is here to help.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600/30 p-3 rounded-lg">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Visit us at</h3>
                      <p className="text-red-100">IPC Shalom Church Villa, Zinj, Bahrain</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600/30 p-3 rounded-lg">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Email Us</h3>
                      <p className="text-red-100">ipcshalom51@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600/30 p-3 rounded-lg">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Call Us</h3>
                      <p className="text-red-100">+973 3504 1017</p>
                      <p className="text-red-100">+973 3945 1498</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-bold text-white mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    <a href="https://www.facebook.com/ipcshalombh/" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition">
                      <FacebookIcon size={20} className="text-white" />
                    </a>
                    <a href="https://www.instagram.com/ipcshalombh/" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition">
                      <InstagramIcon size={20} className="text-white" />
                    </a>
                    <a href="https://www.youtube.com/@ipcshalombh" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition">
                      <YoutubeIcon size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </FrostedCard>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <FrostedCard>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  className="grid gap-4"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full p-4 rounded-xl bg-white/10 border border-white/30 focus:border-red-300 focus:ring-2 focus:ring-red-200 outline-none transition text-white placeholder-red-200"
                    />
                  </div>
                  
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      className="w-full p-4 rounded-xl bg-white/10 border border-white/30 focus:border-red-300 focus:ring-2 focus:ring-red-200 outline-none transition text-white placeholder-red-200"
                    />
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email (optional)"
                      className="w-full p-4 rounded-xl bg-white/10 border border-white/30 focus:border-red-300 focus:ring-2 focus:ring-red-200 outline-none transition text-white placeholder-red-200"
                    />
                  </div>
                  
                  <div className="relative">
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Your Message or Prayer Request"
                      required
                      className="w-full p-4 rounded-xl bg-white/10 border border-white/30 focus:border-red-300 focus:ring-2 focus:ring-red-200 outline-none transition text-white placeholder-red-200"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-green-600 text-white py-4 px-6 rounded-xl hover:opacity-90 transition shadow-lg font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </FrostedCard>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}