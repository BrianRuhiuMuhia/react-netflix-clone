import tv from "../images/tv.png"
import imageOne from "../images/mobile-0819.jpg"
import imageTwo from "../images/device-pile-ke.png"
import imageThree from "../images/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png"
import Modals from "./Modals"
export default function Main()
{
    return (
            <div
            className="main">
<div className="main-image border">
<div className="main-image-content">
    <h1>Unlimited movies, TV shows, and more</h1>
    <h3>Watch anywhere. Cancel anytime.</h3>
    <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
    <div className="input-box">
        <input placeholder="Email address" className="input"></input>
        <button className="btn main-image-btn">Get Started</button>
    </div>
</div>

</div>
<div className="main-content">
<div className="content border">
    <div class="content-para"><h1 className="content-head">Enjoy on your TV</h1><h3 className="content-body">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3></div>
    <img src={tv} className="content-image"></img>
</div>
<div className="content border">
    <div>
    <img src={imageOne} className="content-image"></img>
    </div>
    <div class="content-para"><h1 className="content-head">Download your shows to watch offline</h1><h3 className="content-body">Save your favorites easily and always have something to watch.</h3></div>
  
</div>
<div className="content border">
    <div class="content-para"><h1 className="content-head">Watch everywhere</h1><h3 className="content-body">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3></div>
    <div>
    <img src={imageTwo} className="content-image"></img>
    </div>
</div>
<div className="content border">
    <img src={imageThree} className="content-image"></img>
    <div class="content-para"><h1 className="content-head">Create profiles for kids</h1><h3 className="content-body">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3></div>
    <div>
    </div>
</div>
</div>     
<Modals/>
            </div>
    )
}