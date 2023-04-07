import './index.scss'
// import img from '../../images/img.png'
const Hero = ()=>{
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__inner">
                <img className="hero__info__img" src="https://picsum.photos/243/243" alt="img" />
                <div className="hero__info">
                    <h1 className="hero__info__title">Hi, I am John, Creative Technologist</h1>
                    <p className="hero__info__text">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <a href="#" className="hero__info__link">Download Resume</a>
                </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;