import './index.scss'

const Post = ()=>{
    return(
        <section className="post">
            <div className="container">
                <div className="post__inner">
                    <div className="post__top">
                        <h2 className="post__top__title">Recent posts</h2>
                        <a href="#" className="post__top__link">View all</a>
                    </div>
                    <ul className="post__list">
                        <li className="post__item">
                            <h3 className="post__item__title">Making a design system from scratch</h3>
                            <div className="post__item__info">
                                <span className="post__item__info__date">12 Feb 2020</span>
                                <span className="post__item__info__name">Design, Pattern</span>
                            </div>
                            <p className="post__item__text">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </li>
                        <li className="post__item">
                            <h3 className="post__item__title">Creating pixel perfect icons in Figma</h3>
                            <div className="post__item__info">
                                <span className="post__item__info__date">12 Feb 2020</span>
                                <span className="post__item__info__name">Design, Pattern</span>
                            </div>
                            <p className="post__item__text">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Post