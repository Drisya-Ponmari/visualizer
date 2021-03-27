import logo from "../logo.svg"
export default function Home() {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Select your algorithms</h1>
            <div style={{ textAlign: 'center' }}>
                <img src={logo} alt="logo" style={{ height: '600px' }} />
            </div>
        </div>
    )
}