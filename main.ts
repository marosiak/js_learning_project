import "./basicNote"
import "./checkList"

class TodoBoard {
    todoList: BoardObject[];

    pushTodo = (todo: BoardObject) => {
        this.todoList.push(todo)
    };

    getNoteByID = (id: number) => this.todoList[id];

    removeTodoByID = (id: number) => {
        // delete this.getNoteByID(id); // Pyt: Dlaczego nie mogę usunąć tego obiektu w ten sposób? // The operand of a delete operator must be a property reference
        delete this.todoList[id];

    };
}


function main() {
    let mainBoard = new TodoBoard();

    let basicTodo = new BasicNote("Prosta notatka", "Lorem ipsum");
    mainBoard.pushTodo(basicTodo);

    let shoppingList = new CheckList("Lista zakupów");
    shoppingList.addCheckPoint(new CheckPoint("Mleko", shoppingList)); // Pyt: Czy muszę tu przekazywać ten checkList? Nie można tego jakoś z automatu wykryć?
    shoppingList.addCheckPoint(new CheckPoint("Jajka", shoppingList));
    shoppingList.addCheckPoint(new CheckPoint("Chipsy", shoppingList));

    shoppingList.getCheckPointByID(0).complete(true);
    shoppingList.getCheckPointByID(2).name = "Chipsy Lays";
    mainBoard.pushTodo(shoppingList);



    // mainBoard.getNoteByID(1). // Pyt. dlaczego tu pokazują mi się tylko metody z bazowej klasy? Chciałym użyć np "completeCheckpoint" z CheckList który dziedziczy BoardObject
}
main();