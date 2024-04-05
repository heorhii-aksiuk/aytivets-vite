import heroImg from '../../assets/images/hero.jpg';
import qrImg from '../../assets/images/qr.png';

function Hero() {
  return (
    <div className="flex">
      <div className="w-full">
        <img className="object-contain" src={heroImg}></img>
        <h1 className="-mt-16 text-4xl font-semibold text-slate-300/95 [text-shadow:_0_-2px_rgb(236_72_153_/_90%)]">
          Heorhii Aksiuk{' '}
          <span className="block text-3xl text-pink-500 [text-shadow:_0_-2px_rgb(220_220_220_/_90%)]">
            Software Engineer
          </span>
        </h1>
        <h2 className="text-xl font-semibold">Hello world!</h2>
        <p>
          My name is Heorhii aka Zhorik, Zhora, zhorik044, Aytivets... or even
          Yura, Yurchyk... whatever. I'm into a lot of different stuff and love
          cats. You can find me in a forest, in ∄ or in mosh pit. Write me if
          you need a business card site like this or any web application.
        </p>
        <a
          href="https://t.me/+380635757906"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <img className="object-contain" src={qrImg}></img>
        </a>
      </div>
    </div>
  );
}

export default Hero;
