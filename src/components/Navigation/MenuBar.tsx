import React from 'react';
import { cn } from "@/lib/utils";
import { Search as SearchInput } from '../ui/search';

interface MenuItem {
  label: string;
  items: string[];
}

interface MenuBarProps {
  className?: string;
  onFilterChange?: (selectedFilters: string[]) => void;
  searchValue?: string;
  onSearch?: (value: string) => void;
}

const menuCategories: MenuItem[] = [
  {
    label: "Industries",
    items: [
      "SaaS", "E-commerce", "Real Estate", "Restaurant", 
      "Business", "Health & Wellness", "Social", "Education",
      "Media", "Finance"
    ]
  },
  {
    label: "Features",
    items: ["Dashboard", "Portfolio", "Blog", "Search", "Map", "Menu"]
  },
  {
    label: "Technologies",
    items: ["React", "TypeScript", "Firebase", "Node.js", "Supabase", "OpenAI"]
  },
  {
    label: "Design",
    items: ["Modern", "Creative", "Personal"]
  }
];

const MenuBar: React.FC<MenuBarProps> = ({ 
  className, 
  onFilterChange,
  searchValue = '',
  onSearch
}) => {
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>([]);
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);

  const handleFilterToggle = (item: string) => {
    const newFilters = selectedFilters.includes(item)
      ? selectedFilters.filter(i => i !== item)
      : [...selectedFilters, item];
    
    setSelectedFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  return (
    <div className={cn("w-full bg-background", className)}>
      <div className="container mx-auto">
        {/* Categories and Search */}
        <div className="flex items-center space-x-4 overflow-x-auto py-2 scrollbar-hide">
          {menuCategories.map((category) => (
            <div key={category.label} className="relative">
              <button
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap",
                  "hover:bg-accent transition-colors",
                  activeCategory === category.label ? "bg-accent" : "bg-transparent"
                )}
                onClick={() => setActiveCategory(
                  activeCategory === category.label ? null : category.label
                )}
              >
                {category.label}
              </button>
              
              {activeCategory === category.label && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-popover ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu">
                    {category.items.map((item) => (
                      <button
                        key={item}
                        className={cn(
                          "block w-full text-left px-4 py-2 text-sm",
                          "hover:bg-accent transition-colors",
                          selectedFilters.includes(item) 
                            ? "bg-accent/50 text-accent-foreground" 
                            : "text-foreground"
                        )}
                        onClick={() => handleFilterToggle(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Search Input */}
          <div className="flex-1 max-w-md">
            <SearchInput
              value={searchValue}
              onSearch={onSearch}
              onClear={() => onSearch?.('')}
              placeholder="Search by title, description, or tags..."
            />
          </div>
        </div>

        {/* Selected Filters */}
        {selectedFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 py-2 border-t border-border">
            {selectedFilters.map((filter) => (
              <span
                key={filter}
                className="inline-flex items-center px-3 py-1 rounded-full 
                  text-sm font-medium bg-accent/20 text-accent-foreground"
              >
                {filter}
                <button
                  className="ml-2 text-muted-foreground hover:text-accent-foreground"
                  onClick={() => handleFilterToggle(filter)}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuBar;
