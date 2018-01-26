var vk = {
    data: {},
    appID: 5845876,
    appPermissions: 1+2+4+8+16+32+64+128+256+1024+2048+4096+8192+32768+65536+131072+262144+524288+1048576+4194304+134217728+268435456+536870912,
    self: this,

    //инициализация
    init: function(){
        VK.init({apiId: vk.appID});
    },

    login:function(callback){
        function authInfo(response){
            if(response.session){
                vk.data.user = response.session.user;
                var message = "Привет, "+vk.data.user.first_name+" "+vk.data.user.last_name;
                var username = vk.data.user.first_name+" "+vk.data.user.last_name;
                setCookie('username', username);
                callback.username = username;
                callback.message = message;
                callback.chechAccess = true;

                /*VK.Api.call('User', {fields: 'city'}, function(data) {
                    this.friendsArr = data;
                    console.log('User',data);
                });

                VK.api('User.get',
                    {fields: 'city'},
                    function (data) {
                        console.log('UserUser',data);
                    }
                );*/

                callback.getFriends(callback, callback.offsetFriends);
            }else {
                alert("Авторизоваться не удалось!");
                callback.chechAccess = false;
            }
        }

        VK.Auth.login(authInfo, vk.appPermissions);
    },

    access: function(callback){
        VK.Auth.getLoginStatus(function(response) {
            if(response.session){
                callback.chechAccess = true;

                /*VK.Api.call('friends.get', {fields: 'city,domain,photo_100'}, function(data) {
                    callback.friendsArr = data.response;
                    console.log('friends.get',data);
                });*/
                //callback.getFriends(callback, callback.offsetFriends);

            }else {
                callback.chechAccess = false;
                callback.username = "Вы не авторизованны";
            }
        })
    },

    logout:function(callback){
        VK.Auth.logout();
        this.data.user={};
        callback.chechAccess = false;
    },

    sendMsg : function (msg) {
        //VK.api('sendMessage',
        /*VK.api('getDialogs',
            {},
            function (data) {
                console.log('messages.send',data);
            }
        );*/
        /*VK.api('messages.send',
            {
                message: msg,
            },
            function (data) {
                console.log('messages.send',data);
            }
        );*/
        /*VK.Api.call('users.get', {}, function(r) {

        });*/
        /*VK.Api.call('messages.send', {message: msg}, function(data) {
            console.log('messages.send',data);
        });*/
        /*VK.Api.call('friends.get', {fields: 'city,domain'}, function(data) {
            this.friendsArr = data;
            console.log('friends.get',data);
        });*/
        /*VK.Api.call('wall.post', {message: msg}, function(data) {
            console.log('messages.send',data);
        });*/
    },
    getFriends: function (callback) {
        VK.Api.call('friends.get', {fields: 'city,domain,photo_100', count: callback.perPage}, function(data) {
            if (data.response && callback.friendsArr != data.response) {
                callback.friendsArr = data.response;
                callback.totalFriends = data.response.length;
                callback.perPage += 12;
            }
        });
    }
};
