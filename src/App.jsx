import Card from './card';
import Header from './header';

function App() {
  return (
    <div className=''>
      <Header></Header>

      <section className='relative top-0 left-0 z-[-1] w-full'>
        <img
          width='100%'
          height='100%'
          src='src/assets/Title-Image.png'
          alt='banner'
          className='top-0'
        />
        <div className='absolute bottom-0 pl-20 pb-[12rem]'>
          <img
            src='src\assets\Netflix_Symbol_RGB 1.png'
            alt='n-logo'
            className='inline mr-3 pl-2'
          />
          <span className='text-slate-100 text-xl tracking-[0.6rem] font-bold'>
            SHOW
          </span>
          <div>
            <h1 className='text-9xl text-slate-100 font-bold mb-6'>MAID</h1>
          </div>
          <div className='pl-3'>
            <button className='bg-white px-5 py-2 rounded-md mr-2 text-lg font-normal'>
              <i className='fa-solid fa-play'></i> Play
            </button>
            <button className='px-5 py-2 bg-glossy rounded-md text-white font-medium'>
              <i className='fa-solid fa-info border-[2px] px-1 rounded-full border-white mr-1'></i>
              More Info
            </button>
          </div>
        </div>
      </section>

      <section className='w-full bg-black bg-gradient-to-t from-transparent via-transparent to-gray-900 px-10 '>
        <h1 className='text-white text-lg mb-4 font-semibold'>
          Top-Rated Movies <i className='fa-solid fa-greater-than'></i>
        </h1>
        <div className='w-full flex xl:flex-row flex-wrap justify-center min-h-screen max-container text-white mb-5'>
          <Card className=''></Card>
        </div>
      </section>
    </div>
  );
}

export default App;
