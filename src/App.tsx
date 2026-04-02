import { useState } from 'react'
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
import insuranceProduct1 from './assets/figma/图层 822_副本.png'
import insuranceProduct2 from './assets/figma/图层 825_副本.png'
import beijingBanner from './assets/figma/图层 754.png'
import iconAccount from './assets/figma/beijin1.png'
import iconPension from './assets/figma/beijing2.png'
import iconPayroll from './assets/figma/beijing3.png'
import rightArrow from './assets/figma/right.svg'
import payment1 from './assets/figma/payment1.png'
import paymentPhone from './assets/figma/payment-phone.svg'
import paymentElectricity from './assets/figma/payment-electricity.svg'
import paymentBlueElectricity from './assets/figma/payment-blue-electricity.svg'
import tabSelectedBg from './assets/figma/tab-selected-bg.svg'
import yanglao1 from './assets/figma/yanglao1.png'
import yanglao1Icon from './assets/figma/yanglao1.svg'
import yanglao2 from './assets/figma/yanglao2.svg'
import yanglao3 from './assets/figma/yanglao3.svg'
import tese1 from './assets/figma/tese1.png'
import chengzhang1 from './assets/figma/chengzhang1.png'
import chengzhangIcon1 from './assets/figma/chengzhang-icon1.svg'
import chengzhangIcon2 from './assets/figma/chengzhang-icon2.svg'
import chengzhangIcon3 from './assets/figma/chengzhang-icon3.svg'
import xinyong11 from './assets/figma/xinyong11.png'
import xinyong1 from './assets/figma/xinyong1.png'
import xinyong2 from './assets/figma/xinyong2.png'
import xinyongIcon1 from './assets/figma/xinyong-icon1.svg'
import xinyongIcon2 from './assets/figma/xinyong-icon2.svg'
import xinyongIcon3 from './assets/figma/xinyong-icon3.svg'
import payment4 from './assets/figma/payment4.svg'

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
  { label: '外汇买卖', icon: serviceForexSell, fullSvg: getLocalServiceFullSvg('Frame 48095404备份 4 (1).svg') },
]

function App() {
  const [activeTab, setActiveTab] = useState<'活钱管理' | '稳健投资' | '收益进阶' | '保险保障'>('活钱管理')
  const [activeServiceTab, setActiveServiceTab] = useState<'养老金融' | '生活缴费' | '推荐好礼' | '兴成长'>('养老金融')

  const wealthProducts = {
    '活钱管理': [
      { title: '零钱理财 无需择时', subtitle: '代销', rate: '1.474', rateLabel: '七日年化', risk: '安逸形R1', riskType: 'R1', riskInfo: '每日可赎 ｜1元起购', product: '兴业聚华混合A' },
      { title: '资金流动 自如随心', subtitle: '代销', rate: '1.091', rateLabel: '七日年化', risk: '安逸形R1', riskType: 'R1', riskInfo: '每日可赎 ｜0.01元起购｜夜市理财', product: '兴业添利天天利35号L' },
    ],
    '稳健投资': [
      { title: '丰利逸动1年最短持有1A', subtitle: '代销', rate: '3.310', rateLabel: '成立以来年化', risk: '谨慎型R2', riskType: 'R2', riskInfo: '1元起购 | 微量含权', product: '持有365天后每日可赎' },
      { title: '丰利悦动1年持有期3号A', subtitle: '代销', rate: '4.433', rateLabel: '成立以来年化', risk: '谨慎型R2', riskType: 'R2', riskInfo: '1元起购 | 微量含权', product: '持有365天后每日可赎' },
    ],
    '收益进阶': [],
    '保险保障': [
      { title: '人保寿险瑞恒一生终身寿险', tag: '人身保险', tagType: 'R1', age: '28天 ～ 65周岁', company: '中国人民人寿保险股份有限公司', amount: '50', amountUnit: '万起', amountLabel: '保额', image: insuranceProduct1 },
      { title: '人保寿险迎春福两全保险', tag: '人身保险', tagType: 'R1', age: '28天 ～ 65周岁', company: '中国人民人寿保险股份有限公司', amount: '10', amountUnit: '万起', amountLabel: '起购金额', image: insuranceProduct2 },
    ],
  }

  const products = wealthProducts[activeTab] || []

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

      <section className="mx-3 mt-4 rounded-[0.75rem] bg-white p-3">
        <div className="flex gap-3 overflow-hidden">
          <article className="relative h-32 w-[9.1875rem] overflow-hidden rounded-[0.5rem] bg-white">
            <img src={bannerMain} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute left-3 top-3">
              <p className="text-[0.75rem] font-semibold text-[#232a49]">惊喜"兴"上线</p>
              <p className="text-[0.625rem] text-[#888]">积点兑飞行好礼</p>
            </div>
            <button className="absolute left-3 top-14 inline-flex items-center gap-1 rounded-[0.6875rem] bg-black/20 px-2 py-1 text-[0.625rem] text-white">
              查看
              <svg viewBox="0 0 9 12" className="h-3 w-2" fill="none">
                <path d="M3 3L6 6L3 9" stroke="white" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </button>
          </article>
          <article className="relative h-32 w-[5.625rem] overflow-hidden rounded-[0.5rem]">
            <img src={bannerLottery} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute left-2 top-3">
              <p className="text-[0.75rem] font-semibold text-[#232a49]">欢乐抽奖</p>
              <p className="text-[0.625rem] text-[#888]">2积点抽奖</p>
            </div>
          </article>
          <article className="relative h-32 w-[5.625rem] overflow-hidden rounded-[0.5rem]">
            <img src={bannerPayroll} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute left-2 top-3">
              <p className="text-[0.75rem] font-semibold text-[#232a49]">兴业通代发</p>
              <p className="text-[0.625rem] text-[#888]">薪酬福利好管家</p>
            </div>
          </article>
        </div>
        <div className="mt-2 flex justify-center gap-1">
          <span className="h-[0.1875rem] w-[1.5rem] rounded-full bg-[#0068ff]" />
          <span className="h-[0.1875rem] w-[0.75rem] rounded-full bg-[#d9d9d9]" />
        </div>
      </section>

      <section className="mx-3 mt-4 rounded-[0.75rem] border-[0.5px] border-white p-3" style={{ backgroundImage: 'linear-gradient(139.57deg, #FBEbdd 0%, #FFFAF6 35.28%, #FFF9F3 76.26%, #FEF2E7 100%)' }}>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-[1.25rem] font-semibold text-[#232a49]">精选理财</h2>
              <button className="flex items-center  text-xs text-[#888]" aria-label="更多">
                <svg viewBox="0 0 18 18" className="h-[0.875rem] w-[0.875rem] mr-1" fill="none">
                  <path d="M5.15726 6.18343C5.3963 4.38905 7.03686 3 9.02456 3C11.0029 3 12.6372 4.37554 12.8887 6.15796C12.3327 7.19001 11.165 7.93416 9.02456 7.93416C6.90175 7.93416 5.72628 7.20248 5.15726 6.18343Z" fill="#FFDB60"/>
                  <path d="M9.06095 14.9516L8.98093 14.9521C8.87544 14.9521 8.76631 14.947 8.65354 14.9366C7.73842 14.8836 6.26155 14.6819 5.0045 14.1462C1.27335 12.5555 -0.4727 7.57248 2.51689 6.72284C5.60626 6.1959 5.01229 8.28597 9.06095 8.31299C13.1029 8.28597 12.5104 6.1959 15.5946 6.72284C18.5806 7.57248 16.8366 12.5555 13.1107 14.1462C11.7055 14.7464 10.0244 14.9267 9.16437 14.9496C9.1564 14.9505 9.14844 14.9513 9.14046 14.9521L9.06095 14.9516Z" fill="#FFDB60"/>
                </svg>
                更多
                <img src={rightArrow} alt="" className="h-[0.6rem] w-[0.8rem]" />
              </button>
            </div>

        <div className="mb-3 flex gap-[0.75rem]">
          <button
            onClick={() => setActiveTab('活钱管理')}
            className={`h-[1.5rem] w-[4.5rem] shrink-0 rounded-[0.25rem] flex items-center justify-center gap-1 text-xs ${activeTab === '活钱管理' ? 'bg-[#f8dcb8] font-semibold text-[#64391f]' : 'border-[0.5px] border-[#887769] bg-white text-[#887769]'}`}
          >
            活钱管理
            {activeTab === '活钱管理' && (
              <svg viewBox="0 0 10 14" className="h-2 w-[0.125rem]" fill="none">
                <path d="M3 3L6 7L3 11" stroke="#64391f" strokeWidth="1" strokeLinecap="round" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setActiveTab('稳健投资')}
            className={`h-[1.5rem] w-[4.5rem] shrink-0 rounded-[0.25rem] flex items-center justify-center gap-1 text-xs ${activeTab === '稳健投资' ? 'bg-[#f8dcb8] font-semibold text-[#64391f]' : 'border-[0.5px] border-[#887769] bg-white text-[#887769]'}`}
          >
            稳健投资
            {activeTab === '稳健投资' && (
              <svg viewBox="0 0 10 14" className="h-2 w-[0.125rem]" fill="none">
                <path d="M3 3L6 7L3 11" stroke="#64391f" strokeWidth="1" strokeLinecap="round" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setActiveTab('收益进阶')}
            className={`h-[1.5rem] w-[4.5rem] shrink-0 rounded-[0.25rem] flex items-center justify-center gap-1 text-xs ${activeTab === '收益进阶' ? 'bg-[#f8dcb8] font-semibold text-[#64391f]' : 'border-[0.5px] border-[#887769] bg-white text-[#887769]'}`}
          >
            收益进阶
            {activeTab === '收益进阶' && (
              <svg viewBox="0 0 10 14" className="h-2 w-[0.125rem]" fill="none">
                <path d="M3 3L6 7L3 11" stroke="#64391f" strokeWidth="1" strokeLinecap="round" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setActiveTab('保险保障')}
            className={`h-[1.5rem] w-[4.5rem] shrink-0 rounded-[0.25rem] flex items-center justify-center gap-1 text-xs ${activeTab === '保险保障' ? 'bg-[#f8dcb8] font-semibold text-[#64391f]' : 'border-[0.5px] border-[#887769] bg-white text-[#887769]'}`}
          >
            保险保障
            {activeTab === '保险保障' && (
              <svg viewBox="0 0 10 14" className="h-2 w-[0.125rem]" fill="none">
                <path d="M3 3L6 7L3 11" stroke="#64391f" strokeWidth="1" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        <div className="space-y-3">
          {products.map((product, index) => (
            <article key={index} className="relative rounded-[0.5rem] bg-white p-3">
              {'tag' in product && 'age' in product ? (
                <>
                  <div className="flex items-center gap-2">
                    <p className="text-[0.875rem] font-semibold text-[#bc7f42] whitespace-nowrap">{product.title}</p>
                    <span className="rounded bg-[#87b0f3] px-1.5 py-0.5 text-[0.625rem] text-white">{product.tag}</span>
                  </div>
                  <div className="my-2 h-px w-full bg-[rgba(188,127,66,0.2)]" />
                  <div className="flex items-start gap-3">
                    <img src={product.image} alt="" className="h-[3.75rem] w-[3.9375rem] shrink-0 rounded-[0.5rem] object-cover" />
                    <div className="whitespace-nowrap">
                      <p className="text-[0.625rem] text-[#232a49]">{product.age}</p>
                      <p className="text-[0.625rem] text-[#232a49]">{product.company}</p>
                      <p className="mt-1 text-[1.25rem] font-semibold leading-none text-[#e10000]">{product.amount}<span className="text-[0.75rem]">{product.amountUnit}</span><span className="text-[0.625rem] text-[#888]"> {product.amountLabel}</span></p>
                    </div>
                  </div>
                  <button className="absolute right-3 top-3" aria-label="收藏">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.5996 6.825L11.8183 5.875L9.43706 1.62344C9.348 1.46563 9.18237 1.36719 9.00113 1.36719C8.81988 1.36719 8.65269 1.46563 8.56519 1.62344L6.18394 5.87656L1.40269 6.82656C1.22456 6.8625 1.08081 6.99062 1.02456 7.1625C0.968313 7.33437 1.0105 7.52344 1.13238 7.65625L4.44175 11.2344L3.86831 16.075C3.84644 16.2547 3.92456 16.4312 4.07144 16.5391C4.15894 16.6016 4.26206 16.6344 4.36519 16.6344C4.43706 16.6344 4.50738 16.6188 4.57456 16.5891L9.2105 14.4516C9.4605 14.3359 9.57144 14.0391 9.45581 13.7875C9.34019 13.5375 9.04331 13.4266 8.79175 13.5422L4.96831 15.3047L5.46363 11.1219C5.48081 10.9766 5.43394 10.8313 5.33394 10.7234L2.47456 7.63125L6.60581 6.8125C6.74956 6.78438 6.873 6.69375 6.94488 6.56563L9.00113 2.89062L11.0574 6.56563C11.1293 6.69375 11.2527 6.78281 11.3964 6.8125L15.5402 7.63594L13.7324 9.64375C13.548 9.84844 13.5636 10.1656 13.7699 10.35C13.9746 10.5344 14.2918 10.5188 14.4761 10.3125L16.873 7.65C16.9933 7.51719 17.0324 7.32969 16.9761 7.15781C16.9199 6.9875 16.7761 6.86094 16.5996 6.825ZM13.7824 13.5312V12.0312C13.7824 11.7563 13.5574 11.5312 13.2824 11.5312C13.0074 11.5312 12.7824 11.7563 12.7824 12.0312V13.5312H11.2824C11.0074 13.5312 10.7824 13.7563 10.7824 14.0312C10.7824 14.3062 11.0074 14.5312 11.2824 14.5312H12.7824V16.0312C12.7824 16.3062 13.0074 16.5312 13.2824 16.5312C13.5574 16.5312 13.7824 16.3062 13.7824 16.0312V14.5312H15.2824C15.5574 14.5312 15.7824 14.3062 15.7824 14.0312C15.7824 13.7563 15.5574 13.5312 15.2824 13.5312H13.7824Z" fill="#757575"/>
                    </svg>
                  </button>
                </>
              ) : (
                <>
                  <button className="absolute right-3 top-3" aria-label="收藏">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.5996 6.825L11.8183 5.875L9.43706 1.62344C9.348 1.46563 9.18237 1.36719 9.00113 1.36719C8.81988 1.36719 8.65269 1.46563 8.56519 1.62344L6.18394 5.87656L1.40269 6.82656C1.22456 6.8625 1.08081 6.99062 1.02456 7.1625C0.968313 7.33437 1.0105 7.52344 1.13238 7.65625L4.44175 11.2344L3.86831 16.075C3.84644 16.2547 3.92456 16.4312 4.07144 16.5391C4.15894 16.6016 4.26206 16.6344 4.36519 16.6344C4.43706 16.6344 4.50738 16.6188 4.57456 16.5891L9.2105 14.4516C9.4605 14.3359 9.57144 14.0391 9.45581 13.7875C9.34019 13.5375 9.04331 13.4266 8.79175 13.5422L4.96831 15.3047L5.46363 11.1219C5.48081 10.9766 5.43394 10.8313 5.33394 10.7234L2.47456 7.63125L6.60581 6.8125C6.74956 6.78438 6.873 6.69375 6.94488 6.56563L9.00113 2.89062L11.0574 6.56563C11.1293 6.69375 11.2527 6.78281 11.3964 6.8125L15.5402 7.63594L13.7324 9.64375C13.548 9.84844 13.5636 10.1656 13.7699 10.35C13.9746 10.5344 14.2918 10.5188 14.4761 10.3125L16.873 7.65C16.9933 7.51719 17.0324 7.32969 16.9761 7.15781C16.9199 6.9875 16.7761 6.86094 16.5996 6.825ZM13.7824 13.5312V12.0312C13.7824 11.7563 13.5574 11.5312 13.2824 11.5312C13.0074 11.5312 12.7824 11.7563 12.7824 12.0312V13.5312H11.2824C11.0074 13.5312 10.7824 13.7563 10.7824 14.0312C10.7824 14.3062 11.0074 14.5312 11.2824 14.5312H12.7824V16.0312C12.7824 16.3062 13.0074 16.5312 13.2824 16.5312C13.5574 16.5312 13.7824 16.3062 13.7824 16.0312V14.5312H15.2824C15.5574 14.5312 15.7824 14.3062 15.7824 14.0312C15.7824 13.7563 15.5574 13.5312 15.2824 13.5312H13.7824Z" fill="#757575"/>
                    </svg>
                  </button>
                  <div className="flex items-center gap-2">
                    <p className="text-[0.875rem] font-semibold text-[#bc7f42]">{product.title}</p>
                    <span className="rounded border border-[#bc7f42] px-1.5 py-0.5 text-[0.625rem] text-[#bc7f42]">{product.subtitle}</span>
                  </div>
                  <div className="my-2 h-px w-full bg-[rgba(188,127,66,0.2)]" />
                  <div className="flex items-start gap-[1.875rem]">
                    <div className="whitespace-nowrap">
                      <p className="text-[1.25rem] font-semibold leading-none text-[#e10000]">{product.rate}<span className="text-[0.75rem]">%</span></p>
                      <p className="mt-1 text-[0.625rem] text-[#888]">{product.rateLabel}</p>
                    </div>
                    <div>
                      <p className="text-[0.875rem] font-semibold text-[#232a49] whitespace-nowrap">{product.product}</p>
                      <div className="mt-1 flex items-center gap-1">
                        <span className={`rounded px-1.5 py-0.5 text-[0.625rem] text-white ${product.riskType === 'R1' ? 'bg-[#87b0f3]' : 'bg-[#73bede]'}`}>{product.risk}</span>
                        <p className="text-[0.625rem] text-[#888] whitespace-nowrap">{product.riskInfo}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>

        <div className="relative mt-3 rounded-full bg-linear-to-r from-[#6da7ff] to-[#70adf9] px-4 py-2 text-sm text-white">
          <img src={wealthDragon} alt="" className="absolute -left-1 -top-3 h-14 w-14 object-contain" />
          <p className="pl-14">理财产品那么多，那种才适合我？</p>
        </div>
      </section>

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
            <button className="relative h-[2.875rem] w-full overflow-hidden rounded-[0.5rem] bg-[#d6eaff] text-sm font-semibold text-[#232a49] flex items-center" aria-label="开户服务">
              <img src={iconAccount} alt="" className="absolute right-[-0.875rem] w-[2.5rem] h-[2.5rem] object-contain" />
              <span className="pl-4">开户服务</span>
            </button>
            <button className="relative h-[2.875rem] w-full overflow-hidden rounded-[0.5rem] bg-linear-to-b from-[#fbf3ea] to-[#ffead6] text-sm font-semibold text-[#232a49] flex items-center" aria-label="个人养老金">
              <img src={iconPension} alt="" className="absolute right-[-0.875rem] w-[2.5rem] h-[2.5rem] object-contain" />
              <span className="pl-4">个人养老金</span>
            </button>
            <button className="relative h-[2.875rem] w-full overflow-hidden rounded-[0.5rem] bg-linear-to-b from-[#fbe9e2] to-[#ffdfd6] text-sm font-semibold text-[#232a49] flex items-center" aria-label="代发专区">
              <img src={iconPayroll} alt="" className="absolute right-[-0.875rem] w-[2.5rem] h-[2.5rem] object-contain" />
              <span className="pl-4">代发专区</span>
            </button>
          </div>
        </div>
      </section>

      <section className="mx-3 mt-4 rounded-[0.75rem] bg-white p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-[1.25rem] font-semibold text-[#232a49]">特色服务</h2>
          <button className="text-xs text-[#888]" aria-label="更多">身边服务 贴心随行</button>
        </div>
        <div className="relative h-[15rem] overflow-hidden rounded-[0.5rem]">
          <img src={payment1} alt="" className="absolute bottom-0 left-0 w-[348px] h-[496px]" />
          <div className="absolute inset-0 bg-linear-to-t from-[#59473d]/60 to-transparent" />
          
          {activeServiceTab === '养老金融' && (
            <div className="absolute inset-0">
              <img src={yanglao1} alt="" className="absolute top-0 left-0 w-[418px] h-[313px]" />
              <div className="absolute left-3 top-4">
                <p className="text-[1rem] font-semibold text-white">养老金融</p>
                <p className="text-[0.75rem] text-white">提前规划 未来无忧</p>
              </div>
              <div className="absolute bottom-8 left-3 right-[7.5rem] flex justify-between">
                <div className="w-[3rem] h-[3rem] bg-[rgba(255,255,255,0.85)] rounded-[0.5rem] flex flex-col items-center justify-center">
                  <img src={yanglao1Icon} alt="" className="w-[1.5rem] h-[1.5rem]" />
                  <span className="text-[0.5rem] text-[#111]">个人养老金</span>
                </div>
                <div className="w-[3rem] h-[3rem] bg-[rgba(255,255,255,0.85)] rounded-[0.5rem] flex flex-col items-center justify-center">
                  <img src={yanglao2} alt="" className="w-[1.5rem] h-[1.5rem]" />
                  <span className="text-[0.5rem] text-[#111]">养老特色产品</span>
                </div>
                <div className="w-[3rem] h-[3rem] bg-[rgba(255,255,255,0.85)] rounded-[0.5rem] flex flex-col items-center justify-center">
                  <img src={yanglao3} alt="" className="w-[1.5rem] h-[1.5rem]" />
                  <span className="text-[0.5rem] text-[#111]">安愉老友权益</span>
                </div>
              </div>
            </div>
          )}
          
          {activeServiceTab === '生活缴费' && (
            <>
              <div className="absolute left-3 top-4">
                <p className="text-[1rem] font-semibold text-white">生活缴费</p>
                <p className="text-[0.75rem] text-white">生活服务 一键直达</p>
              </div>
              <div className="absolute bottom-8 left-3 flex gap-3">
                <button className="flex flex-col items-center justify-center w-[50px] h-[48px] bg-white rounded-[8px]" aria-label="充话费">
                  <img src={paymentPhone} alt="" className="h-[1.5rem] w-[1.5rem]" />
                  <span className="text-[0.5rem] text-[#111]">充话费</span>
                </button>
                <button className="flex flex-col items-center justify-center w-[50px] h-[48px] bg-white rounded-[8px]" aria-label="充电费">
                  <img src={paymentElectricity} alt="" className="h-[1.5rem] w-[1.5rem]" />
                  <span className=" text-[0.5rem] text-[#111]">充电费</span>
                </button>
                <button className="flex flex-col items-center justify-center w-[50px] h-[48px] bg-white rounded-[8px]" aria-label="充水费">
                  <img src={paymentBlueElectricity} alt="" className="h-[1.5rem] w-[1.5rem]" />
                  <span className="text-[0.5rem] text-[#111]">充水费</span>
                </button>
              </div>
            </>
          )}
          
          {activeServiceTab === '推荐好礼' && (
            <div className="absolute inset-0">
              <img src={tese1} alt="" className="absolute bottom-0 left-0 w-[348px] h-[264px]" />
              <div className="absolute left-3 top-4">
                <p className="text-[1rem] font-semibold text-white">推荐好礼</p>
                <p className="text-[0.75rem] text-white">参加活动 福利相伴</p>
              </div>
            </div>
          )}
          
          {activeServiceTab === '兴成长' && (
            <div className="absolute inset-0">
              <img src={chengzhang1} alt="" className="absolute top-0 left-0 w-[348px] h-[327px]" />
              <div className="absolute left-3 top-4">
                <p className="text-[1rem] font-semibold text-white">兴成长</p>
                <p className="text-[0.75rem] text-white">知识课堂 财富进阶</p>
              </div>
              <div className="absolute bottom-8 left-3 right-[7.5rem] flex justify-between">
                <div className="w-[3rem] h-[3rem] bg-[rgba(255,255,255,0.85)] rounded-[0.5rem] flex flex-col items-center justify-center">
                  <img src={chengzhangIcon1} alt="" className="w-[1.5rem] h-[1.5rem]" />
                  <span className="text-[0.5rem] text-[#111]">做任务领积点</span>
                </div>
                <div className="w-[3rem] h-[3rem] bg-[rgba(255,255,255,0.85)] rounded-[0.5rem] flex flex-col items-center justify-center">
                  <img src={chengzhangIcon2} alt="" className="w-[1.5rem] h-[1.5rem]" />
                  <span className="text-[0.5rem] text-[#111]">热⻔活动</span>
                </div>
                <div className="w-[3rem] h-[3rem] bg-[rgba(255,255,255,0.85)] rounded-[0.5rem] flex flex-col items-center justify-center">
                  <img src={chengzhangIcon3} alt="" className="w-[1.5rem] h-[1.5rem]" />
                  <span className="text-[0.5rem] text-[#111]">兴动优惠</span>
                </div>
              </div>
            </div>
          )}
          
          <div className="absolute right-0 top-0 h-full w-[105px] rounded-tr-[0.5rem] rounded-br-[0.5rem] bg-[rgba(255,255,255,0.5)] backdrop-blur-sm">
            <div className="flex flex-col items-center h-full py-3">
              <button 
                onClick={() => setActiveServiceTab('养老金融')}
                className="relative w-[6.4375rem] h-[2.5625rem] text-[0.75rem]"
              >
                <img src={tabSelectedBg} alt="" className={`absolute inset-0 w-full h-full object-contain ${activeServiceTab === '养老金融' ? 'opacity-100' : 'opacity-0'}`} />
                <span className={`relative z-10 ${activeServiceTab === '养老金融' ? 'font-semibold' : ''} text-[#232a49]`}>养老金融</span>
              </button>
              <button 
                onClick={() => setActiveServiceTab('生活缴费')}
                className="relative w-[6.4375rem] h-[2.5625rem] text-[0.75rem]"
              >
                <img src={tabSelectedBg} alt="" className={`absolute inset-0 w-full h-full object-contain ${activeServiceTab === '生活缴费' ? 'opacity-100' : 'opacity-0'}`} />
                <span className={`relative z-10 ${activeServiceTab === '生活缴费' ? 'font-semibold' : ''} text-[#232a49]`}>生活缴费</span>
              </button>
              <button 
                onClick={() => setActiveServiceTab('推荐好礼')}
                className="relative w-[6.4375rem] h-[2.5625rem] text-[0.75rem]"
              >
                <img src={tabSelectedBg} alt="" className={`absolute inset-0 w-full h-full object-contain ${activeServiceTab === '推荐好礼' ? 'opacity-100' : 'opacity-0'}`} />
                <span className={`relative z-10 ${activeServiceTab === '推荐好礼' ? 'font-semibold' : ''} text-[#232a49]`}>推荐好礼</span>
              </button>
              <button 
                onClick={() => setActiveServiceTab('兴成长')}
                className="relative w-[6.4375rem] h-[2.5625rem] text-[0.75rem]"
              >
                <img src={tabSelectedBg} alt="" className={`absolute inset-0 w-full h-full object-contain ${activeServiceTab === '兴成长' ? 'opacity-100' : 'opacity-0'}`} />
                <span className={`relative z-10 ${activeServiceTab === '兴成长' ? 'font-semibold' : ''} text-[#232a49]`}>兴成长</span>
              </button>
            </div>
            <button className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[4rem] h-[1.125rem] rounded-[0.6875rem] border-[0.5px] border-[#232a49] px-2 py-0.5 text-[0.625rem] text-[#232a49] flex items-center justify-center gap-1">
              更多服务
              <svg className="h-[0.375rem] w-[0.1875rem] -rotate-0" viewBox="0 0 3 6" fill="none">
                <path d="M0 0L3 3L0 6" stroke="#232a49" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="mx-3 mt-4 rounded-[0.75rem] bg-white p-4">
        <h2 className="mb-3 text-[1.25rem] font-semibold text-[#232a49]">信用卡</h2>
        <div className="relative rounded-[0.5rem] bg-white overflow-hidden">
          <img src={xinyong11} alt="" className="w-full h-[15.1875rem]" />
          <div className="absolute left-[5.875rem] top-4">
            <p className="text-[0.875rem] text-[#232a49]">美国运通百夫长白金卡</p>
          </div>
          <div className="absolute left-[4.5625rem] top-[4.5rem] flex gap-2">
            <img src={xinyong1} alt="" className="w-[8.9305rem] h-[5.625rem]" />
            <img src={xinyong2} alt="" className="w-[8.9305rem] h-[5.625rem]" />
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex justify-between">
            <div className="flex flex-col items-center">
              <div className="w-[3rem] h-[3rem] bg-[#e7d2b2]/35 rounded-[0.5rem] flex items-center justify-center">
                <img src={xinyongIcon1} alt="" className="w-[1.25rem] h-[1.25rem]" />
              </div>
              <span className="mt-1 text-[0.625rem] text-[#232a49] text-center">每月首笔取现<br/>免手续费</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[3rem] h-[3rem] bg-[#e7d2b2]/35 rounded-[0.5rem] flex items-center justify-center">
                <img src={xinyongIcon2} alt="" className="w-[1.25rem] h-[1.25rem]" />
              </div>
              <span className="mt-1 text-[0.625rem] text-[#232a49] text-center">200万<br/>航空意外保险</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[3rem] h-[3rem] bg-[#e7d2b2]/35 rounded-[0.5rem] flex items-center justify-center">
                <img src={xinyongIcon3} alt="" className="w-[1.25rem] h-[1.25rem]" />
              </div>
              <span className="mt-1 text-[0.625rem] text-[#232a49] text-center">高端精密镭射<br/>烫印工艺</span>
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-center gap-1">
          <div className="h-[0.1875rem] w-[1.5rem] rounded-[6.1875rem] bg-[#0068ff]" />
          <div className="h-[0.1875rem] w-[0.75rem] rounded-[6.1875rem] bg-[#d9d9d9]" />
        </div>
      </section>

      <section className="mx-3 mt-4 rounded-[0.75rem] border-[0.5px] border-white bg-white p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-[1.25rem] font-semibold text-[#232a49]">热门讨论</h2>
            <svg viewBox="0 0 18 18" className="h-[1.125rem] w-[1.125rem]" fill="none" aria-label="PK">
              <rect x="3" y="3" width="12" height="12" rx="2" fill="#1a61d5" opacity="0.1" />
              <text x="9" y="12" textAnchor="middle" fontSize="10" fill="#1a61d5">PK</text>
            </svg>
          </div>
          <button className="text-xs text-[#888]" aria-label="更多">更多话题 邀您参与</button>
        </div>
        
        <div className="mb-2 h-[3.125rem] rounded-t-[0.75rem] bg-gradient-to-b from-[#e8f0fe] to-white relative overflow-hidden">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#f0f4ff] to-transparent" />
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded border border-[#1a61d5] bg-[rgba(26,97,213,0.13)] px-2 py-0.5 text-[0.625rem] text-[#1a61d5]">话题PK</span>
          <p className="text-[0.875rem] font-semibold text-[#232a49]">攒养老金，"保本"重要还是"增值"重要？</p>
        </div>
        <p className="mt-1 text-[0.75rem] text-[#888]">12022人正在讨论</p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <button className="rounded-full bg-[#3b86ef] py-2 text-sm text-white" aria-label="保本">保本</button>
          <button className="rounded-full bg-[#f0b35a] py-2 text-sm text-white" aria-label="增值">增值</button>
        </div>
      </section>

      <section className="mx-3 mt-4 rounded-[0.75rem] bg-white p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-[1.25rem] font-semibold text-[#232a49]">资讯追踪</h2>
          <button className="text-xs text-[#888]" aria-label="更多">洞见趋势 投资有招</button>
        </div>
        
        {/* 实时热点卡片 */}
        <div className="mb-3 rounded-[0.5rem] bg-[#fef9f4]">
          <div className="flex items-center justify-between rounded-t-[0.5rem] bg-[#fcefe3] px-3 py-2">
            <div className="flex items-center gap-1.5">
              <h3 className="text-[0.875rem] font-semibold text-[#be7733]">实时热点</h3>
              <svg viewBox="0 0 9 12" className="h-3 w-2" fill="none">
                <path d="M3 3L6 6L3 9" stroke="#be7733" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </div>
            <button className="h-[2.5rem] w-[2.75rem] rounded-[0.5rem] bg-[#fcefe3] text-[0.625rem] font-medium text-[#be7733]">热点</button>
          </div>
          <div className="px-3 py-2.5">
            <div className="flex items-center gap-2 py-2">
              <svg viewBox="0 0 18 18" className="h-[1.125rem] w-[1.125rem] shrink-0" fill="none">
                <path d="M9 3c-3 4-5 6-5 9a5 5 0 0010 0c0-3-2-5-5-9z" fill="#f57c00" />
              </svg>
              <p className="text-[0.75rem] text-[#232a49] truncate">贵州茅台连续上涨，市值冲两万亿元！春节...</p>
            </div>
            <div className="flex items-center gap-2 py-2">
              <svg viewBox="0 0 18 18" className="h-[1.125rem] w-[1.125rem] shrink-0" fill="none">
                <path d="M9 3c-3 4-5 6-5 9a5 5 0 0010 0c0-3-2-5-5-9z" fill="#f57c00" />
              </svg>
              <p className="text-[0.75rem] text-[#232a49] truncate">国际金融市场早知道：2月1日</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-[8.125rem_11.5625rem] gap-3">
          <article className="relative h-[10.5625rem] overflow-hidden rounded-[0.5rem] bg-gradient-to-b from-[#4a7cc9] to-[#2c5aa0]">
            <div className="absolute left-1.5 top-1.5 rounded-[0.6875rem] bg-[rgba(33,64,116,0.4)] px-2 py-0.5 text-[0.625rem] text-white">直播中</div>
            <div className="absolute bottom-0 left-0 right-0 rounded-b-[0.5rem] bg-white/20 p-2 backdrop-blur-[13.591px]">
              <p className="text-[0.75rem] text-[#232a49]">预见2026年投资</p>
              <p className="text-[0.625rem] text-[#888]">总行财富管理</p>
            </div>
          </article>
          <article className="relative h-[10.5625rem] overflow-hidden rounded-[0.5rem] bg-gradient-to-b from-[#6b8cce] to-[#4a6fa5]">
            <div className="absolute left-1.5 top-1.5 rounded-[0.6875rem] bg-[#3b86ef] px-2 py-0.5 text-[0.625rem] text-white">机构说</div>
            <div className="absolute bottom-0 left-0 right-0 rounded-b-[0.5rem] bg-white/20 p-2 backdrop-blur-[13.591px]">
              <p className="text-[0.75rem] text-[#232a49]">兴业理财开业六周年</p>
              <p className="text-[0.625rem] text-[#888]">打造价值型银行理财</p>
            </div>
          </article>
        </div>
      </section>

      
      <div className="flex justify-center mt-4 mb-2">
        <button className="h-[2.125rem] w-[7.5rem] rounded-[1.0625rem] bg-[#3b86ef] text-[0.75rem] font-medium text-white">
          定制专属首页
        </button>
      </div>
      <div className="flex justify-center mb-4">
        <div className="h-[1.5rem] w-[7.25rem] flex items-center justify-center">
          <span className="text-[0.875rem] font-semibold text-[#3b86ef]">兴业银行</span>
        </div>
      </div>

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
    </main>
  )
}

export default App
