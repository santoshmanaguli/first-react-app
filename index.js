function Navbar(){
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

function Body(){
    return(
        <div style={{padding: '20px', backgroundColor: '#33373E', borderRadius: '30px', margin: '20px'}}>
            <div style={{margin: '0px'}}>
                <h1 style={{textAlign: 'start', color: '#FFFFFF', fontSize: '40px'}}>
                    <b>
                        Fun facts about React
                    </b>
                </h1>
                <ul style={{color: '#FFFFFF', fontSize: '18px'}}>
                    <li>
                        Was first released in 2013
                    </li>
                    <br />
                    <li>
                        Was originally created by Jordan Walke
                    </li>
                    <br />
                    <li>
                        Has over 200k Stars on Github
                    </li>
                    <br />
                    <li>
                        Powers hundreds of application
                    </li>
                </ul>
            </div>
        </div>
    )
}


ReactDOM.render(
    <div>
        <Navbar />
        <Body />
    </div>
    ,
    document.getElementById('root')); 