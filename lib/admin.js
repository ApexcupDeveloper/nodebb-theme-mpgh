'use strict';
/* globals $, app */

define('admin/plugins/mpgh', ['settings'], function(Settings) {

	var ACP = {};

	ACP.init = function() {
		Settings.load('mpgh', $('.mpgh-settings'));

		$('#save').on('click', function() {
			Settings.save('mpgh', $('.mpgh-settings'), function() {
				app.alert({
					type: 'success',
					alert_id: 'mpgh-saved',
					title: 'Settings Saved',
					message: 'mpgh theme settings saved'
				});
			});
		});
	};

	return ACP;
});