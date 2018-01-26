var app = new Vue({
    el: '#triangle',
    data: {
        message: 'Авторизован',
        vk: vk,
        username: getCookie('username'),
        chechAccess: false,
        friendsArr: [{}],
        totalFriends: 0,
        perPage: 12,
        offsetFriends: 0,
        currentPage: 1,
    },
    methods: {
        accessApp: function () {
            vk.access (this);
            vk.sendMsg (this.message);
            this.getFriends (this);
        },
        authApp: function () {

        },
        login: function () {
            vk.login (this);
        },
        logout: function () {
            vk.logout (this);
        },
        getFriends: function (page) {
            vk.getFriends (this);
        },
        sendMsg : function () {
            /*sendRequest ('messages.send', {message: this.message}, function () {
                console.log('adsadasdasdasd');
            });*/
            //vk.sendMsg (this.message);
            this.message = "Новое тестовое сообщение";
        },
    }
});
