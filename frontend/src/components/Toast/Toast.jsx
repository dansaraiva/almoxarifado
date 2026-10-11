import { useEffect, useState } from 'react';

function Toast({ mensagem, tipo = 'info', duracao = 3000, onFechar }) {
  const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisivel(false);
      if (onFechar) onFechar();
    }, duracao);

    return () => clearTimeout(timer);
  }, [duracao, onFechar]);

  if (!visivel) return null;

  const tipos = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
  };

  return (
    <div
      className={`fixed top-4 right-4 px-4 py-3 rounded shadow-lg z-50 flex items-center gap-3 ${tipos[tipo]}`}
    >
      <span>{mensagem}</span>
      <button
        onClick={() => {
          setVisivel(false);
          if (onFechar) onFechar();
        }}
        className="text-xl leading-none"
      >
        ×
      </button>
    </div>
  );
}

export default Toast;
