const Exercise1 = () => {
  // 可以在tailwind.config.js中自定义颜色 也可以方括号一次性使用 自定义和方括号都支持rgb
  return (
    <div
      className="w-[100px] h-[50px] p-[3px] border border-solid 
      border-[#333333] ml-[5px] mr-[5px] mt-[10px] mb-[10px] bg-[rgb(255,255,0)]"
    ></div>
  );
};

export { Exercise1 };
