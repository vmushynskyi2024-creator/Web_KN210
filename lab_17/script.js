function toggleDescription(elementId, storageKey) {
    let description = document.getElementById(elementId);
    
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
        localStorage.setItem(storageKey, "open");
        
        let pos = 0;
        let id = setInterval(function() {
            if (pos >= 30) {
                clearInterval(id);
            } else {
                pos += 2;
                description.style.marginLeft = pos + "px";
            }
        }, 5);
        
    } else {
        description.style.display = "none";
        description.style.marginLeft = "0px";
        localStorage.setItem(storageKey, "closed");
    }
}

window.onload = function() {
    let blocks = [
        { id: "desc1", key: "faq1" },
        { id: "desc2", key: "faq2" },
        { id: "desc3", key: "faq3" }
    ];

    for (let block of blocks) {
        let description = document.getElementById(block.id);
        let state = localStorage.getItem(block.key);
        
        if (state === "open") {
            description.style.display = "block";
            description.style.marginLeft = "30px";
        } else {
            description.style.display = "none";
        }
    }
}