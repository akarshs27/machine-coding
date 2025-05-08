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
    const filteredItems = tree.items
      .map((item) => deleteNode(item, id))
      .filter((item) => item !== null);

    if (tree.id === id) {
      return null;
    }

    return {
      ...tree,
      items: filteredItems,
    };
  }

  return {
    insertNode,
    deleteNode,
  };
}
