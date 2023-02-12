import * as THREE from 'three';

const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / 500, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
const material = new THREE.MeshBasicMaterial({
    color: 0x000000,
    wireframe: true
});


const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const renderer = new THREE.WebGLRenderer( { antialias: false, alpha: true } );
renderer.setSize( window.innerWidth, 500);
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );

// animation

function animation( time ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}

const Home = () => {
    return (
        <div>
            <h1 className="text-gray-400 hover:text-black m-32 font-bold text-2xl italic w-60 hover:not-italic hover:scale-110 transition-all">
                "Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
                In interdum vitae mi nec suscipit."</h1>
            <div id="canvas"></div>
            <h1 className="text-gray-400 hover:text-black m-32 font-bold text-2xl italic w-60 hover:not-italic hover:scale-110 transition-all absolute right-0">
                "Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
                In interdum vitae mi nec suscipit."</h1>
        </div>
    );
};

export default Home;