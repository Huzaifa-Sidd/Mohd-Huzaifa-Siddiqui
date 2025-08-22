import { useEffect } from 'react';

// Simple visitor tracking component
const Analytics = () => {
  useEffect(() => {
    // Track page view
    const trackVisitor = () => {
      const visitData = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        url: window.location.href,
        sessionId: getOrCreateSessionId()
      };

      // Send to your analytics endpoint
      console.log('Visitor tracked:', visitData);
      
      // You can implement your own analytics endpoint here
      // fetch('/api/analytics', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(visitData)
      // });

      // For now, store in localStorage for demo
      const visitors = JSON.parse(localStorage.getItem('portfolioVisitors') || '[]');
      visitors.push(visitData);
      localStorage.setItem('portfolioVisitors', JSON.stringify(visitors.slice(-100))); // Keep last 100 visits
    };

    const getOrCreateSessionId = () => {
      let sessionId = sessionStorage.getItem('portfolioSessionId');
      if (!sessionId) {
        sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem('portfolioSessionId', sessionId);
      }
      return sessionId;
    };

    // Track initial visit
    trackVisitor();

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeOnPage = Date.now() - startTime;
      console.log('Time on page:', Math.round(timeOnPage / 1000) + 's');
    };

    window.addEventListener('beforeunload', trackTimeOnPage);

    return () => {
      window.removeEventListener('beforeunload', trackTimeOnPage);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default Analytics;