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
  if (file_name == "lecture.json") {
    root = "lecture";
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
      output += `<h6>
      <p>
          <a href="${k.url}" target="_blank">
            관련링크
          </a>
      </p>
    </h6>`;
    }
    output += `<div id="page-blank-wrapper"></div>`;
  }
  output += `</div></br></br></br></br></br>`;
  return output;
}

lecture_content = content_write("lecture.json");

console.log(lecture_content);
