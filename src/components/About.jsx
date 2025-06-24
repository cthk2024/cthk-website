import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Star, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import greatWallSection from '../assets/images/great_wall_section.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: '產品積量',
      description: '堅持以產品積量、誠信立業經營原則',
    },
    {
      icon: Heart,
      title: '用心服務',
      description: '堅持從心出發用心服務服務原則',
    },
    {
      icon: Star,
      title: '以客為尊',
      description: '堅持以人為本，以客為尊服務',
    },
  ];

  const milestones = [
    {
      year: '2005',
      title: '公司成立',
      description: '中國遊蹤有限公司正式成立，開始專業旅遊服務',
    },
    {
      year: '2010',
      title: '業務拓展',
      description: '擴展多元化業務，包括會議旅遊、遊學團等',
    },
    {
      year: '2015',
      title: '服務升級',
      description: '引入電子商務平台，提升客戶服務體驗',
    },
    {
      year: '2020',
      title: '大灣區發展',
      description: '積極拓展大灣區旅遊市場，提供更多元化服務',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${greatWallSection})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            關於我們
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl"
          >
            了解中國遊蹤的發展歷程與服務理念
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">我們的故事</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  中國遊蹤成立於2005年，憑著進取熱誠的幹勁與及以客為尊的宗旨，
                  是一家專注於中國國內包團及遊學團的專業旅遊公司。
                </p>
                <p>
                  我們致力於為企業、學校和團體提供度身訂造的深度中國遊學體驗，
                  無論是文化考察、學術交流還是團隊建設，我們都能提供專業的策劃與執行。
                </p>
                <p>
                  我們深耕中國市場，擁有豐富的資源和經驗，確保每一趟旅程都能讓參與者
                  深入了解中國的歷史文化、自然風光和現代發展，並從中獲得寶貴的學習與成長。
                </p>
                <p>
                  中國遊蹤尋求公司多元化的業務發展，在致力發展包團和遊學團業務的同時，
                  也將不斷創新，為客戶帶來更具特色和教育意義的中國旅遊產品。
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={greatWallSection}
                alt="中國遊蹤"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">20+</div>
                <div className="text-sm">年專業經驗</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              我們的價值觀
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              三大核心原則指導我們的服務
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="text-center h-full card-hover">
                  <CardHeader>
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              發展歷程
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              見證我們的成長足跡
            </motion.p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-500"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 px-8">
                    <Card className="card-hover">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">{milestone.year}</span>
                          </div>
                          <CardTitle className="text-xl">{milestone.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            展望未來
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 leading-relaxed"
          >
            我們除了為同業提供專業服務，亦希望成為顧客心目中專業及最可信賴的旅行社品牌，
            鞭策我們不斷創新拓展，更進一步，精益求精為顧客提供多樣化而深具質感的旅遊產品。
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default About;


