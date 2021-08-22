const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you doing in business'},
        {id: 3, message: 'Hey'},
        {id: 4, message: 'Hola'},
        {id: 5, message: 'Ahoj'},
    ],
    dialogs: [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Kostya'},
        {id: 3, name: 'Nastya'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Maxim'},
        {id: 6, name: 'Vladilen'}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return  {
                ...state,
                newMessageBody:  '',
                messages: [...state.messages, {id: 6, message: body} ]
            }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer