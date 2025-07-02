import { Carousel } from "../Carousel";

export const Hero = () => {
  return (
    <div
      id="home"
      className="relative pt-[120px] md:pt-[130px] lg:pt-[160px] bg-primary px-4 md:px-16"
    >
      <div className="container">
        <div className="flex flex-wrap flex-col md:flex-row items-center">
          <div className="w-full md:w-2/3">
            <h1 className="text-orange-500 font-bold text-3xl sm:text-4xl md:text-[45px] leading-snug sm:leading-snug md:leading-snug mb-8">
              Công ty TNHH <br />
              DỊCH VỤ KỸ THUẬT CAM NINH
            </h1>
            <p className="text-base sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed mb-5 text-[#333] max-w-[600px]">
              GIỚI THIỆU CAM NINH Được thành lập từ năm 2011, đến nay công ty
              TNHH DỊCH VỤ KỸ THUẬT CAM NINH đã có những bước tiến vượt bậc
              trong việc cung cấp giải pháp thiết bị an ninh giám sát, vật tư
              máy móc cho ngành dầu khí và các thiết bị điện tử. Với mong muốn
              được đem đến cho khách hàng những ứng dụng tốt nhất trong lĩnh vực
              an ninh tích hợp, an toàn sinh mạng, truyền thông và quản lý tự
              động hóa tòa nhà thông minh, cung cấp vật tư thiết bị, chúng tôi
              luôn cố gắng tìm kiếm và xây dựng những giải pháp tối ưu về mặt kỹ
              thuật, hợp lý về chi phí, dễ dàng làm chủ công nghệ và hơn hết là
              đó là những giải pháp phù hợp cho việc khai thác sử dụng trong
              điều kiện hiện nay tại Việt nam cũng như các nước trong khu vực
              Đông Nam Á.
            </p>
            <ul className="flex flex-wrap items-center justify-center md:justify-start mb-10">
              <li className="mb-4 md:mb-0 md:mr-4">
                <a
                  href="tel:84389684284"
                  className="py-4 px-6 sm:px-10 inline-flex items-center justify-center text-center text-white text-base bg-orange-500 hover:text-white hover:shadow-lg font-medium rounded-lg transition duration-300 ease-in-out"
                >
                  <span className="pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  84-254-3855961
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@camninh.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base font-medium text-orange-500 border border-orange-500 rounded-lg py-4 px-6 sm:px-10 flex items-center hover:opacity-70 transition duration-300 ease-in-out"
                >
                  <span className="pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  info@camninh.com
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-10 md:mb-0">

          <Carousel
            totalSlides={5}
            visibleSlides={1}
            infinite={true}
            autoPlay={true}
            showDots={true}
            showArrow={false}
            spacing="0px"
          >
            <img src="./assets/images/hero/slider01.png" />
            <img src="./assets/images/hero/slider02.png" />
            <img src="./assets/images/hero/slider03.png" />
            <img src="./assets/images/hero/slider04.png" />
            
          </Carousel>


          </div>
        </div>
      </div>
    </div>
  );
};
