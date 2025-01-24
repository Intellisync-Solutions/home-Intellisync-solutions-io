import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as analytics from '../utils/analytics';

export const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Send pageview with current path
    analytics.pageview(location.pathname + location.search);
  }, [location]);

  return null; // This component doesn't render anything
};
