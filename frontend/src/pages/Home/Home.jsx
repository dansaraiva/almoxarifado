import Button from '../../components/Button/Button';

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-600">Página Home</h1>
      <p className="mt-4">Testando o componente Button:</p>

      <div className="mt-4 flex gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
      </div>
    </div>
  );
}

export default Home;
