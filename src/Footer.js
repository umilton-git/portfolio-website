import Wave from 'react-wavify';

const Footer = () => {
    return (
        <div className="flex absolute bottom-0 w-screen">
            <Wave fill='#000000' paused={false} options={{
          height: 20,
          amplitude: 20,
          speed: 0.30,
          bones: 5
        }}/>
        <p className="text-white bg-black absolute grid place-items-center text-center bottom-0 w-screen justify-items-center">
            Ⓒ Ulysses Milton, 2023<br></br>
            Computer Scientist and Software Engineer</p>
        </div>
    );
};

export default Footer;