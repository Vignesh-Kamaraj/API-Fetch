const form = document.createElement("form");
const header = document.createElement("header");
const section = document.createElement("section");
header.setAttribute("class", "navbar");
header.innerHTML = "Users List";
form.append(header, section);
document.body.append(form);

async function userdata() {
  try {
    const list = await fetch(" https://jsonplaceholder.typicode.com/users");
    const user = await list.json();
    for (var i = 0; i < user.length; i++) {
      const div = document.createElement("div");
      div.innerHTML = `
            <div class="card">
                <h4 class="card-title">Name: ${user[i].name}</h4>
                <p class="card-text">Email: ${user[i].email}</p>
                <p class="card-text"> Street: ${user[i].address.street}</p>
                <p class="card-text">City: ${user[i].address.city}</p>
              </div>`;
      section.append(div);
    }
  } catch (error) {
    console.log(error);
  }
}
userdata();
