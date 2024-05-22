export function loadImageAsync(url) {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.src = url;

    image.onload = function () {
      resolve(url);
    };

    image.onerror = function () {
      reject(new Error("Could not load image at" + url));
    };
  });
}
