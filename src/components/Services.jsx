import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Briefcase, GraduationCap, Ship, Plane, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import chinesePagoda from '../assets/images/chinese_pagoda.jpg';
import chineseTemple from '../assets/images/chinese_temple.jpg';
import greatWallSection from '../assets/images/great_wall_section.jpg';
import groupTour1 from '../assets/images/group_tour_1.jpg';
import groupTour2 from '../assets/images/group_tour_2.jpg';
import groupTour4 from '../assets/images/group_tour_4.jpg';

const Services = () => {
  const mainServices = [
    {
      icon: Users,
      title: '自組包團',
      description: '為企業、學校、政府機構及私人團體度身訂造專屬行程，無論是商務考察、員工旅遊、團隊建設，還是文化交流，我們都能提供專業的策劃與執行。',
      features: ['度身訂造行程', '靈活出發日期', '專業導遊服務', '優質住宿安排'],
      image: groupTour1,
      highlight: '獨立包團熱線：5951 9582',
    },
    {
      icon: GraduationCap,
      title: '中國國內遊學團',
      description: '結合教育與旅遊的深度體驗，為學生提供豐富的中國文化、歷史、地理及自然風光學習機會，培養國際視野和跨文化理解能力。',
      features: ['課程設計', '名校參訪', '文化體驗', '安全保障'],
      image: groupTour4,
      highlight: '遊學團專線：5951 9582',
    },
    {
      icon: MapPin,
      title: '行程推介',
      description: '精選中國各地特色旅遊路線，從壯麗山河到古城文化，帶您體驗不一樣的中國。',
      features: ['高端豪華旅遊', '文化深度遊', '自然風光遊', '美食體驗遊'],
      image: groupTour2,
    },
  ];

  const additionalServices = [
    {
      icon: Briefcase,
      title: '會議旅遊',
      description: '專業的商務旅遊服務，結合會議與休閒的完美體驗。',
    },
    {
      icon: Ship,
      title: '郵輪旅遊',
      description: '提供全球郵輪假期的接送安排及行程諮詢。',
    },
    {
      icon: Plane,
      title: '電子商務',
      description: '便捷的線上旅遊服務平台，隨時隨地預訂您的旅程。',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${chinesePagoda})`,
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
            旅遊服務
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl"
          >
            多元化的專業旅遊服務，滿足您的不同需求
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              主要服務
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              我們提供全方位的旅遊服務解決方案
            </motion.p>
          </div>

          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  {service.highlight && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-yellow-500 mr-2" />
                        <p className="text-yellow-700 font-semibold">{service.highlight}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    了解更多
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-2xl w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              其他服務
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              更多專業旅遊服務選擇
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="text-center h-full card-hover">
                  <CardHeader>
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
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

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              服務流程
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              簡單四步，開始您的完美旅程
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: '諮詢需求', description: '聯絡我們了解您的旅遊需求' },
              { step: '02', title: '方案設計', description: '為您度身訂造旅遊方案' },
              { step: '03', title: '確認預訂', description: '確認行程細節並完成預訂' },
              { step: '04', title: '享受旅程', description: '開始您的精彩旅遊體驗' },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
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
            準備開始您的旅程？
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 text-gray-200"
          >
            聯絡我們的專業團隊，為您提供最適合的旅遊服務
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
              <a href="https://wa.me/85259519582" target="_blank" rel="noopener noreferrer">
                立即查詢
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
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

export default Services;




