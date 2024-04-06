import React, {useRef, useEffect} from 'react';
import './AboutSection.scss';
import TicTacToe from '../TicTacToe/TicTacToe';

const AboutSection: React.FC = () => {
    const Canvas = () => {
        const canvasRef = useRef(null)
        useEffect(() => {
            const canvas = canvasRef.current;
             //@ts-ignore
            const context = canvas.getContext('2d');
            
            const draw = (event: any) => {
            //@ts-ignore
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            
            context.beginPath();
            context.arc(x, y, 10, 0, 2 * Math.PI);
            context.fillStyle = 'green';
            context.fill();
        }
        //@ts-ignore
        canvas.addEventListener('mousedown', draw);

        return () => {
            //@ts-ignore
                  canvas.removeEventListener('mousedown', draw);
               };
    }, [])
    return (
        <canvas ref={canvasRef} />
    )

    }
  return (
    <section className="about-section">
      <div className="about-content row">
        <div className='info-container'>
            <h2 className="section-title">About Me</h2>
            <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rhoncus diam id metus dignissim commodo. Vestibulum fermentum est ut
            viverra ultrices.
            </p>
            <Canvas />
        </div>
        <div className="image-grid">
            <h4>Bored already? Play some tic tac toe!</h4>
            <TicTacToe />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
