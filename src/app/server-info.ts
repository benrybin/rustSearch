export class ServerInfo {
    name: string;
    rust_headerimage: string;
    players: number;
    rust_last_wipe: Number;
    rust_description: string;
    tags: string[]; 
    constructor(name:string,header:string,currentplayercount:number,description:string,tags:string[]){
        this.name = name;
        this.rust_headerimage = header;
        this.players=currentplayercount;
        this.tags = tags; 
        this.rust_description=description;

    };
}
