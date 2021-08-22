import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 42},
                {id: 2, message: 'It\'s my first post', likesCount: 24},
                {id: 3, message: '42', likesCount: 12},
                {id: 4, message: 'My new post', likesCount: 0}
            ],
            newPostText: 'samurai'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you doing in business'},
                {id: 3, message: 'Hey'},
                {id: 4, message: 'Hola'},
                {id: 5, message: 'Ahoj'},
            ],
            dialogs: [
                {id: 1, name: 'Dmitriy'},
                {id: 2, name: 'Konstantin'},
                {id: 3, name: 'Nastya'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Maxim'},
                {id: 6, name: 'Vladilen'}
            ],
            newMessageBody: ""
        },
        sidebar: [
            {photo: require("./../../src/components/img/woman.svg")},
            {photo: require("./../../src/components/img/man.svg")},
            {photo: require("./../../src/components/img/girl.svg")}
        ]
    },
    _callSubscriber() {
        console.log('State has changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {          // { type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}





export default store
window.store = store