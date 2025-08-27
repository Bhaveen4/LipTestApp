import PlumpingKits from '../../components/plumping_kits/PlumpingKits'
import FeatureBanner from '../../components/feature_banner/FeatureBanner'
import Features from '../../components/features/features'
import Hero from '../../components/hero/Hero'
import MediaBanner from '../../components/media_banner/MediaBanner'
import styles from './LandingPage.module.css'
import BestPlump from '../../components/best_plump/BestPlump'
import Footer from '../../components/footer/Footer'



const LandingPage = () => {
  return (
    <div className={styles.container}>

      <Hero />
      <Features />
      <FeatureBanner />
      <BestPlump />
      <MediaBanner />
      <PlumpingKits />
      <Footer />
    </div>
  )
}

export default LandingPage
