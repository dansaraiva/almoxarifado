import Table from '../../components/Table/Table';

function Home() {
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
    { id: 6, nome: 'Mochila', categoria: 'Acessórios', estoque: 10 },
    { id: 7, nome: 'Estojo', categoria: 'Acessórios', estoque: 25 },
    { id: 8, nome: 'Régua', categoria: 'Escritório', estoque: 40 },
    { id: 9, nome: 'Compasso', categoria: 'Escritório', estoque: 5 },
    { id: 10, nome: 'Tesoura', categoria: 'Escritório', estoque: 20 },
    { id: 11, nome: 'Cola', categoria: 'Escritório', estoque: 35 },
    { id: 12, nome: 'Fita', categoria: 'Escritório', estoque: 60 },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Lista de Itens</h1>
      <Table columns={columns} data={data} itemsPerPage={5} />
    </div>
  );
}

export default Home;
