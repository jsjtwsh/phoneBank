import { HeroSection } from './components/HeroSection'
import { QuickActions } from './components/QuickActions'
import { BalanceCard } from './components/BalanceCard'
import { ServiceGrid } from './components/ServiceGrid'
import { BannerCarousel } from './components/BannerCarousel'
import { WealthProducts } from './components/WealthProducts'
import { BeijingSection } from './components/BeijingSection'
import { FeatureService } from './components/FeatureService'
import { CreditCard } from './components/CreditCard'
import { HotDiscussion } from './components/HotDiscussion'
import { NewsTracker } from './components/NewsTracker'
import { CustomPage } from './components/CustomPage'
import { BottomNav } from './components/BottomNav'

function App() {
  return (
    <main className="mx-auto w-full max-w-[23.4375rem] bg-[#f4f6fb] pb-[5.625rem]">
      <HeroSection />
      <QuickActions />
      <BalanceCard />
      <ServiceGrid />
      <BannerCarousel />
      <WealthProducts />
      <BeijingSection />
      <FeatureService />
      <CreditCard />
      <HotDiscussion />
      <NewsTracker />
      <CustomPage />
      <BottomNav />
    </main>
  )
}

export default App
