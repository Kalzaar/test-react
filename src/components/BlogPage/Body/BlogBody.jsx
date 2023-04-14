import './BlogBodyS.scss';
import {
    TITLE_2,
    COLORS,
    RED,
    BLUE,
    PURPLE,
    GREEN,
    PINK,
    DAILYB,
    DAILY_BLOG,
    ORANGE,
    YELLOW,
    MAGENTA,
    SILVER,
    GOLD,
} from '../../../constants/langauge'



const BlogBody = () => {
    return (
        <div className='background'>
            <div>
                <div>
                    <div className='title'>
                        <h1>{DAILYB}</h1>
                    </div>
                    <div className='content'>
                        <p>{DAILY_BLOG}</p>
                        
                    </div>
                </div>
                <div>
                    <div className='title'>
                        <h1>{TITLE_2}</h1>
                    </div>
                    <div className='content'>
                        <div className='boxes'>
                            <div>
                                <div className='box red'></div>
                                <div>
                                    <a href='https://en.wikipedia.org/wiki/Red'>{RED}</a>
                                </div>
                            </div>
                            <div>
                                <div className='box blue'></div>
                                <div>
                                    <a href='https://en.wikipedia.org/wiki/Blue'>{BLUE}</a>
                                </div>
                            </div>
                            <div>
                                <div className='box magenta'></div>
                                <div>
                                    <a href="https://en.wikipedia.org/wiki/Purple">{PURPLE}</a>
                                </div>
                            </div>
                            <div>
                                <div className='box green'></div>
                                <div>
                                    <a href='https://en.wikipedia.org/wiki/Green'>{GREEN}</a>
                                </div>
                            </div>
                            <div>
                                <div className='box pink'></div>
                                <div>
                                    <a href='https://en.wikipedia.org/wiki/Pink'>{PINK}</a>
                                </div>
                            </div>    
                        </div>
                        <div className='spacing'>
                            <p>{COLORS}</p>
                        </div>
                        <div className='boxes spacing'>
                            <div>
                                <div className='box orange'></div>
                                <div>
                                    <a href='https://en.wikipedia.org/wiki/Orange'>{ORANGE}</a>
                                </div>
                            </div>
                            <div>
                                <div className='box yellow'></div>
                                <div>
                                    <a href='https://en.wikipedia.org/wiki/Yellow'>{YELLOW}</a>
                                </div>
                            </div>
                            <div>
                                <div className='box rainbow'></div>
                                <div>
                                    <a href="https://en.wikipedia.org/wiki/Magenta">{MAGENTA}</a>
                                </div>
                            </div>
                            <div>
                                <div className='box silver'></div>
                                <div>
                                    <a href='https://en.wikipedia.org/wiki/Silver'>{SILVER}</a>
                                </div>
                            </div>
                            <div>
                                <div className='box gold'></div>
                                <div>
                                    <a href='https://en.wikipedia.org/wiki/Gold'>{GOLD}</a>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
                <div>
                    <div className='title'>
                        <h1>Project Two</h1>
                    </div>
                    <div className='content'>
                        <p>Time to start a new project!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
 

export default BlogBody