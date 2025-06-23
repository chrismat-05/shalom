import { motion } from "framer-motion";
import { Church, Clock, MapPin, Mail, Phone, Calendar, Users } from "lucide-react";
import HeroSlider from "../components/HeroSlider";
import FrostedCard from "../components/FrostedCard";
import OnboardingModal from "../components/OnboardingModal";
import { useTheme } from "../context/ThemeContext";

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
    },
  },
};

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="bg-softGray dark:bg-slate">
      <HeroSlider />
      
      <div className="pt-5 pb-12 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
        <OnboardingModal />

        <motion.section 
          className="mt-10" 
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <FrostedCard className="text-center">
            <motion.div variants={itemVariants}>
              <div className="flex justify-center mb-4">
                <Church size={48} className="text-royal dark:text-gold" />
              </div>
              <h2 className="text-4xl font-bold text-royal dark:text-gold mb-3">IPC Shalom</h2>
              <p className="text-textPrimary dark:text-softGray mb-6 text-lg">
                IPC Shalom is a Spirit-filled, Christ-centered church with a heart for people and a mission to share God's love. 
                Whether you're new to faith or looking for a spiritual family, we welcome you to grow, worship, and serve with us.
              </p>
              <motion.a
                href="/about"
                className="inline-block bg-royal dark:bg-gold text-white dark:text-slate px-6 py-3 rounded-lg hover:bg-royal/90 dark:hover:bg-gold/90 transition shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                More About Us
              </motion.a>
            </motion.div>
          </FrostedCard>
        </motion.section>

        <motion.section 
          className="mt-16" 
          id="timings"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <FrostedCard>
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <Clock size={32} className="text-royal dark:text-gold" />
              <h2 className="text-3xl font-bold text-royal dark:text-gold">Worship Timings</h2>
            </motion.div>
            
            <motion.div 
              className="grid sm:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {[
                { title: "Sunday Service @ Church Villa", time: "Sunday 7:30 PM", icon: <Church /> },
                { title: "CBS Friday @ Church Villa", time: "Friday 11:00 AM", icon: <Church /> },
                { title: "Tamil Worship @ Church Villa", time: "Friday 5:00 PM", icon: <Church /> },
                { title: "Gospel Meeting @ Church Villa", time: "Friday 7:30 PM", icon: <Church /> },
                { title: "PYPA / Prayer Meetings", time: "Thursday 7:30 PM", icon: <Church /> },
                { title: "Women's Fellowship", time: "2nd Monday 7:30 PM", icon: <Church /> }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="bg-white/30 dark:bg-slate/70 rounded-xl p-4 border border-white/40 dark:border-slate/50 hover:bg-white/40 dark:hover:bg-slate/60 transition cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-royal/20 dark:bg-gold/20 rounded-full text-royal dark:text-gold">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-textPrimary dark:text-softGray">{item.title}</h3>
                      <p className="text-sm text-textSecondary dark:text-softGray/80">{item.time}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </FrostedCard>
        </motion.section>

        <motion.section 
          className="mt-16 grid md:grid-cols-2 gap-8" 
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <FrostedCard>
              <div className="flex items-center gap-3 mb-4 h-full">
                <MapPin size={32} className="text-royal dark:text-gold" />
                <h2 className="text-3xl font-bold text-royal dark:text-gold">Visit Us</h2>
              </div>
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.580906443979!2d50.56563187934567!3d26.210308099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49af0020d677d7%3A0x6528d5c19e521f3!2sIPC%20Shalom%2C%20Bahrain!5e0!3m2!1sen!2sin!4v1750677385237!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </FrostedCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <FrostedCard>
              <div className="flex items-center gap-3 mb-4">
                <Mail size={32} className="text-royal dark:text-gold" />
                <h2 className="text-3xl font-bold text-royal dark:text-gold">Get In Touch</h2>
              </div>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="grid gap-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <motion.div variants={itemVariants}>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full p-3 rounded-lg bg-white/70 dark:bg-slate/70 border border-white/30 dark:border-slate/50 focus:border-royal dark:focus:border-gold focus:ring-1 focus:ring-royal dark:focus:ring-gold outline-none transition"
                    />
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <div className="relative">
                    <Phone size={20} className="absolute left-3 top-3.5 text-royal/50 dark:text-gold/50" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      className="w-full p-3 pl-10 rounded-lg bg-white/70 dark:bg-slate/70 border border-white/30 dark:border-slate/50 focus:border-royal dark:focus:border-gold focus:ring-1 focus:ring-royal dark:focus:ring-gold outline-none transition"
                    />
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <div className="relative">
                    <Mail size={20} className="absolute left-3 top-3.5 text-royal/50 dark:text-gold/50" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email (optional)"
                      className="w-full p-3 pl-10 rounded-lg bg-white/70 dark:bg-slate/70 border border-white/30 dark:border-slate/50 focus:border-royal dark:focus:border-gold focus:ring-1 focus:ring-royal dark:focus:ring-gold outline-none transition"
                    />
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message or Prayer Request"
                    required
                    className="w-full p-3 rounded-lg bg-white/70 dark:bg-slate/70 border border-white/30 dark:border-slate/50 focus:border-royal dark:focus:border-gold focus:ring-1 focus:ring-royal dark:focus:ring-gold outline-none transition"
                  ></textarea>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    className="w-full bg-royal dark:bg-gold text-white dark:text-slate py-3 px-6 rounded-lg hover:bg-royal/90 dark:hover:bg-gold/90 transition shadow-md font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </button>
                </motion.div>
              </form>
            </FrostedCard>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}