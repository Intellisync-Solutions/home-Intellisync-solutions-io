import { Home, ChevronRight } from 'lucide-react';

const Breadcrumbs = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
        Breadcrumbs
      </h2>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
              <Home size={16} className="mr-2" />
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight size={16} className="text-gray-400" />
              <a href="#" className="ml-1 md:ml-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                Products
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight size={16} className="text-gray-400" />
              <span className="ml-1 md:ml-2 text-gray-500 dark:text-gray-400">
                Current Page
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </section>
  );
};

export default Breadcrumbs;
