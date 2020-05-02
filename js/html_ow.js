function content_write(file_name) {
  let root = "";
  if (file_name == "ux.json") {
    root = "ux";
  }
  if (file_name == "data.json") {
    root = "data";
  }
  if (file_name == "publication.json") {
    root = "publication";
  }
  const fs = require("fs");
  jsonData = fs.readFileSync(file_name);
  const data = JSON.parse(jsonData);
  output = "";
  for (let i = 0; i < data.length; i++) {
    k = data[i];
    output += '<div><div class="project-content"></div>';
    if (k.video_name) {
      output += `<video src= "${root}/${k.video_name}" `;
      if (k.video_poster) {
        output += `poster = "${root}/${k.video_poster}" `;
      }
      output += `controls muted></video>`;
    }
    if (k.photo_name) {
      output += ` <img class= "page-image" src="${root}/${k.photo_name}"></img>`;
    }
    output += `<div id="text-content">
    <h3>${k.title}</h3>
    <h4>${k.term}</h4>
    <h4>
    ${k.summary}
    </h4>`;
    if (k.url) {
      output += `<h5>
      <p>
          <a href="${k.url}" target="_blank">
            관련링크
          </a>
      </p>
    </h5>`;
    }
    output += `<h6 id="show">
    <p><a href="${root}/${k.pdf_name}" target="_blank">pdf 보기</a></p>
</h6>`;
    output += `<div id="page-blank-wrapper"></div>`;
  }
  output += `</div></br></br></br></br></br>`;
  return output;
}

UX_PJ_content = content_write("ux.json");
data_PJ_content = content_write("data.json");
publication_content = content_write("publication.json");

console.log(publication_content);
