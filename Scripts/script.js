// JavaScript code for pagination
document.addEventListener("DOMContentLoaded", function() {
  const blogItems = document.getElementsByClassName("blog-item");
  const itemsPerPage = 5;
  const totalPages = Math.ceil(blogItems.length / itemsPerPage);

  let currentPage = 1;

  function showPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = 0; i < blogItems.length; i++) {
      if (i >= startIndex && i < endIndex) {
        blogItems[i].style.display = "block";
      } else {
        blogItems[i].style.display = "none";
      }
    }
  }

  function createPaginationLinks() {
    const pagination = document.getElementById("pagination");

    // Add "Previous" link
    const previousLink = document.createElement("li");
    previousLink.classList.add("page-item");
    previousLink.innerHTML = '<a class="page-link" href="#">Previous</a>';
    previousLink.addEventListener("click", function() {
      if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
      }
    });
    pagination.appendChild(previousLink);

    // Add page links
    for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement("li");
      pageLink.classList.add("page-item");
      pageLink.innerHTML = `<a class="page-link" href="#">${i}</a>`;
      pageLink.addEventListener("click", function() {
        currentPage = i;
        showPage(currentPage);
      });
      pagination.appendChild(pageLink);
    }

    // Add "Next" link
    const nextLink = document.createElement("li");
    nextLink.classList.add("page-item");
    nextLink.innerHTML = '<a class="page-link" href="#">Next</a>';
    nextLink.addEventListener("click", function() {
      if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
      }
    });
    pagination.appendChild(nextLink);
  }

  showPage(currentPage);
  createPaginationLinks();
});

