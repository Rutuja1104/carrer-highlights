// src/RouteTracker.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';

export default function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    mixpanel.track("Page View", {
      path: location.pathname,
    });
  }, [location.pathname]);

  return null;
}
