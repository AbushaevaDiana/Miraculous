export function loadFile(callback: (object: any) => void) {
    const inputFile = document.createElement("input");
    inputFile.type = "file";
    inputFile.click();
    inputFile.addEventListener("change", () => {
      const file = inputFile.files?.[0] as File;

      fetch(window.URL.createObjectURL(file))
        .then((response) => response.json())
        .then((json) => {
          callback(json);
        });
    });
}