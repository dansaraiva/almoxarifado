import { useState } from 'react';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import Table from '../../components/Table/Table';

function Home() {
  const [modalAberto, setModalAberto] = useState(false);

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

      <Button onClick={() => setModalAberto(true)}>Abrir Modal</Button>

      <div className="mt-6">
        <Table columns={columns} data={data} itemsPerPage={5} />
      </div>

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
    </div>
  );
}

export default Home;
