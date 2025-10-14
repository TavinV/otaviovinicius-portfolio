import { useRef, useEffect } from 'react';

const Squares = ({
  direction = 'right',
  speed = 1,
  borderColor = '#999',
  hoverFillColor = '#222'
}) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const numSquaresX = useRef(0);
  const numSquaresY = useRef(0);
  const squareSize = useRef(40); // Tamanho dos quadrados
  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredSquareRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      // Definir as dimensões do canvas
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Calcular o tamanho do quadrado com base no tamanho da tela
      const calculatedSquareSize = Math.floor(Math.min(canvas.width, canvas.height) / 20);
      squareSize.current = Math.max(calculatedSquareSize, 30); // Garantir um tamanho mínimo para o quadrado

      numSquaresX.current = Math.ceil(canvas.width / squareSize.current) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize.current) + 1;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Inicializa o tamanho do canvas e o tamanho dos quadrados

    const drawGrid = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const startX = Math.floor(gridOffset.current.x / squareSize.current) * squareSize.current;
      const startY = Math.floor(gridOffset.current.y / squareSize.current) * squareSize.current;

      for (let x = startX; x < canvas.width + squareSize.current; x += squareSize.current) {
        for (let y = startY; y < canvas.height + squareSize.current; y += squareSize.current) {
          const squareX = x - (gridOffset.current.x % squareSize.current);
          const squareY = y - (gridOffset.current.y % squareSize.current);

          if (
            hoveredSquareRef.current &&
            Math.floor((x - startX) / squareSize.current) === hoveredSquareRef.current.x &&
            Math.floor((y - startY) / squareSize.current) === hoveredSquareRef.current.y
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(squareX, squareY, squareSize.current, squareSize.current);
          }

          ctx.strokeStyle = borderColor;
          ctx.strokeRect(squareX, squareY, squareSize.current, squareSize.current);
        }
      }

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      gradient.addColorStop(1, '#060010');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1);
      switch (direction) {
        case 'right':
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize.current) % squareSize.current;
          break;
        case 'left':
          gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + squareSize.current) % squareSize.current;
          break;
        case 'up':
          gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + squareSize.current) % squareSize.current;
          break;
        case 'down':
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize.current) % squareSize.current;
          break;
        case 'diagonal':
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize.current) % squareSize.current;
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize.current) % squareSize.current;
          break;
        default:
          break;
      }

      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    const handleMouseMove = event => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const startX = Math.floor(gridOffset.current.x / squareSize.current) * squareSize.current;
      const startY = Math.floor(gridOffset.current.y / squareSize.current) * squareSize.current;

      const hoveredSquareX = Math.floor((mouseX + gridOffset.current.x - startX) / squareSize.current);
      const hoveredSquareY = Math.floor((mouseY + gridOffset.current.y - startY) / squareSize.current);

      if (
        !hoveredSquareRef.current ||
        hoveredSquareRef.current.x !== hoveredSquareX ||
        hoveredSquareRef.current.y !== hoveredSquareY
      ) {
        hoveredSquareRef.current = { x: hoveredSquareX, y: hoveredSquareY };
      }
    };

    const handleMouseLeave = () => {
      hoveredSquareRef.current = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [direction, speed, borderColor, hoverFillColor]);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[-1]"></canvas>;
};

const Background = () => {
    return (
        <Squares 
        speed={0.2} 
        squareSize={300}
        direction='up' // up, down, left, right, diagonal
        borderColor='#2A2A41'
        hoverFillColor='#0F0E28'
        />
    );
} 
export default Background;
