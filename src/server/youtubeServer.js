export default class YoutubeServer{ //api 호출 함수를 모아둔 경우 , Repository라고 네이밍하면 좋습니다.
    constructor(youtube) {
        this.getServer = {
            key: youtube
        }
    }

    

    videoStart = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          console.log(this.getServer.key);
           const result = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.getServer.key}`, requestOptions)
          .then(response => response.text())
          .then(result => result)
          .catch(error => console.log('error', error));
          const items = JSON.parse(result).items.map((item) => item);
          return items;
      }
    
      btsStart = async () => {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
           const result = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=bts&type=video&key=${this.getServer.key}`, requestOptions)
          .then(response => response.text())
          .then(result => result)
          .catch(error => console.log('error', error));
          const items = JSON.parse(result).items.map((item) => item);
          return items;
      }
}