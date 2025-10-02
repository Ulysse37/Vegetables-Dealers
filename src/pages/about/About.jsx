import './about.css';
import OldCouple from '../../assets/aboutPage/oldFarmerCouple.jpg';
/* import Farm1 from '../../assets/aboutPage/farm1.jpg';
import Farm2 from '../../assets/aboutPage/farm2.jpg';
import Farm3 from '../../assets/aboutPage/farm3.jpg';
import Farm4 from '../../assets/aboutPage/farm4.jpg';
import Farm5 from '../../assets/aboutPage/farm5.jpg';
import Farm6 from '../../assets/aboutPage/farm6.jpg'; */

function About() {

  return (
    <>
      <main>
        <section>
          <h1>Au maraîcher du Val de Loire</h1>
          <h2>Qui sommes nous ?</h2>
          <figure>
            <img src={OldCouple} alt="Arrière grands-parents sur l'exploitation" />
          </figure>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.
          </p>
        </section>
      </main>
    </>
  )
}

export default About
