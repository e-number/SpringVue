import Vue from 'vue'
import Vuetify from 'vuetify'
import 'api/resource'
import App from 'pages/App.vue'
import { connect } from './util/ws'
import 'vuetify/dist/vuetify.min.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

if (frontendData.profile) {
    connect()
}

Vue.use(Vuetify)

new Vue({
    vuetify : new Vuetify(),
    el: '#app',
    render: a => a(App)
})

// new Vue({
//     vuetify,
// }).$mount('#app')

// function getIndex(list, id) {
//     for(var i = 0; i < list.lenght; ++i) {
//         if(list[i].id === id)
//             return i;
//     }
//     return -1;
// }
//
// var messageApi = Vue.resource('/message{/id}');
//
// Vue.component('messages-list', {
//     props: {
//         messages: Array
//     },
//     data: function() {
//         return {
//             message_id: 0,
//             message_text: ''
//         }
//     },
//
//     template:
//         '<div style="position: relative; width: 300px;">' +
//         '<div>' +
//         '<input type="text" :placeholder="message_id" v-model="message_text"/>' +
//         '<input type="button" value="Save" @click="save"/>' +
//         '</div>' +
//         '<div v-for="message in messages" :key="message.id">' +
//         '<i>({{ message.id }})</i> {{ message.text }}' +
//         '<span style="position: absolute; right: 0">' +
//         '<input type="button" value="Edit" @click="edit(message)"/>' +
//         '<input type="button" value="X" @click="del(message)" />' +
//         '</span>' +
//         '</div>' +
//         '</div>',
//
//     methods: {
//         save: function() {
//             if(this.message_id === 0) {
//                 messageApi.save({}, { text: this.message_text }).then(result =>
//                     result.json().then(data => {
//                         this.messages.push(data);
//                         this.message_id = 0;
//                         this.message_text = '';
//                     })
//                 );
//             } else {
//                 messageApi.update({ id: this.message_id }, { text: this.message_text }).then(result =>
//                     result.json().then(data => {
//                         var index = getIndex(this.messages, data.id);
//                         this.messages.splice(index, 1, data);
//                         this.message_id = 0;
//                         this.message_text = '';
//                     })
//                 );
//             }
//         },
//
//         edit: function(message) {
//             this.message_id = message.id;
//             this.message_text = message.text;
//         },
//
//         del: function(message) {
//             messageApi.remove({ id: message.id }).then(result => {
//                 if(result.ok) {
//                     this.messages.splice(this.messages.indexOf(message), 1);
//                     this.message_id = 0;
//                     this.message_text = '';
//                 }
//             });
//         }
//     },
// });
//
//
//
// var app = new Vue({
//     el: '#app',
//     template:
//         '<div>' +
//             '<div v-if="!profile">Необходимо авторизоваться черех <a href="/login">Google</a></div>' +
//             '<div v-else>' +
//                 '<div>{{profile.name}}&nbsp;<a href="/logout">Выйти</a> </div>' +
//                 '<messages-list :messages="messages" />' +
//             '</div>' +
//         '</div>',
//     data: {
//         messages: frontendData.messages,
//         profile: frontendData.profile
//     },
// });
//
//
// Vue.component('message-row', {
//     props: ['message', 'editMethod', 'messages'],
//     template: '<div>' +
//         '<i>({{ message.id }})</i> {{ message.text }}' +
//         '<span style="position: absolute; right: 0">' +
//         '<input type="button" value="Edit" @click="edit" />' +
//         '<input type="button" value="X" @click="del" />' +
//         '</span>' +
//         '</div>',
//     methods: {
//         edit: function() {
//             this.editMethod(this.message);
//         },
//         del: function() {
//             messageApi.remove({id: this.message.id}).then(result => {
//                 if (result.ok) {
//                     this.messages.splice(this.messages.indexOf(this.message), 1)
//                 }
//             })
//         }
//     }
// });