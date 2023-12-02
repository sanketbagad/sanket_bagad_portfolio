import styles from "./styles.module.css";

function Home() {
  return (
    <section className={styles.home_section} id="home">
      <p className={styles.greet}>Hi, my name is</p>
      <h1 className={styles.heading_1}>Sanket Bagad</h1>
      <h1 className={styles.heading_2}>Coding Dreams into Digital Reality.</h1>
      <p className={styles.desc}>
        Absolutely! As a MERN Stack Developer with a robust portfolio boasting
        16 live projects, your expertise is a fusion of cutting-edge technology
        and practical application. You've honed your skills in crafting dynamic
        and responsive web applications using MongoDB, Express.js, React, and
        Node.js—showcasing your ability to create seamless user experiences.
        With a passion for problem-solving and a knack for turning ideas into
        functional realities, you're not just seeking freelance opportunities,
        you're poised to revolutionize digital landscapes with your innovative
        solutions.
      </p>
      <a href="#work">
        <button className={styles.btn}>Check out my work !</button>
      </a>
    </section>
  );
}

export default Home;
