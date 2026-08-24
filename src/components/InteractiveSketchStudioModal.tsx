import React, { useRef, useState, useEffect } from 'react';
import { DESTINATIONS } from '../data/holidaysData';
import { X, RotateCcw, Download, Sparkles, Paintbrush, Eraser, Undo, Palette } from 'lucide-react';

interface InteractiveSketchStudioModalProps {
  onClose: () => void;
}

export const InteractiveSketchStudioModal: React.FC<InteractiveSketchStudioModalProps> = ({ onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedDestId, setSelectedDestId] = useState<string>(DESTINATIONS[1].id); // Dolomites
  const [activeMedium, setActiveMedium] = useState<'watercolor' | 'pencil' | 'fineliner' | 'eraser'>('watercolor');
  const [color, setColor] = useState<string>('#70826b'); // Sage Green default
  const [brushSize, setBrushSize] = useState<number>(14);
  const [isDrawing, setIsDrawing] = useState(false);

  const paletteColors = [
    { name: 'Sage Green', hex: '#70826b' },
    { name: 'Ultramarine Blue', hex: '#2b4c7e' },
    { name: 'Burnt Sienna', hex: '#8c4830' },
    { name: 'Raw Ochre', hex: '#cb9b42' },
    { name: 'Charcoal Black', hex: '#2c322b' },
    { name: 'Terracotta', hex: '#b85d43' },
    { name: 'Lavender Haze', hex: '#877c98' },
  ];

  // Draw template onto canvas when destination changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#faf8f5';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Load background sketch reference image with low opacity
    const dest = DESTINATIONS.find((d) => d.id === selectedDestId);
    if (dest) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = dest.watercolorSketchUrl;
      img.onload = () => {
        ctx.globalAlpha = 0.25;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1.0;
      };
    }
  }, [selectedDestId]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.beginPath();
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let clientX = 0;
    let clientY = 0;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (activeMedium === 'eraser') {
      ctx.strokeStyle = '#faf8f5';
      ctx.globalAlpha = 1.0;
    } else if (activeMedium === 'watercolor') {
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.18; // Translucent watercolor wash effect
    } else if (activeMedium === 'pencil') {
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.65;
      ctx.lineWidth = Math.max(2, brushSize / 2);
    } else if (activeMedium === 'fineliner') {
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.95;
      ctx.lineWidth = Math.max(1, brushSize / 4);
    }

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#faf8f5';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Redraw faint reference sketch
    const dest = DESTINATIONS.find((d) => d.id === selectedDestId);
    if (dest) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = dest.watercolorSketchUrl;
      img.onload = () => {
        ctx.globalAlpha = 0.25;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1.0;
      };
    }
  };

  const downloadSketch = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `my-${selectedDestId}-sketch.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-[#faf8f5] w-full max-w-4xl rounded-lg shadow-2xl border border-[#d8d2c4] overflow-hidden relative my-4 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 bg-[#70826b] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-200" />
            <div>
              <h3 className="font-serif-title text-xl font-bold leading-tight">
                Interactive Watercolor & Sketch Studio
              </h3>
              <p className="font-handwriting text-xs text-[#dbe6d7]">
                Try watercolor washes & pen lines on destination templates
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="p-3 bg-[#eee9df] border-b border-[#dcd6c8] flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Template Select */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#2c322b]">Template:</span>
            <select
              value={selectedDestId}
              onChange={(e) => setSelectedDestId(e.target.value)}
              className="px-2.5 py-1.5 bg-white border border-[#c2bba8] rounded font-medium text-[#2c322b]"
            >
              {DESTINATIONS.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name} ({d.sketchTag})
                </option>
              ))}
            </select>
          </div>

          {/* Medium Tool Buttons */}
          <div className="flex items-center gap-1.5 bg-white p-1 rounded border border-[#c2bba8]">
            <button
              onClick={() => setActiveMedium('watercolor')}
              className={`px-3 py-1 rounded text-xs font-medium flex items-center gap-1 transition-all ${
                activeMedium === 'watercolor'
                  ? 'bg-[#70826b] text-white'
                  : 'text-[#323d30] hover:bg-[#f2efe8]'
              }`}
            >
              <Paintbrush className="w-3.5 h-3.5" />
              <span>Watercolor</span>
            </button>
            <button
              onClick={() => setActiveMedium('pencil')}
              className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                activeMedium === 'pencil' ? 'bg-[#70826b] text-white' : 'text-[#323d30] hover:bg-[#f2efe8]'
              }`}
            >
              Graphite
            </button>
            <button
              onClick={() => setActiveMedium('fineliner')}
              className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                activeMedium === 'fineliner' ? 'bg-[#70826b] text-white' : 'text-[#323d30] hover:bg-[#f2efe8]'
              }`}
            >
              Ink Pen
            </button>
            <button
              onClick={() => setActiveMedium('eraser')}
              className={`px-2.5 py-1 rounded text-xs transition-all ${
                activeMedium === 'eraser' ? 'bg-[#8c4830] text-white' : 'text-[#323d30] hover:bg-[#f2efe8]'
              }`}
              title="Eraser"
            >
              <Eraser className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Color Palette */}
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-[#2c322b] hidden sm:inline">Pigment:</span>
            {paletteColors.map((c) => (
              <button
                key={c.name}
                onClick={() => {
                  setColor(c.hex);
                  if (activeMedium === 'eraser') setActiveMedium('watercolor');
                }}
                className={`w-6 h-6 rounded-full border-2 transition-transform ${
                  color === c.hex && activeMedium !== 'eraser' ? 'scale-125 border-[#1e251c] shadow-xs' : 'border-white'
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>

          {/* Size Slider */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#2c322b]">Size:</span>
            <input
              type="range"
              min="2"
              max="40"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="w-20 accent-[#70826b]"
            />
          </div>
        </div>

        {/* Canvas Workspace */}
        <div className="flex-1 p-4 bg-[#e8e3d8] flex items-center justify-center overflow-hidden">
          <div className="polaroid-card p-3 bg-white rounded-md border border-[#c2bba8] relative shadow-lg">
            <canvas
              ref={canvasRef}
              width={720}
              height={480}
              onMouseDown={startDrawing}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onMouseMove={draw}
              onTouchStart={startDrawing}
              onTouchEnd={stopDrawing}
              onTouchMove={draw}
              className="w-full max-w-[720px] h-auto cursor-crosshair rounded touch-none bg-[#faf8f5]"
            />
            <p className="font-handwriting text-center text-sm text-[#525d4f] pt-2">
              "Expressive sketch study on paper..."
            </p>
          </div>
        </div>

        {/* Canvas Actions Footer */}
        <div className="p-3 bg-[#faf8f5] border-t border-[#dcd6c8] flex items-center justify-between">
          <button
            onClick={clearCanvas}
            className="px-4 py-2 text-xs font-semibold text-[#8c4830] bg-[#f7ebe8] hover:bg-[#ebd5cf] rounded border border-[#e2bab0] flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Canvas</span>
          </button>

          <button
            onClick={downloadSketch}
            className="px-6 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#70826b] hover:bg-[#5a6a56] rounded shadow-xs flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download My Sketch</span>
          </button>
        </div>

      </div>
    </div>
  );
};
