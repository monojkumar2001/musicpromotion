const SongFly = ({ data, type = "one" }) => {
    return (
        <div className="songFly">
            <div className="container">
                <div className="songFly-wrapper">
                    <div className="songFly-left">
                        <h1 className="section-title">
                            Reach new heights with SongFly
                        </h1>
                        <div className="songfly-list-item">
                            <div className="songfly-squre"></div>
                            <p>Requires Zero Digital Advertising knowledge</p>
                        </div>
                        <button className="custom-btn">Get Started</button>
                    </div>
                    <div className="songFly-right">
                    <img src="/assets/home-1/img/songfly-img.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default SongFly;