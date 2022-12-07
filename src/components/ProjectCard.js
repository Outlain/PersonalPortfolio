export const ProjectCard = ({ title, description, imgUrl, link }) => {
    return (
        <div className="project-inner">
            <a href={link}>
                <div className="project-inner-inner" style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover' }}>
                    <h2>{title}</h2>
                    <h5>{description}</h5>
                </div>
            </a>
        </div>
    )
}