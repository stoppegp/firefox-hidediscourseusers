function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    hideusers: document.querySelector("#hideusers").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#hideusers").value = result.hideusers || "";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get(["hideusers"]);
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
