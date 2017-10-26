import createStore from 'redux-zero';

const FORO = [
    {
        id: 0,
        name: 'Rita',
        comment: 'Hey there arrendek, I have a new install of Firefox (well, a new install of Windows, actually). Happy to test out your script if you think it is ready for release.'
     },
     {
        id: 1,
        name: 'Melania',
        comment: 'Your styles should work together according to CSS cascade rules. If you provide the full code of your global style and some examples of stuff it is overriding, I can be more specific.'
     },
     {
        id: 2,
        name: 'Arich-jos',
        comment: 'Ok, thanks. I found that I had an copy/paste error in the site-specific CSS that was mimicking the global CSS, making me think the global was running things.'
     }
];

const initialState = {
   foro: FORO,
   selectedTodo: -1
};

const store = createStore(initialState);
export default store;