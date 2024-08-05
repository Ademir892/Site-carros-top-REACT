import './styles.css';
import Header from "../../components/Header";
import SearchBar from '../../components/Header/SearchBar';
import Card from '../../components/Header/Card';

export default function Catalog() {
  return (
    <>
        <Header />
        <main className='ct-catalog-main'>
            <section id="ct-catalog-section" className='ct-container'>
                <div className="ct-serach-bar-container">
                    <SearchBar />
                </div>

                <div className="ct-catalog-cards-container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
        </main>
    </>
  );
}
