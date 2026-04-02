import xinyong11 from '../assets/figma/xinyong11.png'
import xinyong1 from '../assets/figma/xinyong1.png'
import xinyong2 from '../assets/figma/xinyong2.png'
import xinyongIcon1 from '../assets/figma/xinyong-icon1.svg'
import xinyongIcon2 from '../assets/figma/xinyong-icon2.svg'
import xinyongIcon3 from '../assets/figma/xinyong-icon3.svg'

const cardFeatures = [
  { icon: xinyongIcon1, label: '每月首笔取现\n免手续费' },
  { icon: xinyongIcon2, label: '200万\n航空意外保险' },
  { icon: xinyongIcon3, label: '高端精密镭射\n烫印工艺' },
]

export function CreditCard() {
  return (
    <section className="mx-3 mt-4 rounded-[0.75rem] bg-white p-4">
      <h2 className="mb-3 text-[1.25rem] font-semibold text-[#232a49]">信用卡</h2>
      <div className="relative rounded-[0.5rem] bg-white overflow-hidden">
        <img src={xinyong11} alt="" className="w-full h-[15.1875rem]" />
        <div className="absolute left-[5.875rem] top-4">
          <p className="text-[0.875rem] text-[#232a49]">美国运通百夫长白金卡</p>
        </div>
        <div className="absolute left-[4.5625rem] top-[3rem] flex gap-2">
          <img src={xinyong1} alt="" className="w-[11.25rem] h-[7.125rem] mr-[3rem]" />
          <img src={xinyong2} alt="" className="w-[1.5625rem] h-[5.625rem]" />
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex justify-between">
          {cardFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-[1.5rem] h-[1.5rem] bg-[#e7d2b2]/35 rounded-[0.5rem] flex items-center justify-center">
                <img src={feature.icon} alt="" className="w-[1.25rem] h-[1.25rem]" />
              </div>
              <span className="mt-1 text-[0.625rem] text-[#232a49] text-center whitespace-pre-line">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 flex justify-center gap-1">
        <div className="h-[0.1875rem] w-[1.5rem] rounded-[6.1875rem] bg-[#0068ff]" />
        <div className="h-[0.1875rem] w-[0.75rem] rounded-[6.1875rem] bg-[#d9d9d9]" />
      </div>
    </section>
  )
}
