import SectionWrapper from "./Utils/SectionWrapper";

const MAP_EMBEDED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.724157524055!2d106.68779727587933!3d10.755729489391834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f0fc935b50d%3A0xc11b8be03b0d1561!2zVHJ1bmcgVMOibSBI4buZaSBOZ2jhu4sgLSBUaeG7h2MgQ8aw4bubaSBSaXZlcnNpZGUgUGFsYWNl!5e0!3m2!1svi!2s!4v1687236350387!5m2!1svi!2s";
const MAP_REDIRECT_URL =
  "https://goo.gl/maps/kpaj5boSFVQboXob6";
const MAP_TITLE = "Trung Tâm Hội Nghị - Tiệc Cưới Riverside Palace";
const MAP_ADDRESS =
  "360D Đ. Bến Vân Đồn, Phường 1, Quận 4, Thành phố Hồ Chí Minh, Việt Nam";

const LocationMap = () => {
  return (
    <div className="py-10 bg-[#EFEFEF]">
      <SectionWrapper>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full px-4 md:w-1/2">
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <iframe
                src={MAP_EMBEDED_URL}
                className="w-full h-[580px] md:h-[450px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={MAP_TITLE}
                scrolling="no"
                aria-label={MAP_TITLE}
              />
            </div>
          </div>

          <div className="md:w-1/2 w-full px-4 mb-6 md:mb-0">
            <div className="sticky top-8 text-center md:text-left">
              <h3 className="text-3xl font-head font-bold mb-3 text-gray-700">
                Địa điểm tổ chức cưới:
              </h3>
              <h4 className="text-xl md:text-2xl mb-4 font-sans font-semibold text-gray-700">
                {MAP_TITLE}
              </h4>
              <p className="mb-16 md:mb-10 font-sans">{MAP_ADDRESS}</p>
              <div className="flex md:justify-start justify-center">
                <a
                  href={MAP_REDIRECT_URL}
                  target="_blank"
                  className="px-5 py-2 transition-all text-lg font-semibold rounded-md bg-contrast hover:bg-contrast-2 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  rel="noreferrer"
                >
                  Chỉ đường
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default LocationMap;
