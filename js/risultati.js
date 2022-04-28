let storedValue = sessionStorage.getItem("date");
console.log(storedValue);

storedValue = sessionStorage.getItem("end-date-title");
console.log(storedValue);


storedValue = sessionStorage.getItem("text");
console.log(storedValue);

/* gestione wrapper */
const mediaQuery = window.matchMedia('(min-width: 650px)')

if (mediaQuery.matches) {
    const node = document.getElementById('wrapper');
    node.replaceWith(node.children[0]);
  }
