import heroBgMain from './assets/figma/hero-bg-main.png'
import heroBgTop from './assets/figma/hero-bg-top.png'
import homePanelGlow from './assets/figma/home-panel-glow.png'
import balanceModuleArt3755 from './assets/figma/balance-module-art-3755.png'
import bannerMain from './assets/figma/banner-card-main.png'
import bannerLottery from './assets/figma/banner-card-lottery.png'
import bannerPayroll from './assets/figma/banner-card-payroll.png'
import wealthDragon from './assets/figma/wealth-dragon.png'
import eyeOutline3755 from './assets/figma/eye-outline-3755.svg'
import eyeDot3755 from './assets/figma/eye-dot-3755.svg'
import tabHomeRing from './assets/figma/tab-home-ring.png'
import tabHomeMark from './assets/figma/tab-home-mark.png'
import tabWealthCircle from './assets/figma/tab-wealth-circle.png'
import tabCircleCircle from './assets/figma/tab-circle-circle.png'
import tabUserCircle from './assets/figma/tab-user-circle.png'
import topScanIcon from './assets/figma/top-scan.svg'
import topCodeIcon from './assets/figma/top-code.svg'
import topDragonIcon from './assets/figma/top-dragon.png'
import topMessageIcon from './assets/figma/top-message.svg'
import homeQuickWealth from './assets/figma/home-quick-wealth.png'
import homeQuickAccount from './assets/figma/home-quick-account.png'
import homeQuickTransfer from './assets/figma/home-quick-transfer.png'
import homeQuickCredit from './assets/figma/home-quick-credit.png'
import dragonAssistant from './assets/figma/dragon-assistant.png'
import assistantBubbleBg from './assets/figma/assistant-bubble-bg.svg'
import serviceDetail from './assets/figma/service-detail.svg'
import serviceCredit from './assets/figma/service-credit.svg'
import serviceFinance from './assets/figma/service-finance.svg'
import serviceGold from './assets/figma/service-gold.svg'
import serviceForexBuy from './assets/figma/service-forex-buy.svg'
import serviceLife from './assets/figma/service-life.svg'
import serviceGrow from './assets/figma/service-grow.svg'
import serviceLoan from './assets/figma/service-loan.svg'
import serviceDayday from './assets/figma/service-dayday.svg'
import serviceForexSell from './assets/figma/service-forex-sell.svg'

const localServiceSvgModules = import.meta.glob('./assets/figma/*.svg', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const getLocalServiceFullSvg = (fileName: string) => localServiceSvgModules[`./assets/figma/${fileName}`]

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
  { label: '外汇买卖', icon: serviceForexSell, fullSvg: getLocalServiceFullSvg('Frame 48095404备份 4.svg') },
]

function App() {
  return (
    <main className="mx-auto w-full max-w-[23.4375rem] bg-[#f4f6fb] pb-[5.625rem]">
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
            <span className="absolute left-[2.25rem] top-[0.5rem] text-[0.75rem] leading-none">请输入搜索关键词</span>
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
            <div className="absolute left-[1.875rem] top-[0.6875rem] h-[0.875rem] w-[1.875rem] rounded-[0.25rem] bg-[#4392ea]">
              <span className="absolute left-1/2 top-[0.03125rem] -translate-x-1/2 text-center text-[0.625rem] font-medium leading-none text-white">
                通知
              </span>
            </div>
            <p className="absolute left-[4.125rem] top-[0.625rem] text-[0.75rem] leading-none text-white">您的优惠券已到账</p>
            <span className="absolute left-[10.5rem] top-[0.8125rem] block h-[0.75rem] w-[0.5625rem]">
              <svg viewBox="0 0 9 12" className="h-full w-full" fill="none" aria-hidden="true">
                <path d="M3 3L6 6L3 9" stroke="#888888" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>

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
      </section>

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

      <section className="mx-3 mt-4 rounded-[0.75rem] border border-white bg-linear-to-br from-[#fff9f3] to-[#fef2e7] p-3">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-[1.25rem] font-semibold text-[#232a49]">精选理财</h2>
          <button className="text-xs text-[#888]" aria-label="更多">更多</button>
        </div>
        <div className="space-y-3">
          <article className="rounded-[0.5rem] bg-white p-3">
            <p className="text-sm font-semibold text-[#bc7f42]">零钱理财 无需择时</p>
            <div className="mt-2 flex items-end justify-between">
              <div>
                <p className="text-[2rem] font-semibold leading-none text-[#e10000]">1.474<span className="text-base">%</span></p>
                <p className="mt-1 text-[0.625rem] text-[#888]">七日年化</p>
              </div>
              <p className="text-xl text-[#232a49]">兴业聚华混合A</p>
            </div>
          </article>
          <article className="rounded-[0.5rem] bg-white p-3">
            <p className="text-sm font-semibold text-[#bc7f42]">资金流动 自如随心</p>
            <div className="mt-2 flex items-end justify-between">
              <div>
                <p className="text-[2rem] font-semibold leading-none text-[#e10000]">1.091<span className="text-base">%</span></p>
                <p className="mt-1 text-[0.625rem] text-[#888]">七日年化</p>
              </div>
              <p className="text-xl text-[#232a49]">兴业添利天天利35号L</p>
            </div>
          </article>
        </div>
        <div className="relative mt-3 overflow-hidden rounded-full bg-linear-to-r from-[#6da7ff] to-[#70adf9] px-4 py-2 text-sm text-white">
          <img src={wealthDragon} alt="" className="absolute -left-1 -top-3 h-14 w-14 object-contain" />
          <p className="pl-14">理财产品那么多，那种才适合我？</p>
        </div>
      </section>

      <section className="mx-3 mt-4 rounded-[0.75rem] bg-white p-3">
        <div className="flex gap-3 overflow-hidden">
          <article className="relative h-32 w-[9.1875rem] overflow-hidden rounded-[0.5rem] bg-white">
            <img src={bannerMain} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute left-3 top-3">
              <p className="text-sm font-semibold text-[#232a49]">惊喜“兴”上线</p>
              <p className="text-[0.625rem] text-[#888]">积点兑飞行好礼</p>
            </div>
          </article>
          <article className="relative h-32 w-[5.625rem] overflow-hidden rounded-[0.5rem]">
            <img src={bannerLottery} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </article>
          <article className="relative h-32 w-[5.625rem] overflow-hidden rounded-[0.5rem]">
            <img src={bannerPayroll} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </article>
        </div>
      </section>

      <section className="mx-3 mt-4 rounded-[0.75rem] bg-white p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-[1.25rem] font-semibold text-[#232a49]">北京专区</h2>
          <button className="text-xs text-[#888]" aria-label="更多">更多</button>
        </div>
        <div className="grid grid-cols-[11.875rem_7.8125rem] gap-3">
          <div className="h-[10.125rem] rounded-[0.5rem] bg-[#d9ecff]" />
          <div className="space-y-3">
            <button className="h-[2.875rem] w-full rounded-[0.5rem] bg-[#f5f8ff] text-sm text-[#232a49]" aria-label="开户服务">开户服务</button>
            <button className="h-[2.875rem] w-full rounded-[0.5rem] bg-[#f5f8ff] text-sm text-[#232a49]" aria-label="个人养老金">个人养老金</button>
            <button className="h-[2.875rem] w-full rounded-[0.5rem] bg-[#f5f8ff] text-sm text-[#232a49]" aria-label="代发专区">代发专区</button>
          </div>
        </div>
      </section>

      <section className="mx-3 mt-4 rounded-[0.75rem] bg-white p-4">
        <h2 className="text-[1.25rem] font-semibold text-[#232a49]">热门讨论</h2>
        <p className="mt-2 text-sm text-[#232a49]">攒养老金，“保本”重要还是“增值”重要？</p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <button className="rounded-full bg-[#3b86ef] py-2 text-sm text-white" aria-label="保本">保本</button>
          <button className="rounded-full bg-[#f0b35a] py-2 text-sm text-white" aria-label="增值">增值</button>
        </div>
      </section>

      <section className="mx-3 mt-4 rounded-[0.75rem] bg-white p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-[1.25rem] font-semibold text-[#232a49]">资讯追踪</h2>
          <button className="text-xs text-[#888]" aria-label="更多">更多</button>
        </div>
        <div className="grid grid-cols-[8.125rem_1fr] gap-3">
          <article className="rounded-[0.5rem] bg-[#eef3ff] p-2">
            <p className="text-xs text-[#f05a2d]">直播中</p>
            <p className="mt-2 text-xs text-[#232a49]">预见2026年投资</p>
          </article>
          <article className="rounded-[0.5rem] bg-[#eef3ff] p-2">
            <p className="text-xs text-[#3b86ef]">机构说</p>
            <p className="mt-2 text-xs text-[#232a49]">兴业理财开业六周年 打造价值型银行理财</p>
          </article>
        </div>
      </section>

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
          <img src={tabCircleCircle} alt="" className="h-[1.125rem] w-[1.125rem]" />
          <span className="mt-1 text-[0.625rem] text-[#6b6e7e]">生活</span>
        </button>
        <button className="flex flex-col items-center" aria-label="我的">
          <img src={tabUserCircle} alt="" className="h-[1.125rem] w-[1.125rem]" />
          <span className="mt-1 text-[0.625rem] text-[#6b6e7e]">我的</span>
        </button>
      </nav>
    </main>
  )
}

export default App
