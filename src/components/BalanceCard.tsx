import balanceModuleArt3755 from '../assets/figma/balance-module-art-3755.png'
import eyeOutline3755 from '../assets/figma/eye-outline-3755.svg'
import eyeDot3755 from '../assets/figma/eye-dot-3755.svg'

export function BalanceCard() {
  return (
    <div className="absolute left-[0.75rem] top-[35.75rem] h-[4.9375rem] w-[21.9375rem] overflow-hidden rounded-[0.5rem] shadow-[0_0.375rem_3rem_rgba(70,149,198,0.1)]">
      <div className="absolute inset-0 rounded-[0.5rem] bg-[#f1f7ff]" />
      <div className="absolute inset-0 rounded-[0.5rem] bg-linear-to-b from-[#bfe0ff] to-[rgba(255,255,255,0)]" />
      <img
        src={balanceModuleArt3755}
        alt=""
        className="absolute -top-[6.888rem] left-[9.5625rem] h-[11.256rem] w-[14.9375rem] max-w-none object-cover"
      />
      <div className="absolute inset-0 rounded-[0.5rem] border border-white" />

      <p className="absolute left-[1.5rem] top-[1.125rem] text-[0.875rem] leading-none font-medium text-[#111]">账户余额</p>
      <span className="absolute left-[5.5625rem] top-[1.16875rem] block h-[1.125rem] w-[1.125rem]">
        <img src={eyeOutline3755} alt="" className="absolute inset-0 h-full w-full" />
        <img src={eyeDot3755} alt="" className="absolute left-1/2 top-1/2 h-[0.375rem] w-[0.375rem] -translate-x-1/2 -translate-y-1/2" />
        <span className="absolute left-[0.1875rem] top-0 h-[1.125rem] w-px rotate-30 bg-[#9199bd]" />
      </span>
      <p className="absolute left-[1.5rem] top-[2.75rem] text-[0.75rem] font-semibold leading-none text-[#9199bd]">********</p>
      <button
        className="absolute left-[14.8125rem] top-[1.5rem] inline-flex h-[1.875rem] w-[5.625rem] items-center justify-center rounded-[0.9375rem] bg-[#3b86ef] text-[0.75rem] leading-none text-white"
        aria-label="登录查看"
      >
        登录查看
      </button>
    </div>
  )
}
