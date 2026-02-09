const addButton = document.getElementById('add-button');
const inputField = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

//追加ボタンが押された時の処理
addButton.addEventListener('click', () => {
  const taskText = inputField.value;

  if (taskText !== "") {  //空欄でない場合のみ追加
    const li =document.createElement('li');
    li.innerHTML = `
       <span>${taskText}</span>
       <button class="delete-btn">削除</button>
    `;

    //削除ボタンの動作を設定
    li.querySelector('.delete-btn').addEventListener('click', () => {
      li.remove();
    });

    todoList.appendChild(li);
    inputField.value = ""; //入力欄を空にする
  }
})


