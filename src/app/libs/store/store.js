import { configureStore } from '@reduxjs/toolkit'
import contactInfoReducer from '@/app/libs/store/features/contactInfo/contactInfoSlice'
import institutionDetails from '@/app/libs/store/features/institutionDetails/institutionDetailsSlice'


export default configureStore({
  reducer: {
    contactInfo: contactInfoReducer,
    institutionDetails: institutionDetails,
    
  }
})
