import styles from './MediaBanner.module.css'
import ScrollingBanner from '../scrolling_banner/ScrollingBanner'
import { mediaList } from '../../data/mediaData'


const MediaBanner = () => {
  return (
    <div className={styles.media}>
        <span>FEATURED IN</span>
      <ScrollingBanner messages={mediaList}/>
    </div>
  )
}

export default MediaBanner
