const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
        sectionNum: 1,
        roomNum: "STC 353",
        enrolled: 26,
        days: "TTh",
        instructor: "Bro T"
    },
    {
        sectionNum: 2,
        roomNum: "STC 347",
        enrolled: 28,
        days: "TTh",
        instructor: "Sis A"
    }
  ],
  enrollStudent: function (sectionNum) {
    console.log("sectionNum to enroll in:", sectionNum);
    const theSection = this.sections.find(
      (section)=> sectionNum == section.sectionNum);
      if(theSection) {
        theSection.enrolled++;
        renderSections(this.sections);
      }
  }
};
aCourse.sections[0].instructor
const key = "code";

function setCourseInfo (course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function sectionTemplate (section) {
    return `<tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
        </tr>`
}

function renderSections (sections) {
    const sectionsEl = document.querySelector("#sections");
    const html = sections.map(sectionTemplate)
    sectionsEl.innerHTML = html.join("")
}

setCourseInfo(aCourse);
renderSections(aCourse.sections);


document.querySelector('#enrollStudent').addEventListener("click", ()=>{
  const sectionInput = document.querySelector('#sectionNumber')
  aCourse.enrollStudent(sectionInput.value);
})

// aCourse.name
// aCourse[key]