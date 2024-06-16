import heroImg from "../../assets/images/hero.jpg";
import qrImg from "../../assets/images/qr.png";

function Hero() {
  return (
    <div className="flex">
      <div className="w-full">
        <img className="object-contain" src={heroImg}></img>
        <div className="bg-sky-400">
          <h1 className="-mt-16 text-4xl font-semibold text-slate-300/95 [text-shadow:_0_-2px_rgb(236_72_153_/_90%)]">
            Heorhii Aksiuk{" "}
            <span className="block text-3xl text-pink-500 [text-shadow:_0_-2px_rgb(220_220_220_/_90%)]">
              Software Engineer
            </span>
          </h1>
          <h2 className="text-white text-xl font-semibold">Hello world!</h2>
          <p className="text-white">
            My name is Heorhii aka Georgiy, Zhorik, Zhora, zhorik044, Aytivets
            ... whatever. I'm into a lot of different stuff and love cats😺. You
            can find me in a forest, ∄ club, or a hardcore mosh pit. Write me if
            you need any site or any web application.
          </p>
          <a
            href="https://t.me/aytivets"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <img className="object-contain" src={qrImg}></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
