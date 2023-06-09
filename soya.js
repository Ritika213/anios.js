// GET REQUEST
function getTodos() {
  axios ({
    method : 'get',
    url:'http://jsonplaceholder.typicode.com/todos'
  })
  .then(res=>console.log(res))
  .catch(err=>console.error(err));

}

// POST REQUEST
function addTodo() {
  axios ({
    method : 'get',
    url:'http://jsonplaceholder.typicode.com/todos',prarams:{
      limit:5
    }
     })
  .then(res=>showOutput(res))
  .catch(err=>console.error(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios 
  .post('http://jsonplaceholder.typicode.com/todos',{
 title:'updated todo',
      completed :false,
  
     })
  .then(res=>showOutput(res))
  .catch(err=>console.error(err));

}

// DELETE REQUEST
function removeTodo(){
  axios
  
  .delete ('http://jsonplaceholder.typicode.com/todos'/1)
  

  .then(res=>showOutput(res))
  .catch(err=>console.error(err));


}

// SIMULTANEOUS DATA
function getData() {
  axios.all([
    axios.get('http://jsonplaceholder.typicode.com/todos'),
    axios.get('http://jsonplaceholder.typicode.com/posts')
  ])
  .then(res=>{
    console.log(res[0]);
    console.log(res[1]);
    showOutput(res[1]);
  })
  .catch(err=>console.log.error(err));
}

// CUSTOM HEADERS
function customHeaders() {
  const config={
    header:{
      'Content-Type':'application/json',
    Authorization : 'sometoken'
    }
  }
  axios
  .post('http://jsonplaceholder.typicode.com/todos',{
    title : 'New Todo',
    completed : false
},config)
.then(res=>showOutput(res))
.catch(err=>console.error(err))
  console.log('Custom Headers');
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const option={
    method : 'post',
    URL : 'http://jsonplaceholder.typicode.com/todos',
    data : {
      title: 'Hellow World'
    },
    transformResponse: axios.defaults.transformResponse.cancel(data=>{
      data.title=data.title.toUpperCase();
      return data;
    })
      
    }
  axios(option).then(res=>showOutput(res));
}

// ERROR HANDLING
function errorHandling() {
   axios
  .get('http://jsonplaceholder.typicode.com/todos')
  .then(res=> showOutput(res))
  .catch(err=>{
    if(err.response){
      console.log(err.response.data);
        console.log(err.response.status);
          console.log(err.response.header);
          if(err.response.status===404){
            alert('Error:page NOT Found');
          }
      } else if(err.request){
        console.error(err.request);

      } else {
        console.error(err.message);
      }

    })
  }

  

// CANCEL TOKEN
function cancelToken() {
  axios
  .get('http://jsonplaceholder.typicode.com/todos'),{
  cancelToken : SourceBuffer.token
  .then(res=> showOutput(res))
  .catch(thrown=> {
    if(axios.iscancel(thrown)){
      console.log('Request canceled',thrown.message)
 }
}
  )};
  if(true){
    Source.cancel('Request canceled!');
  }
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
