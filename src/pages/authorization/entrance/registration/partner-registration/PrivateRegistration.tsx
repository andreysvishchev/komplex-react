import React, {useState} from 'react';
import s from './PartnerRegistration.module.scss'
import PersonalInfoForm from "../../../../forms/PersonalInfoForm";
import PassportDataForm from "../../../../forms/PassportDataForm";
import AddressForm from "../../../../forms/AddressForm";


type PropsType = {
    leaveReg: () => void
    setHide: (hide: boolean)=> void
}


const PrivateRegistration = (props: PropsType) => {

    const [page, setPage] = useState(0)
    const stepHeadlines = ['Введите информацию о себе', 'Введите паспортные данные', 'Введите адрес регистрации']

    const nextPage = () => {
        setPage((currPage) => currPage + 1)
    }
    const prevPage = () => {
        setPage((currPage) => currPage - 1)
    }
    const PageDisplay = () => {
        switch (page) {
            case 0:
                return <PersonalInfoForm leaveReg={props.setHide} nextPage={nextPage} registration={true}/>
            case 1:
                return <PassportDataForm nextPage={nextPage} prevPage={prevPage} registration={true}/>
            case 2:
                return <AddressForm prevPage={prevPage} registration={true} lastStep={true}/>
        }
    }


    return (
        <div className={s.wrap}>
            <div className={s.steps}>
                <div className={s.progress}>
                    {
                        stepHeadlines.map((el, i) => {
                            return (
                                <div key={i}
                                     className={i == page ? `${s.active} ${s.progress__item}` : i < page ? `${s.completed} ${s.progress__item}` : s.progress__item}/>
                            )
                        })
                    }
                </div>
                <div className={s.caption}>Физическое лицо</div>
                <div className={s.headline}>{stepHeadlines[page]}</div>
                {PageDisplay()}

            </div>
        </div>
    );
};

export default PrivateRegistration;