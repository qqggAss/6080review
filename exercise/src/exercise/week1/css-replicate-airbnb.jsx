// import aribnbImage from "../../assets/airbnb.png";

const Exercise2 = () => {
  // 在react中不能直接解析相对路径

  // 方法一：使用import tailwind不能处理动态字符串需要和内联style连用
  // 这里内联style是对象 要用{{}} 而且是backgroundImage
  // return (
  //   <div
  //     style={{
  //       backgroundImage: `url(${aribnbImage})`,
  //       backgroundSize: "cover",
  //       backgroundPosition: "center",
  //     }}
  //     className="w-[744px] h-[763px]"
  //   ></div>
  // );

  // 方法二：放到public目录 可以和tailwind结合使用
  // public文件夹下可以直接访问
  // return (
  //   // opacity 设置不透明度在tailwind中和image不适用 bg-opacity
  //   // 可以这样实现透明度 覆盖上进行比较
  //   <div className="relative w-screen h-screen text-white">
  //     <div className="absolute inset-0 bg-[url('airbnb.png')] w-[744px] h-[763px] bg-cover bg-center opacity-50 z-0"></div>
  //   </div>
  // );
  return (
    // <div
    //   className="w-[744px] h-[763px] flex flex-col"
    //   // 注意要有 url
    //   style={{ backgroundImage: "url(airbnb.png)", opacity: "50%" }}
    // >
    <div className="w-[744px] h-[763px] flex flex-col">
      <h1 className="mt-[9px] ml-[20px] text-[40px] font-[700]">
        Log in to contact us
      </h1>
      {/* 
      字母间距 letter spacing 空格间距 word spacing 行高 line height
      tailwind 没有 word spacing 需要自定义实现 或者用 style 其他的方法
       */}
      <span className="mt-[10px] ml-[19px] text-[23px]">
        This will help us quickly identify you and get you the right kind of
        help
      </span>
      <div className="flex flex-row mt-[30px] ml-[18px] gap-[10px]">
        <button
          className="bg-[#008489] w-[112px] h-[55px] mt-[8px] 
        text-[#ffffff] text-[19px] rounded-[5px]"
        >
          Log In
        </button>
        <button
          className="w-[125px] h-[55px] mt-[8px] 
        text-[#008489] text-[19px] rounded-[5px] border-[1px] border-[#008489]"
        >
          Sign Up
        </button>
      </div>
      <h2 className="border-t-[2px] mt-[85px] pt-[35px] ml-[19px] text-[30px] font-[600]">
        These articles might help
      </h2>
      <div className="flex flex-row mt-[34px] gap-[83px]">
        <div className="w-1/2 flex flex-col pl-[19px]">
          <h3 className="text-[26px] font-[600]">Getting started</h3>
          <span className="mt-[23px] text-[20px]">
            How do I create an account?
          </span>
          <span className="mt-[18px] text-[20px]">
            Airbnb Referral Program Terms and Conditions
          </span>
          <span className="mt-[13px] text-[20px]">
            How do I search for a place to stay?
          </span>
          <span className="mt-[13px] text-[20px]">
            How do I contact a host before booking an reservation?
          </span>
        </div>
        <div className="w-1/2 flex flex-col">
          <h3 className="text-[26px] font-[600]">Your account</h3>
          <span className="text-[20px] mt-[24px]">
            How do I reset or change my password?
          </span>
          <span className="text-[20px] mt-[12px]">
            How do I edit, remove, or add a payment method?
          </span>
          <span className="text-[20px] mt-[12px]">
            How do I edit or change my payout method?
          </span>
          <span className="text-[20px] mt-[12px]">
            How do I deactivate or delete my account?
          </span>
        </div>
      </div>
    </div>
  );
};

export { Exercise2 };
