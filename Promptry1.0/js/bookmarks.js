const bookmarks = document.getElementById("bookmark-panel");

const data = {
  Chatgpt: {
    url: "https://chatgpt.com/ja-JP/",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/81/2a/6c/812a6c80-0247-4e97-6fad-d5cf0d2102b6/Placeholder.mill/400x400bb-75.webp"
  },
  YouTube: {
    url: "https://www.youtube.com/?app=desktop&hl=ja",
    icon: "https://youtube.com/favicon.ico"
  },
  G_Drive:{
    url: "https://drive.google.com/drive/home",
    icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1280px-Google_Drive_icon_%282020%29.svg.png"
  },
  Office365:{
    url:"https://www.office.com/?omkt=ja-JP",
    icon:"https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/cd/4b/83/cd4b8353-291b-ec5a-9422-d9b8afe7e989/Placeholder.mill/400x400bb-75.webp"
  },
  Monaca:{
    url:"https://console.monaca.education/dashboard",
    icon:"https://play-lh.googleusercontent.com/VoJzxmqXQ8iMP_arutIHdfE7FWbr7Vsz6A2sV4_0VLmtodYTzNzSXBfNHOUCRecy2A=w480-h960-rw"
  },
  Expless:{
    url:"https://new.express.adobe.com/",
    icon:"https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d6/03/3c/d6033c62-f5f2-fc10-05f0-aa260c131cf5/AppIconSpark-0-1x_U007emarketing-0-8-0-0-85-220-0.png/400x400ia-75.webp"
  },
  Github:{
    url:"https://github.com/dashboard",
    icon:"https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9b/d0/93/9bd0932a-896c-2e4b-9fc9-9832f60abcc2/Placeholder.mill/400x400bb-75.webp"
  }
};

function addBookmark() {
  const keys = Object.keys(data);

  keys.forEach(key => {
    const url = data[key].url;
    const fallbackicon = data[key].icon;

    const domain = new URL(url).hostname;
    const favicon =
      "https://www.google.com/s2/favicons?sz=64&domain=" + domain;

    const item = document.createElement("div");
    item.className = "bookmark-item";

    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";

    const img = document.createElement("img");
    img.src = favicon;
      img.onload = () => {
        if (img.naturalWidth <= 31) {
        img.src = fallbackicon;
      }
    };

    const text = document.createElement("span");
    text.textContent = key;

    a.appendChild(img);
    a.appendChild(text);
    item.appendChild(a);
    bookmarks.appendChild(item);
  });
}

addBookmark();
