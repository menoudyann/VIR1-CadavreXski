document.addEventListener("DOMContentLoaded", function(){
    var inPhrase = document.getElementById("inPhrase");
    var btnSubmitPhrase = document.getElementById("btnSubmitPhrase");
    var btnRefresh = document.getElementById("btnRefresh")
    var selectLang = document.getElementById("selectLang");

    let language = navigator.language || navigator.userLanguage;
    translate(language.substr(0, 2));

    // Set selected value according to navigator language
    for (var i = 0; i < selectLang.options.length; i++) {
        if (selectLang.options[i].value === language.substr(0, 2)) {
            selectLang.options[i].selected = true;
            break;
        }
    }

    inPhrase.focus();
    inPhrase.select();

    selectLang.addEventListener("change", function(){
        translate(selectLang.value);
    });

    btnSubmitPhrase.addEventListener("click", function(){
        addPhrase(inPhrase.value);
        inPhrase.value = "";
        inPhrase.focus();
        inPhrase.select();
    })

    btnRefresh.addEventListener("click", function(){
        resetPhrases();
    })
})

function addPhrase(phrases){
    // redirect to store route with phrase en POST
    fetch("phrases", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({phrase: phrases})
    })
    .then(response => response.json())
    .then(response => {
        var divPhrases = document.getElementById("divPhrases");
        divPhrases.textContent += response.phrase + " ";
    })
    .catch(err => console.log(err))
}

function resetPhrases(){
    // redirect to destroy route
    fetch("phrases/destroy", {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(response => {
        var divPhrases = document.getElementById("divPhrases");
        divPhrases.textContent = "";
    })
    .catch(err => console.log(err))
}

function translate(lang){
    var langFile = "/assets/lang/" + lang + ".json";
    var defaultLangFile = "assets/lang/en.json";
    var langData = null;
    var xhr = new XMLHttpRequest();

    xhr.open("GET", langFile, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200){
            langData = JSON.parse(xhr.responseText);
            document.getElementById("btnSubmitPhrase").textContent = langData.submit;
            document.getElementById("btnRefresh").textContent = langData.refresh;
            document.getElementById("lblPhrase").textContent = langData.labelPhrase;
            document.getElementById("pAuthors").textContent = langData.title;
            document.getElementById("inPhrase").placeholder = langData.input;
            document.getElementById("lblInsertedPhrases").textContent = langData.labelInserted;
            document.getElementById("pCopyright").textContent = langData.labelCopyright;
    }else if (xhr.readyState == 4 && xhr.status == 404) {
            xhr.open("GET", defaultLangFile, true);
            xhr.send();
        }
    }
    xhr.send();
}

