import "../Control/Slider.css"
export default function Control() {

    return (
        <div className="slidecontainer">
            <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />

        </div>
    );
}