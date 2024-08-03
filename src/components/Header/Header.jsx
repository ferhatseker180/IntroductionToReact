import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescription = ['Fundemental', 'Cruical', 'Core'];
function genRandomInt(max){
  return Math.floor(Math.random() * (max+1));
}

export default function Header() {
    const description = reactDescription[genRandomInt(2)];
    /* Fonksiyon içerisinde 2 belirtildi çünkü 3 elemanlı dizimiz var ve index numarası 2'ye kadar */
    return (
      <div>
        <header>
         {/* Başlangıçta kod aşağıdaki gibi gekdi ancak daha verimli olan Import etme yoluyla img'ı kullandık. */ }
         {/* img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */} 
  
         <img src={reactImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {description} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
      </div>
    );
  }