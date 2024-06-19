import { configureStore } from '@reduxjs/toolkit'
import contactInfoReducer from '@/app/libs/store/features/contactInfo/contactInfoSlice'
import institutionDetails from '@/app/libs/store/features/institutionDetails/institutionDetailsSlice'
import verificationSlice from './features/verification/verificationSlice'


export default configureStore({
  reducer: {
    contactInfo: contactInfoReducer,
    institutionDetails: institutionDetails,
    verification: verificationSlice
    
  }
})
