import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
  return (
    <section id="about">
      <Heading index="01" heading="About Me" />
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.desc}>
            Hey there! 👋 I'm a tech enthusiast hailing from the heart of India,
            Indore, where the "corn" is not just a snack but an emotion!
            Graduated as a Computer Engineer in 2021—my journey in tech started
            with a mix of dreams and a truckload of NPM errors.
          </p>
          <p className={styles.desc}>
            <ul className={{ listStyleType: "none" }}>
              <li>
                Location: Currently setting up camp in Indore, where even the
                pigeons are tech-savvy (they use GPS for those impressive
                flybys! 🐦)
              </li>
              <li>
                Work Palette: I've dabbled in the realms of MERN, AWS, and
                Azure—taming the cloud while juggling Docker and Kubernetes. If
                you hear someone talking to servers, that's probably me
                negotiating for more uptime!
                <p>
                  Joke #1: Why did the developer go broke? Because he used up
                  all his cache! 💸
                </p>
              </li>
              <li>
                Experience: A 2.3-year expedition in the tech wilderness,
                wandering through 16 live projects. If bugs were pesos, I'd be a
                millionaire by now!
                <p>
                  Joke #2: Why was the JavaScript developer sad? Because he
                  didn’t know how to 'null' his feelings. 😢
                </p>
              </li>
              <li>
                Methodology: Agile Scrum is my jam—turning chaos into a
                choreographed dance of user stories and sprints. It's like
                conducting an orchestra, but with code!
              </li>
              <li>
                Communication: I'm fluent in geek and human languages alike, but
                ironically, I'm the introverted tech wizard. If social skills
                were a code, I'd be debugging them constantly!
              </li>
              <li>
                Hobbies: When I'm not debugging the world, you can catch me
                binging on anime, contemplating life's mysteries in Dragon Ball
                Z, or passionately discussing the offside rule in football.
                <p className={styles.desc}>
                  Joke #3: How do programmers celebrate Halloween? By dressing
                  up as "null"!
                </p>
              </li>
            </ul>
          </p>
        </div>
        <div className={styles.right}>
          <img
            src="./images/SB.png"
            alt="profile"
            className={styles.profile_img}
          />
          <div className={styles.img_border}></div>
        </div>
      </div>
    </section>
  );
}

export default About;
