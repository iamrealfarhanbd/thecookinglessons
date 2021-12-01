import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'


const Layout = ({children}) => {
    return (
        <div>
            <Head>
                <meta charset="utf-8" />
                <meta http-equiv="x-ua-compatible" content="ie=edge" />
                <title>MaxCoach - Online Learning and Education Bootstrap 4 Template</title>
                <meta name="robots" content="noindex, follow" />
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png" />
                <link rel="stylesheet" href="assets/css/vendor/vendor.min.css" />
                <link rel="stylesheet" href="assets/css/plugins/plugins.min.css" />
                <link rel="stylesheet" href="assets/css/style.min.css" />
                <script src="assets/js/vendor/vendor.min.js"></script>
                <script src="assets/js/plugins/plugins.min.js"></script>
                <script src="assets/js/main.js"></script>
            </Head>
            <Header>

            </Header>

            {children}
            <Footer/>

        </div>
    )
}

export default Layout
