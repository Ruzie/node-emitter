function EventEmitter() {
  this.events = function Events() {};
}

EventEmitter.prototype.on = function on(event, fn) {
  this.events[event] ||= [];
  if (!this.events[event]) return false;
  this.events[event].push(fn);
  return true;
};

EventEmitter.prototype.once = function once(event, fn) {
  this.events[event] ||= [];
  if (!this.events[event]) return false;
  const onceEvent = () => {
    fn();
    this.off(event);
  };
  this.events[event].push(onceEvent);
  return true;
};

EventEmitter.prototype.off = function off(event) {
  this.events[event] ||= [];
  if (!this.events[event]) return false;
  delete this.events[event];
  return true;
};

EventEmitter.prototype.emit = function emit(event, ...args) {
  this.events[event] ||= [];
  this.events[event].forEach((fun) => fun(...args));
  return true;
};

EventEmitter.prototype.listeners = function listeners(event) {
  this.events[event] ||= [];
  return [this.events[event]];
};

EventEmitter.prototype.addListener = EventEmitter.prototype.on;
EventEmitter.prototype.removeListener = EventEmitter.prototype.off;

module.exports = EventEmitter;
