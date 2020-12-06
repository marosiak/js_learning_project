class BoardObject {
    title: string;
    created_at: number;
    updated_at: number;

    constructor(title: string) {
        this.title = title;
        this.created_at = Date.now();
        this.updated_at = null;
    }

    modified = () => this.updated_at = Date.now()
}


class BasicNote extends BoardObject {
    body: string;

    constructor(title: string, body: string) {
        super(title);
        this.body = body;
    }
}