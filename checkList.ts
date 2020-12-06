// Pyt: Tu chyba powinien być import basicNote który zawiera BoardObject który jest później dziedziczony? Ale w takim wypadku main.ts nie działa :/
// import "./basicNote"

class CheckPoint {
    name: string;
    finished: boolean;
    parent: CheckList;

    constructor(name: string, parent: CheckList) {
        this.name = name;
        this.finished = false;
        this.parent = parent; // Pyt: Czy jestem w stanie tu wykryć, skąd pochodzi event i automatycznie ustawić parenta?
    }

    private notify = () => {
        let printableName = this.name.slice(0, 15);
        console.log("You've successfully finished the \""+printableName+"\" task!");
    };

    complete = (type: boolean) => {
        this.finished = type;
        this.notify();
        this.parent.modified()
    }
}

class CheckList extends BoardObject {
    checkPoints: CheckPoint[];
    constructor(title: string) {
        super(title);
        this.checkPoints = [];
    }

    getCheckPointByID = (id: number) => {
        return this.checkPoints[id]
    };

    completeCheckpoint = (id: number, status: boolean) => {
      this.checkPoints[id].complete(status)
    };

    addCheckPoint = (pointName: CheckPoint) => {
        this.checkPoints.push(pointName)
    }
}