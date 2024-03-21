import profilePic from "../../assets/profilePic.jpg";

export default function About() {
  return (
    <>
      <section id="about">
        <h2>About</h2>
        <img src={profilePic} alt="Profile pic" />
        <p>
          Hello, and welcome to my portfolio page. My name is Kar-ho, a
          job-ready full-stack developer. I am a Northcoders software engineer
          graduate. It was a great experience and a lot of fun: if I could, I
          would do it all over again!
        </p>
        <p>
          Away from the computer, I am a sports enthusiast and a keen traveller.
          I can often be found practising my serve on the tennis court.
        </p>
      </section>
    </>
  );
}
