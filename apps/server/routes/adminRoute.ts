import express from 'express'
import { addDoctor, loginAdmin } from '../controllers/adminController'
import upload from '../middlewares/multer'

const adminRouter = express.Router()

adminRouter.post('/add-doctor',upload.single('image'),addDoctor)
adminRouter.post('/login',loginAdmin)

export default adminRouter