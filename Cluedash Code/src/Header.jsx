import logo from './assets/favicon.png'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Header() {
    return(
        <header>
            <div>
                <div className='lottie-container'>
                <DotLottieReact
                    src="https://lottie.host/c289557c-be7a-47d3-bb7c-26e81e1d3ca6/pV2L8Bu4IK.lottie"
                    loop
                    autoplay
                />
                </div>
            </div>

            <p>Choose your difficulty</p>

        </header>
    );
}

export default Header