import serviceDetail from '../assets/figma/service-detail.svg'
import serviceCredit from '../assets/figma/service-credit.svg'
import serviceFinance from '../assets/figma/service-finance.svg'
import serviceGold from '../assets/figma/service-gold.svg'
import serviceForexBuy from '../assets/figma/service-forex-buy.svg'
import serviceLife from '../assets/figma/service-life.svg'
import serviceGrow from '../assets/figma/service-grow.svg'
import serviceLoan from '../assets/figma/service-loan.svg'
import serviceDayday from '../assets/figma/service-dayday.svg'
import serviceForexSell from '../assets/figma/service-forex-sell.svg'

const localServiceSvgModules = import.meta.glob('../assets/figma/*.svg', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const getLocalServiceFullSvg = (fileName: string) => localServiceSvgModules[`../assets/figma/${fileName}`]

const serviceItems = [
  { label: '交易明细', icon: serviceDetail, fullSvg: getLocalServiceFullSvg('detail.svg') },
  { label: '信用卡', icon: serviceCredit, fullSvg: getLocalServiceFullSvg('Frame 48095404备份.svg') },
  { label: '理财产品', icon: serviceFinance, fullSvg: getLocalServiceFullSvg('Frame 48095404备份 2.svg') },
  { label: '黄金', icon: serviceGold, badge: '积存金', fullSvg: getLocalServiceFullSvg('Frame 48095404备份 3.svg') },
  { label: '外汇购汇', icon: serviceForexBuy, fullSvg: getLocalServiceFullSvg('Frame 48095404备份 4.svg') },
  { label: '生活缴费', icon: serviceLife, fullSvg: getLocalServiceFullSvg('Frame 48095404.svg') },
  { label: '兴成长', icon: serviceGrow, fullSvg: getLocalServiceFullSvg('Frame 48095404备份 (1).svg') },
  { label: '我要贷款', icon: serviceLoan, fullSvg: getLocalServiceFullSvg('Frame 48095404备份 2 (1).svg') },
  { label: '天天宝', icon: serviceDayday, fullSvg: getLocalServiceFullSvg('Frame 48095404备份 3 (1).svg') },
  { label: '外汇买卖', icon: serviceForexSell, fullSvg: getLocalServiceFullSvg('Frame 48095404备份 4 (1).svg') },
]

export function ServiceGrid() {
  return (
    <section className="relative mx-3 mt-[1.125rem] h-[11.6875rem] rounded-[0.75rem] bg-white shadow-[0_0_0_1px_rgba(255,255,255,1)]">
      <div className="absolute left-[1.25rem] top-[1.5rem] h-[3.3125rem] w-[19.5rem]">
        {serviceItems.slice(0, 5).map((item, index) => (
          <button
            key={item.label}
            className={`absolute top-0 ${index === 0 ? 'left-0 w-[3rem]' : ''}${index === 1 ? 'left-[4.125rem] w-[3rem]' : ''}${index === 2 ? 'left-[8.25rem] w-[3rem]' : ''}${index === 3 ? 'left-[12.375rem] w-[3.125rem]' : ''}${index === 4 ? 'left-[16.5rem] w-[3rem]' : ''}`}
            aria-label={item.label}
          >
            {item.fullSvg ? (
              <img src={item.fullSvg} alt="" className="mx-auto h-[3.3125rem] w-[3rem]" />
            ) : (
              <svg viewBox="0 0 48 53" className="mx-auto h-[3.3125rem] w-[3rem]" aria-hidden="true">
              <image href={item.icon} x="6" y="0" width="36" height="36" preserveAspectRatio="none" />
              {item.badge ? (
                <>
                  <rect x="23" y="2" width="27" height="12" rx="6.4" fill="#d1a966" stroke="#ffffff" strokeWidth="1" />
                  <text
                    x="36.5"
                    y="10"
                    textAnchor="middle"
                    fontSize="8"
                    fontWeight="500"
                    fill="#ffffff"
                    style={{ fontFamily: 'Source Han Sans CN, PingFang SC, sans-serif' }}
                  >
                    {item.badge}
                  </text>
                </>
              ) : null}
              <text
                x="24"
                y="47"
                textAnchor="middle"
                fontSize="12"
                fontWeight="600"
                fill="#232a49"
                style={{ fontFamily: 'PingFang SC, sans-serif' }}
              >
                {item.label}
              </text>
              </svg>
            )}
          </button>
        ))}
      </div>

      <div className="absolute left-[1.25rem] top-[6.3125rem] h-[3.3125rem] w-[19.5rem]">
        {serviceItems.slice(5).map((item, index) => (
          <button
            key={item.label}
            className={`absolute top-0 ${index === 0 ? 'left-0 w-[3rem]' : ''}${index === 1 ? 'left-[4.125rem] w-[3rem]' : ''}${index === 2 ? 'left-[8.25rem] w-[3rem]' : ''}${index === 3 ? 'left-[12.375rem] w-[3rem]' : ''}${index === 4 ? 'left-[16.5rem] w-[3rem]' : ''}`}
            aria-label={item.label}
          >
            {item.fullSvg ? (
              <img src={item.fullSvg} alt="" className="mx-auto h-[3.3125rem] w-[3rem]" />
            ) : (
              <svg viewBox="0 0 48 53" className="mx-auto h-[3.3125rem] w-[3rem]" aria-hidden="true">
                <image href={item.icon} x="6" y="0" width="36" height="36" preserveAspectRatio="none" />
                <text
                  x="24"
                  y="47"
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="600"
                  fill="#232a49"
                  style={{ fontFamily: 'PingFang SC, sans-serif' }}
                >
                  {item.label}
                </text>
              </svg>
            )}
          </button>
        ))}
      </div>

      <div className="absolute left-[9.6875rem] top-[11.125rem] flex h-[0.1875rem] w-[2.625rem] gap-[0.375rem]">
        <span className="h-full w-[1.5rem] rounded-[6.1875rem] bg-[#0068ff]" />
        <span className="h-full w-[0.75rem] rounded-[6.1875rem] bg-[#d9d9d9]" />
      </div>
    </section>
  )
}
