const clickMe = () => {
  let link = document.getElementById("youtubelink").value;
  console.log(link);
  document.getElementById("buttonApi").src =
    "https://yt2mp3.co/api/button/mp3?url=" + link;
  document.getElementById("button2").src =
    "https://yt2mp3.co/api/single/mp3?url=" + link;
};
