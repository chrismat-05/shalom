import { useEffect } from "react";
import { images } from "../assets/images";
import { School, Music, Award, Tent, Users, Mic, Mountain, Star, Flower, HandHeart, CalendarHeart, Gift, HeartHandshake } from "lucide-react";
import FrostedCard from "../components/FrostedCard";
import SereneBackground from "../components/SereneBackground";

const Ministries = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".frosted-card").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <SereneBackground />
      
      <div className="relative z-10 pt-24 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FrostedCard className="mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3">
                <div className="rounded-2xl overflow-hidden h-64">
                    <img
                    src={images.cbs10}
                    alt="Children's Bible School"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                    />
                </div>
                </div>
                <div className="w-full md:w-2/3 text-center md:text-left">
                <HeartHandshake size={48} className="text-red-600" />
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
                    Our Ministries
                </h1>
                <p className="text-lg max-w-3xl mx-auto md:mx-0 text-gray-700">
                    Discover the vibrant ministries that form the heartbeat of our church family, each
                    serving unique needs and nurturing spiritual growth.
                </p>
                </div>
            </div>
            </FrostedCard>

          <FrostedCard className="mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden h-64">
                  <img
                    src={images.cbs1}
                    alt="CBS students singing"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-64">
                  <img
                    src={images.cbs2}
                    alt="CBS teacher with students"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-64">
                  <img
                    src={images.cbs5}
                    alt="CBS group activity"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-64">
                  <img
                    src={images.cbs4}
                    alt="CBS anniversary celebration"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <School className="w-8 h-8 text-red-600" />
                  <h2 className="text-3xl font-bold text-red-700">Children's Bible School (CBS)</h2>
                </div>
                <p className="mb-4 text-gray-700">
                  Every Friday morning, our church comes alive with the joyful sounds of children
                  learning God's Word at CBS. What began as a simple Sunday School has blossomed into
                  a vibrant ministry with over 40 students from LKG to 12th grade, lovingly guided by
                  our team of 10 dedicated teachers.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Music className="w-10 h-10 text-green-600" />
                    <p className="text-gray-700">
                      Our weekly gatherings include worship led by the children themselves,
                      interactive Bible lessons, and creative group activities that make Scripture
                      come alive.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-10 h-10 text-green-600" />
                    <p className="text-gray-700">
                      Annual talent tests and our mid-year anniversary celebration showcase the
                      incredible gifts God has given our children, while also inviting new families
                      to join.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Tent className="w-5 h-5 mt-1 text-green-600" />
                    <p className="text-gray-700">
                      Before COVID, our desert campouts were legendary - a time of games, cooking, and
                      fellowship under the stars that we hope to revive soon!
                    </p>
                  </div>
                </div>
                
                <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                  <p className="font-medium text-red-700">
                    "Train up a child in the way he should go, and when he is old he will not depart
                    from it."
                  </p>
                  <p className="text-sm text-red-600 opacity-80">- Proverbs 22:6 (Our guiding verse for CBS)</p>
                </div>
              </div>
            </div>
          </FrostedCard>

          <FrostedCard className="mb-16">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden h-64">
                  <img
                    src={images.pypa1}
                    alt="PYPA worship session"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-64">
                  <img
                    src={images.pypa2}
                    alt="PYPA Bible study"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-64">
                  <img
                    src={images.pypa3}
                    alt="PYPA group discussion"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-64">
                  <img
                    src={images.pypa4}
                    alt="PYPA anniversary"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                  <h2 className="text-3xl font-bold text-red-700">Pentecostal Youth People Association (PYPA)</h2>
                </div>
                <p className="mb-4 text-gray-700">
                  For 40 years, PYPA has been where our youth discover their God-given purpose
                  through fellowship, worship, and service. Twice a month, our young people gather to
                  lead programs that blend spiritual growth with creative expression.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Mic className="w-5 h-5 mt-1 text-green-600" />
                    <p className="text-gray-700">
                      Our meetings burst with energy - from soul-stirring worship to Bible quizzes that
                      get surprisingly competitive (in the best way possible)!
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mountain className="w-5 h-5 mt-1 text-green-600" />
                    <p className="text-gray-700">
                      Our annual retreats are the stuff of legend - imagine the whole church camping
                      together, sharing testimonies around the fire, and waking up to pray as the sun
                      rises.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 mt-1 text-green-600" />
                    <p className="text-gray-700">
                      The end-of-year talent tests and anniversary celebration give our youth a
                      platform to shine, whether through music, art, or powerful Scripture
                      recitation.
                    </p>
                  </div>
                </div>
                
                <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                  <p className="font-medium text-red-700">
                    "Let no one despise your youth, but be an example to the believers in word, in
                    conduct, in love, in spirit, in faith, in purity."
                  </p>
                  <p className="text-sm text-red-600 opacity-80">- 1 Timothy 4:12 (Our PYPA motto)</p>
                </div>
              </div>
            </div>
          </FrostedCard>

          <FrostedCard>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden h-64">
                  <img
                    src={images.wf1}
                    alt="Women's Fellowship meeting"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-64">
                  <img
                    src={images.wf2}
                    alt="Women praying together"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-64">
                  <img
                    src={images.wf3}
                    alt="Women's Fellowship group photo"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-64">
                  <img
                    src={images.wf1}
                    alt="Women's Fellowship group photo"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Flower className="w-8 h-8 text-red-600" />
                  <h2 className="text-3xl font-bold text-red-700">Women's Fellowship</h2>
                </div>
                <p className="mb-4 text-gray-700">
                  Since 1991, our Women's Fellowship has been the quiet powerhouse of our church - a
                  sisterhood that prays, serves, and loves relentlessly. More than just monthly
                  meetings, we're a network of women committed to living out Proverbs 31 in practical
                  ways.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <HandHeart className="w-5 h-5 mt-1 text-green-600" />
                    <p className="text-gray-700">
                      Our outreach extends from hospital visitations to supporting families in need -
                      we believe faith should roll up its sleeves and get to work.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CalendarHeart className="w-5 h-5 mt-1 text-green-600" />
                    <p className="text-gray-700">
                      Every 2nd Saturday, we gather for worship that often turns into spontaneous
                      prayer sessions, and weekly online meetings keep us connected between in-person
                      gatherings.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Gift className="w-5 h-5 mt-1 text-green-600" />
                    <p className="text-gray-700">
                      Whether it's covering medical expenses, school fees, or just being there with a
                      meal and prayer, our sisters know how to show up when it matters most.
                    </p>
                  </div>
                </div>
                
                <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                  <p className="font-medium text-red-700">
                    "Charm is deceitful and beauty is passing, but a woman who fears the Lord shall be
                    praised."
                  </p>
                  <p className="text-sm text-red-600 opacity-80">- Proverbs 31:30 (Our Women's Fellowship verse)</p>
                </div>
              </div>
            </div>
          </FrostedCard>
        </div>
      </div>
    </div>
  );
};

export default Ministries;