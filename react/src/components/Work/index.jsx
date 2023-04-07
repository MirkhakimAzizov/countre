import './index.scss'

const Work = ()=>{
    return (
        <section className="work">
            <div className="container">
                <div className="work__inner">
                    <h2 className="work__title">Featured works</h2>
                    <ul className="work__list">
                        <li className="work__item">
                            <img className="work__item__img" src="https://picsum.photos/245/180" alt="work img" />
                            <div className="work__item__info">
                                <h3 className="work__item__title">Designing Dashboards</h3>
                                <span className="work__item__year">2020</span>
                                <span className="work__item__type">Dashboard</span>
                                <p className="work__item__text">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </p>
                            </div>
                        </li>
                        <li className="work__item">
                            <img className="work__item__img" src="https://picsum.photos/245/180" alt="work img" />
                            <div className="work__item__info">
                                <h3 className="work__item__title">Designing Dashboards</h3>
                                <span className="work__item__year">2020</span>
                                <span className="work__item__type">Dashboard</span>
                                <p className="work__item__text">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </p>
                            </div>
                        </li>
                        <li className="work__item">
                            <img className="work__item__img" src="https://picsum.photos/245/180" alt="work img" />
                            <div className="work__item__info">
                                <h3 className="work__item__title">Designing Dashboards</h3>
                                <span className="work__item__year">2020</span>
                                <span className="work__item__type">Dashboard</span>
                                <p className="work__item__text">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Work