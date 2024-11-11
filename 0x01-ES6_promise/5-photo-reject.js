export default function uploadPhoto(fileName) {
  return new Promise((res, reject) => {
    reject(new Error(`${fileName} cannot be processed`));
    res();
  });
}
