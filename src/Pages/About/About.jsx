import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.png";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Tasty Treat</h4>
          <p>
            We are Tasty Treat. Juicy burgers, made fresh to order.
          </p>

          <p>
            Burgers so good, you'll want to come back for more. Click below to see the menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Najmul Hoque</h3>
            </div>

            <p>
              I am Najmul Hoque, the founder of Tasty Treat. Our passion for burgers is what drives us, and we are committed to providing you with the best burger experience possible. So come and join us at TASTY TREAT, where every bite is a tasty treat!
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
