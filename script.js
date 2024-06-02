document.addEventListener("DOMContentLoaded", () => {
    const projectContents = document.querySelectorAll(".project-content");
    const projectImage = document.getElementById("project-image");

    projectContents.forEach((content) => {
        content.addEventListener("click", () => {
            projectContents.forEach((c) => c.classList.remove("active"));
            content.classList.add("active");
            console.log("content", content);
            const imageSrc = content.getAttribute("data-image");
            projectImage.src = imageSrc;
        });
    });
});
