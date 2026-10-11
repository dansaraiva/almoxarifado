import { Link, useLocation } from 'react-router-dom';

function Layout({ children }) {
  const location = useLocation();

  const menu = [
    { path: '/home', label: 'Home' },
    { path: '/sobre', label: 'Sobre' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between shadow-md">
        <h1 className="text-xl font-bold">Almoxarifado</h1>
        <span className="text-sm">Bem-vindo!</span>
      </header>

      {/* Corpo: menu lateral + conteúdo */}
      <div className="flex flex-1">
        {/* Menu lateral */}
        <aside className="w-48 bg-gray-100 border-r border-gray-300 p-4">
          <nav className="flex flex-col gap-2">
            {menu.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded ${
                  location.pathname === item.path
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Conteúdo da página */}
        <main className="flex-1 p-6 bg-white">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
