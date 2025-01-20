import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define props for the Pagination component
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number; // Number of page numbers to show on each side of current page
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1
}) => {
  // Generate page numbers to display
  const generatePageNumbers = () => {
    // If total pages is small, show all pages
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];

    // Always show first and last page
    pages.push(1);

    // Calculate range around current page
    const startPage = Math.max(2, currentPage - siblingCount);
    const endPage = Math.min(totalPages - 1, currentPage + siblingCount);

    // Add ellipsis if there's a gap from the first page
    if (startPage > 2) {
      pages.push('...');
    }

    // Add page numbers around current page
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Add ellipsis if there's a gap before the last page
    if (endPage < totalPages - 1) {
      pages.push('...');
    }

    // Always show last page
    pages.push(totalPages);

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      {/* Previous Button */}
      <motion.button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        whileHover={{ scale: currentPage === 1 ? 1 : 1.1 }}
        whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
        className={`
          p-2 rounded-md transition-all 
          ${currentPage === 1 
            ? 'text-muted-foreground cursor-not-allowed' 
            : 'hover:bg-secondary text-foreground'}
        `}
      >
        <ChevronLeft size={20} />
      </motion.button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-1">
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span 
                key={`ellipsis-${index}`} 
                className="px-2 text-muted-foreground"
              >
                ...
              </span>
            );
          }

          return (
            <motion.button
              key={page}
              onClick={() => onPageChange(page as number)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`
                w-8 h-8 rounded-md text-sm transition-all
                ${page === currentPage 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-secondary text-foreground'}
              `}
            >
              {page}
            </motion.button>
          );
        })}
      </div>

      {/* Next Button */}
      <motion.button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        whileHover={{ scale: currentPage === totalPages ? 1 : 1.1 }}
        whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
        className={`
          p-2 rounded-md transition-all 
          ${currentPage === totalPages 
            ? 'text-muted-foreground cursor-not-allowed' 
            : 'hover:bg-secondary text-foreground'}
        `}
      >
        <ChevronRight size={20} />
      </motion.button>
    </div>
  );
};

export default Pagination;
