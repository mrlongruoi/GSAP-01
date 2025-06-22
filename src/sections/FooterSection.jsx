import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        {isMobile ? (
          <img
            src="/images/footer-drink.png"
            className="absolute top-0 object-contain"
          />
        ) : (
          <video
            src="/videos/splash.mp4"
            autoPlay
            playsInline
            muted
            className="absolute top-0 object-contain mix-blend-lighten"
          />
        )}

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="./images/yt.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/insta.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/tiktok.svg" alt="" />
          </div>
        </div>

        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>SPYLT Hương vị</p>
            </div>
            <div>
              <p>Chug Club</p>
              <p>Tiếp thị sinh viên</p>
              <p>Đại lý sữa</p>
            </div>
            <div>
              <p>Công ty</p>
              <p>Liên hệ</p>
              <p>Nói chuyện ngon</p>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p>
              Nhận quyền truy cập sớm độc quyền và được thông báo về sản phẩm
Cập nhật, sự kiện, và nhiều hơn nữa!
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              {/* The input field and arrow icon for newsletter signup. */}{" "}
              {/* A
          border at the bottom for a clean, modern look. */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999]"
              />
              <img src="/images/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>

        <div className="copyright-box">
          {/* The final row with copyright and legal links. */}
          <p>Bản quyền © 2025 Spylt - Bảo lưu mọi quyền</p>
          <div className="flex items-center gap-7">
            <p>Chính sách bảo mật</p>
            <p>Điều khoản dịch vụ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
