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

export const deleteComment = (id) =>{
    let oldList = store.getState().foro;
    for (let i in oldList)
        if (oldList[i].id == id) {
            oldList.splice(i , 1);
        }

}