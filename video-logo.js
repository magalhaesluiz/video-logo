document.addEventListener("DOMContentLoaded", function() {
    var video = document.createElement("video");
    video.id = "videoLogo";
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.width = 458;
    video.height = 815;
    video.poster = "https://storage.chat24.io/companies/company_54608/messages/2025-8/986dc43eaf64a01dcae8_name_aW1hZ2UucG5n_.png";
    video.style.border = "none";
    video.style.outline = "none";
    video.style.background = "transparent";
    video.style.display = "none";
    video.style.margin = "0";
    video.style.padding = "0";

    var source = document.createElement("source");
    source.src = "https://storage.chat24.io/companies/company_54608/messages/2025-8/3a22c8951872ea566fc3_name_bW90aW9uIGxvZ28gdW5pcW8ubXA0_.mp4";
    source.type = "video/mp4";
    video.appendChild(source);

    video.oncanplaythrough = function() {
        video.style.display = "block";
    };

    document.body.appendChild(video);
});
