import { useState } from 'react';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import Table from '../../components/Table/Table';
import Toast from '../../components/Toast/Toast';

function Home() {
  const [modalAberto, setModalAberto] = useState(false);
  const [toast, setToast] = useState(null);

  const columns = [
    { key: 'nome', label: 'Nome' },
    { key: 'categoria', label: 'Categoria' },
    { key: 'estoque', label: 'Estoque' },
  ];

  const data = [
    { id: 1, nome: 'Caneta', categoria: 'Escritório', estoque: 50 },
    { id: 2, nome: 'Papel', categoria: 'Escritório', estoque: 200 },
    { id: 3, nome: 'Lápis', categoria: 'Escritório', estoque: 80 },
    { id: 4, nome: 'Borracha', categoria: 'Escritório', estoque: 30 },
    { id: 5, nome: 'Caderno', categoria: 'Escritório', estoque: 15 },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Lista de Itens</h1>

      <div className="flex gap-2 mb-6">
        <Button onClick={() => setModalAberto(true)}>Abrir Modal</Button>
        <Button
          variant="secondary"
          onClick={() => setToast({ mensagem: 'Salvo!', tipo: 'success' })}
        >
          Toast Sucesso
        </Button>
        <Button variant="danger" onClick={() => setToast({ mensagem: 'Erro!', tipo: 'error' })}>
          Toast Erro
        </Button>
      </div>

      <Table columns={columns} data={data} itemsPerPage={5} />

      <Modal
        aberto={modalAberto}
        onFechar={() => setModalAberto(false)}
        titulo="Confirmar exclusão"
      >
        <p>Tem certeza que deseja excluir este item?</p>
        <div className="flex gap-2 mt-4">
          <Button variant="secondary" onClick={() => setModalAberto(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => setModalAberto(false)}>
            Excluir
          </Button>
        </div>
      </Modal>

      {toast && (
        <Toast mensagem={toast.mensagem} tipo={toast.tipo} onFechar={() => setToast(null)} />
      )}
    </div>
  );
}

export default Home;
