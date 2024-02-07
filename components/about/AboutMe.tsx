import Link from "@/components/Link";
const AboutMe = () => {
  return (
    <section>
      <h2 id="about" className="scroll-margin-nav">
        <Link className="text-3xl" href="#about">
          About
        </Link>
      </h2>
      <p>
        Hello, my name is <b>Binggie Rashel Prasetyo</b>, you can call me{" "}
        <b>Binggie</b>. I am currently a vocational school student majoring in <b>computer network engineering</b>
      </p>
      <p>
      I grew up in Bogor, Indonesia. I'm still studying at {""}
        <Link
          className="underline"
          isExternal
          href="https://smknegerisatukemang.sch.id/"
        >
          SMKN 1 Kemang 
        </Link>{" "}
        , and I did an internship at {""}
        <Link
          className="underline"
          isExternal
          href="https://bonet.co.id/"
        > 
         PT Bonet Utama Bogor. 
        </Link>{" "}
        I was there as a network technician.
        
      </p>
      <p>
      I like finding out about the world of networking and programming. Apart from that, 
      I also like {""}
      <Link
          isExternal
          className="underline"
          href="https://open.spotify.com/playlist/4MVzpzxCnLSN6BIsl50M0g"
        >
          listening music
        </Link> {""}
       and I like volleyball.
      </p>
    </section>
  );
};

export default AboutMe;
