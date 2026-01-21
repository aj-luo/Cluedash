import style from './Hard.module.css';
import Platform from '../Platform/Platform';

function Hard() {
    return (
        <div className={style.approot}>
            <Platform type='hard'/>
        </div>
    )
}

export default Hard;