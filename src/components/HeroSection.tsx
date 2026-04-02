import heroBgMain from '../assets/figma/hero-bg-main.png'
import heroBgTop from '../assets/figma/hero-bg-top.png'
import homePanelGlow from '../assets/figma/home-panel-glow.png'
import topScanIcon from '../assets/figma/top-scan.svg'
import topCodeIcon from '../assets/figma/top-code.svg'
import topDragonIcon from '../assets/figma/top-dragon.png'
import topMessageIcon from '../assets/figma/top-message.svg'

export function HeroSection() {
  return (
    <section className="relative h-[40.6875rem] overflow-hidden">
      <img src={heroBgMain} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <img src={heroBgTop} alt="" className="absolute left-0 top-0 w-full" />

      <div className="absolute left-6 top-[1.625rem] h-[2rem] w-[20.4375rem] text-white">
        <button className="absolute left-0 top-0 h-[2rem] w-[1.875rem]" aria-label="扫一扫">
          <img src={topScanIcon} alt="" className="mx-auto h-[1.125rem] w-[1.125rem]" />
          <span className="mt-[0.1875rem] block text-center text-[0.625rem] leading-[1.1]">扫一扫</span>
        </button>
        <button className="absolute left-[2.625rem] top-0 h-[2rem] w-[1.875rem]" aria-label="兴业码">
          <img src={topCodeIcon} alt="" className="mx-auto h-[1.125rem] w-[1.125rem]" />
          <span className="mt-[0.1875rem] block text-center text-[0.625rem] leading-[1.1]">兴业码</span>
        </button>
        <div className="absolute left-[5.25rem] top-0 h-[2rem] w-[10.5625rem] rounded-[1.125rem] bg-white/35">
          <span aria-hidden="true" className="absolute left-3 top-[0.4375rem] block h-[1.125rem] w-[1.125rem]">
            <svg viewBox="0 0 18 18" className="h-full w-full" fill="none">
              <circle cx="8.1" cy="8.1" r="5.4" stroke="white" strokeWidth="1.08" />
              <path d="M12.465 12.465L15.3 15.3" stroke="white" strokeWidth="1.08" strokeLinecap="round" />
            </svg>
          </span>
          <span className="absolute left-[2.25rem] top-[0.5rem] text-[0.75rem] leading-none text-center">请输入搜索关键词</span>
        </div>
        <button className="absolute left-[16.5625rem] top-0 h-[2rem] w-[1.875rem]" aria-label="兴福龙">
          <img src={topDragonIcon} alt="" className="mx-auto h-[1.125rem] w-[1.1875rem] object-contain" />
          <span className="mt-[0.1875rem] block text-center text-[0.625rem] leading-[1.1]">兴福龙</span>
        </button>
        <button className="absolute left-[19.1875rem] top-0 h-[2rem] w-[1.25rem]" aria-label="消息">
          <img src={topMessageIcon} alt="" className="mx-auto h-[1.125rem] w-[1.125rem]" />
          <span className="mt-[0.1875rem] block text-center text-[0.625rem] leading-[1.1]">消息</span>
        </button>
      </div>

      <div className="absolute left-[0.375rem] top-[24.375rem] h-[11.375rem] w-[22.6875rem] overflow-hidden rounded-t-[0.75rem]">
        <div className="absolute inset-0 bg-linear-to-b from-[#2470ea] to-transparent opacity-90" />
        <img
          src={homePanelGlow}
          alt=""
          className="absolute -left-[0.0625rem] -top-[0.0625rem] h-[13.75rem] w-[22.75rem] max-w-none object-cover"
        />
      </div>
    </section>
  )
}
