var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var acao = document.getElementById('acao');
        acao.addEventListener('click', function() {
            alert('ação executada.');
        });

        var notificationOpenedCallback = function(jsonData) {
            console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        };

        window.plugins.OneSignal
        .startInit("ff72aee3-1be7-4ec9-97f7-59acff215890")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
    }
};
