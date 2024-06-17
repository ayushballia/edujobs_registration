import { configureStore } from '@reduxjs/toolkit'
import contactInfoReducer from '@/app/libs/store/features/contactInfo/contactInfoSlice'


export default configureStore({
  reducer: {
    contactInfo: contactInfoReducer,
    
  }
})
