function extractFile(path) {

    let pathData = path.split('\\');
    let fileData = pathData.pop();

    let lastDotIdx = fileData.lastIndexOf('.');
    let fileName = fileData.substring(0, lastDotIdx);
    let extension = fileData.substring(lastDotIdx + 1, fileData.length);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');