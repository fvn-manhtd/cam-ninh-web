export const Service = () => {
  return (
    <section id="service" className="bg-orange-500 relative pt-[120px] md:pt-[130px] lg:pt-[160px] bg-primary px-4 md:px-16">
      <div className="container">
        <div className="flex flex-wrap text-white">
          <div className="w-full px-4">
            <div className="mb-12 lg:mb-20 max-w-[620px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Service
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[42px] text-dark mb-4">
                Dịch vụ
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed sm:leading-relaxed text-body-color">
                Chuyên cung cấp giải pháp thiết bị an ninh giám sát, vật tư máy
                móc cho ngành dầu khí và các thiết bị điện tử. Với mong muốn
                được đem đến cho khách hàng những ứng dụng tốt nhất trong lĩnh
                vực an ninh tích hợp, an toàn sinh mạng, truyền thông và quản lý
                tự động hóa tòa nhà thông minh, cung cấp vật tư thiết bị, chúng
                tôi luôn cố gắng tìm kiếm và xây dựng những giải pháp tối ưu về
                mặt kỹ thuật.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div
              className="bg-white mb-12 p-10 rounded-full"
              
            >
              <div className="w-[140px] h-[140px] mx-auto flex items-center justify-center bg-primary rounded-2xl mb-8 relative z-10">                
              <img src="./assets/images/hero/slider02.png" />
              </div>
              <h4 className="font-bold text-xl text-dark mb-3">
                Hệ thống camera giám sát an ninh
              </h4>
              <p className="text-body-color mb-8 lg:mb-11">
                Chuyên cung cấp camera giám sát cho các nhà máy lớn
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div
              className="bg-white mb-12 p-10 rounded-full"
            >
              <div className="w-[140px] h-[140px] mx-auto flex items-center justify-center bg-primary rounded-2xl mb-8 relative z-10">                
              <img src="./assets/images/service/tu-dien.png" />
              </div>
              <h4 className="font-bold text-xl text-dark mb-3">
                Thiết kế - bảo trì hệ thống điện
              </h4>
              <p className="text-body-color mb-8 lg:mb-11">
                Chuyên thiết kế, bảo trì hệ thống điện cho nhà máy, gian khoan
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div
              className="bg-white mb-12 p-10 rounded-full"
            >
              <div className="w-[140px] h-[140px] mx-auto flex items-center justify-center bg-primary rounded-2xl mb-8 relative z-10">                
              <img src="./assets/images/service/cap-quang.png" />
              </div>
              <h4 className="font-bold text-xl text-dark mb-3">
                Thiết kế - bảo trì hệ thống mạng cáp quang
              </h4>
              <p className="text-body-color mb-8 lg:mb-11">
                Chuyên thiết kế, bảo trì hệ thống mạng cáp quang cho các nhà máy
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div
              className="bg-white mb-12 p-10 rounded-full"
            >
              <div className="w-[140px] h-[140px] mx-auto flex items-center justify-center bg-primary rounded-2xl mb-8 relative z-10">                
              <img src="./assets/images/service/thiet-bi.png" />
              </div>
              <h4 className="font-bold text-xl text-dark mb-3">
                Cung cấp thiết bị văn phòng
              </h4>
              <p className="text-body-color mb-8 lg:mb-11">
                Chuyên cung cấp thiết bị văn phòng cho các nhà máy lớn
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
