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

  return {
    insertNode,
  };
}
