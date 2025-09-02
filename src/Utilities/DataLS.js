const loadDataLS = () => {
  const data = localStorage.getItem("cart");
  if (!data) {
    return [];
  } else {
    const dataObj = JSON.parse(data);
    return dataObj;
  }
};

export { loadDataLS };
