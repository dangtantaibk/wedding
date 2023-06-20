import TextWithLine from "./Utils/TextWithLine";
import bride from "~/images/thao-img.png";
import groom from "~/images/tai-img.png";

const BrideAndGroom = () => {
  return (
    <div className="pt-20 pb-4">
      <h3 className="text-3xl text-center font-sans font-bold text-gray-500 mb-6">
        Chúng tôi là những người may mắn tìm được nhau
      </h3>
      <div className="w-full flex flex-wrap pb-20">
        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col items-center py-14 sm:px-8 lg:p-20 text-center">
            <img
              src={bride}
              alt="pengantin perempuan"
              className="w-48 h-48 rounded-full mb-8"
            />
            <h3 className="text-3xl font-medium font-head mb-4 text-gray-800">
              Nguyễn Vũ Phương Thảo
            </h3>
            <div className="mb-4">
              <TextWithLine>Cô Dâu</TextWithLine>
            </div>
            <p className="font-sans text-gray-500 leading-6">
              Sinh ngày 25 tháng 5 năm 1996. Công chúa út của {" "}
              <strong>Nguyễn Đức Phi</strong> và{" "}
              <strong>Vũ Thị Nương</strong>.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col h-full items-center py-14 sm:px-8 lg:p-20 text-center justify-between">
            <div className="flex flex-col items-center">
              <img
                src={groom}
                alt="pengantin laki-laki"
                className="w-48 h-48 rounded-full mb-8"
              />
              <h3 className="text-3xl font-medium font-head mb-4 text-gray-800">
                Đặng Tấn Tài
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <TextWithLine>Chú rể</TextWithLine>
              </div>
              <p className="font-sans text-gray-500 leading-6">
                Sinh ngày 18 tháng 10 năm 1996. Con trai út của <strong>Đặng Văn Minh</strong> và {" "}
                <strong>Nguyễn Thị Nguyệt</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrideAndGroom;
