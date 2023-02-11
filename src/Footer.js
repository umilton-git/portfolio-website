import Wave from 'react-wavify';

const Footer = () => {
    return (
        <div className="absolute bottom-0 w-screen">
            <Wave fill='#000000' paused={false}options={{
          height: 45,
          amplitude: 20,
          speed: 0.30,
          points: 5
        }}/>
        <p className="bg-black text-white w-30 h-50">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum vitae mi nec suscipit."</p>
        </div>
    );
};

export default Footer;