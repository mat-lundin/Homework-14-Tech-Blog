const blogsection = document.getElementById('blogsection')

async function deleteBtnHandler(event){
    console.log('delete button clicked')
    event.preventDefault();
    if (event.target.matches('.delete') ) {
    const id = event.target.getAttribute('data-blogid')
    
    await fetch(`/api/blog/${id}`,
    {
    method: 'DELETE',
    })
  .then(response => response.json())
  .then(data => {console.log(data)
  window.location.reload()});
}}


blogsection.addEventListener('click',deleteBtnHandler)