ProgressButton = (function () {
  function ProgressButton(_id, _options) {
    var self = this;

    this._id = _id;

    this._options = _options || {};

    this._options.duration = this._options.duration || 1200;
    this._options.durationSuccess = this._options.durationSuccess || 500;

    this.button = $("#"+_id);

    this._init();
  }

  ProgressButton.prototype._init = function () {
    this.loading();
  };

  ProgressButton.prototype.loading = function () {
    this.button.addClass('pb-loading');
  };

  ProgressButton.prototype.notLoading = function () {
    this.button.removeClass('pb-loading');
  };

  ProgressButton.prototype.error = function (callback) {
    var self = this;
    this.notLoading();
    this.button.addClass('pb-error');
    Meteor.setTimeout( function() {
      self.button.removeClass('pb-error');
      if( callback && typeof callback === "function") {
        callback();
      }
    }, this._options.duration);
  };

  ProgressButton.prototype.success = function (remove, callback) {
    var self = this;
    this.notLoading();
    this.button.addClass('pb-error');

    Meteor.setTimeout( function() {
      if( callback && typeof callback === "function") {
        callback();
      }
      if(!remove) {
        Meteor.setTimeout( function() {
          self.button.removeClass('pb-success');
        }, self._options.duration - self._options.durationSuccess);
      }
    }, self._options.durationSuccess);
  };

  return ProgressButton;

})();
