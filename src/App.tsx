import React, {useEffect} from 'react';
import Auth from "./pages/authorization/Auth";
import PersonalAccount from "./pages/personal-account/PersonalAccount";
import {AppDispatchType, useAppSelector} from "./store/store";
import {Route, Routes, useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";
import Services from "./pages/personal-account/services/Services";
import Union from "./pages/personal-account/Union/Union";
import Notice from "./pages/personal-account/notifications/Notice";
import Support from "./pages/personal-account/support/Support";
import Docs from "./pages/personal-account/docs/Docs";
import {Profile} from "./pages/personal-account/profile/Profile";
import Faq from "./pages/personal-account/faq/Faq";
import {useDispatch} from "react-redux";
import {getStatus} from "./reducers/authReducer";

function App() {

    const status = useAppSelector<string>(state => state.auth.status)
    const dispatch = useDispatch<AppDispatchType>()
    const navigate = useNavigate()


    useEffect(() => {
        console.log(status)
        if (status === '0') {
            navigate('/account/services')
        }
    }, [status])


    return (
        <div className="App">

            <Routes>
                <Route path='/' element={<Auth/>}/>
                <Route path='/account' element={<PersonalAccount/>}>
                    <Route index element={<Services/>}/>
                    {/*<Route path='/services' element={<Navigate to={"services"}/>}/>*/}
                    <Route path="services" element={<Services/>}/>
                    <Route path="union" element={<Union/>}/>
                    <Route path="notifications" element={<Notice/>}/>
                    <Route path="support" element={<Support/>}/>
                    <Route path="docs" element={<Docs/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="faq" element={<Faq/>}/>
                </Route>


            </Routes>


        </div>
    );
}

export default App;
