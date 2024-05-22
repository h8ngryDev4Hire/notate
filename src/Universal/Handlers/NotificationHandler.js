// NotificationManager Class Definition
export default class NotificationHandler {
  constructor() {
    this.active = false;
    this.message = '';
    this.type = '';
    this.duration = 2000;
    this.styles = '';
  }

  showInfo(message) {
    this.message = message;
    this.type = 'info';
    this.duration = 2000;
    this.styles = {
	    ring: 'ring-green-700',
	    blur: 'bg-green-400'
    };
    this.active = true;
    return this;
  }

  showWarn(message) {
    this.message = message;
    this.type = 'warn';
    this.duration = 3000;
    this.styles = {
	    ring: 'ring-yellow-700',
	    blur: 'bg-yellow-400'
    };
    this.active = true;
    return this;
  }

  showError(message) {
    this.message = message;
    this.type = 'error';
    this.duration = 4000;
    this.styles = {
	    ring: 'ring-red-700',
	    blur: 'bg-red-400'
    };
    this.active = true;
    return this;
  }
}
