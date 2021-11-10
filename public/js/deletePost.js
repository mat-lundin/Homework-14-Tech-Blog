const delBtn = document.getElementById('delete')

async function deleteBtnHandler(event){
    event.preventDefault();
    const id = delBtn.getAttribute('data-blogid')
    
    await fetch(`/api/${id}`,
    {
    method: 'DELETE',
    })
  .then(response => response.json())
  .then(data => {console.log(data)
  window.location.reload()});
}


delBtn.addEventListener('click',deleteBtnHandler)