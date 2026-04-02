export function HotDiscussion() {
  return (
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
  )
}
