import './home.css';
import vegeEtal from '../../assets/vegeEtal.jpg';

function Home() {

  return (
    <>
      <main>
        <section>
          <h1>Magasin de légumes frais et locaux au Val de Loire</h1>
          <h2>Horaires</h2>
          <p>Du lundi au samedi de 8h30 à 19h.</p>
          <p>15 rue du Port, Saint-Benoît-sur-Loire.</p>
          <h2>Qui sommes nous ?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.</p>
          <figure>
            <img src={vegeEtal} alt="Etal de légume" />
          </figure>
        </section>
      </main>
    </>
  )
}

export default Home
