function AddItem(){
    var item = document.getElementById("inputItem").value;
    if(item != ""){
        const div = document.createElement('div');

        div.className = 'input-group mb-3 item';
        div.id = id;
        div.innerHTML = `
            <div class="form-check">
            <input class="form-check-input checkbox" type="checkbox" value="" id="flexCheckDefault">
            </div>
            <input type="text" class="form-control itemText"  placeholder="` + item + `" id="`+ id +`" disabled>
            <div class="input-group-append">
                <button class="btn btn-danger" type="button" onclick="DeleteById(`+ id +`)">Delete</button>
            </div>
        `;
        id = id + 1;
        document.getElementById('list').appendChild(div);
        document.getElementById("inputItem").value = "";
    }
}

function DeleteById(id){
    document.getElementById(id).remove();
}

var id = 1;