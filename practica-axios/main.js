const API_URL = "https://jsonplaceholder.typicode.com/todos";
const todo = {
    title: "Repasando con Sofía",
    completed: false,
};
// GET REQUEST
function getTodos() {
    axios
        .get(API_URL)
        .then((res) => showOutput(res))
        .catch((err) => console.error(err));
}

// POST REQUEST
function addTodo() {
    axios
        .post(API_URL, todo)
        .then((res) => showOutput(res))
        .catch((err) => console.error(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
    axios
        .put(API_URL + "/3", {
            title: "post updated",
            completed: true,
        })
        .then((res) => showOutput(res))
        .catch((err) => console.error(err));
}

// DELETE REQUEST
function removeTodo() {
    axios
        .delete(API_URL + "/3")
        .then((res) => showOutput(res))
        .catch((err) => console.error(err));
}

// <pre>${JSON.stringify(res.data, ["title"], 2)}</pre>
// Show output in browser
function showOutput(res) {
    document.getElementById("res").innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  `;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);