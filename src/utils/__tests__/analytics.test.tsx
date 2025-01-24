import { render } from '@testing-library/react';
import { MemoryRouter, useLocation, useNavigate } from 'react-router-dom';
import { pageview } from '../analytics';
import { useEffect } from 'react';
import { act } from 'react';

// Mock the SEO component
jest.mock('../../components/SEO', () => {
  return {
    __esModule: true,
    default: () => null
  };
});

// Mock App component with analytics
const MockApp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    pageview(location.pathname);
  }, [location]);

  useEffect(() => {
    // Simulate navigation after component mount
    if (location.pathname === '/') {
      navigate('/about');
    }
  }, [navigate]);

  return <div>Mock App</div>;
};

jest.mock('../../App', () => {
  return {
    __esModule: true,
    default: () => <MockApp />
  };
});

// Mock window.gtag
const mockGtag = jest.fn();

beforeAll(() => {
  Object.defineProperty(window, 'gtag', {
    value: mockGtag,
    writable: true,
  });
});

beforeEach(() => {
  mockGtag.mockClear();
});

describe('Google Analytics Integration', () => {
  test('pageview function calls gtag with correct parameters', () => {
    const testUrl = '/test-page';
    pageview(testUrl);
    
    expect(mockGtag).toHaveBeenCalledWith('config', 'G-5D79YWJBKP', {
      page_path: testUrl,
    });
  });

  const routes = [
    '/',
    '/about',
    '/services',
    '/work',
    '/contact',
    '/work/button-showcase',
    '/work/card-showcase',
    '/work/form-showcase',
    '/work/navigation-showcase',
    '/work/page-showcase',
    '/work/saas-dashboard',
    '/work/modern-portfolio',
    '/work/ecommerce-platform',
    '/work/real-estate-platform'
  ];

  test.each(routes)('GA tracking is called when navigating to %s', (route) => {
    render(
      <MemoryRouter initialEntries={[route]}>
        <MockApp />
      </MemoryRouter>
    );

    // GA should be called for the initial page load
    expect(mockGtag).toHaveBeenCalledWith(
      'config',
      'G-5D79YWJBKP',
      expect.objectContaining({
        page_path: route,
      })
    );
  });

  test('GA tracking is called when route changes', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <MockApp />
      </MemoryRouter>
    );

    // Clear the initial page load tracking
    mockGtag.mockClear();

    // Wait for navigation effect to run
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });
    
    // GA should be called for the route change
    expect(mockGtag).toHaveBeenCalledWith(
      'config',
      'G-5D79YWJBKP',
      expect.objectContaining({
        page_path: '/about',
      })
    );
  });
});
