abstract class TakePhotos {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void

  getReelTime(): number{
    return 8
  }
}

class TikTok extends TakePhotos{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log('Sepia');
    }
}

const fn = new TikTok('test', 'test', 4)
fn.getReelTime()