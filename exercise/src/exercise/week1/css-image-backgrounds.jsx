const Exercise4 = () => {
  return (
    // 只用 bg-url的话 此时因为图片不够大 会复制很多 填充背景
    // tailwind 中 bg-no-repeat 等于 background-repeat: no-repeat; 此时只会有一张图片 放在左上角
    // 根据外部容器 父元素的大小 动态调整图片的宽度和高度
    // 可以用 bg-cover 背景图片覆盖整个容器 保持宽高比 bg-contain 背景图片完全包含在容器内 保持宽高比 bg-auto 背景图片按照原始尺寸显示
    // background-size 对应 bg-[length:50%_50%]
    // background-position 属性 在 tailwind 中 bg-center bg-top, bottom, left, right 等
    <div
      className="w-[1500px] h-[800px] border border-[#333] bg-[#cccccc]
    bg-[url('eris.jpg')] bg-no-repeat bg-center bg-[length:50%_50%]"
    ></div>
  );
};

export { Exercise4 };
