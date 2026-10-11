import Layout from '../../components/Layout/Layout';
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
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Lista de Itens</h1>
      <Table columns={columns} data={data} itemsPerPage={5} />
    </Layout>
  );
}

export default Home;
