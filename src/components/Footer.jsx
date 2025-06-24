import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import logo from '../assets/images/logo.png'; // Import the actual logo

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="中國遊蹤" className="h-10" /> {/* Use the actual logo */}
              <div>
                <h3 className="text-lg font-bold">中國遊蹤有限公司</h3>
                <p className="text-sm text-gray-400">China Tourist (Hong Kong) Limited</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              自2005年成立以來，我們致力於為客戶提供專業、優質的旅遊服務，
              以客為尊的服務理念深受客戶信賴。
            </p>
            <p className="text-sm text-gray-500">旅行社牌照：353042</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">快速連結</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  首頁
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  關於我們
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  旅遊服務
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  聯絡我們
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">主要服務</h4>
            <ul className="space-y-2 text-gray-400">
              <li>行程推介</li>
              <li>自組包團</li>
              <li>會議旅遊</li>
              <li>遊學團</li>
              <li>郵輪旅遊</li>
              <li>電子商務</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">聯絡資訊</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>Shop 61, 2/F, Beverley Commercial Centre</p>
                  <p>87-105 Chatham Road South, Tsim Sha Tsui, Kowloon</p>
                </div>
              </div>
                     <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <div className="text-gray-400 text-sm">
                    <a href="https://wa.me/85259519582" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                      WHATSAPP：5951 9582
                    </a>
                  </div>
                </div>             
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  <a href="mailto:info@cthk.hk" className="text-gray-400 hover:text-white">info@cthk.hk</a>
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <p className="text-gray-400 text-sm">星期一至日 早上10點至7點</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} 中國遊蹤有限公司 China Tourist (Hong Kong) Limited. 版權所有.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                免責聲明
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                私隱政策
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                客戶服務
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


