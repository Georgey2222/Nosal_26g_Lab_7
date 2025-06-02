import React from "react";
function Header()
{
    return(
        <header>
        <div>
            Bookva
        </div>
        <nav>
            <a href="./goods.html">
                <img src="/magnifier_glass.png"/>
            </a>
            <a>
                <img src="/profile.png"/>
            </a>
            <a href="./cart.html">
                <img src="/cart.png"/>
            </a>
        </nav>
    </header>   
    )
}
export default Header;