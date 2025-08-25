import Image from "next/image";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row">
      <div className="w-full xl:2/3">
        {/*TOP*/}
        <div className="flex flex-col lg:flex-row gap-4">
          {/*USER INFO CARDS*/}
          <div className="bg-techSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                height={144}
                width={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col gap-4 justify-between">
              <h1 className="text-xl font-semibold">David Keg</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adispisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 font-medium flex-wrap text-xs">
                <div className="w-full md:w-1/3 2xl:w-1/3 lg:w-full flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span className="">A+</span>
                </div>
                <div className="w-full md:w-1/3 2xl:w-1/3 lg:w-full flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span className="">January 2025</span>
                </div>
                <div className="w-full md:w-1/3 2xl:w-1/3 lg:w-full flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span className="w-full md:w-1/ flex items-center gap-2">
                    user@gmail.com
                  </span>
                </div>
                <div className="w-full md:w-1/3 2xl:w-1/3 lg:w-full flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span className="">+254 712 345 678</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex-1 flex gap-4 justify-between flex-wrap"><div></div></div>
        </div>
        {/*BOTTOM*/}
        <div className="">SCHEDULE</div>
      </div>
      {/*RIGHT*/}
      <div className="w-full xl:1/3">RIGHT</div>
    </div>
  );
};

export default SingleTeacherPage;
