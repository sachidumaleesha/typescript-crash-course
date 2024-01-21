interface TakePhoto{
    cameraMode: string
    filter: string
    burst: string
}

interface Story{
    createStory(): void
}

class Instagram implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: string
    ){}
}

class YouTube implements TakePhoto, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: string
    ){}

    createStory(): void {
        
    }
}