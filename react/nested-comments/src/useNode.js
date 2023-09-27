export function useNode() {
  function insertNode(tree, commentId, item) {
    if (tree.id === commentId) {
      tree.items.push({
        id: Date.now(),
        name: item,
        items: [],
      });
      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((each) => insertNode(each, commentId, item));
    return { ...tree, items: latestNode };
  }

  function deleteNode(tree, commentId) {
    for (let i = 0; i < tree.items.length; i++) {
      let currentItem = tree.items[i];
      console.log("currentItem", currentItem);
      if (currentItem.id === commentId) {
        console.log("Going here");
        tree.items.splice(i, 1);
        console.log("Tree", tree);
        return tree;
      } else {
        deleteNode(currentItem, commentId);
      }
    }
  }

  return {
    insertNode,
    deleteNode,
  };
}
