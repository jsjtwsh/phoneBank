import { useState } from 'react'
import payment1 from '../assets/figma/payment1.png'
import tabSelectedBg from '../assets/figma/tab-selected-bg.svg'
import yanglao1 from '../assets/figma/yanglao1.png'
import yanglao1Icon from '../assets/figma/yanglao1.svg'
import yanglao2 from '../assets/figma/yanglao2.svg'
import yanglao3 from '../assets/figma/yanglao3.svg'
import paymentPhone from '../assets/figma/payment-phone.svg'
import paymentElectricity from '../assets/figma/payment-electricity.svg'
import paymentBlueElectricity from '../assets/figma/payment-blue-electricity.svg'
import tese1 from '../assets/figma/tese1.png'
import chengzhang1 from '../assets/figma/chengzhang1.png'
import chengzhangIcon1 from '../assets/figma/chengzhang-icon1.svg'
import chengzhangIcon2 from '../assets/figma/chengzhang-icon2.svg'
import chengzhangIcon3 from '../assets/figma/chengzhang-icon3.svg'

type ServiceTab = '养老金融' | '生活缴费' | '推荐好礼' | '兴成长'

const serviceTabs: ServiceTab[] = ['养老金融', '生活缴费', '推荐好礼', '兴成长']

export function FeatureService() {
  const [activeServiceTab, setActiveServiceTab] = useState<ServiceTab>('养老金融')

  return (
    <section className="mx-3 mt-4 rounded-[0.75rem] bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[1.25rem] font-semibold text-[#232a49]">特色服务</h2>
        <button className="text-xs text-[#888]" aria-label="更多">身边服务 贴心随行</button>
      </div>
      <div className="relative h-[15rem] overflow-hidden rounded-[0.5rem]">
        <img src={payment1} alt="" className="absolute bottom-0 left-0 w-[21.75rem] h-[31rem]" />
        <div className="absolute inset-0 bg-linear-to-t from-[#59473d]/60 to-transparent" />
        
        {activeServiceTab === '养老金融' && (
          <div className="absolute inset-0">
            <img src={yanglao1} alt="" className="absolute bottom-0 left-0 w-[26.125rem] h-[19.5625rem]" />
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
              <button className="flex flex-col items-center justify-center w-[3.125rem] h-[3rem] bg-white rounded-[0.5rem]" aria-label="充话费">
                <img src={paymentPhone} alt="" className="h-[1.5rem] w-[1.5rem]" />
                <span className="text-[0.5rem] text-[#111]">充话费</span>
              </button>
              <button className="flex flex-col items-center justify-center w-[3.125rem] h-[3rem] bg-white rounded-[0.5rem]" aria-label="充电费">
                <img src={paymentElectricity} alt="" className="h-[1.5rem] w-[1.5rem]" />
                <span className=" text-[0.5rem] text-[#111]">充电费</span>
              </button>
              <button className="flex flex-col items-center justify-center w-[3.125rem] h-[3rem] bg-white rounded-[0.5rem]" aria-label="充水费">
                <img src={paymentBlueElectricity} alt="" className="h-[1.5rem] w-[1.5rem]" />
                <span className="text-[0.5rem] text-[#111]">充水费</span>
              </button>
            </div>
          </>
        )}
        
        {activeServiceTab === '推荐好礼' && (
          <div className="absolute inset-0">
            <img src={tese1} alt="" className="absolute bottom-0 left-0 w-[21.75rem] h-[16.5rem]" />
            <div className="absolute left-3 top-4">
              <p className="text-[1rem] font-semibold text-white">推荐好礼</p>
              <p className="text-[0.75rem] text-white">参加活动 福利相伴</p>
            </div>
          </div>
        )}
        
        {activeServiceTab === '兴成长' && (
          <div className="absolute inset-0">
            <img src={chengzhang1} alt="" className="absolute top-0 left-0 w-[21.75rem] h-[20.4375rem]" />
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
        
        <div className="absolute right-0 top-0 h-full w-[6.5625rem] rounded-tr-[0.5rem] rounded-br-[0.5rem] bg-[rgba(255,255,255,0.5)] backdrop-blur-sm">
          <div className="flex flex-col items-center h-full py-3">
            {serviceTabs.map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveServiceTab(tab)}
                className="relative w-[6.4375rem] h-[2.5625rem] text-[0.75rem]"
              >
                <img src={tabSelectedBg} alt="" className={`absolute inset-0 w-full h-full object-contain ${activeServiceTab === tab ? 'opacity-100' : 'opacity-0'}`} />
                <span className={`relative z-10 ${activeServiceTab === tab ? 'font-semibold' : ''} text-[#232a49]`}>{tab}</span>
              </button>
            ))}
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
  )
}
