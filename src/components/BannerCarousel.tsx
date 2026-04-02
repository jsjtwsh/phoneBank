import bannerMain from '../assets/figma/banner-card-main.png'
import bannerLottery from '../assets/figma/banner-card-lottery.png'
import bannerPayroll from '../assets/figma/banner-card-payroll.png'

interface Banner {
  image: string
  title: string
  subtitle: string
}

const banners: Banner[] = [
  { image: bannerMain, title: '惊喜"兴"上线', subtitle: '积点兑飞行好礼' },
  { image: bannerLottery, title: '欢乐抽奖', subtitle: '2积点抽奖' },
  { image: bannerPayroll, title: '兴业通代发', subtitle: '薪酬福利好管家' },
]

export function BannerCarousel() {
  return (
    <section className="mx-3 mt-4 rounded-[0.75rem] bg-white p-3">
      <div className="flex gap-3 overflow-hidden">
        {banners.map((banner, index) => (
          <article
            key={index}
            className="relative h-32 w-[9.1875rem] overflow-hidden rounded-[0.5rem] bg-white"
          >
            <img src={banner.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute left-3 top-3">
              <p className="text-[0.75rem] font-semibold text-[#232a49]">{banner.title}</p>
              <p className="text-[0.625rem] text-[#888]">{banner.subtitle}</p>
            </div>
            {index === 0 && (
              <button className="absolute left-3 top-14 inline-flex items-center gap-1 rounded-[0.6875rem] bg-black/20 px-2 py-1 text-[0.625rem] text-white">
                查看
                <svg viewBox="0 0 9 12" className="h-3 w-2" fill="none">
                  <path d="M3 3L6 6L3 9" stroke="white" strokeWidth="1" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </article>
        ))}
      </div>
      <div className="mt-2 flex justify-center gap-1">
        <span className="h-[0.1875rem] w-[1.5rem] rounded-full bg-[#0068ff]" />
        <span className="h-[0.1875rem] w-[0.75rem] rounded-full bg-[#d9d9d9]" />
        <span className="h-[0.1875rem] w-[0.75rem] rounded-full bg-[#d9d9d9]" />
      </div>
    </section>
  )
}
