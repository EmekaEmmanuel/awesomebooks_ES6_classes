import { clock } from './usableData.js';

const timeDetails = {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: 'false',
};

/* eslint-disable */

export default class LuxonTime {
    static displayTime() {
        const now = luxon.DateTime.now().setLocale(navigator.language).toLocaleString(timeDetails);
        clock.innerHTML = now;
    }
}

/* eslint-disable */