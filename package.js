Package.describe({
  name: 'matdutour:progress-button',
  version: '0.1.4',
  summary: 'Easy to use helper to display a nifty progress button',
  git: 'https://github.com/mathieudutour/Meteor-progress-button.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('jquery');
  api.use('templating');
  api.addFiles('lib/progress-button.html', 'client');
  api.addFiles('lib/progress-button.css', 'client');
});
