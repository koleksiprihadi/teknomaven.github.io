'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function DrawSignaturePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        setContext(ctx);
      }
    }
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!context) return;
    setIsDrawing(true);
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      context.beginPath();
      context.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !context) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      context.lineTo(e.clientX - rect.left, e.clientY - rect.top);
      context.stroke();
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    if (context && canvasRef.current) {
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  const saveSignature = () => {
    if (canvasRef.current) {
      const link = document.createElement('a');
      link.download = 'signature.png';
      link.href = canvasRef.current.toDataURL();
      link.click();
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '600px', width: '100%' }}>
        <Link href="/" className="btn btn-sm btn-outline-secondary mb-3">
          ← Back to Home
        </Link>
        <h2 className="text-center mb-4">Draw a Signature</h2>
        <canvas
          ref={canvasRef}
          width={500}
          height={300}
          className="border mb-3"
          style={{ cursor: 'crosshair', touchAction: 'none' }}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
        <div className="d-flex gap-2">
          <button onClick={clearCanvas} className="btn btn-warning flex-fill">
            Clear
          </button>
          <button onClick={saveSignature} className="btn btn-success flex-fill">
            Save as PNG
          </button>
        </div>
      </div>
    </div>
  );
}
