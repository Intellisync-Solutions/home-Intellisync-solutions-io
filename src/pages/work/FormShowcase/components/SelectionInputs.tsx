const SelectionInputs = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
        Checkboxes & Radio Buttons
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Checkboxes */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
            Notifications
          </label>
          <div className="space-y-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300">Email notifications</span>
            </label>
            <br />
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300">SMS notifications</span>
            </label>
            <br />
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300">Push notifications</span>
            </label>
          </div>
        </div>

        {/* Radio Buttons */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
            Theme Preference
          </label>
          <div className="space-y-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="theme"
                value="light"
                className="text-blue-600 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300">Light</span>
            </label>
            <br />
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="theme"
                value="dark"
                className="text-blue-600 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300">Dark</span>
            </label>
            <br />
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="theme"
                value="system"
                className="text-blue-600 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300">System</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectionInputs;
