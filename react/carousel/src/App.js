import Carousel from './Carousel';
import './App.css';

function App() {

  const images = [
    {
      image_url: 'https://images.pexels.com/photos/14934612/pexels-photo-14934612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      caption: 'parrot'
    },
    {
      image_url: 'https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      caption: 'panda'
    },
    {
      image_url: 'https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      caption: 'fox'
    },
  ]
  return (
    <div className="App">
     <Carousel images={images}/>
    </div>
  );
}

export default App;
