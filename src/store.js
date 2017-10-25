import createStore from 'redux-zero';

const FORO = [
    {
        id: 0,
        name: 'Rita',
        comment: 'Learn React'
     }
];

const initialState = {
   foro: FORO,
   selectedTodo: -1
};

const store = createStore(initialState);
export default store;