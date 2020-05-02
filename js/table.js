function profile(file_name) {
  let root = "";
  if (file_name == "education.json") {
    root = "Education";
  }
  if (file_name == "experience.json") {
    root = "Experience";
  }
  if (file_name == "award.json") {
    root = "Award";
  }
  const fs = require("fs");
  jsonData = fs.readFileSync(file_name);
  const data = JSON.parse(jsonData);
  output = "";
  output += `<h1 style="font-size: 20px; padding-top :100px;">${root}</h1>`;
  output += `<hr size="0.1px"><table class = "meTable"><th></th><th></th>`;
  output += `<colgroup><col width = "75%"><col width = "25%"></colgroup>`;
  for (let i = 0; i < data.length; i++) {
    k = data[i];
    output += `<tr>
            <td>${k.name}</td>
            <td>${k.term}</td>
        </tr>`;
  }
  output += `</table></br></br></br></br>`;
  return output;
}

education_content = profile("education.json");
experience_content = profile("experience.json");
award_content = profile("award.json");

console.log(education_content + experience_content + award_content);
