import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Liên hệ với chúng tôi
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Mọi thắc mắc xin vui lòng liên hệ qua thông tin bên dưới
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Thông tin liên hệ */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 pb-2 border-b border-gray-100">Thông tin liên hệ</h2>
            
            <div className="space-y-6">
              {/* Địa chỉ */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-50 p-2 rounded-lg">
                  <FaMapMarkerAlt className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Địa chỉ cửa hàng</h3>
                  <p className="text-gray-600">134 Nam Kỳ Khởi Nghĩa, Phường Bến Nghé</p>
                  <p className="text-gray-600">Quận 1, TP.Hồ Chí Minh</p>
                  
                  {/* Bản đồ nhúng */}
                  <div className="mt-4 rounded-lg overflow-hidden shadow-md border border-gray-200">
                    <iframe
                      title="Bản đồ cửa hàng WatchTime"
                      width="100%"
                      height="200"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://maps.google.com/maps?q=134%20Nam%20K%E1%BB%B3%20Kh%E1%BB%9Fi%20Ngh%C4%A9a,%20Ph%C6%B0%E1%BB%9Dng%20B%E1%BA%BFn%20Ngh%C3%A9,%20Qu%E1%BA%ADn%201,%20TPHCM&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      className="border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Điện thoại */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-50 p-2 rounded-lg">
                  <FaPhone className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Liên hệ điện thoại</h3>
                  <div className="flex flex-col space-y-1">
                    <a href="tel:+84366669999" className="text-blue-600 hover:text-blue-800 transition-colors">
                      (+84) 366 669 999
                    </a>
                    <a href="tel:+84987654321" className="text-blue-600 hover:text-blue-800 transition-colors">
                      (+84) 987 654 321
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-50 p-2 rounded-lg">
                  <FaEnvelope className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Email hỗ trợ</h3>
                  <div className="flex flex-col space-y-1">
                    <a href="mailto:contact@watchtime.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                      contact@watchtime.com
                    </a>
                    <a href="mailto:support@watchtime.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                      support@watchtime.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Giờ làm việc */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-50 p-2 rounded-lg">
                  <FaClock className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Giờ mở cửa</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-gray-700">Thứ 2 - Thứ 6</p>
                      <p className="text-gray-600">8:00 - 17:00</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-gray-700">Thứ 7</p>
                      <p className="text-gray-600">8:00 - 12:00</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg sm:col-span-2">
                      <p className="font-medium text-gray-700">Chủ nhật</p>
                      <p className="text-gray-600">Nghỉ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form liên hệ */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaPaperPlane className="text-green-600 mr-2" />
              Gửi tin nhắn cho chúng tôi
            </h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Nhập họ tên của bạn"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                   Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Nhập email của bạn"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Nhập số điện thoại"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Chủ đề
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                >
                  <option value="">Chọn chủ đề liên hệ</option>
                  <option value="support">Hỗ trợ kỹ thuật</option>
                  <option value="sales">Tư vấn sản phẩm</option>
                  <option value="feedback">Góp ý/Phản hồi</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Nội dung <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Nhập nội dung tin nhắn của bạn..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-2" />
                  Gửi tin nhắn
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;