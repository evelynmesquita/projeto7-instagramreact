import Corpo from "./components/Corpo";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <div class="root">
            <div class="navbar">
                <Navbar/>
            </div>

            <Corpo/>
            
        </div>
    )

}