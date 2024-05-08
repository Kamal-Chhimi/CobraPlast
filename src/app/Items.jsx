import Image from 'next/image';
import img1 from './Images/img (1).png';
import img2 from './Images/img (2).png';
import img3 from './Images/img (3).png';
import img4 from './Images/img (4).png';
import img5 from './Images/img (5).png';
import img6 from './Images/img (6).png';
import img7 from './Images/img (7).png';
import img8 from './Images/img (8).png';
import img9 from './Images/img (9).png';
import img10 from './Images/img (10).png';
import img11 from './Images/img (11).png';
import img12 from './Images/img (12).png';
import img13 from './Images/img (13).png';
import img14 from './Images/img (14).png';
import img15 from './Images/img (15).png';
import img16 from './Images/img (16).png';
import img17 from './Images/img (17).png';
import img18 from './Images/img (18).png';
import img19 from './Images/img (19).png';
import img20 from './Images/img (20).png';
import img21 from './Images/img (21).png';
import img22 from './Images/img (22).png';
import img23 from './Images/img (23).png';
import img24 from './Images/img (24).png';
import img25 from './Images/img (25).png';
import img26 from './Images/img (26).png';
import img27 from './Images/img (27).png';
import img28 from './Images/img (28).png';
import img29 from './Images/img (29).png';
import img30 from './Images/img (30).png';
import img31 from './Images/img (31).png';
import img32 from './Images/img (32).png';
import img33 from './Images/img (33).png';


function Items() {
  const images = [
    { src: img1, volume: "100 ml", weight: "50 g" },
    { src: img2, volume: "200 ml", weight: "100 g" },
    { src: img3, volume: "300 ml", weight: "150 g" },
    { src: img4, volume: "400 ml", weight: "200 g" },
    { src: img5, volume: "500 ml", weight: "250 g" },
    { src: img6, volume: "600 ml", weight: "300 g" },
    { src: img7, volume: "700 ml", weight: "350 g" },
    { src: img8, volume: "800 ml", weight: "400 g" },
    { src: img9, volume: "900 ml", weight: "450 g" },
    { src: img10, volume: "1 L", weight: "500 g" },
    { src: img11, volume: "1.1 L", weight: "550 g" },
    { src: img12, volume: "1.2 L", weight: "600 g" },
    { src: img13, volume: "1.3 L", weight: "650 g" },
    { src: img14, volume: "1.4 L", weight: "700 g" },
    { src: img15, volume: "1.5 L", weight: "750 g" },
    { src: img16, volume: "1.6 L", weight: "800 g" },
    { src: img17, volume: "1.7 L", weight: "850 g" },
    { src: img18, volume: "1.8 L", weight: "900 g" },
    { src: img19, volume: "1.9 L", weight: "950 g" },
    { src: img20, volume: "2 L", weight: "1 kg" },
    { src: img21, volume: "2.1 L", weight: "1.05 kg" },
    { src: img22, volume: "2.2 L", weight: "1.1 kg" },
    { src: img23, volume: "2.3 L", weight: "1.15 kg" },
    { src: img24, volume: "2.4 L", weight: "1.2 kg" },
    { src: img25, volume: "2.5 L", weight: "1.25 kg" },
    { src: img26, volume: "2.6 L", weight: "1.3 kg" },
    { src: img27, volume: "2.7 L", weight: "1.35 kg" },
    { src: img28, volume: "2.8 L", weight: "1.4 kg" },
    { src: img29, volume: "2.9 L", weight: "1.45 kg" },
    { src: img30, volume: "3 L", weight: "1.5 kg" },
    { src: img31, volume: "3.1 L", weight: "1.55 kg" },
    { src: img32, volume: "3.2 L", weight: "1.6 kg" },
    { src: img33, volume: "3.3 L", weight: "1.65 kg" }
  ];

  return (
    <div className='container grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1'>
      {images.map((image, index) => (
        <div key={index} className="flex justify-center items-center border-x-8 border border-blue-300 text-2xl">
          <Image loading="lazy" src={image.src} alt={`Image ${index + 1}`} className='sm:w-2/6 w-4/12' />
          <p>{image.volume}--</p>
          <p>{image.weight}</p>
        </div>
      ))}
    </div>
  );
}

export default Items;
