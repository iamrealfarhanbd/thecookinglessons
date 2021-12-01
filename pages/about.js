import Brand from '../components/Aboutpage/Brand'
import Breadcrumb from '../components/Aboutpage/Breadcrumb'
import Cta from '../components/Aboutpage/Cta'
import Faq from '../components/Aboutpage/Faq'
import Funcfact from '../components/Aboutpage/Funcfact'
import Potentials from '../components/Aboutpage/Potentials'
import Testimonial from '../components/Aboutpage/Testimonial'

const about = () => {
    return (
        <>
            <Breadcrumb />
            <Funcfact />
            <Faq />
            <Testimonial />
            <Brand />
            <Potentials />
            <Cta />
        </>
    )
}

export default about
