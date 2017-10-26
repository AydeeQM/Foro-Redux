import store from './store';

export const addComment = (name, comment) => {
   let oldList = store.getState().foro;
   const newList = oldList.concat({
      id: oldList.length,
      name: name,
      comment: comment
   });
   store.setState({
      foro: newList
   });

   console.log(newList);
};

  export const removeComment = (index) => {
	const newforoList =  store.getState().foro.filter((item, idx) => idx !== index );
	store.setState({
		foro: newforoList
	})
}