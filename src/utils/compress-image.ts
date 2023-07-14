const compressImage = async (
  file: File,
  callback: BlobCallback,
  quality = 1
) => {
  const imageBitmap = await createImageBitmap(file);
  const canvas = document.createElement("canvas");
  canvas.width = imageBitmap.width;
  canvas.height = imageBitmap.height;
  const ctx = canvas.getContext("2d");
  if (ctx) ctx.drawImage(imageBitmap, 0, 0);
  canvas.toBlob(callback, "image/webp", quality);
};
export default compressImage;
