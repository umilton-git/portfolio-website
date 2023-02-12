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
        </div>
    );
};

export default Footer;