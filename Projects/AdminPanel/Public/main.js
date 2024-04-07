const deleteSelectedProduct = (id) => {
  const result = confirm("Are you sure you want to delete this product☠️☠️")
  const url = '/delete/'+id
  if(result) {
    fetch(url, {
      method: 'POST',
    }).then((res) => {
      if(res.ok) {
        location.reload();
      }
    } )
  }
}