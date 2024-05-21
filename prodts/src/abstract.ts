abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
    abstract getSepia(): void
    getReelTime(): number {
        return -1;
    }
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode,filter);
    }
    getSepia(): void {
        console.log("sepia");
    }
}

const hz = new Instagram("front","bnw",21);
