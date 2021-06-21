
function navToSection(section) {
    
    var section = document.getElementById(section);
    window.scrollTo(0, section.getBoundingClientRect().top)
};


