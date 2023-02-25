export default function Navbar(){
    return(
        <div>
            <div style={{display: 'flex', alignItems: 'center', backgroundColor: '#21222A', borderRadius: '30px', margin: '20px'}}>
                <div style={{padding: '10px', color: '#00D8FF', display: 'flex'}}>
                    <img src="../images/download.svg" alt="react icon" style={{height: '45px', marginTop: '17px', paddingLeft: '10px'}} />
                    <h1 style={{paddingLeft: '10px'}}>
                        <b>
                            ReactFacts
                        </b>
                    </h1>
                </div>
                <div style={{display: 'flex', margin: 'auto', marginRight: '20px'}}>
                    <h3 style={{color: '#FFFFFF'}}>
                        React Course - Project 1
                    </h3>
                </div>
            </div>
        </div>
    )
}