import { assets } from '../../assets/assets';
import './AppDownload.css'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better User Experience download <span>Chekko Chicken Food App</span></p>
            <div className='app-download-platforms'>
                <img src={assets.play_store} alt=''/>
                <img src={assets.app_store}/>
            </div>
        </div>
    );
};

export default AppDownload;