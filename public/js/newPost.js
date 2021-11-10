const formEl = document.getElementById('new-post');
const titleEl = document.getElementById('blogtitle');
const textEl = document.getElementById('blogtext');
const idEl = document.getElementById('submit')

async function submitFormHandler(event){
    event.preventDefault();
    const title = titleEl.value;
    const text = textEl.value;
    const id = idEl.getAttribute('data-userid')
    
    await fetch('/api/blog',
    {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title: title,
    text:text,
  user_id: id})})
  .then(response => response.json())
  .then(data => {console.log(data)
  window.location.reload()});
}


formEl.addEventListener('submit',submitFormHandler)