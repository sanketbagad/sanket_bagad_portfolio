import Heading from './../../Components/Heading';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import constant from '../../constant.json';
import styles from './styles.module.css';

function Work() {
  return (
    <section id="work">
      <Heading index="03" heading="Some Things I’ve Built" />
      <div className={styles.container}>
        {constant.projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <div className={styles.left}>
              <a href={project.link} className={styles.heading}>
                {project.title}
              </a>
              <p className={styles.desc}>{project.desc}</p>
              <div className={styles.skill_container}>
                {project.skills.map((skill, idx) => (
                  <p key={idx}>{skill}</p>
                ))}
              </div>
              <div className={styles.links_container}>
                <a href={project.github} target='_blank' rel='noreferrer'
                className={styles.link}>
                  <GitHubIcon />
                </a>
                <a href="/" className={styles.link}>
                  <OpenInNewIcon />
                </a>
              </div>
            </div>
            <div className={styles.right}>
              <a href={project.link} target="__blank">
                <video
                  src={project.image}
                  className={styles.img}
                  alt="project_img"
                  autoPlay
                  loop
                  muted
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
