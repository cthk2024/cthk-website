import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Users, Award, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import greatWallHero from '../assets/images/great_wall_hero.jpg';
import greatWallSection from '../assets/images/great_wall_section.jpg';
import chinesePagoda from '../assets/images/chinese_pagoda.jpg';
import chineseTemple from '../assets/images/chinese_temple.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: Users,
      title: '自組包團',
      description: '為企業、學校或團體度身訂造專屬行程，無論是商務考察、員工旅遊還是團隊建設，我們都能滿足您的需求。',
      image: chinesePagoda,
    },
    {
      icon: Award,
      title: '中國國內遊學團',
      description: '結合學習與探索，為學生提供豐富的中國文化、歷史及自然風光體驗，培養國際視野。',
      image: chineseTemple,
    },
    {
      icon: MapPin,
      title: '行程推介',
      description: '精選中國各地特色旅遊路線，從壯麗山河到古城文化，帶您體驗不一樣的中國。',
      image: greatWallSection,
    },
  ];

  const features = [
    {
      icon: Clock,
      title: '20年經驗',
      description: '自2005年成立以來，我們積累了豐富的旅遊服務經驗',
    },
    {
      icon: Award,
      title: '專業認證',
      description: '持有旅行社牌照353042，提供合法可靠的旅遊服務',
    },
    {
      icon: Users,
      title: '客戶至上',
      description: '以客為尊的服務理念，為每位客戶提供優質的旅遊體驗',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white parallax-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${greatWallHero})`,
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4">            <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            專注包團
            <span className="block text-gradient">遊學中國</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            中國遊蹤有限公司 - 您的中國包團及遊學專家
          </motion.p>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" asChild>
              <Link to="/contact">
                立即查詢
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold" asChild>
              <a href="https://wa.me/85259519582" target="_blank" rel="noopener noreferrer">
                WHATSAPP 59519582
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              中國遊蹤有限公司
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              成立於2005年，憑著進取熱誠的幹勁與及以客為尊的宗旨，
              是一家致力於營運香港及國內外旅行團的專業旅遊公司
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              我們的服務
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              多元化的旅遊服務，滿足您的不同需求
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="card-hover overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            準備開始您的中國之旅？
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 text-gray-200"
          >
            聯絡我們的專業團隊，為您度身訂造完美的旅遊體驗
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" asChild>
              <Link to="/contact">
                立即查詢
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold" asChild>
              <a href="https://wa.me/85259519582" target="_blank" rel="noopener noreferrer">
                WHATSAPP 59519582
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

