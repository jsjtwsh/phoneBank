import beijingBanner from '../assets/figma/图层 754.png'
import iconAccount from '../assets/figma/beijin1.png'
import iconPension from '../assets/figma/beijing2.png'
import iconPayroll from '../assets/figma/beijing3.png'
import rightArrow from '../assets/figma/right.svg'

const beijingItems = [
  { label: '开户服务', icon: iconAccount, bgClass: 'bg-[#d6eaff]' },
  { label: '个人养老金', icon: iconPension, bgClass: 'bg-linear-to-b from-[#fbf3ea] to-[#ffead6]' },
  { label: '代发专区', icon: iconPayroll, bgClass: 'bg-linear-to-b from-[#fbe9e2] to-[#ffdfd6]' },
]

export function BeijingSection() {
  return (
    <section className="mx-3 mt-4 rounded-[0.75rem] bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[1.25rem] font-semibold text-[#232a49]">北京专区</h2>
        <button className="text-xs text-[#888] flex items-center" aria-label="更多">
          本地服务 快速触达
          <img src={rightArrow} alt="" className="h-[0.6rem] w-[0.8rem]" />
        </button>
      </div>
      <div className="grid grid-cols-[11.875rem_7.8125rem] gap-3">
        <div className="relative h-[10.125rem] overflow-hidden rounded-[0.5rem] bg-[#f7f7f7]">
          <img src={beijingBanner} alt="" className="absolute inset-0 h-full w-full object-cover" />
          
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            <span className="h-[0.1875rem] w-[1.5rem] rounded-full bg-[#0068ff]" />
            <span className="h-[0.1875rem] w-[0.75rem] rounded-full bg-[#d9d9d9]" />
          </div>
        </div>
        <div className="space-y-3">
          {beijingItems.map((item) => (
            <button
              key={item.label}
              className={`relative h-[2.875rem] w-full overflow-hidden rounded-[0.5rem] text-sm font-semibold text-[#232a49] flex items-center ${item.bgClass}`}
              aria-label={item.label}
            >
              <img src={item.icon} alt="" className="absolute right-[-0.875rem] w-[2.5rem] h-[2.5rem] object-contain" />
              <span className="pl-4">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
