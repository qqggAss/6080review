const Exercise3 = () => {
  return (
    <div
      className="w-[1895px] h-[943px]"
      //   style={{ backgroundImage: "url(page.jpg)", opacity: "50%" }}
    >
      <div className="flex flex-col items-center w-full h-full pl-[220px] pr-[220px]">
        <h1 className="mt-[12px] text-[45px] font-[300]">Session Times</h1>
        <div className="w-full flex flex-row mt-[12px]">
          <div className="w-1/2 flex flex-col items-center">
            <div className="text-[32px] text-[#e6b451]">
              Wednesday Training: 8pm - 10pm
            </div>
            <p className="mt-[24px] text-[20px]">
              On Wednesday evenings at 8pm, we run training sessions at Yellow
              Bridge
            </p>
            <p className="text-[20px]">Gym.</p>
            <p className="mt-[5px] text-[20px]">
              Attendance is mandatory for all team players. We start with
              warmups, drills and
            </p>
            <p className="text-[20px]">
              then play games using modified rules with a focus on specific
              skills.
            </p>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <h1 className="text-[32px] text-[#e6b451]">
              Saturday Session: 10am - 12am
            </h1>
            <p className="mt-[22px] text-[19px]">
              On Saturday mornings at 10am, we play competitive matches at Sandy
              Park.
            </p>
            <p className="mt-[5px] text-[19px]">
              Warm-up begins at 10am, after which we play a full length match,
              starting at
            </p>
            <p className="mt-[5px] text-[19px]">10:30am.</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-full h-[170px] border-t-2 border-b-2 mt-[52px]">
          <p className="pt-[50px] text-[20px]">
            Registration for the season begins in August and grading sessions
            are held in September. Please register if you wish to attend and we
            will send invites to a grading
          </p>
          <p className="text-[20px]">
            session via email. Grading sessions are allocated based on previous
            experience.
          </p>
        </div>
        <div className="w-full flex flex-row mt-[40px]">
          <div className="w-1/2 flex flex-col items-center">
            <div className="text-[32px] text-[#e6b451]">New to Volleyball?</div>
            <p className="mt-[24px] text-[20px]">
              Newcomers to volleyball are welcome to come to
              <strong>1 free trial</strong> training session
            </p>
            <p className="text-[20px]">
              before you commit by registration and pay your subscription.
            </p>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <h1 className="text-[32px] text-[#e6b451]">
              Seasoned player or complete newbie?
            </h1>
            <p className="mt-[25px] text-[20px]">
              All levels of players are welcome! However, your level of
              experience determines
            </p>
            <p className="text-[20px]">
              which team you will join for your <strong>first season:</strong>
            </p>
            {/* 
            relative: 设置当前div为相对定位 为后面的before伪元素提供定位参考点 absolute定位的伪元素是相对于这个div定位
            pl-x: 设置间距
            before部分
            before是一个伪元素 在html元素的内容前面添加额外的内容或样式
            只会生效在有content定义的情况下
            before:content-[''] 创建伪元素 内容为空字符串 不显示文字 只显示样式
            before:absolute 绝对定位 相对父容器
            before:top-x before:left-x 控制位置
            before:w-x before:h-x 控制宽高
            before:bg-black 颜色
            before:rounded-full 相当于通过radius设置成圆形
            */}
            {/* 加粗也可以用strong b 或者包起来添加css */}
            <div
              className="relative pl-16 before:content-[''] before:absolute before:top-11 before:left-10 before:w-2 before:h-2 before:bg-black before:rounded-full
            flex flex-col items-start"
            >
              <p className="mt-[35px] text-[20px]">
                <strong>Know the rules and played before?</strong> Great, let us
                know which competition
              </p>
              <p className="text-[20px]">
                region and division you have previously played in and we will
                match you
              </p>
              <p className="text-[20px]">with a suitable team.</p>
            </div>
            <div
              className="relative pl-14 before:content-[''] before:absolute before:top-4 before:left-9 before:w-2 before:h-2 before:bg-black before:rounded-full
            flex flex-col items-start"
            >
              {/* 在react中需要转义 ' 成html实体 或者用模版字符串 存储在变量中 然后插入jsx */}
              <p className="mt-[5px] text-[20px]">
                <strong>New to the sport?</strong> No worries! We run
                specialised training programs to
              </p>
              <p className="text-[20px]">
                get newcomers up to speed with the rules and skills of the game.
                We&apos;ll get
              </p>
              <p className="text-[20px]">
                you ready for your first season in a competitive environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Exercise3 };
