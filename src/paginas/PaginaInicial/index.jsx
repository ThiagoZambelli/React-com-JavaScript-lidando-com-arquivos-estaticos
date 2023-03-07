import Banner from "../../componentes/Banner";
import Cabecalho from "../../componentes/Cabecalho";
import Footer from "../../componentes/Footer";
import Galeria from "../../componentes/Galeria";
import Menu from "../../componentes/Menu";
import Populares from "../../componentes/Populares";
import styles from './PaginaInicial.module.scss'

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
                <div style={{ paddingBottom: '60px' }} className={styles.galeria} >
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Footer />
        </>
    )
}