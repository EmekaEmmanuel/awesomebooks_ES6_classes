import { clock } from "./usableData.js";

class LuxonTime {
    static displayTime() {
        const now = luxon.DateTime.now().setLocale(navigator.language).toLocaleString({
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: 'false',
        });
        clock.innerHTML = now;
    }
}

export { LuxonTime };