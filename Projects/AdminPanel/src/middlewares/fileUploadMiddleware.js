import multer from "multer";

const diskStorage = multer.diskStorage({
  filename: (req, file, cb) => {
    const name = Math.random().toString()+"-"+file.originalname
    cb(null, name)
  },
  destination: (req, file, cb) => {
    cb(null, 'Public/Images')
  }
})

export const uploadFile = multer({
  storage: diskStorage
});