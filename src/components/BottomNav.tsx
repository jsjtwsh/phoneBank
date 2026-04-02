import tabHomeRing from '../assets/figma/tab-home-ring.png'
import tabHomeMark from '../assets/figma/tab-home-mark.png'
import tabWealthCircle from '../assets/figma/tab-wealth-circle.png'
import tabCircleCircle from '../assets/figma/tab-circle-circle.png'
import tabUserCircle from '../assets/figma/tab-user-circle.png'

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 z-20 flex h-[4.875rem] w-full max-w-[23.4375rem] -translate-x-1/2 items-start justify-around bg-white pt-[0.9375rem] shadow-[0_-0.25rem_0.25rem_rgba(235,235,235,0.25)]">
      <button className="flex flex-col items-center" aria-label="首页">
        <span className="relative h-[1.125rem] w-[1.125rem]">
          <img src={tabHomeRing} alt="" className="absolute inset-0 h-full w-full" />
          <img src={tabHomeMark} alt="" className="absolute inset-0 h-full w-full" />
        </span>
        <span className="mt-1 text-[0.625rem] text-[#307ae2]">首页</span>
      </button>
      <button className="flex flex-col items-center" aria-label="财富">
        <img src={tabWealthCircle} alt="" className="h-[1.125rem] w-[1.125rem]" />
        <span className="mt-1 text-[0.625rem] text-[#6b6e7e]">财富</span>
      </button>
      <button className="flex flex-col items-center" aria-label="圈子">
        <img src={tabCircleCircle} alt="" className="h-[1.125rem] w-[1.125rem]" />
        <span className="mt-1 text-[0.625rem] text-[#6b6e7e]">圈子</span>
      </button>
      <button className="flex flex-col items-center" aria-label="生活">
        <svg viewBox="0 0 18 18" className="h-[1.125rem] w-[1.125rem]" fill="#6b6e7e">
          <rect x="2" y="3" width="14" height="2" rx="1" />
          <rect x="2" y="7" width="14" height="2" rx="1" />
          <rect x="2" y="11" width="14" height="2" rx="1" />
          <rect x="2" y="15" width="14" height="2" rx="1" />
        </svg>
        <span className="mt-1 text-[0.625rem] text-[#6b6e7e]">生活</span>
      </button>
      <button className="flex flex-col items-center" aria-label="我的">
        <img src={tabUserCircle} alt="" className="h-[1.125rem] w-[1.125rem]" />
        <span className="mt-1 text-[0.625rem] text-[#6b6e7e]">我的</span>
      </button>
    </nav>
  )
}
