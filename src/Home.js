import Header from "./Header";

function Home() {
    return (
        <div>
            <Header/>
            <div className="img_home">
                <img src={require('./image/home.png')} className="img"></img>
            </div>
        </div>
    )
}
export default Home;