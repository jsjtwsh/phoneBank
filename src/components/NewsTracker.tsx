export function NewsTracker() {
  return (
    <section className="mx-3 mt-4 rounded-[0.75rem] bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[1.25rem] font-semibold text-[#232a49]">资讯追踪</h2>
        <button className="text-xs text-[#888]" aria-label="更多">洞见趋势 投资有招</button>
      </div>
      
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
  )
}
