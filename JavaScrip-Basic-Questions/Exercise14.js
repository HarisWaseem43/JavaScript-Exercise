function getFilenameExtension(filename) {
  const dotIndex = filename.lastIndexOf(".");

  if (dotIndex === -1 || dotIndex === 0 || dotIndex === filename.length - 1) {
    return "There is no filename Extension";
  }

  const extension = filename.substring(dotIndex + 1);

  return extension;
}
const filename1 = "www.youtube.com";
console.log(
  `The Extension of this ${filename1} is ${getFilenameExtension(filename1)}`
);
const filename2 = "www.facebook.com";
console.log(
  `The Extension of this ${filename2} is ${getFilenameExtension(filename2)}`
);
const filename3 = "www.instagram.com";
console.log(
  `The Extension of this ${filename3} is ${getFilenameExtension(filename3)}`
);
const filename4 = "linkedin";
console.log(
  `The Extension of this ${filename4} is ${getFilenameExtension(filename4)}`
);
