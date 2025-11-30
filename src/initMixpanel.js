import mixpanel from 'mixpanel-browser';

export const initMixpanel = () => {
  mixpanel.init('657fe39c071430f0d303b161f4529983', {
    autocapture: true,
    record_sessions_percent: 100,
    api_host: 'https://api-eu.mixpanel.com',
  })
};

export const track = (eventName, props = {}) => {
    console.log("Tracking Event:", eventName, props);
    mixpanel.track(eventName, props);
};
