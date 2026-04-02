import { useState } from 'react'
import rightArrow from '../assets/figma/right.svg'
import wealthDragon from '../assets/figma/wealth-dragon.png'
import insuranceProduct1 from '../assets/figma/图层 822_副本.png'
import insuranceProduct2 from '../assets/figma/图层 825_副本.png'

type TabType = '活钱管理' | '稳健投资' | '收益进阶' | '保险保障'

interface WealthProduct {
  title: string
  subtitle?: string
  rate?: string
  rateLabel?: string
  risk?: string
  riskType?: string
  riskInfo?: string
  product?: string
  tag?: string
  tagType?: string
  age?: string
  company?: string
  amount?: string
  amountUnit?: string
  amountLabel?: string
  image?: string
}

const wealthProducts: Record<TabType, WealthProduct[]> = {
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

const tabs: TabType[] = ['活钱管理', '稳健投资', '收益进阶', '保险保障']

function FavoriteIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.5996 6.825L11.8183 5.875L9.43706 1.62344C9.348 1.46563 9.18237 1.36719 9.00113 1.36719C8.81988 1.36719 8.65269 1.46563 8.56519 1.62344L6.18394 5.87656L1.40269 6.82656C1.22456 6.8625 1.08081 6.99062 1.02456 7.1625C0.968313 7.33437 1.0105 7.52344 1.13238 7.65625L4.44175 11.2344L3.86831 16.075C3.84644 16.2547 3.92456 16.4312 4.07144 16.5391C4.15894 16.6016 4.26206 16.6344 4.36519 16.6344C4.43706 16.6344 4.50738 16.6188 4.57456 16.5891L9.2105 14.4516C9.4605 14.3359 9.57144 14.0391 9.45581 13.7875C9.34019 13.5375 9.04331 13.4266 8.79175 13.5422L4.96831 15.3047L5.46363 11.1219C5.48081 10.9766 5.43394 10.8313 5.33394 10.7234L2.47456 7.63125L6.60581 6.8125C6.74956 6.78438 6.873 6.69375 6.94488 6.56563L9.00113 2.89062L11.0574 6.56563C11.1293 6.69375 11.2527 6.78281 11.3964 6.8125L15.5402 7.63594L13.7324 9.64375C13.548 9.84844 13.5636 10.1656 13.7699 10.35C13.9746 10.5344 14.2918 10.5188 14.4761 10.3125L16.873 7.65C16.9933 7.51719 17.0324 7.32969 16.9761 7.15781C16.9199 6.9875 16.7761 6.86094 16.5996 6.825ZM13.7824 13.5312V12.0312C13.7824 11.7563 13.5574 11.5312 13.2824 11.5312C13.0074 11.5312 12.7824 11.7563 12.7824 12.0312V13.5312H11.2824C11.0074 13.5312 10.7824 13.7563 10.7824 14.0312C10.7824 14.3062 11.0074 14.5312 11.2824 14.5312H12.7824V16.0312C12.7824 16.3062 13.0074 16.5312 13.2824 16.5312C13.5574 16.5312 13.7824 16.3062 13.7824 16.0312V14.5312H15.2824C15.5574 14.5312 15.7824 14.3062 15.7824 14.0312C15.7824 13.7563 15.5574 13.5312 15.2824 13.5312H13.7824Z" fill="#757575"/>
    </svg>
  )
}

function ProductCard({ product }: { product: WealthProduct }) {
  const isInsurance = 'tag' in product && 'age' in product

  if (isInsurance) {
    return (
      <article className="relative rounded-[0.5rem] bg-white p-3">
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
          <FavoriteIcon />
        </button>
      </article>
    )
  }

  return (
    <article className="relative rounded-[0.5rem] bg-white p-3">
      <button className="absolute right-3 top-3" aria-label="收藏">
        <FavoriteIcon />
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
    </article>
  )
}

export function WealthProducts() {
  const [activeTab, setActiveTab] = useState<TabType>('活钱管理')
  const products = wealthProducts[activeTab] || []

  return (
    <section className="mx-3 mt-4 rounded-[0.75rem] border-[0.5px] border-white p-3" style={{ backgroundImage: 'linear-gradient(139.57deg, #FBEbdd 0%, #FFFAF6 35.28%, #FFF9F3 76.26%, #FEF2E7 100%)' }}>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[1.25rem] font-semibold text-[#232a49]">精选理财</h2>
        <button className="flex items-center text-xs text-[#888]" aria-label="更多">
          <svg viewBox="0 0 18 18" className="h-[0.875rem] w-[0.875rem] mr-1" fill="none">
            <path d="M5.15726 6.18343C5.3963 4.38905 7.03686 3 9.02456 3C11.0029 3 12.6372 4.37554 12.8887 6.15796C12.3327 7.19001 11.165 7.93416 9.02456 7.93416C6.90175 7.93416 5.72628 7.20248 5.15726 6.18343Z" fill="#FFDB60"/>
            <path d="M9.06095 14.9516L8.98093 14.9521C8.87544 14.9521 8.76631 14.947 8.65354 14.9366C7.73842 14.8836 6.26155 14.6819 5.0045 14.1462C1.27335 12.5555 -0.4727 7.57248 2.51689 6.72284C5.60626 6.1959 5.01229 8.28597 9.06095 8.31299C13.1029 8.28597 12.5104 6.1959 15.5946 6.72284C18.5806 7.57248 16.8366 12.5555 13.1107 14.1462C11.7055 14.7464 10.0244 14.9267 9.16437 14.9496C9.1564 14.9505 9.14844 14.9513 9.14046 14.9521L9.06095 14.9516Z" fill="#FFDB60"/>
          </svg>
          更多
          <img src={rightArrow} alt="" className="h-[0.6rem] w-[0.8rem]" />
        </button>
      </div>

      <div className="mb-3 flex gap-[0.75rem]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`h-[1.5rem] w-[4.5rem] shrink-0 rounded-[0.25rem] flex items-center justify-center gap-1 text-xs ${activeTab === tab ? 'bg-[#f8dcb8] font-semibold text-[#64391f]' : 'border-[0.5px] border-[#887769] bg-white text-[#887769]'}`}
          >
            {tab}
            {activeTab === tab && (
              <svg viewBox="0 0 10 14" className="h-2 w-[0.125rem]" fill="none">
                <path d="M3 3L6 7L3 11" stroke="#64391f" strokeWidth="1" strokeLinecap="round" />
              </svg>
            )}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className="relative mt-3 rounded-full bg-linear-to-r from-[#6da7ff] to-[#70adf9] px-4 py-2 text-sm text-white">
        <img src={wealthDragon} alt="" className="absolute -left-1 -top-3 h-14 w-14 object-contain" />
        <p className="pl-14">理财产品那么多，那种才适合我？</p>
      </div>
    </section>
  )
}
