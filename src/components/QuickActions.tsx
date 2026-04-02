import homeQuickWealth from '../assets/figma/home-quick-wealth.png'
import homeQuickAccount from '../assets/figma/home-quick-account.png'
import homeQuickTransfer from '../assets/figma/home-quick-transfer.png'
import homeQuickCredit from '../assets/figma/home-quick-credit.png'
import dragonAssistant from '../assets/figma/dragon-assistant.png'
import assistantBubbleBg from '../assets/figma/assistant-bubble-bg.svg'

export function QuickActions() {
  return (
    <>
      <div className="absolute left-[2.6875rem] top-[25.875rem] h-[4.75rem] w-[18rem]">
        <div className="absolute left-0 top-0 h-[4.75rem] w-[3.5rem]">
          <img src={homeQuickWealth} alt="" className="mx-auto h-[3rem] w-[3rem]" />
          <p className="mt-[0.5rem] text-center text-[0.875rem] leading-none text-white">财富总览</p>
        </div>
        <div className="absolute left-[5rem] top-0 h-[4.75rem] w-[3.5rem]">
          <img src={homeQuickAccount} alt="" className="mx-auto h-[3rem] w-[3rem]" />
          <p className="mt-[0.5rem] text-center text-[0.875rem] leading-none text-white">账户查询</p>
        </div>
        <div className="absolute left-[10rem] top-0 h-[4.75rem] w-[3.5rem]">
          <img src={homeQuickTransfer} alt="" className="mx-auto h-[3rem] w-[3rem]" />
          <p className="mt-[0.5rem] text-center text-[0.875rem] leading-none text-white">转账汇款</p>
        </div>
        <div className="absolute left-[15rem] top-0 h-[4.75rem] w-[3rem]">
          <img src={homeQuickCredit} alt="" className="mx-auto h-[3rem] w-[3rem]" />
          <p className="mt-[0.5rem] text-center text-[0.875rem] leading-none text-white">信用卡</p>
        </div>
      </div>

      <div className="absolute left-[0.75rem] top-[31.75rem] h-[4rem] w-[21.9375rem]">
        <div className="absolute left-0 top-0 h-[4rem] w-[4.75rem] overflow-hidden rounded-[0.5rem]">
          <img src={dragonAssistant} alt="" className="h-[5.625rem] w-[4rem] object-cover object-top" />
        </div>
        <div className="absolute left-[5.1875rem] top-[1rem] h-[2.25rem] w-[16.75rem] overflow-hidden rounded-[0.5rem]">
          <img src={assistantBubbleBg} alt="" className="absolute inset-0 h-full w-full rotate-180 object-cover" />
          <div className="absolute left-[1.875rem] top-[0.625rem] h-[1.125rem] w-[1.875rem] rounded-[0.25rem] bg-[#4392ea] flex items-center justify-center">
            <span className="text-[0.625rem] font-medium text-white whitespace-nowrap">
              通知
            </span>
          </div>
          <p className="mt-[0.2rem] absolute left-[4.125rem] top-[0.625rem] text-[0.75rem] leading-none text-white">您的优惠券已到账</p>
          <span className="absolute left-[10.5rem] top-[0.625rem] block h-[0.75rem] w-[0.5625rem]">
            <svg viewBox="0 0 9 12" className="h-full w-full" fill="none" aria-hidden="true">
              <path d="M3 3L6 6L3 9" stroke="#888888" strokeLinecap="round" />
            </svg>
          </span>
        </div>
      </div>
    </>
  )
}
