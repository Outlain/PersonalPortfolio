export const ProjectCard = ({ title, description, imgUrl, link, beta }) => {
    return (
        <div className="project-inner">
            <a href={link}>
                <div className="project-inner-inner" style={{ backgroundImage: `url(${imgUrl})` }}>
                    <div className="project-inner-inner-blur">
                        <h2 className={beta === false ? 'white' : "red"}>{title}</h2>
                        <h5>{description}</h5>
                    </div>
                </div>
            </a>
        </div>
    )
}