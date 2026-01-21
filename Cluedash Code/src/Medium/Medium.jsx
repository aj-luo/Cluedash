import style from './Medium.module.css';
import Platform from '../Platform/Platform';

function Medium() {
    return (
        <div className={style.approot}>
            <Platform type='medium'/>
        </div>
    )
}

export default Medium;